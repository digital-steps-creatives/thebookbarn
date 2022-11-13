import{L as M,aS as r,ae as n,am as o,W as y,af as e,bk as s,al as a,ac as h,_ as c,a1 as m,ad as i,aX as k,bH as f,X as _,aY as w}from"./runtime-dom.esm-bundler.585c24df.js";import{H as C,L,d as x}from"./app.f1de3385.js";import{_ as A,A as B,a as p,b as $,c as u}from"./ResponsiveNavLink.baeb7a52.js";import{_ as T}from"./NavLink.0007d28d.js";const P={class:"min-h-screen bg-gray-50"},N={class:"bg-white border-b border-gray-100 py-4"},z={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},F={class:"flex justify-between h-16"},D={class:"flex"},I={class:"shrink-0 flex items-center"},O={class:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"},V={class:"hidden sm:flex sm:items-center sm:ml-6"},H={class:"ml-3 relative"},X={class:"inline-flex rounded-md"},E={type:"button",class:"inline-flex items-center px-3 py-3 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50 transition"},W=e("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{"fill-rule":"evenodd",d:"M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),Y={class:"w-60"},q=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Team ",-1),G=e("div",{class:"border-t border-gray-100"},null,-1),J=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Switch Teams ",-1),K=["onSubmit"],Q={class:"flex items-center"},R={key:0,class:"mr-2 h-5 w-5 text-green-400",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",stroke:"currentColor",viewBox:"0 0 24 24"},U=e("path",{d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),Z=[U],ee={class:"ml-3 relative"},te={key:0,class:"flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition"},se=["src","alt"],re={key:1,class:"inline-flex rounded-md"},oe={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition"},ae=e("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),ne=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Account ",-1),ie=e("div",{class:"border-t border-gray-100"},null,-1),le=["onSubmit"],de={class:"-mr-2 flex items-center sm:hidden"},ue={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},ce={class:"pt-2 pb-3 space-y-1"},pe={class:"pt-4 pb-1 border-t border-gray-200"},he={class:"flex items-center px-4"},me={key:0,class:"shrink-0 mr-3"},fe=["src","alt"],_e={class:"font-medium text-base text-gray-800"},ge={class:"font-medium text-sm text-gray-500"},ve={class:"mt-3 space-y-1"},be=["onSubmit"],ye=e("div",{class:"border-t border-gray-200"},null,-1),ke=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Team ",-1),we=e("div",{class:"border-t border-gray-200"},null,-1),xe=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Switch Teams ",-1),$e=["onSubmit"],Te={class:"flex items-center"},Se={key:0,class:"mr-2 h-5 w-5 text-green-400",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",stroke:"currentColor",viewBox:"0 0 24 24"},je=e("path",{d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),Me=[je],Ce={key:0,class:"bg-gray-100"},Le={class:"max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8"},ze={__name:"AppLayout",props:{title:String},setup(S){const d=M(!1),g=t=>{x.Inertia.put(route("current-team.update"),{team_id:t.id},{preserveState:!1})},v=()=>{x.Inertia.post(route("logout"))};return(t,b)=>(r(),n("div",null,[o(y(C),{title:S.title},null,8,["title"]),o(A),e("div",P,[e("nav",N,[e("div",z,[e("div",F,[e("div",D,[e("div",I,[o(y(L),{href:"/"},{default:s(()=>[o(B,{class:"block w-auto",style:{height:"90px"}})]),_:1})]),e("div",O,[o(T,{href:t.route("dashboard"),active:t.route().current("dashboard")},{default:s(()=>[a(" Dashboard ")]),_:1},8,["href","active"]),o(T,{href:t.route("myorders"),active:t.route().current("myorders")},{default:s(()=>[a(" My Orders ")]),_:1},8,["href","active"])])]),e("div",V,[e("div",H,[t.$page.props.jetstream.hasTeamFeatures?(r(),h($,{key:0,align:"right",width:"60"},{trigger:s(()=>[e("span",X,[e("button",E,[a(c(t.$page.props.user.current_team.name)+" ",1),W])])]),content:s(()=>[e("div",Y,[t.$page.props.jetstream.hasTeamFeatures?(r(),n(m,{key:0},[q,o(p,{href:t.route("teams.show",t.$page.props.user.current_team)},{default:s(()=>[a(" Team Settings ")]),_:1},8,["href"]),t.$page.props.jetstream.canCreateTeams?(r(),h(p,{key:0,href:t.route("teams.create")},{default:s(()=>[a(" Create New Team ")]),_:1},8,["href"])):i("",!0),G,J,(r(!0),n(m,null,k(t.$page.props.user.all_teams,l=>(r(),n("form",{key:l.id,onSubmit:f(j=>g(l),["prevent"])},[o(p,{as:"button"},{default:s(()=>[e("div",Q,[l.id==t.$page.props.user.current_team_id?(r(),n("svg",R,Z)):i("",!0),e("div",null,c(l.name),1)])]),_:2},1024)],40,K))),128))],64)):i("",!0)])]),_:1})):i("",!0)]),e("div",ee,[o($,{align:"right",width:"48"},{trigger:s(()=>[t.$page.props.jetstream.managesProfilePhotos?(r(),n("button",te,[e("img",{class:"h-8 w-8 rounded-full object-cover",src:t.$page.props.user.profile_photo_url,alt:t.$page.props.user.name},null,8,se)])):(r(),n("span",re,[e("button",oe,[a(c(t.$page.props.user.name)+" ",1),ae])]))]),content:s(()=>[ne,o(p,{href:t.route("profile.show")},{default:s(()=>[a(" Profile ")]),_:1},8,["href"]),t.$page.props.jetstream.hasApiFeatures?(r(),h(p,{key:0,href:t.route("api-tokens.index")},{default:s(()=>[a(" API Tokens ")]),_:1},8,["href"])):i("",!0),ie,e("form",{onSubmit:f(v,["prevent"])},[o(p,{as:"button"},{default:s(()=>[a(" Log Out ")]),_:1})],40,le)]),_:1})])]),e("div",de,[e("button",{class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition",onClick:b[0]||(b[0]=l=>d.value=!d.value)},[(r(),n("svg",ue,[e("path",{class:_({hidden:d.value,"inline-flex":!d.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),e("path",{class:_({hidden:!d.value,"inline-flex":d.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])])]),e("div",{class:_([{block:d.value,hidden:!d.value},"sm:hidden"])},[e("div",ce,[o(u,{href:t.route("dashboard"),active:t.route().current("dashboard")},{default:s(()=>[a(" Dashboard ")]),_:1},8,["href","active"])]),e("div",pe,[e("div",he,[t.$page.props.jetstream.managesProfilePhotos?(r(),n("div",me,[e("img",{class:"h-10 w-10 rounded-full object-cover",src:t.$page.props.user.profile_photo_url,alt:t.$page.props.user.name},null,8,fe)])):i("",!0),e("div",null,[e("div",_e,c(t.$page.props.user.name),1),e("div",ge,c(t.$page.props.user.email),1)])]),e("div",ve,[o(u,{href:t.route("profile.show"),active:t.route().current("profile.show")},{default:s(()=>[a(" Profile ")]),_:1},8,["href","active"]),t.$page.props.jetstream.hasApiFeatures?(r(),h(u,{key:0,href:t.route("api-tokens.index"),active:t.route().current("api-tokens.index")},{default:s(()=>[a(" API Tokens ")]),_:1},8,["href","active"])):i("",!0),e("form",{method:"POST",onSubmit:f(v,["prevent"])},[o(u,{as:"button"},{default:s(()=>[a(" Log Out ")]),_:1})],40,be),t.$page.props.jetstream.hasTeamFeatures?(r(),n(m,{key:1},[ye,ke,o(u,{href:t.route("teams.show",t.$page.props.user.current_team),active:t.route().current("teams.show")},{default:s(()=>[a(" Team Settings ")]),_:1},8,["href","active"]),t.$page.props.jetstream.canCreateTeams?(r(),h(u,{key:0,href:t.route("teams.create"),active:t.route().current("teams.create")},{default:s(()=>[a(" Create New Team ")]),_:1},8,["href","active"])):i("",!0),we,xe,(r(!0),n(m,null,k(t.$page.props.user.all_teams,l=>(r(),n("form",{key:l.id,onSubmit:f(j=>g(l),["prevent"])},[o(u,{as:"button"},{default:s(()=>[e("div",Te,[l.id==t.$page.props.user.current_team_id?(r(),n("svg",Se,Me)):i("",!0),e("div",null,c(l.name),1)])]),_:2},1024)],40,$e))),128))],64)):i("",!0)])])],2)]),t.$slots.header?(r(),n("header",Ce,[e("div",Le,[w(t.$slots,"header")])])):i("",!0),e("main",null,[w(t.$slots,"default")])])]))}};export{ze as _};
