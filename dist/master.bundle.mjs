(()=>{"use strict";var e,t,n,o,r,a={9353:(e,t,n)=>{n.d(t,{m_:()=>i});var o=n(3977),r=n(3281),a=n(8679);const c=(0,o.ZF)({apiKey:"AIzaSyC8J8_Bo2YSeM1aTkE3--bQLCaeuGU3hQE",authDomain:"cfpicks-66e14.firebaseapp.com",projectId:"cfpicks-66e14",storageBucket:"cfpicks-66e14.appspot.com",messagingSenderId:"924459609957",appId:"1:924459609957:web:c1125a2a8f5147de313b8c"}),s=(0,r.v0)(c),i=((0,a.N8)(),()=>{s.onAuthStateChanged((e=>{if(e)console.log("user mon :>> ",e),localStorage.uid=e.uid,"index.html"==window.location.pathname.split("/").pop()&&(window.location.href="./profile.html");else{const e=window.location.pathname.split("/").pop();if(console.log("currPage :>> ",e),"index.html"!=e){window.location.replace("index.html");const e=window.history.state;window.history.replaceState(e,"",window.location.href),window.onpopstate=function(){window.history.replaceState(e,"",window.location.href)}}}}))})},1292:(e,t,n)=>{n.a(e,(async(e,t)=>{try{var o=n(8679),r=n(9353),a=n(8976);async function c(e){let t;return await new Promise(((n,r)=>{(0,o.jM)(e,(e=>{t=e.val(),n()}))})),t}function s(e,t,n,o){p(n);let r=Math.floor((new Date).getTime()/1e3),a=document.getElementById("tbody"),c={points:0,user:[],tb:0};for(let s in e){if("IWBJNJ2Zd2OEIndMcKgXpRfRF3C3"==s)continue;let i=0,l=0,p=e[s][o];p||(p={});let d=document.createElement("tr");d.append(m(s,e[s].name,"td",!0));let f=m(`${s}_points`,i),u=m(`${s}_ppoints`,i);d.append(f),d.append(u);for(let e=1;e<Object.keys(n).length+1;e++)d.append(m(h[e]));if("week14"==o)for(let e=1;e<9;e++)d.append(m(`rank${e}`));for(const[e,o]of Object.entries(h)){const a="rank"+(e-5),c=parseInt(e)+2;if(p.hasOwnProperty(o)){const e=p[o];e&&(e.hasOwnProperty("pick")&&(n[o].time<r&&(d.cells[c].textContent=`${e.pick}: ${e.points}`),""!=t[o]&&t[o]!=e.pick&&t[o]||(l+=parseInt(e.points))),t.hasOwnProperty(o)&&t[o]==e.pick&&(d.cells[c].style.background=w,i+=parseInt(e.points)))}else if(p.hasOwnProperty(a)){const e=p[a];e.hasOwnProperty("pick")&&1701478800<r&&(d.cells[c].textContent=e.pick),t.hasOwnProperty(a)&&t[a]==e.pick&&(d.cells[c].style.background=w,i+=2),""!=t[a]&&t[a]!=e.pick||(l+=2)}}if(i>c.points)c.points=i,c.user=[s],c.tb=p.tb.pick;else if(i==c.points&&t.hasOwnProperty("tb")){const e=t.tb;if(e){const t=Math.abs(e-p.tb.pick),n=Math.abs(e-c.tb);t<n?(c.points=i,c.user=[s],c.tb=p.tb.pick):t==n&&c.user.push(s)}else c.user.push(s)}let y=document.createElement("td");p.hasOwnProperty("tb")&&n.tiebreaker.time<r&&(y.textContent=p.tb.pick),d.append(y),f.textContent=i,u.textContent=l,a.append(d)}if(0!=c.points)for(let e of c.user)document.getElementById(e).style.color="#FCCB00";const s=document.getElementById(y);s&&(s.style.fontWeight=600),0==c.points?u():u(!1,1)}function i(e){if(e){const t=e.tb;if(t){let e=document.getElementById("tb_res");e.textContent=t,e.style.background=w}}}function l(e){const t=document.getElementById("rowGames"),n=document.getElementById("rowDates");for(;t.firstChild;)t.removeChild(t.firstChild);for(;n.firstChild;)n.removeChild(n.firstChild);t.append(d());const o=document.createElement("th");o.textContent="Season Points",t.append(o);let r=document.getElementById("tbody");const a=["#FCCB00","#D4D8DC","#B1860F"];Object.entries(e).forEach((([e,t])=>{let n=document.createElement("tr"),o=m(t,t.name),c=m(t,t.points);o.style.color=`color:${a[e]};`,c.style.cssText="width: 100px;",n.append(o),n.append(c),r.append(n)}))}function p(e){const t=document.getElementById("rowGames"),n=document.getElementById("rowDates");for(;t.firstChild;)t.removeChild(t.firstChild);for(;n.firstChild;)n.removeChild(n.firstChild);t.append(d()),n.append(d()),n.append(d()),n.append(d());const o=document.createElement("th");o.textContent="Current Points";const r=document.createElement("th");r.textContent="Potential Points",t.append(o),t.append(r);for(const[o,r]of Object.entries(h))if(e.hasOwnProperty(r)){let o=document.createElement("th");o.textContent=`${e[r].away} at ${e[r].home}`,t.append(o);let a=document.createElement("td");a.style.color="#1fc4ed",a.textContent=e[r].humanDate,n.append(a)}if("week14"==x)for(let e=1;e<9;e++){let n=document.createElement("th");n.textContent=e,1==e&&(n.textContent="Rankings: 1"),n.style.fontWeight="bold;",t.append(n)}const a=document.createElement("th");a.style.color="#1991EB",a.textContent=e.tiebreaker.home;const c=document.createElement("td");c.id="tb_res",t.append(a),n.append(c)}(0,r.m_)(),$(document).ready((function(){$("#header").load("../src/pages/header.html")}));const d=()=>{const e=document.createElement("th");return e.textContent="holder",e.style.color="white",e},m=(e,t=null,n="td",o=!1)=>{const r=document.createElement(n);return r.id=e,r.textContent=t,o&&(r.classList.add("sticky-column"),r.style.backgroundColor="#f7faf8"),r};function f(e,t){let n={};for(let o in e){n[o]={name:e[o].name,points:0};for(let r in e[o]){const a=e[o][r];if("object"==typeof a&&null!==a)for(let e in a)a[e].pick==t[r][e]&&(n[o].points+=parseInt(a[e].points))}}const o=Object.entries(n).map((([e,t])=>({key:e,...t})));o.sort(((e,t)=>t.points-e.points));const r={};o.forEach((e=>{r[e.key]=e})),console.log("sortedData :>> ",r)}function u(e=!0,t=0){let n=document.querySelector("tbody"),o=Array.from(n.rows);o.sort(((n,o)=>{let r=n.cells[t].textContent.trim(),a=o.cells[t].textContent.trim();return e?r.localeCompare(a):parseFloat(a)-parseFloat(r)})),o.forEach((e=>n.appendChild(e)))}const h={1:"game1",2:"game2",3:"game3",4:"game4",5:"game5",6:"game6",7:"game7",8:"game8",9:"game9",10:"game10",11:"game11",12:"game12",13:"game13",14:"game14"},y=localStorage.uid,w="#C0FF00",b=(0,o.N8)();let g=await c((0,o.iH)(b,"users")),C=await c((0,o.iH)(b,"results"));const k=await(0,a.AVB)("../data/games.json"),v=await(0,a.AVB)("../data/season.json");let E=document.getElementById("weekSelect"),x=(E.value,E.value.replace(" ","").toLocaleLowerCase());f(g,C),"week14"==x?s(g,C[x],k[x],x):k&&(s(g,C[x],k[x],x),i(C[x])),(0,a.Ys)("#weekSelect").on("change",(()=>{let e=document.getElementById("weekSelect").value;"default"==e&&(e="Week 13"),e=e.replace(" ","").toLocaleLowerCase();const t=document.getElementById("tbody");for(;t.firstChild;)t.removeChild(t.firstChild);Object.keys(k).includes(e)&&(s(g,C[e],k[e],e),i(C[e])),"season"==e&&l(v)})),t()}catch(O){t(O)}}),1)}},c={};function s(e){var t=c[e];if(void 0!==t)return t.exports;var n=c[e]={exports:{}};return a[e](n,n.exports,s),n.exports}s.m=a,e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",n="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",o=e=>{e&&e.d<1&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},s.a=(r,a,c)=>{var s;c&&((s=[]).d=-1);var i,l,p,d=new Set,m=r.exports,f=new Promise(((e,t)=>{p=t,l=e}));f[t]=m,f[e]=e=>(s&&e(s),d.forEach(e),f.catch((e=>{}))),r.exports=f,a((r=>{var a;i=(r=>r.map((r=>{if(null!==r&&"object"==typeof r){if(r[e])return r;if(r.then){var a=[];a.d=0,r.then((e=>{c[t]=e,o(a)}),(e=>{c[n]=e,o(a)}));var c={};return c[e]=e=>e(a),c}}var s={};return s[e]=e=>{},s[t]=r,s})))(r);var c=()=>i.map((e=>{if(e[n])throw e[n];return e[t]})),l=new Promise((t=>{(a=()=>t(c)).r=0;var n=e=>e!==s&&!d.has(e)&&(d.add(e),e&&!e.d&&(a.r++,e.push(a)));i.map((t=>t[e](n)))}));return a.r?l:c()}),(e=>(e?p(f[n]=e):l(m),o(s)))),s&&s.d<0&&(s.d=0)},r=[],s.O=(e,t,n,o)=>{if(!t){var a=1/0;for(p=0;p<r.length;p++){for(var[t,n,o]=r[p],c=!0,i=0;i<t.length;i++)(!1&o||a>=o)&&Object.keys(s.O).every((e=>s.O[e](t[i])))?t.splice(i--,1):(c=!1,o<a&&(a=o));if(c){r.splice(p--,1);var l=n();void 0!==l&&(e=l)}}return e}o=o||0;for(var p=r.length;p>0&&r[p-1][2]>o;p--)r[p]=r[p-1];r[p]=[t,n,o]},s.d=(e,t)=>{for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={528:0};s.O.j=t=>0===e[t];var t=(t,n)=>{var o,r,[a,c,i]=n,l=0;if(a.some((t=>0!==e[t]))){for(o in c)s.o(c,o)&&(s.m[o]=c[o]);if(i)var p=i(s)}for(t&&t(n);l<a.length;l++)r=a[l],s.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return s.O(p)},n=self.webpackChunkprod_1=self.webpackChunkprod_1||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var i=s.O(void 0,[529,183,939],(()=>s(1292)));i=s.O(i)})();