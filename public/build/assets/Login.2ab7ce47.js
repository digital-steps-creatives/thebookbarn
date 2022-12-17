import{d as x,o as m,e as d,b as t,h as s,H as g,a,r as h,_ as w,u as y,w as i,F as v,j as k,t as $,f as S,n as V,g as _,L,N as B,O as F}from"./app.c8ed5195.js";import{_ as N}from"./Banner.a041f3e7.js";import"./CartDropdown.9ef7728f.js";import{_ as j}from"./Checkbox.62ad225c.js";import{_ as u}from"./InputError.89c4c510.js";import{_ as p}from"./InputLabel.ca7dce3d.js";import{_ as I}from"./PrimaryButton.74591227.js";import{_ as f}from"./TextInput.8a164f72.js";const q={class:"bg-gray-100"},C={class:"min-h-screen justify-center flex items-center filament-login-page"},U={class:"px-6 -mt-16 md:mt-0 md:px-2 max-w-md space-y-8 w-screen"},z={__name:"AdminFrontLayout",props:{title:String},setup(o){return x(!1),(e,c)=>(m(),d("div",q,[t(s(g),{title:o.title},null,8,["title"]),t(N),a("div",C,[a("main",U,[h(e.$slots,"default")])])]))}};const b=o=>(B("data-v-288602f5"),o=o(),F(),o),E=["onSubmit"],H=b(()=>a("div",{class:"w-full flex justify-center"},[a("div",{class:"filament-brand text-xl font-bold tracking-tight"}," The Book Barn ")],-1)),P={key:0,class:"my-4 font-medium text-sm text-green-600"},R={class:"mt-4"},T={class:"flex items-center justify-between mt-4"},A={class:""},D=b(()=>a("span",{class:"ml-2 text-sm text-gray-600"},"Remember me",-1)),M={class:"flex items-center mt-4"},O={class:"flex items-center mt-4"},G={__name:"Login",props:{canResetPassword:Boolean,status:String},setup(o){const e=y({email:"",password:"",remember_token:!1}),c=()=>{e.transform(n=>({...n,remember_token:e.remember_token?"on":""})).post(route("admin.post.login"),{onFinish:()=>e.reset("password")})};return(n,r)=>(m(),d(v,null,[t(s(g),{title:"Log in"}),t(z,null,{default:i(()=>[a("div",null,[a("form",{onSubmit:k(c,["prevent"]),class:"p-8 space-y-8 bg-white/50 backdrop-blur-xl border border-gray-200 shadow-2xl rounded-2xl relative filament-breezy-auth-card"},[H,o.status?(m(),d("div",P,$(o.status),1)):S("",!0),a("div",null,[t(p,{for:"email",value:"Email"}),t(f,{id:"email",modelValue:s(e).email,"onUpdate:modelValue":r[0]||(r[0]=l=>s(e).email=l),type:"email",class:"mt-1 block w-full",required:""},null,8,["modelValue"]),t(u,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),a("div",R,[t(p,{for:"password",value:"Password"}),t(f,{id:"password",modelValue:s(e).password,"onUpdate:modelValue":r[1]||(r[1]=l=>s(e).password=l),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"current-password"},null,8,["modelValue"]),t(u,{class:"mt-2",message:s(e).errors.password},null,8,["message"])]),a("div",T,[a("label",A,[t(j,{checked:s(e).remember_token,"onUpdate:checked":r[2]||(r[2]=l=>s(e).remember_token=l),name:"remember"},null,8,["checked"]),D])]),a("div",M,[t(I,{class:V(["w-full text-center block-must",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:i(()=>[_(" Sign in ")]),_:1},8,["class","disabled"])]),a("div",O,[t(s(L),{href:n.route("password.request"),class:"text-primary-600 text-center text-decoration-none hover:text-primary-700"},{default:i(()=>[_(" Forgot your password? ")]),_:1},8,["href"])])],40,E)])]),_:1})],64))}},se=w(G,[["__scopeId","data-v-288602f5"]]);export{se as default};
