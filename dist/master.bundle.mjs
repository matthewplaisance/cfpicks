(()=>{"use strict";var e,t,n,o,r,a={9353:(e,t,n)=>{n.d(t,{m_:()=>i});var o=n(3977),r=n(3281),a=n(8679);const c=(0,o.ZF)({apiKey:"AIzaSyC8J8_Bo2YSeM1aTkE3--bQLCaeuGU3hQE",authDomain:"cfpicks-66e14.firebaseapp.com",projectId:"cfpicks-66e14",storageBucket:"cfpicks-66e14.appspot.com",messagingSenderId:"924459609957",appId:"1:924459609957:web:c1125a2a8f5147de313b8c"}),s=(0,r.v0)(c),i=((0,a.N8)(),()=>{s.onAuthStateChanged((e=>{if(e)console.log("user mon :>> ",e),localStorage.uid=e.uid,"index.html"==window.location.pathname.split("/").pop()&&(window.location.href="./profile.html");else{const e=window.location.pathname.split("/").pop();if(console.log("currPage :>> ",e),"index.html"!=e){window.location.replace("index.html");const e=window.history.state;window.history.replaceState(e,"",window.location.href),window.onpopstate=function(){window.history.replaceState(e,"",window.location.href)}}}}))})},1292:(e,t,n)=>{n.a(e,(async(e,t)=>{try{var o=n(8679),r=n(9353),a=n(8976);async function c(e){let t;return await new Promise(((n,r)=>{(0,o.jM)(e,(e=>{t=e.val(),n()}))})),t}function s(e,t,n,o){d(n);let r=Math.floor((new Date).getTime()/1e3),a=document.getElementById("tbody"),c={points:0,user:[],tb:0};for(let s in e){if("IWBJNJ2Zd2OEIndMcKgXpRfRF3C3"==s)continue;let i=0,l=0,d=e[s][o];d||(d={});let p=document.createElement("tr");p.append(m(s,e[s].name,"td",!0));let u=m(`${s}_points`,i),w=m(`${s}_ppoints`,i);p.append(u),p.append(w);for(let e=1;e<Object.keys(n).length+1;e++)p.append(m(f[e]));if("week14"==o)for(let e=1;e<9;e++)p.append(m(`rank${e}`));for(const[e,o]of Object.entries(f)){const a="rank"+(e-5),c=parseInt(e)+2;if(d.hasOwnProperty(o)){const e=d[o];e&&(e.hasOwnProperty("pick")&&(n[o].time<r&&(p.cells[c].textContent=`${e.pick}: ${e.points}`),""!=t[o]&&t[o]!=e.pick&&t[o]||(l+=parseInt(e.points))),t.hasOwnProperty(o)&&t[o]==e.pick&&(p.cells[c].style.background=h,i+=parseInt(e.points)))}else if(d.hasOwnProperty(a)){const e=d[a];e.hasOwnProperty("pick")&&1701478800<r&&(p.cells[c].textContent=e.pick),t.hasOwnProperty(a)&&t[a]==e.pick&&(p.cells[c].style.background=h,i+=2),""!=t[a]&&t[a]!=e.pick||(l+=2)}}if(i>c.points)c.points=i,c.user=[s],c.tb=d.tb.pick;else if(i==c.points&&t.hasOwnProperty("tb")){const e=t.tb;if(e){const t=Math.abs(e-d.tb.pick),n=Math.abs(e-c.tb);t<n?(c.points=i,c.user=[s],c.tb=d.tb.pick):t==n&&c.user.push(s)}else c.user.push(s)}let y=document.createElement("td");d.hasOwnProperty("tb")&&n.tiebreaker.time<r&&(y.textContent=d.tb.pick),p.append(y),u.textContent=i,w.textContent=l,a.append(p)}if(0!=c.points)for(let e of c.user)document.getElementById(e).style.background=h;const s=document.getElementById(u);s&&(s.style.fontWeight=600)}function i(e){if(e){const t=e.tb;if(t){let e=document.getElementById("tb_res");e.textContent=t,e.style.background=h}}}function l(e){const t=document.getElementById("rowGames"),n=document.getElementById("rowDates");for(;t.firstChild;)t.removeChild(t.firstChild);for(;n.firstChild;)n.removeChild(n.firstChild);t.append(p());const o=document.createElement("th");o.textContent="Season Points",t.append(o);let r=document.getElementById("tbody");const a=["#FCCB00","#D4D8DC","#B1860F"];e.forEach(((e,t)=>{let n=document.createElement("tr"),o=m(e,e.name),c=m(e,e.points);t<a.length&&(o.style.cssText=`color:${a[t]};`),c.style.cssText="width: 100px;",n.append(o),n.append(c),r.append(n)}))}function d(e){console.log("data :>> ",e);const t=document.getElementById("rowGames"),n=document.getElementById("rowDates");for(;t.firstChild;)t.removeChild(t.firstChild);for(;n.firstChild;)n.removeChild(n.firstChild);t.append(p()),n.append(p()),n.append(p()),n.append(p());const o=document.createElement("th");o.textContent="Current Points";const r=document.createElement("th");r.textContent="Potential Points",t.append(o),t.append(r);for(const[o,r]of Object.entries(f))if(e.hasOwnProperty(r)){let o=document.createElement("th");o.textContent=`${e[r].away} at ${e[r].home}`,t.append(o);let a=document.createElement("td");a.style.color="#1fc4ed",a.textContent=e[r].humanDate,n.append(a)}if("week14"==v)for(let e=1;e<9;e++){let n=document.createElement("th");n.textContent=e,1==e&&(n.textContent="Rankings: 1"),n.style.fontWeight="bold;",t.append(n)}const a=document.createElement("th");a.style.color="#1991EB",a.textContent=e.tiebreaker.home;const c=document.createElement("td");c.id="tb_res",t.append(a),n.append(c)}(0,r.m_)(),$(document).ready((function(){$("#header").load("../src/pages/header.html")}));const p=()=>{const e=document.createElement("th");return e.textContent="holder",e.style.color="white",e},m=(e,t=null,n="td",o=!1)=>{const r=document.createElement(n);return r.id=e,r.textContent=t,o&&(r.classList.add("sticky-column"),r.style.backgroundColor="#f7faf8"),r},f={1:"game1",2:"game2",3:"game3",4:"game4",5:"game5",6:"game6",7:"game7",8:"game8",9:"game9",10:"game10",11:"game11",12:"game12",13:"game13",14:"game14"},u=localStorage.uid,h="#C0FF00",w=(0,o.N8)();let y=await c((0,o.iH)(w,"users")),b=await c((0,o.iH)(w,"results"));const g=await(0,a.AVB)("../data/games.json"),C=await(0,a.AVB)("../data/season.json");let k=document.getElementById("selected-week"),v=k.textContent.replace(" ","").toLocaleLowerCase();"week14"==v?s(y,b[v],g[v],v):g&&(s(y,b[v],g[v],v),i(b[v]));document.getElementById("sidebar").querySelectorAll(".nav-link").forEach((e=>{let t=e.innerText.replace(" ","").toLocaleLowerCase();const n=document.getElementById("tbody");e.addEventListener("click",(()=>{for(k.textContent=e.innerText;n.firstChild;)n.removeChild(n.firstChild);Object.keys(g).includes(t)&&(s(y,b[t],g[t],t),i(b[t])),"season"==t&&l(C)}))})),(0,a.Ys)("#weekSelect").on("change",(()=>{let e=(0,a.Ys)("#weekSelect").node().value;"default"==e&&(e="Week 13"),k.textContent=e,e=e.replace(" ","").toLocaleLowerCase();const t=document.getElementById("tbody");for(;t.firstChild;)t.removeChild(t.firstChild);Object.keys(g).includes(e)&&(s(y,b[e],g[e],e),i(b[e])),"season"==e&&l(C)})),t()}catch(E){t(E)}}),1)}},c={};function s(e){var t=c[e];if(void 0!==t)return t.exports;var n=c[e]={exports:{}};return a[e](n,n.exports,s),n.exports}s.m=a,e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",n="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",o=e=>{e&&e.d<1&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},s.a=(r,a,c)=>{var s;c&&((s=[]).d=-1);var i,l,d,p=new Set,m=r.exports,f=new Promise(((e,t)=>{d=t,l=e}));f[t]=m,f[e]=e=>(s&&e(s),p.forEach(e),f.catch((e=>{}))),r.exports=f,a((r=>{var a;i=(r=>r.map((r=>{if(null!==r&&"object"==typeof r){if(r[e])return r;if(r.then){var a=[];a.d=0,r.then((e=>{c[t]=e,o(a)}),(e=>{c[n]=e,o(a)}));var c={};return c[e]=e=>e(a),c}}var s={};return s[e]=e=>{},s[t]=r,s})))(r);var c=()=>i.map((e=>{if(e[n])throw e[n];return e[t]})),l=new Promise((t=>{(a=()=>t(c)).r=0;var n=e=>e!==s&&!p.has(e)&&(p.add(e),e&&!e.d&&(a.r++,e.push(a)));i.map((t=>t[e](n)))}));return a.r?l:c()}),(e=>(e?d(f[n]=e):l(m),o(s)))),s&&s.d<0&&(s.d=0)},r=[],s.O=(e,t,n,o)=>{if(!t){var a=1/0;for(d=0;d<r.length;d++){for(var[t,n,o]=r[d],c=!0,i=0;i<t.length;i++)(!1&o||a>=o)&&Object.keys(s.O).every((e=>s.O[e](t[i])))?t.splice(i--,1):(c=!1,o<a&&(a=o));if(c){r.splice(d--,1);var l=n();void 0!==l&&(e=l)}}return e}o=o||0;for(var d=r.length;d>0&&r[d-1][2]>o;d--)r[d]=r[d-1];r[d]=[t,n,o]},s.d=(e,t)=>{for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={528:0};s.O.j=t=>0===e[t];var t=(t,n)=>{var o,r,[a,c,i]=n,l=0;if(a.some((t=>0!==e[t]))){for(o in c)s.o(c,o)&&(s.m[o]=c[o]);if(i)var d=i(s)}for(t&&t(n);l<a.length;l++)r=a[l],s.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return s.O(d)},n=self.webpackChunkprod_1=self.webpackChunkprod_1||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var i=s.O(void 0,[529,183,939],(()=>s(1292)));i=s.O(i)})();