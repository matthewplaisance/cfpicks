(()=>{"use strict";var e,t,n,o,r,a={9353:(e,t,n)=>{n.d(t,{m_:()=>i});var o=n(3977),r=n(3281),a=n(8679);const s=(0,o.ZF)({apiKey:"AIzaSyC8J8_Bo2YSeM1aTkE3--bQLCaeuGU3hQE",authDomain:"cfpicks-66e14.firebaseapp.com",projectId:"cfpicks-66e14",storageBucket:"cfpicks-66e14.appspot.com",messagingSenderId:"924459609957",appId:"1:924459609957:web:c1125a2a8f5147de313b8c"}),c=(0,r.v0)(s),i=((0,a.N8)(),()=>{c.onAuthStateChanged((e=>{if(e)console.log("user mon :>> ",e),localStorage.uid=e.uid,"index.html"==window.location.pathname.split("/").pop()&&(window.location.href="./profile.html");else{const e=window.location.pathname.split("/").pop();if(console.log("currPage :>> ",e),"index.html"!=e){window.location.replace("index.html");const e=window.history.state;window.history.replaceState(e,"",window.location.href),window.onpopstate=function(){window.history.replaceState(e,"",window.location.href)}}}}))})},1292:(e,t,n)=>{n.a(e,(async(e,t)=>{try{var o=n(8679),r=n(9353),a=n(8976);async function s(e){let t;return await new Promise(((n,r)=>{(0,o.jM)(e,(e=>{t=e.val(),n()}))})),t}function c(e,t,n,o){d(n);let r=Math.floor((new Date).getTime()/1e3),a=document.getElementById("tbody"),s={points:0,user:[],tb:0};for(let c in e){if("IWBJNJ2Zd2OEIndMcKgXpRfRF3C3"==c)continue;let i=0,l=0,d=e[c][o];d||(d={});let p=document.createElement("tr");p.append(m(c,e[c].name));let u=m(`${c}_points`,i),h=m(`${c}_ppoints`,i);p.append(u),p.append(h);for(let e=1;e<Object.keys(n).length+1;e++)p.append(m(f[e]));for(const[e,o]of Object.entries(f)){const a=parseInt(e)+2;if(d.hasOwnProperty(o)){const e=d[o];e?(n[o].time<r&&(p.cells[a].textContent=`${e.pick}: ${e.points}`),t.hasOwnProperty(o)&&t[o]==e.pick&&(p.cells[a].style.background=y,i+=parseInt(e.points)),""!=t[o]&&t[o]!=e.pick||(l+=parseInt(e.points))):n[o].time<r&&(p.cells[a].textContent="No pick")}}if(i>s.points)s.points=i,s.user=[c],s.tb=d.tb.pick;else if(i==s.points&&t.hasOwnProperty("tb")){const e=t.tb;if(e){const t=Math.abs(e-d.tb.pick),n=Math.abs(e-s.tb);t<n?(s.points=i,s.user=[c],s.tb=d.tb.pick):t==n&&s.user.push(c)}else s.user.push(c)}let w=document.createElement("td");d.hasOwnProperty("tb")&&n.tiebreaker.time<r&&(w.textContent=d.tb.pick),p.append(w),u.textContent=i,h.textContent=l,a.append(p)}if(0!=s.points)for(let e of s.user)document.getElementById(e).style.background=y;const c=document.getElementById(h);c&&(c.style.fontWeight=600)}function i(e){if(e){const t=e.tb;if(t){let e=document.getElementById("tb_res");e.textContent=t,e.style.background=y}}}function l(e){console.log("data :>> ",e);const t=document.getElementById("rowGames"),n=document.getElementById("rowDates");for(;t.firstChild;)t.removeChild(t.firstChild);for(;n.firstChild;)n.removeChild(n.firstChild);t.append(p());const o=document.createElement("th");o.textContent="Season Points",t.append(o);let r=document.getElementById("tbody");const a=["#FCCB00","#D4D8DC","#B1860F"];e.forEach(((e,t)=>{let n=document.createElement("tr"),o=m(e,e.name),s=m(e,e.points);t<a.length&&(o.style.cssText=`color:${a[t]};`),s.style.cssText="width: 100px;",n.append(o),n.append(s),r.append(n)}))}function d(e){console.log("data :>> ",e);const t=document.getElementById("rowGames"),n=document.getElementById("rowDates");for(;t.firstChild;)t.removeChild(t.firstChild);for(;n.firstChild;)n.removeChild(n.firstChild);t.append(p()),n.append(p()),n.append(p()),n.append(p());const o=document.createElement("th");o.textContent="Current Points";const r=document.createElement("th");r.textContent="Potential Points",t.append(o),t.append(r);for(const[o,r]of Object.entries(f))if(e.hasOwnProperty(r)){let o=document.createElement("th");o.textContent=`${e[r].away} at ${e[r].home}`,t.append(o);let a=document.createElement("td");a.style.color="#1fc4ed",a.textContent=e[r].humanDate,n.append(a)}const a=document.createElement("th");a.style.color="#1991EB",a.textContent=e.tiebreaker.home;const s=document.createElement("td");s.id="tb_res",t.append(a),n.append(s)}(0,r.m_)(),$(document).ready((function(){$("#header").load("../src/pages/header.html")}));const p=()=>{const e=document.createElement("th");return e.textContent="holder",e.style.color="white",e},m=(e,t=null,n="td")=>{const o=document.createElement(n);return o.id=e,o.textContent=t,o};function u(e,t){let n={};for(let o in e){n[o]={name:e[o].name,points:0};for(let r in e[o]){const a=e[o][r];if("object"==typeof a&&null!==a)for(let e in a)a[e].pick==t[r][e]&&(n[o].points+=parseInt(a[e].points))}}console.log("res :>> ",n);const o=Object.entries(n).map((([e,t])=>({key:e,...t})));o.sort(((e,t)=>t.points-e.points)),console.log("dataArray :>> ",o);const r={};o.forEach((e=>{r[e.key]=e})),console.log("sortedData :>> ",r)}const f={1:"game1",2:"game2",3:"game3",4:"game4",5:"game5",6:"game6",7:"game7",8:"game8",9:"game9",10:"game10",11:"game11",12:"game12",13:"game13",14:"game14"},h=localStorage.uid;console.log("uid :>> ",h);const y="#C0FF00",w=(0,o.N8)();let b=await s((0,o.iH)(w,"users")),g=await s((0,o.iH)(w,"results"));const C=await(0,a.AVB)("../data/games.json"),k=await(0,a.AVB)("../data/season.json");let v=document.getElementById("selected-week"),E=v.textContent.replace(" ","").toLocaleLowerCase();u(b,g),C&&(c(b,g[E],C[E],E),i(g[E]));document.getElementById("sidebar").querySelectorAll(".nav-link").forEach((e=>{let t=e.innerText.replace(" ","").toLocaleLowerCase();const n=document.getElementById("tbody");e.addEventListener("click",(()=>{for(v.textContent=e.innerText;n.firstChild;)n.removeChild(n.firstChild);Object.keys(C).includes(t)&&(c(b,g[t],C[t],t),i(g[t])),"season"==t&&l(k)}))})),(0,a.Ys)("#weekSelect").on("change",(()=>{let e=(0,a.Ys)("#weekSelect").node().value;v.textContent=e,e=e.replace(" ","").toLocaleLowerCase();const t=document.getElementById("tbody");for(;t.firstChild;)t.removeChild(t.firstChild);Object.keys(C).includes(e)&&(c(b,g[e],C[e],e),i(g[e])),"season"==e&&l(k)})),t()}catch(x){t(x)}}),1)}},s={};function c(e){var t=s[e];if(void 0!==t)return t.exports;var n=s[e]={exports:{}};return a[e](n,n.exports,c),n.exports}c.m=a,e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",n="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",o=e=>{e&&e.d<1&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},c.a=(r,a,s)=>{var c;s&&((c=[]).d=-1);var i,l,d,p=new Set,m=r.exports,u=new Promise(((e,t)=>{d=t,l=e}));u[t]=m,u[e]=e=>(c&&e(c),p.forEach(e),u.catch((e=>{}))),r.exports=u,a((r=>{var a;i=(r=>r.map((r=>{if(null!==r&&"object"==typeof r){if(r[e])return r;if(r.then){var a=[];a.d=0,r.then((e=>{s[t]=e,o(a)}),(e=>{s[n]=e,o(a)}));var s={};return s[e]=e=>e(a),s}}var c={};return c[e]=e=>{},c[t]=r,c})))(r);var s=()=>i.map((e=>{if(e[n])throw e[n];return e[t]})),l=new Promise((t=>{(a=()=>t(s)).r=0;var n=e=>e!==c&&!p.has(e)&&(p.add(e),e&&!e.d&&(a.r++,e.push(a)));i.map((t=>t[e](n)))}));return a.r?l:s()}),(e=>(e?d(u[n]=e):l(m),o(c)))),c&&c.d<0&&(c.d=0)},r=[],c.O=(e,t,n,o)=>{if(!t){var a=1/0;for(d=0;d<r.length;d++){for(var[t,n,o]=r[d],s=!0,i=0;i<t.length;i++)(!1&o||a>=o)&&Object.keys(c.O).every((e=>c.O[e](t[i])))?t.splice(i--,1):(s=!1,o<a&&(a=o));if(s){r.splice(d--,1);var l=n();void 0!==l&&(e=l)}}return e}o=o||0;for(var d=r.length;d>0&&r[d-1][2]>o;d--)r[d]=r[d-1];r[d]=[t,n,o]},c.d=(e,t)=>{for(var n in t)c.o(t,n)&&!c.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={528:0};c.O.j=t=>0===e[t];var t=(t,n)=>{var o,r,[a,s,i]=n,l=0;if(a.some((t=>0!==e[t]))){for(o in s)c.o(s,o)&&(c.m[o]=s[o]);if(i)var d=i(c)}for(t&&t(n);l<a.length;l++)r=a[l],c.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return c.O(d)},n=self.webpackChunkprod_1=self.webpackChunkprod_1||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var i=c.O(void 0,[529,339,939],(()=>c(1292)));i=c.O(i)})();