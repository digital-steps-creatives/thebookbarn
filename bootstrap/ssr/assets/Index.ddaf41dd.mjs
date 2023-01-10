import { resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, unref, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { A as AppLayout } from "./AdminLayout.32c77a6f.mjs";
import "./ApplicationLogo.8c74c1d0.mjs";
import { Table } from "@protonemedia/inertiajs-tables-laravel-query-builder";
import "@inertiajs/inertia";
import "@inertiajs/inertia-vue3";
import "./ResponsiveNavLink.cc3c0f4e.mjs";
import "./_plugin-vue_export-helper.43be4956.mjs";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    affiliates: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      _push(ssrRenderComponent(AppLayout, mergeProps({ title: "Affiliates" }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="font-semibold text-xl text-gray-800 leading-tight"${_scopeId}> Affiliates </h2>`);
          } else {
            return [
              createVNode("h2", { class: "font-semibold text-xl text-gray-800 leading-tight" }, " Affiliates ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-12"${_scopeId}><div class="max-w-7xl mx-auto sm:px-6 lg:px-8"${_scopeId}><div class="bg-white pt-4 overflow-hidden shadow-xl sm:rounded-lg"${_scopeId}><div class="toolbar px-4 justify-end flex"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Link, {
              href: _ctx.route("admin.add.product"),
              class: "mb-2 btn btn-primary text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Add affiliate`);
                } else {
                  return [
                    createTextVNode("Add affiliate")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(unref(Table), {
              striped: true,
              "prevent-overlapping-requests": false,
              "input-debounce-ms": 1e3,
              "prevent-scroll": true,
              resource: __props.affiliates
            }, {
              "cell(actions)": withCtx(({ item: affiliate }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<a${ssrRenderAttr("href", _ctx.route("admin.view.affiliate", affiliate.id))}${_scopeId2}> View </a>`);
                } else {
                  return [
                    createVNode("a", {
                      href: _ctx.route("admin.view.affiliate", affiliate.id)
                    }, " View ", 8, ["href"])
                  ];
                }
              }),
              "cell(code)": withCtx(({ item: affiliate }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(affiliate.referrals, (ref_code) => {
                    _push3(`<div${_scopeId2}>${ssrInterpolate(ref_code.ref_code)}</div>`);
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(affiliate.referrals, (ref_code) => {
                      return openBlock(), createBlock("div", {
                        key: ref_code.id
                      }, toDisplayString(ref_code.ref_code), 1);
                    }), 128))
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
                    createVNode("div", { class: "toolbar px-4 justify-end flex" }, [
                      createVNode(_component_Link, {
                        href: _ctx.route("admin.add.product"),
                        class: "mb-2 btn btn-primary text-white"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Add affiliate")
                        ]),
                        _: 1
                      }, 8, ["href"])
                    ]),
                    createVNode(unref(Table), {
                      striped: true,
                      "prevent-overlapping-requests": false,
                      "input-debounce-ms": 1e3,
                      "prevent-scroll": true,
                      resource: __props.affiliates
                    }, {
                      "cell(actions)": withCtx(({ item: affiliate }) => [
                        createVNode("a", {
                          href: _ctx.route("admin.view.affiliate", affiliate.id)
                        }, " View ", 8, ["href"])
                      ]),
                      "cell(code)": withCtx(({ item: affiliate }) => [
                        (openBlock(true), createBlock(Fragment, null, renderList(affiliate.referrals, (ref_code) => {
                          return openBlock(), createBlock("div", {
                            key: ref_code.id
                          }, toDisplayString(ref_code.ref_code), 1);
                        }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Affiliates/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
