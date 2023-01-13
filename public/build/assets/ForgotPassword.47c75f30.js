import{u as c,o as r,e as l,b as t,h as o,w as m,F as u,H as _,a as s,t as f,f as p,j as w,n as h,g}from"./app.c8ed5195.js";import{_ as y}from"./FrontLayout.747bece7.js";import{_ as b}from"./InputError.89c4c510.js";import{_ as v}from"./InputLabel.ca7dce3d.js";import{_ as x}from"./PrimaryButton.74591227.js";import{_ as k}from"./TextInput.8a164f72.js";import"./ResponsiveNavLink.7cde0fd6.js";import"./Banner.a041f3e7.js";import"./DropdownLink.8bb0b36d.js";import"./CartDropdown.9ef7728f.js";const F={class:"container my-5"},V={class:"row justify-content-center"},N={class:"col-sm-5"},$={class:"bg-white p-5 shadow rounded"},P=s("h4",{class:"text-primary"},"Forgot Password",-1),S=s("div",{class:"mb-4 text-sm text-gray-600"}," Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. ",-1),j={key:0,class:"mb-4 font-medium text-sm text-green-600"},B=["onSubmit"],C={class:"flex items-center justify-end mt-4"},A={__name:"ForgotPassword",props:{status:String},setup(a){const e=c({email:""}),n=()=>{e.post(route("password.email"))};return(E,i)=>(r(),l(u,null,[t(o(_),{title:"Forgot Password"}),t(y,null,{default:m(()=>[s("div",F,[s("div",V,[s("div",N,[s("div",$,[P,S,a.status?(r(),l("div",j,f(a.status),1)):p("",!0),s("form",{onSubmit:w(n,["prevent"])},[s("div",null,[t(v,{for:"email",value:"Email"}),t(k,{id:"email",modelValue:o(e).email,"onUpdate:modelValue":i[0]||(i[0]=d=>o(e).email=d),type:"email",class:"mt-1 block w-full",required:"",autofocus:""},null,8,["modelValue"]),t(b,{class:"mt-2",message:o(e).errors.email},null,8,["message"])]),s("div",C,[t(x,{class:h({"opacity-25":o(e).processing}),disabled:o(e).processing},{default:m(()=>[g(" Email Password Reset Link ")]),_:1},8,["class","disabled"])])],40,B)])])])])]),_:1})],64))}};export{A as default};