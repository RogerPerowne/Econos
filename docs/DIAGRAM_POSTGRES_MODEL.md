# EDL → Postgres data model

> Status: **design note**, not yet implemented. EDL is still a browser global
> with the grammar in code. This document records how the engine was shaped so
> that moving the *data* into Postgres later is a migration, not a rewrite — and
> it does not commit to a single table shape, because that choice is still open.

## The core idea: data and guarantees on opposite sides of one seam

An EDL diagram has two halves:

1. **The authored spec** — `{ version, type, intent, curves, show, tax, annotations, … }`.
   This is already plain JSON. Nothing in it is a function, a pixel or a path.
2. **The grammar** — which families exist, which intents belong to them, which
   `show`/annotation tokens are legal, the default axis labels and intent-only
   `show` defaults. Until this branch, that lived as a hardcoded `REGISTRY`
   literal; it is now *derived* from the §FAMILIES descriptor map and dumpable
   as pure JSON via `ECONOS_DIAGRAMS.grammar()`.

Everything that *computes* — solving equilibria, laying out labels, emitting SVG
— stays in the engine, keyed by `family`. So the line is clean:

```
  DATA (can live in Postgres)            CODE (stays in the engine)
  ───────────────────────────            ──────────────────────────
  authored spec  (jsonb)                 template(spec)   — geometry
  grammar()      (reference data)        normalise(spec)  — defaults
  derived        (computed, cacheable)   render pipeline  — layout + SVG
```

`derived` (the solved equilibria/wedges/quantities) is a *function of* the spec
+ engine version. Store it only as a cache, never as a source of truth — it is
reproducible by re-rendering.

## Recommended shape: hybrid (reference tables + `jsonb` body)

This is the pragmatic default. It is queryable where you want to query
(by family, by intent, by spec-point) and flexible where authoring needs to move
fast (the spec body).

```sql
-- ── reference / grammar (seeded from ECONOS_DIAGRAMS.grammar()) ──
create table diagram_family (
  id           text primary key,           -- 'market', 'tax', …
  axis_x       text not null,
  axis_y       text not null
);

create table diagram_intent (
  id           text primary key,           -- 'demand-shift-right'
  family_id    text not null references diagram_family(id),
  default_show text[] not null default '{}'
);

create table diagram_token (                -- show tokens + annotation types
  id           text primary key,
  kind         text not null check (kind in ('show','annotation')),
  family_id    text references diagram_family(id)  -- null = base/global token
);

-- ── authored content ──
create table diagram (
  id           uuid primary key default gen_random_uuid(),
  slug         text unique,
  family_id    text not null references diagram_family(id),
  intent_id    text references diagram_intent(id),
  engine_ver   text not null,              -- EDL version the spec targets
  spec         jsonb not null,             -- the authored EDL spec, verbatim
  derived      jsonb,                      -- cached solve; safe to drop + recompute
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now()
);
create index on diagram (family_id, intent_id);
create index on diagram using gin (spec jsonb_path_ops);
```

Seeding the three reference tables is a straight walk of `grammar()`:

```js
const g = ECONOS_DIAGRAMS.grammar();
for (const [fam, d] of Object.entries(g.families)) {
  insert('diagram_family', { id: fam, axis_x: d.axes.x, axis_y: d.axes.y });
  for (const intent of d.intents)
    insert('diagram_intent', { id: intent, family_id: fam, default_show: d.defaultShow[intent] ?? [] });
  for (const t of d.showTokens) insert('diagram_token', { id: t, kind: 'show', family_id: fam });
}
for (const t of g.showTokens)      upsert('diagram_token', { id: t, kind: 'show' });        // base tokens
for (const t of g.annotationTypes) upsert('diagram_token', { id: t, kind: 'annotation' });
```

## Alternatives (and why they are still reachable)

The refactor does not foreclose either extreme; pick later with real usage data:

- **Document store (simplest).** One `diagram` table, `spec jsonb`, grammar kept
  only in code. Choose this if diagrams are always fetched whole and you never
  query "all tax-incidence diagrams". You lose referential integrity on
  `family`/`intent`; you keep maximum authoring flexibility.
- **Fully normalised (most rigid).** Explode `curves`, `points`, `annotations`,
  `show` into child tables with FKs. Choose this only if a downstream tool must
  query *inside* diagrams relationally (e.g. "every diagram with an `msc`
  curve"). Cost: every renderer read becomes a join + re-assembly, and the
  authoring ergonomics of a single JSON object are gone. The `Scene` model is
  already a normalised, family-agnostic description (curves/points/segments/
  regions/arrows/ticks/callouts), so it is the natural target schema if you ever
  go here — but render from the `spec`, not from the exploded rows.

## Rules that keep the door open

These are the invariants the engine now upholds; keep them as the model evolves.

1. **The spec is the source of truth; `derived` is a cache.** Never write a
   solved coordinate back into the spec. (The linter already rejects raw
   equilibrium coordinates in semantic specs.)
2. **Stable string keys everywhere.** Family ids, intent ids and tokens are
   hyphenated strings used identically in code, spec and (future) DB rows. No
   numeric enums, no per-environment id remapping.
3. **Versioned envelope.** Every spec carries `version` (the EDL schema version)
   and every stored row should carry the `engine_ver` it was authored against,
   so a future engine can migrate or pin old specs.
4. **Grammar changes go through `registerFamily`.** That keeps `grammar()` — and
   therefore any seed/migration — automatically correct. Do not hand-edit the
   derived `registry`.
5. **No functions in stored data.** `grammar()` is guaranteed function-free; the
   authored spec must stay declarative (annotations, not `<svg>`).
