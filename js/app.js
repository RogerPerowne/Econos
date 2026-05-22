/* ============================================================
   ECONOS — app rendering & navigation
   7-card sequence with template-based rendering
   ============================================================ */

(function () {
  const T = window.ECONOS_TOPIC;
  const I = window.ECONOS_ICONS;

  const root = document.getElementById('app-root');
  let currentView = 'intro'; // 'intro' | 0..6

  /* ============================================================
     SHELL (sidebar + topbar)
     ============================================================ */

  function renderShell(inner) {
    return `
      <div class="app">
        ${renderSidebar()}
        <div id="main-content" class="main" tabindex="-1" role="main">
          ${renderTopbar()}
          ${inner}
        </div>
      </div>
    `;
  }

  function renderSidebar() {
    const navItems = [
      { name: 'Home',         icon: I.home,     href: '#', active: false },
      { name: 'My topics',    icon: I.topics,   href: '#', active: true  },
      { name: 'Progress',     icon: I.progress, href: '#', active: false },
      { name: 'Exam practice',icon: I.practice, href: '#', active: false },
      { name: 'Study planner',icon: I.planner,  href: '#', active: false },
      { name: 'Messages',     icon: I.messages, href: '#', active: false },
      { name: 'Settings',     icon: I.settings, href: '#', active: false }
    ];

    return `
      <aside class="sidebar">
        <div class="sidebar__brand">
          <a href="index.html" class="sidebar__logo-link">
            <img src="assets/econos-logo-full.png" alt="econos" class="sidebar__logo-full">
          </a>
        </div>

        <nav class="sidebar__nav">
          ${navItems.map(n => `
            <a href="${n.href}" class="${n.active ? 'is-active' : ''}">
              ${n.icon}
              <span>${n.name}</span>
            </a>
          `).join('')}
        </nav>

        <div class="sidebar__streak">
          <div class="sidebar__streak-row">
            <span class="sidebar__streak-flame">🔥</span>
            <span class="sidebar__streak-num">1</span>
          </div>
          <div class="sidebar__streak-label">Day streak</div>
          <div class="sidebar__streak-sub">Keep it going!</div>
        </div>

        <div class="sidebar__user">
          <div class="sidebar__user-avatar">AB</div>
          <div class="sidebar__user-info">
            <div class="sidebar__user-name">Alex Brown</div>
            <div class="sidebar__user-role">A-Level Economics</div>
          </div>
          <div class="sidebar__user-chev">${I.chevDown}</div>
        </div>
      </aside>
    `;
  }

  function renderTopbar() {
    if (currentView === 'intro') {
      return `
        <div class="topbar" role="region" aria-label="Session header">
          <a href="index.html" class="topbar__back">
            ${I.arrowLeft}
            <span>Back to dashboard</span>
          </a>
          <div style="flex:1"></div>
          <div class="topbar__right">
            <div class="topbar__streak">
              <span class="topbar__streak-icon">🔥</span>
              <span>1 day streak</span>
            </div>
            <div class="topbar__avatar">
              <div class="topbar__avatar-circle">AB</div>
              <span class="topbar__avatar-chev">${I.chevDown}</span>
            </div>
          </div>
        </div>
      `;
    } else {
      return `
        <div class="topbar" role="region" aria-label="Session header">
          <a href="#" class="topbar__back" data-action="back-to-intro">
            ${I.arrowLeft}
          </a>
          <div class="topbar__crumbs">
            <div class="topbar__session-label">Session 1 of 3: Learn</div>
            <div class="topbar__topic-title">${T.title}</div>
          </div>
          <div class="topbar__right">
            <div class="topbar__streak">
              <span class="topbar__streak-icon">🔥</span>
              <span>1 day streak</span>
            </div>
            <div class="topbar__avatar">
              <div class="topbar__avatar-circle">AB</div>
              <span class="topbar__avatar-chev">${I.chevDown}</span>
            </div>
          </div>
        </div>
      `;
    }
  }

  /* ============================================================
     SHARED COMPONENTS
     ============================================================ */

  function renderExamEdge(e) {
    if (!e) return '';
    const title = typeof e === 'object' ? (e.title || 'Exam edge') : 'Exam edge';
    const text  = typeof e === 'object' ? e.text : e;
    if (!text) return '';
    return `
      <div class="exam-edge">
        <div class="exam-edge__star">⭐</div>
        <div class="exam-edge__body">
          <div class="exam-edge__label">Exam edge</div>
          ${title !== 'Exam edge' ? `<div class="exam-edge__title">${title}</div>` : ''}
          <div class="exam-edge__text">${text}</div>
        </div>
      </div>
    `;
  }


  /* ============================================================
     GENERIC CARD RENDERER
     Handles the standard data format used by all non-inflation
     topics: body, causes[], steps[], rows[], left/right, keyTerms
     ============================================================ */
  const TONES = [
    { bg: 'var(--econ-green-50)',  border: 'var(--econ-green)',  label: 'var(--econ-green-700)',  headerBg: 'var(--econ-green)'  },
    { bg: 'var(--econ-amber-50)',  border: 'var(--econ-amber)',  label: 'var(--econ-amber-700)',  headerBg: 'var(--econ-amber)'  },
    { bg: 'var(--econ-blue-50)',   border: 'var(--econ-blue)',   label: 'var(--econ-blue-700)',   headerBg: 'var(--econ-blue)'   },
    { bg: 'var(--econ-purple-50)', border: 'var(--econ-purple)', label: 'var(--econ-purple-600)', headerBg: 'var(--econ-purple)' }
  ];

  function genSecLabel(emoji, text) {
    return `<div style="display:flex;align-items:center;gap:8px;font-weight:800;font-size:11px;letter-spacing:0.09em;text-transform:uppercase;color:#0B1426;margin:24px 0 18px;">${emoji} <span>${text}</span><div style="flex:1;height:1px;background:#E7E7EA;margin-left:6px;"></div></div>`;
  }

  // Shared tone palette used by tip / comparison / flow / table patterns.
  // Keeps colour decisions consistent with the rest of the generic renderer.
  const PATTERN_TONES = {
    green:  { bg: '#ECFDF5', soft: '#D1FAE5', border: '#A7F3D0', label: '#059669', accent: '#10B981' },
    amber:  { bg: '#FFFBEB', soft: '#FEF3C7', border: '#FDE68A', label: '#D97706', accent: '#F59E0B' },
    blue:   { bg: '#EFF6FF', soft: '#DBEAFE', border: '#BFDBFE', label: '#2563EB', accent: '#3B82F6' },
    purple: { bg: '#F5F3FF', soft: '#EDE9FE', border: '#DDD6FE', label: '#7C3AED', accent: '#8B5CF6' },
    rose:   { bg: '#FEF2F2', soft: '#FEE2E2', border: '#FECACA', label: '#DC2626', accent: '#F43F5E' },
    slate:  { bg: '#F8FAFC', soft: '#F1F5F9', border: '#E2E8F0', label: '#475569', accent: '#64748B' }
  };

  // Inline SVG scene illustrations for the `workedExample` renderer.
  // Each value is a complete <svg>…</svg> string sized to the host container.
  const SCENES = {
    steelPlant: `
<svg viewBox="0 0 1000 220" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" style="width:100%;height:170px;display:block;">
  <defs>
    <linearGradient id="sps_sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#EFF6FF"/><stop offset="1" stop-color="#F8FAFC"/>
    </linearGradient>
  </defs>
  <rect width="1000" height="220" fill="url(#sps_sky)"/>
  <path d="M0 150 L80 110 L160 130 L260 95 L350 120 L450 105 L560 125 L680 100 L780 120 L880 110 L1000 130 L1000 220 L0 220 Z" fill="#E2E8F0"/>
  <path d="M0 165 L100 138 L210 155 L320 128 L420 148 L520 138 L640 152 L740 132 L860 148 L1000 142 L1000 220 L0 220 Z" fill="#CBD5E1"/>
  <rect x="0" y="180" width="1000" height="40" fill="#F1F5F9"/>
  <rect x="0" y="178" width="1000" height="3" fill="#CBD5E1"/>
  <g>
    <ellipse cx="190" cy="48" rx="42" ry="22" fill="#475569" opacity="0.55"/>
    <ellipse cx="245" cy="40" rx="40" ry="20" fill="#475569" opacity="0.5"/>
    <ellipse cx="305" cy="48" rx="46" ry="22" fill="#64748B" opacity="0.45"/>
    <ellipse cx="375" cy="42" rx="48" ry="20" fill="#64748B" opacity="0.38"/>
    <ellipse cx="455" cy="52" rx="50" ry="18" fill="#94A3B8" opacity="0.32"/>
    <ellipse cx="535" cy="48" rx="48" ry="16" fill="#94A3B8" opacity="0.24"/>
    <ellipse cx="615" cy="56" rx="46" ry="14" fill="#94A3B8" opacity="0.18"/>
    <ellipse cx="690" cy="52" rx="44" ry="12" fill="#94A3B8" opacity="0.12"/>
  </g>
  <g>
    <rect x="105" y="55" width="22" height="125" fill="#475569"/>
    <rect x="103" y="52" width="26" height="8" fill="#334155"/>
    <rect x="108" y="66" width="16" height="3" fill="#334155" opacity="0.6"/>
    <rect x="155" y="75" width="18" height="105" fill="#475569"/>
    <rect x="153" y="72" width="22" height="7" fill="#334155"/>
    <rect x="40" y="110" width="220" height="70" fill="#64748B"/>
    <polygon points="40,110 70,92 100,110" fill="#475569"/>
    <polygon points="100,110 130,92 160,110" fill="#475569"/>
    <polygon points="160,110 190,92 220,110" fill="#475569"/>
    <polygon points="220,110 250,92 260,110" fill="#475569"/>
    <polygon points="40,110 70,92 100,110 100,114 40,114" fill="#334155" opacity="0.4"/>
    <rect x="50" y="125" width="14" height="18" fill="#FCD34D"/>
    <rect x="72" y="125" width="14" height="18" fill="#FCD34D"/>
    <rect x="94" y="125" width="14" height="18" fill="#FCD34D"/>
    <rect x="116" y="125" width="14" height="18" fill="#FCD34D"/>
    <rect x="138" y="125" width="14" height="18" fill="#FCD34D"/>
    <rect x="160" y="125" width="14" height="18" fill="#FCD34D"/>
    <rect x="182" y="125" width="14" height="18" fill="#FCD34D"/>
    <rect x="204" y="125" width="14" height="18" fill="#FCD34D"/>
    <rect x="226" y="125" width="14" height="18" fill="#FCD34D"/>
    <rect x="50" y="155" width="200" height="3" fill="#334155" opacity="0.35"/>
    <rect x="248" y="135" width="36" height="45" fill="#475569"/>
    <polygon points="248,135 266,122 284,135" fill="#334155"/>
  </g>
  <ellipse cx="500" cy="196" rx="220" ry="18" fill="#E2E8F0"/>
  <g transform="translate(720 178)" fill="#0F172A">
    <circle cx="0" cy="-22" r="5.5"/>
    <rect x="-5" y="-17" width="10" height="22" rx="2"/>
    <rect x="-5" y="3" width="4" height="6"/><rect x="1" y="3" width="4" height="6"/>
  </g>
  <g transform="translate(735 178)" fill="#0F172A">
    <circle cx="0" cy="-19" r="4.5"/>
    <rect x="-4" y="-15" width="8" height="18" rx="2"/>
    <rect x="-4" y="3" width="3.5" height="5"/><rect x="0.5" y="3" width="3.5" height="5"/>
  </g>
  <g transform="translate(770 132)">
    <polygon points="0,18 32,-6 64,18" fill="#B91C1C"/>
    <rect x="6" y="18" width="52" height="42" fill="#FEF3C7"/>
    <rect x="26" y="34" width="14" height="26" fill="#7C2D12"/>
    <rect x="14" y="26" width="8" height="8" fill="#BFDBFE"/>
    <rect x="44" y="26" width="8" height="8" fill="#BFDBFE"/>
  </g>
  <g transform="translate(842 124)">
    <polygon points="0,20 36,-8 72,20" fill="#0E7490"/>
    <rect x="6" y="20" width="60" height="48" fill="#FFFBEB"/>
    <rect x="28" y="38" width="16" height="30" fill="#7C2D12"/>
    <rect x="14" y="28" width="9" height="9" fill="#BFDBFE"/>
    <rect x="49" y="28" width="9" height="9" fill="#BFDBFE"/>
  </g>
  <g transform="translate(922 132)">
    <polygon points="0,18 30,-6 60,18" fill="#9A3412"/>
    <rect x="5" y="18" width="50" height="42" fill="#FEF3C7"/>
    <rect x="24" y="34" width="13" height="26" fill="#7C2D12"/>
    <rect x="12" y="26" width="8" height="8" fill="#BFDBFE"/>
    <rect x="40" y="26" width="8" height="8" fill="#BFDBFE"/>
  </g>
  <g transform="translate(685 168)">
    <rect x="-2.5" y="0" width="5" height="18" fill="#78350F"/>
    <circle cx="0" cy="-10" r="16" fill="#16A34A"/>
    <circle cx="-7" cy="-3" r="11" fill="#15803D"/>
    <circle cx="7" cy="-3" r="11" fill="#22C55E"/>
  </g>
  <g transform="translate(818 173)">
    <rect x="-2" y="0" width="4" height="14" fill="#78350F"/>
    <circle cx="0" cy="-6" r="11" fill="#15803D"/>
  </g>
  <g transform="translate(905 174)">
    <rect x="-2" y="0" width="4" height="12" fill="#78350F"/>
    <circle cx="0" cy="-5" r="10" fill="#16A34A"/>
  </g>
</svg>`,

    shippingAviation: `
<svg viewBox="0 0 600 160" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" style="width:100%;height:120px;display:block;">
  <defs>
    <linearGradient id="sa_sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#BFDBFE"/><stop offset="1" stop-color="#DBEAFE"/>
    </linearGradient>
    <linearGradient id="sa_sea" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#1D4ED8" stop-opacity="0.7"/><stop offset="1" stop-color="#1E40AF"/>
    </linearGradient>
  </defs>
  <rect width="600" height="108" fill="url(#sa_sky)"/>
  <rect x="0" y="104" width="600" height="56" fill="url(#sa_sea)"/>
  <path d="M0 118 Q50 113 100 118 Q150 123 200 118 Q250 113 300 118" stroke="#3B82F6" stroke-width="1.5" fill="none" opacity="0.5"/>
  <path d="M200 132 Q260 127 320 132 Q380 137 440 132" stroke="#3B82F6" stroke-width="1.5" fill="none" opacity="0.4"/>
  <path d="M55 112 L55 97 L350 97 L366 112 Z" fill="#334155"/>
  <rect x="60" y="86" width="270" height="13" fill="#475569"/>
  <rect x="240" y="64" width="72" height="24" fill="#64748B"/>
  <rect x="256" y="52" width="42" height="14" fill="#64748B"/>
  <rect x="286" y="41" width="12" height="20" fill="#DC2626"/>
  <rect x="284" y="39" width="16" height="5" fill="#991B1B"/>
  <rect x="76" y="77" width="35" height="11" fill="#EF4444"/>
  <rect x="116" y="77" width="35" height="11" fill="#3B82F6"/>
  <rect x="156" y="77" width="35" height="11" fill="#F59E0B"/>
  <rect x="196" y="77" width="35" height="11" fill="#10B981"/>
  <ellipse cx="293" cy="31" rx="16" ry="10" fill="#1E293B" opacity="0.85"/>
  <ellipse cx="320" cy="22" rx="22" ry="12" fill="#334155" opacity="0.75"/>
  <ellipse cx="360" cy="18" rx="28" ry="12" fill="#475569" opacity="0.6"/>
  <ellipse cx="408" cy="22" rx="32" ry="11" fill="#64748B" opacity="0.45"/>
  <ellipse cx="460" cy="26" rx="30" ry="10" fill="#94A3B8" opacity="0.3"/>
  <line x1="80" y1="46" x2="480" y2="22" stroke="white" stroke-width="2" opacity="0.65"/>
  <line x1="80" y1="50" x2="480" y2="26" stroke="white" stroke-width="1.5" opacity="0.45"/>
  <g transform="translate(446 17)">
    <ellipse cx="18" cy="3" rx="22" ry="4" fill="#334155"/>
    <polygon points="0,3 -8,-1 -8,7" fill="#334155"/>
    <polygon points="28,3 40,3 30,0" fill="#475569"/>
    <polygon points="10,0 14,-6 18,0" fill="#475569"/>
    <polygon points="10,6 14,12 18,6" fill="#475569"/>
  </g>
</svg>`,

    deforestation: `
<svg viewBox="0 0 600 160" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" style="width:100%;height:120px;display:block;">
  <defs>
    <linearGradient id="df_sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#FEF9C3"/><stop offset="1" stop-color="#FFF7ED"/>
    </linearGradient>
  </defs>
  <rect width="600" height="160" fill="url(#df_sky)"/>
  <path d="M0 105 L80 75 L160 90 L250 65 L340 82 L440 68 L520 80 L600 72 L600 160 L0 160 Z" fill="#D1FAE5"/>
  <rect x="0" y="130" width="600" height="30" fill="#78350F" opacity="0.55"/>
  <rect x="0" y="128" width="600" height="4" fill="#92400E"/>
  <rect x="26" y="108" width="8" height="22" fill="#78350F"/>
  <polygon points="30,30 8,82 52,82" fill="#166534"/>
  <polygon points="30,50 12,90 48,90" fill="#15803D"/>
  <polygon points="30,68 14,102 46,102" fill="#16A34A"/>
  <rect x="76" y="108" width="8" height="22" fill="#78350F"/>
  <polygon points="80,24 56,78 104,78" fill="#14532D"/>
  <polygon points="80,46 58,88 102,88" fill="#166534"/>
  <polygon points="80,64 60,102 100,102" fill="#16A34A"/>
  <rect x="126" y="108" width="8" height="22" fill="#78350F"/>
  <polygon points="130,34 106,84 154,84" fill="#166534"/>
  <polygon points="130,54 108,94 152,94" fill="#15803D"/>
  <polygon points="130,70 110,106 150,106" fill="#16A34A"/>
  <rect x="176" y="108" width="8" height="22" fill="#78350F"/>
  <polygon points="180,40 156,86 204,86" fill="#14532D"/>
  <polygon points="180,58 158,96 202,96" fill="#166534"/>
  <polygon points="180,74 160,108 200,108" fill="#16A34A"/>
  <line x1="218" y1="52" x2="218" y2="136" stroke="#92400E" stroke-width="3" stroke-dasharray="6 3" opacity="0.55"/>
  <rect x="248" y="118" width="30" height="12" fill="#78350F"/>
  <ellipse cx="263" cy="118" rx="16" ry="5" fill="#92400E"/>
  <ellipse cx="263" cy="118" rx="9" ry="3" fill="#A16207" opacity="0.6"/>
  <rect x="308" y="121" width="24" height="9" fill="#78350F"/>
  <ellipse cx="320" cy="121" rx="13" ry="4" fill="#92400E"/>
  <rect x="368" y="116" width="28" height="14" fill="#78350F"/>
  <ellipse cx="382" cy="116" rx="15" ry="5" fill="#92400E"/>
  <rect x="428" y="120" width="22" height="10" fill="#78350F"/>
  <ellipse cx="439" cy="120" rx="12" ry="4" fill="#92400E"/>
  <rect x="488" y="118" width="26" height="12" fill="#78350F"/>
  <ellipse cx="501" cy="118" rx="14" ry="4" fill="#92400E"/>
  <rect x="272" y="127" width="75" height="7" rx="4" fill="#92400E" transform="rotate(-8 272 127)"/>
  <rect x="392" y="124" width="58" height="6" rx="3" fill="#78350F" transform="rotate(5 392 124)"/>
  <rect x="344" y="107" width="30" height="11" rx="3" fill="#F59E0B"/>
  <rect x="374" y="109" width="18" height="3" fill="#334155"/>
  <rect x="374" y="115" width="18" height="3" fill="#334155"/>
  <circle cx="346" cy="113" r="4" fill="#334155"/>
</svg>`,

    vaccinationHerdImmunity: `
<svg viewBox="0 0 600 160" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" style="width:100%;height:120px;display:block;">
  <defs>
    <linearGradient id="vh_sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#D1FAE5"/><stop offset="1" stop-color="#ECFDF5"/>
    </linearGradient>
  </defs>
  <rect width="600" height="160" fill="url(#vh_sky)"/>
  <path d="M0 120 L80 95 L170 110 L260 90 L360 105 L460 92 L540 108 L600 100 L600 160 L0 160 Z" fill="#A7F3D0" opacity="0.6"/>
  <rect x="0" y="135" width="600" height="25" fill="#F1F5F9"/>
  <rect x="0" y="133" width="600" height="3" fill="#E2E8F0"/>
  <rect x="40" y="68" width="120" height="67" fill="white" stroke="#CBD5E1" stroke-width="1.5"/>
  <rect x="40" y="60" width="120" height="10" fill="#94A3B8"/>
  <circle cx="100" cy="92" r="14" fill="#1D4ED8"/>
  <rect x="97" y="84" width="6" height="16" fill="white"/>
  <rect x="92" y="89" width="16" height="6" fill="white"/>
  <rect x="55" y="110" width="18" height="22" fill="#1E40AF" opacity="0.85"/>
  <rect x="128" y="110" width="20" height="22" fill="#BFDBFE"/>
  <line x1="138" y1="110" x2="138" y2="132" stroke="#1D4ED8" stroke-width="0.8"/>
  <line x1="128" y1="121" x2="148" y2="121" stroke="#1D4ED8" stroke-width="0.8"/>
  <g transform="translate(190 88)">
    <rect x="0" y="32" width="22" height="14" rx="2" fill="#94A3B8"/>
    <circle cx="11" cy="6" r="6" fill="#6B4226"/>
    <rect x="6" y="12" width="10" height="22" fill="#15803D"/>
    <rect x="14" y="18" width="14" height="4" fill="#FBCFE8"/>
  </g>
  <g transform="translate(218 80)">
    <rect x="0" y="40" width="22" height="14" rx="2" fill="#94A3B8"/>
    <circle cx="11" cy="8" r="6.5" fill="#78350F"/>
    <rect x="6" y="14" width="10" height="28" fill="#0EA5E9"/>
    <rect x="-2" y="20" width="10" height="4" fill="#FBCFE8"/>
  </g>
  <g transform="translate(310 50)">
    <path d="M0 0 L34 -6 L34 18 Q34 38 17 50 Q0 38 0 18 Z" fill="#1D4ED8" stroke="#1E3A8A" stroke-width="1.5"/>
    <rect x="14" y="14" width="6" height="20" fill="white"/>
    <rect x="9" y="21" width="16" height="6" fill="white"/>
  </g>
  <g transform="translate(390 62)">
    <path d="M0 0 L18 -3 L18 10 Q18 22 9 28 Q0 22 0 10 Z" fill="#3B82F6" stroke="#1E40AF" stroke-width="1"/>
    <rect x="7" y="7" width="4" height="12" fill="white"/>
    <rect x="4" y="11" width="10" height="4" fill="white"/>
  </g>
  <g transform="translate(450 50)">
    <path d="M0 0 L18 -3 L18 10 Q18 22 9 28 Q0 22 0 10 Z" fill="#3B82F6" stroke="#1E40AF" stroke-width="1"/>
    <rect x="7" y="7" width="4" height="12" fill="white"/>
    <rect x="4" y="11" width="10" height="4" fill="white"/>
  </g>
  <g transform="translate(510 70)">
    <path d="M0 0 L18 -3 L18 10 Q18 22 9 28 Q0 22 0 10 Z" fill="#3B82F6" stroke="#1E40AF" stroke-width="1"/>
    <rect x="7" y="7" width="4" height="12" fill="white"/>
    <rect x="4" y="11" width="10" height="4" fill="white"/>
  </g>
  <path d="M344 70 Q400 50 460 64" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="3 3" fill="none" opacity="0.6"/>
  <path d="M344 80 Q420 95 519 84" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="3 3" fill="none" opacity="0.55"/>
  <ellipse cx="120" cy="22" rx="32" ry="7" fill="white" opacity="0.7"/>
  <ellipse cx="430" cy="18" rx="38" ry="8" fill="white" opacity="0.65"/>
</svg>`,

    education: `
<svg viewBox="0 0 600 160" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" style="width:100%;height:120px;display:block;">
  <defs>
    <linearGradient id="ed_sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#EDE9FE"/><stop offset="1" stop-color="#F5F3FF"/>
    </linearGradient>
  </defs>
  <rect width="600" height="160" fill="url(#ed_sky)"/>
  <rect x="0" y="135" width="600" height="25" fill="#E9E5F8"/>
  <rect x="0" y="133" width="600" height="3" fill="#C4B5FD"/>
  <rect x="220" y="55" width="160" height="80" fill="#FAF5FF" stroke="#A78BFA" stroke-width="1.5"/>
  <polygon points="220,55 300,28 380,55" fill="#7C3AED"/>
  <rect x="293" y="22" width="14" height="14" fill="#7C3AED"/>
  <rect x="298" y="14" width="4" height="10" fill="#5B21B6"/>
  <circle cx="300" cy="14" r="3" fill="#FBBF24"/>
  <rect x="290" y="78" width="22" height="32" fill="#5B21B6"/>
  <rect x="294" y="84" width="14" height="20" fill="#7C3AED"/>
  <circle cx="306" cy="94" r="1.6" fill="#FBBF24"/>
  <rect x="238" y="78" width="20" height="20" fill="#C4B5FD"/>
  <line x1="248" y1="78" x2="248" y2="98" stroke="#7C3AED" stroke-width="0.8"/>
  <line x1="238" y1="88" x2="258" y2="88" stroke="#7C3AED" stroke-width="0.8"/>
  <rect x="342" y="78" width="20" height="20" fill="#C4B5FD"/>
  <line x1="352" y1="78" x2="352" y2="98" stroke="#7C3AED" stroke-width="0.8"/>
  <line x1="342" y1="88" x2="362" y2="88" stroke="#7C3AED" stroke-width="0.8"/>
  <circle cx="300" cy="60" r="6" fill="#FAF5FF" stroke="#7C3AED" stroke-width="1"/>
  <line x1="300" y1="56" x2="300" y2="60" stroke="#5B21B6" stroke-width="1"/>
  <line x1="300" y1="60" x2="303" y2="62" stroke="#5B21B6" stroke-width="1"/>
  <g transform="translate(80 85)">
    <rect x="0" y="32" width="22" height="14" rx="2" fill="#94A3B8"/>
    <circle cx="11" cy="6" r="6" fill="#6B4226"/>
    <polygon points="0,4 22,4 22,8 11,12 0,8" fill="#1E1B4B"/>
    <rect x="6" y="12" width="10" height="22" fill="#7C3AED"/>
    <rect x="-3" y="16" width="6" height="14" rx="1" fill="#F59E0B"/>
  </g>
  <g transform="translate(115 82)">
    <rect x="0" y="34" width="22" height="14" rx="2" fill="#94A3B8"/>
    <circle cx="11" cy="7" r="6" fill="#78350F"/>
    <polygon points="0,5 22,5 22,9 11,13 0,9" fill="#1E1B4B"/>
    <rect x="6" y="13" width="10" height="24" fill="#A78BFA"/>
    <rect x="-2" y="20" width="6" height="14" rx="1" fill="#F472B6"/>
  </g>
  <g transform="translate(150 88)">
    <rect x="0" y="30" width="22" height="14" rx="2" fill="#94A3B8"/>
    <circle cx="11" cy="6" r="6" fill="#451A03"/>
    <polygon points="0,4 22,4 22,8 11,12 0,8" fill="#1E1B4B"/>
    <rect x="6" y="12" width="10" height="22" fill="#6D28D9"/>
    <rect x="18" y="16" width="6" height="14" rx="1" fill="#10B981"/>
  </g>
  <g transform="translate(450 80)">
    <rect x="0" y="38" width="22" height="14" rx="2" fill="#94A3B8"/>
    <circle cx="11" cy="6" r="6" fill="#6B4226"/>
    <rect x="6" y="12" width="10" height="28" fill="#9333EA"/>
    <rect x="-2" y="20" width="28" height="6" rx="1" fill="#FBBF24"/>
    <rect x="0" y="22" width="24" height="2" fill="#1E1B4B"/>
  </g>
  <g transform="translate(490 86)">
    <rect x="0" y="32" width="22" height="14" rx="2" fill="#94A3B8"/>
    <circle cx="11" cy="6" r="6" fill="#78350F"/>
    <rect x="6" y="12" width="10" height="22" fill="#5B21B6"/>
    <rect x="-2" y="20" width="28" height="6" rx="1" fill="#34D399"/>
    <rect x="0" y="22" width="24" height="2" fill="#1E1B4B"/>
  </g>
  <g transform="translate(540 82)">
    <rect x="0" y="34" width="22" height="14" rx="2" fill="#94A3B8"/>
    <circle cx="11" cy="6" r="6" fill="#451A03"/>
    <rect x="6" y="12" width="10" height="24" fill="#7C3AED"/>
    <rect x="-2" y="22" width="28" height="6" rx="1" fill="#60A5FA"/>
    <rect x="0" y="24" width="24" height="2" fill="#1E1B4B"/>
  </g>
  <ellipse cx="100" cy="22" rx="32" ry="7" fill="white" opacity="0.65"/>
  <ellipse cx="490" cy="20" rx="38" ry="8" fill="white" opacity="0.6"/>
</svg>`,

    healthcareGeneral: `
<svg viewBox="0 0 600 160" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" style="width:100%;height:120px;display:block;">
  <defs>
    <linearGradient id="hc_sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#DBEAFE"/><stop offset="1" stop-color="#EFF6FF"/>
    </linearGradient>
  </defs>
  <rect width="600" height="160" fill="url(#hc_sky)"/>
  <rect x="0" y="135" width="600" height="25" fill="#F1F5F9"/>
  <rect x="0" y="133" width="600" height="3" fill="#CBD5E1"/>
  <rect x="200" y="48" width="200" height="87" fill="white" stroke="#1D4ED8" stroke-width="1.5"/>
  <rect x="200" y="42" width="200" height="10" fill="#1D4ED8"/>
  <rect x="288" y="56" width="24" height="24" fill="#DC2626"/>
  <rect x="296" y="52" width="8" height="32" fill="#DC2626"/>
  <rect x="284" y="64" width="32" height="8" fill="white"/>
  <rect x="298" y="60" width="4" height="16" fill="white"/>
  <rect x="220" y="92" width="20" height="22" fill="#BFDBFE"/>
  <line x1="230" y1="92" x2="230" y2="114" stroke="#1D4ED8" stroke-width="0.8"/>
  <line x1="220" y1="103" x2="240" y2="103" stroke="#1D4ED8" stroke-width="0.8"/>
  <rect x="260" y="92" width="20" height="22" fill="#BFDBFE"/>
  <line x1="270" y1="92" x2="270" y2="114" stroke="#1D4ED8" stroke-width="0.8"/>
  <line x1="260" y1="103" x2="280" y2="103" stroke="#1D4ED8" stroke-width="0.8"/>
  <rect x="320" y="92" width="20" height="22" fill="#BFDBFE"/>
  <line x1="330" y1="92" x2="330" y2="114" stroke="#1D4ED8" stroke-width="0.8"/>
  <line x1="320" y1="103" x2="340" y2="103" stroke="#1D4ED8" stroke-width="0.8"/>
  <rect x="358" y="92" width="20" height="22" fill="#BFDBFE"/>
  <line x1="368" y1="92" x2="368" y2="114" stroke="#1D4ED8" stroke-width="0.8"/>
  <line x1="358" y1="103" x2="378" y2="103" stroke="#1D4ED8" stroke-width="0.8"/>
  <rect x="288" y="116" width="24" height="19" fill="#1E40AF"/>
  <g transform="translate(80 82)">
    <rect x="0" y="36" width="22" height="14" rx="2" fill="#94A3B8"/>
    <circle cx="11" cy="6" r="6" fill="#6B4226"/>
    <rect x="6" y="12" width="10" height="26" fill="white" stroke="#3B82F6" stroke-width="1"/>
    <line x1="11" y1="38" x2="11" y2="50" stroke="#94A3B8" stroke-width="0.8"/>
    <circle cx="2" cy="20" r="2" fill="#DC2626"/>
    <circle cx="20" cy="20" r="2" fill="#DC2626"/>
    <path d="M2 22 Q2 38 8 38 M20 22 Q20 38 14 38" stroke="#1D4ED8" stroke-width="0.8" fill="none"/>
    <circle cx="11" cy="40" r="2" fill="#1D4ED8"/>
  </g>
  <g transform="translate(115 88)">
    <rect x="0" y="32" width="22" height="14" rx="2" fill="#94A3B8"/>
    <circle cx="11" cy="6" r="6" fill="#78350F"/>
    <rect x="6" y="12" width="10" height="22" fill="#0EA5E9"/>
    <rect x="-2" y="20" width="6" height="4" fill="#FBCFE8"/>
  </g>
  <g transform="translate(440 80)">
    <rect x="0" y="38" width="22" height="14" rx="2" fill="#94A3B8"/>
    <circle cx="11" cy="6" r="6" fill="#451A03"/>
    <rect x="6" y="12" width="10" height="28" fill="#10B981"/>
  </g>
  <g transform="translate(475 78)">
    <rect x="0" y="40" width="22" height="14" rx="2" fill="#94A3B8"/>
    <circle cx="11" cy="6" r="6.5" fill="#6B4226"/>
    <rect x="6" y="13" width="10" height="29" fill="#7C3AED"/>
    <rect x="14" y="20" width="14" height="4" fill="#FBCFE8"/>
  </g>
  <g transform="translate(515 86)">
    <rect x="0" y="32" width="22" height="14" rx="2" fill="#94A3B8"/>
    <circle cx="11" cy="6" r="6" fill="#78350F"/>
    <rect x="6" y="12" width="10" height="22" fill="#F59E0B"/>
    <rect x="-3" y="20" width="6" height="14" rx="1" fill="#8B5CF6"/>
  </g>
  <g transform="translate(545 88)">
    <rect x="0" y="32" width="22" height="14" rx="2" fill="#94A3B8"/>
    <circle cx="11" cy="6" r="5.5" fill="#9CA3AF"/>
    <rect x="6" y="12" width="10" height="22" fill="#A855F7"/>
    <rect x="14" y="14" width="2" height="22" fill="#6B7280"/>
  </g>
  <ellipse cx="100" cy="22" rx="32" ry="7" fill="white" opacity="0.7"/>
  <ellipse cx="480" cy="20" rx="38" ry="8" fill="white" opacity="0.65"/>
</svg>`,

    beekeepingPollination: `
<svg viewBox="0 0 600 160" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" style="width:100%;height:120px;display:block;">
  <defs>
    <linearGradient id="bk_sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#FEF3C7"/><stop offset="1" stop-color="#FFFBEB"/>
    </linearGradient>
  </defs>
  <rect width="600" height="160" fill="url(#bk_sky)"/>
  <path d="M0 110 L80 88 L170 102 L260 86 L360 96 L460 84 L540 100 L600 92 L600 160 L0 160 Z" fill="#86EFAC" opacity="0.55"/>
  <rect x="0" y="135" width="600" height="25" fill="#15803D" opacity="0.35"/>
  <rect x="60" y="80" width="60" height="14" fill="#F59E0B"/>
  <rect x="60" y="94" width="60" height="14" fill="#D97706"/>
  <rect x="60" y="108" width="60" height="14" fill="#F59E0B"/>
  <rect x="60" y="122" width="60" height="13" fill="#92400E"/>
  <circle cx="90" cy="117" r="3" fill="#1F2937"/>
  <line x1="56" y1="82" x2="124" y2="82" stroke="#92400E" stroke-width="2"/>
  <rect x="140" y="92" width="48" height="14" fill="#FBBF24"/>
  <rect x="140" y="106" width="48" height="14" fill="#D97706"/>
  <rect x="140" y="120" width="48" height="15" fill="#92400E"/>
  <circle cx="164" cy="128" r="2.5" fill="#1F2937"/>
  <g transform="translate(240 90)">
    <ellipse cx="0" cy="0" rx="7" ry="4.5" fill="#FBBF24"/>
    <rect x="-5" y="-3" width="3" height="6" fill="#1F2937"/>
    <rect x="1" y="-3" width="3" height="6" fill="#1F2937"/>
    <ellipse cx="-2" cy="-6" rx="5" ry="3" fill="white" opacity="0.75"/>
    <ellipse cx="3" cy="-6" rx="5" ry="3" fill="white" opacity="0.75"/>
  </g>
  <g transform="translate(310 70)">
    <ellipse cx="0" cy="0" rx="6" ry="4" fill="#FBBF24"/>
    <rect x="-4" y="-2.5" width="2.5" height="5" fill="#1F2937"/>
    <rect x="1" y="-2.5" width="2.5" height="5" fill="#1F2937"/>
    <ellipse cx="-2" cy="-5" rx="4" ry="2.5" fill="white" opacity="0.75"/>
    <ellipse cx="3" cy="-5" rx="4" ry="2.5" fill="white" opacity="0.75"/>
  </g>
  <g transform="translate(380 86)">
    <ellipse cx="0" cy="0" rx="7" ry="4.5" fill="#FBBF24"/>
    <rect x="-5" y="-3" width="3" height="6" fill="#1F2937"/>
    <rect x="1" y="-3" width="3" height="6" fill="#1F2937"/>
    <ellipse cx="-2" cy="-6" rx="5" ry="3" fill="white" opacity="0.75"/>
    <ellipse cx="3" cy="-6" rx="5" ry="3" fill="white" opacity="0.75"/>
  </g>
  <path d="M210 100 Q260 80 320 76 Q360 74 400 92" stroke="#1F2937" stroke-width="1" stroke-dasharray="2 3" fill="none" opacity="0.45"/>
  <g transform="translate(420 110)">
    <line x1="0" y1="0" x2="0" y2="25" stroke="#15803D" stroke-width="2"/>
    <circle cx="0" cy="-2" r="5" fill="#EC4899"/>
    <circle cx="-4" cy="-5" r="4" fill="#F472B6"/>
    <circle cx="4" cy="-5" r="4" fill="#F472B6"/>
    <circle cx="-4" cy="0" r="4" fill="#F472B6"/>
    <circle cx="4" cy="0" r="4" fill="#F472B6"/>
    <circle cx="0" cy="-2" r="2.5" fill="#FBBF24"/>
  </g>
  <g transform="translate(450 115)">
    <line x1="0" y1="0" x2="0" y2="20" stroke="#15803D" stroke-width="2"/>
    <circle cx="0" cy="-2" r="4" fill="#8B5CF6"/>
    <circle cx="-3" cy="-4" r="3" fill="#A78BFA"/>
    <circle cx="3" cy="-4" r="3" fill="#A78BFA"/>
    <circle cx="0" cy="-2" r="2" fill="#FBBF24"/>
  </g>
  <g transform="translate(480 108)">
    <line x1="0" y1="0" x2="0" y2="27" stroke="#15803D" stroke-width="2"/>
    <circle cx="0" cy="-2" r="5" fill="#EF4444"/>
    <circle cx="-4" cy="-5" r="4" fill="#F87171"/>
    <circle cx="4" cy="-5" r="4" fill="#F87171"/>
    <circle cx="-4" cy="0" r="4" fill="#F87171"/>
    <circle cx="4" cy="0" r="4" fill="#F87171"/>
    <circle cx="0" cy="-2" r="2.5" fill="#FBBF24"/>
  </g>
  <g transform="translate(515 114)">
    <line x1="0" y1="0" x2="0" y2="21" stroke="#15803D" stroke-width="2"/>
    <circle cx="0" cy="-2" r="4" fill="#3B82F6"/>
    <circle cx="-3" cy="-4" r="3" fill="#60A5FA"/>
    <circle cx="3" cy="-4" r="3" fill="#60A5FA"/>
    <circle cx="0" cy="-2" r="2" fill="#FBBF24"/>
  </g>
  <g transform="translate(550 110)">
    <line x1="0" y1="0" x2="0" y2="25" stroke="#15803D" stroke-width="2"/>
    <circle cx="0" cy="-2" r="5" fill="#FBBF24"/>
    <circle cx="-4" cy="-5" r="4" fill="#FCD34D"/>
    <circle cx="4" cy="-5" r="4" fill="#FCD34D"/>
    <circle cx="-4" cy="0" r="4" fill="#FCD34D"/>
    <circle cx="4" cy="0" r="4" fill="#FCD34D"/>
    <circle cx="0" cy="-2" r="2.5" fill="#F59E0B"/>
  </g>
  <ellipse cx="100" cy="22" rx="32" ry="7" fill="white" opacity="0.6"/>
  <ellipse cx="450" cy="18" rx="38" ry="8" fill="white" opacity="0.55"/>
</svg>`,

    intensiveFarming: `
<svg viewBox="0 0 600 160" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" style="width:100%;height:120px;display:block;">
  <defs>
    <linearGradient id="if_sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#D1FAE5"/><stop offset="1" stop-color="#ECFDF5"/>
    </linearGradient>
    <linearGradient id="if_river" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#6EAA8A"/><stop offset="1" stop-color="#4A7C62"/>
    </linearGradient>
  </defs>
  <rect width="600" height="62" fill="url(#if_sky)"/>
  <rect x="0" y="62" width="600" height="26" fill="#4ADE80" opacity="0.55"/>
  <rect x="0" y="88" width="600" height="4" fill="#16A34A" opacity="0.35"/>
  <rect x="0" y="92" width="600" height="22" fill="#22C55E" opacity="0.55"/>
  <rect x="0" y="114" width="600" height="4" fill="#15803D" opacity="0.35"/>
  <rect x="0" y="118" width="600" height="16" fill="#86EFAC" opacity="0.65"/>
  <line x1="0" y1="70" x2="600" y2="70" stroke="#16A34A" stroke-width="1" opacity="0.35"/>
  <line x1="0" y1="78" x2="600" y2="78" stroke="#16A34A" stroke-width="1" opacity="0.35"/>
  <line x1="0" y1="100" x2="600" y2="100" stroke="#16A34A" stroke-width="1" opacity="0.35"/>
  <line x1="0" y1="108" x2="600" y2="108" stroke="#16A34A" stroke-width="1" opacity="0.35"/>
  <g transform="translate(80 68)">
    <rect x="20" y="8" width="55" height="30" rx="4" fill="#F59E0B"/>
    <rect x="55" y="0" width="26" height="20" rx="3" fill="#D97706"/>
    <rect x="58" y="3" width="10" height="8" fill="#BFDBFE" opacity="0.8"/>
    <circle cx="35" cy="42" r="22" fill="#334155"/>
    <circle cx="35" cy="42" r="15" fill="#475569"/>
    <circle cx="35" cy="42" r="5" fill="#64748B"/>
    <circle cx="85" cy="46" r="14" fill="#334155"/>
    <circle cx="85" cy="46" r="9" fill="#475569"/>
    <rect x="52" y="-8" width="6" height="16" fill="#334155"/>
    <rect x="0" y="28" width="20" height="8" fill="#6B7280"/>
    <line x1="8" y1="36" x2="-5" y2="56" stroke="#A3E635" stroke-width="2" opacity="0.7"/>
    <line x1="12" y1="36" x2="2" y2="60" stroke="#A3E635" stroke-width="2" opacity="0.7"/>
    <line x1="16" y1="36" x2="10" y2="60" stroke="#A3E635" stroke-width="2" opacity="0.7"/>
  </g>
  <rect x="0" y="134" width="600" height="26" fill="url(#if_river)"/>
  <path d="M300 118 L300 134" stroke="#6B4226" stroke-width="4" opacity="0.7"/>
  <ellipse cx="315" cy="145" rx="42" ry="6" fill="#6B4226" opacity="0.32"/>
  <ellipse cx="295" cy="148" rx="30" ry="4" fill="#5A3A1A" opacity="0.28"/>
  <g transform="translate(365 142)" fill="#0F172A" opacity="0.55">
    <ellipse cx="0" cy="0" rx="10" ry="3"/>
    <polygon points="10,0 16,-4 16,4"/>
    <circle cx="-6" cy="-1" r="1.5" fill="white" opacity="0.8"/>
  </g>
  <g transform="translate(420 147) rotate(20)" fill="#0F172A" opacity="0.5">
    <ellipse cx="0" cy="0" rx="8" ry="2.5"/>
    <polygon points="8,0 13,-3 13,3"/>
  </g>
  <ellipse cx="100" cy="22" rx="40" ry="12" fill="white" opacity="0.65"/>
  <ellipse cx="132" cy="16" rx="28" ry="9" fill="white" opacity="0.55"/>
  <ellipse cx="450" cy="26" rx="50" ry="14" fill="white" opacity="0.65"/>
  <ellipse cx="492" cy="20" rx="34" ry="10" fill="white" opacity="0.55"/>
</svg>`
  };

  // Returns a grid-template-columns value that lays out N items without
  // leaving a single-item orphan row. 4 → 2x2 (not 3+1), 7 → 4+3, etc.
  // Falls back to auto-fill for very long lists.
  function gridColumnsFor(n, minPx = 155) {
    if (n === 4) return 'repeat(2, 1fr)';
    if (n === 7 || n === 8) return 'repeat(4, 1fr)';
    if (n === 9) return 'repeat(3, 1fr)';
    if (n >= 1 && n <= 6) return `repeat(${Math.min(n, 3)}, minmax(0, 1fr))`;
    return `repeat(auto-fill, minmax(${minPx}px, 1fr))`;
  }

  function renderCardGeneric(c) {
    let content = '';

    // Step label chip
    if (c.stepLabel) {
      content += `<div class="card__step-label">${c.stepLabel}</div>`;
    }

    // Tip strip — single-sentence essence in a coloured top band.
    // Cleaner and punchier than `intro`; sits right under the title.
    if (c.tip) {
      const tips = Array.isArray(c.tip) ? c.tip : [c.tip];
      tips.forEach(tip => {
        const tipText = typeof tip === 'object' ? tip.text : tip;
        const iconSet = typeof tip === 'object' && tip.icon !== undefined;
        const tipIcon = iconSet ? tip.icon : '💡';
        const showIcon = tipIcon !== null && tipIcon !== false && tipIcon !== '';
        const tipTone = (typeof tip === 'object' && tip.tone) || 'blue';
        const tipHead = (typeof tip === 'object' && tip.head) || null;
        const t = PATTERN_TONES[tipTone] || PATTERN_TONES.blue;
        const bodyHtml = tipHead
          ? `<div style="display:flex;flex-direction:column;gap:2px;"><div style="font-size:14px;font-weight:800;color:${t.label};line-height:1.3;">${tipHead}</div><div style="font-size:14px;color:#0B1426;line-height:1.55;">${tipText}</div></div>`
          : `<div style="font-size:15px;color:#0B1426;line-height:1.55;">${tipText}</div>`;
        content += `
          <div style="display:flex;align-items:center;gap:14px;background:${t.bg};border:1px solid ${t.border};border-radius:12px;padding:14px 18px;margin-bottom:14px;">
            ${showIcon ? `<div style="width:38px;height:38px;border-radius:50%;background:${t.accent};color:#fff;display:inline-flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;">${tipIcon}</div>` : ''}
            ${bodyHtml}
          </div>`;
      });
      content += `<div style="height:8px;"></div>`;
    }

    // Intro/lede — styled as a thought-prompt callout
    if (c.intro) {
      content += `
        <div style="background:var(--econ-blue-50);border-left:4px solid var(--econ-blue);border-radius:10px;padding:14px 18px;margin-bottom:22px;font-size:15px;color:#0B1426;line-height:1.65;font-style:italic;">
          💡 ${c.intro}
        </div>`;
    }

    // Comparison block — two visual cards either side of a "VS" badge.
    // Pattern: { title?, left: {icon,label,value?,caption?,tone?}, right: {...}, vs?: 'VS' }
    if (c.comparison) {
      const cmp = c.comparison;
      const renderSide = (side) => {
        const t = PATTERN_TONES[side.tone || 'green'] || PATTERN_TONES.green;
        return `
          <div style="flex:1;min-width:0;border-radius:16px;background:${t.bg};border:1px solid ${t.border};padding:24px 20px 22px;text-align:center;">
            <div style="width:64px;height:64px;border-radius:50%;background:#fff;margin:0 auto 14px;display:inline-flex;align-items:center;justify-content:center;font-size:30px;line-height:1;box-shadow:0 2px 8px rgba(0,0,0,0.08);">${side.icon || ''}</div>
            <div style="font-size:17px;font-weight:800;color:${t.label};margin-bottom:${side.value ? '4px' : '8px'};">${side.label}</div>
            ${side.value ? `<div style="font-size:22px;font-weight:800;color:#0B1426;margin-bottom:8px;">${side.value}</div>` : ''}
            ${side.caption ? `<div style="font-size:13.5px;color:${t.label};line-height:1.55;font-weight:600;">${side.caption}</div>` : ''}
          </div>
        `;
      };
      if (cmp.title) {
        content += genSecLabel(cmp.emoji || '⚖️', cmp.title);
      }
      content += `
        <div style="display:flex;align-items:stretch;gap:14px;margin-bottom:26px;">
          ${renderSide(cmp.left)}
          <div style="display:flex;align-items:center;flex-shrink:0;">
            <div style="width:46px;height:46px;border-radius:50%;background:#0B1426;color:#fff;font-weight:800;font-size:13px;letter-spacing:0.08em;display:flex;align-items:center;justify-content:center;box-shadow:0 3px 10px rgba(11,20,38,0.25);">${cmp.vs || 'VS'}</div>
          </div>
          ${renderSide(cmp.right)}
        </div>
      `;
    }

    // Verdict comparison — N columns with ✓/✗ item lists, separated by VS or arrow badges.
    // Pattern: { title?, emoji?, layout?: 'vs' | 'arrow', columns: [{tone, label, icon?, items:[{ok:bool,text}]}] }
    if (c.verdict && c.verdict.columns && c.verdict.columns.length >= 2) {
      const v = c.verdict;
      const sep = (v.layout === 'arrow') ? '→' : 'VS';
      if (v.title) {
        content += genSecLabel(v.emoji || '⚖️', v.title);
      }
      content += `<div style="display:flex;align-items:stretch;gap:12px;margin-bottom:26px;flex-wrap:wrap;">`;
      content += v.columns.map((col, i) => {
        const t = PATTERN_TONES[col.tone || 'slate'] || PATTERN_TONES.slate;
        const isLast = i === v.columns.length - 1;
        const colHtml = `
          <div style="flex:1 1 0;min-width:160px;border-radius:14px;background:#fff;border:1.5px solid ${t.border};box-shadow:0 2px 8px rgba(0,0,0,0.05);display:flex;flex-direction:column;overflow:hidden;">
            <div style="padding:12px 14px;background:${t.bg};border-bottom:1px solid ${t.border};display:flex;align-items:center;gap:8px;">
              ${col.icon ? `<div style="font-size:20px;line-height:1;">${col.icon}</div>` : ''}
              <div style="font-size:14px;font-weight:800;color:${t.label};letter-spacing:0.02em;">${col.label}</div>
            </div>
            <ul style="list-style:none;margin:0;padding:12px 14px;font-size:13px;color:#0B1426;line-height:1.6;">
              ${col.items.map(it => {
                const ok = it.ok !== false;
                const mark = ok
                  ? `<span style="flex-shrink:0;width:18px;height:18px;border-radius:50%;background:#D1FAE5;color:#059669;display:inline-flex;align-items:center;justify-content:center;font-size:11px;font-weight:900;">✓</span>`
                  : `<span style="flex-shrink:0;width:18px;height:18px;border-radius:50%;background:#FEE2E2;color:#DC2626;display:inline-flex;align-items:center;justify-content:center;font-size:11px;font-weight:900;">✕</span>`;
                return `<li style="display:flex;align-items:flex-start;gap:9px;margin-bottom:7px;">${mark}<span>${it.text}</span></li>`;
              }).join('')}
            </ul>
          </div>`;
        const separator = !isLast ? `<div style="display:flex;align-items:center;flex-shrink:0;"><div style="width:34px;height:34px;border-radius:50%;background:#0B1426;color:#fff;font-weight:800;font-size:${sep === '→' ? '15px' : '11px'};letter-spacing:0.08em;display:flex;align-items:center;justify-content:center;box-shadow:0 2px 6px rgba(11,20,38,0.25);">${sep}</div></div>` : '';
        return colHtml + separator;
      }).join('');
      content += `</div>`;
    }

    // Continuum — three-tile spectrum with a gradient connector bar and
    // positional dots, plus verdict-strip cards underneath. Visually
    // emphasises a "markets ↔ government" continuum and is intentionally
    // distinct from the plain-white tile patterns used elsewhere.
    //   Pattern: continuum: { title?, emoji?, leftCap?, rightCap?, items: [{icon, title, verdict, verdictTone, body, dotColor?}] }
    if (c.continuum && c.continuum.items && c.continuum.items.length) {
      const con = c.continuum;
      const nC = con.items.length;
      if (con.title) content += genSecLabel(con.emoji || '🎯', con.title);
      const dotColors = con.items.map(it => {
        const t = PATTERN_TONES[it.verdictTone] || PATTERN_TONES.slate;
        return it.dotColor || t.accent;
      });
      const gradient = `linear-gradient(90deg, ${dotColors.join(', ')})`;
      const positions = [];
      for (let i = 0; i < nC; i++) positions.push(`${(100 * (i + 0.5) / nC).toFixed(2)}%`);
      const cards = con.items.map(it => {
        const t = PATTERN_TONES[it.verdictTone] || PATTERN_TONES.slate;
        return `
          <div style="border:1px solid #E7E7EA;border-radius:12px;overflow:hidden;display:flex;flex-direction:column;background:#fff;box-shadow:0 1px 3px rgba(0,0,0,0.05);">
            <div style="background:${t.bg};padding:9px 12px;border-bottom:1px solid ${t.border};text-align:center;">
              <div style="font-size:11px;font-weight:800;color:${t.label};text-transform:uppercase;letter-spacing:0.09em;">${it.verdict}</div>
            </div>
            <div style="padding:18px 16px 20px;text-align:center;flex:1;display:flex;flex-direction:column;">
              <div style="font-size:34px;margin-bottom:8px;line-height:1;">${it.icon || ''}</div>
              <div style="font-size:16px;font-weight:800;color:#0B1426;margin-bottom:8px;">${it.title}</div>
              <div style="font-size:13px;color:#475569;line-height:1.6;">${it.body}</div>
            </div>
          </div>`;
      }).join('');
      const dots = positions.map((pos, i) =>
        `<div style="position:absolute;left:${pos};top:0;transform:translateX(-50%);width:14px;height:14px;border-radius:50%;background:${dotColors[i]};border:3px solid #fff;box-shadow:0 1px 4px rgba(0,0,0,0.25);"></div>`
      ).join('');
      content += `
        <div style="background:#fff;border:1px solid #E7E7EA;border-radius:14px;padding:22px 24px 22px;margin-bottom:22px;">
          <div style="position:relative;padding:0 0 22px;">
            <div style="display:flex;justify-content:space-between;font-size:11px;font-weight:800;letter-spacing:0.1em;text-transform:uppercase;color:#0B1426;margin-bottom:12px;">
              <span>← ${con.leftCap || 'Markets'}</span>
              <span>${con.rightCap || 'Government'} →</span>
            </div>
            <div style="position:relative;height:14px;">
              <div style="position:absolute;left:0;right:0;top:5px;height:4px;border-radius:2px;background:${gradient};"></div>
              ${dots}
            </div>
          </div>
          <div style="display:grid;grid-template-columns:repeat(${nC},1fr);gap:14px;">${cards}</div>
        </div>`;
    }

    // Diagram (if card provides a diagramKey) — renders BEFORE flow so the
    // headline visual sits above any 1-2-3 explanatory chain. Optional
    // diagramLabel/diagramEmoji prepend a genSecLabel section title.
    if (c.diagramKey && I[c.diagramKey]) {
      if (c.diagramLabel) {
        content += genSecLabel(c.diagramEmoji || '📊', c.diagramLabel);
      }
      content += `<div style="overflow-x:auto;margin-bottom:22px;border-radius:12px;border:1px solid #E7E7EA;">${I[c.diagramKey]}</div>`;
    }

    // Diagram grid — 3-up row of policy comparison mini-diagrams, each with a
    // header, an SVG, and colour-coded dot-bullets.
    //   Pattern: diagramGrid: [{svgKey, tone, icon, head, bullets:[{tone,text}]}]
    //            diagramGridLabel?, diagramGridEmoji?
    if (c.diagramGrid && c.diagramGrid.length) {
      if (c.diagramGridLabel !== null) content += genSecLabel(c.diagramGridEmoji || '📊', c.diagramGridLabel || 'Policy comparison');
      const dotCol = { blue:'#2563EB', amber:'#D97706', green:'#059669', slate:'#94A3B8', rose:'#E11D48', purple:'#7C3AED' };
      content += `<div style="display:grid;grid-template-columns:repeat(${Math.min(c.diagramGrid.length, 3)}, minmax(0, 1fr));gap:14px;margin-bottom:26px;">`;
      c.diagramGrid.forEach(item => {
        const t = PATTERN_TONES[item.tone || 'blue'] || PATTERN_TONES.blue;
        const svgHtml = I[item.svgKey] || '';
        const bulletsHtml = (item.bullets || []).map(b => {
          const col = dotCol[b.tone || 'slate'] || dotCol.slate;
          return `<div style="display:flex;align-items:flex-start;gap:7px;font-size:12px;color:#374151;line-height:1.5;margin-bottom:5px;">
            <span style="flex-shrink:0;width:7px;height:7px;border-radius:50%;background:${col};margin-top:5px;"></span>
            <span>${b.text}</span>
          </div>`;
        }).join('');
        content += `
          <div style="border-radius:14px;background:#fff;border:1px solid ${t.border};overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.05);display:flex;flex-direction:column;">
            <div style="padding:11px 14px;background:${t.bg};border-bottom:1px solid ${t.border};display:flex;align-items:center;gap:10px;">
              <div style="width:36px;height:36px;border-radius:50%;background:#fff;display:inline-flex;align-items:center;justify-content:center;font-size:19px;line-height:1;box-shadow:0 1px 4px rgba(0,0,0,0.1);flex-shrink:0;">${item.icon || '📊'}</div>
              <div style="font-weight:800;font-size:14px;color:${t.label};">${item.head}</div>
            </div>
            <div style="padding:8px 10px 4px;overflow-x:auto;">${svgHtml}</div>
            <div style="padding:8px 12px 12px;">${bulletsHtml}</div>
          </div>`;
      });
      content += `</div>`;
    }

    // Diagram panel — SVG on the left, annotated notes on the right (default),
    // or SVG full-width on top with notes below when layout:'stacked'.
    //   Pattern: diagramPanel: { diagramKey, title?, intro?, bullets?:[string], steps?:[{head,body}], tone?, layout?:'side'|'stacked' }
    if (c.diagramPanel && I[c.diagramPanel.diagramKey]) {
      const dp = c.diagramPanel;
      const tone = PATTERN_TONES[dp.tone || 'green'] || PATTERN_TONES.green;
      const stacked = dp.layout === 'stacked';
      const stepsGridCols = stacked && dp.steps && dp.steps.length >= 3 ? 'repeat(2, 1fr)' : '1fr';
      const notesHtml = dp.steps && dp.steps.length
        ? `<ol style="list-style:none;margin:0;padding:0;display:grid;grid-template-columns:${stepsGridCols};gap:${stacked ? '14px 22px' : '0'};">${dp.steps.map((s, i) => {
          const stepTone = s.tone ? (PATTERN_TONES[s.tone] || tone) : tone;
          const marker = s.icon
            ? `<span style="flex-shrink:0;width:34px;height:34px;border-radius:50%;background:${stepTone.accent};color:#fff;display:inline-flex;align-items:center;justify-content:center;font-size:16px;line-height:1;">${s.icon}</span>`
            : `<span style="flex-shrink:0;width:22px;height:22px;border-radius:50%;background:${stepTone.accent};color:#fff;display:inline-flex;align-items:center;justify-content:center;font-size:11px;font-weight:900;margin-top:1px;">${i + 1}</span>`;
          const bodyHtml = Array.isArray(s.body)
            ? `<ul style="margin:0;padding:0 0 0 18px;font-size:13px;color:#475569;line-height:1.55;">${s.body.map(b => `<li style="margin-bottom:2px;">${b}</li>`).join('')}</ul>`
            : `<div style="font-size:13px;color:#475569;line-height:1.55;">${s.body}</div>`;
          const divider = i < dp.steps.length - 1 && !stacked
            ? `border-bottom:1px solid #E7E7EA;padding-bottom:12px;margin-bottom:12px;`
            : '';
          return `
          <li style="display:flex;align-items:flex-start;gap:12px;${divider}">
            ${marker}
            <div style="flex:1;min-width:0;">
              <div style="font-weight:800;font-size:15px;color:${stepTone.label};margin-bottom:4px;">${s.head}</div>
              ${bodyHtml}
            </div>
          </li>`;
        }).join('')}</ol>`
        : `<ul style="list-style:none;margin:0;padding:0;">${(dp.bullets || []).map(b => `
          <li style="display:flex;align-items:flex-start;gap:10px;margin-bottom:10px;font-size:13.5px;color:#0B1426;line-height:1.55;">
            <span style="flex-shrink:0;width:8px;height:8px;border-radius:50%;background:${tone.accent};margin-top:7px;"></span>
            <span>${b}</span>
          </li>`).join('')}</ul>`;
      const titleOutside = dp.titleAbove && dp.title;
      const headerHtml = `
        ${(!titleOutside && dp.title) ? `<div style="font-weight:800;font-size:17px;color:#0B1426;margin-bottom:10px;">${dp.title}</div>` : ''}
        ${dp.intro ? `<div style="font-size:13.5px;color:#475569;margin-bottom:12px;">${dp.intro}</div>` : ''}`;
      if (titleOutside) content += genSecLabel(dp.titleEmoji || '⚖️', dp.title);
      if (stacked) {
        content += `
          <div style="margin-bottom:26px;border:1px solid #E7E7EA;border-radius:14px;background:#fff;padding:16px 18px;box-shadow:0 2px 8px rgba(0,0,0,0.04);">
            <div style="overflow-x:auto;margin-bottom:18px;">${I[dp.diagramKey]}</div>
            <div>${headerHtml}${notesHtml}</div>
          </div>`;
      } else {
        content += `
          <div style="display:grid;grid-template-columns:1.35fr 1fr;gap:18px;margin-bottom:26px;border:1px solid #E7E7EA;border-radius:14px;background:#fff;padding:14px 16px;align-items:center;box-shadow:0 2px 8px rgba(0,0,0,0.04);">
            <div style="min-width:0;overflow-x:auto;">${I[dp.diagramKey]}</div>
            <div style="display:flex;flex-direction:column;padding:0 4px;">${headerHtml}${notesHtml}</div>
          </div>`;
      }
    }

    // Horizontal step flow — numbered circles connected by dashed arrows.
    // Each step: { icon, title, sub, tone?, status? }. Optional status 'pass'|'fail'|'warn'
    // overlays a small badge on the icon — for narrative chains where each step has a verdict.
    if (c.flow && c.flow.length) {
      if (c.flowTitle) {
        content += genSecLabel(c.flowEmoji || '➡️', c.flowTitle);
      }
      const flowTones = ['green', 'amber', 'blue', 'purple', 'rose'];
      const n = c.flow.length;
      content += `<div style="display:grid;grid-template-columns:repeat(${n},1fr);gap:0;align-items:start;margin-bottom:26px;padding:18px 6px 6px;">`;
      content += c.flow.map((step, i) => {
        const t = PATTERN_TONES[step.tone || flowTones[i % flowTones.length]];
        const isLast = i === n - 1;
        const statusBadge = step.status === 'fail' ? `<div style="position:absolute;top:-4px;right:-4px;width:20px;height:20px;border-radius:50%;background:#DC2626;color:#fff;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900;box-shadow:0 1px 4px rgba(0,0,0,0.2);">✕</div>` :
                            step.status === 'pass' ? `<div style="position:absolute;top:-4px;right:-4px;width:20px;height:20px;border-radius:50%;background:#059669;color:#fff;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900;box-shadow:0 1px 4px rgba(0,0,0,0.2);">✓</div>` :
                            step.status === 'warn' ? `<div style="position:absolute;top:-4px;right:-4px;width:20px;height:20px;border-radius:50%;background:#F59E0B;color:#fff;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900;box-shadow:0 1px 4px rgba(0,0,0,0.2);">!</div>` : '';
        return `
          <div style="position:relative;display:flex;flex-direction:column;align-items:center;text-align:center;padding:0 10px;">
            <div style="position:relative;width:46px;height:46px;border-radius:50%;background:#fff;border:2px solid ${t.accent};color:${t.label};display:inline-flex;align-items:center;justify-content:center;font-size:15px;font-weight:900;box-shadow:0 2px 8px ${t.accent}40;margin-bottom:12px;z-index:1;">${i + 1}</div>
            <div style="position:relative;width:54px;height:54px;border-radius:50%;background:${t.bg};border:1px solid ${t.border};display:inline-flex;align-items:center;justify-content:center;font-size:24px;line-height:1;margin-bottom:12px;">${step.icon || ''}${statusBadge}</div>
            <div style="font-size:14px;font-weight:800;color:${t.label};line-height:1.3;margin-bottom:6px;">${step.title}</div>
            ${step.sub ? `<div style="font-size:12.5px;color:#475569;line-height:1.5;">${step.sub}</div>` : ''}
            ${!isLast ? `<div style="position:absolute;top:23px;left:calc(50% + 28px);right:calc(-50% + 28px);height:0;border-top:2px dashed #CBD5E1;z-index:0;"></div>` : ''}
          </div>
        `;
      }).join('');
      content += `</div>`;
    }

    // Interactive diagram — three-region pattern matching other interactive
    // charts in the project (e.g. PPF):
    //   Top:    SVG on the left, per-step chart description on the right
    //   Middle: horizontal tab strip (single-active, .ad-tab styling)
    //   Bottom: per-step analysis panel (.ad-panel styling, 4px tone border)
    // Clicking a tab reveals SVG layers cumulatively (i < vi) and swaps the
    // right-column description and bottom analysis panel in unison.
    //   Pattern: interactiveDiagram: { svgKey, layers:[string], label?, emoji?,
    //                                  views:[{label, tone?, icon?, head, body, analysis?}] }
    const idList = Array.isArray(c.interactiveDiagram)
      ? c.interactiveDiagram
      : (c.interactiveDiagram ? [c.interactiveDiagram] : []);
    idList.forEach((id, idIdx) => {
      if (!I[id.svgKey]) return;
      const baseUid = c.id ? c.id.replace(/[^a-z0-9]/gi, '_') : 'idc';
      const uid = idList.length > 1 ? `${baseUid}_${idIdx}` : baseUid;
      const layers = id.layers || [];
      const views = id.views || [];
      const defaultToneNames = ['blue', 'amber', 'green', 'rose', 'purple', 'slate'];
      if (id.label) content += genSecLabel(id.emoji || '📊', id.label);

      const stepStrip = views.map((v, i) => {
        const toneName = v.tone || defaultToneNames[i % defaultToneNames.length];
        const t = PATTERN_TONES[toneName] || PATTERN_TONES.blue;
        const isActive = i === 0;
        const showAttr = Array.isArray(v.show) ? ` data-id-show='${JSON.stringify(v.show)}'` : '';
        return `<button
          type="button"
          data-action="id-advance"
          data-id-uid="${uid}"
          data-id-vi="${i}"
          data-id-tone="${toneName}"${showAttr}
          style="display:flex;align-items:center;gap:10px;padding:10px 12px;background:${isActive ? t.bg : '#fff'};border:1px solid ${isActive ? t.border : '#E7E7EA'};border-radius:10px;box-shadow:${isActive ? '0 2px 10px ' + t.accent + '2A' : '0 1px 2px rgba(11,20,38,0.04)'};cursor:pointer;font-family:inherit;text-align:left;transition:background 0.18s,border-color 0.18s,box-shadow 0.18s;">
          <span data-id-circle style="flex-shrink:0;width:26px;height:26px;border-radius:50%;background:${isActive ? t.accent : '#E2E8F0'};color:${isActive ? '#fff' : '#475569'};display:inline-flex;align-items:center;justify-content:center;font-size:12px;font-weight:900;">${i + 1}</span>
          <span data-id-label style="flex:1;min-width:0;font-size:13px;font-weight:700;color:${isActive ? t.label : '#0B1426'};line-height:1.3;">${v.label}</span>
        </button>`;
      }).join('');

      const stripCols = `repeat(${views.length}, minmax(0, 1fr))`;

      if (id.wide) {
        // Wide layout: SVG full-width centred, head+body+analysis merged below tabs.
        // Opt in per-diagram with wide:true in the interactiveDiagram data object.
        const combinedPanels = views.map((v, i) => {
          const toneName = v.tone || defaultToneNames[i % defaultToneNames.length];
          const t = PATTERN_TONES[toneName] || PATTERN_TONES.blue;
          const bodyHtml = !v.body ? '' : Array.isArray(v.body)
            ? `<ul style="margin:0;padding:0 0 0 18px;font-size:13.5px;color:#475569;line-height:1.6;">${v.body.map(b => `<li style="margin-bottom:4px;">${b}</li>`).join('')}</ul>`
            : `<div style="font-size:13.5px;color:#475569;line-height:1.65;">${v.body}</div>`;
          const analysisHtml = v.analysis ? `
            <div style="margin-top:14px;padding-top:14px;border-top:1px solid ${t.border}60;">
              <div style="font-size:11px;font-weight:800;letter-spacing:0.09em;text-transform:uppercase;color:${t.label};margin-bottom:8px;">Analysis</div>
              <div style="font-size:13.5px;color:#0B1426;line-height:1.7;">${v.analysis}</div>
            </div>` : '';
          return `<div data-id-analysis="${i}" style="display:${i === 0 ? 'block' : 'none'};background:#fff;border:1px solid #E7E7EA;border-left:4px solid ${t.accent};border-radius:10px;padding:16px 20px;box-shadow:0 1px 3px rgba(11,20,38,0.04);">
            ${v.head ? `<div style="font-weight:800;font-size:15px;color:${t.label};line-height:1.35;margin-bottom:${v.body ? '8px' : '0'};">${v.head}</div>` : ''}
            ${bodyHtml}
            ${analysisHtml}
          </div>`;
        }).join('');
        content += `
          <div data-id-root="${uid}" data-id-layers='${JSON.stringify(layers)}' style="margin-bottom:26px;">
            <div style="border:1px solid #E7E7EA;border-radius:14px;background:#fff;padding:12px 14px;box-shadow:0 2px 8px rgba(11,20,38,0.04);margin-bottom:10px;overflow-x:auto;">
              <div style="max-width:640px;margin:0 auto;">${I[id.svgKey]}</div>
            </div>
            <div style="display:grid;grid-template-columns:${stripCols};gap:10px;margin-bottom:10px;">${stepStrip}</div>
            ${combinedPanels}
          </div>`;
      } else {
        // Default layout: SVG left (1.55fr) + description right (1fr), analysis panel below.
        const descItems = views.map((v, i) => {
          const toneName = v.tone || defaultToneNames[i % defaultToneNames.length];
          const t = PATTERN_TONES[toneName] || PATTERN_TONES.blue;
          const bodyHtml = Array.isArray(v.body)
            ? `<ul style="margin:0;padding:0 0 0 18px;font-size:13px;color:#475569;line-height:1.6;">${v.body.map(b => `<li style="margin-bottom:3px;">${b}</li>`).join('')}</ul>`
            : `<div style="font-size:13px;color:#475569;line-height:1.65;">${v.body}</div>`;
          const marker = v.icon
            ? `<span style="flex-shrink:0;width:32px;height:32px;border-radius:50%;background:${t.accent};color:#fff;display:inline-flex;align-items:center;justify-content:center;font-size:16px;line-height:1;">${v.icon}</span>`
            : `<span style="flex-shrink:0;width:28px;height:28px;border-radius:50%;background:${t.accent};color:#fff;display:inline-flex;align-items:center;justify-content:center;font-size:13px;font-weight:900;">${i + 1}</span>`;
          return `<div data-id-desc="${i}" style="display:${i === 0 ? 'flex' : 'none'};align-items:flex-start;gap:12px;">
            ${marker}
            <div style="flex:1;min-width:0;">
              <div style="font-weight:800;font-size:14.5px;color:${t.label};margin-bottom:6px;letter-spacing:0.01em;">${v.head}</div>
              ${bodyHtml}
            </div>
          </div>`;
        }).join('');
        const hasAnalysis = views.some(v => v.analysis);
        const analysisItems = hasAnalysis ? views.map((v, i) => {
          const toneName = v.tone || defaultToneNames[i % defaultToneNames.length];
          const t = PATTERN_TONES[toneName] || PATTERN_TONES.blue;
          if (!v.analysis) return `<div data-id-analysis="${i}" style="display:none;"></div>`;
          return `<div data-id-analysis="${i}" style="display:${i === 0 ? 'block' : 'none'};background:#fff;border:1px solid #E7E7EA;border-left:4px solid ${t.accent};border-radius:10px;padding:14px 18px;box-shadow:0 1px 3px rgba(11,20,38,0.04);">
            <div style="font-size:11px;font-weight:800;letter-spacing:0.09em;text-transform:uppercase;color:${t.label};margin-bottom:8px;">Analysis</div>
            <div style="font-size:13.5px;color:#0B1426;line-height:1.7;">${v.analysis}</div>
          </div>`;
        }).join('') : '';
        content += `
          <div data-id-root="${uid}" data-id-layers='${JSON.stringify(layers)}' style="margin-bottom:26px;">
            <div style="border:1px solid #E7E7EA;border-radius:14px;background:#fff;padding:14px 16px;box-shadow:0 2px 8px rgba(11,20,38,0.04);margin-bottom:12px;">
              <div style="display:grid;grid-template-columns:1.55fr 1fr;gap:18px;align-items:center;">
                <div style="min-width:0;overflow-x:auto;">${I[id.svgKey]}</div>
                <div style="display:flex;flex-direction:column;padding:0 4px;">${descItems}</div>
              </div>
            </div>
            <div style="display:grid;grid-template-columns:${stripCols};gap:10px;${hasAnalysis ? 'margin-bottom:12px;' : ''}">${stepStrip}</div>
            ${analysisItems}
          </div>`;
      }
    });

    // Paired left/right HTML is built once via a closure so it can be emitted
    // either before the flow (c.pairFirst === true) or in its default slot
    // further down the renderer, without duplicating ~60 lines of markup.
    const buildPairHtml = () => {
      if (!c.left || !c.right) return '';
      const renderPairedSide = (side, fallbackTone) => {
        const tone = PATTERN_TONES[side.tone] || PATTERN_TONES[fallbackTone];
        const useRows = Array.isArray(side.rows) && side.rows.length > 0;
        const useChecks = Array.isArray(side.checks) && side.checks.length > 0;
        const useScenarios = Array.isArray(side.scenarios) && side.scenarios.length > 0;
        const inner = useScenarios
          ? `<div style="display:grid;grid-template-columns:repeat(${side.scenarios.length},1fr);gap:14px;">${side.scenarios.map(s => {
              const arrow = s.arrow === 'left'
                ? `<div style="font-size:22px;color:#DC2626;font-weight:800;line-height:1;">←</div>`
                : `<div style="font-size:22px;color:#059669;font-weight:800;line-height:1;">→</div>`;
              return `
                <div style="display:flex;flex-direction:column;align-items:center;text-align:center;gap:8px;">
                  <div style="display:flex;align-items:center;justify-content:center;gap:6px;font-size:36px;line-height:1;">${s.icon || ''}${arrow}</div>
                  <div style="font-size:13px;color:#0B1426;line-height:1.55;">${s.text || ''}</div>
                </div>`;
            }).join('')}</div>`
          : useChecks
            ? `<ul style="list-style:none;margin:0;padding:0;">${side.checks.map(ch => `
                <li style="display:flex;align-items:flex-start;gap:10px;margin-bottom:9px;font-size:13.5px;color:#0B1426;line-height:1.6;">
                  <span style="flex-shrink:0;width:20px;height:20px;border-radius:50%;background:${tone.accent};color:#fff;display:inline-flex;align-items:center;justify-content:center;font-size:11px;font-weight:900;margin-top:1px;">✓</span>
                  <span><strong style="color:${tone.label};">${ch.term}</strong> — ${ch.body}</span>
                </li>`).join('')}</ul>`
            : side.text
              ? `<div style="font-size:14px;color:#0B1426;line-height:1.65;">${side.text}</div>`
              : (useRows
                ? side.rows.map((r, idx) => `
                  <div style="display:flex;align-items:flex-start;gap:12px;padding:10px 0;${idx === 0 ? '' : `border-top:1px solid ${tone.border}40;`}">
                    <div style="width:42px;height:42px;border-radius:50%;background:#fff;border:1px solid ${tone.border};display:inline-flex;align-items:center;justify-content:center;font-size:20px;line-height:1;flex-shrink:0;box-shadow:0 1px 3px rgba(0,0,0,0.05);">${r.icon || ''}</div>
                    <div style="flex:1;min-width:0;">
                      <div style="font-weight:800;font-size:14px;color:${tone.label};line-height:1.3;margin-bottom:3px;">${idx + 1}. ${r.title}</div>
                      <div style="font-size:13px;color:#0B1426;line-height:1.55;">${r.text}</div>
                    </div>
                  </div>`).join('')
                : `<ul style="font-size:13px;color:#0B1426;line-height:1.65;padding:0 0 0 1.2em;margin:0;list-style-type:disc;">
                    ${(side.points || []).map(p => `<li style="margin-bottom:8px;padding-left:4px;color:${tone.label};"><span style="color:#0B1426;">${p}</span></li>`).join('')}
                  </ul>`);
        const numberHtml = (side.number != null)
          ? `<div style="width:28px;height:28px;border-radius:50%;background:#fff;border:2px solid ${tone.accent};color:${tone.label};display:inline-flex;align-items:center;justify-content:center;font-size:13px;font-weight:900;flex-shrink:0;">${side.number}</div>`
          : '';
        const iconHtml = side.icon
          ? (side.iconStyle === 'circle'
              ? `<div style="width:40px;height:40px;border-radius:50%;background:${tone.accent};color:#fff;display:inline-flex;align-items:center;justify-content:center;font-size:19px;line-height:1;flex-shrink:0;">${side.icon}</div>`
              : `<div style="font-size:20px;line-height:1;">${side.icon}</div>`)
          : '';
        const plain = side.style === 'plain-white';
        const bg = plain ? '#fff' : tone.bg;
        const border = plain ? '#E7E7EA' : tone.border;
        const headerAlign = side.centeredLabel ? 'center' : 'flex-start';
        return `
          <div style="border-radius:14px;background:${bg};border:1px solid ${border};box-shadow:0 1px 3px rgba(0,0,0,0.04);padding:18px 20px;">
            <div style="display:flex;align-items:center;justify-content:${headerAlign};gap:12px;margin-bottom:14px;">
              ${numberHtml}${iconHtml}
              <div style="color:${tone.label};font-weight:800;font-size:16px;letter-spacing:0.01em;">${side.label}</div>
            </div>
            ${inner}
          </div>`;
      };
      let html = '';
      if (c.pairLabel !== null) {
        html += genSecLabel(c.pairEmoji || '⚖️', c.pairLabel || 'Head to head');
      }
      html += `
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:22px;">
        ${renderPairedSide(c.left, 'green')}
        ${renderPairedSide(c.right, 'amber')}
      </div>`;
      return html;
    };
    if (c.pairFirst && c.left && c.right) {
      content += buildPairHtml();
    }

    // Key points — flat 3-column takeaway tiles with a coloured bottom border.
    // Each point: { icon?, title, headline?, body?, tone? }. Used as a punchy
    // "what to know" summary that complements (or replaces) the chunky `flow`.
    if (c.keyPoints && c.keyPoints.length) {
      if (c.keyPointsLabel) content += genSecLabel(c.keyPointsEmoji || '🔑', c.keyPointsLabel);
      const kpTones = ['green', 'amber', 'blue', 'purple', 'rose', 'slate'];
      const n = c.keyPoints.length;
      const compare = c.keyPointsCompare && n === 2;
      const minimal = c.keyPointsStyle === 'minimal';
      const cols = compare ? '1fr auto 1fr' : `repeat(${c.keyPointsCols || n},1fr)`;
      content += `<div style="display:grid;grid-template-columns:${cols};gap:14px;margin-bottom:26px;align-items:stretch;">`;
      const tiles = c.keyPoints.map((p, i) => {
        const t = PATTERN_TONES[p.tone || kpTones[i % kpTones.length]];
        return `
          <div style="background:#fff;border:1px solid #E2E8F0;border-bottom:4px solid ${t.accent};border-radius:10px;padding:16px 18px 18px;display:flex;flex-direction:column;">
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;">
              ${(compare || minimal) ? '' : `<div style="width:26px;height:26px;border-radius:50%;background:${t.accent};color:#fff;display:inline-flex;align-items:center;justify-content:center;font-size:13px;font-weight:800;flex-shrink:0;">${i + 1}</div>`}
              ${p.icon ? `<div style="font-size:20px;line-height:1;flex-shrink:0;">${p.icon}</div>` : ''}
              <div style="font-size:15px;font-weight:800;color:${t.label};letter-spacing:0.01em;">${p.title}</div>
            </div>
            ${p.headline ? `<div style="font-size:14px;font-weight:${minimal ? '500' : '800'};color:#0F172A;line-height:1.5;margin-bottom:8px;">${p.headline}</div>` : ''}
            ${p.body ? `<div style="font-size:13.5px;color:#475569;line-height:1.6;">${p.body}</div>` : ''}
          </div>`;
      });
      if (compare) {
        const vs = `<div style="display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:900;color:#94A3B8;letter-spacing:0.05em;text-transform:uppercase;">vs</div>`;
        content += tiles[0] + vs + tiles[1];
      } else {
        content += tiles.join('');
      }
      content += `</div>`;

      // Formula pill row — renders immediately after the keyPoints grid.
      // Pills sit in a grid that mirrors keyPointsCols so each pill lines up
      // with the column above. Operators are absolutely positioned in the gap
      // between pills.
      // Pattern: keyPointsFormula: [{ label, tone } | { op: '+' }]
      if (c.keyPointsFormula && c.keyPointsFormula.length) {
        const pills = [];
        let pending = null;
        for (const item of c.keyPointsFormula) {
          if (item.op) {
            if (pending) pending.op = item.op;
          } else {
            if (pending) pills.push(pending);
            pending = Object.assign({}, item);
          }
        }
        if (pending) pills.push(pending);
        const fCols = c.keyPointsCols || pills.length;
        const cells = pills.map(p => {
          const t = PATTERN_TONES[p.tone] || PATTERN_TONES.blue;
          const pill = `<span style="display:flex;align-items:center;justify-content:center;margin:0 14px;padding:10px 18px;border-radius:999px;background:${t.bg};border:2px solid ${t.accent};color:${t.label};font-size:16px;font-weight:800;letter-spacing:0.03em;">${p.label}</span>`;
          const op = p.op ? `<span style="position:absolute;right:-7px;top:50%;transform:translate(50%,-50%);font-size:24px;font-weight:900;color:#94A3B8;z-index:1;line-height:1;">${p.op}</span>` : '';
          return `<div style="position:relative;">${pill}${op}</div>`;
        }).join('');
        content += `<div style="display:grid;grid-template-columns:repeat(${fCols},1fr);gap:14px;margin-top:-10px;margin-bottom:26px;">${cells}</div>`;
      }
    }

    // Examples — 2-col responsive grid of numbered tiles, each with a large illustration
    // icon on the left and a body paragraph on the right. Used for "real markets" style cards.
    //   Pattern: examples: [{ tone, icon, title, body, startNumber? }]
    if (c.examples && c.examples.length) {
      const exTones = ['green', 'amber', 'blue', 'purple', 'rose', 'slate'];
      const startNum = c.examplesStartNumber || 1;
      const tiles = c.examples.map((p, i) => {
        const t = PATTERN_TONES[p.tone || exTones[i % exTones.length]];
        return `
          <div style="background:#fff;border:1px solid #E7E7EA;border-radius:14px;padding:18px 20px 18px;display:flex;flex-direction:column;box-shadow:0 1px 3px rgba(0,0,0,0.04);">
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;">
              <div style="width:28px;height:28px;border-radius:50%;background:#fff;border:2px solid ${t.accent};color:${t.label};display:inline-flex;align-items:center;justify-content:center;font-size:13px;font-weight:900;flex-shrink:0;">${startNum + i}</div>
              <div style="font-size:17px;font-weight:800;color:${t.label};line-height:1.3;">${p.title}</div>
            </div>
            <div style="display:flex;align-items:flex-start;gap:16px;">
              <div style="flex-shrink:0;width:88px;height:88px;border-radius:14px;background:${t.bg};display:inline-flex;align-items:center;justify-content:center;font-size:48px;line-height:1;">${p.icon || ''}</div>
              <div style="flex:1;min-width:0;font-size:14px;color:#0B1426;line-height:1.65;">${p.body}</div>
            </div>
          </div>`;
      }).join('');
      content += `<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:14px;margin-bottom:18px;">${tiles}</div>`;
    }

    // Market grid — 2x2 of market-context tiles with mini D/S charts whose
    // gradients reflect each market's elasticity profile.
    //   marketGrid: [{ tone, title, icon, body, supplyElast, demandElast,
    //                  priceLabel, quantityLabel, supplyLabel, demandLabel }]
    //   *Elast: 'inelastic' | 'normal' | 'elastic'
    if (c.marketGrid && c.marketGrid.length) {
      const elastDelta = (kind) => kind === 'inelastic'
        ? { dx: 15, dy: 58 }
        : kind === 'elastic'
          ? { dx: 92, dy: 24 }
          : { dx: 60, dy: 58 };
      const renderMiniChart = (item, _tone) => {
        const sE = elastDelta(item.supplyElast || 'normal');
        const dE = elastDelta(item.demandElast || 'normal');
        const Ex = 152, Ey = 96;
        const sx1 = Ex - sE.dx, sy1 = Ey + sE.dy;
        const sx2 = Ex + sE.dx, sy2 = Ey - sE.dy;
        const dx1 = Ex - dE.dx, dy1 = Ey - dE.dy;
        const dx2 = Ex + dE.dx, dy2 = Ey + dE.dy;
        const clip = (x, y) => {
          const minX = 42, maxX = 262, minY = 22, maxY = 168;
          return [Math.max(minX, Math.min(maxX, x)), Math.max(minY, Math.min(maxY, y))];
        };
        const [sX1, sY1] = clip(sx1, sy1);
        const [sX2, sY2] = clip(sx2, sy2);
        const [dX1, dY1] = clip(dx1, dy1);
        const [dX2, dY2] = clip(dx2, dy2);
        const sColor = '#F97316';
        const dColor = '#2563EB';
        const supplyLabel = item.supplyLabel || 'S';
        const demandLabel = item.demandLabel || 'D';
        const pLabel = item.priceLabel || 'Price';
        return `
          <svg viewBox="0 0 290 200" style="width:100%;display:block;" xmlns="http://www.w3.org/2000/svg">
            <line x1="42" y1="18" x2="42" y2="172" stroke="#94A3B8" stroke-width="1.5"/>
            <line x1="38" y1="168" x2="270" y2="168" stroke="#94A3B8" stroke-width="1.5"/>
            <text x="6" y="28" font-size="11" fill="#475569" font-family="Georgia,serif" font-style="italic">${pLabel}</text>
            <text x="240" y="190" font-size="11" fill="#475569" font-family="Georgia,serif" font-style="italic">Quantity</text>
            <text x="32" y="184" font-size="11" fill="#475569" font-family="Georgia,serif" font-style="italic">0</text>
            <line x1="42" y1="${Ey}" x2="${Ex}" y2="${Ey}" stroke="#94A3B8" stroke-width="1" stroke-dasharray="3,3"/>
            <line x1="${Ex}" y1="${Ey}" x2="${Ex}" y2="168" stroke="#94A3B8" stroke-width="1" stroke-dasharray="3,3"/>
            <line x1="${dX1}" y1="${dY1}" x2="${dX2}" y2="${dY2}" stroke="${dColor}" stroke-width="2.4" stroke-linecap="round"/>
            <line x1="${sX1}" y1="${sY1}" x2="${sX2}" y2="${sY2}" stroke="${sColor}" stroke-width="2.4" stroke-linecap="round"/>
            <circle cx="${Ex}" cy="${Ey}" r="3.5" fill="#0B1426"/>
            <text x="${Ex + 6}" y="${Ey - 6}" font-size="12" font-weight="700" fill="#0B1426" font-family="Georgia,serif">E</text>
            <text x="${sX2 + 4}" y="${sY2 + 4}" font-size="12" font-weight="700" fill="${sColor}" font-family="Georgia,serif">${supplyLabel}</text>
            <text x="${dX2 + 4}" y="${dY2 + 4}" font-size="12" font-weight="700" fill="${dColor}" font-family="Georgia,serif">${demandLabel}</text>
            <text x="22" y="${Ey + 4}" font-size="11" fill="#475569" font-family="Georgia,serif" font-style="italic">${item.priceTick || 'Pe'}</text>
            <text x="${Ex - 8}" y="184" font-size="11" fill="#475569" font-family="Georgia,serif" font-style="italic">Qe</text>
          </svg>`;
      };
      const tilesHtml = c.marketGrid.map((item, i) => {
        const t = PATTERN_TONES[item.tone || 'green'] || PATTERN_TONES.green;
        return `
          <div style="background:#fff;border:1px solid #E7E7EA;border-radius:14px;padding:18px 20px 18px;display:flex;flex-direction:column;box-shadow:0 1px 3px rgba(0,0,0,0.04);">
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;">
              <div style="width:28px;height:28px;border-radius:50%;background:#fff;border:2px solid ${t.accent};color:${t.label};display:inline-flex;align-items:center;justify-content:center;font-size:13px;font-weight:900;flex-shrink:0;">${i + 1}</div>
              <div style="font-size:16px;font-weight:800;color:${t.label};line-height:1.3;">${item.title}</div>
            </div>
            <div style="display:flex;justify-content:center;align-items:center;height:64px;font-size:42px;line-height:1;margin-bottom:4px;">${item.icon || ''}</div>
            ${renderMiniChart(item, t)}
            <div style="font-size:13px;color:#0B1426;line-height:1.6;margin-top:10px;">${item.body}</div>
          </div>`;
      }).join('');
      content += `<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:14px;margin-bottom:22px;">${tilesHtml}</div>`;
    }

    // Framework — a bordered container holding a uppercase label, 3 numbered
    // tinted tiles, and an embedded flow SVG (via diagramKey). Used for
    // "core functions" overviews like the Price Mechanism big-picture card.
    //   framework: { label, tiles: [{tone,icon,title,body}], diagramKey }
    if (c.framework && c.framework.tiles && c.framework.tiles.length) {
      const fw = c.framework;
      const fwTiles = fw.tiles.map((tile, i) => {
        const t = PATTERN_TONES[tile.tone || 'blue'] || PATTERN_TONES.blue;
        return `
          <div style="background:${t.bg};border:1px solid ${t.border};border-radius:14px;padding:18px 16px 20px;display:flex;flex-direction:column;align-items:center;text-align:center;gap:10px;">
            <div style="width:28px;height:28px;border-radius:50%;background:#fff;border:2px solid ${t.accent};color:${t.label};display:inline-flex;align-items:center;justify-content:center;font-size:13px;font-weight:900;align-self:flex-start;">${i + 1}</div>
            <div style="font-size:38px;line-height:1;margin-top:-8px;">${tile.icon || ''}</div>
            <div style="font-size:17px;font-weight:800;color:${t.label};">${tile.title}</div>
            <div style="font-size:13px;color:#0B1426;line-height:1.55;">${tile.body}</div>
          </div>`;
      }).join('');
      const fwDiagram = fw.diagramKey && I[fw.diagramKey] ? I[fw.diagramKey] : '';
      content += `
        <div style="background:#fff;border:1px solid #E2E8F0;border-radius:16px;padding:6px 22px 18px;margin-bottom:22px;">
          ${fw.label ? genSecLabel(fw.labelEmoji || '⭐', fw.label) : ''}
          <div style="display:grid;grid-template-columns:repeat(${fw.tiles.length},1fr);gap:14px;margin-bottom:${fwDiagram ? '14px' : '0'};">${fwTiles}</div>
          ${fwDiagram ? `<div style="margin-top:6px;">${fwDiagram}</div>` : ''}
        </div>`;
    }

    // Economist quote — a portrait + italic quote callout for surfacing
    // famous economist insights tied to the card's concept.
    //   economistQuote: { portraitKey, tone, label, quote, attribution }
    if (c.economistQuote && c.economistQuote.quote) {
      const eq = c.economistQuote;
      const portrait = eq.portraitKey && I[eq.portraitKey] ? I[eq.portraitKey] : '';
      const t = PATTERN_TONES[eq.tone || 'amber'] || PATTERN_TONES.amber;
      content += `
        <div style="display:grid;grid-template-columns:130px 1fr;gap:20px;align-items:center;background:${t.bg};border:1px solid ${t.border};border-left:4px solid ${t.accent};border-radius:14px;padding:18px 22px;margin-bottom:22px;">
          <div style="width:130px;height:160px;display:flex;align-items:center;justify-content:center;overflow:hidden;">${portrait}</div>
          <div>
            <div style="font-size:11px;font-weight:800;color:${t.label};text-transform:uppercase;letter-spacing:0.1em;margin-bottom:8px;">${eq.label || 'Economist insight'}</div>
            <div style="font-size:15.5px;line-height:1.65;color:#0B1426;font-style:italic;margin-bottom:10px;">&ldquo;${eq.quote}&rdquo;</div>
            <div style="font-size:13px;color:${t.label};font-weight:700;">— ${eq.attribution}</div>
          </div>
        </div>`;
    }

    // Body text — styled as a rich explainer
    if (c.body) {
      content += `
        <div style="font-size:15px;line-height:1.8;color:#0B1426;margin-bottom:22px;padding:18px 20px;background:#FAFBFF;border-radius:12px;border:1px solid #E7E7EA;">
          ${c.body}
        </div>`;
    }

    // Paired: left / right — defines the two things being contrasted, so
    // renders before causes / table / branches which build on top of them.
    //   - Default: each side has `points: [string]` → bullet list.
    //   - Richer: each side has `rows: [{icon, title, text}]` → numbered icon rows.
    //   - Each side can optionally specify `tone` + header `icon`.
    if (c.left && c.right && !c.pairFirst) {
      content += buildPairHtml();
    }

    // Concept boxes — tinted panels side-by-side (2-col responsive grid), each with icon flows + bullets.
    // Data: [{ tone, head, sub?, flows: [{inputs:[{icon,label}], outputs:[{icon,label}], connector}], bullets:[] }]
    if (c.conceptBoxes && c.conceptBoxes.length) {
      const boxesHtml = c.conceptBoxes.map(box => {
        const t = PATTERN_TONES[box.tone || 'blue'] || PATTERN_TONES.blue;
        // Input icons: white circle with a colored ring border
        const inputIcon = (item) => `
          <div style="display:flex;flex-direction:column;align-items:center;gap:5px;min-width:0;">
            <div style="width:48px;height:48px;border-radius:50%;background:#fff;border:2.5px solid ${t.accent};display:inline-flex;align-items:center;justify-content:center;font-size:24px;line-height:1;flex-shrink:0;">${item.icon}</div>
            <div style="font-size:11px;font-weight:700;color:#0B1426;text-align:center;line-height:1.25;max-width:60px;">${item.label}</div>
          </div>`;
        // Output icons: rounded squares with soft tinted background
        const outputIcon = (item) => `
          <div style="display:flex;flex-direction:column;align-items:center;gap:5px;min-width:0;">
            <div style="width:48px;height:48px;border-radius:10px;background:${t.soft};border:1px solid ${t.border};display:inline-flex;align-items:center;justify-content:center;font-size:24px;line-height:1;flex-shrink:0;">${item.icon}</div>
            <div style="font-size:11px;font-weight:700;color:#0B1426;text-align:center;line-height:1.25;max-width:60px;">${item.label}</div>
          </div>`;
        const connectorText = (text) => `<div style="font-size:13px;font-weight:800;color:${t.label};flex-shrink:0;padding:0 4px;align-self:center;margin-bottom:18px;">${text}</div>`;
        const arrowEl = `<div style="font-size:20px;color:${t.label};font-weight:700;flex-shrink:0;align-self:center;margin-bottom:18px;">→</div>`;
        const flowsHtml = (box.flows || []).map(flow => `
          <div style="display:flex;align-items:flex-start;justify-content:center;gap:10px;flex-wrap:wrap;margin-bottom:14px;">
            ${flow.inputs.map(inputIcon).join('')}
            ${arrowEl}
            ${flow.outputs.map((item, i) => `${i > 0 ? connectorText(flow.connector) : ''}${outputIcon(item)}`).join('')}
          </div>`).join('');
        const bulletsHtml = (box.bullets || []).map(b => `
          <li style="display:flex;gap:8px;font-size:13px;color:#0B1426;line-height:1.6;margin-bottom:5px;">
            <span style="color:${t.label};flex-shrink:0;margin-top:1px;">•</span><span>${b}</span>
          </li>`).join('');
        return `
          <div style="border-radius:16px;background:#fff;border:1px solid #E7E7EA;padding:24px 22px 20px;display:flex;flex-direction:column;">
            <div style="text-align:center;font-size:17px;font-weight:800;color:${t.label};margin-bottom:4px;">${box.head}</div>
            ${box.sub ? `<div style="text-align:center;font-size:13px;color:#64748B;font-weight:500;margin-bottom:18px;">${box.sub}</div>` : ''}
            ${flowsHtml}
            <ul style="margin:10px 0 0;padding:0;list-style:none;">${bulletsHtml}</ul>
          </div>`;
      }).join('');
      content += `<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:22px;">${boxesHtml}</div>`;
    }

    // Shift diagrams — two mini SVGs (increase / decrease) side by side.
    // `shiftDiagrams: true` → upward-sloping supply curves.
    // `shiftDiagrams: 'demand'` → downward-sloping demand curves.
    if (c.shiftDiagrams) {
      const isDemand = c.shiftDiagrams === 'demand';
      const axes = `
        <line x1="22" y1="6" x2="22" y2="122" stroke="#CBD5E1" stroke-width="1.5"/>
        <line x1="22" y1="122" x2="168" y2="122" stroke="#CBD5E1" stroke-width="1.5"/>
        <text x="10" y="14" font-size="11" fill="#94A3B8" font-family="system-ui,sans-serif">P</text>
        <text x="163" y="134" font-size="11" fill="#94A3B8" font-family="system-ui,sans-serif">Q</text>`;
      // Supply curves slope up (bottom-left → top-right); demand curves slope down (top-left → bottom-right).
      // At t=0.5 both beziers pass through y≈64, x≈58 (curve 1) and x≈98 (curve 2) — arrow sits between.
      const c1 = isDemand ? 'M 28,16 Q 55,65 95,110'  : 'M 28,110 Q 55,65 95,16';
      const c2 = isDemand ? 'M 68,16 Q 95,65 135,110' : 'M 68,110 Q 95,65 135,16';
      // Label positions: supply → top of curve; demand → bottom of curve
      const lbl1x = isDemand ? 97  : 97;  const lbl1y = isDemand ? 118 : 13;
      const lbl2x = isDemand ? 137 : 137; const lbl2y = isDemand ? 118 : 13;
      const curveLabel = isDemand ? ['D', 'D'] : ['S', 'S'];
      const rightSvg = `<svg viewBox="0 0 175 135" style="width:100%;display:block;" xmlns="http://www.w3.org/2000/svg">
        ${axes}
        <path d="${c1}" fill="none" stroke="#CBD5E1" stroke-width="1.8" stroke-dasharray="5,3"/>
        <path d="${c2}" fill="none" stroke="#059669" stroke-width="2.2"/>
        <text x="${lbl1x}" y="${lbl1y}" font-size="10" fill="#94A3B8" font-family="system-ui,sans-serif">${curveLabel[0]}₁</text>
        <text x="${lbl2x}" y="${lbl2y}" font-size="10" fill="#059669" font-weight="bold" font-family="system-ui,sans-serif">${curveLabel[1]}₂</text>
        <line x1="64" y1="64" x2="92" y2="64" stroke="#059669" stroke-width="1.5" stroke-dasharray="4,3"/>
        <polygon points="92,61 99,64 92,67" fill="#059669"/>
      </svg>`;
      const leftSvg = `<svg viewBox="0 0 175 135" style="width:100%;display:block;" xmlns="http://www.w3.org/2000/svg">
        ${axes}
        <path d="${c2}" fill="none" stroke="#CBD5E1" stroke-width="1.8" stroke-dasharray="5,3"/>
        <path d="${c1}" fill="none" stroke="#DC2626" stroke-width="2.2"/>
        <text x="${lbl2x}" y="${lbl2y}" font-size="10" fill="#94A3B8" font-family="system-ui,sans-serif">${curveLabel[0]}₁</text>
        <text x="${lbl1x}" y="${lbl1y}" font-size="10" fill="#DC2626" font-weight="bold" font-family="system-ui,sans-serif">${curveLabel[1]}₂</text>
        <line x1="92" y1="64" x2="64" y2="64" stroke="#DC2626" stroke-width="1.5" stroke-dasharray="4,3"/>
        <polygon points="64,61 57,64 64,67" fill="#DC2626"/>
      </svg>`;
      const noun = isDemand ? 'Demand' : 'Supply';
      content += `
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:22px;">
          <div style="background:#ECFDF5;border:1px solid #A7F3D0;border-radius:12px;padding:14px 14px 10px;">
            ${rightSvg}
            <div style="text-align:center;font-size:12px;font-weight:700;color:#059669;margin-top:6px;">${noun} increases (right shift)</div>
          </div>
          <div style="background:#FEF2F2;border:1px solid #FECACA;border-radius:12px;padding:14px 14px 10px;">
            ${leftSvg}
            <div style="text-align:center;font-size:12px;font-weight:700;color:#DC2626;margin-top:6px;">${noun} decreases (left shift)</div>
          </div>
        </div>`;
    }

    // Worked example — illustrated scenario header + N tone-coded cards
    // separated by circular operators, with an optional summary equation bar.
    //   Pattern: workedExample: {
    //     label?, emoji?, scene?: 'steelPlant' | ...,
    //     cards: [{ tone, icon, title, subtitle?, bullets?:[string], body?, badge?:{icon,text}, op?:'+'|'=' }],
    //     summary?: [{ icon, label, tone } | { op:'+'|'=' }]
    //   }
    if (c.workedExample) {
      const we = c.workedExample;
      if (we.label !== null) content += genSecLabel(we.emoji || '🔬', we.label || 'Worked example');
      if (we.heroImage) {
        content += `<div style="margin-bottom:20px;border-radius:14px;overflow:hidden;border:1px solid #E2E8F0;"><img src="${we.heroImage}" alt="" style="display:block;width:100%;height:auto;" /></div>`;
      } else if (we.scene && SCENES[we.scene]) {
        content += `<div style="margin-bottom:20px;border-radius:14px;overflow:hidden;border:1px solid #E2E8F0;">${SCENES[we.scene]}</div>`;
      }
      const weCards = we.cards || [];
      const weCols = weCards.length;
      const weCellGap = 28;
      const weCells = weCards.map(card => {
        const t = PATTERN_TONES[card.tone] || PATTERN_TONES.blue;
        const bulletsHtml = card.bullets && card.bullets.length ? `
          <ul style="list-style:none;padding:0;margin:0 0 14px;display:flex;flex-direction:column;gap:8px;">
            ${card.bullets.map(b => `<li style="display:flex;align-items:flex-start;gap:10px;font-size:14px;color:#0B1426;line-height:1.5;"><span style="width:7px;height:7px;border-radius:50%;background:${t.accent};margin-top:8px;flex-shrink:0;"></span><span>${b}</span></li>`).join('')}
          </ul>` : '';
        const bodyHtml = card.body ? `<div style="font-size:14px;color:#0B1426;line-height:1.6;margin-bottom:14px;flex:1;">${card.body}</div>` : '';
        const badgeHtml = card.badge ? `
          <div style="display:flex;align-items:center;gap:10px;background:${t.soft};border-radius:10px;padding:9px 12px;margin-top:auto;">
            <div style="width:26px;height:26px;border-radius:50%;background:#fff;display:inline-flex;align-items:center;justify-content:center;font-size:13px;flex-shrink:0;">${card.badge.icon}</div>
            <div style="font-size:13px;font-weight:800;color:${t.label};line-height:1.3;">${card.badge.text}</div>
          </div>` : '';
        const opHtml = card.op ? `<div style="position:absolute;top:50%;left:calc(100% + ${weCellGap / 2}px);transform:translate(-50%,-50%);width:40px;height:40px;border-radius:50%;background:#fff;border:2px solid ${t.accent};color:${t.label};display:inline-flex;align-items:center;justify-content:center;font-size:20px;font-weight:900;z-index:2;box-shadow:0 2px 6px rgba(0,0,0,0.06);">${card.op}</div>` : '';
        return `
          <div style="position:relative;">
            <div style="background:#fff;border:1px solid #E7E7EA;border-radius:14px;padding:18px 18px 16px;display:flex;flex-direction:column;height:100%;box-shadow:0 1px 3px rgba(0,0,0,0.04);">
              <div style="display:flex;align-items:center;gap:12px;margin-bottom:14px;">
                <div style="width:44px;height:44px;border-radius:50%;background:${t.bg};display:inline-flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0;">${card.icon}</div>
                <div style="display:flex;flex-direction:column;line-height:1.2;">
                  <div style="font-size:18px;font-weight:800;color:${t.label};">${card.title}</div>
                  ${card.subtitle ? `<div style="font-size:13px;color:#64748B;margin-top:2px;">${card.subtitle}</div>` : ''}
                </div>
              </div>
              ${bulletsHtml}
              ${bodyHtml}
              ${badgeHtml}
            </div>
            ${opHtml}
          </div>`;
      }).join('');
      content += `<div style="display:grid;grid-template-columns:repeat(${weCols},1fr);gap:${weCellGap}px;margin-bottom:18px;">${weCells}</div>`;
      if (we.summary && we.summary.length) {
        const segs = we.summary.map(s => {
          if (s.op) return `<span style="font-size:20px;font-weight:900;color:${PATTERN_TONES.green.accent};padding:0 8px;">${s.op}</span>`;
          const t = PATTERN_TONES[s.tone] || PATTERN_TONES.blue;
          return `<span style="display:inline-flex;align-items:center;gap:8px;color:${t.label};font-size:15px;font-weight:800;"><span style="font-size:18px;">${s.icon}</span>${s.label}</span>`;
        }).join('');
        content += `<div style="display:flex;align-items:center;justify-content:center;gap:6px;background:${PATTERN_TONES.green.bg};border:1px solid ${PATTERN_TONES.green.border};border-radius:14px;padding:14px 20px;margin-bottom:26px;flex-wrap:wrap;">${segs}</div>`;
      }
    }

    // Illustrated grid — 2-col (or custom) grid of example cards with a full-width
    // scene header (SVG), a numbered title, body text and an optional third-party badge.
    //   Pattern: illustratedGrid: [{ scene?, tone, title, body, thirdParty? }]
    //            illustratedGridLabel?, illustratedGridEmoji?, illustratedGridCols?
    if (c.illustratedGrid && c.illustratedGrid.length) {
      if (c.illustratedGridLabel !== null)
        content += genSecLabel(c.illustratedGridEmoji || '📋', c.illustratedGridLabel || 'Examples');
      const igCols = c.illustratedGridCols || 2;
      const igCells = c.illustratedGrid.map((item, i) => {
        const t = PATTERN_TONES[item.tone] || PATTERN_TONES.green;
        const sceneHtml = item.heroImage
          ? `<div style="height:120px;overflow:hidden;flex-shrink:0;"><img src="${item.heroImage}" alt="" style="display:block;width:100%;height:120px;object-fit:cover;" /></div>`
          : (item.scene && SCENES[item.scene]
            ? `<div style="height:120px;overflow:hidden;flex-shrink:0;">${SCENES[item.scene]}</div>`
            : '');
        const thirdPartyHtml = item.thirdParty
          ? `<div style="display:flex;align-items:center;gap:8px;background:${t.soft};border-radius:8px;padding:8px 10px;margin-top:auto;">
               <span style="font-size:16px;flex-shrink:0;">👥</span>
               <div style="font-size:12.5px;line-height:1.4;"><span style="font-weight:600;color:#475569;">${item.thirdPartyLabel || 'Third party harmed'}: </span><span style="font-weight:700;color:${t.label};">${item.thirdParty}</span></div>
             </div>`
          : '';
        return `
          <div style="border-radius:14px;border:1px solid #E7E7EA;overflow:hidden;background:#fff;display:flex;flex-direction:column;box-shadow:0 1px 4px rgba(0,0,0,0.04);">
            ${sceneHtml}
            <div style="padding:12px 14px 14px;display:flex;flex-direction:column;flex:1;gap:8px;">
              <div style="font-size:15px;font-weight:800;color:${t.label};line-height:1.3;">${i + 1}. ${item.title}</div>
              <div style="font-size:13px;color:#334155;line-height:1.6;flex:1;">${item.body}</div>
              ${thirdPartyHtml}
            </div>
          </div>`;
      }).join('');
      content += `<div style="display:grid;grid-template-columns:repeat(${igCols},1fr);gap:14px;margin-bottom:26px;">${igCells}</div>`;
    }

    // Causes: [{head, body, icon?, example?: {icon, text}, tone?}] — coloured tiles.
    //   - Icon mode (any item has `icon`) activates richer card layout with photo-style header.
    //   - `causesStyle: 'tinted-flat'` swaps to flat tinted tiles (icon left, title right, body below).
    //   - Per-item `example: {icon, text}` adds a small inline sub-callout at the bottom of icon tiles.
    if (c.causes && Array.isArray(c.causes) && c.causes.length && typeof c.causes[0].head !== 'undefined') {
      const hasIcons = c.causes.some(item => item.icon);
      const flat = c.causesStyle === 'tinted-flat';
      if (c.causesLabel !== null) content += genSecLabel(c.causesEmoji || '🔗', c.causesLabel || 'Key mechanisms');
      content += `<div style="display:grid;grid-template-columns:${gridColumnsFor(c.causes.length, hasIcons ? 155 : 220)};gap:${hasIcons ? '12px' : '16px'};margin-bottom:26px;">`;
      content += c.causes.map((item, i) => {
        const t = TONES[i % TONES.length];
        const pt = item.tone ? PATTERN_TONES[item.tone] : null;
        if (c.causesStyle === 'plain-white' && hasIcons) {
          const tone = pt || PATTERN_TONES[['green','blue','purple','amber','rose','slate'][i % 6]];
          return `
          <div style="border-radius:14px;background:#fff;border:1px solid #E7E7EA;padding:20px 20px 18px;display:flex;flex-direction:column;">
            <div style="display:flex;align-items:center;gap:12px;margin-bottom:10px;">
              <div style="width:42px;height:42px;border-radius:50%;background:${tone.bg};display:inline-flex;align-items:center;justify-content:center;font-size:22px;line-height:1;flex-shrink:0;">${item.icon}</div>
              <div style="font-weight:800;font-size:16px;color:${tone.label};line-height:1.3;">${item.head}</div>
            </div>
            <div style="font-size:13.5px;color:#0B1426;line-height:1.65;">${item.body}</div>
          </div>`;
        }
        if (flat && hasIcons) {
          const tone = pt || PATTERN_TONES[['green','blue','purple','amber','rose','slate'][i % 6]];
          return `
          <div style="border-radius:16px;background:${tone.bg};border:1px solid ${tone.border};padding:18px 18px 16px;box-shadow:0 2px 8px rgba(0,0,0,0.05);display:flex;flex-direction:column;">
            <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px;">
              <div style="width:42px;height:42px;border-radius:50%;background:#fff;display:inline-flex;align-items:center;justify-content:center;font-size:22px;line-height:1;box-shadow:0 1px 4px rgba(0,0,0,0.08);flex-shrink:0;">${item.icon}</div>
              <div style="font-weight:800;font-size:15px;color:${tone.label};line-height:1.3;">${item.head}</div>
            </div>
            <div style="font-size:13.5px;color:#0B1426;line-height:1.65;">${item.body}</div>
          </div>`;
        }
        if (hasIcons) {
          const headText = item.head.replace(/^\d+\.\s*/, '');
          const exampleHtml = item.example ? `
            <div style="margin:0 14px 14px;padding:10px 12px;background:${t.bg};border-radius:10px;border:1px solid ${t.border}30;display:flex;align-items:flex-start;gap:8px;">
              ${item.example.icon ? `<div style="font-size:16px;line-height:1.2;flex-shrink:0;">${item.example.icon}</div>` : ''}
              <div style="font-size:12.5px;color:#0B1426;line-height:1.55;"><span style="font-weight:800;color:${t.label};">Example:</span> ${item.example.text}</div>
            </div>` : '';
          return `
          <div style="border-radius:16px;overflow:hidden;background:#fff;border:1px solid ${t.border}20;box-shadow:0 3px 14px rgba(0,0,0,0.08);display:flex;flex-direction:column;">
            <div style="padding:20px 16px 14px;background:${t.bg};text-align:center;">
              <div style="width:54px;height:54px;border-radius:50%;background:#fff;box-shadow:0 2px 8px rgba(0,0,0,0.10);display:inline-flex;align-items:center;justify-content:center;font-size:26px;line-height:1;">${item.icon}</div>
            </div>
            <div style="padding:11px 14px;background:${t.headerBg};color:#fff;font-weight:800;font-size:13px;display:flex;align-items:center;gap:8px;">
              <span style="min-width:20px;height:20px;border-radius:50%;background:rgba(255,255,255,0.30);display:inline-flex;align-items:center;justify-content:center;font-size:11px;font-weight:900;flex-shrink:0;">${i + 1}</span>
              <span style="line-height:1.3;">${headText}</span>
            </div>
            <div style="padding:13px 14px 14px;font-size:14px;color:#0B1426;line-height:1.65;flex:1;">${item.body}</div>
            ${exampleHtml}
          </div>`;
        }
        return `
        <div style="border-radius:12px;background:#fff;border:1px solid ${t.border}22;border-left:4px solid ${t.border};padding:16px 18px;box-shadow:0 2px 8px rgba(0,0,0,0.05);">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:9px;">
            <div style="width:22px;height:22px;border-radius:50%;background:${t.headerBg};color:#fff;display:inline-flex;align-items:center;justify-content:center;font-size:11px;font-weight:900;flex-shrink:0;">${i + 1}</div>
            <div style="font-weight:800;font-size:14px;color:${t.label};line-height:1.3;">${item.head}</div>
          </div>
          <div style="font-size:13.5px;color:#475569;line-height:1.65;">${item.body}</div>
        </div>`;
      }).join('');
      content += `</div>`;
    }

    // Causes 2 — a second causes-style grid for a separate themed section.
    //   Pattern: causes2: [{tone,icon,head,body}], causes2Label?, causes2Emoji?, causes2Style? ('plain-white' | default)
    if (c.causes2 && Array.isArray(c.causes2) && c.causes2.length && typeof c.causes2[0].head !== 'undefined') {
      if (c.causes2Label !== null) content += genSecLabel(c.causes2Emoji || '🔗', c.causes2Label || 'More to know');
      const plain2 = c.causes2Style === 'plain-white';
      const tiles2 = c.causes2.map((item, i) => {
        const tone = item.tone ? PATTERN_TONES[item.tone] : PATTERN_TONES[['green','blue','purple','amber','rose','slate'][i % 6]];
        if (plain2) {
          return `
          <div style="border-radius:14px;background:#fff;border:1px solid #E7E7EA;padding:20px 20px 18px;display:flex;flex-direction:column;">
            <div style="display:flex;align-items:center;gap:12px;margin-bottom:10px;">
              <div style="width:42px;height:42px;border-radius:50%;background:${tone.bg};display:inline-flex;align-items:center;justify-content:center;font-size:22px;line-height:1;flex-shrink:0;">${item.icon || ''}</div>
              <div style="font-weight:800;font-size:16px;color:${tone.label};line-height:1.3;">${item.head}</div>
            </div>
            <div style="font-size:13.5px;color:#0B1426;line-height:1.65;">${item.body}</div>
          </div>`;
        }
        return `
          <div style="border-radius:14px;background:${tone.bg};border:1px solid ${tone.border};padding:18px 18px 16px;display:flex;flex-direction:column;">
            <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px;">
              <div style="width:42px;height:42px;border-radius:50%;background:#fff;display:inline-flex;align-items:center;justify-content:center;font-size:22px;line-height:1;box-shadow:0 1px 4px rgba(0,0,0,0.08);flex-shrink:0;">${item.icon || ''}</div>
              <div style="font-weight:800;font-size:15px;color:${tone.label};line-height:1.3;">${item.head}</div>
            </div>
            <div style="font-size:13.5px;color:#0B1426;line-height:1.65;">${item.body}</div>
          </div>`;
      }).join('');
      const cols2 = c.causes2Cols ? `repeat(${c.causes2Cols}, 1fr)` : gridColumnsFor(c.causes2.length, 180);
      content += `<div style="display:grid;grid-template-columns:${cols2};gap:12px;margin-bottom:26px;">${tiles2}</div>`;
    }

    // How to think about it — two tinted panels side by side (centered icon + heading + body).
    // Data: { left: {icon, tone, head, body}, right: {icon, tone, head, body} }
    if (c.howToThink) {
      const renderHTTPanel = (side) => {
        const t = PATTERN_TONES[side.tone || 'green'] || PATTERN_TONES.green;
        return `
          <div style="flex:1;min-width:0;border-radius:16px;background:${t.bg};border:1px solid ${t.border};padding:24px 20px 22px;text-align:center;">
            <div style="width:56px;height:56px;border-radius:50%;background:#fff;margin:0 auto 14px;display:inline-flex;align-items:center;justify-content:center;font-size:24px;line-height:1;box-shadow:0 2px 8px rgba(0,0,0,0.08);">${side.icon}</div>
            <div style="font-size:15px;font-weight:800;color:${t.label};margin-bottom:8px;">${side.head}</div>
            <div style="font-size:13px;color:${t.label};line-height:1.65;font-weight:600;">${side.body}</div>
          </div>`;
      };
      content += genSecLabel('💭', 'How to think about it');
      content += `<div style="display:flex;gap:14px;margin-bottom:28px;">${renderHTTPanel(c.howToThink.left)}${renderHTTPanel(c.howToThink.right)}</div>`;
    }

    // Clean table — light borders, optional icon column, two text columns.
    // Rendered AFTER causes so agents are introduced before their objectives.
    if (c.table && c.table.rows && c.table.rows.length) {
      const tbl = c.table;
      const hasIcon = tbl.rows.some(r => r.icon);
      const headers = tbl.headers || [];
      if (tbl.title) {
        content += genSecLabel(tbl.emoji || '📋', tbl.title);
      }
      content += `<div style="border-radius:12px;overflow:hidden;border:1px solid #E2E8F0;margin-bottom:26px;background:#fff;">`;
      if (headers.length === 2) {
        content += `
          <div style="display:grid;grid-template-columns:${hasIcon ? '52px ' : ''}minmax(120px,1fr) 2fr;background:#F8FAFC;border-bottom:1px solid #E2E8F0;">
            ${hasIcon ? '<div></div>' : ''}
            <div style="padding:11px 16px;font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:0.08em;color:#64748B;">${headers[0]}</div>
            <div style="padding:11px 16px;font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:0.08em;color:#64748B;border-left:1px solid #E2E8F0;">${headers[1]}</div>
          </div>
        `;
      }
      content += tbl.rows.map((r, i) => {
        const rowTone = r.tone ? PATTERN_TONES[r.tone] : null;
        const labelCol = rowTone ? rowTone.label : '#0B1426';
        return `
        <div style="display:grid;grid-template-columns:${hasIcon ? '52px ' : ''}minmax(120px,1fr) 2fr;border-top:${i === 0 && headers.length === 0 ? 'none' : '1px solid #E2E8F0'};background:${i % 2 === 0 ? '#fff' : '#FAFBFC'};">
          ${hasIcon ? `<div style="padding:14px 0 14px 16px;font-size:20px;line-height:1.2;display:flex;align-items:center;">${r.icon || ''}</div>` : ''}
          <div style="padding:14px 16px;font-size:14px;font-weight:700;color:${labelCol};display:flex;align-items:center;">${r.label}</div>
          <div style="padding:14px 16px;font-size:14px;color:#0B1426;line-height:1.55;border-left:1px solid #E2E8F0;display:flex;align-items:center;">${r.value}</div>
        </div>
      `;
      }).join('');
      content += `</div>`;
    }

    // Branches — tone-coded tappable callouts. Rendered after main content
    // (body / causes / table) so they read as a "now zoom out" framing block.
    if (c.branches && c.branches.length) {
      content += genSecLabel(c.branchesEmoji || '🧭', c.branchesLabel || 'The big picture — tap each to recall');
      content += `<div class="branch-callouts" style="margin-bottom:24px;">
        ${c.branches.map((b, i) => `
          <div class="branch-cal branch-cal--${b.tone || 'blue'}" data-flap-id="gen-branch-${i}">
            <div class="branch-cal__dot"></div>
            <div style="flex:1; min-width:0;">
              <div class="branch-cal__label">${b.label}</div>
              <div class="branch-cal__sub is-hidden">${b.sub}</div>
              <div class="branch-cal__hint">tap to recall</div>
            </div>
          </div>
        `).join('')}
      </div>`;
    }

    // Flow (late position) — renders AFTER causes/table/branches for cards where
    // the explanatory chain should follow the main content tiles.
    if (c.flowBottom && c.flowBottom.length) {
      if (c.flowBottomTitle) {
        content += genSecLabel(c.flowBottomEmoji || '➡️', c.flowBottomTitle);
      }
      const flowTones = ['green', 'amber', 'blue', 'purple', 'rose'];
      const nb = c.flowBottom.length;
      content += `<div style="display:grid;grid-template-columns:repeat(${nb},1fr);gap:0;align-items:start;margin-bottom:26px;padding:18px 6px 6px;">`;
      content += c.flowBottom.map((step, i) => {
        const t = PATTERN_TONES[step.tone || flowTones[i % flowTones.length]];
        const isLast = i === nb - 1;
        const statusBadge = step.status === 'fail' ? `<div style="position:absolute;top:-4px;right:-4px;width:20px;height:20px;border-radius:50%;background:#DC2626;color:#fff;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900;box-shadow:0 1px 4px rgba(0,0,0,0.2);">✕</div>` :
                            step.status === 'pass' ? `<div style="position:absolute;top:-4px;right:-4px;width:20px;height:20px;border-radius:50%;background:#059669;color:#fff;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900;box-shadow:0 1px 4px rgba(0,0,0,0.2);">✓</div>` :
                            step.status === 'warn' ? `<div style="position:absolute;top:-4px;right:-4px;width:20px;height:20px;border-radius:50%;background:#F59E0B;color:#fff;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900;box-shadow:0 1px 4px rgba(0,0,0,0.2);">!</div>` : '';
        return `
          <div style="position:relative;display:flex;flex-direction:column;align-items:center;text-align:center;padding:0 10px;">
            <div style="position:relative;width:46px;height:46px;border-radius:50%;background:#fff;border:2px solid ${t.accent};color:${t.label};display:inline-flex;align-items:center;justify-content:center;font-size:15px;font-weight:900;box-shadow:0 2px 8px ${t.accent}40;margin-bottom:12px;z-index:1;">${i + 1}</div>
            <div style="position:relative;width:54px;height:54px;border-radius:50%;background:${t.bg};border:1px solid ${t.border};display:inline-flex;align-items:center;justify-content:center;font-size:24px;line-height:1;margin-bottom:12px;">${step.icon || ''}${statusBadge}</div>
            <div style="font-size:14px;font-weight:800;color:${t.label};line-height:1.3;margin-bottom:6px;">${step.title}</div>
            ${step.sub ? `<div style="font-size:12.5px;color:#475569;line-height:1.5;">${step.sub}</div>` : ''}
            ${!isLast ? `<div style="position:absolute;top:23px;left:calc(50% + 28px);right:calc(-50% + 28px);height:0;border-top:2px dashed #CBD5E1;z-index:0;"></div>` : ''}
          </div>
        `;
      }).join('');
      content += `</div>`;
    }

    // Product examples — "Think like an examiner" card grid
    if (c.productExamples && c.productExamples.length) {
      const VC = {
        rose:   { color: '#DC2626', badge: '#FEE2E2' },
        amber:  { color: '#D97706', badge: '#FEF3C7' },
        green:  { color: '#059669', badge: '#D1FAE5' },
        blue:   { color: '#2563EB', badge: '#DBEAFE' },
        purple: { color: '#7C3AED', badge: '#EDE9FE' },
      };
      content += `
      <div style="border-radius:14px;overflow:hidden;border:1px solid #E2E8F0;margin-bottom:28px;">
        <div style="background:#0B1426;padding:14px 18px;display:flex;align-items:center;gap:10px;">
          <span style="font-size:18px;">🎓</span>
          <div>
            <div style="color:#fff;font-weight:800;font-size:12px;text-transform:uppercase;letter-spacing:0.08em;">${c.productExamplesTitle || 'Think like an examiner'}</div>
            <div style="color:rgba(255,255,255,0.5);font-size:11px;margin-top:2px;">${c.productExamplesSubtitle || 'Apply the determinants to real-world examples'}</div>
          </div>
        </div>
        <div style="padding:14px;background:#F8FAFC;">
          <div style="display:grid;grid-template-columns:${gridColumnsFor(c.productExamples.length, 140)};gap:10px;">
            ${c.productExamples.map(p => {
              const vc = VC[p.verdictTone] || VC.amber;
              return `
              <div class="reveal-cell" style="background:#fff;border-radius:14px;border:1px solid #E2E8F0;padding:16px 15px;box-shadow:0 3px 14px rgba(0,0,0,0.08);">
                <div style="font-size:28px;margin-bottom:9px;line-height:1;">${p.icon}</div>
                <div style="font-weight:800;font-size:14px;color:#0B1426;margin-bottom:10px;">${p.product}</div>
                <button data-action="reveal-cell" type="button" style="background:#fff;border:1.5px dashed #94A3B8;color:#475569;font-size:12px;font-weight:700;padding:6px 10px;border-radius:6px;cursor:pointer;width:100%;">Predict verdict ↓</button>
                <div class="reveal-cell__body is-hidden">
                  <div style="display:inline-block;padding:3px 10px;border-radius:20px;background:${vc.badge};color:${vc.color};font-size:11px;font-weight:700;margin-bottom:10px;">${p.verdict}</div>
                  <div style="font-size:13.5px;color:#0B1426;line-height:1.6;padding-top:2px;">${p.reasoning}</div>
                </div>
              </div>`;
            }).join('')}
          </div>
        </div>
      </div>`;
    }

    // Steps: [{label, text}] — numbered with cycling tones
    if (c.steps && c.steps.length) {
      content += genSecLabel(c.stepsEmoji || '📋', c.stepsLabel || 'How it works');
      content += c.steps.map((s, i) => {
        const t = TONES[i % TONES.length];
        const head = s.head || s.label || '';
        const body = s.body || s.text || '';
        return `
        <div style="display:flex;gap:16px;margin-bottom:18px;padding:16px 18px;background:${t.bg};border-radius:12px;border:1px solid ${t.border}40;border-left:5px solid ${t.border};">
          <div style="width:34px;height:34px;border-radius:50%;background:${t.headerBg};color:#fff;display:flex;align-items:center;justify-content:center;font-size:15px;font-weight:800;flex-shrink:0;">${i + 1}</div>
          <div>
            <div style="font-weight:800;font-size:15px;color:${t.label};margin-bottom:5px;">${head}</div>
            <div style="font-size:14px;color:#0B1426;line-height:1.65;">${body}</div>
          </div>
        </div>`;
      }).join('');
      content += `<div style="height:8px;"></div>`;
    }

    // Rows (comparison table) — card-style grid with zebra rows.
    // Rows whose label is answer-like hide their cells behind reveal buttons.
    if (c.rows && c.rows.length) {
      const REVEAL_RE = /interpretation|verdict|diagnosis|conclusion|takeaway|what it means|what it tells|policy implication|^\s*answer|^\s*outcome|^\s*result/i;
      const anyReveal = c.rows.some(r => REVEAL_RE.test(r.label));
      content += genSecLabel('📊', anyReveal ? 'Compare — think before you reveal' : 'Compare');
      const colA = c.colA || '';
      const colB = c.colB || '';
      content += `<div style="border-radius:12px;overflow:hidden;border:1px solid #E7E7EA;margin-bottom:20px;">`;
      if (colA || colB) {
        content += `<div style="display:grid;grid-template-columns:140px 1fr 1fr;background:#0B1426;">
          <div style="padding:11px 14px;font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:0.08em;color:rgba(255,255,255,0.6);"></div>
          <div style="padding:11px 14px;font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:0.08em;color:#fff;border-left:1px solid rgba(255,255,255,0.1);">${colA}</div>
          <div style="padding:11px 14px;font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:0.08em;color:#fff;border-left:1px solid rgba(255,255,255,0.1);">${colB}</div>
        </div>`;
      }
      content += c.rows.map((r, i) => {
        const reveal = REVEAL_RE.test(r.label);
        if (reveal) {
          return `
          <div style="display:grid;grid-template-columns:140px 1fr 1fr;background:#FEFCE8;border-top:1px solid #E7E7EA;">
            <div style="padding:12px 14px;font-weight:800;font-size:13px;color:#92400E;border-right:1px solid #E7E7EA;">⭐ ${r.label}</div>
            <div class="reveal-cell" style="padding:12px 14px;font-size:13px;color:#0B1426;line-height:1.55;border-right:1px solid #E7E7EA;">
              <button data-action="reveal-cell" style="background:#fff;border:1.5px dashed #D97706;color:#92400E;font-size:12px;font-weight:700;padding:6px 12px;border-radius:6px;cursor:pointer;">Reveal answer ↓</button>
              <div class="reveal-cell__body is-hidden">${r.colA}</div>
            </div>
            <div class="reveal-cell" style="padding:12px 14px;font-size:13px;color:#0B1426;line-height:1.55;">
              <button data-action="reveal-cell" style="background:#fff;border:1.5px dashed #D97706;color:#92400E;font-size:12px;font-weight:700;padding:6px 12px;border-radius:6px;cursor:pointer;">Reveal answer ↓</button>
              <div class="reveal-cell__body is-hidden">${r.colB}</div>
            </div>
          </div>`;
        }
        return `
        <div style="display:grid;grid-template-columns:140px 1fr 1fr;background:${i % 2 === 0 ? '#f8fafc' : '#fff'};border-top:1px solid #E7E7EA;">
          <div style="padding:12px 14px;font-weight:700;font-size:13px;color:#0B1426;border-right:1px solid #E7E7EA;">${r.label}</div>
          <div style="padding:12px 14px;font-size:13px;color:#0B1426;line-height:1.55;border-right:1px solid #E7E7EA;">${r.colA}</div>
          <div style="padding:12px 14px;font-size:13px;color:#0B1426;line-height:1.55;">${r.colB}</div>
        </div>`;
      }).join('');
      content += `</div>`;
      if (c.footer) {
        content += `<p style="font-size:13px;color:#0B1426;font-style:italic;margin-bottom:18px;padding:0 2px;">${c.footer}</p>`;
      }
    }

    // Note — tip-style callout that renders later in the card (e.g. assumptions, caveats).
    //   Pattern: note: {icon?, tone?, head?, text} OR string OR array.
    //   Default icon: ℹ️, default tone: blue.
    if (c.note) {
      const notes = Array.isArray(c.note) ? c.note : [c.note];
      notes.forEach(note => {
        const noteText = typeof note === 'object' ? note.text : note;
        const noteIcon = (typeof note === 'object' && note.icon) || 'ℹ️';
        const noteTone = (typeof note === 'object' && note.tone) || 'blue';
        const noteHead = (typeof note === 'object' && note.head) || null;
        const t = PATTERN_TONES[noteTone] || PATTERN_TONES.blue;
        const bodyHtml = noteHead
          ? `<div style="display:flex;flex-direction:column;gap:2px;"><div style="font-size:14px;font-weight:800;color:${t.label};">${noteHead}</div><div style="font-size:14px;color:#0B1426;line-height:1.6;">${noteText}</div></div>`
          : `<div style="font-size:14px;color:#0B1426;line-height:1.6;">${noteText}</div>`;
        content += `<div style="display:flex;align-items:center;gap:14px;background:${t.bg};border:1px solid ${t.border};border-radius:12px;padding:14px 18px;margin-bottom:14px;"><div style="width:38px;height:38px;border-radius:50%;background:${t.accent};color:#fff;display:inline-flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;">${noteIcon}</div>${bodyHtml}</div>`;
      });
    }

    // Conclusion — green decisive verdict band. The "given the above, here's the answer".
    //   Pattern: conclusion: 'string' OR { title?, text }
    //   (Distinct from c.conclusion used by elasticity-calc / worked-example renderers — only
    //    fires when this card routes through renderCardGeneric.)
    if (c.conclusion && (typeof c.conclusion === 'string' || c.conclusion.text)) {
      const conTitle = typeof c.conclusion === 'object' ? (c.conclusion.title || 'Best conclusion') : 'Best conclusion';
      const conText  = typeof c.conclusion === 'object' ? c.conclusion.text : c.conclusion;
      if (conText) {
        content += `
          <div style="display:flex;gap:14px;align-items:flex-start;background:#ECFDF5;border:1px solid #A7F3D0;border-left:4px solid #059669;border-radius:12px;padding:14px 18px;margin-bottom:22px;">
            <div style="width:30px;height:30px;border-radius:50%;background:#059669;color:#fff;display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0;">↔</div>
            <div style="flex:1;">
              <div style="font-size:12px;font-weight:800;color:#065F46;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:4px;">${conTitle}</div>
              <div style="font-size:14px;color:#0B1426;line-height:1.6;">${conText}</div>
            </div>
          </div>`;
      }
    }

    // Balanced note — amber caveat band for risks or limitations of the main argument.
    //   Pattern: balancedNote: 'string' OR { title?, text }
    if (c.balancedNote) {
      const noteTitle = typeof c.balancedNote === 'object' ? (c.balancedNote.title || 'A balanced note') : 'A balanced note';
      const noteText  = typeof c.balancedNote === 'object' ? c.balancedNote.text : c.balancedNote;
      if (noteText) {
        content += `
          <div style="display:flex;gap:14px;align-items:flex-start;background:#FFFBEB;border:1px solid #FDE68A;border-left:4px solid #D97706;border-radius:12px;padding:14px 18px;margin-bottom:22px;">
            <div style="width:30px;height:30px;border-radius:50%;background:#D97706;color:#fff;display:flex;align-items:center;justify-content:center;font-size:15px;flex-shrink:0;">⚠</div>
            <div style="flex:1;">
              <div style="font-size:12px;font-weight:800;color:#92400E;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:4px;">${noteTitle}</div>
              <div style="font-size:14px;color:#0B1426;line-height:1.6;">${noteText}</div>
            </div>
          </div>`;
      }
    }

    // Tip late — a second tip block rendered after causes/keyPoints but
    // before keyTerms. Used for "Key idea" callouts that need to follow
    // the worked example, not lead the card.
    if (c.tipLate) {
      const lateTips = Array.isArray(c.tipLate) ? c.tipLate : [c.tipLate];
      lateTips.forEach(tip => {
        const tipText = typeof tip === 'object' ? tip.text : tip;
        const tipIcon = (typeof tip === 'object' && tip.icon) || '💡';
        const tipTone = (typeof tip === 'object' && tip.tone) || 'blue';
        const tipHead = (typeof tip === 'object' && tip.head) || null;
        const t = PATTERN_TONES[tipTone] || PATTERN_TONES.blue;
        const bodyHtml = tipHead
          ? `<div style="display:flex;flex-direction:column;gap:2px;"><div style="font-size:14px;font-weight:800;color:${t.label};line-height:1.3;">${tipHead}</div><div style="font-size:14px;color:#0B1426;line-height:1.55;">${tipText}</div></div>`
          : `<div style="font-size:15px;color:#0B1426;line-height:1.55;">${tipText}</div>`;
        content += `
          <div style="display:flex;align-items:center;gap:14px;background:${t.bg};border:1px solid ${t.border};border-radius:12px;padding:14px 18px;margin-bottom:18px;">
            <div style="width:38px;height:38px;border-radius:50%;background:${t.accent};color:#fff;display:inline-flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;">${tipIcon}</div>
            ${bodyHtml}
          </div>`;
      });
    }

    // Key terms — coloured tiles, definitions always visible, one row
    if (c.keyTerms && c.keyTerms.length) {
      content += genSecLabel(c.keyTermsEmoji || '🔑', c.keyTermsLabel || 'Key terms');
      content += `<div style="display:grid;grid-template-columns:${gridColumnsFor(c.keyTerms.length, 180)};gap:12px;margin-bottom:28px;">
        ${c.keyTerms.map((kt, i) => {
          const t = TONES[i % TONES.length];
          return `
          <div style="border-radius:12px;overflow:hidden;background:${t.bg};border:1px solid ${t.border}30;">
            <div style="padding:10px 14px;background:${t.headerBg};color:#fff;font-weight:800;font-size:13px;">${kt.term}</div>
            <div style="padding:12px 14px;font-size:13px;color:#0B1426;line-height:1.55;">${kt.def}</div>
          </div>`;
        }).join('')}
      </div>`;
    }

    // Exam edge — always visible
    if (c.examEdge) {
      const edgeTitle = typeof c.examEdge === 'object' ? (c.examEdge.title || 'Exam edge') : 'Exam edge';
      const edgeText  = typeof c.examEdge === 'object' ? c.examEdge.text : c.examEdge;
      if (edgeText) {
        content += `
          <div class="exam-edge">
            <div class="exam-edge__star">⭐</div>
            <div class="exam-edge__body">
              <div class="exam-edge__label">Exam edge</div>
              ${edgeTitle !== 'Exam edge' ? `<div class="exam-edge__title">${edgeTitle}</div>` : ''}
              <div class="exam-edge__text" style="margin-top:8px;">${edgeText}</div>
            </div>
          </div>`;
      }
    }

    // Quiz CTA — celebration-style signpost

    return `<h1 class="card__title">${c.title}</h1>${content}`;
  }

  function renderKeyTakeaway(k) {
    if (!k) return '';
    const text  = typeof k === 'object' ? k.text  : k;
    const label = typeof k === 'object' && k.title ? k.title : 'Key takeaway';
    if (!text) return '';
    return `
      <div class="key-takeaway">
        <div class="key-takeaway__star">★</div>
        <div class="key-takeaway__body">
          <div class="key-takeaway__label">${label}</div>
          <div class="key-takeaway__text">${text}</div>
        </div>
      </div>
    `;
  }

  /**
   * Coloured topic banner used on cause cards (2 & 3).
   * Anchors the page visually with the branch colour from card 1.
   */
  function renderCauseBanner(tone, label) {
    return `
      <div class="cause-banner cause-banner--${tone}">
        <div class="cause-banner__pill">
          <span class="cause-banner__pill-dot"></span>
          <span>${label}</span>
        </div>
      </div>
    `;
  }

  /* ============================================================
     INTRO PAGE
     ============================================================ */

  function renderIntro() {
    /* Use Shell.renderStages — single source of truth for the
       Learn / Link / Land 3-stage progress widget. Pass T.intro.stages
       directly so per-topic copy overrides (e.g. "Recap the three causes")
       carry through. */
    const stagesWidget = Shell.renderStages(T.intro.stages);

    return `
      <div class="page">
        <div>
          <div class="card intro-card">
            <div class="row row--top">
              <div class="intro-card__text">
                <div class="card__step-label">${T.sessionLabel || TopicLoader.sessionLabel('learn')}</div>
                <h1 class="card__title card__title--lg">${T.title}</h1>
                <p class="card__lede">${T.intro.summary}</p>
              </div>
              ${T.intro.heroKey && I[T.intro.heroKey] ? `<div class="illust-bars">${I[T.intro.heroKey]}</div>` : ''}
            </div>

            <div class="do-box">
              <div class="do-box__icon">${I.target}</div>
              <div>
                <div class="do-box__title">What you'll do in this session</div>
                <div class="do-box__sub">${T.intro.doInThis}</div>
              </div>
              <div class="do-box__checks">
                ${T.intro.outcomes.map(o => `
                  <div class="do-box__check">
                    <span class="check-icon">${I.check}</span>
                    <span>${o}</span>
                  </div>
                `).join('')}
              </div>
            </div>

            <div class="callout callout--info">
              <div class="callout__icon">${I.info}</div>
              <div class="callout__body">
                <div class="callout__title">Tip</div>
                <div class="callout__text">${T.intro.tip}</div>
              </div>
            </div>
          </div>

          <div class="session-meta">
            <div class="session-meta__item">
              <div class="session-meta__icon">${I.clock}</div>
              <div>
                <div class="session-meta__label">Estimated time</div>
                <div class="session-meta__val">${T.estTime}</div>
              </div>
            </div>
            <div class="session-meta__item">
              <div class="session-meta__icon">${I.target}</div>
              <div>
                <div class="session-meta__label">Your goal</div>
                <div class="session-meta__val">${T.goal}</div>
              </div>
            </div>
            <div class="session-meta__cta">
              <button class="btn btn--primary btn--lg" data-action="start-session">
                Start session ${I.arrowRight}
              </button>
            </div>
          </div>
        </div>

        <div class="right-rail">
          ${stagesWidget}
        </div>
      </div>
    `;
  }

  /* ============================================================
     CARD TEMPLATES
     ============================================================ */

  /* === Card 1: framing === */
  function renderCardFraming(c) {
    const diagram = c.diagramKey && I[c.diagramKey] ? I[c.diagramKey] : I.branchDiagram;
    return `
      <div class="card__step-label">${c.stepLabel}</div>
      <h1 class="card__title">${c.title}</h1>
      <p class="card__lede">${c.lede}</p>

      <div class="framing-row">
        <div class="branch-callouts">
          ${c.branches.map((b, i) => `
            <div class="branch-cal branch-cal--${b.tone}" data-flap-id="branch-${i}">
              <div class="branch-cal__dot"></div>
              <div style="flex:1; min-width:0;">
                <div class="branch-cal__label">${b.label}</div>
                <div class="branch-cal__sub is-hidden">${b.sub}</div>
                <div class="branch-cal__hint">tap to recall</div>
              </div>
            </div>
          `).join('')}
        </div>
        <div class="framing-diagram">${diagram}</div>
      </div>

      ${renderExamEdge(c.examEdge)}
    `;
  }

  /* === Cards 2 & 3: cause (demand-pull / cost-push / generic component) === */
  function renderCardCause(c) {
    // Tone, banner, and diagram are now data-driven. Backward compat: if
    // legacy `c.diagram === 'demand-pull' | 'cost-push'` is present, infer.
    let tone, bannerLabel, diagram;
    if (c.tone || c.bannerLabel || c.diagramKey) {
      tone        = c.tone || 'blue';
      bannerLabel = c.bannerLabel || c.title;
      diagram     = c.diagramKey && I[c.diagramKey] ? I[c.diagramKey] : '';
    } else {
      // Legacy inflation cards
      tone        = c.diagram === 'demand-pull' ? 'green' : 'amber';
      bannerLabel = c.diagram === 'demand-pull' ? 'Type 1 · Demand-pull' : 'Type 2 · Cost-push';
      diagram     = c.diagram === 'demand-pull' ? I.adAsDemandPull : I.adAsCostPush;
    }
    const hallmarkAccent = `cause-col--hallmark-${tone === 'green' ? 'green' : tone}`;

    const headerLede = `
      <div class="card__step-label">${c.stepLabel}</div>
      <h1 class="card__title">${c.title}</h1>
      <p class="card__lede">${c.lede}</p>
    `;

    const diagramFull = diagram ? `
      <div class="mech-diagram mech-diagram--wide">
        ${diagram}
        ${c.diagramCaption ? `<div class="mech-diagram__caption">${c.diagramCaption}</div>` : ''}
      </div>
    ` : '';

    // Causes and Hallmarks side-by-side below the diagram
    const causesHallmarks = `
      <div class="cause-twoup">
        <div class="cause-col cause-col--causes">
          <div class="cause-col__title">${c.causes.title}</div>
          <ul>${c.causes.items.map(i => `<li>${i}</li>`).join('')}</ul>
        </div>
        <div class="cause-col ${hallmarkAccent}">
          <div class="cause-col__title">${c.hallmarks.title}</div>
          <ul>${c.hallmarks.items.map(i => `<li>${i}</li>`).join('')}</ul>
        </div>
      </div>
    `;

    const ukExamples = `
      <div class="uk-examples">
        <div class="uk-examples__flag">GB</div>
        <div>
          <div class="uk-examples__title">${c.ukExamples.title}</div>
          <div class="uk-examples__text">${c.ukExamples.text}</div>
        </div>
      </div>
    `;

    let bottomBox = '';
    if (c.policy) {
      bottomBox = `
        <div class="policy-box">
          <div class="policy-box__icon">🎯</div>
          <div>
            <div class="policy-box__title">${c.policy.title}</div>
            <div class="policy-box__text">${c.policy.text}</div>
          </div>
        </div>
      `;
    }
    if (c.dilemma) {
      bottomBox = `
        <div class="dilemma">
          <div class="dilemma__icon">⚠</div>
          <div class="dilemma__body">
            <div class="dilemma__title">${c.dilemma.title}</div>
            <div class="dilemma__lines">
              ${c.dilemma.lines.map(l => `<div class="dilemma__line">${l}</div>`).join('')}
            </div>
          </div>
        </div>
      `;
    }

    return `
      ${renderCauseBanner(tone, bannerLabel)}
      ${headerLede}
      ${diagramFull}
      ${causesHallmarks}
      ${ukExamples}
      ${renderExamEdge(c.examEdge)}
      ${bottomBox}
    `;
  }

  /* === Card 4: diagnose === */
  function renderCardDiagnose(c) {
    const tableRows = c.table.rows.map(row => `
      <tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>
    `).join('');

    const scenarios = c.scenarios.items.map((s, i) => `
      <div class="scenario scenario--${s.tone}" data-scenario-id="${i}">
        <div class="scenario__head">
          <div class="scenario__label">${s.label}</div>
        </div>
        <div class="scenario__text">${s.text}</div>
        <button class="scenario__reveal" data-action="reveal-scenario" data-scenario-target="${i}">
          <span class="scenario__reveal-icon">${I.eye}</span>
          <span>Make your call</span>
        </button>
        <div class="scenario__answer is-hidden" data-scenario-answer="${i}">
          <span class="scenario__arrow">→</span>
          <span>${s.answer}</span>
        </div>
      </div>
    `).join('');

    // If the card provides a diagramKey, show the diagram instead of the table.
    // (Diagram-first beats table-first for visual learners — table optional.)
    const topSection = c.diagramKey && I[c.diagramKey]
      ? `
        <div class="mech-diagram mech-diagram--wide">
          ${I[c.diagramKey]}
          ${c.diagramCaption ? `<div class="mech-diagram__caption">${c.diagramCaption}</div>` : ''}
        </div>
      `
      : `
        <table class="diag-table">
          <thead>
            <tr>${c.table.headers.map(h => `<th>${h}</th>`).join('')}</tr>
          </thead>
          <tbody>
            ${tableRows}
          </tbody>
        </table>
      `;

    return `
      <div class="card__step-label">${c.stepLabel}</div>
      <h1 class="card__title">${c.title}</h1>
      <p class="card__lede">${c.lede}</p>

      ${topSection}

      <div class="scenarios">
        <div class="scenarios__title">${c.scenarios.title}</div>
        <div class="scenarios__grid">
          ${scenarios}
        </div>
      </div>

      ${renderExamEdge(c.examEdge)}
    `;
  }

  /* === Card 5: puzzle === */
  function renderCardPuzzle(c) {
    // Chart is data-driven: card specifies chartKey, fallback to qeChart
    const chart = c.chartKey && I[c.chartKey] ? I[c.chartKey] : I.qeChart;

    // Default reveal content if data.js doesn't provide one
    const reveal = c.puzzle.reveal || {
      title: 'Spoiler — four reasons',
      text: "Money creation didn't translate into rising prices because of <strong>velocity, output gaps, anchored expectations,</strong> and <strong>credibility</strong>. The next card unpacks each one.",
      hints: ['Velocity', 'Output gap', 'Expectations', 'Credibility']
    };

    return `
      <div class="card__step-label">${c.stepLabel}</div>
      <h1 class="card__title">${c.title}</h1>
      <p class="card__lede">${c.lede}</p>

      <div class="classical-box">
        <div class="classical-box__head">
          <span class="classical-box__icon">📐</span>
          <span class="classical-box__title">${c.classical.title}</span>
        </div>
        <div class="classical-formula">
          <div class="classical-formula__main">${c.classical.formula}</div>
          <div class="classical-formula__sub">${c.classical.formulaSub}</div>
        </div>
        <div class="classical-quote">${c.classical.quote}</div>
        <div class="classical-examples">${c.classical.examples}</div>
      </div>

      <div class="puzzle-visual">
        <div class="puzzle-visual__chart">${chart}</div>
        <div class="puzzle-visual__caption">${c.puzzle.chartCaption}</div>
        <div class="puzzle-bullets">
          ${c.puzzle.bullets.map(b => `<div class="puzzle-bullet">${b}</div>`).join('')}
        </div>

        <button class="cliffhanger" data-action="reveal-cliffhanger" type="button" aria-expanded="false">
          ${c.puzzle.cliffhanger}
        </button>

        <div class="cliffhanger-reveal" data-cliffhanger-panel>
          <div class="cliffhanger-reveal__title">${reveal.title}</div>
          <div class="cliffhanger-reveal__text">${reveal.text}</div>
          <div class="cliffhanger-reveal__hints">
            ${reveal.hints.map(h => `<span class="cliffhanger-reveal__hint">${h}</span>`).join('')}
          </div>
          <div class="cliffhanger-reveal__cta">Tap "Next card" to dive in</div>
        </div>
      </div>

      ${renderExamEdge(c.examEdge)}
    `;
  }

  /* === Card 6: mechanisms (2x2) === */
  function renderCardMechanisms(c) {
    const tiles = c.mechanisms.map(m => `
      <div class="mech-tile mech-tile--${m.tone}">
        <div class="mech-tile__head">
          <div class="mech-tile__num">${m.num}</div>
          <div class="mech-tile__title">${m.title}</div>
        </div>
        <div class="mech-tile__text">${m.text}</div>
      </div>
    `).join('');

    return `
      <div class="card__step-label">${c.stepLabel}</div>
      <h1 class="card__title">${c.title}</h1>
      <p class="card__lede">${c.lede}</p>

      ${c.diagramKey && I[c.diagramKey] ? `<div style="overflow-x:auto;margin-bottom:22px;border-radius:12px;border:1px solid #E7E7EA;">${I[c.diagramKey]}</div>` : ''}
      <div class="mech-grid">${tiles}</div>

      ${renderExamEdge(c.examEdge)}

      <div class="connection-box">
        <div class="connection-box__icon">🎯</div>
        <div>
          <div class="connection-box__title">${c.connection.title}</div>
          <div class="connection-box__text">${c.connection.text}</div>
        </div>
      </div>
    `;
  }

  /* === Card 5 (merged): monetary theory + QE === */
  function renderCardMonetary(c) {
    const tiles = c.mechanisms.map(m => `
      <div class="mech-tile mech-tile--${m.tone}">
        <div class="mech-tile__head">
          <div class="mech-tile__num">${m.num}</div>
          <div class="mech-tile__title">${m.title}</div>
        </div>
        <div class="mech-tile__text">${m.text}</div>
      </div>
    `).join('');

    const bullets = c.puzzle.bullets.map(b => `<div class="puzzle-bullet">${b}</div>`).join('');

    return `
      <div class="card__step-label">${c.stepLabel}</div>
      <h1 class="card__title">${c.title}</h1>
      <p class="card__lede">${c.lede}</p>

      <div class="classical-box">
        <div class="classical-box__head">
          <span class="classical-box__icon">📐</span>
          <span class="classical-box__title">${c.classical.title}</span>
        </div>
        <div class="classical-formula">
          <div class="classical-formula__main">${c.classical.formula}</div>
          <div class="classical-formula__sub">${c.classical.formulaSub}</div>
        </div>
        <div class="classical-quote">${c.classical.quote}</div>
        <div class="classical-examples">${c.classical.examples}</div>
      </div>

      <div class="puzzle-bullets" style="margin: var(--sp-5) 0;">${bullets}</div>

      <div class="mech-grid">${tiles}</div>

      ${renderExamEdge(c.examEdge)}
    `;
  }

  /* === Card 6 (new): impacts of inflation === */
  function renderCardImpacts(c) {
    const groups = c.groups.map(g => `
      <div class="impact-group impact-group--${g.tone}">
        <div class="impact-group__head">
          <span class="impact-group__icon">${g.icon}</span>
          <span class="impact-group__label">${g.label}</span>
        </div>
        <ul class="impact-group__list">
          ${g.bullets.map(b => `<li>${b}</li>`).join('')}
        </ul>
      </div>
    `).join('');

    const wItems = c.winnersLosers.winners.items.map(i => `<li>${i}</li>`).join('');
    const lItems = c.winnersLosers.losers.items.map(i => `<li>${i}</li>`).join('');

    return `
      <div class="card__step-label">${c.stepLabel}</div>
      <h1 class="card__title">${c.title}</h1>
      <p class="card__lede">${c.lede}</p>

      <div class="impact-groups">${groups}</div>

      <div class="wl-row">
        <div class="wl-panel wl-panel--win">
          <div class="wl-panel__head">
            <span class="wl-panel__icon">↑</span>
            <span class="wl-panel__label">${c.winnersLosers.winners.label}</span>
          </div>
          <ul class="wl-panel__list">${wItems}</ul>
        </div>
        <div class="wl-panel wl-panel--lose">
          <div class="wl-panel__head">
            <span class="wl-panel__icon">↓</span>
            <span class="wl-panel__label">${c.winnersLosers.losers.label}</span>
          </div>
          <ul class="wl-panel__list">${lItems}</ul>
        </div>
      </div>

      <div class="callout callout--info" style="margin-top: var(--sp-5); margin-bottom: var(--sp-5);">
        <div class="callout__icon">📊</div>
        <div class="callout__body">
          <div class="callout__title">Example</div>
          <div class="callout__text">${c.example}</div>
        </div>
      </div>

      ${renderExamEdge(c.examEdge)}
    `;
  }

  /* === Card 7: deflation === */
  function renderCardDeflation(c) {
    const mechs = c.mechanisms.map((m, i) => `
      <div class="def-mech-row" data-action="reveal-deflation" data-deflation-id="${i}">
        <div class="def-mech-row__icon">${m.icon}</div>
        <div style="flex:1; min-width:0;">
          <div class="def-mech-row__title">${m.title}</div>
          <div class="def-mech-row__text is-hidden">${m.text}</div>
          <div class="def-mech-row__hint">tap to recall</div>
        </div>
      </div>
    `).join('');

    const examples = c.examples.items.map(e => `
      <div class="def-examples__item">
        <span class="def-examples__period">${e.period}</span> — ${e.text}
      </div>
    `).join('');

    return `
      <div class="card__step-label">${c.stepLabel}</div>
      <h1 class="card__title">${c.title}</h1>
      <p class="card__lede">${c.lede}</p>

      <div style="margin-bottom: var(--sp-3); display: flex; align-items: center; gap: var(--sp-2);">
        <span style="display: inline-block; width: 4px; height: 18px; background: var(--econ-rose); border-radius: 2px;"></span>
        <span style="font-size: var(--fs-md); font-weight: var(--fw-semi); color: var(--econ-gray-900);">${c.mechanismsTitle}</span>
      </div>
      <div class="def-mechs">${mechs}</div>

      <div class="def-examples">
        <div class="def-examples__icon">📚</div>
        <div class="def-examples__body">
          <div class="def-examples__title">${c.examples.title}</div>
          <div class="def-examples__list">${examples}</div>
        </div>
      </div>

      ${renderExamEdge(c.examEdge)}

      ${c.bridge ? `<div class="bridge"><div class="bridge__icon">→</div><div><div class="bridge__title">${c.bridge.title}</div><div class="bridge__text">${c.bridge.text}</div></div></div>` : ''}
    `;
  }

  /* === AD-INTERACTIVE template: full-width diagram + horizontal tabs + content panel ===
       Diagram is data-driven via diagramKey; defaults to adInteractive.
       Layout: diagram (full-width), tabs strip, then active tab's panel. */
  /* === ELASTICITY EXPLORER: interactive draggable demand curve ===
       Self-contained widget rendered + wired by js/elasticity-explorer.js.
       This renderer just emits the host div + the surrounding card chrome. */
  function renderCardElasticityExplorer(c) {
    return `
      <div class="card__step-label">${c.stepLabel || ''}</div>
      <h1 class="card__title">${c.title || ''}</h1>
      ${c.lede ? `<p class="card__lede">${c.lede}</p>` : ''}

      <div class="ee-root" data-ee-mount></div>

      ${c.howItWorks ? `
        <div style="background:#F8FAFC;border-left:4px solid var(--econ-blue);border-radius:10px;padding:14px 18px;margin:18px 0;">
          <div style="font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:0.09em;color:var(--econ-blue);margin-bottom:8px;">How to read it</div>
          <div style="font-size:15px;line-height:1.7;color:#0B1426;">${c.howItWorks}</div>
        </div>
      ` : ''}

      ${renderExamEdge(c.examEdge)}
    `;
  }

  /* -------------------------------------------------------------------------
     Worked Example: scaffolded reveal-steps calculation card.
     Students see the prompt and hint first; clicking "Show working" reveals
     the answer for that step. Reusable for PED/PES/YED/XED calculations.
     ------------------------------------------------------------------------- */
  function renderCardWorkedExample(c) {
    const steps = (c.steps || []).map((s, i) => `
      <div class="we-step">
        <div class="we-step__header">
          <span class="we-step__num">${i + 1}</span>
          <div class="we-step__right">
            <div class="we-step__prompt">${s.prompt}</div>
            ${s.hint ? `<div class="we-step__hint">💡 ${s.hint}</div>` : ''}
          </div>
        </div>
        <button class="we-step__btn" data-action="we-reveal" type="button">Show working →</button>
        <div class="we-step__answer is-hidden">
          <div class="we-step__answer-inner">${s.answer}</div>
        </div>
      </div>
    `).join('');

    const conclusion = c.conclusion ? `
      <div class="we-conclusion">
        <div class="we-conclusion__label">Conclusion</div>
        <div class="we-conclusion__text">${c.conclusion}</div>
      </div>
    ` : '';

    return `
      <div class="card__step-label">${c.stepLabel || ''}</div>
      <h1 class="card__title">${c.title || ''}</h1>
      ${c.lede ? `<p class="card__lede">${c.lede}</p>` : ''}
      ${c.scenario ? `<div class="we-scenario">${c.scenario}</div>` : ''}
      <div class="we-steps">${steps}</div>
      ${conclusion}
      ${renderExamEdge(c.examEdge)}
    `;
  }

  /* -------------------------------------------------------------------------
     Shared helper: Elasticity Calculation Chain.
     Builds the roadmap + step nodes + connectors + conclusion block.
     Called by PED, PES, YED, and XED renderers.

     opts = {
       scenarioPanel: htmlString,
       roadmapStops: [{tone, icon, label}, ...],   // exactly 5
       steps: [{tone, icon, title, prompt, formula, reveal}, ...],  // exactly 5
       conclusion: stringOrNull,
       contextLine: stringOrNull,
       examEdge: objectOrNull
     }
     ------------------------------------------------------------------------- */
  function buildElasticityCalcChain(opts) {
    const { scenarioPanel, roadmapStops, steps, conclusion, contextLine, examEdge } = opts;

    // Step node helper
    const stepNode = (n, tone, icon, title, prompt, formula, reveal, preview) => `
      <div class="ped-calc-step" data-ped-step="${n}" data-step-tone="${tone.c}" style="position:relative;border-radius:16px;background:#fff;border:1px solid ${tone.c}25;border-left:6px solid ${tone.c};box-shadow:0 3px 14px rgba(0,0,0,0.08);padding:18px 20px 20px;transition:box-shadow 0.25s ease;">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:10px;">
          <div data-step-num="${n}" style="width:38px;height:38px;border-radius:50%;background:${tone.c};color:#fff;display:inline-flex;align-items:center;justify-content:center;font-size:16px;font-weight:900;flex-shrink:0;box-shadow:0 2px 8px ${tone.c}55;transition:all 0.3s ease;">${n}</div>
          <div style="font-size:22px;line-height:1;">${icon}</div>
          <div style="font-weight:800;font-size:15px;color:${tone.c};letter-spacing:0.01em;flex:1;">${title}</div>
          <div data-solved-badge style="display:none;background:${tone.c};color:#fff;border-radius:20px;padding:4px 10px;font-size:11px;font-weight:800;flex-shrink:0;">✓ Done</div>
        </div>
        <div style="font-size:14px;color:#0B1426;line-height:1.6;margin-bottom:12px;">${prompt}</div>
        ${formula ? `<div style="background:${tone.bg};border:1px dashed ${tone.c}50;border-radius:10px;padding:11px 14px;font-family:'JetBrains Mono',ui-monospace,monospace;font-size:14px;color:#0B1426;margin-bottom:12px;text-align:center;letter-spacing:0.02em;">${formula}</div>` : ''}
        ${preview ? `<div class="ped-step__preview" style="margin-bottom:12px;">${preview}</div>` : ''}
        <button data-action="ped-solve" type="button" style="background:#fff;border:1.5px dashed ${tone.c};color:${tone.c};font-size:13px;font-weight:800;padding:9px 16px;border-radius:8px;cursor:pointer;width:100%;letter-spacing:0.02em;transition:all 0.2s ease;">Solve step ${n} ↓</button>
        <div class="ped-step__answer is-hidden" style="margin-top:14px;padding:14px 16px;background:${tone.soft};border-radius:10px;border-left:4px solid ${tone.c};font-size:14px;color:#0B1426;line-height:1.65;">${reveal}</div>
      </div>
    `;

    // Connector arrow between nodes
    const connector = (n, _tone) => `
      <div class="ped-calc-link" data-ped-connector="${n}" style="display:flex;justify-content:center;align-items:center;height:36px;position:relative;">
        <div class="ped-calc-link__line" style="width:3px;height:100%;background:#CBD5E1;border-radius:2px;transition:background 0.25s ease;" data-link-line></div>
        <div class="ped-calc-link__arrow" style="position:absolute;bottom:-2px;width:0;height:0;border-left:7px solid transparent;border-right:7px solid transparent;border-top:9px solid #CBD5E1;transition:border-top-color 0.25s ease;" data-link-arrow></div>
      </div>
    `;

    // Roadmap
    const roadmap = `
      <div style="margin:18px 0 14px;padding:18px 14px 14px;background:#FAFBFF;border-radius:14px;border:1px solid #E7E7EA;">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;">
          <div style="font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:0.09em;color:#475569;">Your 5-step journey</div>
          <div style="display:flex;align-items:center;gap:8px;">
            <div style="display:flex;gap:4px;">
              ${roadmapStops.map((stop, i) => `<div data-progress-dot="${i+1}" style="width:10px;height:10px;border-radius:50%;background:#E2E8F0;transition:background 0.3s ease;"></div>`).join('')}
            </div>
            <div data-ped-progress style="font-size:12px;font-weight:800;color:#94A3B8;min-width:70px;text-align:right;transition:color 0.3s ease;">0 / 5 done</div>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:0;align-items:start;position:relative;">
          ${roadmapStops.map((stop, i) => `
            <div style="display:flex;flex-direction:column;align-items:center;gap:6px;position:relative;">
              ${i > 0 ? `<div style="position:absolute;top:18px;right:50%;width:100%;height:3px;background:linear-gradient(90deg,${roadmapStops[i-1].tone.c}30,${stop.tone.c}30);border-radius:2px;z-index:0;"></div>` : ''}
              <div data-roadmap-step="${i+1}" style="position:relative;z-index:1;width:36px;height:36px;border-radius:50%;background:#fff;border:2.5px solid ${stop.tone.c};color:${stop.tone.c};display:inline-flex;align-items:center;justify-content:center;font-size:14px;font-weight:900;box-shadow:0 2px 6px ${stop.tone.c}30;transition:all 0.3s ease;">${i + 1}</div>
              <div style="font-size:16px;line-height:1;">${stop.icon}</div>
              <div style="font-size:11px;font-weight:700;color:${stop.tone.c};text-align:center;line-height:1.3;max-width:90px;">${stop.label}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    // Conclusion block (locked until all steps solved)
    const conclusionBlock = conclusion ? `
      <div data-ped-payoff style="margin-top:18px;position:relative;border-radius:16px;opacity:0.35;filter:blur(1px);transition:opacity 0.5s ease,filter 0.5s ease,box-shadow 0.5s ease;">
        <div style="border-radius:16px;overflow:hidden;background:linear-gradient(135deg,#0B1426,#1E293B);box-shadow:0 4px 18px rgba(11,20,38,0.18);">
          <div style="padding:18px 22px;display:flex;align-items:flex-start;gap:14px;">
            <div style="font-size:34px;line-height:1;flex-shrink:0;">🏆</div>
            <div>
              <div style="color:#FCD34D;font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:4px;">The full picture</div>
              <div style="color:#fff;font-size:17px;font-weight:800;margin-bottom:6px;">Conclusion</div>
              <div style="color:rgba(255,255,255,0.85);font-size:14px;line-height:1.65;">${conclusion}</div>
            </div>
          </div>
        </div>
        <div data-ped-lock style="position:absolute;inset:0;border-radius:16px;display:flex;align-items:center;justify-content:center;background:rgba(248,250,252,0.55);backdrop-filter:blur(2px);">
          <div style="background:#fff;border:1.5px solid #E2E8F0;border-radius:12px;padding:10px 18px;font-size:13px;font-weight:800;color:#475569;box-shadow:0 2px 8px rgba(0,0,0,0.08);">🔒 Solve all 5 steps to unlock</div>
        </div>
      </div>
    ` : '';

    // Context strip
    const contextStrip = contextLine ? `
      <div style="margin-top:18px;padding:14px 18px;background:#FAFBFF;border-radius:12px;border:1px solid #E7E7EA;border-left:4px solid #0B1426;font-size:14px;color:#0B1426;line-height:1.65;">
        <strong>💡 Why?</strong> ${contextLine}
      </div>
    ` : '';

    const [s1, s2, s3, s4, s5] = steps;
    /* roadmapStops destructure was here; the values were unused —
       only roadmap (the string) is consumed below. */

    return `
      ${scenarioPanel}
      ${roadmap}
      ${stepNode(1, s1.tone, s1.icon, s1.title, s1.prompt, s1.formula, s1.reveal, s1.preview)}
      ${connector(1, s2.tone)}
      ${stepNode(2, s2.tone, s2.icon, s2.title, s2.prompt, s2.formula, s2.reveal, s2.preview)}
      ${connector(2, s3.tone)}
      ${stepNode(3, s3.tone, s3.icon, s3.title, s3.prompt, s3.formula, s3.reveal, s3.preview)}
      ${connector(3, s4.tone)}
      ${stepNode(4, s4.tone, s4.icon, s4.title, s4.prompt, s4.formula, s4.reveal, s4.preview)}
      ${connector(4, s5.tone)}
      ${stepNode(5, s5.tone, s5.icon, s5.title, s5.prompt, s5.formula, s5.reveal, s5.preview)}
      ${conclusionBlock}
      ${contextStrip}
      ${examEdge ? `<div style="margin-top:18px;">${renderExamEdge(examEdge)}</div>` : ''}
    `;
  }

  /* -------------------------------------------------------------------------
     PED Calculation — connected step chain.
     Five tone-coded nodes wired together; each "Solve" reveals working,
     populates the formula scaffold and lights up the next connector.
     ------------------------------------------------------------------------- */
  function renderCardPedCalculation(c) {
    const s = c.scenario || {};
    const cur = s.currency || '£';
    const p1 = s.p1, p2 = s.p2, q1 = s.q1, q2 = s.q2;
    const pctQ = ((q2 - q1) / q1) * 100;
    const pctP = ((p2 - p1) / p1) * 100;
    const ped = pctQ / pctP;
    const tr1 = p1 * q1, tr2 = p2 * q2;
    const trDelta = tr2 - tr1;
    const absPed = Math.abs(ped);
    const fmtPct = v => (v > 0 ? '+' : '') + v.toFixed(0) + '%';
    const fmtMoney = v => cur + v.toLocaleString();

    const T1 = { name:'green',  c:'#059669', bg:'#ECFDF5', soft:'#D1FAE5' };
    const T2 = { name:'amber',  c:'#D97706', bg:'#FFFBEB', soft:'#FEF3C7' };
    const T3 = { name:'blue',   c:'#2563EB', bg:'#EFF6FF', soft:'#DBEAFE' };
    const T4 = { name:'purple', c:'#7C3AED', bg:'#F5F3FF', soft:'#EDE9FE' };
    const T5 = { name:'rose',   c:'#DC2626', bg:'#FEF2F2', soft:'#FEE2E2' };

    let verdict, verdictIdx;
    if (absPed === 0)           { verdict = 'Perfectly inelastic'; verdictIdx = 0; }
    else if (absPed < 1)        { verdict = 'Inelastic';          verdictIdx = 1; }
    else if (absPed === 1)      { verdict = 'Unit elastic';       verdictIdx = 2; }
    else if (absPed < Infinity) { verdict = 'Elastic';            verdictIdx = 3; }
    else                        { verdict = 'Perfectly elastic';  verdictIdx = 4; }

    // Mini P/Q scatter chart
    const chartW = 220, chartH = 150;
    const padL = 32, padB = 28, padT = 14, padR = 14;
    const qMax = Math.max(q1, q2) * 1.2;
    const pMax = Math.max(p1, p2) * 1.4;
    const xScale = q => padL + (q / qMax) * (chartW - padL - padR);
    const yScale = p => (chartH - padB) - (p / pMax) * (chartH - padT - padB);
    const cx1 = xScale(q1), cy1 = yScale(p1);
    const cx2 = xScale(q2), cy2 = yScale(p2);
    const miniChart = `
      <svg viewBox="0 0 ${chartW} ${chartH}" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:Inter,sans-serif;">
        <line x1="${padL}" y1="${padT}" x2="${padL}" y2="${chartH - padB}" stroke="#CBD5E1" stroke-width="1.5"/>
        <line x1="${padL}" y1="${chartH - padB}" x2="${chartW - padR}" y2="${chartH - padB}" stroke="#CBD5E1" stroke-width="1.5"/>
        <text x="6" y="${padT + 8}" font-size="10" fill="#94A3B8" font-weight="700">P</text>
        <text x="${chartW - padR - 4}" y="${chartH - padB + 18}" font-size="10" fill="#94A3B8" font-weight="700" text-anchor="end">Q</text>
        <line x1="${cx1}" y1="${cy1}" x2="${cx2}" y2="${cy2}" stroke="#0B1426" stroke-width="1.5" stroke-dasharray="4,3" opacity="0.4"/>
        <line x1="${padL}" y1="${cy1}" x2="${cx1}" y2="${cy1}" stroke="${T1.c}" stroke-width="1" stroke-dasharray="3,3" opacity="0.5"/>
        <line x1="${cx1}" y1="${cy1}" x2="${cx1}" y2="${chartH - padB}" stroke="${T1.c}" stroke-width="1" stroke-dasharray="3,3" opacity="0.5"/>
        <line x1="${padL}" y1="${cy2}" x2="${cx2}" y2="${cy2}" stroke="${T5.c}" stroke-width="1" stroke-dasharray="3,3" opacity="0.5"/>
        <line x1="${cx2}" y1="${cy2}" x2="${cx2}" y2="${chartH - padB}" stroke="${T5.c}" stroke-width="1" stroke-dasharray="3,3" opacity="0.5"/>
        <circle cx="${cx1}" cy="${cy1}" r="6" fill="${T1.c}" stroke="#fff" stroke-width="2"/>
        <circle cx="${cx2}" cy="${cy2}" r="6" fill="${T5.c}" stroke="#fff" stroke-width="2"/>
        <text x="${cx1 + 9}" y="${cy1 - 6}" font-size="10" fill="${T1.c}" font-weight="800">Before</text>
        <text x="${cx2 + 9}" y="${cy2 - 6}" font-size="10" fill="${T5.c}" font-weight="800">After</text>
      </svg>
    `;

    const scenarioPanel = `
      <div style="border-radius:16px;overflow:hidden;border:1px solid #E2E8F0;box-shadow:0 3px 14px rgba(0,0,0,0.08);margin-bottom:14px;background:#fff;">
        <div style="background:linear-gradient(135deg,#0B1426,#1E293B);padding:16px 20px;display:flex;align-items:center;gap:12px;">
          <span style="font-size:26px;">${s.icon || '📊'}</span>
          <div>
            <div style="color:#fff;font-weight:800;font-size:12px;text-transform:uppercase;letter-spacing:0.1em;">The scenario</div>
            <div style="color:#fff;font-weight:800;font-size:17px;margin-top:2px;">${s.headline}</div>
            ${s.subline ? `<div style="color:rgba(255,255,255,0.7);font-size:13px;margin-top:3px;">${s.subline}</div>` : ''}
          </div>
        </div>
        <div style="padding:18px 20px;display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:20px;align-items:center;">
          <div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
              <div style="border-radius:10px;background:${T1.bg};padding:12px 14px;border:1px solid ${T1.c}30;">
                <div style="font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:0.08em;color:${T1.c};">Before</div>
                <div style="font-size:18px;font-weight:800;color:#0B1426;margin-top:4px;">${fmtMoney(p1)} <span style="font-size:13px;color:#475569;font-weight:600;">/ ticket</span></div>
                <div style="font-size:13px;color:#475569;margin-top:2px;">${q1.toLocaleString()} tickets sold</div>
              </div>
              <div style="border-radius:10px;background:${T5.bg};padding:12px 14px;border:1px solid ${T5.c}30;">
                <div style="font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:0.08em;color:${T5.c};">After</div>
                <div style="font-size:18px;font-weight:800;color:#0B1426;margin-top:4px;">${fmtMoney(p2)} <span style="font-size:13px;color:#475569;font-weight:600;">/ ticket</span></div>
                <div style="font-size:13px;color:#475569;margin-top:2px;">${q2.toLocaleString()} tickets sold</div>
              </div>
            </div>
          </div>
          <div>${miniChart}</div>
        </div>
      </div>
    `;

    // Spectrum for step 4
    const spectrumZones = [
      { label: 'Perf. inelastic', short: '0',   bg: T5.bg, c: T5.c },
      { label: 'Inelastic',       short: '<1',  bg: T2.bg, c: T2.c },
      { label: 'Unit elastic',    short: '=1',  bg: T3.bg, c: T3.c },
      { label: 'Elastic',         short: '>1',  bg: T4.bg, c: T4.c },
      { label: 'Perf. elastic',   short: '∞',   bg: T1.bg, c: T1.c }
    ];

    // TR bars for step 5
    const trMax = Math.max(tr1, tr2);
    const barH = 38;
    const barChart = `
      <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:14px;">
        <div>
          <div style="display:flex;justify-content:space-between;font-size:12px;font-weight:800;margin-bottom:4px;">
            <span style="color:${T1.c};">TR Before · ${fmtMoney(p1)} × ${q1}</span>
            <span style="color:#0B1426;">${fmtMoney(tr1)}</span>
          </div>
          <div style="height:${barH}px;background:#F1F5F9;border-radius:8px;overflow:hidden;">
            <div style="width:${(tr1 / trMax) * 100}%;height:100%;background:linear-gradient(90deg,${T1.c},${T1.c}cc);"></div>
          </div>
        </div>
        <div>
          <div style="display:flex;justify-content:space-between;font-size:12px;font-weight:800;margin-bottom:4px;">
            <span style="color:${T5.c};">TR After · ${fmtMoney(p2)} × ${q2}</span>
            <span style="color:#0B1426;">${fmtMoney(tr2)}</span>
          </div>
          <div style="height:${barH}px;background:#F1F5F9;border-radius:8px;overflow:hidden;">
            <div style="width:${(tr2 / trMax) * 100}%;height:100%;background:linear-gradient(90deg,${T5.c},${T5.c}cc);"></div>
          </div>
        </div>
      </div>
    `;

    const chainHtml = buildElasticityCalcChain({
      scenarioPanel,
      roadmapStops: [
        { tone: T1, icon: '📉', label: 'Find % ΔQ' },
        { tone: T2, icon: '💷', label: 'Find % ΔP' },
        { tone: T3, icon: '➗', label: 'Apply formula' },
        { tone: T4, icon: '🎯', label: 'Classify' },
        { tone: T5, icon: '💰', label: 'Revenue impact' }
      ],
      steps: [
        {
          tone: T1, icon: '📉', title: 'Find the % change in quantity',
          prompt: 'When price rose, quantity demanded dropped. By what percentage?',
          formula: `% ΔQ&nbsp;&nbsp;=&nbsp;&nbsp;<span style="color:${T1.c};font-weight:800;">(New − Old)</span> ÷ Old × 100`,
          reveal: `<div style="font-family:'JetBrains Mono',ui-monospace,monospace;font-size:13.5px;">% ΔQ = (${q2} − ${q1}) ÷ ${q1} × 100<br><span style="font-size:18px;font-weight:800;color:${T1.c};">% ΔQ = ${fmtPct(pctQ)}</span></div>
            <div style="margin-top:10px;font-size:13.5px;">Negative — that is correct. Law of demand: price up, quantity down.</div>`
        },
        {
          tone: T2, icon: '💷', title: 'Find the % change in price',
          prompt: 'Now repeat the same formula on the price side.',
          formula: `% ΔP&nbsp;&nbsp;=&nbsp;&nbsp;<span style="color:${T2.c};font-weight:800;">(New − Old)</span> ÷ Old × 100`,
          reveal: `<div style="font-family:'JetBrains Mono',ui-monospace,monospace;font-size:13.5px;">% ΔP = (${p2} − ${p1}) ÷ ${p1} × 100<br><span style="font-size:18px;font-weight:800;color:${T2.c};">% ΔP = ${fmtPct(pctP)}</span></div>
            <div style="margin-top:10px;font-size:13.5px;">Positive — the promoter raised the price.</div>`
        },
        {
          tone: T3, icon: '➗', title: 'Apply the PED formula',
          prompt: 'Plug the two answers into the PED equation — the result is your coefficient.',
          formula: `PED&nbsp;&nbsp;=&nbsp;&nbsp;<span style="color:${T1.c};font-weight:800;">% ΔQ</span>&nbsp;&nbsp;÷&nbsp;&nbsp;<span style="color:${T2.c};font-weight:800;">% ΔP</span>`,
          reveal: `<div style="display:flex;align-items:center;justify-content:center;gap:14px;flex-wrap:wrap;font-family:'JetBrains Mono',ui-monospace,monospace;font-size:15px;font-weight:800;">
            <span style="color:#0B1426;">PED =</span>
            <span style="background:${T1.soft};color:${T1.c};padding:6px 12px;border-radius:8px;border:1.5px solid ${T1.c}50;">${fmtPct(pctQ)}</span>
            <span style="color:#0B1426;">÷</span>
            <span style="background:${T2.soft};color:${T2.c};padding:6px 12px;border-radius:8px;border:1.5px solid ${T2.c}50;">${fmtPct(pctP)}</span>
            <span style="color:#0B1426;">=</span>
            <span style="background:${T3.c};color:#fff;padding:6px 16px;border-radius:8px;font-size:18px;box-shadow:0 2px 8px ${T3.c}55;">${ped.toFixed(2)}</span>
          </div>
          <div style="margin-top:12px;font-size:13.5px;text-align:center;">The minus sign is expected — but we classify using the <strong>magnitude</strong> |${ped.toFixed(2)}| = ${absPed.toFixed(2)}.</div>`
        },
        {
          tone: T4, icon: '🎯', title: 'Classify the elasticity',
          prompt: 'Compare the magnitude to 1. Where on the elasticity spectrum does our answer land?',
          formula: `Compare&nbsp;&nbsp;<span style="color:${T4.c};font-weight:800;">|PED|</span>&nbsp;&nbsp;against&nbsp;&nbsp;<span style="color:${T4.c};font-weight:800;">1</span>`,
          preview: `<div style="display:grid;grid-template-columns:repeat(5,1fr);gap:4px;">
            ${spectrumZones.map(z => `
              <div style="background:${z.bg};border:1px solid ${z.c}40;border-radius:8px;padding:8px 4px;text-align:center;">
                <div style="font-size:14px;font-weight:800;color:${z.c};">${z.short}</div>
                <div style="font-size:10px;font-weight:700;color:${z.c};margin-top:2px;text-transform:uppercase;letter-spacing:0.03em;">${z.label}</div>
              </div>
            `).join('')}
          </div>`,
          reveal: `<div style="margin-bottom:14px;">
            <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:4px;margin-bottom:6px;">
              ${spectrumZones.map((z, i) => `
                <div style="background:${z.bg};border:${i === verdictIdx ? `2.5px solid ${z.c}` : `1px solid ${z.c}40`};border-radius:8px;padding:8px 4px;text-align:center;position:relative;${i === verdictIdx ? `box-shadow:0 0 0 4px ${z.c}20;` : ''}">
                  <div style="font-size:14px;font-weight:800;color:${z.c};">${z.short}</div>
                  <div style="font-size:10px;font-weight:700;color:${z.c};margin-top:2px;text-transform:uppercase;letter-spacing:0.03em;">${z.label}</div>
                  ${i === verdictIdx ? `<div style="position:absolute;top:-22px;left:50%;transform:translateX(-50%);background:${z.c};color:#fff;padding:3px 9px;border-radius:6px;font-size:11px;font-weight:800;box-shadow:0 2px 6px rgba(0,0,0,0.2);white-space:nowrap;">|${ped.toFixed(2)}| = ${absPed.toFixed(2)} ▼</div>` : ''}
                </div>
              `).join('')}
            </div>
          </div>
          <div style="background:#fff;border-radius:10px;padding:12px 14px;border:2px solid ${T4.c};display:flex;align-items:center;gap:10px;">
            <span style="font-size:22px;">✅</span>
            <div>
              <div style="font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:0.08em;color:${T4.c};">Verdict</div>
              <div style="font-size:16px;font-weight:800;color:#0B1426;margin-top:2px;">Demand is <span style="color:${T4.c};">price ${verdict.toLowerCase()}</span></div>
              <div style="font-size:13px;color:#475569;margin-top:3px;line-height:1.5;">A ${fmtPct(pctP)} price rise caused a ${fmtPct(pctQ)} fall in quantity — a bigger proportional response.</div>
            </div>
          </div>`
        },
        {
          tone: T5, icon: '💰', title: 'What happens to total revenue?',
          prompt: 'When demand is elastic and you raise the price, the volume loss outweighs the price gain — and revenue falls.',
          formula: `TR&nbsp;&nbsp;=&nbsp;&nbsp;<span style="color:${T5.c};font-weight:800;">Price</span>&nbsp;&nbsp;×&nbsp;&nbsp;<span style="color:${T5.c};font-weight:800;">Quantity</span>`,
          reveal: `${barChart}
          <div style="background:#fff;border-radius:10px;padding:12px 14px;border:2px solid ${T5.c};display:flex;align-items:center;gap:12px;">
            <div style="background:${T5.c};color:#fff;border-radius:10px;padding:8px 14px;font-size:18px;font-weight:800;flex-shrink:0;">${trDelta < 0 ? '−' : '+'}${fmtMoney(Math.abs(trDelta))}</div>
            <div>
              <div style="font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:0.08em;color:${T5.c};">Revenue impact</div>
              <div style="font-size:14px;color:#0B1426;margin-top:3px;line-height:1.5;">Revenue ${trDelta < 0 ? '<strong>falls</strong>' : '<strong>rises</strong>'} by ${fmtMoney(Math.abs(trDelta))}. The promoter would earn more by keeping the price at ${fmtMoney(p1)}.</div>
            </div>
          </div>`
        }
      ],
      conclusion: c.conclusion,
      contextLine: c.contextLine,
      examEdge: c.examEdge
    });

    return `
      <div class="card__step-label">${c.stepLabel || ''}</div>
      <h1 class="card__title">${c.title || ''}</h1>
      ${c.lede ? `<p class="card__lede">${c.lede}</p>` : ''}
      ${chainHtml}
    `;
  }

  /* -------------------------------------------------------------------------
     PES Calculation — connected step chain for Price Elasticity of Supply.
     Scenario: oil $50→$60, 80m→84m barrels/day. PES = +0.25 (inelastic).
     ------------------------------------------------------------------------- */
  function renderCardPesCalculation(c) {
    const s = c.scenario || {};
    const cur = s.currency || '$';
    const p1 = s.p1, p2 = s.p2, q1 = s.q1, q2 = s.q2;
    const pctP  = ((p2 - p1) / p1) * 100;
    const pctQS = ((q2 - q1) / q1) * 100;
    const pes   = pctQS / pctP;
    const fmtPct   = v => (v > 0 ? '+' : '') + v.toFixed(1) + '%';
    const fmtMoney = v => cur + v.toLocaleString();

    const T1 = { name:'green',  c:'#059669', bg:'#ECFDF5', soft:'#D1FAE5' };
    const T2 = { name:'amber',  c:'#D97706', bg:'#FFFBEB', soft:'#FEF3C7' };
    const T3 = { name:'blue',   c:'#2563EB', bg:'#EFF6FF', soft:'#DBEAFE' };
    const T4 = { name:'purple', c:'#7C3AED', bg:'#F5F3FF', soft:'#EDE9FE' };
    const T5 = { name:'rose',   c:'#DC2626', bg:'#FEF2F2', soft:'#FEE2E2' };

    let verdict, verdictIdx;
    if (pes === 0)           { verdict = 'Perfectly inelastic'; verdictIdx = 0; }
    else if (pes < 1)        { verdict = 'Inelastic';           verdictIdx = 1; }
    else if (pes === 1)      { verdict = 'Unit elastic';        verdictIdx = 2; }
    else if (pes < Infinity) { verdict = 'Elastic';             verdictIdx = 3; }
    else                     { verdict = 'Perfectly elastic';   verdictIdx = 4; }

    // Mini supply chart — upward sloping: Before (lower P, lower Q) at bottom-left, After at top-right
    const chartW = 220, chartH = 150;
    const padL = 32, padB = 28, padT = 14, padR = 14;
    const qMax = Math.max(q1, q2) * 1.25;
    const pMax = Math.max(p1, p2) * 1.4;
    const xScale = q => padL + (q / qMax) * (chartW - padL - padR);
    const yScale = p => (chartH - padB) - (p / pMax) * (chartH - padT - padB);
    const bx = xScale(q1), by = yScale(p1);
    const ax = xScale(q2), ay = yScale(p2);
    const miniChart = `
      <svg viewBox="0 0 ${chartW} ${chartH}" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:Inter,sans-serif;">
        <line x1="${padL}" y1="${padT}" x2="${padL}" y2="${chartH - padB}" stroke="#CBD5E1" stroke-width="1.5"/>
        <line x1="${padL}" y1="${chartH - padB}" x2="${chartW - padR}" y2="${chartH - padB}" stroke="#CBD5E1" stroke-width="1.5"/>
        <text x="6" y="${padT + 8}" font-size="10" fill="#94A3B8" font-weight="700">P</text>
        <text x="${chartW - padR - 4}" y="${chartH - padB + 18}" font-size="10" fill="#94A3B8" font-weight="700" text-anchor="end">Q</text>
        <line x1="${bx}" y1="${by}" x2="${ax}" y2="${ay}" stroke="#0B1426" stroke-width="1.5" stroke-dasharray="4,3" opacity="0.4"/>
        <line x1="${padL}" y1="${by}" x2="${bx}" y2="${by}" stroke="${T1.c}" stroke-width="1" stroke-dasharray="3,3" opacity="0.5"/>
        <line x1="${bx}" y1="${by}" x2="${bx}" y2="${chartH - padB}" stroke="${T1.c}" stroke-width="1" stroke-dasharray="3,3" opacity="0.5"/>
        <line x1="${padL}" y1="${ay}" x2="${ax}" y2="${ay}" stroke="${T5.c}" stroke-width="1" stroke-dasharray="3,3" opacity="0.5"/>
        <line x1="${ax}" y1="${ay}" x2="${ax}" y2="${chartH - padB}" stroke="${T5.c}" stroke-width="1" stroke-dasharray="3,3" opacity="0.5"/>
        <circle cx="${bx}" cy="${by}" r="6" fill="${T1.c}" stroke="#fff" stroke-width="2"/>
        <circle cx="${ax}" cy="${ay}" r="6" fill="${T5.c}" stroke="#fff" stroke-width="2"/>
        <text x="${bx - 40}" y="${by + 4}" font-size="10" fill="${T1.c}" font-weight="800">Before</text>
        <text x="${ax + 6}" y="${ay - 6}" font-size="10" fill="${T5.c}" font-weight="800">After</text>
      </svg>
    `;

    const scenarioPanel = `
      <div style="border-radius:16px;overflow:hidden;border:1px solid #E2E8F0;box-shadow:0 3px 14px rgba(0,0,0,0.08);margin-bottom:14px;background:#fff;">
        <div style="background:linear-gradient(135deg,#0B1426,#1E293B);padding:16px 20px;display:flex;align-items:center;gap:12px;">
          <span style="font-size:26px;">${s.icon || '📊'}</span>
          <div>
            <div style="color:#fff;font-weight:800;font-size:12px;text-transform:uppercase;letter-spacing:0.1em;">The scenario</div>
            <div style="color:#fff;font-weight:800;font-size:17px;margin-top:2px;">${s.headline}</div>
            ${s.subline ? `<div style="color:rgba(255,255,255,0.7);font-size:13px;margin-top:3px;">${s.subline}</div>` : ''}
          </div>
        </div>
        <div style="padding:18px 20px;display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:20px;align-items:center;">
          <div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
              <div style="border-radius:10px;background:${T1.bg};padding:12px 14px;border:1px solid ${T1.c}30;">
                <div style="font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:0.08em;color:${T1.c};">Before</div>
                <div style="font-size:18px;font-weight:800;color:#0B1426;margin-top:4px;">${fmtMoney(p1)} <span style="font-size:13px;color:#475569;font-weight:600;">/ bbl</span></div>
                <div style="font-size:13px;color:#475569;margin-top:2px;">${q1}m ${s.qUnit || 'bbl/day'}</div>
              </div>
              <div style="border-radius:10px;background:${T5.bg};padding:12px 14px;border:1px solid ${T5.c}30;">
                <div style="font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:0.08em;color:${T5.c};">After</div>
                <div style="font-size:18px;font-weight:800;color:#0B1426;margin-top:4px;">${fmtMoney(p2)} <span style="font-size:13px;color:#475569;font-weight:600;">/ bbl</span></div>
                <div style="font-size:13px;color:#475569;margin-top:2px;">${q2}m ${s.qUnit || 'bbl/day'}</div>
              </div>
            </div>
          </div>
          <div>${miniChart}</div>
        </div>
      </div>
    `;

    const spectrumZones = [
      { label: 'Perf. inelastic', short: '0',   bg: T5.bg, c: T5.c },
      { label: 'Inelastic',       short: '<1',  bg: T2.bg, c: T2.c },
      { label: 'Unit elastic',    short: '=1',  bg: T3.bg, c: T3.c },
      { label: 'Elastic',         short: '>1',  bg: T4.bg, c: T4.c },
      { label: 'Perf. elastic',   short: '∞',   bg: T1.bg, c: T1.c }
    ];

    const impactBars = `
      <div style="margin-bottom:14px;">
        <div style="font-size:12px;font-weight:800;color:#475569;margin-bottom:8px;text-transform:uppercase;letter-spacing:0.06em;">When demand surges — where does the adjustment fall?</div>
        <div style="display:flex;flex-direction:column;gap:8px;">
          <div>
            <div style="display:flex;justify-content:space-between;font-size:12px;font-weight:800;margin-bottom:4px;">
              <span style="color:${T5.c};">Price adjustment (large)</span>
              <span style="color:${T5.c};">80%</span>
            </div>
            <div style="height:34px;background:#F1F5F9;border-radius:8px;overflow:hidden;">
              <div style="width:80%;height:100%;background:linear-gradient(90deg,${T5.c},${T5.c}cc);border-radius:8px;display:flex;align-items:center;padding:0 12px;">
                <span style="color:#fff;font-size:12px;font-weight:800;">↑ price spike</span>
              </div>
            </div>
          </div>
          <div>
            <div style="display:flex;justify-content:space-between;font-size:12px;font-weight:800;margin-bottom:4px;">
              <span style="color:${T1.c};">Quantity adjustment (small)</span>
              <span style="color:${T1.c};">20%</span>
            </div>
            <div style="height:34px;background:#F1F5F9;border-radius:8px;overflow:hidden;">
              <div style="width:20%;height:100%;background:linear-gradient(90deg,${T1.c},${T1.c}cc);border-radius:8px;"></div>
            </div>
          </div>
        </div>
      </div>
    `;

    return `
      <div class="card__step-label">${c.stepLabel || ''}</div>
      <h1 class="card__title">${c.title || ''}</h1>
      ${c.lede ? `<p class="card__lede">${c.lede}</p>` : ''}
      ${buildElasticityCalcChain({
        scenarioPanel,
        roadmapStops: [
          { tone: T1, icon: '💲', label: 'Find %ΔP' },
          { tone: T2, icon: '📦', label: 'Find %ΔQS' },
          { tone: T3, icon: '➗', label: 'PES formula' },
          { tone: T4, icon: '🎯', label: 'Classify' },
          { tone: T5, icon: '🌍', label: 'Market impact' }
        ],
        steps: [
          {
            tone: T1, icon: '💲', title: 'Find the % change in price',
            prompt: 'The oil price spiked. By what percentage did it rise?',
            formula: `% ΔP&nbsp;&nbsp;=&nbsp;&nbsp;<span style="color:${T1.c};font-weight:800;">(New − Old)</span> ÷ Old × 100`,
            reveal: `<div style="font-family:'JetBrains Mono',ui-monospace,monospace;font-size:13.5px;">% ΔP = (${p2} − ${p1}) ÷ ${p1} × 100<br><span style="font-size:18px;font-weight:800;color:${T1.c};">% ΔP = ${fmtPct(pctP)}</span></div>
              <div style="margin-top:10px;font-size:13.5px;">Positive — price moved up. PES is always positive, so this direction matters.</div>`
          },
          {
            tone: T2, icon: '📦', title: 'Find the % change in quantity supplied',
            prompt: 'Producers increased output. By what percentage did supply rise?',
            formula: `% ΔQS&nbsp;&nbsp;=&nbsp;&nbsp;<span style="color:${T2.c};font-weight:800;">(New − Old)</span> ÷ Old × 100`,
            reveal: `<div style="font-family:'JetBrains Mono',ui-monospace,monospace;font-size:13.5px;">% ΔQS = (${q2} − ${q1}) ÷ ${q1} × 100<br><span style="font-size:18px;font-weight:800;color:${T2.c};">% ΔQS = ${fmtPct(pctQS)}</span></div>
              <div style="margin-top:10px;font-size:13.5px;">Positive — supply rose. Both % changes are positive, so PES will be positive.</div>`
          },
          {
            tone: T3, icon: '➗', title: 'Apply the PES formula',
            prompt: 'Divide % ΔQS by % ΔP to get the PES coefficient.',
            formula: `PES&nbsp;&nbsp;=&nbsp;&nbsp;<span style="color:${T2.c};font-weight:800;">% ΔQS</span>&nbsp;&nbsp;÷&nbsp;&nbsp;<span style="color:${T1.c};font-weight:800;">% ΔP</span>`,
            reveal: `<div style="display:flex;align-items:center;justify-content:center;gap:14px;flex-wrap:wrap;font-family:'JetBrains Mono',ui-monospace,monospace;font-size:15px;font-weight:800;">
              <span style="color:#0B1426;">PES =</span>
              <span style="background:${T2.soft};color:${T2.c};padding:6px 12px;border-radius:8px;border:1.5px solid ${T2.c}50;">${fmtPct(pctQS)}</span>
              <span style="color:#0B1426;">÷</span>
              <span style="background:${T1.soft};color:${T1.c};padding:6px 12px;border-radius:8px;border:1.5px solid ${T1.c}50;">${fmtPct(pctP)}</span>
              <span style="color:#0B1426;">=</span>
              <span style="background:${T3.c};color:#fff;padding:6px 16px;border-radius:8px;font-size:18px;box-shadow:0 2px 8px ${T3.c}55;">${pes.toFixed(2)}</span>
            </div>
            <div style="margin-top:12px;font-size:13.5px;text-align:center;">Supply responded much less proportionally than price — a classic sign of inelastic supply.</div>`
          },
          {
            tone: T4, icon: '🎯', title: 'Classify the PES',
            prompt: 'Compare PES to 1. Is oil supply elastic or inelastic?',
            formula: `Compare&nbsp;&nbsp;<span style="color:${T4.c};font-weight:800;">PES</span>&nbsp;&nbsp;against&nbsp;&nbsp;<span style="color:${T4.c};font-weight:800;">1</span>`,
            preview: `<div style="display:grid;grid-template-columns:repeat(5,1fr);gap:4px;">
              ${spectrumZones.map(z => `
                <div style="background:${z.bg};border:1px solid ${z.c}40;border-radius:8px;padding:8px 4px;text-align:center;">
                  <div style="font-size:14px;font-weight:800;color:${z.c};">${z.short}</div>
                  <div style="font-size:10px;font-weight:700;color:${z.c};margin-top:2px;text-transform:uppercase;letter-spacing:0.03em;">${z.label}</div>
                </div>
              `).join('')}
            </div>`,
            reveal: `<div style="margin-bottom:14px;">
              <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:4px;margin-bottom:6px;">
                ${spectrumZones.map((z, i) => `
                  <div style="background:${z.bg};border:${i === verdictIdx ? `2.5px solid ${z.c}` : `1px solid ${z.c}40`};border-radius:8px;padding:8px 4px;text-align:center;position:relative;${i === verdictIdx ? `box-shadow:0 0 0 4px ${z.c}20;` : ''}">
                    <div style="font-size:14px;font-weight:800;color:${z.c};">${z.short}</div>
                    <div style="font-size:10px;font-weight:700;color:${z.c};margin-top:2px;text-transform:uppercase;letter-spacing:0.03em;">${z.label}</div>
                    ${i === verdictIdx ? `<div style="position:absolute;top:-22px;left:50%;transform:translateX(-50%);background:${z.c};color:#fff;padding:3px 9px;border-radius:6px;font-size:11px;font-weight:800;box-shadow:0 2px 6px rgba(0,0,0,0.2);white-space:nowrap;">PES = ${pes.toFixed(2)} ▼</div>` : ''}
                  </div>
                `).join('')}
              </div>
            </div>
            <div style="background:#fff;border-radius:10px;padding:12px 14px;border:2px solid ${T4.c};display:flex;align-items:center;gap:10px;">
              <span style="font-size:22px;">✅</span>
              <div>
                <div style="font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:0.08em;color:${T4.c};">Verdict</div>
                <div style="font-size:16px;font-weight:800;color:#0B1426;margin-top:2px;">Oil supply is <span style="color:${T4.c};">${verdict.toLowerCase()}</span></div>
                <div style="font-size:13px;color:#475569;margin-top:3px;line-height:1.5;">A ${fmtPct(pctP)} price rise only unlocked ${fmtPct(pctQS)} more supply — a much smaller proportional response.</div>
              </div>
            </div>`
          },
          {
            tone: T5, icon: '🌍', title: 'Market impact',
            prompt: 'With inelastic supply, what happens when demand surges? Where does the adjustment fall?',
            formula: `Demand shift → split between <span style="color:${T5.c};font-weight:800;">Price ↑</span> and <span style="color:${T1.c};font-weight:800;">Quantity ↑</span>`,
            reveal: `${impactBars}
            <div style="background:#fff;border-radius:10px;padding:12px 14px;border:2px solid ${T5.c};font-size:14px;color:#0B1426;line-height:1.65;">
              <div style="font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:0.08em;color:${T5.c};margin-bottom:6px;">Policy insight</div>
              With PES = ${pes.toFixed(2)}, a demand surge goes <strong>mostly into higher prices</strong>, not more output. Fixed refineries and long drilling timelines mean short-run supply is near-vertical. <strong>Long-run PES is higher</strong> as new infrastructure is eventually built, moderating prices over time.
            </div>`
          }
        ],
        conclusion: c.conclusion,
        contextLine: c.contextLine,
        examEdge: c.examEdge
      })}
    `;
  }

  /* -------------------------------------------------------------------------
     YED Calculation — connected step chain for Income Elasticity of Demand.
     Scenario: bus travel, income +5%, QD −10%. YED = −2 (inferior good).
     ------------------------------------------------------------------------- */
  function renderCardYedCalculation(c) {
    const s = c.scenario || {};
    const income1 = s.y1 != null ? s.y1 : (s.income1 || 100);
    const income2 = s.y2 != null ? s.y2 : (s.income2 || 105);
    const q1 = s.q1, q2 = s.q2;
    const cur = s.currency || '';
    const pctI = ((income2 - income1) / income1) * 100;
    const pctQ = ((q2 - q1) / q1) * 100;
    const yed  = pctQ / pctI;
    const fmtPct    = v => (v > 0 ? '+' : '') + v.toFixed(0) + '%';
    const fmtIncome = v => cur + v.toLocaleString();

    const T1 = { c:'#059669', bg:'#ECFDF5', soft:'#D1FAE5' };
    const T2 = { c:'#D97706', bg:'#FFFBEB', soft:'#FEF3C7' };
    const T3 = { c:'#2563EB', bg:'#EFF6FF', soft:'#DBEAFE' };
    const T4 = { c:'#7C3AED', bg:'#F5F3FF', soft:'#EDE9FE' };
    const T5 = { c:'#DC2626', bg:'#FEF2F2', soft:'#FEE2E2' };

    // YED spectrum: Inferior | Necessity | Luxury boundary | Luxury
    let verdictIdx;
    if (yed < 0)       verdictIdx = 0;  // Inferior
    else if (yed < 1)  verdictIdx = 1;  // Necessity
    else if (yed === 1) verdictIdx = 2; // Normal (boundary)
    else               verdictIdx = 3;  // Luxury

    const yedZones = [
      { label: 'Inferior',    sub: 'YED < 0',       color: '#DC2626' },
      { label: 'Necessity',   sub: '0 < YED < 1',   color: '#D97706' },
      { label: 'Normal',      sub: 'YED = 1',        color: '#0EA5E9' },
      { label: 'Luxury',      sub: 'YED > 1',        color: '#7C3AED' }
    ];
    const spectrum = `
      <div style="margin-top:10px;">
        <div style="font-size:12px;font-weight:700;color:#475569;margin-bottom:8px;">YED — good type spectrum</div>
        <div style="display:flex;border-radius:8px;overflow:hidden;border:1px solid #E2E8F0;">
          ${yedZones.map((z, i) => `
            <div style="flex:1;padding:8px 4px;background:${i === verdictIdx ? z.color : '#F8FAFC'};text-align:center;border-right:${i < 3 ? '1px solid #E2E8F0' : 'none'};">
              <div style="font-size:10px;font-weight:800;color:${i === verdictIdx ? '#fff' : '#475569'};line-height:1.3;">${z.label}</div>
              <div style="font-size:9px;color:${i === verdictIdx ? 'rgba(255,255,255,0.8)' : '#94A3B8'};margin-top:2px;">${z.sub}</div>
            </div>
          `).join('')}
        </div>
      </div>`;

    // Mini Engel curve chart (income on x, QD on y — negative slope = inferior)
    const chartW = 220, chartH = 150, padL = 32, padB = 28, padT = 14, padR = 14;
    const iMax = Math.max(income1, income2) * 1.25;
    const qMax = Math.max(q1, q2) * 1.25;
    const xS = i => padL + (i / iMax) * (chartW - padL - padR);
    const yS = q => (chartH - padB) - (q / qMax) * (chartH - padT - padB);
    const x1c = xS(income1), y1c = yS(q1), x2c = xS(income2), y2c = yS(q2);
    const miniChart = `
      <svg viewBox="0 0 ${chartW} ${chartH}" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:Inter,sans-serif;">
        <line x1="${padL}" y1="${padT}" x2="${padL}" y2="${chartH-padB}" stroke="#CBD5E1" stroke-width="1.5"/>
        <line x1="${padL}" y1="${chartH-padB}" x2="${chartW-padR}" y2="${chartH-padB}" stroke="#CBD5E1" stroke-width="1.5"/>
        <text x="6" y="${padT+8}" font-size="10" fill="#94A3B8" font-weight="700">Q</text>
        <text x="${chartW-padR-6}" y="${chartH-padB+18}" font-size="10" fill="#94A3B8" font-weight="700" text-anchor="end">Income${cur ? ' (' + cur + ')' : ''}</text>
        <line x1="${x1c}" y1="${y1c}" x2="${x2c}" y2="${y2c}" stroke="#0B1426" stroke-width="1.5" stroke-dasharray="4,3" opacity="0.4"/>
        <line x1="${padL}" y1="${y1c}" x2="${x1c}" y2="${y1c}" stroke="${T1.c}" stroke-width="1" stroke-dasharray="3,3" opacity="0.5"/>
        <line x1="${x1c}" y1="${y1c}" x2="${x1c}" y2="${chartH-padB}" stroke="${T1.c}" stroke-width="1" stroke-dasharray="3,3" opacity="0.5"/>
        <line x1="${padL}" y1="${y2c}" x2="${x2c}" y2="${y2c}" stroke="${T5.c}" stroke-width="1" stroke-dasharray="3,3" opacity="0.5"/>
        <line x1="${x2c}" y1="${y2c}" x2="${x2c}" y2="${chartH-padB}" stroke="${T5.c}" stroke-width="1" stroke-dasharray="3,3" opacity="0.5"/>
        <circle cx="${x1c}" cy="${y1c}" r="6" fill="${T1.c}" stroke="#fff" stroke-width="2"/>
        <circle cx="${x2c}" cy="${y2c}" r="6" fill="${T5.c}" stroke="#fff" stroke-width="2"/>
        <text x="${x1c-32}" y="${y1c+5}" font-size="10" fill="${T1.c}" font-weight="800">Before</text>
        <text x="${x2c+6}" y="${y2c+5}" font-size="10" fill="${T5.c}" font-weight="800">After</text>
      </svg>`;

    const scenarioPanel = `
      <div style="border-radius:16px;overflow:hidden;border:1px solid #E2E8F0;box-shadow:0 3px 14px rgba(0,0,0,0.08);margin-bottom:14px;background:#fff;">
        <div style="background:linear-gradient(135deg,#0B1426,#1E293B);padding:16px 20px;display:flex;align-items:center;gap:12px;">
          <span style="font-size:26px;">${s.icon || '🚌'}</span>
          <div>
            <div style="color:#fff;font-weight:800;font-size:12px;text-transform:uppercase;letter-spacing:0.1em;">The scenario</div>
            <div style="color:#fff;font-weight:800;font-size:17px;margin-top:2px;">${s.headline}</div>
            ${s.subline ? `<div style="color:rgba(255,255,255,0.7);font-size:13px;margin-top:3px;">${s.subline}</div>` : ''}
          </div>
        </div>
        <div style="padding:18px 20px;display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:20px;align-items:center;">
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
            <div style="border-radius:10px;background:${T1.bg};padding:12px 14px;border:1px solid ${T1.c}30;">
              <div style="font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:0.08em;color:${T1.c};">Before</div>
              <div style="font-size:18px;font-weight:800;color:#0B1426;margin-top:4px;">Income: <span style="font-size:15px;">${fmtIncome(income1)}</span></div>
              <div style="font-size:13px;color:#475569;margin-top:2px;">${q1.toLocaleString()} bus trips/day</div>
            </div>
            <div style="border-radius:10px;background:${T5.bg};padding:12px 14px;border:1px solid ${T5.c}30;">
              <div style="font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:0.08em;color:${T5.c};">After</div>
              <div style="font-size:18px;font-weight:800;color:#0B1426;margin-top:4px;">Income: <span style="font-size:15px;">${fmtIncome(income2)}</span></div>
              <div style="font-size:13px;color:#475569;margin-top:2px;">${q2.toLocaleString()} bus trips/day</div>
            </div>
          </div>
          <div>${miniChart}</div>
        </div>
      </div>`;

    const roadmapStops = [
      { tone: T1, icon: '💰', label: '%Δ Income' },
      { tone: T2, icon: '📊', label: '%ΔQD' },
      { tone: T3, icon: '➗', label: 'YED formula' },
      { tone: T4, icon: '🏷️', label: 'Interpret sign' },
      { tone: T5, icon: '📈', label: 'Interpret magnitude' }
    ];

    const steps = [
      {
        tone: T1, icon: '💰',
        title: 'Calculate % change in income',
        prompt: `Average household incomes rose from <strong>${fmtIncome(income1)}</strong> to <strong>${fmtIncome(income2)}</strong>. Apply: (New − Old) ÷ Old × 100`,
        formula: `% Δ Income = (${fmtIncome(income2)} − ${fmtIncome(income1)}) ÷ ${fmtIncome(income1)} × 100`,
        reveal: `% Δ Income = (${fmtIncome(income2)} − ${fmtIncome(income1)}) ÷ ${fmtIncome(income1)} × 100 = <strong>${fmtPct(pctI)}</strong>. This goes in the denominator of the YED formula. Keep the positive sign — incomes rose.`
      },
      {
        tone: T2, icon: '📊',
        title: 'Calculate % change in quantity demanded',
        prompt: `Demand for bus travel fell — from ${q1.toLocaleString()} to ${q2.toLocaleString()} trips/day. Calculate % ΔQD, making sure to keep the negative sign.`,
        formula: `% ΔQD = (${q2} − ${q1}) ÷ ${q1} × 100`,
        reveal: `% ΔQD = (${q2} − ${q1}) ÷ ${q1} × 100 = <strong>${fmtPct(pctQ)}</strong>. The negative sign is essential — it confirms demand <em>fell</em> when incomes rose, which is the defining characteristic of an inferior good.`
      },
      {
        tone: T3, icon: '➗',
        title: 'Apply the YED formula',
        prompt: 'Divide % ΔQD by % Δ Income. Keep the negative sign.',
        formula: `<span style="background:${T2.bg};border:1px solid ${T2.c}40;border-radius:6px;padding:3px 8px;">${fmtPct(pctQ)}</span> ÷ <span style="background:${T1.bg};border:1px solid ${T1.c}40;border-radius:6px;padding:3px 8px;">${fmtPct(pctI)}</span> = <span style="background:${T3.bg};border:1px solid ${T3.c}40;border-radius:6px;padding:3px 8px;font-weight:900;">YED = ${yed.toFixed(1)}</span>`,
        reveal: `YED = ${fmtPct(pctQ)} ÷ ${fmtPct(pctI)} = <strong>${yed.toFixed(1)}</strong>${spectrum}`
      },
      {
        tone: T4, icon: '🏷️',
        title: 'Interpret the sign — good type',
        prompt: `YED = ${yed.toFixed(1)}. Is the sign positive or negative? What type of good does this make bus travel?`,
        formula: null,
        reveal: `YED = ${yed.toFixed(1)} <strong>&lt; 0</strong> → bus travel is an <strong>inferior good</strong>. As incomes rise, consumers trade up — switching to cars or taxis. The negative sign is the single most important result: it classifies the good type. Never confuse sign with magnitude — a large negative YED means strongly inferior, not "very inelastic".`
      },
      {
        tone: T5, icon: '📈',
        title: 'Interpret the magnitude — boom and recession impacts',
        prompt: `|YED| = ${Math.abs(yed).toFixed(1)}. Is this weakly or strongly income-sensitive? What happens to bus demand in a boom vs a recession?`,
        formula: null,
        reveal: `|YED| = ${Math.abs(yed).toFixed(1)} <strong>&gt; 1</strong> → demand is <em>strongly</em> income-sensitive. A ${fmtPct(pctI)} income rise causes a ${fmtPct(Math.abs(pctQ))} fall in bus demand. <strong>In a boom:</strong> incomes rise → bus demand falls sharply → operators lose revenue, may need government subsidies to maintain services. <strong>In a recession:</strong> incomes fall → bus demand recovers → counter-cyclical benefit for operators. Bus companies and transport planners must model demand against the economic cycle — YED = ${yed.toFixed(1)} makes this a high-sensitivity relationship.`
      }
    ];

    return `
      <div class="card__step-label">${c.stepLabel || ''}</div>
      <h1 class="card__title">${c.title || ''}</h1>
      ${c.lede ? `<p class="card__lede">${c.lede}</p>` : ''}
      ${buildElasticityCalcChain({ scenarioPanel, roadmapStops, steps, conclusion: c.conclusion, contextLine: c.contextLine, examEdge: c.examEdge })}
    `;
  }

  /* -------------------------------------------------------------------------
     XED Calculation — connected step chain for Cross-Price Elasticity.
     Scenario: tea (A) & coffee (B). Coffee +15%, tea QD +9%. XED = +0.6.
     ------------------------------------------------------------------------- */
  function renderCardXedCalculation(c) {
    const s = c.scenario || {};
    const cur = s.currency || '£';
    const pB1 = s.pb1 != null ? s.pb1 : s.pB1;  // Price of Good B (coffee)
    const pB2 = s.pb2 != null ? s.pb2 : s.pB2;
    const qA1 = s.qa1 != null ? s.qa1 : s.qA1;  // QD of Good A (tea)
    const qA2 = s.qa2 != null ? s.qa2 : s.qA2;
    const goodA = s.goodA || 'Tea', goodB = s.goodB || 'Coffee';
    const pctPB = ((pB2 - pB1) / pB1) * 100;
    const pctQA = ((qA2 - qA1) / qA1) * 100;
    const xed   = pctQA / pctPB;
    const fmtPct = v => (v > 0 ? '+' : '') + v.toFixed(0) + '%';

    const T1 = { c:'#059669', bg:'#ECFDF5', soft:'#D1FAE5' };
    const T2 = { c:'#D97706', bg:'#FFFBEB', soft:'#FEF3C7' };
    const T3 = { c:'#2563EB', bg:'#EFF6FF', soft:'#DBEAFE' };
    const T4 = { c:'#7C3AED', bg:'#F5F3FF', soft:'#EDE9FE' };
    const T5 = { c:'#DC2626', bg:'#FEF2F2', soft:'#FEE2E2' };

    let verdictIdx;
    if (xed < -1)              verdictIdx = 0;  // Strong complement
    else if (xed < 0)          verdictIdx = 1;  // Weak complement
    else if (Math.abs(xed) < 0.1) verdictIdx = 2;  // Unrelated
    else if (xed < 1)          verdictIdx = 3;  // Weak substitute
    else                       verdictIdx = 4;  // Strong substitute

    const xedZones = [
      { label: 'Strong<br>Complement', sub: 'XED < −1',   color: '#DC2626' },
      { label: 'Weak<br>Complement',   sub: '−1 < XED < 0', color: '#D97706' },
      { label: 'Unrelated',            sub: 'XED = 0',    color: '#0EA5E9' },
      { label: 'Weak<br>Substitute',   sub: '0 < XED ≤ 1', color: '#059669' },
      { label: 'Strong<br>Substitute', sub: 'XED > 1',    color: '#7C3AED' }
    ];
    const spectrum = `
      <div style="margin-top:10px;">
        <div style="font-size:12px;font-weight:700;color:#475569;margin-bottom:8px;">XED — relationship spectrum</div>
        <div style="display:flex;border-radius:8px;overflow:hidden;border:1px solid #E2E8F0;">
          ${xedZones.map((z, i) => `
            <div style="flex:1;padding:8px 4px;background:${i === verdictIdx ? z.color : '#F8FAFC'};text-align:center;border-right:${i < 4 ? '1px solid #E2E8F0' : 'none'};">
              <div style="font-size:10px;font-weight:800;color:${i === verdictIdx ? '#fff' : '#475569'};line-height:1.3;">${z.label}</div>
              <div style="font-size:9px;color:${i === verdictIdx ? 'rgba(255,255,255,0.8)' : '#94A3B8'};margin-top:2px;">${z.sub}</div>
            </div>
          `).join('')}
        </div>
      </div>`;

    // Mini chart: Good B price on x, Good A QD on y
    const chartW = 220, chartH = 150, padL = 32, padB = 28, padT = 14, padR = 14;
    const pBMax = Math.max(pB1, pB2) * 1.3, qAMax = Math.max(qA1, qA2) * 1.3;
    const xS = p => padL + (p / pBMax) * (chartW - padL - padR);
    const yS = q => (chartH - padB) - (q / qAMax) * (chartH - padT - padB);
    const x1c = xS(pB1), y1c = yS(qA1), x2c = xS(pB2), y2c = yS(qA2);
    const dotColor2 = xed >= 0 ? T5.c : T4.c;
    const miniChart = `
      <svg viewBox="0 0 ${chartW} ${chartH}" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:Inter,sans-serif;">
        <line x1="${padL}" y1="${padT}" x2="${padL}" y2="${chartH-padB}" stroke="#CBD5E1" stroke-width="1.5"/>
        <line x1="${padL}" y1="${chartH-padB}" x2="${chartW-padR}" y2="${chartH-padB}" stroke="#CBD5E1" stroke-width="1.5"/>
        <text x="6" y="${padT+8}" font-size="9" fill="#94A3B8" font-weight="700">QD(A)</text>
        <text x="${chartW-padR-4}" y="${chartH-padB+18}" font-size="9" fill="#94A3B8" font-weight="700" text-anchor="end">P(B)</text>
        <line x1="${x1c}" y1="${y1c}" x2="${x2c}" y2="${y2c}" stroke="#0B1426" stroke-width="1.5" stroke-dasharray="4,3" opacity="0.4"/>
        <line x1="${padL}" y1="${y1c}" x2="${x1c}" y2="${y1c}" stroke="${T1.c}" stroke-width="1" stroke-dasharray="3,3" opacity="0.5"/>
        <line x1="${x1c}" y1="${y1c}" x2="${x1c}" y2="${chartH-padB}" stroke="${T1.c}" stroke-width="1" stroke-dasharray="3,3" opacity="0.5"/>
        <line x1="${padL}" y1="${y2c}" x2="${x2c}" y2="${y2c}" stroke="${dotColor2}" stroke-width="1" stroke-dasharray="3,3" opacity="0.5"/>
        <line x1="${x2c}" y1="${y2c}" x2="${x2c}" y2="${chartH-padB}" stroke="${dotColor2}" stroke-width="1" stroke-dasharray="3,3" opacity="0.5"/>
        <circle cx="${x1c}" cy="${y1c}" r="6" fill="${T1.c}" stroke="#fff" stroke-width="2"/>
        <circle cx="${x2c}" cy="${y2c}" r="6" fill="${dotColor2}" stroke="#fff" stroke-width="2"/>
        <text x="${x1c-32}" y="${y1c+5}" font-size="10" fill="${T1.c}" font-weight="800">Before</text>
        <text x="${x2c+6}" y="${y2c-4}" font-size="10" fill="${dotColor2}" font-weight="800">After</text>
      </svg>`;

    const scenarioPanel = `
      <div style="border-radius:16px;overflow:hidden;border:1px solid #E2E8F0;box-shadow:0 3px 14px rgba(0,0,0,0.08);margin-bottom:14px;background:#fff;">
        <div style="background:linear-gradient(135deg,#0B1426,#1E293B);padding:16px 20px;display:flex;align-items:center;gap:12px;">
          <span style="font-size:26px;">${s.icon || '☕'}</span>
          <div>
            <div style="color:#fff;font-weight:800;font-size:12px;text-transform:uppercase;letter-spacing:0.1em;">The scenario</div>
            <div style="color:#fff;font-weight:800;font-size:17px;margin-top:2px;">${s.headline}</div>
            ${s.subline ? `<div style="color:rgba(255,255,255,0.7);font-size:13px;margin-top:3px;">${s.subline}</div>` : ''}
          </div>
        </div>
        <div style="padding:18px 20px;display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:20px;align-items:center;">
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
            <div style="border-radius:10px;background:${T1.bg};padding:12px 14px;border:1px solid ${T1.c}30;">
              <div style="font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:0.08em;color:${T1.c};">Before</div>
              <div style="font-size:14px;font-weight:800;color:#0B1426;margin-top:4px;">${goodB}: ${cur}${pB1}/cup</div>
              <div style="font-size:13px;color:#475569;margin-top:2px;">${goodA}: ${qA1} cups/day</div>
            </div>
            <div style="border-radius:10px;background:${T5.bg};padding:12px 14px;border:1px solid ${T5.c}30;">
              <div style="font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:0.08em;color:${T5.c};">After</div>
              <div style="font-size:14px;font-weight:800;color:#0B1426;margin-top:4px;">${goodB}: ${cur}${pB2}/cup</div>
              <div style="font-size:13px;color:#475569;margin-top:2px;">${goodA}: ${qA2} cups/day</div>
            </div>
          </div>
          <div>${miniChart}</div>
        </div>
      </div>`;

    const roadmapStops = [
      { tone: T1, icon: '☕', label: '%ΔP(Good B)' },
      { tone: T2, icon: '🍵', label: '%ΔQD(Good A)' },
      { tone: T3, icon: '➗', label: 'XED formula' },
      { tone: T4, icon: '🔗', label: 'Relationship' },
      { tone: T5, icon: '📏', label: 'Magnitude' }
    ];

    const steps = [
      {
        tone: T1, icon: '☕',
        title: `Calculate % change in price of ${goodB}`,
        prompt: `${goodB} price rose from <strong>${cur}${pB1}</strong> to <strong>${cur}${pB2}</strong> per cup. Apply: (New − Old) ÷ Old × 100`,
        formula: `% ΔP(${goodB}) = (${pB2} − ${pB1}) ÷ ${pB1} × 100`,
        reveal: `% ΔP(${goodB}) = (${pB2} − ${pB1}) ÷ ${pB1} × 100 = <strong>${fmtPct(pctPB)}</strong>. This is the price trigger — ${goodB} got more expensive, which may cause consumers to switch to ${goodA}.`
      },
      {
        tone: T2, icon: '🍵',
        title: `Calculate % change in QD of ${goodA}`,
        prompt: `${goodA} demand rose from <strong>${qA1}</strong> to <strong>${qA2}</strong> cups/day. Apply: (New − Old) ÷ Old × 100`,
        formula: `% ΔQD(${goodA}) = (${qA2} − ${qA1}) ÷ ${qA1} × 100`,
        reveal: `% ΔQD(${goodA}) = (${qA2} − ${qA1}) ÷ ${qA1} × 100 = <strong>${fmtPct(pctQA)}</strong>. ${goodA} demand rose when ${goodB} got more expensive — a positive response suggesting substitutability.`
      },
      {
        tone: T3, icon: '➗',
        title: 'Apply the XED formula',
        prompt: `Divide % ΔQD(${goodA}) by % ΔP(${goodB}). Always name both goods in the answer.`,
        formula: `<span style="background:${T2.bg};border:1px solid ${T2.c}40;border-radius:6px;padding:3px 8px;">${fmtPct(pctQA)}</span> ÷ <span style="background:${T1.bg};border:1px solid ${T1.c}40;border-radius:6px;padding:3px 8px;">${fmtPct(pctPB)}</span> = <span style="background:${T3.bg};border:1px solid ${T3.c}40;border-radius:6px;padding:3px 8px;font-weight:900;">XED = +${xed.toFixed(2)}</span>`,
        reveal: `XED(${goodA}, ${goodB}) = ${fmtPct(pctQA)} ÷ ${fmtPct(pctPB)} = <strong>+${xed.toFixed(2)}</strong>${spectrum}`
      },
      {
        tone: T4, icon: '🔗',
        title: 'Identify the relationship',
        prompt: `XED = +${xed.toFixed(2)}. Is the sign positive or negative? What does that tell you about the relationship between ${goodA} and ${goodB}?`,
        formula: null,
        reveal: `XED = +${xed.toFixed(2)} <strong>&gt; 0</strong> → ${goodA} and ${goodB} are <strong>substitutes</strong>. The positive sign confirms the relationship: when ${goodB} became more expensive, some consumers switched to ${goodA} instead. Always name both goods — "XED > 0 so substitutes" alone is incomplete without stating which goods.`
      },
      {
        tone: T5, icon: '📏',
        title: 'Interpret the magnitude — market and legal implications',
        prompt: `XED = +${xed.toFixed(2)}. How close are ${goodA} and ${goodB} as substitutes? Would the CMA consider them to be in the same market?`,
        formula: null,
        reveal: `XED = +${xed.toFixed(2)} indicates <em>moderate</em> substitutability — significant, but not close substitutes. Close substitutes have XED closer to 2–3; weak substitutes closer to 0.1–0.2. <strong>CMA competition law context:</strong> the Competition and Markets Authority uses XED &gt; ~0.5 as evidence that two products compete in the same market when reviewing mergers. XED = +${xed.toFixed(2)} would be borderline evidence of market overlap — enough to trigger scrutiny but not conclusive. A ${goodA} producer could use this: when ${goodB} prices rise due to commodity shocks, expect a modest boost to ${goodA} demand — plan production accordingly.`
      }
    ];

    return `
      <div class="card__step-label">${c.stepLabel || ''}</div>
      <h1 class="card__title">${c.title || ''}</h1>
      ${c.lede ? `<p class="card__lede">${c.lede}</p>` : ''}
      ${buildElasticityCalcChain({ scenarioPanel, roadmapStops, steps, conclusion: c.conclusion, contextLine: c.contextLine, examEdge: c.examEdge })}
    `;
  }

  /* -------------------------------------------------------------------------
     Market Structures Comparison — 4-column reveal table.
     ------------------------------------------------------------------------- */
  function renderCardMarketStructuresComparison(c) {
    const COLS = [
      { key: 'pc', label: 'Perfect Competition', color: '#059669' },
      { key: 'mc', label: 'Monopolistic Comp.',  color: '#0EA5E9' },
      { key: 'ol', label: 'Oligopoly',            color: '#D97706' },
      { key: 'mo', label: 'Monopoly',             color: '#DC2626' }
    ];
    const header = `<div style="display:grid;grid-template-columns:150px repeat(4,1fr);background:#0B1426;border-radius:12px 12px 0 0;">
      <div style="padding:11px 12px;"></div>
      ${COLS.map(col => `<div style="padding:11px 8px;font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:0.07em;color:${col.color};border-left:1px solid rgba(255,255,255,0.1);text-align:center;">${col.label}</div>`).join('')}
    </div>`;
    const rows = (c.rows || []).map((r, i) => {
      if (r.reveal) {
        return `<div style="display:grid;grid-template-columns:150px repeat(4,1fr);background:#FEFCE8;border-top:1px solid #E7E7EA;">
          <div style="padding:12px 12px;font-weight:800;font-size:13px;color:#92400E;border-right:1px solid #E7E7EA;">⭐ ${r.label}</div>
          ${COLS.map(col => `<div class="reveal-cell" style="padding:12px 8px;font-size:13px;line-height:1.55;border-left:1px solid #E7E7EA;text-align:center;">
            <button data-action="reveal-cell" style="background:#fff;border:1.5px dashed #D97706;color:#92400E;font-size:12px;font-weight:700;padding:5px 9px;border-radius:6px;cursor:pointer;">Reveal ↓</button>
            <div class="reveal-cell__body is-hidden" style="color:#0B1426;">${r[col.key] || '–'}</div>
          </div>`).join('')}
        </div>`;
      }
      return `<div style="display:grid;grid-template-columns:150px repeat(4,1fr);background:${i % 2 === 0 ? '#F8FAFC' : '#fff'};border-top:1px solid #E7E7EA;">
        <div style="padding:12px 12px;font-weight:700;font-size:13px;color:#0B1426;border-right:1px solid #E7E7EA;">${r.label}</div>
        ${COLS.map(col => `<div style="padding:12px 8px;font-size:13px;color:#0B1426;line-height:1.55;border-left:1px solid #E7E7EA;text-align:center;">${r[col.key] || '–'}</div>`).join('')}
      </div>`;
    }).join('');
    return `
      <div class="card__step-label">${c.stepLabel || ''}</div>
      <h1 class="card__title">${c.title || ''}</h1>
      ${c.lede ? `<p class="card__lede">${c.lede}</p>` : ''}
      <div style="overflow-x:auto;border-radius:12px;border:1px solid #E7E7EA;margin-bottom:20px;">${header}${rows}</div>
      ${c.footer ? `<p style="font-size:13px;color:#0B1426;font-style:italic;margin-bottom:18px;padding:0 2px;">${c.footer}</p>` : ''}
      ${renderExamEdge(c.examEdge)}
    `;
  }

  /* -------------------------------------------------------------------------
     Essay Scaffold — paragraph-by-paragraph exam essay builder with reveals.
     ------------------------------------------------------------------------- */
  function renderCardEssayScaffold(c) {
    const TYPE_STYLE = {
      intro:      { color: '#0EA5E9', bg: '#F0F9FF', label: 'Introduction' },
      analysis:   { color: '#1E3A5F', bg: '#EFF6FF', label: 'Analysis' },
      counter:    { color: '#D97706', bg: '#FFFBEB', label: 'Counter-argument' },
      evaluation: { color: '#7C3AED', bg: '#F5F3FF', label: 'Evaluation' },
      conclusion: { color: '#059669', bg: '#F0FDF4', label: 'Conclusion' }
    };
    const paras = (c.paragraphs || []).map(p => {
      const s = TYPE_STYLE[p.type] || TYPE_STYLE.analysis;
      return `
        <div style="border-radius:10px;border:1.5px solid ${s.color}40;background:${s.bg};margin-bottom:14px;overflow:hidden;">
          <div style="background:${s.color};padding:10px 16px;display:flex;align-items:center;gap:10px;">
            <span style="font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:0.08em;color:#fff;">${s.label}</span>
            ${p.label ? `<span style="font-size:12px;color:rgba(255,255,255,0.75);">— ${p.label}</span>` : ''}
          </div>
          <div style="padding:14px 16px;">
            <div style="font-size:13px;color:#334155;line-height:1.65;margin-bottom:12px;">${p.prompt}</div>
            ${p.hint ? `<div style="font-size:12px;color:#64748B;font-style:italic;margin-bottom:12px;">💡 ${p.hint}</div>` : ''}
            <button class="we-step__btn" data-action="we-reveal" style="margin:0;" type="button">Show model paragraph →</button>
            <div class="we-step__answer is-hidden" style="margin-top:10px;">
              <div style="background:#fff;border-left:4px solid ${s.color};border-radius:0 8px 8px 0;padding:12px 14px;font-size:13px;line-height:1.7;color:#0B1426;">${p.model}</div>
            </div>
          </div>
        </div>`;
    }).join('');
    return `
      <div class="card__step-label">${c.stepLabel || ''}</div>
      <h1 class="card__title">${c.title || ''}</h1>
      ${c.lede ? `<p class="card__lede">${c.lede}</p>` : ''}
      <div style="background:#0B1426;border-radius:12px;padding:16px 20px;margin-bottom:20px;">
        <div style="font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:0.1em;color:#94A3B8;margin-bottom:8px;">Exam question · ${c.marks || 25} marks${c.timeGuide ? ' · ' + c.timeGuide : ''}</div>
        <div style="font-size:15px;font-weight:600;color:#F1F5F9;line-height:1.5;">${c.question || ''}</div>
      </div>
      ${paras}
      ${renderExamEdge(c.examEdge)}
    `;
  }

  /* -------------------------------------------------------------------------
     YED Explorer & XED Explorer — Engel-curve and cross-price widgets.
     Both registered as globals by js/yed-xed-explorer.js.
     ------------------------------------------------------------------------- */
  function renderCardYedExplorer(c) {
    return `
      <div class="card__step-label">${c.stepLabel || ''}</div>
      <h1 class="card__title">${c.title || ''}</h1>
      ${c.lede ? `<p class="card__lede">${c.lede}</p>` : ''}
      <div class="yed-root" data-yed-mount></div>
      ${c.howItWorks ? `
        <div style="background:#F5F3FF;border-left:4px solid #7C3AED;border-radius:10px;padding:14px 18px;margin:18px 0;">
          <div style="font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:0.09em;color:#7C3AED;margin-bottom:8px;">How to read it</div>
          <div style="font-size:15px;line-height:1.7;color:#0B1426;">${c.howItWorks}</div>
        </div>
      ` : ''}
      ${renderExamEdge(c.examEdge)}
    `;
  }

  function renderCardXedExplorer(c) {
    return `
      <div class="card__step-label">${c.stepLabel || ''}</div>
      <h1 class="card__title">${c.title || ''}</h1>
      ${c.lede ? `<p class="card__lede">${c.lede}</p>` : ''}
      <div class="xed-root" data-xed-mount></div>
      ${c.howItWorks ? `
        <div style="background:#EFF6FF;border-left:4px solid #2563EB;border-radius:10px;padding:14px 18px;margin:18px 0;">
          <div style="font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:0.09em;color:#2563EB;margin-bottom:8px;">How to read it</div>
          <div style="font-size:15px;line-height:1.7;color:#0B1426;">${c.howItWorks}</div>
        </div>
      ` : ''}
      ${renderExamEdge(c.examEdge)}
    `;
  }

  /* -------------------------------------------------------------------------
     PES Explorer: interactive supply-curve widget (mirror of elasticity-explorer
     but for upward-sloping supply; registered as window.EconosPes).
     ------------------------------------------------------------------------- */
  function renderCardPesExplorer(c) {
    return `
      <div class="card__step-label">${c.stepLabel || ''}</div>
      <h1 class="card__title">${c.title || ''}</h1>
      ${c.lede ? `<p class="card__lede">${c.lede}</p>` : ''}

      <div class="pes-root" data-pes-mount></div>

      ${c.howItWorks ? `
        <div style="background:#F0FDF4;border-left:4px solid var(--econ-green);border-radius:10px;padding:14px 18px;margin:18px 0;">
          <div style="font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:0.09em;color:var(--econ-green);margin-bottom:8px;">How to read it</div>
          <div style="font-size:15px;line-height:1.7;color:#0B1426;">${c.howItWorks}</div>
        </div>
      ` : ''}

      ${renderExamEdge(c.examEdge)}
    `;
  }

  /* -------------------------------------------------------------------------
     PED Five-Frames: static visual card showing the 5 elasticity regimes.
     Each frame has a mini SVG chart, name, PED badge, example, and TR rule.
     ------------------------------------------------------------------------- */
  function pedMiniSvg(type, color) {
    const axes = `
      <line x1="14" y1="8" x2="14" y2="78" stroke="#CBD5E1" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="14" y1="78" x2="96" y2="78" stroke="#CBD5E1" stroke-width="1.5" stroke-linecap="round"/>
      <text x="6" y="12" font-size="9" fill="#94A3B8" font-family="Inter,sans-serif">P</text>
      <text x="91" y="88" font-size="9" fill="#94A3B8" font-family="Inter,sans-serif">Q</text>
    `;
    const D = {
      vertical: `
        <line x1="52" y1="10" x2="52" y2="76" stroke="${color}" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="14" y1="28" x2="52" y2="28" stroke="${color}" stroke-width="1" stroke-dasharray="4,3" opacity="0.65"/>
        <line x1="14" y1="54" x2="52" y2="54" stroke="${color}" stroke-width="1" stroke-dasharray="4,3" opacity="0.4"/>
        <circle cx="52" cy="28" r="3.5" fill="${color}" opacity="0.9"/>
        <circle cx="52" cy="54" r="3.5" fill="${color}" opacity="0.5"/>
      `,
      steep: `
        <line x1="35" y1="10" x2="63" y2="76" stroke="${color}" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="14" y1="28" x2="43" y2="28" stroke="${color}" stroke-width="1" stroke-dasharray="4,3" opacity="0.65"/>
        <line x1="14" y1="54" x2="55" y2="54" stroke="${color}" stroke-width="1" stroke-dasharray="4,3" opacity="0.4"/>
        <line x1="43" y1="28" x2="43" y2="78" stroke="${color}" stroke-width="1" stroke-dasharray="4,3" opacity="0.4"/>
        <line x1="55" y1="54" x2="55" y2="78" stroke="${color}" stroke-width="1" stroke-dasharray="4,3" opacity="0.3"/>
        <circle cx="43" cy="28" r="3.5" fill="${color}" opacity="0.9"/>
        <circle cx="55" cy="54" r="3.5" fill="${color}" opacity="0.5"/>
      `,
      hyperbola: `
        <line x1="20" y1="14" x2="88" y2="76" stroke="${color}" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="14" y1="32" x2="40" y2="32" stroke="${color}" stroke-width="1" stroke-dasharray="4,3" opacity="0.65"/>
        <line x1="14" y1="53" x2="63" y2="53" stroke="${color}" stroke-width="1" stroke-dasharray="4,3" opacity="0.4"/>
        <line x1="40" y1="32" x2="40" y2="78" stroke="${color}" stroke-width="1" stroke-dasharray="4,3" opacity="0.4"/>
        <line x1="63" y1="53" x2="63" y2="78" stroke="${color}" stroke-width="1" stroke-dasharray="4,3" opacity="0.3"/>
        <circle cx="40" cy="32" r="3.5" fill="${color}" opacity="0.9"/>
        <circle cx="63" cy="53" r="3.5" fill="${color}" opacity="0.5"/>
      `,
      shallow: `
        <line x1="14" y1="28" x2="95" y2="70" stroke="${color}" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="14" y1="31" x2="20" y2="31" stroke="${color}" stroke-width="1" stroke-dasharray="4,3" opacity="0.65"/>
        <line x1="14" y1="60" x2="75" y2="60" stroke="${color}" stroke-width="1" stroke-dasharray="4,3" opacity="0.4"/>
        <line x1="20" y1="31" x2="20" y2="78" stroke="${color}" stroke-width="1" stroke-dasharray="4,3" opacity="0.4"/>
        <line x1="75" y1="60" x2="75" y2="78" stroke="${color}" stroke-width="1" stroke-dasharray="4,3" opacity="0.3"/>
        <circle cx="20" cy="31" r="3.5" fill="${color}" opacity="0.9"/>
        <circle cx="75" cy="60" r="3.5" fill="${color}" opacity="0.5"/>
      `,
      horizontal: `
        <line x1="14" y1="44" x2="86" y2="44" stroke="${color}" stroke-width="2.5" stroke-linecap="round"/>
        <circle cx="14" cy="44" r="3.5" fill="${color}" opacity="0.7"/>
      `
    };
    return `<svg viewBox="0 0 108 92" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;">${axes}${D[type] || ''}</svg>`;
  }

  function renderCardPedFiveFrames(c) {
    const COLORS = { rose:'#DC2626', amber:'#D97706', blue:'#2563EB', green:'#059669', purple:'#7C3AED' };
    const frames = (c.frames || []).map(f => {
      const col = COLORS[f.tone] || '#64748B';
      return `
        <div class="pff-frame" style="border-color:${col}20;background:${col}06;">
          <div class="pff-chart">${pedMiniSvg(f.curveType, col)}</div>
          <div class="pff-name" style="color:${col};">${f.name}</div>
          <div class="pff-ped" style="background:${col}18;color:${col};">${f.ped}</div>
          <p class="pff-example">${f.example}</p>
          <div class="pff-tr" style="border-left-color:${col};">${f.trRule}</div>
        </div>
      `;
    }).join('');
    return `
      <div class="card__step-label">${c.stepLabel || ''}</div>
      <h1 class="card__title">${c.title || ''}</h1>
      ${c.lede ? `<p class="card__lede">${c.lede}</p>` : ''}
      <div class="pff-grid">${frames}</div>
      ${renderExamEdge(c.examEdge)}
    `;
  }

  function pesMiniSvg(type, color) {
    const axes = `
      <line x1="14" y1="8" x2="14" y2="78" stroke="#CBD5E1" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="14" y1="78" x2="96" y2="78" stroke="#CBD5E1" stroke-width="1.5" stroke-linecap="round"/>
      <text x="6" y="12" font-size="9" fill="#94A3B8" font-family="Inter,sans-serif">P</text>
      <text x="91" y="88" font-size="9" fill="#94A3B8" font-family="Inter,sans-serif">Q</text>
    `;
    // Supply curves slope upward in economics = SVG line from (low-x,high-y) to (high-x,low-y).
    // Geometric PES rule: P-axis intercept → PES < 1; through origin → PES = 1; Q-axis intercept → PES > 1.
    const S = {
      vertical: `
        <line x1="52" y1="10" x2="52" y2="76" stroke="${color}" stroke-width="2.5" stroke-linecap="round"/>
        <text x="55" y="12" font-size="9" font-weight="700" fill="${color}" font-family="Inter,sans-serif">S</text>
        <line x1="14" y1="28" x2="52" y2="28" stroke="${color}" stroke-width="1" stroke-dasharray="4,3" opacity="0.65"/>
        <line x1="14" y1="54" x2="52" y2="54" stroke="${color}" stroke-width="1" stroke-dasharray="4,3" opacity="0.4"/>
        <circle cx="52" cy="28" r="3.5" fill="${color}" opacity="0.9"/>
        <circle cx="52" cy="54" r="3.5" fill="${color}" opacity="0.5"/>
      `,
      steep: `
        <line x1="40" y1="72" x2="56" y2="14" stroke="${color}" stroke-width="2.5" stroke-linecap="round"/>
        <text x="57" y="12" font-size="9" font-weight="700" fill="${color}" font-family="Inter,sans-serif">S</text>
        <line x1="14" y1="55" x2="45" y2="55" stroke="${color}" stroke-width="1" stroke-dasharray="4,3" opacity="0.65"/>
        <line x1="45" y1="55" x2="45" y2="78" stroke="${color}" stroke-width="1" stroke-dasharray="4,3" opacity="0.65"/>
        <line x1="14" y1="35" x2="50" y2="35" stroke="${color}" stroke-width="1" stroke-dasharray="4,3" opacity="0.4"/>
        <line x1="50" y1="35" x2="50" y2="78" stroke="${color}" stroke-width="1" stroke-dasharray="4,3" opacity="0.4"/>
        <circle cx="45" cy="55" r="3.5" fill="${color}" opacity="0.6"/>
        <circle cx="50" cy="35" r="3.5" fill="${color}" opacity="0.9"/>
      `,
      origin: `
        <line x1="14" y1="78" x2="82" y2="14" stroke="${color}" stroke-width="2.5" stroke-linecap="round"/>
        <text x="83" y="12" font-size="9" font-weight="700" fill="${color}" font-family="Inter,sans-serif">S</text>
        <line x1="14" y1="58" x2="35" y2="58" stroke="${color}" stroke-width="1" stroke-dasharray="4,3" opacity="0.65"/>
        <line x1="35" y1="58" x2="35" y2="78" stroke="${color}" stroke-width="1" stroke-dasharray="4,3" opacity="0.65"/>
        <line x1="14" y1="38" x2="57" y2="38" stroke="${color}" stroke-width="1" stroke-dasharray="4,3" opacity="0.4"/>
        <line x1="57" y1="38" x2="57" y2="78" stroke="${color}" stroke-width="1" stroke-dasharray="4,3" opacity="0.4"/>
        <circle cx="35" cy="58" r="3.5" fill="${color}" opacity="0.6"/>
        <circle cx="57" cy="38" r="3.5" fill="${color}" opacity="0.9"/>
      `,
      shallow: `
        <line x1="20" y1="78" x2="90" y2="22" stroke="${color}" stroke-width="2.5" stroke-linecap="round"/>
        <text x="91" y="20" font-size="9" font-weight="700" fill="${color}" font-family="Inter,sans-serif">S</text>
        <line x1="14" y1="58" x2="45" y2="58" stroke="${color}" stroke-width="1" stroke-dasharray="4,3" opacity="0.65"/>
        <line x1="45" y1="58" x2="45" y2="78" stroke="${color}" stroke-width="1" stroke-dasharray="4,3" opacity="0.65"/>
        <line x1="14" y1="38" x2="70" y2="38" stroke="${color}" stroke-width="1" stroke-dasharray="4,3" opacity="0.4"/>
        <line x1="70" y1="38" x2="70" y2="78" stroke="${color}" stroke-width="1" stroke-dasharray="4,3" opacity="0.4"/>
        <circle cx="45" cy="58" r="3.5" fill="${color}" opacity="0.6"/>
        <circle cx="70" cy="38" r="3.5" fill="${color}" opacity="0.9"/>
      `,
      horizontal: `
        <line x1="14" y1="44" x2="86" y2="44" stroke="${color}" stroke-width="2.5" stroke-linecap="round"/>
        <text x="87" y="46" font-size="9" font-weight="700" fill="${color}" font-family="Inter,sans-serif">S</text>
        <circle cx="14" cy="44" r="3.5" fill="${color}" opacity="0.7"/>
      `
    };
    return `<svg viewBox="0 0 108 92" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;">${axes}${S[type] || ''}</svg>`;
  }

  function renderCardPesFiveFrames(c) {
    const COLORS = { rose:'#DC2626', amber:'#D97706', blue:'#2563EB', green:'#059669', purple:'#7C3AED' };
    const frames = (c.frames || []).map(f => {
      const col = COLORS[f.tone] || '#64748B';
      return `
        <div class="pff-frame" style="border-color:${col}20;background:${col}06;">
          <div class="pff-chart">${pesMiniSvg(f.curveType, col)}</div>
          <div class="pff-name" style="color:${col};">${f.name}</div>
          <div class="pff-ped" style="background:${col}18;color:${col};">${f.pesCoeff}</div>
          <p class="pff-example">${f.example}</p>
          <div class="pff-tr" style="border-left-color:${col};">${f.marketRule}</div>
        </div>
      `;
    }).join('');
    return `
      <div class="card__step-label">${c.stepLabel || ''}</div>
      <h1 class="card__title">${c.title || ''}</h1>
      ${c.lede ? `<p class="card__lede">${c.lede}</p>` : ''}
      <div class="pff-grid">${frames}</div>
      ${renderExamEdge(c.examEdge)}
    `;
  }

  function renderCardAdInteractive(c) {
    const diagram = c.diagramKey && I[c.diagramKey] ? I[c.diagramKey] : I.adInteractive;
    const tabs = c.steps.map((s, i) => `
      <button class="ad-tab ${i === 0 ? 'is-active' : ''}" type="button"
              data-action="ad-step" data-ad-state="${s.key}">
        <span class="ad-tab__num">${i + 1}</span>
        <span class="ad-tab__label">${s.label}</span>
      </button>
    `).join('');

    const panels = c.steps.map((s, i) => `
      <div class="ad-panel ${i === 0 ? 'is-active' : ''}" data-panel-key="${s.key}">
        <div class="ad-panel__title">${s.label}</div>
        <div class="ad-panel__body">${s.text}</div>
      </div>
    `).join('');

    return `
      <div class="card__step-label">${c.stepLabel}</div>
      <h1 class="card__title">${c.title}</h1>
      ${c.lede ? `<p class="card__lede">${c.lede}</p>` : ''}

      ${c.tip ? (() => {
        const tipText = typeof c.tip === 'object' && !Array.isArray(c.tip) ? c.tip.text : (typeof c.tip === 'string' ? c.tip : '');
        const tipIcon = (typeof c.tip === 'object' && !Array.isArray(c.tip) && c.tip.icon) || '💡';
        const tipTone = (typeof c.tip === 'object' && !Array.isArray(c.tip) && c.tip.tone) || 'blue';
        const t = PATTERN_TONES[tipTone] || PATTERN_TONES.blue;
        return tipText ? `<div style="display:flex;align-items:center;gap:14px;background:${t.bg};border:1px solid ${t.border};border-radius:12px;padding:14px 18px;margin-bottom:18px;"><div style="width:38px;height:38px;border-radius:50%;background:${t.accent};color:#fff;display:inline-flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;">${tipIcon}</div><div style="font-size:14px;color:#0B1426;line-height:1.6;">${tipText}</div></div>` : '';
      })() : ''}

      <div class="ad-interactive">
        <div class="ad-interactive__diagram show-${c.steps[0].key}" data-ad-state="${c.steps[0].key}">
          ${diagram}
        </div>
        <div class="ad-interactive__tabs" style="grid-template-columns: repeat(${c.steps.length}, 1fr);">
          ${tabs}
        </div>
        <div class="ad-interactive__panels">
          ${panels}
        </div>
      </div>

      ${c.diagramCallouts && c.diagramCallouts.length ? (() => {
        const tiles = c.diagramCallouts.map(item => {
          const t = PATTERN_TONES[item.tone] || PATTERN_TONES.blue;
          return `
            <div style="display:flex;align-items:flex-start;gap:14px;background:${t.bg};border:1px solid ${t.border};border-radius:14px;padding:14px 16px;">
              <div style="width:40px;height:40px;border-radius:50%;background:${t.accent};color:#fff;display:inline-flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;">${item.icon || '•'}</div>
              <div style="flex:1;">
                ${item.head ? `<div style="font-size:14px;font-weight:800;color:${t.label};line-height:1.3;margin-bottom:4px;">${item.head}</div>` : ''}
                <div style="font-size:13.5px;color:#0B1426;line-height:1.55;">${item.body}</div>
              </div>
            </div>`;
        }).join('');
        return `<div style="display:grid;grid-template-columns:repeat(${c.diagramCallouts.length},1fr);gap:12px;margin:18px 0 26px;">${tiles}</div>`;
      })() : ''}

      ${c.flow && c.flow.length ? (() => {
        const flowTones = ['green', 'amber', 'blue', 'purple', 'rose'];
        const n = c.flow.length;
        const title = c.flowTitle ? genSecLabel(c.flowEmoji || '➡️', c.flowTitle) : '';
        const tiles = c.flow.map((step, i) => {
          const t = PATTERN_TONES[step.tone || flowTones[i % flowTones.length]];
          const isLast = i === n - 1;
          return `
            <div style="position:relative;display:flex;flex-direction:column;align-items:center;text-align:center;padding:0 10px;">
              <div style="position:relative;width:46px;height:46px;border-radius:50%;background:#fff;border:2px solid ${t.accent};color:${t.label};display:inline-flex;align-items:center;justify-content:center;font-size:15px;font-weight:900;box-shadow:0 2px 8px ${t.accent}40;margin-bottom:12px;z-index:1;">${i + 1}</div>
              <div style="position:relative;width:54px;height:54px;border-radius:50%;background:${t.bg};border:1px solid ${t.border};display:inline-flex;align-items:center;justify-content:center;font-size:24px;line-height:1;margin-bottom:12px;">${step.icon || ''}</div>
              <div style="font-size:14px;font-weight:800;color:${t.label};line-height:1.3;margin-bottom:6px;">${step.title}</div>
              ${step.sub ? `<div style="font-size:12.5px;color:#475569;line-height:1.5;">${step.sub}</div>` : ''}
              ${!isLast ? `<div style="position:absolute;top:23px;left:calc(50% + 28px);right:calc(-50% + 28px);height:0;border-top:2px dashed #CBD5E1;z-index:0;"></div>` : ''}
            </div>`;
        }).join('');
        return `${title}<div style="display:grid;grid-template-columns:repeat(${n},1fr);gap:0;align-items:start;margin-bottom:26px;padding:18px 6px 6px;">${tiles}</div>`;
      })() : ''}

      ${c.causes && c.causes.length ? (() => {
        const items = c.causes;
        const tiles = items.map((item, i) => {
          const tone = item.tone ? PATTERN_TONES[item.tone] : PATTERN_TONES[['green','blue','purple','amber','rose','slate'][i % 6]];
          return `
          <div style="border-radius:16px;background:${tone.bg};border:1px solid ${tone.border};padding:18px 18px 16px;box-shadow:0 2px 8px rgba(0,0,0,0.05);display:flex;flex-direction:column;">
            <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px;">
              <div style="width:42px;height:42px;border-radius:50%;background:#fff;display:inline-flex;align-items:center;justify-content:center;font-size:22px;line-height:1;box-shadow:0 1px 4px rgba(0,0,0,0.08);flex-shrink:0;">${item.icon}</div>
              <div style="font-weight:800;font-size:15px;color:${tone.label};line-height:1.3;">${item.head}</div>
            </div>
            <div style="font-size:13.5px;color:#0B1426;line-height:1.65;">${item.body}</div>
          </div>`;
        }).join('');
        const label = genSecLabel(c.causesEmoji || '📋', c.causesLabel || 'Movement vs shift at a glance');
        return `${label}<div style="display:grid;grid-template-columns:${gridColumnsFor(items.length, 155)};gap:12px;margin:0 0 28px;">${tiles}</div>`;
      })() : ''}

      ${c.causes2 && c.causes2.length ? (() => {
        const items2 = c.causes2;
        const tiles2 = items2.map((item, i) => {
          const tone = item.tone ? PATTERN_TONES[item.tone] : PATTERN_TONES[['green','blue','purple','amber','rose','slate'][i % 6]];
          return `
          <div style="border-radius:14px;background:#fff;border:1px solid #E7E7EA;padding:20px 20px 18px;display:flex;flex-direction:column;">
            <div style="display:flex;align-items:center;gap:12px;margin-bottom:10px;">
              <div style="width:42px;height:42px;border-radius:50%;background:${tone.bg};display:inline-flex;align-items:center;justify-content:center;font-size:22px;line-height:1;flex-shrink:0;">${item.icon}</div>
              <div style="font-weight:800;font-size:16px;color:${tone.label};line-height:1.3;">${item.head}</div>
            </div>
            <div style="font-size:13.5px;color:#0B1426;line-height:1.65;">${item.body}</div>
          </div>`;
        }).join('');
        const label2 = genSecLabel(c.causes2Emoji || '💡', c.causes2Label || 'Examples');
        return `${label2}<div style="display:grid;grid-template-columns:${gridColumnsFor(items2.length, 155)};gap:12px;margin:0 0 28px;">${tiles2}</div>`;
      })() : ''}

      ${c.left && c.right ? (() => {
        const renderSide = (side, fallbackTone) => {
          const tone = PATTERN_TONES[side.tone] || PATTERN_TONES[fallbackTone];
          const inner = side.text
            ? `<div style="font-size:14px;color:#0B1426;line-height:1.65;">${side.text}</div>`
            : `<ul style="font-size:13px;color:#0B1426;line-height:1.65;padding:0 0 0 1.2em;margin:0;list-style-type:disc;">${(side.points || []).map(p => `<li style="margin-bottom:8px;padding-left:4px;color:${tone.label};"><span style="color:#0B1426;">${p}</span></li>`).join('')}</ul>`;
          const iconHtml = side.icon
            ? (side.iconStyle === 'circle'
                ? `<div style="width:40px;height:40px;border-radius:50%;background:${tone.accent};color:#fff;display:inline-flex;align-items:center;justify-content:center;font-size:19px;line-height:1;flex-shrink:0;">${side.icon}</div>`
                : `<div style="font-size:20px;line-height:1;">${side.icon}</div>`)
            : '';
          return `
            <div style="border-radius:14px;background:${tone.bg};border:1px solid ${tone.border};box-shadow:0 2px 8px rgba(0,0,0,0.05);padding:16px 18px;">
              <div style="display:flex;align-items:center;gap:12px;margin-bottom:10px;">
                ${iconHtml}
                <div style="color:${tone.label};font-weight:800;font-size:15px;letter-spacing:0.02em;">${side.label}</div>
              </div>
              ${inner}
            </div>`;
        };
        const label = c.pairLabel === null ? '' : genSecLabel(c.pairEmoji || '⚖️', c.pairLabel || 'Head to head');
        return `${label}<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:22px;">${renderSide(c.left, 'green')}${renderSide(c.right, 'amber')}</div>`;
      })() : ''}

      ${(c.conclusion && (typeof c.conclusion === 'string' || c.conclusion.text)) ? (() => {
        const conTitle = typeof c.conclusion === 'object' ? (c.conclusion.title || 'Best conclusion') : 'Best conclusion';
        const conText  = typeof c.conclusion === 'object' ? c.conclusion.text : c.conclusion;
        return `
          <div style="display:flex;gap:14px;align-items:flex-start;background:#ECFDF5;border:1px solid #A7F3D0;border-left:4px solid #059669;border-radius:12px;padding:14px 18px;margin-bottom:22px;">
            <div style="width:30px;height:30px;border-radius:50%;background:#059669;color:#fff;display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0;">★</div>
            <div style="flex:1;">
              <div style="font-size:12px;font-weight:800;color:#065F46;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:4px;">${conTitle}</div>
              <div style="font-size:14px;color:#0B1426;line-height:1.6;">${conText}</div>
            </div>
          </div>`;
      })() : ''}

      ${renderExamEdge(c.examEdge)}
    `;
  }

  /* === TRANSMISSION-CHAIN template: 5 channels, tap to expand chain ===
       Action on left, channel pills in middle, outcome on right. Tapping
       a channel reveals its causal chain below + highlights the path. */
  function renderCardTransmissionChain(c) {
    const channels = c.channels.map((ch, i) => `
      <button class="tc-channel tc-channel--${ch.tone} ${i === 0 ? 'is-active' : ''}"
              type="button" data-action="tc-channel" data-channel-key="${ch.key}">
        <span class="tc-channel__dot"></span>
        <span class="tc-channel__label">${ch.label}</span>
        <span class="tc-channel__chev">▸</span>
      </button>
    `).join('');

    const panels = c.channels.map((ch, i) => `
      <div class="tc-panel tc-panel--${ch.tone} ${i === 0 ? 'is-active' : ''}" data-panel-key="${ch.key}">
        <div class="tc-panel__header">
          <div class="tc-panel__title">${ch.label} channel</div>
        </div>
        <ol class="tc-chain">
          ${ch.chain.map(step => `<li class="tc-chain__step">${step}</li>`).join('')}
        </ol>
        ${ch.micro ? `<div class="tc-panel__micro"><strong>When it's strong:</strong> ${ch.micro}</div>` : ''}
      </div>
    `).join('');

    return `
      <div class="card__step-label">${c.stepLabel}</div>
      <h1 class="card__title">${c.title}</h1>
      <p class="card__lede">${c.lede}</p>

      <div class="tc-flow">
        <div class="tc-action">
          <div class="tc-action__eyebrow">ACTION</div>
          <div class="tc-action__text">${c.action}</div>
        </div>
        <div class="tc-channels">
          ${channels}
        </div>
        <div class="tc-outcome">
          <div class="tc-outcome__eyebrow">OUTCOME</div>
          <div class="tc-outcome__text">${c.outcome}</div>
        </div>
      </div>

      <div class="tc-panels">
        ${panels}
      </div>

      ${renderExamEdge(c.examEdge)}
    `;
  }

  /* === Paired template: two components side-by-side (e.g. Gov + Net Trade) === */
  function renderCardPaired(c) {
    const banner = c.bannerLabel
      ? renderCauseBanner(c.bannerTone || 'blue', c.bannerLabel)
      : '';

    const pairs = c.pairs.map(p => `
      <div class="paired-half paired-half--${p.tone}">
        <div class="paired-half__label">${p.label}</div>
        <div class="paired-half__drivers">
          <ul>${p.drivers.map(d => `<li>${d}</li>`).join('')}</ul>
        </div>
        <div class="paired-half__example">
          <span class="paired-half__example-flag">GB</span>
          <div>${p.example}</div>
        </div>
      </div>
    `).join('');

    let bottomBox = '';
    if (c.policy) {
      bottomBox = `
        <div class="policy-box">
          <div class="policy-box__icon">🎯</div>
          <div>
            <div class="policy-box__title">${c.policy.title}</div>
            <div class="policy-box__text">${c.policy.text}</div>
          </div>
        </div>
      `;
    }

    return `
      ${banner}
      ${c.stepLabel ? `<div class="card__step-label">${c.stepLabel}</div>` : ''}
      <h1 class="card__title">${c.title}</h1>
      ${c.lede ? `<p class="card__lede">${c.lede}</p>` : ''}
      ${c.intro ? `<p style="font-size:15px;color:#0B1426;margin-bottom:16px;line-height:1.65;">${c.intro}</p>` : ''}

      <div class="paired-grid">${pairs}</div>

      ${renderExamEdge(c.examEdge)}
      ${bottomBox}
    `;
  }

  /* === full card view === */
  function isGenericCard(c) {
    // These two templates always need their own dedicated renderer regardless of fields present
    if (c.template === 'ad-interactive' || c.template === 'transmission-chain' || c.template === 'elasticity-explorer' || c.template === 'ped-five-frames' || c.template === 'pes-five-frames' || c.template === 'worked-example' || c.template === 'ped-calculation' || c.template === 'pes-calculation' || c.template === 'yed-calculation' || c.template === 'xed-calculation' || c.template === 'pes-explorer' || c.template === 'yed-explorer' || c.template === 'xed-explorer' || c.template === 'market-structures-comparison' || c.template === 'essay-scaffold') return false;
    // All other cards: route by field presence. Inflation-style cards have branches/title/etc
    // but no body/steps/rows — they fall through to the switch and get dedicated renderers.
    return !!(
      c.body !== undefined ||
      c.steps !== undefined ||
      c.rows  !== undefined ||
      c.flow !== undefined ||
      c.flowBottom !== undefined ||
      c.keyPoints !== undefined ||
      c.verdict !== undefined ||
      c.comparison !== undefined ||
      /* Tables with object-row shape ({label, value, icon?}) belong to
         the generic 2-column renderer. Tables with array-of-arrays
         rows (N columns + headers, used by diagnose cards in
         inflation, sol_wellbeing, macro_conflicts, etc.) stay on the
         dedicated renderCardDiagnose — generic would render every
         cell as "undefined" because it reads r.label / r.value. */
      (c.table !== undefined && c.table.rows && c.table.rows.length > 0 &&
       !Array.isArray(c.table.rows[0])) ||
      c.conceptBoxes !== undefined ||
      c.diagramPanel !== undefined ||
      c.diagramGrid !== undefined ||
      c.interactiveDiagram !== undefined ||
      c.diagramKey !== undefined ||
      c.examples !== undefined ||
      c.marketGrid !== undefined ||
      c.framework !== undefined ||
      c.economistQuote !== undefined ||
      c.continuum !== undefined ||
      c.note !== undefined ||
      (c.causes2 && Array.isArray(c.causes2) && c.causes2.length > 0 &&
       typeof c.causes2[0] === 'object' && 'head' in c.causes2[0]) ||
      (c.left !== undefined && c.right !== undefined) ||
      (c.causes && Array.isArray(c.causes) && c.causes.length > 0 &&
       typeof c.causes[0] === 'object' && 'head' in c.causes[0])
    );
  }

  function renderCard(idx) {
    const c = T.cards[idx];
    const pct = Math.round(((idx + 1) / T.cards.length) * 100);

    let body = '';
    if (isGenericCard(c)) {
      body = renderCardGeneric(c);
    } else {
      switch (c.template) {
        case 'framing':            body = renderCardFraming(c);          break;
        case 'cause':              body = renderCardCause(c);            break;
        case 'diagnose':           body = renderCardDiagnose(c);         break;
        case 'puzzle':             body = renderCardPuzzle(c);           break;
        case 'mechanisms':         body = renderCardMechanisms(c);       break;
        case 'monetary':           body = renderCardMonetary(c);         break;
        case 'impacts':            body = renderCardImpacts(c);          break;
        case 'deflation':          body = renderCardDeflation(c);        break;
        case 'paired':             body = renderCardPaired(c);           break;
        case 'ad-interactive':     body = renderCardAdInteractive(c);    break;
        case 'transmission-chain': body = renderCardTransmissionChain(c); break;
        case 'elasticity-explorer':body = renderCardElasticityExplorer(c); break;
        case 'ped-five-frames':    body = renderCardPedFiveFrames(c);      break;
        case 'pes-five-frames':    body = renderCardPesFiveFrames(c);      break;
        case 'worked-example':     body = renderCardWorkedExample(c);      break;
        case 'ped-calculation':    body = renderCardPedCalculation(c);     break;
        case 'pes-calculation':    body = renderCardPesCalculation(c);     break;
        case 'yed-calculation':    body = renderCardYedCalculation(c);     break;
        case 'xed-calculation':    body = renderCardXedCalculation(c);     break;
        case 'pes-explorer':       body = renderCardPesExplorer(c);        break;
        case 'yed-explorer':       body = renderCardYedExplorer(c);        break;
        case 'xed-explorer':       body = renderCardXedExplorer(c);        break;
        case 'market-structures-comparison': body = renderCardMarketStructuresComparison(c);  break;
        case 'essay-scaffold':               body = renderCardEssayScaffold(c);               break;
      }
    }

    const isLast = idx === T.cards.length - 1;
    const isFirst = idx === 0;

    return `
      <div class="page">
        <div>
          <div class="progress">
            <span class="progress__label">Progress</span>
            <div class="progress__bar"><div class="progress__fill" style="width: ${pct}%;"></div></div>
            <span class="progress__pct">${pct}%</span>
            <button class="progress__exit" data-action="back-to-intro">${I.exit} Exit session</button>
          </div>

          <div class="card">
            ${body}
            ${renderKeyTakeaway(c.keyTakeaway)}

            <div class="card-foot">
              <button class="btn btn--ghost" data-action="prev" ${isFirst ? 'disabled style="opacity:0.4; cursor:not-allowed;"' : ''}>
                ${I.arrowLeft} Previous
              </button>
              <span class="card-foot__counter">Card ${idx + 1} of ${T.cards.length}</span>
              <button class="btn btn--primary" data-action="next" data-next-button>
                ${isLast ? 'Next: Quick check' : 'Next card'} ${I.arrowRight}
              </button>
            </div>
          </div>
        </div>

        <div class="right-rail">
          ${Shell.renderStages()}
          ${renderCardsRail(idx)}
        </div>
      </div>
    `;
  }

  /* ============================================================
     RIGHT RAIL — session progress, cards list, download deck
     ============================================================ */

  function renderCardsRail(currentIdx) {
    const cardsList = T.cards.map((c, i) => {
      const status = i < currentIdx ? 'done' : (i === currentIdx ? 'current' : '');
      return `
        <div class="cards-list__item is-${status}" data-card-idx="${i}">
          <div class="cards-list__num">${i < currentIdx ? I.check : (i + 1)}</div>
          <div class="cards-list__body">
            <div class="cards-list__name">${cardShortName(c.id)}</div>
            ${i === currentIdx ? '<span class="cards-list__chip">Current</span>' : ''}
          </div>
        </div>
      `;
    }).join('');

    const lastCard = T.cards[T.cards.length - 1];
    const quizHref = lastCard && lastCard.quizCta ? lastCard.quizCta.href : null;
    const quizEntry = quizHref ? `
      <a href="${quizHref}" class="cards-list__item cards-list__item--quiz">
        <div class="cards-list__num">★</div>
        <div class="cards-list__body">
          <div class="cards-list__name">Quiz</div>
        </div>
      </a>` : '';

    return `
      <div class="rail-card">
        <div class="rail-card__title">Topic progress</div>
        <div class="rail-card__sub">Step 1 of 3: Learn</div>
        ${renderSessionDots(currentIdx)}
      </div>

      <div class="rail-card">
        <div class="rail-card__title" style="margin-bottom: var(--sp-3);">Cards</div>
        <div class="cards-list">${cardsList}${quizEntry}</div>
      </div>

      <div class="deck-download">
        <div class="deck-download__head">
          <div class="deck-download__icon">📄</div>
          <div>
            <div class="deck-download__title">Want more depth?</div>
            <div class="deck-download__sub">Download the full topic deck</div>
          </div>
        </div>
        <button class="deck-download__btn" data-action="download-deck">
          📥 Download PDF
        </button>
      </div>
    `;
  }

  function renderSessionDots(_currentIdx) {
    return `
      <div class="session-dots">
        <div class="session-dot is-current">1</div>
        <div class="session-line"></div>
        <div class="session-dot">2</div>
        <div class="session-line"></div>
        <div class="session-dot">3</div>
      </div>
    `;
  }

  function cardShortName(id) {
    const inflationNames = {
      'framing':     'Inflation has many causes',
      'demand-pull': 'Demand-pull',
      'cost-push':   'Cost-push',
      'diagnose':    'Spotting the difference',
      'monetary':    'Money supply & QE',
      'impacts':     'Impacts of inflation',
      'deflation':   'Deflation'
    };
    if (inflationNames[id]) return inflationNames[id];
    const card = T.cards.find(c => c.id === id);
    return card ? card.title : id;
  }

  /* ============================================================
     RENDER & EVENTS
     ============================================================ */

  function render() {
    const inner = currentView === 'intro' ? renderIntro() : renderCard(currentView);
    root.innerHTML = renderShell(inner);
    bindEvents();
    /* Yield to the browser so paint happens before we initialise the
       interactive widgets (each explorer can scan tens of DOM nodes
       and bind handlers — postponing avoids jank on the first frame). */
    const initWidgets = () => {
      if (window.EconosElasticity) {
        root.querySelectorAll('.ee-root[data-ee-mount]').forEach(el => window.EconosElasticity.init(el));
      }
      if (window.EconosPes) {
        root.querySelectorAll('.pes-root[data-pes-mount]').forEach(el => window.EconosPes.init(el));
      }
      if (window.EconosYed) {
        root.querySelectorAll('.yed-root[data-yed-mount]').forEach(el => window.EconosYed.init(el));
      }
      if (window.EconosXed) {
        root.querySelectorAll('.xed-root[data-xed-mount]').forEach(el => window.EconosXed.init(el));
      }
    };
    if (typeof requestAnimationFrame === 'function') {
      requestAnimationFrame(initWidgets);
    } else {
      initWidgets();
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  function bindEvents() {
    root.addEventListener('click', handleClick);
  }

  function handleClick(e) {
    // Branch-cal flap toggle (card 1) — match anywhere inside the branch
    const branchEl = e.target.closest('.branch-cal[data-flap-id]');
    if (branchEl) {
      e.preventDefault();
      const sub  = branchEl.querySelector('.branch-cal__sub');
      const hint = branchEl.querySelector('.branch-cal__hint');
      if (sub.classList.contains('is-hidden')) {
        sub.classList.remove('is-hidden');
        branchEl.classList.add('is-open');
        if (hint) hint.style.display = 'none';
      } else {
        sub.classList.add('is-hidden');
        branchEl.classList.remove('is-open');
        if (hint) hint.style.display = '';
      }
      return;
    }

    const target = e.target.closest('[data-action], [data-card-idx]');
    if (!target) return;
    e.preventDefault();

    const action  = target.dataset.action;
    const cardIdx = target.dataset.cardIdx;

    if (action === 'start-session') {
      currentView = 0;
      render();
    } else if (action === 'back-to-intro') {
      currentView = 'intro';
      render();
    } else if (action === 'next') {
      if (currentView === T.cards.length - 1) {
        const last = T.cards[currentView];
        if (last.quizCta && last.quizCta.href) {
          window.location.href = last.quizCta.href;
        } else {
          alert('Quick Check coming next session 🎯');
        }
      } else {
        currentView = currentView + 1;
        render();
      }
    } else if (action === 'prev') {
      if (currentView > 0) {
        currentView = currentView - 1;
        render();
      }
    } else if (action === 'download-deck') {
      if (window.EconosPdf && window.ECONOS_TOPIC) {
        EconosPdf.generate(window.ECONOS_TOPIC);
      } else {
        alert('PDF generator not available.');
      }
    } else if (action === 'reveal-def') {
      // Generic renderer: toggle a key-term definition
      const tile = target.closest('.key-tile');
      if (!tile) return;
      const def = tile.querySelector('.key-tile__def');
      if (def) def.classList.toggle('is-hidden');
      target.textContent = def && def.classList.contains('is-hidden') ? 'Reveal definition ↓' : 'Hide definition ↑';
    } else if (action === 'reveal-edge') {
      // Generic renderer: predict-then-reveal exam edge
      const edge = target.closest('.exam-edge');
      if (!edge) return;
      const txt = edge.querySelector('.exam-edge__text');
      if (txt) txt.classList.remove('is-hidden');
      target.style.display = 'none';
    } else if (action === 'reveal-cell') {
      // Generic renderer: reveal an answer cell in a comparison table
      const cell = target.closest('.reveal-cell');
      if (!cell) return;
      const body = cell.querySelector('.reveal-cell__body');
      if (body) body.classList.remove('is-hidden');
      target.style.display = 'none';
    } else if (action === 'reveal-scenario') {
      // Card 4 diagnose: show the answer for this scenario, hide the button
      const id = target.dataset.scenarioTarget;
      const answer = root.querySelector(`[data-scenario-answer="${id}"]`);
      if (answer) answer.classList.remove('is-hidden');
      target.classList.add('is-used');
    } else if (action === 'reveal-cliffhanger') {
      // Card 5: animate the "Why?" reveal panel and pulse the next button
      const panel = root.querySelector('[data-cliffhanger-panel]');
      if (panel) panel.classList.add('is-revealed');
      target.classList.add('is-revealed');
      target.setAttribute('aria-expanded', 'true');
      const nextBtn = root.querySelector('[data-next-button]');
      if (nextBtn) nextBtn.classList.add('btn--pulse');
    } else if (action === 'reveal-deflation') {
      // Card 7: open or close a deflation flap
      const text = target.querySelector('.def-mech-row__text');
      if (!text) return;
      if (text.classList.contains('is-hidden')) {
        text.classList.remove('is-hidden');
        target.classList.add('is-open');
      } else {
        text.classList.add('is-hidden');
        target.classList.remove('is-open');
      }
    } else if (action === 'ad-step') {
      // AD interactive: change diagram state, switch active tab, swap panel
      const newState = target.dataset.adState;

      // Update the diagram container class
      const diagram = root.querySelector('.ad-interactive__diagram');
      if (diagram) {
        diagram.className = diagram.className.split(' ').filter(cls => !cls.startsWith('show-')).join(' ') + ' show-' + newState;
        diagram.dataset.adState = newState;
      }

      // Toggle which tab is active
      root.querySelectorAll('.ad-tab').forEach(tab => {
        tab.classList.toggle('is-active', tab.dataset.adState === newState);
      });

      // Swap the content panel
      root.querySelectorAll('.ad-panel').forEach(panel => {
        panel.classList.toggle('is-active', panel.dataset.panelKey === newState);
      });
    } else if (action === 'we-reveal') {
      // Worked-example: reveal this step's answer and update button
      const step = target.closest('.we-step');
      if (!step) return;
      const answer = step.querySelector('.we-step__answer');
      if (answer) answer.classList.remove('is-hidden');
      target.textContent = '✓ Working shown';
      target.disabled = true;
      target.style.opacity = '0.5';
    } else if (action === 'ped-solve') {
      // PED-calculation step chain
      const step = target.closest('.ped-calc-step');
      if (!step) return;

      // Reveal answer
      const answer = step.querySelector('.ped-step__answer');
      if (answer) { answer.classList.remove('is-hidden'); answer.style.animation = 'none'; }
      target.style.display = 'none';
      step.classList.add('is-solved');
      step.style.boxShadow = '0 6px 22px rgba(0,0,0,0.13)';

      const n = parseInt(step.dataset.pedStep, 10);
      const colour = step.dataset.stepTone || '#059669';

      // ① Flip the step number badge to ✓
      const numBadge = step.querySelector('[data-step-num]');
      if (numBadge) { numBadge.textContent = '✓'; numBadge.style.fontSize = '18px'; }

      // ② Show "Done" pill in the step header
      const solvedBadge = step.querySelector('[data-solved-badge]');
      if (solvedBadge) solvedBadge.style.display = 'block';

      // ③ Light up roadmap bubble for this step
      const bubble = root.querySelector(`[data-roadmap-step="${n}"]`);
      if (bubble) {
        bubble.style.background = colour;
        bubble.style.borderColor = colour;
        bubble.style.color = '#fff';
        bubble.textContent = '✓';
        bubble.style.boxShadow = `0 0 0 4px ${colour}30`;
      }

      // ④ Fill progress dot for this step
      const dot = root.querySelector(`[data-progress-dot="${n}"]`);
      if (dot) dot.style.background = colour;

      // ⑤ Update "N / 5 done" counter
      const solved = root.querySelectorAll('.ped-calc-step.is-solved').length;
      const total  = root.querySelectorAll('.ped-calc-step').length;
      const counter = root.querySelector('[data-ped-progress]');
      if (counter) {
        counter.textContent = `${solved} / ${total} done`;
        counter.style.color = solved === total ? '#059669' : '#475569';
      }

      // ⑥ Light up the connector to the next step
      const nextLink = root.querySelector(`[data-ped-connector="${n}"]`);
      if (nextLink) {
        const line  = nextLink.querySelector('[data-link-line]');
        const arrow = nextLink.querySelector('[data-link-arrow]');
        if (line)  line.style.background = colour;
        if (arrow) arrow.style.borderTopColor = colour;
      }

      // ⑦ Unlock conclusion when all steps done
      if (solved === total) {
        const payoff = root.querySelector('[data-ped-payoff]');
        const lock   = root.querySelector('[data-ped-lock]');
        if (lock)   lock.style.display = 'none';
        if (payoff) {
          payoff.style.opacity = '1';
          payoff.style.filter  = 'none';
          payoff.style.boxShadow = '0 0 0 3px #FCD34D, 0 8px 30px rgba(11,20,38,0.25)';
          payoff.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }
    } else if (action === 'id-advance') {
      // Interactive diagram: reveal SVG layers cumulatively up to the clicked step,
      // swap the right-column description and bottom analysis panel, and update tab styling.
      const uid = target.dataset.idUid;
      const vi  = parseInt(target.dataset.idVi, 10);
      const idRoot = root.querySelector(`[data-id-root="${uid}"]`);
      if (!idRoot) return;
      const layers = JSON.parse(idRoot.dataset.idLayers || '[]');
      const explicitShow = target.dataset.idShow ? JSON.parse(target.dataset.idShow) : null;

      layers.forEach((cls, i) => {
        const visible = explicitShow ? explicitShow.includes(cls) : i < vi;
        idRoot.querySelectorAll('.' + cls).forEach(el => {
          el.style.display = visible ? '' : 'none';
        });
      });

      idRoot.querySelectorAll('[data-id-vi]').forEach(btn => {
        const bvi = parseInt(btn.dataset.idVi, 10);
        const toneName = btn.dataset.idTone || 'blue';
        const t = PATTERN_TONES[toneName] || PATTERN_TONES.blue;
        const isActive = bvi === vi;
        btn.style.background  = isActive ? t.bg : '#fff';
        btn.style.borderColor = isActive ? t.border : '#E7E7EA';
        btn.style.boxShadow   = isActive ? '0 2px 10px ' + t.accent + '2A' : '0 1px 2px rgba(11,20,38,0.04)';
        const circle = btn.querySelector('[data-id-circle]');
        if (circle) {
          circle.style.background = isActive ? t.accent : '#E2E8F0';
          circle.style.color      = isActive ? '#fff'   : '#475569';
        }
        const label = btn.querySelector('[data-id-label]');
        if (label) {
          label.style.color = isActive ? t.label : '#0B1426';
        }
      });

      idRoot.querySelectorAll('[data-id-desc]').forEach(d => {
        d.style.display = parseInt(d.dataset.idDesc, 10) === vi ? 'flex' : 'none';
      });
      idRoot.querySelectorAll('[data-id-analysis]').forEach(a => {
        a.style.display = parseInt(a.dataset.idAnalysis, 10) === vi ? 'block' : 'none';
      });
    } else if (action === 'tc-channel') {
      // Transmission chain: highlight the chosen channel and reveal its panel
      const key = target.dataset.channelKey;
      root.querySelectorAll('.tc-channel').forEach(ch => {
        ch.classList.toggle('is-active', ch.dataset.channelKey === key);
      });
      root.querySelectorAll('.tc-panel').forEach(p => {
        p.classList.toggle('is-active', p.dataset.panelKey === key);
      });
    } else if (cardIdx !== undefined) {
      currentView = parseInt(cardIdx, 10);
      render();
    }
  }

  render();
})();
