import{d as m,s as u,B as h,m as w,o as n,e as r,h as s,n as l,a as e,f as c,t as _,j as p}from"./app.c8ed5195.js";const g={class:"max-w-screen-xl mx-auto py-2 px-3 sm:px-6 lg:px-8"},v={class:"flex items-center justify-between flex-wrap"},x={class:"w-0 flex-1 flex items-center min-w-0"},f={key:0,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},k=e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),b=[k],y={key:1,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},B=e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"},null,-1),j=[B],C={class:"ml-3 font-medium text-sm text-white truncate"},M={class:"shrink-0 sm:ml-3"},z=e("svg",{class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1),L=[z],V={__name:"Banner",setup(D){const a=m(!0),t=u(()=>{var o;return((o=h().props.value.jetstream.flash)==null?void 0:o.bannerStyle)||"success"}),i=u(()=>{var o;return((o=h().props.value.jetstream.flash)==null?void 0:o.banner)||""});return w(i,async()=>{a.value=!0}),(o,d)=>(n(),r("div",null,[a.value&&s(i)?(n(),r("div",{key:0,class:l({"bg-indigo-500":s(t)=="success","bg-red-700":s(t)=="danger"})},[e("div",g,[e("div",v,[e("div",x,[e("span",{class:l(["flex p-2 rounded-lg",{"bg-indigo-600":s(t)=="success","bg-red-600":s(t)=="danger"}])},[s(t)=="success"?(n(),r("svg",f,b)):c("",!0),s(t)=="danger"?(n(),r("svg",y,j)):c("",!0)],2),e("p",C,_(s(i)),1)]),e("div",M,[e("button",{type:"button",class:l(["-mr-1 flex p-2 rounded-md focus:outline-none sm:-mr-2 transition",{"hover:bg-indigo-600 focus:bg-indigo-600":s(t)=="success","hover:bg-red-600 focus:bg-red-600":s(t)=="danger"}]),"aria-label":"Dismiss",onClick:d[0]||(d[0]=p(N=>a.value=!1,["prevent"]))},L,2)])])])],2)):c("",!0)]))}};export{V as _};
