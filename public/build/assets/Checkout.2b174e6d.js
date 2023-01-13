import{_ as f}from"./AppLayout.c1d4dfa5.js";import{_ as b,u as v,o as n,c as x,w as _,D as k,a as e,l as c,V as u,S as g,e as l,f as h,i as w,t as a,g as d,F as I}from"./app.72b4eafe.js";import"./ResponsiveNavLink.f7edcb93.js";import"./Banner.07abfd77.js";import"./DropdownLink.ebeb7372.js";import"./NavLink.25ae2a22.js";const P={props:{user:Object},data(){return{orderItems:{},form:v({address:null,delivery_type:"home",delivery_fee:250,name:this.user.name,email:this.user.email,phone:this.user.phone}),loading:!1,checkoutId:null,paymentResponse:!1,paymentMessage:"Transaction Pending"}},methods:{makePayment(){this.loading=!0;let i={phone:this.form.phone,amount:Math.round(this.orderItems.grand_total+this.form.delivery_fee),invoice_no:this.orderItems.invoice_no,email:this.form.email,delivery_type:this.form.delivery_type,delivery_fee:this.form.delivery_fee,address:this.form.address,name:this.form.name};window.axios.post(route("make.mpesa.payment"),i).then(t=>{console.log(t.data.status),this.checkoutId=t.data.checkoutId,t.data.status===200&&(Swal.fire({title:t.data.message,icon:"success",timerProgressBar:!1,showConfirmButton:!0,confirmButtonText:"Confirm Payment"}).then(r=>{r.isConfirmed?this.checkPaymentStatus(t.data.checkoutId):r.isDenied&&Swal.fire("Changes are not saved","","info")}),this.loading=!1)})},registerurl(){window.axios.post(route("register.urls")).then(i=>{console.log(i)})},checkPaymentStatus(i){this.paymentResponse=!0;let t={checkoutId:i,invoice_no:this.orderItems.invoice_no};window.axios.post(route("confirm.payment"),t).then(r=>{console.log(r),r.data.status===1?this.paymentMessage=r.message:r.data.status===5?(this.paymentMessage=r.message,this.checkPaymentStatus(this.checkoutId)):r.data.status===1032&&(this.paymentMessage=r.message)})}},mounted(){window.axios.get(route("get.orders",localStorage.getItem("orderItemready"))).then(i=>{this.orderItems=i.data.order})},components:{AppLayout:f}},C=e("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Checkout ",-1),S={class:"py-12"},M={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},E={class:"row"},N={class:"col-sm-8"},V={class:"bg-white p-8"},B=e("div",{class:"row"},[e("div",{class:"col-12"},[e("h4",null,"Billing Infomation")])],-1),D={class:"row mb-3"},T={class:"col-sm-12"},A=e("label",{for:"name"},"Name",-1),R={class:"row mb-3"},U={class:"col-sm-6"},j=e("label",{for:"email"},"Email",-1),K={class:"col-sm-6"},L=e("label",{for:"phone"},[d("Phone Number"),e("small",{class:"text-red-600"},"*")],-1),F=e("div",{class:"row mb-3"},[e("div",{class:"col-12"},[e("label",{for:"",class:"mb-2"},[d("Choose where we should deliver your order "),e("small",{class:"text-red-600"},"*")])])],-1),z={class:"row mb-3"},H={class:"col-6"},O={class:"items-center pl-4 rounded border-2 border-gray-200 focus:border-green-600 peer-checked:text-green-600 hover:text-gray-600 hover:bg-gray-200 ring-green-600"},W=e("label",{for:"home",class:"py-4 ml-2 w-full text-sm font-medium text-gray-900"},"Deliver at Home",-1),q={class:"col-sm-6"},G={class:"items-center pl-4 rounded border-2 border-gray-200 peer-checked:border-green-600 peer-checked:text-green-600 hover:text-gray-600 hover:bg-gray-200 ring-green-600"},J=e("label",{for:"school",class:"py-4 ml-2 w-full text-sm font-medium text-gray-900"},"Deliver at School ",-1),Q={key:0},X={for:"message",class:"block mb-2 text-sm font-medium text-gray-900"},Y={key:0},Z={key:1},$={key:2},ee={class:"col-sm-4"},te={class:"bg-gray-50 p-8"},oe=e("h4",null,"Order Infomation",-1),se=e("h5",null,"Books",-1),re=e("hr",null,null,-1),ne={class:"pl-0 mb-4"},le={class:"flex mb-2",style:{"max-height":"230px"}},ie={class:"h-16 w-16 mr-2"},ae=["src","alt"],de=e("br",null,null,-1),ce=e("strong",null,"Price: ",-1),me=e("hr",null,null,-1),ue=e("strong",null,"Sub total",-1),he=e("strong",null,"Tax charged",-1),_e=e("strong",null,"Delivery Fee",-1),ge=e("strong",null,"Total",-1),ye={class:"mt-5"},pe=e("div",{class:"py-4 alert alert-info"}," Note: We are only delivering in Nairobi only ",-1),fe={key:0,class:"flex"},be=e("div",{class:"spinner-border",role:"status"},null,-1),ve=e("span",{class:"ml-2"},"Please wait, Loading...",-1),xe=[be,ve],ke={key:1},we={key:0,class:"overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"},Ie={class:"relative w-auto my-6 mx-auto max-w-3xl"},Pe={class:"border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"},Ce={class:"flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t"},Se=e("h3",{class:"text-3xl font-semibold"}," Check Payment Status ",-1),Me=e("span",{class:"bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none"}," \xD7 ",-1),Ee=[Me],Ne={class:"relative p-6 flex-auto"},Ve={class:"my-4 text-slate-500 text-lg leading-relaxed"},Be={class:"flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b"},De={key:1,class:"opacity-25 fixed inset-0 z-40 bg-black"};function Te(i,t,r,Ae,o,m){const y=k("AppLayout");return n(),x(y,{title:"Checkout"},{header:_(()=>[C]),default:_(()=>[e("div",S,[e("div",M,[e("div",E,[e("div",N,[e("div",V,[B,e("div",D,[e("div",T,[A,c(e("input",{id:"name",type:"text",class:"form-control","onUpdate:modelValue":t[0]||(t[0]=s=>o.form.name=s)},null,512),[[u,o.form.name]])])]),e("div",R,[e("div",U,[j,c(e("input",{id:"email",type:"text",class:"form-control","onUpdate:modelValue":t[1]||(t[1]=s=>o.form.email=s)},null,512),[[u,o.form.email]])]),e("div",K,[L,c(e("input",{id:"phone",type:"text",class:"form-control","onUpdate:modelValue":t[2]||(t[2]=s=>o.form.phone=s),placeholder:"Mpesa Phone number to pay from "},null,512),[[u,o.form.phone]])])]),F,e("div",z,[e("div",H,[e("div",O,[c(e("input",{id:"home",type:"radio",value:"home",name:"delivery_type","onUpdate:modelValue":t[3]||(t[3]=s=>o.form.delivery_type=s),class:"w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"},null,512),[[g,o.form.delivery_type]]),W])]),e("div",q,[e("div",G,[c(e("input",{id:"school",type:"radio",value:"school",name:"delivery_type","onUpdate:modelValue":t[4]||(t[4]=s=>o.form.delivery_type=s),class:"w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"},null,512),[[g,o.form.delivery_type]]),J])])]),o.form.delivery_type?(n(),l("div",Q,[e("label",X,[o.form.delivery_type==="home"?(n(),l("span",Y,"Enter Home Address below")):o.form.delivery_type==="school"?(n(),l("span",Z,"Enter Name of the School, Student, Admission Number, Class & Address below")):(n(),l("span",$,"Enter Name of the City/Town you are in"))]),c(e("textarea",{id:"message","onUpdate:modelValue":t[5]||(t[5]=s=>o.form.address=s),rows:"6",class:"block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500",placeholder:"add more information on where we should deliver the order ..."},null,512),[[u,o.form.address]])])):h("",!0)])]),e("div",ee,[e("div",te,[oe,se,re,e("ul",ne,[(n(!0),l(I,null,w(o.orderItems.order_items,(s,p)=>(n(),l("li",{key:p},[e("div",le,[e("div",ie,[e("img",{src:s.product.featured_image,alt:s.product.name,class:"w-full h-full object-cover"},null,8,ae)]),e("p",null,[e("strong",null,a(s.product.name),1),de,e("span",null,[ce,d("KES "+a(s.amount),1)])])])]))),128))]),me,e("div",null,[e("p",null,[ue,d(" KES "+a(o.orderItems.sub_total),1)]),e("p",null,[he,d(" KES "+a(parseInt(o.orderItems.grand_total-o.orderItems.sub_total)),1)]),e("p",null,[_e,d(" KES "+a(parseInt(this.form.delivery_fee)),1)]),e("p",null,[ge,d(" KES "+a(o.orderItems.grand_total+parseInt(this.form.delivery_fee)),1)]),e("div",ye,[pe,e("button",{class:"text-decoration-none px-6 py-3 hover:bg-green-400 font-semibold rounded-md bg-gray-600 text-white",onClick:t[6]||(t[6]=(...s)=>m.makePayment&&m.makePayment(...s))},[o.loading?(n(),l("div",fe,xe)):(n(),l("span",ke,"Make Payment"))])])])])])])])]),o.paymentResponse?(n(),l("div",we,[e("div",Ie,[e("div",Pe,[e("div",Ce,[Se,e("button",{class:"p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none",onClick:t[7]||(t[7]=s=>i.toggleModal())},Ee)]),e("div",Ne,[e("p",Ve,a(o.paymentMessage),1)]),e("div",Be,[e("button",{id:"retry-payment",class:"text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",type:"button",onClick:t[8]||(t[8]=(...s)=>m.makePayment&&m.makePayment(...s))}," Retry Payment "),e("button",{class:"text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",type:"button",onClick:t[9]||(t[9]=s=>m.checkPaymentStatus(o.checkoutId)),id:"confirm-payment"}," Confirm Payment again ")])])])])):h("",!0),o.paymentResponse?(n(),l("div",De)):h("",!0)]),_:1})}const ze=b(P,[["render",Te]]);export{ze as default};
