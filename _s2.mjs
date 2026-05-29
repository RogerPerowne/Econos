import { chromium } from 'playwright';import { createServer } from 'http';import { readFileSync, existsSync, statSync, readdirSync, mkdirSync } from 'fs';import { extname, join } from 'path';
const ROOT=process.cwd()+'/dist';const T={'.html':'text/html','.css':'text/css','.svg':'image/svg+xml','.png':'image/png','.woff2':'font/woff2','.js':'text/javascript'};
const srv=createServer((q,s)=>{let p=decodeURIComponent(q.url.split('?')[0]);let f=join(ROOT,p);try{if(existsSync(f)&&statSync(f).isDirectory())f=join(f,'index.html');}catch{}if(!existsSync(f)){s.writeHead(404);return s.end('x');}s.writeHead(200,{'content-type':T[extname(f)]||'application/octet-stream'});s.end(readFileSync(f));});
await new Promise(r=>srv.listen(8054,r));const b=await chromium.launch();const pg=await b.newPage({viewport:{width:820,height:700},deviceScaleFactor:1.2});mkdirSync('/tmp/low',{recursive:true});
const slugs=readdirSync(ROOT+'/articles').filter(d=>statSync(join(ROOT,'articles',d)).isDirectory());
const low=[];
for(const slug of slugs){await pg.goto('http://localhost:8054/articles/'+slug+'/',{waitUntil:'networkidle'}).catch(()=>{});await pg.waitForTimeout(60);
  const r=await pg.evaluate(()=>{const fig=document.querySelector('.article-diagram,.diagram-block');if(!fig)return {n:1};const svg=fig.querySelector('svg');if(!svg)return {s:0};let s=0;svg.querySelectorAll('path,line,polyline,polygon,rect,circle,ellipse').forEach(e=>{try{const bb=e.getBBox();const st=getComputedStyle(e);if(st.opacity!=="0"&&st.display!=="none"&&bb.width*bb.height>40)s++;}catch(e){}});return {s};});
  if(r.n){low.push('NODIAG '+slug);}else if(r.s<4){low.push('LOW'+r.s+' '+slug);const d=pg.locator('.article-diagram,.diagram-block').first();await d.screenshot({path:'/tmp/low/'+slug+'.png'}).catch(()=>{});}
}
process.stdout.write('LOWLIST::'+low.join(' | ')+'::END\n');
await b.close();srv.close();
