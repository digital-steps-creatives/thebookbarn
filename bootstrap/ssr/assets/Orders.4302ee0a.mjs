import { defineComponent, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from "vue";
import moment from "moment";
import { _ as _sfc_main$1 } from "./AppLayout.d46aba5b.mjs";
import { Head, Link } from "@inertiajs/inertia-vue3";
import { P as Pagination } from "./Pagination.280cc9fe.mjs";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
import "@inertiajs/inertia";
import "./ResponsiveNavLink.016ef96f.mjs";
const _sfc_main = defineComponent({
  name: "OrderPage",
  props: ["myorders"],
  components: { MasterLayout: _sfc_main$1, Head, Link, Pagination },
  data() {
    return {
      loading: false
    };
  },
  methods: {
    dateTime(value) {
      return moment(value).format("lll");
    },
    moveToCheckout(order) {
      localStorage.removeItem("orderItemready");
      this.loading = true;
      localStorage.setItem("orderItemready", JSON.stringify(order));
      window.location.href = route("checkout.order.final");
    }
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_master_layout = resolveComponent("master-layout");
  const _component_Link = resolveComponent("Link");
  const _component_Pagination = resolveComponent("Pagination");
  _push(ssrRenderComponent(_component_master_layout, mergeProps({ title: "My Orders" }, _attrs), {
    header: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h2 class="font-semibold text-xl text-gray-800 leading-tight"${_scopeId}> My Orders </h2>`);
      } else {
        return [
          createVNode("h2", { class: "font-semibold text-xl text-gray-800 leading-tight" }, " My Orders ")
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="container my-12"${_scopeId}><div class="max-w-7xl mx-auto px-4"${_scopeId}><div class="row justify-content-center"${_scopeId}><div class="col-sm-12"${_scopeId}><div class="my-6"${_scopeId}>`);
        if (_ctx.myorders) {
          _push2(`<div class="overflow-x-auto relative shadow-md sm:rounded-lg"${_scopeId}><table class="w-full text-sm text-left text-gray-500"${_scopeId}><thead class="text-xs text-white uppercase bg-green-600"${_scopeId}><tr${_scopeId}><th scope="col" class="py-3 px-6"${_scopeId}>Order No #</th><th scope="col" class="py-3 px-6 hidden sm:table-cell"${_scopeId}>Quantity</th><th scope="col" class="py-3 px-6 hidden sm:table-cell"${_scopeId}>Date</th><th scope="col" class="py-3 px-6 hidden sm:table-cell"${_scopeId}>Price</th><th scope="col" class="py-3 px-6 hidden sm:table-cell"${_scopeId}>Status</th><th scope="col" class="py-3 px-6"${_scopeId}>Action</th></tr></thead><tbody${_scopeId}><!--[-->`);
          ssrRenderList(_ctx.myorders.data, (item, index) => {
            var _a;
            _push2(`<tr class="bg-white border-b"${_scopeId}><th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Link, {
              href: _ctx.route("view.order.status", item.id)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(item.invoice_no)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(item.invoice_no), 1)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`<div class="my-1 visible sm:hidden" style="${ssrRenderStyle({ "font-size": "13px" })}"${_scopeId}>${ssrInterpolate(_ctx.dateTime(item.created_at))} <br${_scopeId}><div class="mt-2"${_scopeId}>`);
            if (item.status === "waiting quotations from vendors") {
              _push2(`<span class="bg-sky-400 inline-flex text-center px-3 py-1.5 rounded-full text-white text-xs"${_scopeId}>pending quotation</span>`);
            } else {
              _push2(`<!---->`);
            }
            if (item.status === "pending acceptance") {
              _push2(`<span class="bg-teal-400 px-3 py-1.5 inline-flex text-center rounded-full text-white text-xs"${_scopeId}>pending acceptance</span>`);
            } else {
              _push2(`<!---->`);
            }
            if (item.status === "waiting approval") {
              _push2(`<span class="bg-teal-400 px-3 py-1.5 inline-flex text-center rounded-full text-white text-xs"${_scopeId}>waiting approval</span>`);
            } else {
              _push2(`<!---->`);
            }
            if (item.status === "pending payment") {
              _push2(`<span class="bg-orange-400 px-3 py-1.5 inline-flex text-center rounded-full text-white text-xs"${_scopeId}>pending payment</span>`);
            } else {
              _push2(`<!---->`);
            }
            if (item.status === "paid") {
              _push2(`<span class="bg-green-400 px-3 py-1.5 rounded-full inline-flex text-center text-white text-xs"${_scopeId}>paid</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></th><td class="py-4 px-6 hidden sm:table-cell"${_scopeId}>${ssrInterpolate((_a = item.order_items) == null ? void 0 : _a.length)}</td><td class="py-4 px-6 hidden sm:table-cell"${_scopeId}>${ssrInterpolate(_ctx.dateTime(item.created_at))}</td><td class="py-4 px-6 hidden sm:table-cell"${_scopeId}>`);
            if (item.grand_total) {
              _push2(`<span${_scopeId}>Kes ${ssrInterpolate(item.grand_total)}</span>`);
            } else {
              _push2(`<span${_scopeId}>n/a</span>`);
            }
            _push2(`</td><td class="py-4 px-6 hidden sm:table-cell"${_scopeId}><div${_scopeId}>`);
            if (item.status === "waiting quotations from vendors") {
              _push2(`<span class="bg-sky-400 inline-flex text-center px-3 py-1.5 rounded-full text-white text-xs"${_scopeId}>pending quotation</span>`);
            } else {
              _push2(`<!---->`);
            }
            if (item.status === "pending acceptance") {
              _push2(`<span class="bg-teal-400 px-3 py-1.5 inline-flex text-center rounded-full text-white text-xs"${_scopeId}>pending acceptance</span>`);
            } else {
              _push2(`<!---->`);
            }
            if (item.status === "waiting approval") {
              _push2(`<span class="bg-teal-400 px-3 py-1.5 inline-flex text-center rounded-full text-white text-xs"${_scopeId}>waiting approval</span>`);
            } else {
              _push2(`<!---->`);
            }
            if (item.status === "pending payment") {
              _push2(`<span class="bg-orange-400 px-3 py-1.5 inline-flex text-center rounded-full text-white text-xs"${_scopeId}>pending payment</span>`);
            } else {
              _push2(`<!---->`);
            }
            if (item.status === "paid") {
              _push2(`<span class="bg-green-400 px-3 py-1.5 rounded-full inline-flex text-center text-white text-xs"${_scopeId}>paid</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></td><td class="py-4 px-6"${_scopeId}>`);
            if (item.status === "pending acceptance") {
              _push2(ssrRenderComponent(_component_Link, {
                href: _ctx.route("view.order.final", item.id),
                class: "text-decoration-none h-10 px-6 py-2.5 hover:bg-green-400 font-semibold rounded-md bg-green-600 text-white"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Accept Quotation`);
                  } else {
                    return [
                      createTextVNode("Accept Quotation")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else if (item.status === "pending payment") {
              _push2(`<button class="text-decoration-none h-10 px-6 py-2.5 hover:bg-orange-400 font-semibold rounded-md bg-orange-600 text-white"${_scopeId}>Pay Order</button>`);
            } else {
              _push2(`<span${_scopeId}>...</span>`);
            }
            _push2(`</td></tr>`);
          });
          _push2(`<!--]--></tbody></table></div>`);
        } else {
          _push2(`<div${_scopeId}><div class="alert alert-info" role="alert"${_scopeId}><p${_scopeId}>Sorry you dont have any orders</p>`);
          _push2(ssrRenderComponent(_component_Link, {
            href: "/",
            class: "text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800 inline-flex"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`Add books to this cart <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"${_scopeId2}></path></svg>`);
              } else {
                return [
                  createTextVNode("Add books to this cart "),
                  (openBlock(), createBlock("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    "stroke-width": "1.5",
                    stroke: "currentColor",
                    class: "w-6 h-6"
                  }, [
                    createVNode("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      d: "M12 4.5v15m7.5-7.5h-15"
                    })
                  ]))
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(`</div></div>`);
        }
        _push2(`</div></div></div><div class="row justify-content-center"${_scopeId}><div class="col"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Pagination, {
          links: _ctx.myorders.links
        }, null, _parent2, _scopeId));
        _push2(`</div></div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "container my-12" }, [
            createVNode("div", { class: "max-w-7xl mx-auto px-4" }, [
              createVNode("div", { class: "row justify-content-center" }, [
                createVNode("div", { class: "col-sm-12" }, [
                  createVNode("div", { class: "my-6" }, [
                    _ctx.myorders ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "overflow-x-auto relative shadow-md sm:rounded-lg"
                    }, [
                      createVNode("table", { class: "w-full text-sm text-left text-gray-500" }, [
                        createVNode("thead", { class: "text-xs text-white uppercase bg-green-600" }, [
                          createVNode("tr", null, [
                            createVNode("th", {
                              scope: "col",
                              class: "py-3 px-6"
                            }, "Order No #"),
                            createVNode("th", {
                              scope: "col",
                              class: "py-3 px-6 hidden sm:table-cell"
                            }, "Quantity"),
                            createVNode("th", {
                              scope: "col",
                              class: "py-3 px-6 hidden sm:table-cell"
                            }, "Date"),
                            createVNode("th", {
                              scope: "col",
                              class: "py-3 px-6 hidden sm:table-cell"
                            }, "Price"),
                            createVNode("th", {
                              scope: "col",
                              class: "py-3 px-6 hidden sm:table-cell"
                            }, "Status"),
                            createVNode("th", {
                              scope: "col",
                              class: "py-3 px-6"
                            }, "Action")
                          ])
                        ]),
                        createVNode("tbody", null, [
                          (openBlock(true), createBlock(Fragment, null, renderList(_ctx.myorders.data, (item, index) => {
                            var _a;
                            return openBlock(), createBlock("tr", {
                              key: index,
                              class: "bg-white border-b"
                            }, [
                              createVNode("th", {
                                scope: "row",
                                class: "py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
                              }, [
                                createVNode(_component_Link, {
                                  href: _ctx.route("view.order.status", item.id)
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.invoice_no), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["href"]),
                                createVNode("div", {
                                  class: "my-1 visible sm:hidden",
                                  style: { "font-size": "13px" }
                                }, [
                                  createTextVNode(toDisplayString(_ctx.dateTime(item.created_at)) + " ", 1),
                                  createVNode("br"),
                                  createVNode("div", { class: "mt-2" }, [
                                    item.status === "waiting quotations from vendors" ? (openBlock(), createBlock("span", {
                                      key: 0,
                                      class: "bg-sky-400 inline-flex text-center px-3 py-1.5 rounded-full text-white text-xs"
                                    }, "pending quotation")) : createCommentVNode("", true),
                                    item.status === "pending acceptance" ? (openBlock(), createBlock("span", {
                                      key: 1,
                                      class: "bg-teal-400 px-3 py-1.5 inline-flex text-center rounded-full text-white text-xs"
                                    }, "pending acceptance")) : createCommentVNode("", true),
                                    item.status === "waiting approval" ? (openBlock(), createBlock("span", {
                                      key: 2,
                                      class: "bg-teal-400 px-3 py-1.5 inline-flex text-center rounded-full text-white text-xs"
                                    }, "waiting approval")) : createCommentVNode("", true),
                                    item.status === "pending payment" ? (openBlock(), createBlock("span", {
                                      key: 3,
                                      class: "bg-orange-400 px-3 py-1.5 inline-flex text-center rounded-full text-white text-xs"
                                    }, "pending payment")) : createCommentVNode("", true),
                                    item.status === "paid" ? (openBlock(), createBlock("span", {
                                      key: 4,
                                      class: "bg-green-400 px-3 py-1.5 rounded-full inline-flex text-center text-white text-xs"
                                    }, "paid")) : createCommentVNode("", true)
                                  ])
                                ])
                              ]),
                              createVNode("td", { class: "py-4 px-6 hidden sm:table-cell" }, toDisplayString((_a = item.order_items) == null ? void 0 : _a.length), 1),
                              createVNode("td", { class: "py-4 px-6 hidden sm:table-cell" }, toDisplayString(_ctx.dateTime(item.created_at)), 1),
                              createVNode("td", { class: "py-4 px-6 hidden sm:table-cell" }, [
                                item.grand_total ? (openBlock(), createBlock("span", { key: 0 }, "Kes " + toDisplayString(item.grand_total), 1)) : (openBlock(), createBlock("span", { key: 1 }, "n/a"))
                              ]),
                              createVNode("td", { class: "py-4 px-6 hidden sm:table-cell" }, [
                                createVNode("div", null, [
                                  item.status === "waiting quotations from vendors" ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    class: "bg-sky-400 inline-flex text-center px-3 py-1.5 rounded-full text-white text-xs"
                                  }, "pending quotation")) : createCommentVNode("", true),
                                  item.status === "pending acceptance" ? (openBlock(), createBlock("span", {
                                    key: 1,
                                    class: "bg-teal-400 px-3 py-1.5 inline-flex text-center rounded-full text-white text-xs"
                                  }, "pending acceptance")) : createCommentVNode("", true),
                                  item.status === "waiting approval" ? (openBlock(), createBlock("span", {
                                    key: 2,
                                    class: "bg-teal-400 px-3 py-1.5 inline-flex text-center rounded-full text-white text-xs"
                                  }, "waiting approval")) : createCommentVNode("", true),
                                  item.status === "pending payment" ? (openBlock(), createBlock("span", {
                                    key: 3,
                                    class: "bg-orange-400 px-3 py-1.5 inline-flex text-center rounded-full text-white text-xs"
                                  }, "pending payment")) : createCommentVNode("", true),
                                  item.status === "paid" ? (openBlock(), createBlock("span", {
                                    key: 4,
                                    class: "bg-green-400 px-3 py-1.5 rounded-full inline-flex text-center text-white text-xs"
                                  }, "paid")) : createCommentVNode("", true)
                                ])
                              ]),
                              createVNode("td", { class: "py-4 px-6" }, [
                                item.status === "pending acceptance" ? (openBlock(), createBlock(_component_Link, {
                                  key: 0,
                                  href: _ctx.route("view.order.final", item.id),
                                  class: "text-decoration-none h-10 px-6 py-2.5 hover:bg-green-400 font-semibold rounded-md bg-green-600 text-white"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Accept Quotation")
                                  ]),
                                  _: 2
                                }, 1032, ["href"])) : item.status === "pending payment" ? (openBlock(), createBlock("button", {
                                  key: 1,
                                  class: "text-decoration-none h-10 px-6 py-2.5 hover:bg-orange-400 font-semibold rounded-md bg-orange-600 text-white",
                                  onClick: ($event) => _ctx.moveToCheckout(item.id)
                                }, "Pay Order", 8, ["onClick"])) : (openBlock(), createBlock("span", { key: 2 }, "..."))
                              ])
                            ]);
                          }), 128))
                        ])
                      ])
                    ])) : (openBlock(), createBlock("div", { key: 1 }, [
                      createVNode("div", {
                        class: "alert alert-info",
                        role: "alert"
                      }, [
                        createVNode("p", null, "Sorry you dont have any orders"),
                        createVNode(_component_Link, {
                          href: "/",
                          class: "text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800 inline-flex"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Add books to this cart "),
                            (openBlock(), createBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              fill: "none",
                              viewBox: "0 0 24 24",
                              "stroke-width": "1.5",
                              stroke: "currentColor",
                              class: "w-6 h-6"
                            }, [
                              createVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                d: "M12 4.5v15m7.5-7.5h-15"
                              })
                            ]))
                          ]),
                          _: 1
                        })
                      ])
                    ]))
                  ])
                ])
              ]),
              createVNode("div", { class: "row justify-content-center" }, [
                createVNode("div", { class: "col" }, [
                  createVNode(_component_Pagination, {
                    links: _ctx.myorders.links
                  }, null, 8, ["links"])
                ])
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Orders.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Orders = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Orders as default
};
