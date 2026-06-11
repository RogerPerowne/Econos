#!/usr/bin/env node
/* ============================================================
   audit-arrows.mjs — arrow-vs-curve clash candidate finder.

   Renders every chart spec, classifies marker-bearing paths/lines as
   ARROWS and markerless strokes (width >= 1.8, not gridlines/axes) as
   CURVES, then flags any arrow whose INTERIOR crosses a curve. Endpoints
   touching a curve are legitimate (a perpendicular shift arrow anchors
   on a curve), so only interior crossings are reported.

   IMPORTANT: this is a CANDIDATE finder, not a defect list. It renders
   all reveal layers + both Classical/Keynesian perspectives merged into
   one frame, and it cannot tell a misplaced shift arrow from an
   intentional trajectory arrow (e.g. a Phillips-curve A→B→C path that is
   MEANT to cross curves). Every hit must be triaged in-context. Specs
   whose only hits are known-legitimate trajectory arrows are listed in
   TRAJECTORY_OK below so the report stays signal-rich.

   Run: node scripts/audit-arrows.mjs
   ============================================================ */
import { readFileSync, readdirSync } from 'node:fs';
import { join, resolve } from 'node:path';

// Specs whose flagged arrows are intentional trajectory/movement arrows
// (verified in-context), not misplaced shift arrows — suppressed from the
// failing report but still counted. Add with a one-line reason.
const TRAJECTORY_OK = {
  ECONOS_STAGFLATION_PHILLIPS_SPEC: 'A→B→C adjustment path crosses SRPCs by design',
  ECONOS_LABOUR_SUPPLY_SPEC: 'movement-along-the-curve arrow lies on the supply curve by design',
};

const root = process.cwd();
const ppfSrc  = readFileSync(resolve(root, 'js/charts/ppf.js'), 'utf8');
const firmSrc = readFileSync(resolve(root, 'js/charts/firm-model.js'), 'utf8');
const specsDir = resolve(root, 'js/charts/specs');
const files = readdirSync(specsDir).filter(f => f.endsWith('.js')).sort();
const AXIS = new Set(['#334155', '#0b1426', '#94a3b8', '#0f1b2d']);

function flatten(d) {
  const toks = (d.match(/[MLC]|-?[\d.]+/g)) || []; const pts = []; let i = 0, cur = null;
  while (i < toks.length) { const c = toks[i++];
    if (c === 'M') { cur = [+toks[i++], +toks[i++]]; pts.push(cur); }
    else if (c === 'L') { const p = [+toks[i++], +toks[i++]]; pts.push(p); cur = p; }
    else if (c === 'C') { const x1=+toks[i++],y1=+toks[i++],x2=+toks[i++],y2=+toks[i++],x3=+toks[i++],y3=+toks[i++];
      for (let s=1;s<=8;s++){const t=s/8,m=1-t;pts.push([m*m*m*cur[0]+3*m*m*t*x1+3*m*t*t*x2+t*t*t*x3,m*m*m*cur[1]+3*m*m*t*y1+3*m*t*t*y2+t*t*t*y3]);}
      cur=[x3,y3]; }
    else return pts; }
  return pts;
}
function segInt(a,b,c,d){const r=[b[0]-a[0],b[1]-a[1]],s=[d[0]-c[0],d[1]-c[1]];const den=r[0]*s[1]-r[1]*s[0];if(Math.abs(den)<1e-9)return null;const t=((c[0]-a[0])*s[1]-(c[1]-a[1])*s[0])/den,u=((c[0]-a[0])*r[1]-(c[1]-a[1])*r[0])/den;if(t<0||t>1||u<0||u>1)return null;return[a[0]+t*r[0],a[1]+t*r[1]];}
const dist=(p,q)=>Math.hypot(p[0]-q[0],p[1]-q[1]);

const w = { ECONOS_DEV: false };
/* eslint-disable no-new-func */
new Function('window', ppfSrc)(w);
new Function('window', firmSrc)(w);

const findings = [];
for (const file of files) {
  const before = new Set(Object.keys(w).filter(x => /^ECONOS_.*_SPEC$/.test(x)));
  try { new Function('window', readFileSync(join(specsDir, file), 'utf8'))(w); } catch (e) { continue; }
  const fresh = Object.keys(w).filter(x => /^ECONOS_.*_SPEC$/.test(x) && !before.has(x));
  for (const k of fresh) {
    const spec = w[k]; if (!spec || typeof spec !== 'object') continue;
    let svg; try { svg = w.ECONOS_PPF.render(spec); } catch (e) { continue; }
    const els = [...svg.matchAll(/<(path|line)\b([^>]*)\/?>/g)].map(m => ({ tag: m[1], attrs: m[2] }));
    const arrows = [], curves = [];
    for (const e of els) {
      const marker = /marker-(start|end)=/.test(e.attrs);
      const sw = parseFloat((e.attrs.match(/stroke-width="([\d.]+)"/) || [])[1] || '0');
      const stroke = ((e.attrs.match(/stroke="([^"]+)"/) || [])[1] || '').toLowerCase();
      const dashed = /stroke-dasharray=/.test(e.attrs);
      let poly;
      if (e.tag === 'line') { const a = e.attrs; const x1=+(a.match(/x1="([\d.-]+)"/)||[])[1],y1=+(a.match(/y1="([\d.-]+)"/)||[])[1],x2=+(a.match(/x2="([\d.-]+)"/)||[])[1],y2=+(a.match(/y2="([\d.-]+)"/)||[])[1]; if([x1,y1,x2,y2].some(Number.isNaN))continue; poly=[[x1,y1],[x2,y2]]; }
      else { const d=(e.attrs.match(/\bd="([^"]+)"/)||[])[1]; if(!d)continue; poly=flatten(d); if(poly.length<2)continue; }
      if (marker) arrows.push({ poly });
      else if (sw >= 1.8 && !AXIS.has(stroke) && !(dashed && sw < 1.6)) curves.push({ poly, stroke });
    }
    for (const ar of arrows) {
      const a0=ar.poly[0], a1=ar.poly[ar.poly.length-1], alen=dist(a0,a1);
      let flagged=false;
      for (const cv of curves) { if(flagged)break;
        for (let i=0;i<ar.poly.length-1&&!flagged;i++) for (let j=0;j<cv.poly.length-1;j++) {
          const hit=segInt(ar.poly[i],ar.poly[i+1],cv.poly[j],cv.poly[j+1]); if(!hit)continue;
          if (Math.min(dist(hit,a0),dist(hit,a1)) < Math.max(10, alen*0.18)) continue;
          findings.push({ file, spec:k, at:[Math.round(hit[0]),Math.round(hit[1])], stroke:cv.stroke, ok:!!TRAJECTORY_OK[k] }); flagged=true; break;
        }
      }
    }
  }
}
const real = findings.filter(f => !f.ok);
console.log('arrow-clash candidates: ' + findings.length + ' (' + real.length + ' to triage, ' + (findings.length-real.length) + ' known-trajectory)');
const byFile = {}; for (const f of findings) (byFile[f.file]=byFile[f.file]||[]).push(f);
for (const file of Object.keys(byFile)) { console.log('\n' + file);
  for (const f of byFile[file]) console.log('  ' + (f.ok?'· [traj-ok] ':'✗ ') + f.spec + ' — arrow crosses curve(' + f.stroke + ') at [' + f.at + ']'); }
