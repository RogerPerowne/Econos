import { readFileSync, writeFileSync } from 'node:fs';
let s = readFileSync('js/icons.js','utf8');
const dry = process.argv.includes('--dry');

// Match a marker whose inner element is a single triangular <path>/<polygon>.
const markerRe = /<marker\b[^>]*>\s*<(path|polygon)\b([^>]*?)\/?>\s*<\/marker>/g;

function coordsFrom(tag, attrs){
  if (tag==='polygon'){
    const pts=(attrs.match(/points="([^"]+)"/)||[])[1]; if(!pts) return null;
    const nums=(pts.match(/-?[\d.]+/g)||[]).map(Number); const out=[]; for(let i=0;i+1<nums.length;i+=2) out.push([nums[i],nums[i+1]]); return out.length?out:null;
  }
  const d=(attrs.match(/\bd="([^"]+)"/)||[])[1]; if(!d) return null;
  const nums=(d.match(/-?[\d.]+/g)||[]).map(Number); const pts=[];
  for(let i=0;i+1<nums.length;i+=2) pts.push([nums[i],nums[i+1]]);
  return pts.length? pts : null;
}
function colorFrom(attrs){
  return (attrs.match(/fill="(#[0-9A-Fa-f]{6})"/)||[])[1] || (attrs.match(/stroke="(#[0-9A-Fa-f]{6})"/)||[])[1] || null;
}
// apex = the vertex maximising distance to the midpoint of the other two
function apexIndex(p){
  let best=0,bestD=-1;
  for(let i=0;i<p.length;i++){const o=p.filter((_,j)=>j!==i);const mx=o.reduce((s,q)=>s+q[0],0)/o.length,my=o.reduce((s,q)=>s+q[1],0)/o.length;const d=Math.hypot(p[i][0]-mx,p[i][1]-my);if(d>bestD){bestD=d;best=i;}}
  return best;
}
let converted=0, skipped=0;
s = s.replace(markerRe, (full, tag, attrs) => {
  const pts = coordsFrom(tag, attrs);
  const color = colorFrom(attrs);
  const id=(full.match(/id="([a-z0-9-]+)"/)||[])[1]||"";
  if(/-ax$/.test(id)){ skipped++; return full; }
  if(!pts || pts.length!==3 || !color){ skipped++; return full; }
  // skip if already a chevron (fill=none stroke)
  if(/fill="none"/.test(attrs) && /stroke=/.test(attrs)){ skipped++; return full; }
  const ai = apexIndex(pts);
  const apex = pts[ai]; const base = pts.filter((_,j)=>j!==ai);
  // chevron size for stroke-width: span of the triangle
  const xs=pts.map(p=>p[0]), ys=pts.map(p=>p[1]);
  const span=Math.max(Math.max(...xs)-Math.min(...xs), Math.max(...ys)-Math.min(...ys))||10;
  const sw=Math.max(1.4, Math.min(2.4, +(span/5).toFixed(1)));
  const round=(n)=>+n.toFixed(2);
  const d=`M ${round(base[0][0])} ${round(base[0][1])} L ${round(apex[0])} ${round(apex[1])} L ${round(base[1][0])} ${round(base[1][1])}`;
  converted++;
  // rebuild marker, preserving the <marker ...> open tag attributes
  const open = full.match(/<marker\b[^>]*>/)[0];
  return `${open}<path d="${d}" fill="none" stroke="${color}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round"/></marker>`;
});
console.log('converted', converted, 'markers;', skipped, 'skipped (non-triangular/already-chevron)');
if(!dry) writeFileSync('js/icons.js', s);
