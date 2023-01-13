import { ref, computed, mergeProps, withCtx, createVNode, toDisplayString, unref, openBlock, createBlock, Fragment, renderList, createTextVNode, withDirectives, vModelText, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { A as AppLayout } from "./VendorsLayout.7e47a6ff.mjs";
import "./ApplicationLogo.8c74c1d0.mjs";
import { useForm } from "@inertiajs/inertia-vue3";
import axios from "axios";
import moment from "moment";
import "@inertiajs/inertia";
import "./ResponsiveNavLink.016ef96f.mjs";
import "./_plugin-vue_export-helper.43be4956.mjs";
const ViewQuotation_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  __name: "View-Quotation",
  __ssrInlineRender: true,
  props: {
    order: Object
  },
  setup(__props) {
    var _a, _b, _c;
    const props = __props;
    const loading = ref(false);
    const quotation = useForm({
      name: (_a = props.order) == null ? void 0 : _a.invoice_no,
      contact: "",
      client: (_b = props.order) == null ? void 0 : _b.customer.name,
      currency: "KES",
      discountRate: 0,
      invoiceDate: new moment(props.order.created_date).format("DD-MM-YYYY"),
      taxRate: 16,
      commissionRate: 10,
      commissionAmount: 0,
      items: (_c = props.order) == null ? void 0 : _c.order_items,
      invoiceCurrency: {
        symbol: "KES",
        name: "Kenya Shilling",
        symbol_native: "KES",
        decimal_digits: 2,
        rounding: 0,
        code: "KES",
        name_plural: "Kenya Shillings"
      }
    });
    const deleteItem = (index) => {
      quotation.items.splice(index, 1);
    };
    const decimalDigits = (value) => {
      return quotation.invoiceCurrency.symbol + " " + Number(value).toFixed(quotation.invoiceCurrency.decimal_digits);
    };
    const subTotal = computed(() => {
      var total = quotation.items.reduce(function(accumulator, item) {
        return accumulator + item.amount * item.quantity;
      }, 0);
      return total;
    });
    const discountTotal = computed(() => {
      var total = subTotal.value * (quotation.discountRate / 100);
      return total;
    });
    const taxTotal = computed(() => {
      var total = (subTotal.value - discountTotal.value) * (quotation.taxRate / 100);
      return Math.round(total);
    });
    const grandTotal = computed(() => {
      var total = subTotal.value - discountTotal.value + taxTotal.value;
      return total;
    });
    const acceptQuote = () => {
      loading.value = true;
      let payload = {
        sub_total: subTotal.value,
        grand_total: grandTotal.value,
        total_discount: discountTotal.value,
        order: props.order.id,
        items: props.order.order_items
      };
      axios.post(route("accept.order.final", payload)).then((res) => {
        if (res.data.status === 200) {
          localStorage.setItem("orderItemready", JSON.stringify(res.data.order.id));
        }
        loading.value = false;
        window.location.href = route("checkout.order.final");
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(AppLayout, mergeProps({
        title: __props.order.invoice_no
      }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="font-semibold text-xl text-gray-800 leading-tight"${_scopeId}> Order # ${ssrInterpolate(__props.order.invoice_no)}</h2>`);
          } else {
            return [
              createVNode("h2", { class: "font-semibold text-xl text-gray-800 leading-tight" }, " Order # " + toDisplayString(__props.order.invoice_no), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-12"${_scopeId}><div class="max-w-7xl mx-auto sm:px-6 lg:px-8"${_scopeId}><div class="bg-white overflow-hidden shadow-xl sm:rounded-lg"${_scopeId}><div id="invoice-app"${_scopeId}><div class="header"${_scopeId}><div${_scopeId}><h1${_scopeId}>Quotation</h1><p${_scopeId}>Created on: ${ssrInterpolate(unref(quotation).invoiceDate)}</p></div><div${_scopeId}><div class="section-spacer"${_scopeId}><p${_scopeId}>Quotation #: ${ssrInterpolate(unref(quotation).name)}</p><p${_scopeId}>Currency: ${ssrInterpolate(unref(quotation).currency)}</p></div></div></div><hr${_scopeId}><table class="responsive-table"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>No</th><th${_scopeId}>Book/Item</th><th${_scopeId}>Price/unit</th><th${_scopeId}>Quantity</th><th${_scopeId}>Total</th><th${_scopeId}></th></tr></thead><!--[-->`);
            ssrRenderList(unref(quotation).items, (item, index) => {
              _push2(`<tr${_scopeId}><td data-label="No"${_scopeId}>${ssrInterpolate(index + 1)}</td><td data-label="Item"${_scopeId}>${ssrInterpolate(item.product.name)}</td><td data-label="Price/unite"${_scopeId}><div class="cell-with-input"${_scopeId}><span class="pl-2"${_scopeId}>${ssrInterpolate(unref(quotation).invoiceCurrency.symbol)}</span> ${ssrInterpolate(item.amount)}</div></td><td data-label="Quantity"${_scopeId}><input type="number" min="0"${ssrRenderAttr("value", item.quantity)}${_scopeId}></td><td data-label="Total"${_scopeId}>${ssrInterpolate(decimalDigits(item.amount * item.quantity))}</td><td class="text-right"${_scopeId}><button class="btn btn-danger btn-sm"${_scopeId}>Delete item</button></td></tr>`);
            });
            _push2(`<!--]--></table><table${_scopeId}><tr${_scopeId}><td${_scopeId}>Sub Total</td><td${_scopeId}>${ssrInterpolate(decimalDigits(__props.order.sub_total))}</td></tr><tr${_scopeId}><td${_scopeId}><div class="cell-with-input"${_scopeId}>Discount ${ssrInterpolate(unref(quotation).discountRate)}</div></td><td${_scopeId}>${ssrInterpolate(decimalDigits(__props.order.total_discount))}</td></tr><tr${_scopeId}><td${_scopeId}><div class="cell-with-input"${_scopeId}>Tax </div></td><td${_scopeId}>${ssrInterpolate(decimalDigits(__props.order.tax))}</td></tr><tr${_scopeId}><td${_scopeId}><div class="cell-with-input"${_scopeId}>Administration/Facilitation </div></td><td${_scopeId}>${ssrInterpolate(decimalDigits(__props.order.commission))}</td></tr><tr class="text-bold"${_scopeId}><td${_scopeId}><strong${_scopeId}>Grand Total</strong></td><td${_scopeId}>${ssrInterpolate(decimalDigits(__props.order.grand_total))}</td></tr></table><hr${_scopeId}><div class="flex w-full justify-end"${_scopeId}><button class="text-decoration-none px-6 py-3 hover:bg-green-400 font-semibold rounded-md bg-gray-600 text-white"${_scopeId}>`);
            if (loading.value) {
              _push2(`<div class="spinner-border" role="status"${_scopeId}><span class="visually-hidden"${_scopeId}>Please wait, Loading...</span></div>`);
            } else {
              _push2(`<span${_scopeId}>Accept Quotation</span>`);
            }
            _push2(`</button></div></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-12" }, [
                createVNode("div", { class: "max-w-7xl mx-auto sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "bg-white overflow-hidden shadow-xl sm:rounded-lg" }, [
                    createVNode("div", { id: "invoice-app" }, [
                      createVNode("div", { class: "header" }, [
                        createVNode("div", null, [
                          createVNode("h1", null, "Quotation"),
                          createVNode("p", null, "Created on: " + toDisplayString(unref(quotation).invoiceDate), 1)
                        ]),
                        createVNode("div", null, [
                          createVNode("div", { class: "section-spacer" }, [
                            createVNode("p", null, "Quotation #: " + toDisplayString(unref(quotation).name), 1),
                            createVNode("p", null, "Currency: " + toDisplayString(unref(quotation).currency), 1)
                          ])
                        ])
                      ]),
                      createVNode("hr"),
                      createVNode("table", { class: "responsive-table" }, [
                        createVNode("thead", null, [
                          createVNode("tr", null, [
                            createVNode("th", null, "No"),
                            createVNode("th", null, "Book/Item"),
                            createVNode("th", null, "Price/unit"),
                            createVNode("th", null, "Quantity"),
                            createVNode("th", null, "Total"),
                            createVNode("th")
                          ])
                        ]),
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(quotation).items, (item, index) => {
                          return openBlock(), createBlock("tr", { key: index }, [
                            createVNode("td", { "data-label": "No" }, toDisplayString(index + 1), 1),
                            createVNode("td", { "data-label": "Item" }, toDisplayString(item.product.name), 1),
                            createVNode("td", { "data-label": "Price/unite" }, [
                              createVNode("div", { class: "cell-with-input" }, [
                                createVNode("span", { class: "pl-2" }, toDisplayString(unref(quotation).invoiceCurrency.symbol), 1),
                                createTextVNode(" " + toDisplayString(item.amount), 1)
                              ])
                            ]),
                            createVNode("td", { "data-label": "Quantity" }, [
                              withDirectives(createVNode("input", {
                                type: "number",
                                min: "0",
                                "onUpdate:modelValue": ($event) => item.quantity = $event
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelText, item.quantity]
                              ])
                            ]),
                            createVNode("td", { "data-label": "Total" }, toDisplayString(decimalDigits(item.amount * item.quantity)), 1),
                            createVNode("td", { class: "text-right" }, [
                              createVNode("button", {
                                class: "btn btn-danger btn-sm",
                                onClick: ($event) => deleteItem(index)
                              }, "Delete item", 8, ["onClick"])
                            ])
                          ]);
                        }), 128))
                      ]),
                      createVNode("table", null, [
                        createVNode("tr", null, [
                          createVNode("td", null, "Sub Total"),
                          createVNode("td", null, toDisplayString(decimalDigits(__props.order.sub_total)), 1)
                        ]),
                        createVNode("tr", null, [
                          createVNode("td", null, [
                            createVNode("div", { class: "cell-with-input" }, "Discount " + toDisplayString(unref(quotation).discountRate), 1)
                          ]),
                          createVNode("td", null, toDisplayString(decimalDigits(__props.order.total_discount)), 1)
                        ]),
                        createVNode("tr", null, [
                          createVNode("td", null, [
                            createVNode("div", { class: "cell-with-input" }, "Tax ")
                          ]),
                          createVNode("td", null, toDisplayString(decimalDigits(__props.order.tax)), 1)
                        ]),
                        createVNode("tr", null, [
                          createVNode("td", null, [
                            createVNode("div", { class: "cell-with-input" }, "Administration/Facilitation ")
                          ]),
                          createVNode("td", null, toDisplayString(decimalDigits(__props.order.commission)), 1)
                        ]),
                        createVNode("tr", { class: "text-bold" }, [
                          createVNode("td", null, [
                            createVNode("strong", null, "Grand Total")
                          ]),
                          createVNode("td", null, toDisplayString(decimalDigits(__props.order.grand_total)), 1)
                        ])
                      ]),
                      createVNode("hr"),
                      createVNode("div", { class: "flex w-full justify-end" }, [
                        createVNode("button", {
                          onClick: acceptQuote,
                          class: "text-decoration-none px-6 py-3 hover:bg-green-400 font-semibold rounded-md bg-gray-600 text-white"
                        }, [
                          loading.value ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "spinner-border",
                            role: "status"
                          }, [
                            createVNode("span", { class: "visually-hidden" }, "Please wait, Loading...")
                          ])) : (openBlock(), createBlock("span", { key: 1 }, "Accept Quotation"))
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/View-Quotation.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
