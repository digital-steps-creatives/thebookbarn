import{d as B,u as N,s as h,o as p,c as Q,w as D,a as t,t as a,g as v,l as i,V as d,h as n,W as q,e as y,i as E,F}from"./app.72b4eafe.js";import{A}from"./VendorsLayout.f977d1bc.js";import"./ResponsiveNavLink.f7edcb93.js";import"./Banner.07abfd77.js";import"./DropdownLink.ebeb7372.js";import"./NavLink.25ae2a22.js";const G={class:"font-semibold text-xl text-gray-800 leading-tight"},I={class:"py-12"},L={class:"bg-white overflow-hidden shadow-xl sm:rounded-lg"},M={id:"invoice-app"},P={class:"header"},j=t("h1",null,"Quotation Builder",-1),H={class:"section-spacer"},O={class:"section-spacer"},W=t("p",null,[t("strong",null,"Bill to:")],-1),$=t("label",{for:"currency-picker mr-2 block"},"Currency:",-1),z=t("option",{value:"KES"},"Kenya Shilling",-1),J=[z],X={class:"responsive-table table"},Y=t("thead",null,[t("tr",null,[t("th",null,"No"),t("th",{style:{width:"40%"}},"Book/Item"),t("th",{style:{width:"20%"}},"Price/unite"),t("th",{style:{width:"15%"}},"Quantity"),t("th",{style:{width:"10%"}},"Total"),t("th",{style:{width:"10%"}})])],-1),Z={"data-label":"No"},tt={"data-label":"Item"},et=["onUpdate:modelValue"],ot={"data-label":"Price/unite"},nt={class:"cell-with-input"},lt=["onUpdate:modelValue"],st={"data-label":"Quantity"},at=["onUpdate:modelValue"],it={"data-label":"Total"},dt={class:"text-right"},ut=["onClick"],rt=t("td",null,"Subtotal",-1),ct={class:"cell-with-input"},_t={class:"cell-with-input"},mt={class:"cell-with-input"},ht={class:"text-bold"},pt=t("td",null,[t("strong",null,"Grand Total")],-1),vt={class:"section-spacer"},yt=t("p",null,"Notes to the Customer:",-1),gt={key:0,class:"spinner-border",role:"status"},bt=t("span",{class:"visually-hidden"},"Please wait, Loading...",-1),xt=[bt],wt={key:1},Ut={__name:"Generate-Quotation",props:{order:Object},setup(g){var C,S,T,U;const _=g,b=B(!1),e=N({name:(C=_.order)==null?void 0:C.invoice_no,contact:"",client:(S=_.order)==null?void 0:S.customer.name,currency:"KES",discountRate:0,note:(T=_.order)==null?void 0:T.note,invoiceDate:new Date,taxRate:16,commissionRate:10,items:(U=_.order)==null?void 0:U.order_items,invoiceCurrency:{symbol:"KSh",name:"Kenya Shilling",symbol_native:"kes",decimal_digits:2,rounding:0,code:"KES",name_plural:"Kenya Shillings"}}),R=l=>{e.items.splice(l,1)},u=l=>e.invoiceCurrency.symbol+" "+Number(l).toFixed(e.invoiceCurrency.decimal_digits),V=l=>{var s=l.target;s.style.height="1px",s.style.height=25+s.scrollHeight+"px"},r=h(()=>{var l=e.items.reduce(function(s,o){return s+o.amount*o.quantity},0);return l}),m=h(()=>{var l=r.value*(e.discountRate/100);return l}),x=h(()=>{var l=(r.value-m.value)*(e.taxRate/100);return Math.round(l)}),w=h(()=>{var l=(r.value-m.value)*(e.commissionRate/100);return l}),k=h(()=>{var l=r.value-m.value+x.value+w.value;return l}),K=()=>{b.value=!0,e.transform(l=>({...l,sub_total:r.value,grand_total:k.value,total_discount:m.value,commission:w.value,tax:x.value,order:_.order})).post(route("quote.generator")),b.value=!1};return(l,s)=>(p(),Q(A,{title:g.order.invoice_no},{header:D(()=>[t("h2",G," Order # "+a(g.order.invoice_no),1)]),default:D(()=>[t("div",I,[t("div",null,[t("div",L,[t("div",M,[t("div",P,[t("div",null,[j,t("p",null,[v("Date: "),i(t("input",{type:"date","onUpdate:modelValue":s[0]||(s[0]=o=>n(e).invoiceDate=o)},null,512),[[d,n(e).invoiceDate]])])]),t("div",null,[t("div",H,[i(t("input",{type:"text",placeholder:"Company Name",class:"company-name","onUpdate:modelValue":s[1]||(s[1]=o=>n(e).name=o),disabled:""},null,512),[[d,n(e).name]])]),t("div",O,[W,i(t("input",{type:"text",onKeyup:V,"onUpdate:modelValue":s[2]||(s[2]=o=>n(e).client=o),disabled:""},null,544),[[d,n(e).client]])])])]),t("div",null,[$,i(t("select",{id:"currency-picker","onUpdate:modelValue":s[3]||(s[3]=o=>n(e).currency=o),disabled:""},J,512),[[q,n(e).currency]])]),t("table",X,[Y,(p(!0),y(F,null,E(n(e).items,(o,f)=>(p(),y("tr",{key:f},[t("td",Z,a(f+1),1),t("td",tt,[i(t("input",{type:"text","onUpdate:modelValue":c=>o.product.name=c},null,8,et),[[d,o.product.name]])]),t("td",ot,[t("div",nt,[v(a(n(e).invoiceCurrency.symbol)+" ",1),i(t("input",{type:"number",min:"0","onUpdate:modelValue":c=>o.amount=c},null,8,lt),[[d,o.amount]])])]),t("td",st,[i(t("input",{type:"number",min:"0","onUpdate:modelValue":c=>o.quantity=c,style:{width:"30%","text-align":"center"}},null,8,at),[[d,o.quantity]])]),t("td",it,a(u(o.amount*o.quantity)),1),t("td",dt,[t("button",{class:"text-red-600 hover:text-red-900",onClick:c=>R(f)},"Delete item",8,ut)])]))),128))]),t("table",null,[t("tr",null,[rt,t("td",null,a(u(n(r))),1)]),t("tr",null,[t("td",null,[t("div",ct,[v("Discount "),i(t("input",{class:"text-right",type:"number",min:"0",max:"100","onUpdate:modelValue":s[4]||(s[4]=o=>n(e).discountRate=o)},null,512),[[d,n(e).discountRate]]),v("%")])]),t("td",null,a(u(n(m))),1)]),t("tr",null,[t("td",null,[t("div",_t,"Tax "+a(n(e).taxRate)+"%",1)]),t("td",null,a(u(n(x))),1)]),t("tr",null,[t("td",null,[t("div",mt,"Commission Charged "+a(n(e).commissionRate)+"%",1)]),t("td",null,a(u(n(w))),1)]),t("tr",ht,[pt,t("td",null,a(u(n(k))),1)])]),t("div",vt,[yt,i(t("textarea",{onKeyup:V,"onUpdate:modelValue":s[5]||(s[5]=o=>n(e).note=o)},null,544),[[d,n(e).note]])]),t("button",{onClick:K,class:"text-decoration-none px-6 py-3 hover:bg-green-400 font-semibold rounded-md bg-gray-600 text-white"},[b.value?(p(),y("div",gt,xt)):(p(),y("span",wt,"Save and Send Quotation"))])])])])])]),_:1},8,["title"]))}};export{Ut as default};