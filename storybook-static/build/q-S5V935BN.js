import{l as d,S as f,o as U,C as t,j as e,y as l,K as n,a as p,h as P}from"./q-Y6E2TeAI.js";import{_ as u}from"./q-izE8gtqG.js";import{B as r}from"./q-DgNViZK-.js";import{r as h,F as b}from"./q-nQEjtDOf.js";import{I as y}from"./q-l4aqfKAl.js";const w=()=>{const[a]=d();a.value="signUp"},x=()=>{const[a]=d();a.value="logIn"},v={data:{inputFields:[{data:{label:"Email",placeholder:"Enter Your Email"},layout:{appearance:"col",classPrefix:"",size:"xl",required:!0},config:{inputType:"email",disabled:!1,attributes:{name:"email"}}},{data:{label:"Password",placeholder:"Enter Your Password",msg:"Password length should be minimum 8 characters"},layout:{appearance:"col",classPrefix:"",size:"xl",required:!0},config:{inputType:"password",disabled:!1,attributes:{name:"password"}}},{data:{label:"Confirm Password",placeholder:"Enter Confirm Password"},layout:{appearance:"col",classPrefix:"",size:"xl",required:!0},config:{inputType:"password",disabled:!1,attributes:{name:"cfm_password"}}}]},layout:{appearance:"row",classPrefix:"signUpForm"}},O={data:{inputFields:[{data:{label:"Email",placeholder:"Enter Your Email"},layout:{appearance:"col",classPrefix:"",size:"xl",required:!0},config:{inputType:"email",disabled:!1,attributes:{name:"email"}}},{data:{label:"Password",placeholder:"Enter Your Password"},layout:{appearance:"col",classPrefix:"",size:"xl",required:!0},config:{inputType:"password",disabled:!1,attributes:{name:"password"}}}]},layout:{appearance:"row",classPrefix:"signUpForm"}},E=h(f("s_0SaMfNXD40o"));window.__STORYBOOK_COMPONENT_DOC__??(window.__STORYBOOK_COMPONENT_DOC__=new Map);window.__STORYBOOK_COMPONENT_DOC__.set("sign-up",{tags:{},filePath:"/Users/Akrit.Singha/Desktop/Qwik Test/src/routes/signUp/index.tsx",description:"",displayName:"signUp",methods:[],props:{}});const F="_signUpFormPage_6aimn_1",I="_signUpForm_6aimn_1",S="_buttonGroup_6aimn_15",k="_heading_6aimn_24",T="_signUpButton_6aimn_29",s={signUpFormPage:F,signUpForm:I,buttonGroup:S,heading:k,signUpButton:T},z=()=>{const a=U("signUp"),m={layout:{appearance:"primary",classPrefix:s.signUpButton,size:"xl",outline:!1},config:{attributes:{name:"submit",value:a.value}}},g=a.value==="signUp"?v:O,i=a.value==="signUp"?"Sign Up":"Log In",_=E();return t("div",null,{class:s.signUpFormPage},t("div",null,{class:s.signUpForm},[t("div",null,{class:s.buttonGroup},[e(r,{get layout(){return{appearance:`${a.value==="signUp"?"success":"dark"}`,size:"md",outline:!1}},children:"Sign Up",config:{onBtnClick:l(()=>u(()=>Promise.resolve().then(()=>c),void 0,import.meta.url),"s_mWlxxeYYjkI",[a])},[n]:{layout:p(o=>({appearance:`${o.value==="signUp"?"success":"dark"}`,size:"md",outline:!1}),[a])}},3,"6t_0"),e(r,{get layout(){return{appearance:`${a.value==="logIn"?"success":"dark"}`,size:"md"}},children:"Log In",config:{onBtnClick:l(()=>u(()=>Promise.resolve().then(()=>c),void 0,import.meta.url),"s_kmdZJNg9aVA",[a])},[n]:{layout:p(o=>({appearance:`${o.value==="logIn"?"success":"dark"}`,size:"md"}),[a])}},3,"6t_1")],1,null),t("h1",null,{class:s.heading},i,1,null),e(b,{action:_,children:[e(y,{...g},0,"6t_2"),e(r,{...m,children:i},0,"6t_3")],[n]:{action:n}},1,"6t_4")],1,null),1,"6t_5")},c=Object.freeze(Object.defineProperty({__proto__:null,_hW:P,s_FemKUp8QIKI:z,s_kmdZJNg9aVA:x,s_mWlxxeYYjkI:w},Symbol.toStringTag,{value:"Module"}));export{P as _hW,z as s_FemKUp8QIKI,x as s_kmdZJNg9aVA,w as s_mWlxxeYYjkI};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
