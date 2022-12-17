import { ref, computed, mergeProps, withCtx, createVNode, toDisplayString, unref, createTextVNode, withDirectives, vModelText, vModelSelect, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
import { A as AppLayout } from "./VendorsLayout.392d300b.mjs";
import "./ApplicationLogo.8c74c1d0.mjs";
import { useForm } from "@inertiajs/inertia-vue3";
import "@inertiajs/inertia";
import "./ResponsiveNavLink.cc3c0f4e.mjs";
import "./_plugin-vue_export-helper.43be4956.mjs";
const GenerateQuotation_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  __name: "Generate-Quotation",
  __ssrInlineRender: true,
  props: {
    order: Object
  },
  setup(__props) {
    var _a, _b, _c, _d;
    const props = __props;
    const loading = ref(false);
    const quotation = useForm({
      name: (_a = props.order) == null ? void 0 : _a.invoice_no,
      contact: "",
      client: (_b = props.order) == null ? void 0 : _b.customer.name,
      currency: "KES",
      discountRate: 0,
      note: (_c = props.order) == null ? void 0 : _c.note,
      invoiceDate: new Date(),
      taxRate: 16,
      commissionRate: 10,
      items: (_d = props.order) == null ? void 0 : _d.order_items,
      invoiceCurrency: {
        symbol: "KSh",
        name: "Kenya Shilling",
        symbol_native: "kes",
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
    const adjustTextAreaHeight = (event) => {
      var el = event.target;
      el.style.height = "1px";
      el.style.height = 25 + el.scrollHeight + "px";
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
      return total;
    });
    const commissionTotal = computed(() => {
      var total = (subTotal.value - discountTotal.value) * (quotation.commissionRate / 100);
      return total;
    });
    const grandTotal = computed(() => {
      var total = subTotal.value - discountTotal.value + taxTotal.value + commissionTotal.value;
      return total;
    });
    const saveQuote = () => {
      loading.value = true;
      quotation.transform((data) => ({
        ...data,
        sub_total: subTotal.value,
        grand_total: grandTotal.value,
        total_discount: discountTotal.value,
        commission: commissionTotal.value,
        tax: taxTotal.value,
        order: props.order
      })).post(route("quote.generator"));
      loading.value = false;
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
            _push2(`<div class="py-12"${_scopeId}><div class="max-w-7xl mx-auto sm:px-6 lg:px-8"${_scopeId}><div class="bg-white overflow-hidden shadow-xl sm:rounded-lg"${_scopeId}><div id="invoice-app"${_scopeId}><div class="header"${_scopeId}><div${_scopeId}><h1${_scopeId}>Quotation Builder</h1><p${_scopeId}>Date: <input type="date"${ssrRenderAttr("value", unref(quotation).invoiceDate)}${_scopeId}></p></div><div${_scopeId}><div class="section-spacer"${_scopeId}><input type="text" placeholder="Company Name" class="company-name"${ssrRenderAttr("value", unref(quotation).name)} disabled${_scopeId}></div><div class="section-spacer"${_scopeId}><p${_scopeId}><strong${_scopeId}>Bill to:</strong></p><input type="text"${ssrRenderAttr("value", unref(quotation).client)} disabled${_scopeId}></div></div></div><div${_scopeId}><label for="currency-picker mr-2 block"${_scopeId}>Currency:</label><select id="currency-picker" disabled${_scopeId}><option value="KES"${_scopeId}>Kenya Shilling</option></select></div><table class="responsive-table"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>No</th><th${_scopeId}>Book/Item</th><th${_scopeId}>Price/unite</th><th${_scopeId}>Quantity</th><th${_scopeId}>Total</th><th${_scopeId}></th></tr></thead><!--[-->`);
            ssrRenderList(unref(quotation).items, (item, index) => {
              _push2(`<tr${_scopeId}><td data-label="No"${_scopeId}>${ssrInterpolate(index + 1)}</td><td data-label="Item"${_scopeId}><input type="text"${ssrRenderAttr("value", item.product.name)}${_scopeId}></td><td data-label="Price/unite"${_scopeId}><div class="cell-with-input"${_scopeId}>${ssrInterpolate(unref(quotation).invoiceCurrency.symbol)} <input type="number" min="0"${ssrRenderAttr("value", item.amount)}${_scopeId}></div></td><td data-label="Quantity"${_scopeId}><input type="number" min="0"${ssrRenderAttr("value", item.quantity)}${_scopeId}></td><td data-label="Total"${_scopeId}>${ssrInterpolate(decimalDigits(item.amount * item.quantity))}</td><td class="text-right"${_scopeId}><button class="btn btn-danger btn-sm"${_scopeId}>Delete item</button></td></tr>`);
            });
            _push2(`<!--]--></table><table${_scopeId}><tr${_scopeId}><td${_scopeId}>Subtotal</td><td${_scopeId}>${ssrInterpolate(decimalDigits(unref(subTotal)))}</td></tr><tr${_scopeId}><td${_scopeId}><div class="cell-with-input"${_scopeId}>Discount <input class="text-right" type="number" min="0" max="100"${ssrRenderAttr("value", unref(quotation).discountRate)}${_scopeId}>%</div></td><td${_scopeId}>${ssrInterpolate(decimalDigits(unref(discountTotal)))}</td></tr><tr${_scopeId}><td${_scopeId}><div class="cell-with-input"${_scopeId}>Tax ${ssrInterpolate(unref(quotation).taxRate)}%</div></td><td${_scopeId}>${ssrInterpolate(decimalDigits(unref(taxTotal)))}</td></tr><tr${_scopeId}><td${_scopeId}><div class="cell-with-input"${_scopeId}>Commission Charged ${ssrInterpolate(unref(quotation).commissionRate)}%</div></td><td${_scopeId}>${ssrInterpolate(decimalDigits(unref(commissionTotal)))}</td></tr><tr class="text-bold"${_scopeId}><td${_scopeId}><strong${_scopeId}>Grand Total</strong></td><td${_scopeId}>${ssrInterpolate(decimalDigits(unref(grandTotal)))}</td></tr></table><div class="section-spacer"${_scopeId}><p${_scopeId}>Notes to the Customer:</p><textarea${_scopeId}>${ssrInterpolate(unref(quotation).note)}</textarea></div><button class="text-decoration-none px-6 py-3 hover:bg-green-400 font-semibold rounded-md bg-gray-600 text-white"${_scopeId}>`);
            if (loading.value) {
              _push2(`<div class="spinner-border" role="status"${_scopeId}><span class="visually-hidden"${_scopeId}>Please wait, Loading...</span></div>`);
            } else {
              _push2(`<span${_scopeId}>Save and Send Quotation</span>`);
            }
            _push2(`</button></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-12" }, [
                createVNode("div", { class: "max-w-7xl mx-auto sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "bg-white overflow-hidden shadow-xl sm:rounded-lg" }, [
                    createVNode("div", { id: "invoice-app" }, [
                      createVNode("div", { class: "header" }, [
                        createVNode("div", null, [
                          createVNode("h1", null, "Quotation Builder"),
                          createVNode("p", null, [
                            createTextVNode("Date: "),
                            withDirectives(createVNode("input", {
                              type: "date",
                              "onUpdate:modelValue": ($event) => unref(quotation).invoiceDate = $event
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(quotation).invoiceDate]
                            ])
                          ])
                        ]),
                        createVNode("div", null, [
                          createVNode("div", { class: "section-spacer" }, [
                            withDirectives(createVNode("input", {
                              type: "text",
                              placeholder: "Company Name",
                              class: "company-name",
                              "onUpdate:modelValue": ($event) => unref(quotation).name = $event,
                              disabled: ""
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(quotation).name]
                            ])
                          ]),
                          createVNode("div", { class: "section-spacer" }, [
                            createVNode("p", null, [
                              createVNode("strong", null, "Bill to:")
                            ]),
                            withDirectives(createVNode("input", {
                              type: "text",
                              onKeyup: adjustTextAreaHeight,
                              "onUpdate:modelValue": ($event) => unref(quotation).client = $event,
                              disabled: ""
                            }, null, 40, ["onUpdate:modelValue"]), [
                              [vModelText, unref(quotation).client]
                            ])
                          ])
                        ])
                      ]),
                      createVNode("div", null, [
                        createVNode("label", { for: "currency-picker mr-2 block" }, "Currency:"),
                        withDirectives(createVNode("select", {
                          id: "currency-picker",
                          "onUpdate:modelValue": ($event) => unref(quotation).currency = $event,
                          disabled: ""
                        }, [
                          createVNode("option", { value: "KES" }, "Kenya Shilling")
                        ], 8, ["onUpdate:modelValue"]), [
                          [vModelSelect, unref(quotation).currency]
                        ])
                      ]),
                      createVNode("table", { class: "responsive-table" }, [
                        createVNode("thead", null, [
                          createVNode("tr", null, [
                            createVNode("th", null, "No"),
                            createVNode("th", null, "Book/Item"),
                            createVNode("th", null, "Price/unite"),
                            createVNode("th", null, "Quantity"),
                            createVNode("th", null, "Total"),
                            createVNode("th")
                          ])
                        ]),
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(quotation).items, (item, index) => {
                          return openBlock(), createBlock("tr", { key: index }, [
                            createVNode("td", { "data-label": "No" }, toDisplayString(index + 1), 1),
                            createVNode("td", { "data-label": "Item" }, [
                              withDirectives(createVNode("input", {
                                type: "text",
                                "onUpdate:modelValue": ($event) => item.product.name = $event
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelText, item.product.name]
                              ])
                            ]),
                            createVNode("td", { "data-label": "Price/unite" }, [
                              createVNode("div", { class: "cell-with-input" }, [
                                createTextVNode(toDisplayString(unref(quotation).invoiceCurrency.symbol) + " ", 1),
                                withDirectives(createVNode("input", {
                                  type: "number",
                                  min: "0",
                                  "onUpdate:modelValue": ($event) => item.amount = $event
                                }, null, 8, ["onUpdate:modelValue"]), [
                                  [vModelText, item.amount]
                                ])
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
                          createVNode("td", null, "Subtotal"),
                          createVNode("td", null, toDisplayString(decimalDigits(unref(subTotal))), 1)
                        ]),
                        createVNode("tr", null, [
                          createVNode("td", null, [
                            createVNode("div", { class: "cell-with-input" }, [
                              createTextVNode("Discount "),
                              withDirectives(createVNode("input", {
                                class: "text-right",
                                type: "number",
                                min: "0",
                                max: "100",
                                "onUpdate:modelValue": ($event) => unref(quotation).discountRate = $event
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelText, unref(quotation).discountRate]
                              ]),
                              createTextVNode("%")
                            ])
                          ]),
                          createVNode("td", null, toDisplayString(decimalDigits(unref(discountTotal))), 1)
                        ]),
                        createVNode("tr", null, [
                          createVNode("td", null, [
                            createVNode("div", { class: "cell-with-input" }, "Tax " + toDisplayString(unref(quotation).taxRate) + "%", 1)
                          ]),
                          createVNode("td", null, toDisplayString(decimalDigits(unref(taxTotal))), 1)
                        ]),
                        createVNode("tr", null, [
                          createVNode("td", null, [
                            createVNode("div", { class: "cell-with-input" }, "Commission Charged " + toDisplayString(unref(quotation).commissionRate) + "%", 1)
                          ]),
                          createVNode("td", null, toDisplayString(decimalDigits(unref(commissionTotal))), 1)
                        ]),
                        createVNode("tr", { class: "text-bold" }, [
                          createVNode("td", null, [
                            createVNode("strong", null, "Grand Total")
                          ]),
                          createVNode("td", null, toDisplayString(decimalDigits(unref(grandTotal))), 1)
                        ])
                      ]),
                      createVNode("div", { class: "section-spacer" }, [
                        createVNode("p", null, "Notes to the Customer:"),
                        withDirectives(createVNode("textarea", {
                          onKeyup: adjustTextAreaHeight,
                          "onUpdate:modelValue": ($event) => unref(quotation).note = $event
                        }, null, 40, ["onUpdate:modelValue"]), [
                          [vModelText, unref(quotation).note]
                        ])
                      ]),
                      createVNode("button", {
                        onClick: saveQuote,
                        class: "text-decoration-none px-6 py-3 hover:bg-green-400 font-semibold rounded-md bg-gray-600 text-white"
                      }, [
                        loading.value ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "spinner-border",
                          role: "status"
                        }, [
                          createVNode("span", { class: "visually-hidden" }, "Please wait, Loading...")
                        ])) : (openBlock(), createBlock("span", { key: 1 }, "Save and Send Quotation"))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Business/Generate-Quotation.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
