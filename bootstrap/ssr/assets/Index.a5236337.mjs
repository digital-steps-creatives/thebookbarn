import { mergeProps, withCtx, createVNode, unref, createTextVNode, openBlock, createBlock, toDisplayString, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { A as AppLayout } from "./AdminLayout.32c77a6f.mjs";
import "./ApplicationLogo.8c74c1d0.mjs";
import { Table } from "@protonemedia/inertiajs-tables-laravel-query-builder";
import { ref } from "@vue/runtime-core";
import { Link } from "@inertiajs/inertia-vue3";
import "@inertiajs/inertia";
import "./ResponsiveNavLink.cc3c0f4e.mjs";
import "./_plugin-vue_export-helper.43be4956.mjs";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    products: Object
  },
  setup(__props) {
    ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(AppLayout, mergeProps({ title: "Products" }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="font-semibold text-xl text-gray-800 leading-tight"${_scopeId}> Products </h2>`);
          } else {
            return [
              createVNode("h2", { class: "font-semibold text-xl text-gray-800 leading-tight" }, " Products ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-12"${_scopeId}><div class="max-w-7xl mx-auto sm:px-6 lg:px-8"${_scopeId}><div class="bg-white pt-4 overflow-hidden shadow-xl sm:rounded-lg"${_scopeId}><div class="toolbar px-4 justify-end flex"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("admin.add.product"),
              class: "mb-2 btn btn-primary text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Add Products`);
                } else {
                  return [
                    createTextVNode("Add Products")
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
              resource: __props.products
            }, {
              "cell(subject_id)": withCtx(({ item: product }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (product.subject) {
                    _push3(`<span${_scopeId2}>${ssrInterpolate(product.subject.name)}</span>`);
                  } else {
                    _push3(`<span${_scopeId2}>N/A</span>`);
                  }
                } else {
                  return [
                    product.subject ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(product.subject.name), 1)) : (openBlock(), createBlock("span", { key: 1 }, "N/A"))
                  ];
                }
              }),
              "cell(class_level_id)": withCtx(({ item: product }, _push3, _parent3, _scopeId2) => {
                var _a, _b, _c, _d;
                if (_push3) {
                  if (((_a = product.classlevel) == null ? void 0 : _a.level) === "primary") {
                    _push3(`<span${_scopeId2}>Class/Level ${ssrInterpolate(product.classlevel.class)}</span>`);
                  } else if (((_b = product.classlevel) == null ? void 0 : _b.level) === "secondary") {
                    _push3(`<span${_scopeId2}>Form/Level ${ssrInterpolate(product.classlevel.class)}</span>`);
                  } else {
                    _push3(`<span${_scopeId2}>N/A</span>`);
                  }
                } else {
                  return [
                    ((_c = product.classlevel) == null ? void 0 : _c.level) === "primary" ? (openBlock(), createBlock("span", { key: 0 }, "Class/Level " + toDisplayString(product.classlevel.class), 1)) : ((_d = product.classlevel) == null ? void 0 : _d.level) === "secondary" ? (openBlock(), createBlock("span", { key: 1 }, "Form/Level " + toDisplayString(product.classlevel.class), 1)) : (openBlock(), createBlock("span", { key: 2 }, "N/A"))
                  ];
                }
              }),
              "cell(featured_image)": withCtx(({ item: product }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (product.featured_image) {
                    _push3(`<img${ssrRenderAttr("src", product.featured_image)} class="w-12 h-12 rounded"${_scopeId2}>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    product.featured_image ? (openBlock(), createBlock("img", {
                      key: 0,
                      src: product.featured_image,
                      class: "w-12 h-12 rounded"
                    }, null, 8, ["src"])) : createCommentVNode("", true)
                  ];
                }
              }),
              "cell(status)": withCtx(({ item: product }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (product.status === "true") {
                    _push3(`<span class="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-200 dark:text-green-800"${_scopeId2}>active</span>`);
                  } else {
                    _push3(`<span class="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300"${_scopeId2}>inactive</span>`);
                  }
                } else {
                  return [
                    product.status === "true" ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: "bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-200 dark:text-green-800"
                    }, "active")) : (openBlock(), createBlock("span", {
                      key: 1,
                      class: "bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300"
                    }, "inactive"))
                  ];
                }
              }),
              "cell(actions)": withCtx(({ item: product }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<a${ssrRenderAttr("href", _ctx.route("admin.manage.product", product.id))}${_scopeId2}> Edit </a>`);
                } else {
                  return [
                    createVNode("a", {
                      href: _ctx.route("admin.manage.product", product.id)
                    }, " Edit ", 8, ["href"])
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
                      createVNode(unref(Link), {
                        href: _ctx.route("admin.add.product"),
                        class: "mb-2 btn btn-primary text-white"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Add Products")
                        ]),
                        _: 1
                      }, 8, ["href"])
                    ]),
                    createVNode(unref(Table), {
                      striped: true,
                      "prevent-overlapping-requests": false,
                      "input-debounce-ms": 1e3,
                      "prevent-scroll": true,
                      resource: __props.products
                    }, {
                      "cell(subject_id)": withCtx(({ item: product }) => [
                        product.subject ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(product.subject.name), 1)) : (openBlock(), createBlock("span", { key: 1 }, "N/A"))
                      ]),
                      "cell(class_level_id)": withCtx(({ item: product }) => {
                        var _a, _b;
                        return [
                          ((_a = product.classlevel) == null ? void 0 : _a.level) === "primary" ? (openBlock(), createBlock("span", { key: 0 }, "Class/Level " + toDisplayString(product.classlevel.class), 1)) : ((_b = product.classlevel) == null ? void 0 : _b.level) === "secondary" ? (openBlock(), createBlock("span", { key: 1 }, "Form/Level " + toDisplayString(product.classlevel.class), 1)) : (openBlock(), createBlock("span", { key: 2 }, "N/A"))
                        ];
                      }),
                      "cell(featured_image)": withCtx(({ item: product }) => [
                        product.featured_image ? (openBlock(), createBlock("img", {
                          key: 0,
                          src: product.featured_image,
                          class: "w-12 h-12 rounded"
                        }, null, 8, ["src"])) : createCommentVNode("", true)
                      ]),
                      "cell(status)": withCtx(({ item: product }) => [
                        product.status === "true" ? (openBlock(), createBlock("span", {
                          key: 0,
                          class: "bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-200 dark:text-green-800"
                        }, "active")) : (openBlock(), createBlock("span", {
                          key: 1,
                          class: "bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300"
                        }, "inactive"))
                      ]),
                      "cell(actions)": withCtx(({ item: product }) => [
                        createVNode("a", {
                          href: _ctx.route("admin.manage.product", product.id)
                        }, " Edit ", 8, ["href"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Products/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
