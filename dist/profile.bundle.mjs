(()=>{"use strict";var e,t,n,o,r,i={9353:(e,t,n)=>{n.d(t,{LS:()=>s,m_:()=>l});var o=n(3977),r=n(3281),i=n(8679);const a=(0,o.ZF)({apiKey:"AIzaSyC8J8_Bo2YSeM1aTkE3--bQLCaeuGU3hQE",authDomain:"cfpicks-66e14.firebaseapp.com",projectId:"cfpicks-66e14",storageBucket:"cfpicks-66e14.appspot.com",messagingSenderId:"924459609957",appId:"1:924459609957:web:c1125a2a8f5147de313b8c"}),c=(0,r.v0)(a),l=((0,i.N8)(),()=>{c.onAuthStateChanged((e=>{if(e)console.log("user mon :>> ",e),localStorage.uid=e.uid,"index.html"==window.location.pathname.split("/").pop()&&(window.location.href="./profile.html");else{const e=window.location.pathname.split("/").pop();if(console.log("currPage :>> ",e),"index.html"!=e){window.location.replace("index.html");const e=window.history.state;window.history.replaceState(e,"",window.location.href),window.onpopstate=function(){window.history.replaceState(e,"",window.location.href)}}}}))}),s=()=>(sessionStorage.removeItem("siteSelection"),(0,r.w7)(c))},7706:(e,t,n)=>{n.a(e,(async(e,t)=>{try{var o=n(8679),r=n(9353),i=n(8976);async function a(e,t){const n=document.getElementById("err_msg");Math.floor((new Date).getTime()/1e3);for(let e in t){if("null"==t[e].points||null==t[e].points||null==t[e].points)return n.innerText=`Select confidence points for ${e}.`,void(n.style.color="red");if("null"==t[e].pick||null==t[e].pick||null==t[e].pick)return n.innerText=`Select winner for ${e}. `,void(n.style.color="red")}try{if(navigator.onLine){n.innerText="Submitting...",n.style.color="black";for(let r in t){const i=t[r];try{const t=new Promise(((e,t)=>setTimeout((()=>t(new Error("Please refresh or try again on other browser/device. devcode: 0000"))),1e4)));await Promise.race([(0,o.t8)((0,o.iH)(m,`users/${u}/${e}/${r}`),{pick:i.pick,points:String(i.points)}),t])}catch(e){n.innerText=e,n.style.color="red"}}n.innerText="Submitted!",n.style.color="green"}else n.innerText="No internet connection.",n.style.color="red"}catch(e){n.innerText=e,n.style.color="red"}}function c(e){for(let t in e){const n=document.getElementById(t);if(!n)continue;const o=n.querySelectorAll(".team"),r=n.parentNode.querySelectorAll(".box");o.forEach((n=>{n.textContent==e[t].pick&&(n.style.color=f)})),r.forEach((n=>{n.textContent==e[t].points&&(n.style.background=f)}))}let t=document.getElementById("tba");t&&(e.hasOwnProperty("tb")?t.value=e.tb.pick:document.getElementById("tba").value=0);let n=document.getElementById("tbb");n&&(e.hasOwnProperty("tbb")?n.value=e.tbb.pick:document.getElementById("tbb").value=0)}async function l(e){let t;return await new Promise(((n,r)=>{(0,o.jM)(e,(e=>{const o=e.val();t=o,n()}))})),t}function s(e,t,n,o,r=null){const i=!e.hasOwnProperty("away"),a=document.createElement("div");a.className="col-xl-3 col-lg-3 col-md-3 col-sm-6 mb-4";const c=document.createElement("div");c.className="card card-statistics";const l=document.createElement("div");l.className="card-body";const s=document.createElement("div");s.className="clearfix",s.id=t;const d=document.createElement("i");d.className="time",d.id=e.time,d.setAttribute("aria-hidden","true");const u=document.createElement("div");u.className="float-left";const m=document.createElement("h4");m.className="bold-text team",m.id=`g${o}t1`,m.style.cursor="pointer",m.textContent=e.away;const p=document.createElement("div");p.className="float-right";const h=document.createElement("h4");h.className="bold-text team",h.id=`g${o}t2`,i&&(h.className="bold-text",h.style.fontSize=6),h.style.cursor="pointer",h.textContent=e.home;const f=document.createElement("p");if(f.className="text-muted",f.innerHTML=`<i class="fa fa-calendar mr-1" aria-hidden="true"></i>${e.humanDate}`,u.appendChild(m),p.appendChild(h),s.appendChild(d),s.appendChild(u),s.appendChild(p),l.appendChild(s),l.appendChild(f),e.hasOwnProperty("away"))for(let e=3;e<=g;e+=2){const t=document.createElement("div");t.className="box",t.textContent=e,t.id=e,x.includes(String(e))&&(t.style.background=b),l.appendChild(t)}else{const e=document.createElement("input");e.value=0,e.id=`tb${r}`,e.className="form__input",l.append(e)}c.appendChild(l),a.appendChild(c),n.appendChild(a)}function d(e,t){const n=document.getElementById("card-wrapper");if(e.hasOwnProperty(t)){let o=1;for(let r in e[t])E.includes(r)&&("tiebreaker"==r?(s(e[t][r].a,r,n,o,"a"),s(e[t][r].b,r,n,o,"b")):s(e[t][r],r,n,o)),o++}}(0,r.m_)(),$(document).ready((function(){$("#header").load("../src/pages/header.html")}));const u=localStorage.uid;console.log("uid :>> ",u);const m=(0,o.N8)(),p=document.getElementById("selected-week").textContent.replace(" ","").toLocaleLowerCase(),h=(0,o.iH)(m,`users/${u}`),f=((0,o.iH)(m,"schedule"),"#FF8000"),y="rgb(255, 128, 0)",b="#9494b8",g=4;let w=await l(h);const k=await(0,i.AVB)("../data/games.json");let v={};w&&(w.hasOwnProperty(p)&&(v=w[p]),w.hasOwnProperty("name")&&(localStorage.displayName=w.name));let x=[];const E=["game11","tiebreaker"];for(let I in v)E.includes(I)&&x.push(String(v[I].points));d(k,p),c(v);const S=document.querySelectorAll(".team"),C=document.getElementById("submit"),_=document.querySelectorAll(".box");S.forEach((e=>{e.addEventListener("click",(function(){const e=document.getElementById(this.id).parentElement.parentElement,t=e.querySelector(".time").id;if(Math.floor((new Date).getTime()/1e3)>t){let t=document.getElementById("err_msg");return t.innerText=`Cannot change pick for ${e.id}, it has already kickedoff`,void(t.style.color="red")}this.style.color=f;const n=e.querySelectorAll(".team");let o=null;v.hasOwnProperty(e.id)&&(o=v[e.id].points),v[e.id]={pick:this.textContent,points:o},n.forEach((e=>{e.textContent!=this.textContent&&(e.style.color="black")}))}))})),_.forEach((e=>{e.addEventListener("click",(function(){const e=this.parentNode,t=e.querySelectorAll(".box"),n=e.querySelector(".clearfix"),o=(n.querySelectorAll(".team"),e.querySelector(".time").id);if(Math.floor((new Date).getTime()/1e3)>o){let e=document.getElementById("err_msg");return e.innerText=`Cannot change points for ${n.id}, it has already kickoffed`,void(e.style.color="red")}if(x.includes(this.textContent)){if(v.hasOwnProperty(n.id)&&v[n.id].points==this.textContent)return x=x.filter((e=>e!==v[n.id].points)),v[n.id].points=null,this.style.background="whitesmoke",v[n.id].pick||delete v[n.id],void document.querySelectorAll(".box").forEach((e=>{e.id==this.id&&(e.style.background="whitesmoke")}));let e=document.getElementById("err_msg");return e.innerText="You cannot repeat confidence points",void(e.style.color="red")}document.getElementById("err_msg").innerText="",this.style.background=f;let r=null;v.hasOwnProperty(n.id)&&(v[n.id].hasOwnProperty("points")&&(x=x.filter((e=>e!==v[n.id].points))),r=v[n.id].pick),v[n.id]={pick:r,points:this.textContent},t.forEach((e=>{e.textContent!=this.textContent&&(e.style.background="whitesmoke")})),x.push(String(v[n.id].points));const i=document.querySelectorAll(".box");console.log("bxs",i),i.forEach((e=>{x.includes(e.id)?e.style.background!=y&e.style.background!=f&&(e.style.background=b):e.style.background="whitesmoke"}))}))})),C.addEventListener("click",(function(){const e=document.getElementById("tba");v.tb={pick:String(e.value),points:0};const t=document.getElementById("tbb");v.tbb={pick:String(t.value),points:0},a(p,v)})),document.getElementById("btnLogout").addEventListener("click",r.LS),t()}catch(O){t(O)}}),1)},3476:(e,t,n)=>{function o(e){if(!e.ok)throw new Error(e.status+" "+e.statusText);if(204!==e.status&&205!==e.status)return e.json()}function r(e,t){return fetch(e,t).then(o)}n.d(t,{AV:()=>r})},8976:(e,t,n)=>{n.d(t,{AVB:()=>o.AV}),n(684);var o=n(3476);n(1286),n(8964)}},a={};function c(e){var t=a[e];if(void 0!==t)return t.exports;var n=a[e]={exports:{}};return i[e](n,n.exports,c),n.exports}c.m=i,e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",n="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",o=e=>{e&&e.d<1&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},c.a=(r,i,a)=>{var c;a&&((c=[]).d=-1);var l,s,d,u=new Set,m=r.exports,p=new Promise(((e,t)=>{d=t,s=e}));p[t]=m,p[e]=e=>(c&&e(c),u.forEach(e),p.catch((e=>{}))),r.exports=p,i((r=>{var i;l=(r=>r.map((r=>{if(null!==r&&"object"==typeof r){if(r[e])return r;if(r.then){var i=[];i.d=0,r.then((e=>{a[t]=e,o(i)}),(e=>{a[n]=e,o(i)}));var a={};return a[e]=e=>e(i),a}}var c={};return c[e]=e=>{},c[t]=r,c})))(r);var a=()=>l.map((e=>{if(e[n])throw e[n];return e[t]})),s=new Promise((t=>{(i=()=>t(a)).r=0;var n=e=>e!==c&&!u.has(e)&&(u.add(e),e&&!e.d&&(i.r++,e.push(i)));l.map((t=>t[e](n)))}));return i.r?s:a()}),(e=>(e?d(p[n]=e):s(m),o(c)))),c&&c.d<0&&(c.d=0)},r=[],c.O=(e,t,n,o)=>{if(!t){var i=1/0;for(d=0;d<r.length;d++){for(var[t,n,o]=r[d],a=!0,l=0;l<t.length;l++)(!1&o||i>=o)&&Object.keys(c.O).every((e=>c.O[e](t[l])))?t.splice(l--,1):(a=!1,o<i&&(i=o));if(a){r.splice(d--,1);var s=n();void 0!==s&&(e=s)}}return e}o=o||0;for(var d=r.length;d>0&&r[d-1][2]>o;d--)r[d]=r[d-1];r[d]=[t,n,o]},c.d=(e,t)=>{for(var n in t)c.o(t,n)&&!c.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={845:0};c.O.j=t=>0===e[t];var t=(t,n)=>{var o,r,[i,a,l]=n,s=0;if(i.some((t=>0!==e[t]))){for(o in a)c.o(a,o)&&(c.m[o]=a[o]);if(l)var d=l(c)}for(t&&t(n);s<i.length;s++)r=i[s],c.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return c.O(d)},n=self.webpackChunkprod_1=self.webpackChunkprod_1||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var l=c.O(void 0,[529,183,34],(()=>c(7706)));l=c.O(l)})();