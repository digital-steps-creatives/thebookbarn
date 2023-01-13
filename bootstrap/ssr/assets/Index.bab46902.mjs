import { mergeProps, withCtx, createVNode, unref, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { A as AppLayout } from "./AdminLayout.9036cb9a.mjs";
import "./ApplicationLogo.8c74c1d0.mjs";
import { Table } from "@protonemedia/inertiajs-tables-laravel-query-builder";
import "@inertiajs/inertia";
import "@inertiajs/inertia-vue3";
import "./ResponsiveNavLink.016ef96f.mjs";
import "./_plugin-vue_export-helper.43be4956.mjs";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    customers: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(AppLayout, mergeProps({ title: "Customers" }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="font-semibold text-xl text-gray-800 leading-tight"${_scopeId}> Customers </h2>`);
          } else {
            return [
              createVNode("h2", { class: "font-semibold text-xl text-gray-800 leading-tight" }, " Customers ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-12"${_scopeId}><div class="max-w-7xl mx-auto sm:px-6 lg:px-8"${_scopeId}><div class="bg-white pt-4 overflow-hidden shadow-xl sm:rounded-lg"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Table), {
              striped: true,
              "prevent-overlapping-requests": false,
              "input-debounce-ms": 1e3,
              "prevent-scroll": true,
              resource: __props.customers
            }, {
              "cell(actions)": withCtx(({ item: customer }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<a${ssrRenderAttr("href", _ctx.route("admin.view.customer", customer.id))}${_scopeId2}> View </a>`);
                } else {
                  return [
                    createVNode("a", {
                      href: _ctx.route("admin.view.customer", customer.id)
                    }, " View ", 8, ["href"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-12" }, [
                createVNode("div", { class: "max-w-7xl mx-auto sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "bg-white pt-4 overflow-hidden shadow-xl sm:rounded-lg" }, [
                    createVNode(unref(Table), {
                      striped: true,
                      "prevent-overlapping-requests": false,
                      "input-debounce-ms": 1e3,
                      "prevent-scroll": true,
                      resource: __props.customers
                    }, {
                      "cell(actions)": withCtx(({ item: customer }) => [
                        createVNode("a", {
                          href: _ctx.route("admin.view.customer", customer.id)
                        }, " View ", 8, ["href"])
                      ]),
                      _: 1
                    }, 8, ["resource"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Customers/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
