import { A as AppLayout } from "./AdminLayout.6a761998.mjs";
import { Link } from "@inertiajs/inertia-vue3";
import { resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
import "@inertiajs/inertia";
import "./ResponsiveNavLink.cc3c0f4e.mjs";
const _sfc_main = {
  props: {
    ordersPendingReview: Object,
    newvendors: Object,
    newcustomers: Object
  },
  components: {
    AppLayout,
    Link
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_AppLayout = resolveComponent("AppLayout");
  const _component_Link = resolveComponent("Link");
  _push(ssrRenderComponent(_component_AppLayout, mergeProps({ title: "Dashboard" }, _attrs), {
    header: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h2 class="font-semibold text-xl text-gray-800 leading-tight"${_scopeId}> Dashboard </h2>`);
      } else {
        return [
          createVNode("h2", { class: "font-semibold text-xl text-gray-800 leading-tight" }, " Dashboard ")
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="py-12"${_scopeId}><div class="max-w-7xl mx-auto sm:px-6 lg:px-8"${_scopeId}><div class="grid grid-cols-1 lg:grid-cols-2 filament-widgets-container gap-4 lg:gap-8 mb-6"${_scopeId}><div class=""${_scopeId}><h2 class="text-lg sm:text-xl font-bold tracking-tight"${_scopeId}>Welcome, ${ssrInterpolate(_ctx.$page.props.user.name)}</h2></div></div><div class="filament-stats grid gap-4 lg:gap-8 md:grid-cols-2 xl:grid-cols-4 mb-8"${_scopeId}><div class="filament-stats-card relative p-6 rounded-2xl bg-white shadow filament-stats-overview-widget-card"${_scopeId}><div class="space-y-2"${_scopeId}><div class="flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-gray-500"${_scopeId}><span${_scopeId}>New Vendors</span></div><div class="text-3xl"${_scopeId}>${ssrInterpolate($props.newvendors)}</div></div></div><div class="filament-stats-card relative p-6 rounded-2xl bg-purple-100 shadow filament-stats-overview-widget-card"${_scopeId}><div class="space-y-2"${_scopeId}><div class="flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-gray-500"${_scopeId}><span${_scopeId}>Orders Pending</span></div><div class="text-3xl"${_scopeId}>0</div></div></div><div class="filament-stats-card relative p-6 rounded-2xl bg-orange-100 shadow filament-stats-overview-widget-card"${_scopeId}><div class="space-y-2"${_scopeId}><div class="flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-gray-500"${_scopeId}><span${_scopeId}>Paid Orders</span></div><div class="text-3xl"${_scopeId}>0</div></div></div><div class="filament-stats-card relative p-6 rounded-2xl bg-green-100 shadow filament-stats-overview-widget-card"${_scopeId}><div class="space-y-2"${_scopeId}><div class="flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-gray-500"${_scopeId}><span${_scopeId}>New Customers</span></div><div class="text-3xl"${_scopeId}>${ssrInterpolate($props.newcustomers)}</div></div></div></div><div class="grid grid-cols-1 filament-widgets-container gap-4 lg:gap-8 mb-6"${_scopeId}><div${_scopeId}></div><div class="border border-gray-300 shadow-sm bg-white rounded-xl filament-tables-container"${_scopeId}><div class="px-2 pt-2"${_scopeId}><div class="filament-tables-header px-4 py-2 mb-2"${_scopeId}><div class="flex flex-col gap-4 md:justify-between md:items-start md:flex-row md:-mr-2"${_scopeId}><h2 class="filament-tables-header-heading text-xl font-bold tracking-tight"${_scopeId}>Orders Pending Review</h2></div></div></div><div class="filament-tables-table-container overflow-x-auto relative border-t"${_scopeId}><table class="filament-tables-table w-full text-left rtl:text-right divide-y table-auto text-sm"${_scopeId}><thead${_scopeId}><tr class="bg-teal-100"${_scopeId}><td class="filament-tables-header-cell p-0"${_scopeId}><span class="flex items-center w-full px-4 py-2 whitespace-nowrap space-x-1 rtl:space-x-reverse font-medium text-sm text-gray-600 cursor-default"${_scopeId}>Id</span></td><td class="filament-tables-header-cell p-0"${_scopeId}><span class="flex items-center w-full px-4 py-2 whitespace-nowrap space-x-1 rtl:space-x-reverse font-medium text-sm text-gray-600 cursor-default"${_scopeId}>Order #</span></td><td class="filament-tables-header-cell p-0"${_scopeId}><span class="flex items-center w-full px-4 py-2 whitespace-nowrap space-x-1 rtl:space-x-reverse font-medium text-sm text-gray-600 cursor-default"${_scopeId}>Status</span></td><td class="filament-tables-header-cell p-0"${_scopeId}><span class="flex items-center w-full px-4 py-2 whitespace-nowrap space-x-1 rtl:space-x-reverse font-medium text-sm text-gray-600 cursor-default"${_scopeId}>Action</span></td></tr></thead><tbody class="divide-y whitespace-nowrap"${_scopeId}><!--[-->`);
        ssrRenderList($props.ordersPendingReview, (item, index) => {
          _push2(`<tr class="filament-tables-row transition"${_scopeId}><td class="filament-tables-cell"${_scopeId}><div class="px-4 py-3"${_scopeId}>${ssrInterpolate(index + 1)}</div></td><td class="filament-tables-cell"${_scopeId}><div class="px-4 py-3"${_scopeId}>${ssrInterpolate(item.invoice_no)}</div></td><td class="filament-tables-cell"${_scopeId}><div class="px-4 py-3"${_scopeId}>${ssrInterpolate(item.status)}</div></td><td class="filament-tables-cell"${_scopeId}><div class="px-4 py-3"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_Link, null, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`Approve`);
              } else {
                return [
                  createTextVNode("Approve")
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
          _push2(`</div></td></tr>`);
        });
        _push2(`<!--]--></tbody></table></div></div></div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "py-12" }, [
            createVNode("div", { class: "max-w-7xl mx-auto sm:px-6 lg:px-8" }, [
              createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 filament-widgets-container gap-4 lg:gap-8 mb-6" }, [
                createVNode("div", { class: "" }, [
                  createVNode("h2", { class: "text-lg sm:text-xl font-bold tracking-tight" }, "Welcome, " + toDisplayString(_ctx.$page.props.user.name), 1)
                ])
              ]),
              createVNode("div", { class: "filament-stats grid gap-4 lg:gap-8 md:grid-cols-2 xl:grid-cols-4 mb-8" }, [
                createVNode("div", { class: "filament-stats-card relative p-6 rounded-2xl bg-white shadow filament-stats-overview-widget-card" }, [
                  createVNode("div", { class: "space-y-2" }, [
                    createVNode("div", { class: "flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-gray-500" }, [
                      createVNode("span", null, "New Vendors")
                    ]),
                    createVNode("div", { class: "text-3xl" }, toDisplayString($props.newvendors), 1)
                  ])
                ]),
                createVNode("div", { class: "filament-stats-card relative p-6 rounded-2xl bg-purple-100 shadow filament-stats-overview-widget-card" }, [
                  createVNode("div", { class: "space-y-2" }, [
                    createVNode("div", { class: "flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-gray-500" }, [
                      createVNode("span", null, "Orders Pending")
                    ]),
                    createVNode("div", { class: "text-3xl" }, "0")
                  ])
                ]),
                createVNode("div", { class: "filament-stats-card relative p-6 rounded-2xl bg-orange-100 shadow filament-stats-overview-widget-card" }, [
                  createVNode("div", { class: "space-y-2" }, [
                    createVNode("div", { class: "flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-gray-500" }, [
                      createVNode("span", null, "Paid Orders")
                    ]),
                    createVNode("div", { class: "text-3xl" }, "0")
                  ])
                ]),
                createVNode("div", { class: "filament-stats-card relative p-6 rounded-2xl bg-green-100 shadow filament-stats-overview-widget-card" }, [
                  createVNode("div", { class: "space-y-2" }, [
                    createVNode("div", { class: "flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-gray-500" }, [
                      createVNode("span", null, "New Customers")
                    ]),
                    createVNode("div", { class: "text-3xl" }, toDisplayString($props.newcustomers), 1)
                  ])
                ])
              ]),
              createVNode("div", { class: "grid grid-cols-1 filament-widgets-container gap-4 lg:gap-8 mb-6" }, [
                createVNode("div"),
                createVNode("div", { class: "border border-gray-300 shadow-sm bg-white rounded-xl filament-tables-container" }, [
                  createVNode("div", { class: "px-2 pt-2" }, [
                    createVNode("div", { class: "filament-tables-header px-4 py-2 mb-2" }, [
                      createVNode("div", { class: "flex flex-col gap-4 md:justify-between md:items-start md:flex-row md:-mr-2" }, [
                        createVNode("h2", { class: "filament-tables-header-heading text-xl font-bold tracking-tight" }, "Orders Pending Review")
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "filament-tables-table-container overflow-x-auto relative border-t" }, [
                    createVNode("table", { class: "filament-tables-table w-full text-left rtl:text-right divide-y table-auto text-sm" }, [
                      createVNode("thead", null, [
                        createVNode("tr", { class: "bg-teal-100" }, [
                          createVNode("td", { class: "filament-tables-header-cell p-0" }, [
                            createVNode("span", { class: "flex items-center w-full px-4 py-2 whitespace-nowrap space-x-1 rtl:space-x-reverse font-medium text-sm text-gray-600 cursor-default" }, "Id")
                          ]),
                          createVNode("td", { class: "filament-tables-header-cell p-0" }, [
                            createVNode("span", { class: "flex items-center w-full px-4 py-2 whitespace-nowrap space-x-1 rtl:space-x-reverse font-medium text-sm text-gray-600 cursor-default" }, "Order #")
                          ]),
                          createVNode("td", { class: "filament-tables-header-cell p-0" }, [
                            createVNode("span", { class: "flex items-center w-full px-4 py-2 whitespace-nowrap space-x-1 rtl:space-x-reverse font-medium text-sm text-gray-600 cursor-default" }, "Status")
                          ]),
                          createVNode("td", { class: "filament-tables-header-cell p-0" }, [
                            createVNode("span", { class: "flex items-center w-full px-4 py-2 whitespace-nowrap space-x-1 rtl:space-x-reverse font-medium text-sm text-gray-600 cursor-default" }, "Action")
                          ])
                        ])
                      ]),
                      createVNode("tbody", { class: "divide-y whitespace-nowrap" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList($props.ordersPendingReview, (item, index) => {
                          return openBlock(), createBlock("tr", {
                            class: "filament-tables-row transition",
                            key: index
                          }, [
                            createVNode("td", { class: "filament-tables-cell" }, [
                              createVNode("div", { class: "px-4 py-3" }, toDisplayString(index + 1), 1)
                            ]),
                            createVNode("td", { class: "filament-tables-cell" }, [
                              createVNode("div", { class: "px-4 py-3" }, toDisplayString(item.invoice_no), 1)
                            ]),
                            createVNode("td", { class: "filament-tables-cell" }, [
                              createVNode("div", { class: "px-4 py-3" }, toDisplayString(item.status), 1)
                            ]),
                            createVNode("td", { class: "filament-tables-cell" }, [
                              createVNode("div", { class: "px-4 py-3" }, [
                                createVNode(_component_Link, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Approve")
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
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Dashboard = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Dashboard as default
};
