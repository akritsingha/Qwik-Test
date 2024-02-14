import{u as s,r as a,d as n}from"./q-vnukJ65a.js";import{l as i,W as l,j as m,y as f,_ as c,h as u}from"./q-Y6E2TeAI.js";import{_}from"./q-izE8gtqG.js";import"./q-nQEjtDOf.js";const v=({cleanup:r})=>{const[e]=i();e.store.internal.validate=e.validate?Array.isArray(e.validate)?e.validate:[e.validate]:[],"value"in e.store&&(e.store.internal.transform=e.transform?Array.isArray(e.transform)?e.transform:[e.transform]:[]);const t=n();e.store.internal.consumers.push(t),e.store.active||(e.store.active=!0,s(e.of)),r(()=>setTimeout(()=>{e.store.internal.consumers.splice(e.store.internal.consumers.indexOf(t),1),!(e.keepActive??!1)&&!e.store.internal.consumers.length&&(e.store.active=!1,e.keepState??!0?s(e.of):a(e.of,e.store.name)),"value"in e.store&&(e.store.internal.elements=e.store.internal.elements.filter(o=>o.isConnected))},15))},p=r=>(l(f(()=>_(()=>Promise.resolve().then(()=>d),void 0,import.meta.url),"s_LcO2OGTEA00",[r])),m(c,null,3,"Pr_0")),d=Object.freeze(Object.defineProperty({__proto__:null,_hW:u,s_LcO2OGTEA00:v,s_vBVRkPF8kFE:p},Symbol.toStringTag,{value:"Module"}));export{u as _hW,v as s_LcO2OGTEA00,p as s_vBVRkPF8kFE};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
