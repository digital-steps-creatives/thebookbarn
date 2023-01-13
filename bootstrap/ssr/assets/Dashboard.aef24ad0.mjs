import { mergeProps, withCtx, createVNode, unref, openBlock, createBlock, toDisplayString, createTextVNode, Fragment, renderList, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderStyle } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AppLayout.d46aba5b.mjs";
import { Link } from "@inertiajs/inertia-vue3";
import { Table } from "@protonemedia/inertiajs-tables-laravel-query-builder";
import { ref } from "@vue/runtime-core";
import moment from "moment";
import "@inertiajs/inertia";
import "./ResponsiveNavLink.016ef96f.mjs";
import "./_plugin-vue_export-helper.43be4956.mjs";
const _sfc_main = {
  __name: "Dashboard",
  __ssrInlineRender: true,
  props: {
    orders: Object,
    deliveriesCount: String,
    quotsCount: String,
    greetings: String
  },
  setup(__props) {
    const dateTime = (value) => {
      return moment(value).format("lll");
    };
    const moveToCheckout = (order) => {
      localStorage.removeItem("orderItemready");
      loading.value = true;
      localStorage.setItem("orderItemready", JSON.stringify(order));
      window.location.href = route("checkout.order.final");
    };
    const loading = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({ title: "My Account" }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="font-semibold text-xl text-gray-800 leading-tight"${_scopeId}> My Account </h2>`);
          } else {
            return [
              createVNode("h2", { class: "font-semibold text-xl text-gray-800 leading-tight" }, " My Account ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-12"${_scopeId}><div class="max-w-7xl mx-auto sm:px-6 lg:px-8"${_scopeId}><div class="bg-white overflow-hidden shadow-xl sm:rounded-lg"${_scopeId}><div class="font-bold text-xl text-gray-800 leading-none mb-4 mt-4 px-4"${_scopeId}>${ssrInterpolate(__props.greetings)}, ${ssrInterpolate(_ctx.$page.props.user.name)}</div><div class="flex grid sm:grid-cols-3 grid-cols-1 gap-3 my-8 px-4"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), { class: "border rounded p-4 text-decoration-none block" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="grid__icon mr-2"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 text-green-600"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"${_scopeId2}></path></svg></div><div class="flex justify-between"${_scopeId2}><div${_scopeId2}><h4${_scopeId2}>Orders</h4><small${_scopeId2}>Track your order</small></div><div${_scopeId2}>`);
                  if (__props.orders.length > 0) {
                    _push3(`<p class="text-gray-600 ml-2 font-medium text-2xl"${_scopeId2}>${ssrInterpolate(__props.orders.length)}</p>`);
                  } else {
                    _push3(`<p class="text-gray-600 ml-2 font-medium text-2xl"${_scopeId2}> 0 </p>`);
                  }
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "grid__icon mr-2" }, [
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        "stroke-width": "1.5",
                        stroke: "currentColor",
                        class: "w-12 h-12 text-green-600"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          d: "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                        })
                      ]))
                    ]),
                    createVNode("div", { class: "flex justify-between" }, [
                      createVNode("div", null, [
                        createVNode("h4", null, "Orders"),
                        createVNode("small", null, "Track your order")
                      ]),
                      createVNode("div", null, [
                        __props.orders.length > 0 ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "text-gray-600 ml-2 font-medium text-2xl"
                        }, toDisplayString(__props.orders.length), 1)) : (openBlock(), createBlock("p", {
                          key: 1,
                          class: "text-gray-600 ml-2 font-medium text-2xl"
                        }, " 0 "))
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), { class: "border rounded p-4 text-decoration-none block" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="grid__icon mr-2"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 text-orange-600"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"${_scopeId2}></path></svg></div><div class="flex justify-between"${_scopeId2}><div${_scopeId2}><h4${_scopeId2}>Deliveries</h4><small${_scopeId2}>deliveries</small></div><div${_scopeId2}>`);
                  if (__props.deliveriesCount.length > 0) {
                    _push3(`<p class="text-gray-600 ml-2 font-medium text-2xl"${_scopeId2}>${ssrInterpolate(__props.deliveriesCount.length)}</p>`);
                  } else {
                    _push3(`<p class="text-gray-600 ml-2 font-medium text-2xl"${_scopeId2}> 0 </p>`);
                  }
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "grid__icon mr-2" }, [
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        "stroke-width": "1.5",
                        stroke: "currentColor",
                        class: "w-12 h-12 text-orange-600"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          d: "M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                        })
                      ]))
                    ]),
                    createVNode("div", { class: "flex justify-between" }, [
                      createVNode("div", null, [
                        createVNode("h4", null, "Deliveries"),
                        createVNode("small", null, "deliveries")
                      ]),
                      createVNode("div", null, [
                        __props.deliveriesCount.length > 0 ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "text-gray-600 ml-2 font-medium text-2xl"
                        }, toDisplayString(__props.deliveriesCount.length), 1)) : (openBlock(), createBlock("p", {
                          key: 1,
                          class: "text-gray-600 ml-2 font-medium text-2xl"
                        }, " 0 "))
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), { class: "border rounded p-4 text-decoration-none block" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="grid__icon mr-2"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 text-teal-600"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"${_scopeId2}></path></svg></div><div class="flex justify-between"${_scopeId2}><div${_scopeId2}><h4${_scopeId2}>Your Quotations</h4><small${_scopeId2}>Track your quotations</small></div><div${_scopeId2}>`);
                  if (__props.quotsCount.length > 0) {
                    _push3(`<p class="text-gray-600 ml-2 font-medium text-2xl"${_scopeId2}>${ssrInterpolate(__props.quotsCount.length)}</p>`);
                  } else {
                    _push3(`<p class="text-gray-600 ml-2 font-medium text-2xl"${_scopeId2}> 0 </p>`);
                  }
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "grid__icon mr-2" }, [
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        "stroke-width": "1.5",
                        stroke: "currentColor",
                        class: "w-12 h-12 text-teal-600"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          d: "M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                        })
                      ]))
                    ]),
                    createVNode("div", { class: "flex justify-between" }, [
                      createVNode("div", null, [
                        createVNode("h4", null, "Your Quotations"),
                        createVNode("small", null, "Track your quotations")
                      ]),
                      createVNode("div", null, [
                        __props.quotsCount.length > 0 ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "text-gray-600 ml-2 font-medium text-2xl"
                        }, toDisplayString(__props.quotsCount.length), 1)) : (openBlock(), createBlock("p", {
                          key: 1,
                          class: "text-gray-600 ml-2 font-medium text-2xl"
                        }, " 0 "))
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="block mt-5 w-full"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Table), {
              striped: true,
              "prevent-overlapping-requests": false,
              "input-debounce-ms": 1e3,
              "prevent-scroll": true,
              resource: __props.orders
            }, {
              head: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<tr${_scopeId2}><th${_scopeId2}><div class="py-3 px-6 w-full"${_scopeId2}><span class="flex flex-row items-center"${_scopeId2}><span class="uppercase"${_scopeId2}>Order #</span></span></div></th><th class="py-3 px-6 hidden sm:table-cell"${_scopeId2}><div class="w-full"${_scopeId2}><span class="flex flex-row items-center"${_scopeId2}><span class="uppercase"${_scopeId2}>Quantity</span></span></div></th><th class="py-3 px-6 hidden sm:table-cell"${_scopeId2}><div class="w-full"${_scopeId2}><span class="flex flex-row items-center"${_scopeId2}><span class="uppercase"${_scopeId2}>Date</span></span></div></th><th scope="col" class="py-3 px-6 hidden sm:table-cell"${_scopeId2}>Price</th><th class="py-3 px-6 hidden sm:table-cell"${_scopeId2}><div class="w-full"${_scopeId2}><span class="flex flex-row items-center"${_scopeId2}><span class="uppercase"${_scopeId2}>Status</span></span></div></th><th class="py-3 px-6"${_scopeId2}><div class="w-full"${_scopeId2}><span class="flex flex-row items-center"${_scopeId2}><span class="uppercase"${_scopeId2}>Actions</span></span></div></th></tr>`);
                } else {
                  return [
                    createVNode("tr", null, [
                      createVNode("th", null, [
                        createVNode("div", { class: "py-3 px-6 w-full" }, [
                          createVNode("span", { class: "flex flex-row items-center" }, [
                            createVNode("span", { class: "uppercase" }, "Order #")
                          ])
                        ])
                      ]),
                      createVNode("th", { class: "py-3 px-6 hidden sm:table-cell" }, [
                        createVNode("div", { class: "w-full" }, [
                          createVNode("span", { class: "flex flex-row items-center" }, [
                            createVNode("span", { class: "uppercase" }, "Quantity")
                          ])
                        ])
                      ]),
                      createVNode("th", { class: "py-3 px-6 hidden sm:table-cell" }, [
                        createVNode("div", { class: "w-full" }, [
                          createVNode("span", { class: "flex flex-row items-center" }, [
                            createVNode("span", { class: "uppercase" }, "Date")
                          ])
                        ])
                      ]),
                      createVNode("th", {
                        scope: "col",
                        class: "py-3 px-6 hidden sm:table-cell"
                      }, "Price"),
                      createVNode("th", { class: "py-3 px-6 hidden sm:table-cell" }, [
                        createVNode("div", { class: "w-full" }, [
                          createVNode("span", { class: "flex flex-row items-center" }, [
                            createVNode("span", { class: "uppercase" }, "Status")
                          ])
                        ])
                      ]),
                      createVNode("th", { class: "py-3 px-6" }, [
                        createVNode("div", { class: "w-full" }, [
                          createVNode("span", { class: "flex flex-row items-center" }, [
                            createVNode("span", { class: "uppercase" }, "Actions")
                          ])
                        ])
                      ])
                    ])
                  ];
                }
              }),
              body: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(__props.orders, (item, index) => {
                    var _a;
                    _push3(`<tr class="bg-white border-b"${_scopeId2}><th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(Link), {
                      href: _ctx.route("view.order.status", item.id),
                      class: "text-decoration-none"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(item.invoice_no)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(item.invoice_no), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`<div class="my-1 visible sm:hidden" style="${ssrRenderStyle({ "font-size": "13px" })}"${_scopeId2}>${ssrInterpolate(dateTime(item.created_at))} <br${_scopeId2}><div class="mt-2"${_scopeId2}>`);
                    if (item.status === "waiting quotations from vendors") {
                      _push3(`<span class="bg-sky-400 inline-flex text-center px-3 py-1.5 rounded-full text-white text-xs"${_scopeId2}>pending quotation</span>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    if (item.status === "pending acceptance") {
                      _push3(`<span class="bg-teal-400 px-3 py-1.5 inline-flex text-center rounded-full text-white text-xs"${_scopeId2}>pending acceptance</span>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    if (item.status === "waiting approval") {
                      _push3(`<span class="bg-teal-400 px-3 py-1.5 inline-flex text-center rounded-full text-white text-xs"${_scopeId2}>waiting approval</span>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    if (item.status === "pending payment") {
                      _push3(`<span class="bg-orange-400 px-3 py-1.5 inline-flex text-center rounded-full text-white text-xs"${_scopeId2}>pending payment</span>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    if (item.status === "paid") {
                      _push3(`<span class="bg-green-400 px-3 py-1.5 rounded-full inline-flex text-center text-white text-xs"${_scopeId2}>paid</span>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div></div></th><td class="py-4 px-6 hidden sm:table-cell"${_scopeId2}>${ssrInterpolate((_a = item.order_items) == null ? void 0 : _a.length)}</td><td class="py-4 px-6 hidden sm:table-cell"${_scopeId2}>${ssrInterpolate(dateTime(item.created_at))}</td><td class="py-4 px-6 hidden sm:table-cell"${_scopeId2}>`);
                    if (item.grand_total) {
                      _push3(`<span${_scopeId2}>Kes ${ssrInterpolate(item.grand_total)}</span>`);
                    } else {
                      _push3(`<span${_scopeId2}>n/a</span>`);
                    }
                    _push3(`</td><td class="py-4 px-6 hidden sm:table-cell"${_scopeId2}><div class="mt-2"${_scopeId2}>`);
                    if (item.status === "waiting quotations from vendors") {
                      _push3(`<span class="bg-sky-400 inline-flex text-center px-3 py-1.5 rounded-full text-white text-xs"${_scopeId2}>pending quotation</span>`);
                    } else if (item.status === "pending acceptance") {
                      _push3(`<span class="bg-teal-400 px-3 py-1.5 inline-flex text-center rounded-full text-white text-xs"${_scopeId2}>pending acceptance</span>`);
                    } else if (item.status === "waiting approval") {
                      _push3(`<span class="bg-teal-400 px-3 py-1.5 inline-flex text-center rounded-full text-white text-xs"${_scopeId2}>waiting approval</span>`);
                    } else if (item.status === "pending payment") {
                      _push3(`<span class="bg-orange-400 px-3 py-1.5 inline-flex text-center rounded-full text-white text-xs"${_scopeId2}>pending payment</span>`);
                    } else if (item.status === "paid") {
                      _push3(`<span class="bg-green-400 px-3 py-1.5 rounded-full inline-flex text-center text-white text-xs"${_scopeId2}>paid</span>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div></td><td class="py-4 px-6"${_scopeId2}>`);
                    if (item.status === "pending acceptance") {
                      _push3(ssrRenderComponent(unref(Link), {
                        href: _ctx.route("view.order.final", item.id),
                        class: "text-decoration-none h-10 px-6 py-2.5 hover:bg-green-400 font-semibold rounded-md bg-green-600 text-white"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`Accept Quotation`);
                          } else {
                            return [
                              createTextVNode("Accept Quotation")
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else if (item.status === "pending payment") {
                      _push3(`<button class="text-decoration-none h-10 px-6 py-2.5 hover:bg-orange-400 font-semibold rounded-md bg-orange-600 text-white"${_scopeId2}>Pay Order</button>`);
                    } else {
                      _push3(`<span${_scopeId2}>...</span>`);
                    }
                    _push3(`</td></tr>`);
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.orders, (item, index) => {
                      var _a;
                      return openBlock(), createBlock("tr", {
                        key: index,
                        class: "bg-white border-b"
                      }, [
                        createVNode("th", {
                          scope: "row",
                          class: "py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
                        }, [
                          createVNode(unref(Link), {
                            href: _ctx.route("view.order.status", item.id),
                            class: "text-decoration-none"
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
                            createTextVNode(toDisplayString(dateTime(item.created_at)) + " ", 1),
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
                        createVNode("td", { class: "py-4 px-6 hidden sm:table-cell" }, toDisplayString(dateTime(item.created_at)), 1),
                        createVNode("td", { class: "py-4 px-6 hidden sm:table-cell" }, [
                          item.grand_total ? (openBlock(), createBlock("span", { key: 0 }, "Kes " + toDisplayString(item.grand_total), 1)) : (openBlock(), createBlock("span", { key: 1 }, "n/a"))
                        ]),
                        createVNode("td", { class: "py-4 px-6 hidden sm:table-cell" }, [
                          createVNode("div", { class: "mt-2" }, [
                            item.status === "waiting quotations from vendors" ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "bg-sky-400 inline-flex text-center px-3 py-1.5 rounded-full text-white text-xs"
                            }, "pending quotation")) : item.status === "pending acceptance" ? (openBlock(), createBlock("span", {
                              key: 1,
                              class: "bg-teal-400 px-3 py-1.5 inline-flex text-center rounded-full text-white text-xs"
                            }, "pending acceptance")) : item.status === "waiting approval" ? (openBlock(), createBlock("span", {
                              key: 2,
                              class: "bg-teal-400 px-3 py-1.5 inline-flex text-center rounded-full text-white text-xs"
                            }, "waiting approval")) : item.status === "pending payment" ? (openBlock(), createBlock("span", {
                              key: 3,
                              class: "bg-orange-400 px-3 py-1.5 inline-flex text-center rounded-full text-white text-xs"
                            }, "pending payment")) : item.status === "paid" ? (openBlock(), createBlock("span", {
                              key: 4,
                              class: "bg-green-400 px-3 py-1.5 rounded-full inline-flex text-center text-white text-xs"
                            }, "paid")) : createCommentVNode("", true)
                          ])
                        ]),
                        createVNode("td", { class: "py-4 px-6" }, [
                          item.status === "pending acceptance" ? (openBlock(), createBlock(unref(Link), {
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
                            onClick: ($event) => moveToCheckout(item.id)
                          }, "Pay Order", 8, ["onClick"])) : (openBlock(), createBlock("span", { key: 2 }, "..."))
                        ])
                      ]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-12" }, [
                createVNode("div", { class: "max-w-7xl mx-auto sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "bg-white overflow-hidden shadow-xl sm:rounded-lg" }, [
                    createVNode("div", { class: "font-bold text-xl text-gray-800 leading-none mb-4 mt-4 px-4" }, toDisplayString(__props.greetings) + ", " + toDisplayString(_ctx.$page.props.user.name), 1),
                    createVNode("div", { class: "flex grid sm:grid-cols-3 grid-cols-1 gap-3 my-8 px-4" }, [
                      createVNode(unref(Link), { class: "border rounded p-4 text-decoration-none block" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "grid__icon mr-2" }, [
                            (openBlock(), createBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              fill: "none",
                              viewBox: "0 0 24 24",
                              "stroke-width": "1.5",
                              stroke: "currentColor",
                              class: "w-12 h-12 text-green-600"
                            }, [
                              createVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                d: "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                              })
                            ]))
                          ]),
                          createVNode("div", { class: "flex justify-between" }, [
                            createVNode("div", null, [
                              createVNode("h4", null, "Orders"),
                              createVNode("small", null, "Track your order")
                            ]),
                            createVNode("div", null, [
                              __props.orders.length > 0 ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "text-gray-600 ml-2 font-medium text-2xl"
                              }, toDisplayString(__props.orders.length), 1)) : (openBlock(), createBlock("p", {
                                key: 1,
                                class: "text-gray-600 ml-2 font-medium text-2xl"
                              }, " 0 "))
                            ])
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(unref(Link), { class: "border rounded p-4 text-decoration-none block" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "grid__icon mr-2" }, [
                            (openBlock(), createBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              fill: "none",
                              viewBox: "0 0 24 24",
                              "stroke-width": "1.5",
                              stroke: "currentColor",
                              class: "w-12 h-12 text-orange-600"
                            }, [
                              createVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                d: "M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                              })
                            ]))
                          ]),
                          createVNode("div", { class: "flex justify-between" }, [
                            createVNode("div", null, [
                              createVNode("h4", null, "Deliveries"),
                              createVNode("small", null, "deliveries")
                            ]),
                            createVNode("div", null, [
                              __props.deliveriesCount.length > 0 ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "text-gray-600 ml-2 font-medium text-2xl"
                              }, toDisplayString(__props.deliveriesCount.length), 1)) : (openBlock(), createBlock("p", {
                                key: 1,
                                class: "text-gray-600 ml-2 font-medium text-2xl"
                              }, " 0 "))
                            ])
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(unref(Link), { class: "border rounded p-4 text-decoration-none block" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "grid__icon mr-2" }, [
                            (openBlock(), createBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              fill: "none",
                              viewBox: "0 0 24 24",
                              "stroke-width": "1.5",
                              stroke: "currentColor",
                              class: "w-12 h-12 text-teal-600"
                            }, [
                              createVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                d: "M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                              })
                            ]))
                          ]),
                          createVNode("div", { class: "flex justify-between" }, [
                            createVNode("div", null, [
                              createVNode("h4", null, "Your Quotations"),
                              createVNode("small", null, "Track your quotations")
                            ]),
                            createVNode("div", null, [
                              __props.quotsCount.length > 0 ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "text-gray-600 ml-2 font-medium text-2xl"
                              }, toDisplayString(__props.quotsCount.length), 1)) : (openBlock(), createBlock("p", {
                                key: 1,
                                class: "text-gray-600 ml-2 font-medium text-2xl"
                              }, " 0 "))
                            ])
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "block mt-5 w-full" }, [
                      createVNode(unref(Table), {
                        striped: true,
                        "prevent-overlapping-requests": false,
                        "input-debounce-ms": 1e3,
                        "prevent-scroll": true,
                        resource: __props.orders
                      }, {
                        head: withCtx(() => [
                          createVNode("tr", null, [
                            createVNode("th", null, [
                              createVNode("div", { class: "py-3 px-6 w-full" }, [
                                createVNode("span", { class: "flex flex-row items-center" }, [
                                  createVNode("span", { class: "uppercase" }, "Order #")
                                ])
                              ])
                            ]),
                            createVNode("th", { class: "py-3 px-6 hidden sm:table-cell" }, [
                              createVNode("div", { class: "w-full" }, [
                                createVNode("span", { class: "flex flex-row items-center" }, [
                                  createVNode("span", { class: "uppercase" }, "Quantity")
                                ])
                              ])
                            ]),
                            createVNode("th", { class: "py-3 px-6 hidden sm:table-cell" }, [
                              createVNode("div", { class: "w-full" }, [
                                createVNode("span", { class: "flex flex-row items-center" }, [
                                  createVNode("span", { class: "uppercase" }, "Date")
                                ])
                              ])
                            ]),
                            createVNode("th", {
                              scope: "col",
                              class: "py-3 px-6 hidden sm:table-cell"
                            }, "Price"),
                            createVNode("th", { class: "py-3 px-6 hidden sm:table-cell" }, [
                              createVNode("div", { class: "w-full" }, [
                                createVNode("span", { class: "flex flex-row items-center" }, [
                                  createVNode("span", { class: "uppercase" }, "Status")
                                ])
                              ])
                            ]),
                            createVNode("th", { class: "py-3 px-6" }, [
                              createVNode("div", { class: "w-full" }, [
                                createVNode("span", { class: "flex flex-row items-center" }, [
                                  createVNode("span", { class: "uppercase" }, "Actions")
                                ])
                              ])
                            ])
                          ])
                        ]),
                        body: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.orders, (item, index) => {
                            var _a;
                            return openBlock(), createBlock("tr", {
                              key: index,
                              class: "bg-white border-b"
                            }, [
                              createVNode("th", {
                                scope: "row",
                                class: "py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
                              }, [
                                createVNode(unref(Link), {
                                  href: _ctx.route("view.order.status", item.id),
                                  class: "text-decoration-none"
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
                                  createTextVNode(toDisplayString(dateTime(item.created_at)) + " ", 1),
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
                              createVNode("td", { class: "py-4 px-6 hidden sm:table-cell" }, toDisplayString(dateTime(item.created_at)), 1),
                              createVNode("td", { class: "py-4 px-6 hidden sm:table-cell" }, [
                                item.grand_total ? (openBlock(), createBlock("span", { key: 0 }, "Kes " + toDisplayString(item.grand_total), 1)) : (openBlock(), createBlock("span", { key: 1 }, "n/a"))
                              ]),
                              createVNode("td", { class: "py-4 px-6 hidden sm:table-cell" }, [
                                createVNode("div", { class: "mt-2" }, [
                                  item.status === "waiting quotations from vendors" ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    class: "bg-sky-400 inline-flex text-center px-3 py-1.5 rounded-full text-white text-xs"
                                  }, "pending quotation")) : item.status === "pending acceptance" ? (openBlock(), createBlock("span", {
                                    key: 1,
                                    class: "bg-teal-400 px-3 py-1.5 inline-flex text-center rounded-full text-white text-xs"
                                  }, "pending acceptance")) : item.status === "waiting approval" ? (openBlock(), createBlock("span", {
                                    key: 2,
                                    class: "bg-teal-400 px-3 py-1.5 inline-flex text-center rounded-full text-white text-xs"
                                  }, "waiting approval")) : item.status === "pending payment" ? (openBlock(), createBlock("span", {
                                    key: 3,
                                    class: "bg-orange-400 px-3 py-1.5 inline-flex text-center rounded-full text-white text-xs"
                                  }, "pending payment")) : item.status === "paid" ? (openBlock(), createBlock("span", {
                                    key: 4,
                                    class: "bg-green-400 px-3 py-1.5 rounded-full inline-flex text-center text-white text-xs"
                                  }, "paid")) : createCommentVNode("", true)
                                ])
                              ]),
                              createVNode("td", { class: "py-4 px-6" }, [
                                item.status === "pending acceptance" ? (openBlock(), createBlock(unref(Link), {
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
                                  onClick: ($event) => moveToCheckout(item.id)
                                }, "Pay Order", 8, ["onClick"])) : (openBlock(), createBlock("span", { key: 2 }, "..."))
                              ])
                            ]);
                          }), 128))
                        ]),
                        _: 1
                      }, 8, ["resource"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Business/Dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
