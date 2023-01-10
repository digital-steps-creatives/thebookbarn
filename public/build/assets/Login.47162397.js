import{_ as x,u as v,o as m,e as u,b as o,h as t,w as c,F as w,H as b,a as e,j as y,t as k,f as I,n as S,g as d,L as f,N as V,O as F}from"./app.734a16c0.js";import{_ as q}from"./FrontLayout.bae5aa51.js";import{_ as L}from"./Checkbox.f6d06672.js";import{_}from"./InputError.9b8e4b38.js";import{_ as p}from"./InputLabel.8a84a250.js";import{_ as A}from"./PrimaryButton.8b35c603.js";import{_ as h}from"./TextInput.22169dfd.js";import"./ResponsiveNavLink.9ab9b8ea.js";import"./Banner.7e27dd2a.js";import"./DropdownLink.726166a2.js";import"./CartDropdown.1e7f7022.js";const a=l=>(V("data-v-be3d8f3e"),l=l(),F(),l),N={class:"container my-12 py-8"},$={class:"row g-5 align-center"},B={class:"col-sm-5"},C=["onSubmit"],E=a(()=>e("div",{class:"w-full"},[e("div",{class:"filament-brand text-xl font-bold tracking-tight"}," Affiliates Login ")],-1)),j={key:0,class:"my-4 font-medium text-sm text-green-600"},H={class:"mt-4"},M={class:"flex items-center justify-between mt-4"},U={class:""},W=a(()=>e("span",{class:"ml-2 text-sm text-gray-600"},"Remember me",-1)),O={class:"flex items-center mt-4"},P={class:"flex items-center mt-4"},R=a(()=>e("div",{class:"col-sm-7"},[e("img",{src:"/images/illustration.svg",alt:"",class:"flex mx-auto"})],-1)),T=a(()=>e("section",{class:"bg-green-100 py-5"},[e("div",{class:"container"},[e("div",{class:"row"},[e("h2",{class:"text-center mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-green-600 font-bold leading-tight"},"FAQs"),e("div",{class:"col-12"},[e("div",{class:"row mb-4"},[e("div",{class:"col-sm-4"},[e("h4",null,"What's the affiliate program?")]),e("div",{class:"col-sm-8"},[e("p",null,"We offer commission for each qualified referral who signs up and makes a purchase of any of our products through their affiliate link.")])]),e("div",{class:"row mb-4"},[e("div",{class:"col-sm-4"},[e("h4",null,"How much will I get paid?")]),e("div",{class:"col-sm-8"},[e("p",null,"It's a 10% commission on the administration cost for every order purchase and paid for using your unique link/code. For qualifications, check out our terms of service.")])]),e("div",{class:"row"},[e("div",{class:"col-sm-4"},[e("h4",null,"How will I get paid?")]),e("div",{class:"col-sm-8"},[e("p",null,"We pay commissions through Mpesa instant when we receive a payment from your referral.")])])])])])],-1)),z={class:"bg-gray-50 py-9"},D={class:"container"},Q={class:"row justify-content-center"},G={class:"col-6"},J=a(()=>e("p",null,"BECOME AN AFFILIATE",-1)),K=a(()=>e("h2",{class:"text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-green-500 font-bold leading-tight"},"Sign up fast, for free.",-1)),X=a(()=>e("p",null,"In just a few minutes, you'll have a unique tracking code.",-1)),Y=a(()=>e("p",null,"Send your unique code to your referrals, once they purchase any item, you earn",-1)),Z={__name:"Login",props:{canResetPassword:Boolean,status:String},setup(l){const s=v({email:"",password:"",remember_token:!1}),g=()=>{s.transform(n=>({...n,remember_token:s.remember_token?"on":""})).post(route("affiliates.post.signin"),{onFinish:()=>s.reset("password")})};return(n,i)=>(m(),u(w,null,[o(t(b),{title:"Affiliates Login"}),o(q,null,{default:c(()=>[e("div",N,[e("div",$,[e("div",B,[e("form",{onSubmit:y(g,["prevent"]),class:"p-5 bg-white/50 space-y-8 backdrop-blur-xl border border-gray-200 shadow rounded"},[E,l.status?(m(),u("div",j,k(l.status),1)):I("",!0),e("div",null,[o(p,{for:"email",value:"Email"}),o(h,{id:"email",modelValue:t(s).email,"onUpdate:modelValue":i[0]||(i[0]=r=>t(s).email=r),type:"email",class:"mt-1 block w-full",required:""},null,8,["modelValue"]),o(_,{class:"mt-2",message:t(s).errors.email},null,8,["message"])]),e("div",H,[o(p,{for:"password",value:"Password"}),o(h,{id:"password",modelValue:t(s).password,"onUpdate:modelValue":i[1]||(i[1]=r=>t(s).password=r),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"current-password"},null,8,["modelValue"]),o(_,{class:"mt-2",message:t(s).errors.password},null,8,["message"])]),e("div",M,[e("label",U,[o(L,{checked:t(s).remember_token,"onUpdate:checked":i[2]||(i[2]=r=>t(s).remember_token=r),name:"remember"},null,8,["checked"]),W])]),e("div",O,[o(A,{class:S(["w-full text-center block-must",{"opacity-25":t(s).processing}]),disabled:t(s).processing},{default:c(()=>[d(" Sign in ")]),_:1},8,["class","disabled"])]),e("div",P,[o(t(f),{href:n.route("password.request"),class:"text-primary-600 text-center text-decoration-none hover:text-primary-700"},{default:c(()=>[d(" Forgot your password? ")]),_:1},8,["href"])])],40,C)]),R])]),T,e("section",z,[e("div",D,[e("div",Q,[e("div",G,[J,K,X,Y,o(t(f),{class:"btn btn-primary text-white w-full",href:n.route("affiliates.register")},{default:c(()=>[d("Create an account")]),_:1},8,["href"])])])])])]),_:1})],64))}},me=x(Z,[["__scopeId","data-v-be3d8f3e"]]);export{me as default};
