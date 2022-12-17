import { defineComponent, resolveComponent, mergeProps, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import moment from "moment";
import { _ as _sfc_main$1 } from "./AppLayout.095c79de.mjs";
import { Head, Link } from "@inertiajs/inertia-vue3";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
import "@inertiajs/inertia";
import "./ResponsiveNavLink.cc3c0f4e.mjs";
const _sfc_main = defineComponent({
  name: "OrderPage",
  props: ["order"],
  components: { MasterLayout: _sfc_main$1, Head, Link },
  data() {
    return {
      loading: false
    };
  },
  methods: {
    dateTime(value) {
      return moment(value).format("lll");
    },
    dateDayTime(value) {
      return moment(value).format("MMMM Do YYYY, h:mm:ss a");
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
  _push(ssrRenderComponent(_component_master_layout, mergeProps({
    title: "Order #" + _ctx.order.invoice_no
  }, _attrs), {
    header: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h2 class="font-semibold text-xl text-gray-800 leading-tight"${_scopeId}> Order #${ssrInterpolate(_ctx.order.invoice_no)}</h2>`);
      } else {
        return [
          createVNode("h2", { class: "font-semibold text-xl text-gray-800 leading-tight" }, " Order #" + toDisplayString(_ctx.order.invoice_no), 1)
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="container my-12"${_scopeId}><div class="max-w-7xl mx-auto px-4"${_scopeId}><div class="row justify-content-center"${_scopeId}><div class="col-9 col-lg-6"${_scopeId}><div class="my-6"${_scopeId}><div class="timeline"${_scopeId}><div class="mb-5"${_scopeId}><h3${_scopeId}>Order Updates</h3><label${_scopeId}>Order Created at ${ssrInterpolate(_ctx.dateTime(_ctx.order.created_at))}</label></div><div class="box"${_scopeId}><div class="container"${_scopeId}><div class="lines"${_scopeId}><!--[-->`);
        ssrRenderList(_ctx.order.order_logs, (log) => {
          _push2(`<div class="dot"${_scopeId}></div>`);
        });
        _push2(`<!--]--><!--[-->`);
        ssrRenderList(_ctx.order.order_logs, (log) => {
          _push2(`<div class="line"${_scopeId}></div>`);
        });
        _push2(`<!--]--><!--[-->`);
        ssrRenderList(_ctx.order.order_logs, (log) => {
          _push2(`<div class="dot"${_scopeId}></div>`);
        });
        _push2(`<!--]--></div><div class="cards"${_scopeId}><!--[-->`);
        ssrRenderList(_ctx.order.order_logs, (log) => {
          _push2(`<div class="card"${_scopeId}><h4 class="bg-primary p-2"${_scopeId}>${ssrInterpolate(log.action)}</h4><span style="${ssrRenderStyle({ "font-size": "13px" })}"${_scopeId}>${ssrInterpolate(_ctx.dateDayTime(log.created_at))}</span><p${_scopeId}>${ssrInterpolate(log.description)}</p></div>`);
        });
        _push2(`<!--]--></div></div></div></div></div></div></div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "container my-12" }, [
            createVNode("div", { class: "max-w-7xl mx-auto px-4" }, [
              createVNode("div", { class: "row justify-content-center" }, [
                createVNode("div", { class: "col-9 col-lg-6" }, [
                  createVNode("div", { class: "my-6" }, [
                    createVNode("div", { class: "timeline" }, [
                      createVNode("div", { class: "mb-5" }, [
                        createVNode("h3", null, "Order Updates"),
                        createVNode("label", null, "Order Created at " + toDisplayString(_ctx.dateTime(_ctx.order.created_at)), 1)
                      ]),
                      createVNode("div", { class: "box" }, [
                        createVNode("div", { class: "container" }, [
                          createVNode("div", { class: "lines" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(_ctx.order.order_logs, (log) => {
                              return openBlock(), createBlock("div", {
                                class: "dot",
                                key: log.id
                              });
                            }), 128)),
                            (openBlock(true), createBlock(Fragment, null, renderList(_ctx.order.order_logs, (log) => {
                              return openBlock(), createBlock("div", {
                                class: "line",
                                key: log.id
                              });
                            }), 128)),
                            (openBlock(true), createBlock(Fragment, null, renderList(_ctx.order.order_logs, (log) => {
                              return openBlock(), createBlock("div", {
                                class: "dot",
                                key: log.id
                              });
                            }), 128))
                          ]),
                          createVNode("div", { class: "cards" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(_ctx.order.order_logs, (log) => {
                              return openBlock(), createBlock("div", {
                                class: "card",
                                key: log.id
                              }, [
                                createVNode("h4", { class: "bg-primary p-2" }, toDisplayString(log.action), 1),
                                createVNode("span", { style: { "font-size": "13px" } }, toDisplayString(_ctx.dateDayTime(log.created_at)), 1),
                                createVNode("p", null, toDisplayString(log.description), 1)
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
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/ViewOrder.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ViewOrder = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  ViewOrder as default
};
