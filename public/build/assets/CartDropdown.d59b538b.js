import{_,o as s,e as o,a as t,r as f,l as v,v as w,b as c,w as m,n as b,T as $,j as F,L as j,Q as T,R as L,D as h,t as l,f as x,g as p,F as M,i as E}from"./app.72b4eafe.js";const N={props:{align:{default:"right"},width:{default:"48"},contentClasses:{default:()=>["bg-white"]}},data(){return{open:!1}},methods:{closeOnEscape(e){this.open&&e.keyCode===27&&(this.open=!1)},close(){this.open=!1}},computed:{widthClass(){return{40:"w-40",44:"w-44",48:"w-48",64:"w-64",72:"w-72",80:"w-80"}[this.width.toString()]},alignmentClasses(){return this.align==="left"?"origin-top-left left-0":this.align==="right"?"origin-top-right right-0":"origin-top"}},mounted(){document.addEventListener("keydown",this.closeOnEscape)},unmounted(){document.removeEventListener("keydown",this.closeOnEscape)}},Q={class:"relative"};function B(e,n,r,y,a,d){return s(),o("div",Q,[t("div",{onClick:n[0]||(n[0]=u=>a.open=!a.open)},[f(e.$slots,"trigger")]),v(t("div",{class:"fixed inset-0 z-40",onClick:n[1]||(n[1]=u=>a.open=!1)},null,512),[[w,a.open]]),c($,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:m(()=>[v(t("div",{class:b(["absolute z-50 mt-2 rounded-lg shadow-lg",[d.widthClass,d.alignmentClasses]]),style:{display:"none"}},[t("div",{class:b(["rounded-lg ring-1 ring-black ring-opacity-5 overflow-hidden",r.contentClasses])},[f(e.$slots,"content",{close:d.close})],2)],2),[[w,a.open]])]),_:3})])}const S=_(N,[["render",B]]),z={},D={xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6 text-gray-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},V=t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"},null,-1),P=[V];function O(e,n){return s(),o("svg",D,P)}const A=_(z,[["render",O]]),H={props:{type:{type:String,default:"submit",validator:e=>["submit","button"].includes(e)},disabled:{type:Boolean,default:!1}}},R=["type","disabled"],U=["type","disabled"];function G(e,n,r,y,a,d){return r.type!=="submit"?(s(),o("button",{key:0,onClick:n[0]||(n[0]=F(u=>e.$emit("click"),["prevent"])),type:r.type,disabled:r.disabled,class:"inline-flex items-center justify-center px-6 py-2 bg-primary border border-transparent rounded-lg text-sm text-white hover:bg-primary-600 active:bg-primary-700 focus:outline-none focus:border-primary-700 focus:ring focus:ring-primary-200 transition whitespace-nowrap"},[f(e.$slots,"default")],8,R)):(s(),o("button",{key:1,type:r.type,disabled:r.disabled,class:"inline-flex items-center justify-center px-6 py-2 bg-primary border border-transparent rounded-lg text-sm text-white hover:bg-primary-600 active:bg-primary-700 focus:outline-none focus:border-primary-700 focus:ring focus:ring-primary-200 transition whitespace-nowrap"},[f(e.$slots,"default")],8,U))}const K=_(H,[["render",G]]),Y={components:{Dropdown:S,Link:j,CartIcon:A,FormButton:K},computed:{...T({cartItems:"cart/getCartItems",totalItems:"cart/getTotalItem",totalPrice:"cart/getTotalPrice"})},methods:{gotoCart(){window.location.href=route("cart")},...L({cartItemQuantity:"cart/CART_ITEM_QUANTITY"}),removeFromCart(e){store.dispatch("cart/removeFromCart",e)},changedQuantity(e,n){this.cartItemQuantity({item:n,val:e})},currencyFormat(e){return"Kes "+new Intl.NumberFormat("en-US").format(Math.round(e))}}},q={class:"flex items-center h-full pr-4 lg:px-6"},J={class:"cursor-pointer border p-3 rounded-lg inline-flex"},W={key:0,class:"absolute -top-2.5 -right-2.5 bg-primary-500 h-5 w-5 rounded-full flex items-center justify-center"},X={class:"inline-block mb-0 text-xs text-white whitespace-nowrap"},Z={class:"bg-white"},ee={key:0},te={class:"bg-primary text-white py-2 px-3"},se={class:"text-center text-sm tracking-wider"},oe={key:0},ne={key:1},re={class:"overflow-y-auto",style:{height:"295px"}},ie={class:"flex items-center justify-between"},ae={class:"flex"},le={class:"h-16 w-16 border rounded-lg overflow-hidden"},ce=["src","alt"],de={class:"ml-3 mt-2 text-sm"},ue={class:"block font-semibold"},pe=t("span",null,"not available",-1),me={key:0},he={class:"ml-2",style:{"text-decoration":"line-through"}},fe={key:1},_e=t("div",{class:"flex items-center justify-between font-semibold text-sm mt-4"},[t("span",null,"Cost"),t("span",null,"awaiting Quotation")],-1),ye={class:"py-3 px-4 bg-gray-50"},ge=t("div",{class:"text-right flex items-center justify-between font-semibold text-sm mt-1"},[t("span",null,"Total cost"),t("span",{class:"text-red-600"},"Pending Quotation")],-1),ve={key:1,class:"py-3 px-4 h-16 flex items-center justify-center"},we={class:"cursor-pointer relative"},be={key:0,class:"absolute -top-2.5 -right-2.5 bg-primary h-5 w-5 rounded-full flex items-center justify-center"},xe={class:"inline-block mb-0 text-xs text-white whitespace-nowrap"};function ke(e,n,r,y,a,d){const u=h("CartIcon"),k=h("remove-icon-button"),g=h("Link"),C=h("dropdown");return s(),o("div",q,[c(C,{width:"72",class:"hidden md:flex"},{trigger:m(()=>[t("div",J,[c(u,{class:"relative"}),e.cartItems&&e.cartItems.length?(s(),o("div",W,[t("span",X,l(e.totalItems),1)])):x("",!0)])]),content:m(({close:Ce})=>[t("div",Z,[e.cartItems&&e.cartItems.length?(s(),o("div",ee,[t("div",te,[t("p",se,[p(l(e.totalItems)+" ",1),e.totalItems>1?(s(),o("span",oe,"products")):(s(),o("span",ne,"product")),p(" added to your list")])]),t("div",re,[(s(!0),o(M,null,E(e.cartItems,(i,I)=>(s(),o("div",{class:"p-3 border-b border-gray-100",key:I},[t("div",ie,[t("div",ae,[t("div",le,[t("img",{src:i.featured_image,class:"w-full h-full object-cover",alt:i.name},null,8,ce)]),t("div",de,[t("h6",ue,l(i.name),1),t("span",null,[p("Price: "),pe,i.saleprice>"0"?(s(),o("span",me,[p(l(i.salepriceFormatted)+" ",1),t("span",he,l(i.priceFormatted),1)])):(s(),o("span",fe,l(i.priceFormatted),1))])])]),c(k,{onClick:Ie=>d.removeFromCart(i)},null,8,["onClick"])]),_e]))),128))]),t("div",ye,[ge,c(g,{href:e.route("cart"),class:"w-full mt-4 inline-flex items-center justify-center px-6 py-2 bg-primary border border-transparent rounded-lg text-sm text-white hover:bg-primary-600 active:bg-primary-700 focus:outline-none focus:border-primary-700 focus:ring focus:ring-primary-200 transition whitespace-nowrap w-full mt-4 text-decoration-none"},{default:m(()=>[p("View your list")]),_:1},8,["href"])])])):(s(),o("div",ve,"No products added in the list!"))])]),_:1}),c(g,{href:e.route("cart"),class:"md:hidden"},{default:m(()=>[t("div",we,[c(u),e.totalItems?(s(),o("div",be,[t("span",xe,l(e.totalItems),1)])):x("",!0)])]),_:1},8,["href"])])}const Fe=_(Y,[["render",ke]]);export{Fe as C,K as F};