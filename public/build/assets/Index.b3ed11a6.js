import{A as c}from"./AdminLayout.d14fa1ac.js";import{F as f}from"./inertiajs-tables-laravel-query-builder.es.26dfb7da.js";import{o as a,c as p,w as t,a as e,b as i,g as m,e as l,i as u,t as _,F as h,h as x,D as v}from"./app.7d6af713.js";import"./DropdownLink.c3ce3055.js";const g=e("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Affiliates ",-1),b={class:"py-12"},w={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},y={class:"bg-white pt-4 overflow-hidden shadow-xl sm:rounded-lg"},k={class:"toolbar px-4 justify-end flex"},A=["href"],j={__name:"Index",props:{affiliates:Object},setup(n){return(o,B)=>{const d=v("Link");return a(),p(c,{title:"Affiliates"},{header:t(()=>[g]),default:t(()=>[e("div",b,[e("div",w,[e("div",y,[e("div",k,[i(d,{href:o.route("admin.add.product"),class:"mb-2 btn btn-primary text-white"},{default:t(()=>[m("Add affiliate")]),_:1},8,["href"])]),i(x(f),{striped:!0,"prevent-overlapping-requests":!1,"input-debounce-ms":1e3,"prevent-scroll":!0,resource:n.affiliates},{"cell(actions)":t(({item:s})=>[e("a",{href:o.route("admin.view.affiliate",s.id)}," View ",8,A)]),"cell(code)":t(({item:s})=>[(a(!0),l(h,null,u(s.referrals,r=>(a(),l("div",{key:r.id},_(r.ref_code),1))),128))]),_:1},8,["resource"])])])])]),_:1})}}};export{j as default};
