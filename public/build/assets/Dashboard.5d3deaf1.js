import{_ as h}from"./AppLayout.0075d409.js";import{d,u as p,o as a,c as g,w as i,a as e,t as n,h as l,e as r,b as x,V as m}from"./app.c8ed5195.js";import{F as u}from"./inertiajs-tables-laravel-query-builder.es.f240b2f3.js";import"./ResponsiveNavLink.7cde0fd6.js";import"./Banner.a041f3e7.js";import"./DropdownLink.8bb0b36d.js";import"./NavLink.3a584a96.js";const f=e("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Dashboard ",-1),v={class:"py-12"},b={class:"max-w-7xl mx-auto sm:px-6 lg:px-4"},y={class:"mb-5"},w={class:"font-bold text-xl text-gray-800 leading-none mb-4"},k=e("h2",{class:"font-normal text-2xl text-primary"},"Affiliate Program",-1),C=e("p",null,"Share your referral code to potential customers and earn a commission.",-1),B={class:"overflow-hidden shadow-xl sm:rounded-lg mb-4"},D=e("div",{class:"bg-green-600 px-5 py-2 flex justify-between"},[e("div",null,[e("h4",{class:"text-white"},"Affiliate Stats")]),e("div",null,[e("span",{class:"text-white"},"(Updates after every 30 minutes)")])],-1),S={class:"px-5 py-4 pb-5 bg-white"},j={class:"grid grid-cols-4 gap-4"},F=e("div",{class:"p-4 bg-green-100 rounded-xl text-gray-800"},[e("div",{class:"font-bold text-2xl leading-none"},"0"),e("div",{class:"mt-2"},"Referrals")],-1),R={class:"p-4 bg-green-100 rounded-xl text-gray-800"},V={class:"font-bold text-2xl leading-none"},A=e("div",{class:"mt-2"},"Ref Codes Generate",-1),E=e("div",{class:"p-4 bg-green-100 rounded-xl text-gray-800"},[e("div",{class:"font-bold text-2xl leading-none"},"0"),e("div",{class:"mt-2"},"Total Earnings")],-1),G=e("div",{class:"p-4 bg-green-100 rounded-xl text-gray-800"},[e("div",{class:"font-bold text-2xl leading-none"},"0"),e("div",{class:"mt-2"},"Paid Commissions")],-1),N={class:"overflow-hidden shadow-xl sm:rounded-lg"},P={class:"bg-green-600 px-5 py-2 flex justify-between"},$=e("h4",{class:"text-white mb-0"},"Referral Codes",-1),q={key:0,class:"spinner-border spinner-border-sm text-light",role:"status"},L=e("span",{class:"visually-hidden"},"Loading...",-1),O=[L],T={key:1},U={class:"px-5 py-4 pb-5 bg-white"},z={class:"row"},H={class:"col-sm-12",id:"unstyle"},Z={__name:"Dashboard",props:{refcodes:Object,greetings:String},setup(s){const c=d(null),_=()=>{t.value=!0,m.post(route("referral.code.create")).then(o=>{c.value=o.data.referral,window.location.reload(),t.value=!1})},t=d(!1);return p({code:""}),(o,I)=>(a(),g(h,{title:"Dashboard"},{header:i(()=>[f]),default:i(()=>[e("div",v,[e("div",b,[e("div",y,[e("div",w,n(s.greetings)+", "+n(o.$page.props.user.name),1),k,C]),e("div",B,[D,e("div",S,[e("div",j,[F,e("div",R,[e("div",V,n(s.refcodes.data.length),1),A]),E,G])])]),e("div",N,[e("div",P,[$,e("button",{type:"submit",class:"btn btn-primary block text-white",onClick:_},[l(t)?(a(),r("div",q,O)):(a(),r("span",T,"Generate ref code"))])]),e("div",U,[e("div",z,[e("div",H,[x(l(u),{striped:!0,"prevent-overlapping-requests":!1,"input-debounce-ms":1e3,"prevent-scroll":!0,resource:s.refcodes},null,8,["resource"])])])])])])])]),_:1}))}};export{Z as default};
