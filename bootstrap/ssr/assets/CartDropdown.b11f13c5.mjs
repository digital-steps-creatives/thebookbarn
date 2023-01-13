import { mergeProps, useSSRContext, resolveComponent, withCtx, createVNode, openBlock, createBlock, toDisplayString, createCommentVNode, createTextVNode, Fragment, renderList } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderStyle, ssrRenderClass, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { Link } from "@inertiajs/inertia-vue3";
import { mapGetters, mapMutations } from "vuex";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
const TheFooter_vue_vue_type_style_index_0_lang = "";
const _sfc_main$4 = {
  __name: "TheFooter",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({
        style: { "background-color": "#fff" },
        class: "pt-5"
      }, _attrs))}><div class="max-w-7xl mx-auto divide-y divide-slate-200 px-4 sm:px-6 md:px-8 dark:divide-slate-700"><div class="container"><div class="row justify-content-center py-3"><div class="col-sm-4 col-12"><span>The Bookbarn | \xA9 2022 All Rights Reserved</span></div></div></div></div></footer>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/TheFooter.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  props: {
    align: {
      default: "right"
    },
    width: {
      default: "48"
    },
    contentClasses: {
      default: () => ["bg-white"]
    }
  },
  data() {
    return {
      open: false
    };
  },
  methods: {
    closeOnEscape(e) {
      if (this.open && e.keyCode === 27) {
        this.open = false;
      }
    },
    close() {
      this.open = false;
    }
  },
  computed: {
    widthClass() {
      return {
        40: "w-40",
        44: "w-44",
        48: "w-48",
        64: "w-64",
        72: "w-72",
        80: "w-80"
      }[this.width.toString()];
    },
    alignmentClasses() {
      if (this.align === "left") {
        return "origin-top-left left-0";
      } else if (this.align === "right") {
        return "origin-top-right right-0";
      } else {
        return "origin-top";
      }
    }
  },
  mounted() {
    document.addEventListener("keydown", this.closeOnEscape);
  },
  unmounted() {
    document.removeEventListener("keydown", this.closeOnEscape);
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}><div>`);
  ssrRenderSlot(_ctx.$slots, "trigger", {}, null, _push, _parent);
  _push(`</div><div style="${ssrRenderStyle($data.open ? null : { display: "none" })}" class="fixed inset-0 z-40"></div><div style="${ssrRenderStyle([
    $data.open ? null : { display: "none" },
    { "display": "none" }
  ])}" class="${ssrRenderClass([[$options.widthClass, $options.alignmentClasses], "absolute z-50 mt-2 rounded-lg shadow-lg"])}"><div class="${ssrRenderClass([$props.contentClasses, "rounded-lg ring-1 ring-black ring-opacity-5 overflow-hidden"])}">`);
  ssrRenderSlot(_ctx.$slots, "content", { close: $options.close }, null, _push, _parent);
  _push(`</div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/frontend/components/shared/Dropdown.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Dropdown = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 text-gray-500",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, _attrs))}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/frontend/components/icons/CartIcon.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const CartIcon = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  props: {
    type: {
      type: String,
      default: "submit",
      validator: (value) => {
        return ["submit", "button"].includes(value);
      }
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($props.type !== "submit") {
    _push(`<button${ssrRenderAttrs(mergeProps({
      type: $props.type,
      disabled: $props.disabled,
      class: "inline-flex items-center justify-center px-6 py-2 bg-primary border border-transparent rounded-lg text-sm text-white hover:bg-primary-600 active:bg-primary-700 focus:outline-none focus:border-primary-700 focus:ring focus:ring-primary-200 transition whitespace-nowrap"
    }, _attrs))}>`);
    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
    _push(`</button>`);
  } else {
    _push(`<button${ssrRenderAttrs(mergeProps({
      type: $props.type,
      disabled: $props.disabled,
      class: "inline-flex items-center justify-center px-6 py-2 bg-primary border border-transparent rounded-lg text-sm text-white hover:bg-primary-600 active:bg-primary-700 focus:outline-none focus:border-primary-700 focus:ring focus:ring-primary-200 transition whitespace-nowrap"
    }, _attrs))}>`);
    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
    _push(`</button>`);
  }
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/frontend/components/form/Button.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const FormButton = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: {
    Dropdown,
    Link,
    CartIcon,
    FormButton
  },
  computed: {
    ...mapGetters({
      cartItems: "cart/getCartItems",
      totalItems: "cart/getTotalItem",
      totalPrice: "cart/getTotalPrice"
    })
  },
  methods: {
    gotoCart() {
      window.location.href = route("cart");
    },
    ...mapMutations({
      cartItemQuantity: "cart/CART_ITEM_QUANTITY"
    }),
    removeFromCart(item) {
      store.dispatch("cart/removeFromCart", item);
    },
    changedQuantity(value, item) {
      this.cartItemQuantity({
        item,
        val: value
      });
    },
    currencyFormat(value) {
      return "Kes " + new Intl.NumberFormat("en-US").format(Math.round(value));
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_dropdown = resolveComponent("dropdown");
  const _component_CartIcon = resolveComponent("CartIcon");
  const _component_remove_icon_button = resolveComponent("remove-icon-button");
  const _component_Link = resolveComponent("Link");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center h-full pr-4 lg:px-6" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_dropdown, {
    width: "72",
    class: "hidden md:flex"
  }, {
    trigger: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="cursor-pointer border p-3 rounded-lg inline-flex"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_CartIcon, { class: "relative" }, null, _parent2, _scopeId));
        if (_ctx.cartItems && _ctx.cartItems.length) {
          _push2(`<div class="absolute -top-2.5 -right-2.5 bg-primary-500 h-5 w-5 rounded-full flex items-center justify-center"${_scopeId}><span class="inline-block mb-0 text-xs text-white whitespace-nowrap"${_scopeId}>${ssrInterpolate(_ctx.totalItems)}</span></div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "cursor-pointer border p-3 rounded-lg inline-flex" }, [
            createVNode(_component_CartIcon, { class: "relative" }),
            _ctx.cartItems && _ctx.cartItems.length ? (openBlock(), createBlock("div", {
              key: 0,
              class: "absolute -top-2.5 -right-2.5 bg-primary-500 h-5 w-5 rounded-full flex items-center justify-center"
            }, [
              createVNode("span", { class: "inline-block mb-0 text-xs text-white whitespace-nowrap" }, toDisplayString(_ctx.totalItems), 1)
            ])) : createCommentVNode("", true)
          ])
        ];
      }
    }),
    content: withCtx(({ close }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="bg-white"${_scopeId}>`);
        if (_ctx.cartItems && _ctx.cartItems.length) {
          _push2(`<div${_scopeId}><div class="bg-primary text-white py-2 px-3"${_scopeId}><p class="text-center text-sm tracking-wider"${_scopeId}>${ssrInterpolate(_ctx.totalItems)} `);
          if (_ctx.totalItems > 1) {
            _push2(`<span${_scopeId}>products</span>`);
          } else {
            _push2(`<span${_scopeId}>product</span>`);
          }
          _push2(` added to your list</p></div><div class="overflow-y-auto" style="${ssrRenderStyle({ "height": "295px" })}"${_scopeId}><!--[-->`);
          ssrRenderList(_ctx.cartItems, (item, index) => {
            _push2(`<div class="p-3 border-b border-gray-100"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><div class="flex"${_scopeId}><div class="h-16 w-16 border rounded-lg overflow-hidden"${_scopeId}><img${ssrRenderAttr("src", item.featured_image)} class="w-full h-full object-cover"${ssrRenderAttr("alt", item.name)}${_scopeId}></div><div class="ml-3 mt-2 text-sm"${_scopeId}><h6 class="block font-semibold"${_scopeId}>${ssrInterpolate(item.name)}</h6><span${_scopeId}>Price: <span${_scopeId}>not available</span>`);
            if (item.saleprice > "0") {
              _push2(`<span${_scopeId}>${ssrInterpolate(item.salepriceFormatted)} <span class="ml-2" style="${ssrRenderStyle({ "text-decoration": "line-through" })}"${_scopeId}>${ssrInterpolate(item.priceFormatted)}</span></span>`);
            } else {
              _push2(`<span${_scopeId}>${ssrInterpolate(item.priceFormatted)}</span>`);
            }
            _push2(`</span></div></div>`);
            _push2(ssrRenderComponent(_component_remove_icon_button, {
              onClick: ($event) => $options.removeFromCart(item)
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center justify-between font-semibold text-sm mt-4"${_scopeId}><span${_scopeId}>Cost</span><span${_scopeId}>awaiting Quotation</span></div></div>`);
          });
          _push2(`<!--]--></div><div class="py-3 px-4 bg-gray-50"${_scopeId}><div class="text-right flex items-center justify-between font-semibold text-sm mt-1"${_scopeId}><span${_scopeId}>Total cost</span><span class="text-red-600"${_scopeId}>Pending Quotation</span></div>`);
          _push2(ssrRenderComponent(_component_Link, {
            href: _ctx.route("cart"),
            class: "w-full mt-4 inline-flex items-center justify-center px-6 py-2 bg-primary border border-transparent rounded-lg text-sm text-white hover:bg-primary-600 active:bg-primary-700 focus:outline-none focus:border-primary-700 focus:ring focus:ring-primary-200 transition whitespace-nowrap w-full mt-4 text-decoration-none"
          }, {
            default: withCtx((_, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`View your list`);
              } else {
                return [
                  createTextVNode("View your list")
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
          _push2(`</div></div>`);
        } else {
          _push2(`<div class="py-3 px-4 h-16 flex items-center justify-center"${_scopeId}>No products added in the list!</div>`);
        }
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "bg-white" }, [
            _ctx.cartItems && _ctx.cartItems.length ? (openBlock(), createBlock("div", { key: 0 }, [
              createVNode("div", { class: "bg-primary text-white py-2 px-3" }, [
                createVNode("p", { class: "text-center text-sm tracking-wider" }, [
                  createTextVNode(toDisplayString(_ctx.totalItems) + " ", 1),
                  _ctx.totalItems > 1 ? (openBlock(), createBlock("span", { key: 0 }, "products")) : (openBlock(), createBlock("span", { key: 1 }, "product")),
                  createTextVNode(" added to your list")
                ])
              ]),
              createVNode("div", {
                class: "overflow-y-auto",
                style: { "height": "295px" }
              }, [
                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.cartItems, (item, index) => {
                  return openBlock(), createBlock("div", {
                    class: "p-3 border-b border-gray-100",
                    key: index
                  }, [
                    createVNode("div", { class: "flex items-center justify-between" }, [
                      createVNode("div", { class: "flex" }, [
                        createVNode("div", { class: "h-16 w-16 border rounded-lg overflow-hidden" }, [
                          createVNode("img", {
                            src: item.featured_image,
                            class: "w-full h-full object-cover",
                            alt: item.name
                          }, null, 8, ["src", "alt"])
                        ]),
                        createVNode("div", { class: "ml-3 mt-2 text-sm" }, [
                          createVNode("h6", { class: "block font-semibold" }, toDisplayString(item.name), 1),
                          createVNode("span", null, [
                            createTextVNode("Price: "),
                            createVNode("span", null, "not available"),
                            item.saleprice > "0" ? (openBlock(), createBlock("span", { key: 0 }, [
                              createTextVNode(toDisplayString(item.salepriceFormatted) + " ", 1),
                              createVNode("span", {
                                class: "ml-2",
                                style: { "text-decoration": "line-through" }
                              }, toDisplayString(item.priceFormatted), 1)
                            ])) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(item.priceFormatted), 1))
                          ])
                        ])
                      ]),
                      createVNode(_component_remove_icon_button, {
                        onClick: ($event) => $options.removeFromCart(item)
                      }, null, 8, ["onClick"])
                    ]),
                    createVNode("div", { class: "flex items-center justify-between font-semibold text-sm mt-4" }, [
                      createVNode("span", null, "Cost"),
                      createVNode("span", null, "awaiting Quotation")
                    ])
                  ]);
                }), 128))
              ]),
              createVNode("div", { class: "py-3 px-4 bg-gray-50" }, [
                createVNode("div", { class: "text-right flex items-center justify-between font-semibold text-sm mt-1" }, [
                  createVNode("span", null, "Total cost"),
                  createVNode("span", { class: "text-red-600" }, "Pending Quotation")
                ]),
                createVNode(_component_Link, {
                  href: _ctx.route("cart"),
                  class: "w-full mt-4 inline-flex items-center justify-center px-6 py-2 bg-primary border border-transparent rounded-lg text-sm text-white hover:bg-primary-600 active:bg-primary-700 focus:outline-none focus:border-primary-700 focus:ring focus:ring-primary-200 transition whitespace-nowrap w-full mt-4 text-decoration-none"
                }, {
                  default: withCtx(() => [
                    createTextVNode("View your list")
                  ]),
                  _: 1
                }, 8, ["href"])
              ])
            ])) : (openBlock(), createBlock("div", {
              key: 1,
              class: "py-3 px-4 h-16 flex items-center justify-center"
            }, "No products added in the list!"))
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Link, {
    href: _ctx.route("cart"),
    class: "md:hidden"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="cursor-pointer relative"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_CartIcon, null, null, _parent2, _scopeId));
        if (_ctx.totalItems) {
          _push2(`<div class="absolute -top-2.5 -right-2.5 bg-primary h-5 w-5 rounded-full flex items-center justify-center"${_scopeId}><span class="inline-block mb-0 text-xs text-white whitespace-nowrap"${_scopeId}>${ssrInterpolate(_ctx.totalItems)}</span></div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "cursor-pointer relative" }, [
            createVNode(_component_CartIcon),
            _ctx.totalItems ? (openBlock(), createBlock("div", {
              key: 0,
              class: "absolute -top-2.5 -right-2.5 bg-primary h-5 w-5 rounded-full flex items-center justify-center"
            }, [
              createVNode("span", { class: "inline-block mb-0 text-xs text-white whitespace-nowrap" }, toDisplayString(_ctx.totalItems), 1)
            ])) : createCommentVNode("", true)
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/frontend/components/partials/CartDropdown.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CartDropdown = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  CartDropdown as C,
  FormButton as F,
  _sfc_main$4 as _
};
