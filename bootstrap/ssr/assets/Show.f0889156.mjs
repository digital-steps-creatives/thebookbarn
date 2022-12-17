import { mergeProps, withCtx, unref, createTextVNode, createVNode, toDisplayString, withModifiers, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { A as AppLayout } from "./AdminLayout.5f45202a.mjs";
import "./ApplicationLogo.8c74c1d0.mjs";
import "./Checkbox.75ff4498.mjs";
import { _ as _sfc_main$2, a as _sfc_main$3 } from "./TextInput.4df6fbdc.mjs";
import { _ as _sfc_main$1 } from "./InputLabel.4e8d4ed9.mjs";
import { _ as _sfc_main$4 } from "./PrimaryButton.1245566b.mjs";
import { useForm, Link } from "@inertiajs/inertia-vue3";
import "@protonemedia/inertiajs-tables-laravel-query-builder";
import "@inertiajs/inertia";
import "./ResponsiveNavLink.cc3c0f4e.mjs";
import "./_plugin-vue_export-helper.43be4956.mjs";
const _sfc_main = {
  __name: "Show",
  __ssrInlineRender: true,
  props: {
    customer: Object
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      name: props.customer.name,
      email: props.customer.email
    });
    const updateCustomer = () => {
      form.post(route("admin.customer.update"), {
        onFinish: () => form.reset("password")
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(AppLayout, mergeProps({
        title: "Manage / Customers/ Customer / " + __props.customer.name
      }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="font-semibold text-xl text-gray-800 leading-tight"${_scopeId}> Manage / Customers/ Customer / ${ssrInterpolate(__props.customer.name)} <br${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("admin.customers"),
              class: "text-secondary-600 text-decoration-none text-sm"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Back to Customers`);
                } else {
                  return [
                    createTextVNode("Back to Customers")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</h2>`);
          } else {
            return [
              createVNode("h2", { class: "font-semibold text-xl text-gray-800 leading-tight" }, [
                createTextVNode(" Manage / Customers/ Customer / " + toDisplayString(__props.customer.name) + " ", 1),
                createVNode("br"),
                createVNode(unref(Link), {
                  href: _ctx.route("admin.customers"),
                  class: "text-secondary-600 text-decoration-none text-sm"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Back to Customers")
                  ]),
                  _: 1
                }, 8, ["href"])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-12"${_scopeId}><div class="max-w-7xl mx-auto sm:px-6 lg:px-8"${_scopeId}><div class="row"${_scopeId}><div class="col-sm-4"${_scopeId}><div class="bg-white p-8 sm:rounded-lg"${_scopeId}><h4${_scopeId}>Basic Information</h4><form id="basic__information"${_scopeId}><div class="mb-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, {
              for: "name",
              value: "Full Names"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, {
              id: "name",
              modelValue: unref(form).name,
              "onUpdate:modelValue": ($event) => unref(form).name = $event,
              type: "text",
              class: "mt-1 block w-full",
              required: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              class: "mt-2",
              message: unref(form).errors.name
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, {
              for: "email",
              value: "Email Address"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, {
              id: "email",
              modelValue: unref(form).email,
              "onUpdate:modelValue": ($event) => unref(form).email = $event,
              type: "email",
              class: "mt-1 block w-full",
              required: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              class: "mt-2",
              message: unref(form).errors.email
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: ["my-4", { "opacity-25": unref(form).processing }],
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Update Customer Profile `);
                } else {
                  return [
                    createTextVNode(" Update Customer Profile ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form></div></div><div class="col-sm-8"${_scopeId}><div class="py-1"${_scopeId}><main class="h-full overflow-y-auto"${_scopeId}><div class="mx-auto grid"${_scopeId}><div class="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4"${_scopeId}><div class="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800"${_scopeId}><div class="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500"${_scopeId}><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"${_scopeId}><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"${_scopeId}></path></svg></div><div${_scopeId}><p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400"${_scopeId}> Delivered Orders </p><p class="text-lg font-semibold text-gray-700 dark:text-gray-200"${_scopeId}> 10 </p></div></div><div class="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800"${_scopeId}><div class="p-3 mr-4 text-green-500 bg-green-100 rounded-full dark:text-green-100 dark:bg-green-500"${_scopeId}><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"${_scopeId}><path fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"${_scopeId}></path></svg></div><div${_scopeId}><p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400"${_scopeId}> Quotation Received </p><p class="text-lg font-semibold text-gray-700 dark:text-gray-200"${_scopeId}> 24 </p></div></div><div class="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800"${_scopeId}><div class="p-3 mr-4 text-teal-500 bg-teal-100 rounded-full dark:text-teal-100 dark:bg-teal-500"${_scopeId}><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"${_scopeId}><path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd"${_scopeId}></path></svg></div><div${_scopeId}><p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400"${_scopeId}> Pending Orders </p><p class="text-lg font-semibold text-gray-700 dark:text-gray-200"${_scopeId}> 376 </p></div></div><div class="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800"${_scopeId}><div class="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full dark:text-blue-100 dark:bg-blue-500"${_scopeId}><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"${_scopeId}><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"${_scopeId}></path></svg></div><div${_scopeId}><p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400"${_scopeId}> Cancelled Orders </p><p class="text-lg font-semibold text-gray-700 dark:text-gray-200"${_scopeId}> 35 </p></div></div></div></div></main></div><div class="p-2 bg-white"${_scopeId}><div class="w-full mx-auto bg-white"${_scopeId}><header class="px-3 py-3 border-b border-gray-100"${_scopeId}><h4 class="text-sm font-medium text-gray-600 dark:text-gray-400"${_scopeId}>Orders</h4></header><div class="p-3"${_scopeId}><div class="overflow-x-auto"${_scopeId}><table class="table-auto w-full"${_scopeId}><thead class="text-xs font-semibold uppercase text-teal-400 bg-teal-100"${_scopeId}><tr${_scopeId}><th class="p-2 whitespace-nowrap"${_scopeId}><div class="font-semibold text-left"${_scopeId}>Order#</div></th><th class="p-2 whitespace-nowrap"${_scopeId}><div class="font-semibold text-left"${_scopeId}>Quantity</div></th><th class="p-2 whitespace-nowrap"${_scopeId}><div class="font-semibold text-left"${_scopeId}>Status</div></th><th class="p-2 whitespace-nowrap"${_scopeId}><div class="font-semibold text-center"${_scopeId}>Action</div></th></tr></thead><tbody class="text-sm divide-y divide-gray-100"${_scopeId}><!--[-->`);
            ssrRenderList(__props.customer.orders, (order, key) => {
              _push2(`<tr${_scopeId}><td class="p-2 whitespace-nowrap"${_scopeId}><div class="text-left"${_scopeId}>${ssrInterpolate(order.invoice_no)}</div></td><td class="p-2 whitespace-nowrap"${_scopeId}><div class="text-left"${_scopeId}>${ssrInterpolate(order.order_items.length)}</div></td><td class="p-2 whitespace-nowrap"${_scopeId}><div class="text-left font-medium text-green-500"${_scopeId}>`);
              if (order.status === "waiting quotations from vendors") {
                _push2(`<span class="bg-sky-400 px-3 py-1.5 rounded-full text-white text-xs"${_scopeId}>pending quotation</span>`);
              } else if (order.status === "waiting approval") {
                _push2(`<span class="bg-teal-400 px-3 py-1.5 rounded-full text-white text-xs"${_scopeId}>pending approval</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></td><td class="p-2 whitespace-nowrap"${_scopeId}><div class="text-lg text-center"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), { class: "text-sm" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Manage Order`);
                  } else {
                    return [
                      createTextVNode("Manage Order")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div></td></tr>`);
            });
            _push2(`<!--]--></tbody></table></div></div></div></div></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-12" }, [
                createVNode("div", { class: "max-w-7xl mx-auto sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "row" }, [
                    createVNode("div", { class: "col-sm-4" }, [
                      createVNode("div", { class: "bg-white p-8 sm:rounded-lg" }, [
                        createVNode("h4", null, "Basic Information"),
                        createVNode("form", {
                          id: "basic__information",
                          onSubmit: withModifiers(updateCustomer, ["prevent"])
                        }, [
                          createVNode("div", { class: "mb-3" }, [
                            createVNode(_sfc_main$1, {
                              for: "name",
                              value: "Full Names"
                            }),
                            createVNode(_sfc_main$2, {
                              id: "name",
                              modelValue: unref(form).name,
                              "onUpdate:modelValue": ($event) => unref(form).name = $event,
                              type: "text",
                              class: "mt-1 block w-full",
                              required: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_sfc_main$3, {
                              class: "mt-2",
                              message: unref(form).errors.name
                            }, null, 8, ["message"])
                          ]),
                          createVNode("div", null, [
                            createVNode(_sfc_main$1, {
                              for: "email",
                              value: "Email Address"
                            }),
                            createVNode(_sfc_main$2, {
                              id: "email",
                              modelValue: unref(form).email,
                              "onUpdate:modelValue": ($event) => unref(form).email = $event,
                              type: "email",
                              class: "mt-1 block w-full",
                              required: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_sfc_main$3, {
                              class: "mt-2",
                              message: unref(form).errors.email
                            }, null, 8, ["message"])
                          ]),
                          createVNode("div", null, [
                            createVNode(_sfc_main$4, {
                              class: ["my-4", { "opacity-25": unref(form).processing }],
                              disabled: unref(form).processing
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Update Customer Profile ")
                              ]),
                              _: 1
                            }, 8, ["class", "disabled"])
                          ])
                        ], 40, ["onSubmit"])
                      ])
                    ]),
                    createVNode("div", { class: "col-sm-8" }, [
                      createVNode("div", { class: "py-1" }, [
                        createVNode("main", { class: "h-full overflow-y-auto" }, [
                          createVNode("div", { class: "mx-auto grid" }, [
                            createVNode("div", { class: "grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4" }, [
                              createVNode("div", { class: "flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800" }, [
                                createVNode("div", { class: "p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500" }, [
                                  (openBlock(), createBlock("svg", {
                                    class: "w-5 h-5",
                                    fill: "currentColor",
                                    viewBox: "0 0 20 20"
                                  }, [
                                    createVNode("path", { d: "M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" })
                                  ]))
                                ]),
                                createVNode("div", null, [
                                  createVNode("p", { class: "mb-2 text-sm font-medium text-gray-600 dark:text-gray-400" }, " Delivered Orders "),
                                  createVNode("p", { class: "text-lg font-semibold text-gray-700 dark:text-gray-200" }, " 10 ")
                                ])
                              ]),
                              createVNode("div", { class: "flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800" }, [
                                createVNode("div", { class: "p-3 mr-4 text-green-500 bg-green-100 rounded-full dark:text-green-100 dark:bg-green-500" }, [
                                  (openBlock(), createBlock("svg", {
                                    class: "w-5 h-5",
                                    fill: "currentColor",
                                    viewBox: "0 0 20 20"
                                  }, [
                                    createVNode("path", {
                                      "fill-rule": "evenodd",
                                      d: "M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z",
                                      "clip-rule": "evenodd"
                                    })
                                  ]))
                                ]),
                                createVNode("div", null, [
                                  createVNode("p", { class: "mb-2 text-sm font-medium text-gray-600 dark:text-gray-400" }, " Quotation Received "),
                                  createVNode("p", { class: "text-lg font-semibold text-gray-700 dark:text-gray-200" }, " 24 ")
                                ])
                              ]),
                              createVNode("div", { class: "flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800" }, [
                                createVNode("div", { class: "p-3 mr-4 text-teal-500 bg-teal-100 rounded-full dark:text-teal-100 dark:bg-teal-500" }, [
                                  (openBlock(), createBlock("svg", {
                                    class: "w-5 h-5",
                                    fill: "currentColor",
                                    viewBox: "0 0 20 20"
                                  }, [
                                    createVNode("path", {
                                      "fill-rule": "evenodd",
                                      d: "M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z",
                                      "clip-rule": "evenodd"
                                    })
                                  ]))
                                ]),
                                createVNode("div", null, [
                                  createVNode("p", { class: "mb-2 text-sm font-medium text-gray-600 dark:text-gray-400" }, " Pending Orders "),
                                  createVNode("p", { class: "text-lg font-semibold text-gray-700 dark:text-gray-200" }, " 376 ")
                                ])
                              ]),
                              createVNode("div", { class: "flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800" }, [
                                createVNode("div", { class: "p-3 mr-4 text-blue-500 bg-blue-100 rounded-full dark:text-blue-100 dark:bg-blue-500" }, [
                                  (openBlock(), createBlock("svg", {
                                    class: "w-5 h-5",
                                    fill: "currentColor",
                                    viewBox: "0 0 20 20"
                                  }, [
                                    createVNode("path", { d: "M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" })
                                  ]))
                                ]),
                                createVNode("div", null, [
                                  createVNode("p", { class: "mb-2 text-sm font-medium text-gray-600 dark:text-gray-400" }, " Cancelled Orders "),
                                  createVNode("p", { class: "text-lg font-semibold text-gray-700 dark:text-gray-200" }, " 35 ")
                                ])
                              ])
                            ])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "p-2 bg-white" }, [
                        createVNode("div", { class: "w-full mx-auto bg-white" }, [
                          createVNode("header", { class: "px-3 py-3 border-b border-gray-100" }, [
                            createVNode("h4", { class: "text-sm font-medium text-gray-600 dark:text-gray-400" }, "Orders")
                          ]),
                          createVNode("div", { class: "p-3" }, [
                            createVNode("div", { class: "overflow-x-auto" }, [
                              createVNode("table", { class: "table-auto w-full" }, [
                                createVNode("thead", { class: "text-xs font-semibold uppercase text-teal-400 bg-teal-100" }, [
                                  createVNode("tr", null, [
                                    createVNode("th", { class: "p-2 whitespace-nowrap" }, [
                                      createVNode("div", { class: "font-semibold text-left" }, "Order#")
                                    ]),
                                    createVNode("th", { class: "p-2 whitespace-nowrap" }, [
                                      createVNode("div", { class: "font-semibold text-left" }, "Quantity")
                                    ]),
                                    createVNode("th", { class: "p-2 whitespace-nowrap" }, [
                                      createVNode("div", { class: "font-semibold text-left" }, "Status")
                                    ]),
                                    createVNode("th", { class: "p-2 whitespace-nowrap" }, [
                                      createVNode("div", { class: "font-semibold text-center" }, "Action")
                                    ])
                                  ])
                                ]),
                                createVNode("tbody", { class: "text-sm divide-y divide-gray-100" }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(__props.customer.orders, (order, key) => {
                                    return openBlock(), createBlock("tr", { key }, [
                                      createVNode("td", { class: "p-2 whitespace-nowrap" }, [
                                        createVNode("div", { class: "text-left" }, toDisplayString(order.invoice_no), 1)
                                      ]),
                                      createVNode("td", { class: "p-2 whitespace-nowrap" }, [
                                        createVNode("div", { class: "text-left" }, toDisplayString(order.order_items.length), 1)
                                      ]),
                                      createVNode("td", { class: "p-2 whitespace-nowrap" }, [
                                        createVNode("div", { class: "text-left font-medium text-green-500" }, [
                                          order.status === "waiting quotations from vendors" ? (openBlock(), createBlock("span", {
                                            key: 0,
                                            class: "bg-sky-400 px-3 py-1.5 rounded-full text-white text-xs"
                                          }, "pending quotation")) : order.status === "waiting approval" ? (openBlock(), createBlock("span", {
                                            key: 1,
                                            class: "bg-teal-400 px-3 py-1.5 rounded-full text-white text-xs"
                                          }, "pending approval")) : createCommentVNode("", true)
                                        ])
                                      ]),
                                      createVNode("td", { class: "p-2 whitespace-nowrap" }, [
                                        createVNode("div", { class: "text-lg text-center" }, [
                                          createVNode(unref(Link), { class: "text-sm" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Manage Order")
                                            ]),
                                            _: 1
                                          })
                                        ])
                                      ])
                                    ]);
                                  }), 128))
                                ])
                              ])
                            ])
                          ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Affiliates/Show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
