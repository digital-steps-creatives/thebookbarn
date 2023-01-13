import{o as s,e as a,a as e,_ as M,U as S,l as L,V as B,F as g,i as $,t as m,f as o,d as A,b as l,h as v,H as P,w as r,L as k,c as u,g as i,j as b,n as w,r as C,k as T}from"./app.72b4eafe.js";import{A as z,_ as h}from"./ResponsiveNavLink.f7edcb93.js";import{_ as F}from"./Banner.07abfd77.js";import{_ as p,a as j}from"./DropdownLink.ebeb7372.js";import{C as q}from"./CartDropdown.d59b538b.js";const N={style:{"background-color":"#fff"},class:"pt-5"},D=e("div",{class:"max-w-7xl mx-auto divide-y divide-slate-200 px-4 sm:px-6 md:px-8 dark:divide-slate-700"},[e("div",{class:"container"},[e("div",{class:"row justify-content-center py-3"},[e("div",{class:"col-sm-4 col-12"},[e("span",null,"The Bookbarn | \xA9 2022 All Rights Reserved")])])])],-1),I=[D],V={__name:"TheFooter",setup(c){return(d,f)=>(s(),a("footer",N,I))}},O={data(){return{query:null,results:[]}},watch:{query(c,d){this.searchProducts()}},methods:{searchProducts(){axios.get(route("products.search"),{params:{query:this.query}}).then(c=>this.results=c.data).catch(c=>{})},addToCart(c){S.dispatch("cart/addToCart",c)}}},H={class:"relative"},R=e("button",{type:"submit",class:"absolute right-0 top-0 mt-3 mr-2"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6 text-green-600"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"})])],-1),U={key:0,class:"absolute bg-gray-100 p-4 w-full rounded-r-lg rounded-l-lg",style:{"z-index":"100",height:"350px","overflow-y":"scroll","padding-bottom":"2rem"}},E=["href"],G=["src","alt"],J=["textContent"],K=["onClick"],Q=e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"mr-2 -ml-1 w-5 h-5"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 4.5v15m7.5-7.5h-15"})],-1),W=e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"})],-1),X=[Q,W];function Y(c,d,f,y,t,_){return s(),a("div",H,[L(e("input",{"onUpdate:modelValue":d[0]||(d[0]=n=>t.query=n),type:"text",id:"email-address-icon",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-3 py-3",placeholder:"search over 100s products"},null,512),[[B,t.query]]),R,t.results.length>0&&t.query?(s(),a("ul",U,[(s(!0),a(g,null,$(t.results.slice(0,10),n=>(s(),a("li",{key:n.id,class:"border-b mb-2 pb-2"},[e("a",{href:n.url,class:"flex justify-between text-decoration-none"},[e("img",{src:n.searchable.featured_image,alt:n.title,class:"w-14 rounded mr-4"},null,8,G),e("div",{textContent:m(n.title),class:"text-green-700 font-normal text-sm text-left text-decoration-none mt-2"},null,8,J),e("button",{onClick:x=>_.addToCart(n.searchable),class:"text-white bg-green-600 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-300 font-normal rounded-lg text-sm px-3 py-1 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"},X,8,K)],8,E)]))),128))])):o("",!0)])}const Z=M(O,[["render",Y]]),ee={class:"min-h-screen bg-gray-100"},te={class:"bg-white border-b border-gray-100 py-3"},se={class:"container"},re={class:"row"},oe={class:"col-sm-3 col-6"},ae={class:"shrink-0 flex items-center mr-8"},ne={class:"col-sm-5 hidden sm:block"},ie={class:"relative mt-4 hidden sm:block"},le={class:"col-sm-4 col-4"},de={class:"flex justify-between"},ue={class:"sm:mt-4 mt-4 relative"},ce={class:"flex justify-between"},he={class:"sm:py-3 sm:pt-0 hidden sm:block"},pe={class:"flex"},me=e("span",{class:"text-green-500 hover:text-red-500"},"Log In",-1),ge=e("span",{class:"px-2 pt-2.5"},"|",-1),fe=e("span",{class:"text-green-500 hover:text-red-500"},"Affiliates Log In",-1),_e={class:"inline-flex rounded-md"},ve={type:"button",class:"inline-flex items-center px-3 py-3 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50 transition"},be=e("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{"fill-rule":"evenodd",d:"M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),ye={class:"w-60"},ke=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Team ",-1),we=e("div",{class:"border-t border-gray-100"},null,-1),$e=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Switch Teams ",-1),xe=["onSubmit"],Ce={class:"flex items-center"},Te={key:0,class:"mr-2 h-5 w-5 text-green-400",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",stroke:"currentColor",viewBox:"0 0 24 24"},je=e("path",{d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),Me=[je],Se={key:0,class:"ml-3 mt-4 relative hidden sm:block"},Le={key:0,class:"flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition"},Be=["src","alt"],Ae={key:1,class:"inline-flex rounded-md"},Pe={type:"button",class:"inline-flex items-center px-3 py-2 sm:py-3-6 border-0 border-transparent text-md leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition"},ze=e("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),Fe=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Account ",-1),qe=e("div",{class:"border-t border-gray-100"},null,-1),Ne=["onSubmit"],De={class:"col-2"},Ie={class:"flex items-center sm:hidden"},Ve={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},Oe={class:"pt-2 pb-3 space-y-1"},He={key:0,class:"pt-4 pb-1 border-t border-gray-200"},Re={class:"flex items-center px-4"},Ue={key:0,class:"shrink-0 mr-3"},Ee=["src","alt"],Ge={class:"font-medium text-base text-gray-800"},Je={class:"font-medium text-sm text-gray-500"},Ke={class:"mt-3 space-y-1"},Qe=["onSubmit"],We=e("div",{class:"border-t border-gray-200"},null,-1),Xe=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Team ",-1),Ye=e("div",{class:"border-t border-gray-200"},null,-1),Ze=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Switch Teams ",-1),et=["onSubmit"],tt={class:"flex items-center"},st={key:0,class:"mr-2 h-5 w-5 text-green-400",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",stroke:"currentColor",viewBox:"0 0 24 24"},rt=e("path",{d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),ot=[rt],at={key:0,class:"bg-white shadow"},nt={class:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"},ht={__name:"FrontLayout",props:{title:String,greetings:String},setup(c){const d=A(!1),f=t=>{T.Inertia.put(route("current-team.update"),{team_id:t.id},{preserveState:!1})},y=()=>{T.Inertia.post(route("logout"))};return(t,_)=>(s(),a("div",null,[l(v(P),{title:c.title},null,8,["title"]),l(F),e("div",ee,[e("nav",te,[e("div",se,[e("div",re,[e("div",oe,[e("div",ae,[l(v(k),{href:"/",class:"logo"},{default:r(()=>[l(z,{class:"block w-auto",style:{height:"90px"}})]),_:1})])]),e("div",ne,[e("div",ie,[l(Z)])]),e("div",le,[e("div",de,[e("div",ue,[e("div",ce,[l(q,{class:"sm:py-3 sm:pt-0"}),e("div",he,[e("div",pe,[t.$page.props.user?o("",!0):(s(),u(v(k),{key:0,class:"mr-2 flex text-decoration-none sm:my-3",href:t.route("login")},{default:r(()=>[me]),_:1},8,["href"])),ge,t.$page.props.user?o("",!0):(s(),u(v(k),{key:1,class:"mr-2 flex text-decoration-none sm:my-3",href:t.route("affiliates.landing")},{default:r(()=>[fe]),_:1},8,["href"]))])])]),t.$page.props.jetstream.hasTeamFeatures?(s(),u(j,{key:0,align:"right",width:"60"},{trigger:r(()=>[e("span",_e,[e("button",ve,[i(m(c.greetings)+" "+m(t.$page.props.user.current_team.name)+" ",1),be])])]),content:r(()=>[e("div",ye,[t.$page.props.jetstream.hasTeamFeatures?(s(),a(g,{key:0},[ke,l(p,{href:t.route("teams.show",t.$page.props.user.current_team)},{default:r(()=>[i(" Team Settings ")]),_:1},8,["href"]),t.$page.props.jetstream.canCreateTeams?(s(),u(p,{key:0,href:t.route("teams.create")},{default:r(()=>[i(" Create New Team ")]),_:1},8,["href"])):o("",!0),we,$e,(s(!0),a(g,null,$(t.$page.props.user.all_teams,n=>(s(),a("form",{key:n.id,onSubmit:b(x=>f(n),["prevent"])},[l(p,{as:"button"},{default:r(()=>[e("div",Ce,[n.id==t.$page.props.user.current_team_id?(s(),a("svg",Te,Me)):o("",!0),e("div",null,m(n.name),1)])]),_:2},1024)],40,xe))),128))],64)):o("",!0)])]),_:1})):o("",!0)]),t.$page.props.user?(s(),a("div",Se,[l(j,{align:"right",width:"48"},{trigger:r(()=>[t.$page.props.jetstream.managesProfilePhotos?(s(),a("button",Le,[e("img",{class:"h-8 w-8 rounded-full object-cover",src:t.$page.props.user.profile_photo_url,alt:t.$page.props.user.name},null,8,Be)])):(s(),a("span",Ae,[e("button",Pe,[i(m(t.$page.props.user.name)+" ",1),ze])]))]),content:r(()=>[Fe,l(p,{href:t.route("profile.show")},{default:r(()=>[i(" Profile ")]),_:1},8,["href"]),!t.$page.props.user.role==="teacher"||!t.$page.props.user.role==="other"?(s(),u(p,{key:0,href:t.route("myorders")},{default:r(()=>[i(" My Orders ")]),_:1},8,["href"])):o("",!0),t.$page.props.user.role==="teacher"||t.$page.props.user.role==="other"?(s(),u(p,{key:1,href:t.route("affiliates.dashboard")},{default:r(()=>[i(" My Dashboard ")]),_:1},8,["href"])):o("",!0),t.$page.props.jetstream.hasApiFeatures?(s(),u(p,{key:2,href:t.route("api-tokens.index")},{default:r(()=>[i(" API Tokens ")]),_:1},8,["href"])):o("",!0),qe,e("form",{onSubmit:b(y,["prevent"])},[l(p,{as:"button"},{default:r(()=>[i(" Log Out ")]),_:1})],40,Ne)]),_:1})])):o("",!0)])]),e("div",De,[e("div",Ie,[e("button",{class:"inline-flex items-center border rounded-lg mt-3 justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition",onClick:_[0]||(_[0]=n=>d.value=!d.value)},[(s(),a("svg",Ve,[e("path",{class:w({hidden:d.value,"inline-flex":!d.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),e("path",{class:w({hidden:!d.value,"inline-flex":d.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])])])]),e("div",{class:w([{block:d.value,hidden:!d.value},"sm:hidden"])},[e("div",Oe,[t.$page.props.user?(s(),u(h,{key:0,href:t.route("dashboard"),active:t.route().current("dashboard")},{default:r(()=>[i(" Dashboard ")]),_:1},8,["href","active"])):o("",!0),t.$page.props.user?o("",!0):(s(),u(h,{key:1,href:t.route("dashboard"),active:t.route().current("dashboard")},{default:r(()=>[i(" Customer Login ")]),_:1},8,["href","active"])),t.$page.props.user?o("",!0):(s(),u(h,{key:2,href:t.route("affiliates.landing"),active:t.route().current("affiliates.landing")},{default:r(()=>[i(" Affiliate Login ")]),_:1},8,["href","active"]))]),t.$page.props.user?(s(),a("div",He,[e("div",Re,[t.$page.props.jetstream.managesProfilePhotos?(s(),a("div",Ue,[e("img",{class:"h-10 w-10 rounded-full object-cover",src:t.$page.props.user.profile_photo_url,alt:t.$page.props.user.name},null,8,Ee)])):o("",!0),e("div",null,[e("div",Ge,m(t.$page.props.user.name),1),e("div",Je,m(t.$page.props.user.email),1)])]),e("div",Ke,[l(h,{href:t.route("profile.show"),active:t.route().current("profile.show")},{default:r(()=>[i(" Profile ")]),_:1},8,["href","active"]),!t.$page.props.user.role==="teacher"||!t.$page.props.user.role==="other"?(s(),u(h,{key:0,href:t.route("myorders")},{default:r(()=>[i(" My Orders ")]),_:1},8,["href"])):o("",!0),t.$page.props.jetstream.hasApiFeatures?(s(),u(h,{key:1,href:t.route("api-tokens.index"),active:t.route().current("api-tokens.index")},{default:r(()=>[i(" API Tokens ")]),_:1},8,["href","active"])):o("",!0),e("form",{method:"POST",onSubmit:b(y,["prevent"])},[l(h,{as:"button"},{default:r(()=>[i(" Log Out ")]),_:1})],40,Qe),t.$page.props.jetstream.hasTeamFeatures?(s(),a(g,{key:2},[We,Xe,l(h,{href:t.route("teams.show",t.$page.props.user.current_team),active:t.route().current("teams.show")},{default:r(()=>[i(" Team Settings ")]),_:1},8,["href","active"]),t.$page.props.jetstream.canCreateTeams?(s(),u(h,{key:0,href:t.route("teams.create"),active:t.route().current("teams.create")},{default:r(()=>[i(" Create New Team ")]),_:1},8,["href","active"])):o("",!0),Ye,Ze,(s(!0),a(g,null,$(t.$page.props.user.all_teams,n=>(s(),a("form",{key:n.id,onSubmit:b(x=>f(n),["prevent"])},[l(h,{as:"button"},{default:r(()=>[e("div",tt,[n.id==t.$page.props.user.current_team_id?(s(),a("svg",st,ot)):o("",!0),e("div",null,m(n.name),1)])]),_:2},1024)],40,et))),128))],64)):o("",!0)])])):o("",!0)],2)]),t.$slots.header?(s(),a("header",at,[e("div",nt,[C(t.$slots,"header")])])):o("",!0),e("main",null,[C(t.$slots,"default")]),l(V)])]))}};export{Z as S,ht as _};
