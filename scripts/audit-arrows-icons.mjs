// Hand-rolled icons.js arrow-vs-curve crossing finder. Parses each icon
// entry's literal SVG, classifies marker-bearing strokes as arrows and
// markerless strokes (width>=1.8, not gridline/axis) as curves, flags
// interior crossings. NOTE: many icons.js arrows are FLOW CONNECTORS
// (box->box), legitimately not shift arrows — triage required.
import { readFileSync } from 'node:fs';
const src = readFileSync('js/icons.js','utf8');
const AXIS = new Set(['#334155','#0b1426','#94a3b8','#cbd5e1','#e2e8f0','#0f1b2d','#475569']);
function flatten(d){const t=(d.match(/[MLCmlc]|-?[\d.]+/g))||[];const pts=[];let i=0,cur=null,start=null;
  const rel=c=>c===c.toLowerCase();
  while(i<t.length){const c=t[i++];const C=c.toUpperCase();
   if(C==='M'){let x=+t[i++],y=+t[i++];if(rel(c)&&cur){x+=cur[0];y+=cur[1];}cur=[x,y];start=cur;pts.push(cur);}
   else if(C==='L'){let x=+t[i++],y=+t[i++];if(rel(c)){x+=cur[0];y+=cur[1];}pts.push([x,y]);cur=[x,y];}
   else if(C==='C'){for(let k=0;k<6;k++)t[i++];/*skip*/ /* approximate cubic by endpoint */ }
   else if(!isNaN(+c)){/*stray*/}
  }
  return pts;}
function segInt(a,b,c,d){const r=[b[0]-a[0],b[1]-a[1]],s=[d[0]-c[0],d[1]-c[1]];const den=r[0]*s[1]-r[1]*s[0];if(Math.abs(den)<1e-9)return null;const t=((c[0]-a[0])*s[1]-(c[1]-a[1])*s[0])/den,u=((c[0]-a[0])*r[1]-(c[1]-a[1])*r[0])/den;if(t<0||t>1||u<0||u>1)return null;return[a[0]+t*r[0],a[1]+t*r[1]];}
const dist=(p,q)=>Math.hypot(p[0]-q[0],p[1]-q[1]);

// split into icon entries
const re=/^  ([a-zA-Z0-9]+):\s*`/gm; let m; const entries=[];
while((m=re.exec(src))){entries.push({key:m[1],start:m.index});}
let total=0; const findings=[];
for(let e=0;e<entries.length;e++){
  const seg=src.slice(entries[e].start, e+1<entries.length?entries[e+1].start:src.length);
  if(!/<svg/.test(seg)||!/marker-end|marker-start/.test(seg))continue;
  // collect <path>/<line>
  const els=[...seg.matchAll(/<(path|line)\b([^>]*?)\/?>/g)].map(x=>({tag:x[1],a:x[2]}));
  const arrows=[],curves=[];
  for(const el of els){
    const marker=/marker-(start|end)=/.test(el.a);
    const sw=parseFloat((el.a.match(/stroke-width="?([\d.]+)"?/)||[])[1]||'0');
    const stroke=((el.a.match(/stroke="([^"]+)"/)||[])[1]||'').toLowerCase();
    const dashed=/stroke-dasharray|dashed/.test(el.a);
    let poly;
    if(el.tag==='line'){const x1=+(el.a.match(/x1="?([\d.-]+)"?/)||[])[1],y1=+(el.a.match(/y1="?([\d.-]+)"?/)||[])[1],x2=+(el.a.match(/x2="?([\d.-]+)"?/)||[])[1],y2=+(el.a.match(/y2="?([\d.-]+)"?/)||[])[1];if([x1,y1,x2,y2].some(Number.isNaN))continue;poly=[[x1,y1],[x2,y2]];}
    else{const d=(el.a.match(/\bd="([^"]+)"/)||[])[1];if(!d||/[Cc]/.test(d))continue;/*skip cubic for now*/poly=flatten(d);if(poly.length<2)continue;}
    if(marker)arrows.push({poly}); else if(sw>=1.8&&!AXIS.has(stroke)&&!dashed)curves.push({poly,stroke});
  }
  for(const ar of arrows){total++;const a0=ar.poly[0],a1=ar.poly[ar.poly.length-1],al=dist(a0,a1);let f=false;
   for(const cv of curves){if(f)break;for(let i=0;i<ar.poly.length-1&&!f;i++)for(let j=0;j<cv.poly.length-1;j++){const hit=segInt(ar.poly[i],ar.poly[i+1],cv.poly[j],cv.poly[j+1]);if(!hit)continue;if(Math.min(dist(hit,a0),dist(hit,a1))<Math.max(8,al*0.2))continue;findings.push({key:entries[e].key,stroke:cv.stroke,at:[Math.round(hit[0]),Math.round(hit[1])]});f=true;break;}}}
}
console.log('icons.js arrows scanned (straight-line only):',total,'| crossing candidates:',findings.length);
const byKey={};for(const f of findings)(byKey[f.key]=byKey[f.key]||[]).push(f);
for(const k of Object.keys(byKey))console.log('  ✗ '+k+' — '+byKey[k].length+' crossing(s) e.g. curve('+byKey[k][0].stroke+') @['+byKey[k][0].at+']');
