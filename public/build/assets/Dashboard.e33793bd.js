import{_ as h}from"./AppLayout.591e84a8.js";import{d as c,u as m,o as s,c as u,w as i,a as e,t,h as _,e as a,b as g,f,C as b}from"./app.7d6af713.js";import{F as v}from"./inertiajs-tables-laravel-query-builder.es.26dfb7da.js";import"./ResponsiveNavLink.e5b1ac25.js";import"./Banner.2ef573a6.js";import"./DropdownLink.c3ce3055.js";import"./NavLink.813551b7.js";const y=e("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Dashboard ",-1),w={class:"py-12"},k={class:"max-w-7xl mx-auto sm:px-6 lg:px-4 px-4"},C={class:"mb-5"},B={class:"font-bold text-xl text-gray-800 leading-none mb-4"},D=e("h2",{class:"font-normal text-2xl text-primary"},"Affiliate Program",-1),S=e("p",null,"Share your referral code to potential customers and earn a commission.",-1),j={class:"overflow-hidden shadow-sm sm:rounded-lg mb-4"},F=e("div",{class:"bg-green-600 sm:px-5 py-2 sm:flex block justify-between px-4"},[e("div",null,[e("h4",{class:"text-white"},"Affiliate Stats")]),e("div",null,[e("span",{class:"text-white"},"(Updates after every 30 minutes)")])],-1),N={class:"sm:px-5 px-3 py-4 pb-5 bg-white"},R={class:"grid grid-cols-2 sm:grid-cols-4 gap-4"},V=e("div",{class:"p-4 bg-green-100 rounded-xl text-gray-800"},[e("div",{class:"font-bold text-2xl leading-none"},"0"),e("div",{class:"mt-2"},"Referrals")],-1),A={class:"p-4 bg-green-100 rounded-xl text-gray-800"},E={class:"font-bold text-2xl leading-none"},G=e("div",{class:"mt-2"},"Ref Codes Generate",-1),P=e("div",{class:"p-4 bg-green-100 rounded-xl text-gray-800"},[e("div",{class:"font-bold text-2xl leading-none"},"0"),e("div",{class:"mt-2"},"Total Earnings")],-1),$=e("div",{class:"p-4 bg-green-100 rounded-xl text-gray-800"},[e("div",{class:"font-bold text-2xl leading-none"},"0"),e("div",{class:"mt-2"},"Paid Commissions")],-1),q={class:"overflow-hidden shadow-sm sm:rounded-lg"},L={class:"bg-green-600 sm:px-5 py-2 sm:flex block justify-between px-4"},O=e("h4",{class:"text-white mb-2"},"Referral Codes",-1),T={key:0,class:"spinner-border spinner-border-sm text-light",role:"status"},U=e("span",{class:"visually-hidden"},"Loading...",-1),z=[U],H={key:1},I={class:"sm:px-5 px-0 py-4 pb-5 bg-white"},J={class:"row"},K={class:"col-sm-12",id:"unstyle"},M={key:0,class:"bg-sky-400 inline-flex text-center px-3 py-1.5 rounded-full text-white text-xs"},Q={key:1,class:"bg-teal-400 px-3 py-1.5 inline-flex text-center rounded-full text-white text-xs"},oe={__name:"Dashboard",props:{refcodes:Object,greetings:String},setup(n){const x=c(null),p=l=>{d.value=!0,b.post(route("referral.code.create")).then(r=>{x.value=r.data.referral,window.location.reload(),d.value=!1})},d=c(!1);return m({code:""}),(l,r)=>(s(),u(h,{title:"Dashboard"},{header:i(()=>[y]),default:i(()=>[e("div",w,[e("div",k,[e("div",C,[e("div",B,t(n.greetings)+", "+t(l.$page.props.user.name),1),D,S]),e("div",j,[F,e("div",N,[e("div",R,[V,e("div",A,[e("div",E,t(n.refcodes.data.length),1),G]),P,$])])]),e("div",q,[e("div",L,[O,e("button",{type:"submit",class:"btn btn-primary block text-white",onClick:p},[_(d)?(s(),a("div",T,z)):(s(),a("span",H,"Generate ref code"))])]),e("div",I,[e("div",J,[e("div",K,[g(_(v),{striped:!0,"prevent-overlapping-requests":!1,"input-debounce-ms":1e3,"prevent-scroll":!0,resource:n.refcodes},{"cell(status)":i(({item:o})=>[e("div",null,[o.status==="not used"?(s(),a("span",M,t(o.status),1)):o.status==="used"?(s(),a("span",Q,t(o.status),1)):f("",!0)])]),_:1},8,["resource"])])])])])])])]),_:1}))}};export{oe as default};
