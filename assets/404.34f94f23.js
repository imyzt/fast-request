import{h as c,u as l,i as r,j as i,k as o,P as m,r as h}from"./app.2e148bfb.js";import{S as p}from"./SkipLink.3ea0b3a5.js";var L=c({name:"404",setup(){var a;const s=l(),e=r(),n=()=>{const t=e.value.routeLocales["404msg"];return t[Math.floor(Math.random()*t.length)]},{navigate:u}=i({to:(a=e.value.home)!=null?a:s.value});return()=>[o(p),o(h("CommonWrapper"),{sidebar:!1},()=>o("main",{class:"page not-found",id:"main-content"},[o(m),o("blockquote",n()),o("button",{class:"action-button",onClick:()=>{window.history.go(-1)}},e.value.routeLocales.back),o("button",{class:"action-button",onClick:()=>u()},e.value.routeLocales.home)]))]}});export{L as default};
