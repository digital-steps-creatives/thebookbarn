import { mergeProps, unref, withCtx, openBlock, createBlock, createVNode, useSSRContext, resolveComponent, toDisplayString, createCommentVNode, createTextVNode, Fragment, renderList, ref, withModifiers } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderSlot, ssrRenderClass, ssrInterpolate, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { Inertia } from "@inertiajs/inertia";
import { Link, Head } from "@inertiajs/inertia-vue3";
import { _ as _sfc_main$6, A as ApplicationMark, b as _sfc_main$7, c as _sfc_main$8, d as _sfc_main$9 } from "./ResponsiveNavLink.cc3c0f4e.mjs";
import { mapGetters, mapMutations } from "vuex";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
const TheFooter_vue_vue_type_style_index_0_lang = "";
const _sfc_main$5 = {
  __name: "TheFooter",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({
        style: { "background-color": "#fff" },
        class: "pt-5"
      }, _attrs))}><div class="max-w-7xl mx-auto divide-y divide-slate-200 px-4 sm:px-6 md:px-8 dark:divide-slate-700"><div class="container"><div class="row"><div class="col-sm-4"><div class="module__social"><div class="module__social__content"><img src="/images/logo.png" alt="The Book Barn" style="${ssrRenderStyle({ "height": "95px" })}"></div></div><div class="module"><div class="module__content"><h4>Follow us</h4><div class="social"><ul class="social__list"><li>`);
      _push(ssrRenderComponent(unref(Link), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M8.9709 10.0201L9.46872 6.83493H6.35612V4.76796C6.35612 3.89655 6.79093 3.04715 8.18496 3.04715H9.6V0.335305C9.6 0.335305 8.31589 0.120117 7.08815 0.120117C4.52483 0.120117 2.84933 1.64568 2.84933 4.40737V6.83493H0V10.0201H2.84933V17.7201H6.35612V10.0201H8.9709Z" fill="#1E33E6"${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                width: "10",
                height: "18",
                viewBox: "0 0 10 18",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", {
                  d: "M8.9709 10.0201L9.46872 6.83493H6.35612V4.76796C6.35612 3.89655 6.79093 3.04715 8.18496 3.04715H9.6V0.335305C9.6 0.335305 8.31589 0.120117 7.08815 0.120117C4.52483 0.120117 2.84933 1.64568 2.84933 4.40737V6.83493H0V10.0201H2.84933V17.7201H6.35612V10.0201H8.9709Z",
                  fill: "#1E33E6"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(unref(Link), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg width="25" height="19" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M24.4776 2.93651C24.1901 1.82791 23.3429 0.95482 22.2673 0.658523C20.3177 0.120117 12.5 0.120117 12.5 0.120117C12.5 0.120117 4.68232 0.120117 2.73266 0.658523C1.65706 0.954867 0.80992 1.82791 0.522399 2.93651C0 4.9459 0 9.1383 0 9.1383C0 9.1383 0 13.3307 0.522399 15.3401C0.80992 16.4487 1.65706 17.2854 2.73266 17.5817C4.68232 18.1201 12.5 18.1201 12.5 18.1201C12.5 18.1201 20.3177 18.1201 22.2673 17.5817C23.3429 17.2854 24.1901 16.4487 24.4776 15.3401C25 13.3307 25 9.1383 25 9.1383C25 9.1383 25 4.9459 24.4776 2.93651ZM9.94316 12.9447V5.33191L16.4772 9.1384L9.94316 12.9447Z" fill="#E20000"${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                width: "25",
                height: "19",
                viewBox: "0 0 25 19",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", {
                  d: "M24.4776 2.93651C24.1901 1.82791 23.3429 0.95482 22.2673 0.658523C20.3177 0.120117 12.5 0.120117 12.5 0.120117C12.5 0.120117 4.68232 0.120117 2.73266 0.658523C1.65706 0.954867 0.80992 1.82791 0.522399 2.93651C0 4.9459 0 9.1383 0 9.1383C0 9.1383 0 13.3307 0.522399 15.3401C0.80992 16.4487 1.65706 17.2854 2.73266 17.5817C4.68232 18.1201 12.5 18.1201 12.5 18.1201C12.5 18.1201 20.3177 18.1201 22.2673 17.5817C23.3429 17.2854 24.1901 16.4487 24.4776 15.3401C25 13.3307 25 9.1383 25 9.1383C25 9.1383 25 4.9459 24.4776 2.93651ZM9.94316 12.9447V5.33191L16.4772 9.1384L9.94316 12.9447Z",
                  fill: "#E20000"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(unref(Link), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M15.7908 4.00932C15.802 4.17987 15.802 4.35046 15.802 4.52101C15.802 9.72301 12.1726 15.7169 5.53908 15.7169C3.49542 15.7169 1.59696 15.0712 0 13.9505C0.290366 13.987 0.569525 13.9992 0.871063 13.9992C2.55733 13.9992 4.10963 13.3779 5.34923 12.318C3.76344 12.2814 2.43451 11.1484 1.97663 9.58902C2.2 9.62555 2.42333 9.64992 2.65788 9.64992C2.98172 9.64992 3.3056 9.60117 3.60711 9.51593C1.95432 9.15042 0.714691 7.56669 0.714691 5.654V5.60528C1.19488 5.89767 1.7533 6.08041 2.34513 6.10475C1.37356 5.39813 0.737034 4.19206 0.737034 2.82758C0.737034 2.09663 0.915681 1.42658 1.22839 0.841809C3.00403 3.22962 5.67308 4.78898 8.66594 4.95957C8.61011 4.66718 8.5766 4.36265 8.5766 4.05807C8.5766 1.88952 10.1847 0.123047 12.1837 0.123047C13.2223 0.123047 14.1603 0.598172 14.8192 1.36568C15.6344 1.19513 16.4162 0.866185 17.1086 0.415434C16.8405 1.32916 16.271 2.09667 15.5228 2.58395C16.2487 2.49871 16.9522 2.27937 17.5999 1.97483C17.1086 2.7545 16.4944 3.44888 15.7908 4.00932Z" fill="#3CB5DB"${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                width: "18",
                height: "16",
                viewBox: "0 0 18 16",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", {
                  d: "M15.7908 4.00932C15.802 4.17987 15.802 4.35046 15.802 4.52101C15.802 9.72301 12.1726 15.7169 5.53908 15.7169C3.49542 15.7169 1.59696 15.0712 0 13.9505C0.290366 13.987 0.569525 13.9992 0.871063 13.9992C2.55733 13.9992 4.10963 13.3779 5.34923 12.318C3.76344 12.2814 2.43451 11.1484 1.97663 9.58902C2.2 9.62555 2.42333 9.64992 2.65788 9.64992C2.98172 9.64992 3.3056 9.60117 3.60711 9.51593C1.95432 9.15042 0.714691 7.56669 0.714691 5.654V5.60528C1.19488 5.89767 1.7533 6.08041 2.34513 6.10475C1.37356 5.39813 0.737034 4.19206 0.737034 2.82758C0.737034 2.09663 0.915681 1.42658 1.22839 0.841809C3.00403 3.22962 5.67308 4.78898 8.66594 4.95957C8.61011 4.66718 8.5766 4.36265 8.5766 4.05807C8.5766 1.88952 10.1847 0.123047 12.1837 0.123047C13.2223 0.123047 14.1603 0.598172 14.8192 1.36568C15.6344 1.19513 16.4162 0.866185 17.1086 0.415434C16.8405 1.32916 16.271 2.09667 15.5228 2.58395C16.2487 2.49871 16.9522 2.27937 17.5999 1.97483C17.1086 2.7545 16.4944 3.44888 15.7908 4.00932Z",
                  fill: "#3CB5DB"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div></div></div></div><div class="col-sm-8"></div></div></div><div class="container"><div class="row py-3"><div class="col-12"><span>The Bookbarn | \xA9 2022 All Rights Reserved</span></div></div></div></div></footer>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/TheFooter.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/frontend/components/shared/Dropdown.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Dropdown = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 text-gray-500",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, _attrs))}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/frontend/components/icons/CartIcon.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const CartIcon = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$2 = {
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/frontend/components/form/Button.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const FormButton = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {
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
          _push2(`<div${_scopeId}><div class="bg-primary text-white py-2 px-3"${_scopeId}><p class="text-center text-sm tracking-wider"${_scopeId}>${ssrInterpolate(_ctx.totalItems)} Books Added to your BookList</p></div><div class="overflow-y-auto" style="${ssrRenderStyle({ "height": "295px" })}"${_scopeId}><!--[-->`);
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
            class: "w-full mt-4 inline-flex items-center justify-center px-6 py-2 bg-primary border border-transparent rounded-lg text-sm text-white hover:bg-primary-600 active:bg-primary-700 focus:outline-none focus:border-primary-700 focus:ring focus:ring-primary-200 transition whitespace-nowrap w-full mt-4"
          }, {
            default: withCtx((_, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`View your Booklist`);
              } else {
                return [
                  createTextVNode("View your Booklist")
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
          _push2(`</div></div>`);
        } else {
          _push2(`<div class="py-3 px-4 h-16 flex items-center justify-center"${_scopeId}>No Books added in the List!</div>`);
        }
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "bg-white" }, [
            _ctx.cartItems && _ctx.cartItems.length ? (openBlock(), createBlock("div", { key: 0 }, [
              createVNode("div", { class: "bg-primary text-white py-2 px-3" }, [
                createVNode("p", { class: "text-center text-sm tracking-wider" }, toDisplayString(_ctx.totalItems) + " Books Added to your BookList", 1)
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
                  class: "w-full mt-4 inline-flex items-center justify-center px-6 py-2 bg-primary border border-transparent rounded-lg text-sm text-white hover:bg-primary-600 active:bg-primary-700 focus:outline-none focus:border-primary-700 focus:ring focus:ring-primary-200 transition whitespace-nowrap w-full mt-4"
                }, {
                  default: withCtx(() => [
                    createTextVNode("View your Booklist")
                  ]),
                  _: 1
                }, 8, ["href"])
              ])
            ])) : (openBlock(), createBlock("div", {
              key: 1,
              class: "py-3 px-4 h-16 flex items-center justify-center"
            }, "No Books added in the List!"))
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/frontend/components/partials/CartDropdown.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const CartDropdown = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "FrontLayout",
  __ssrInlineRender: true,
  props: {
    title: String
  },
  setup(__props) {
    const showingNavigationDropdown = ref(false);
    const switchToTeam = (team) => {
      Inertia.put(route("current-team.update"), {
        team_id: team.id
      }, {
        preserveState: false
      });
    };
    const logout = () => {
      Inertia.post(route("logout"));
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(unref(Head), { title: __props.title }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$6, null, null, _parent));
      _push(`<div class="min-h-screen bg-gray-100"><nav class="bg-white border-b border-gray-100 py-3"><div class="container"><div class="row"><div class="col-sm-3 col-6"><div class="shrink-0 flex items-center mr-8">`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/",
        class: "logo"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(ApplicationMark, {
              class: "block w-auto",
              style: { "height": "90px" }
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(ApplicationMark, {
                class: "block w-auto",
                style: { "height": "90px" }
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="col-sm-6 hidden sm:block"><div class="relative mt-4 hidden sm:block"><input type="text" id="email-address-icon" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-3 py-3" placeholder="search over 100s book titles"><button type="submit" class="absolute right-0 top-0 mt-3 mr-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-green-600"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path></svg></button></div></div><div class="col-sm-3 col-4"><div class="flex justify-between"><div class="sm:mt-4 mt-4 relative"><div class="flex justify-between">`);
      _push(ssrRenderComponent(CartDropdown, { class: "sm:py-3 sm:pt-0" }, null, _parent));
      _push(`<div class="sm:py-3 sm:pt-0">`);
      if (!_ctx.$page.props.user) {
        _push(ssrRenderComponent(unref(Link), {
          class: "mr-2 flex text-decoration-none sm:my-3",
          href: _ctx.route("login")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="text-green-500 hover:text-red-500"${_scopeId}>Log In</span>`);
            } else {
              return [
                createVNode("span", { class: "text-green-500 hover:text-red-500" }, "Log In")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      if (_ctx.$page.props.jetstream.hasTeamFeatures) {
        _push(ssrRenderComponent(_sfc_main$7, {
          align: "right",
          width: "60"
        }, {
          trigger: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="inline-flex rounded-md"${_scopeId}><button type="button" class="inline-flex items-center px-3 py-3 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50 transition"${_scopeId}>${ssrInterpolate(_ctx.$page.props.user.current_team.name)} <svg class="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"${_scopeId}><path fill-rule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"${_scopeId}></path></svg></button></span>`);
            } else {
              return [
                createVNode("span", { class: "inline-flex rounded-md" }, [
                  createVNode("button", {
                    type: "button",
                    class: "inline-flex items-center px-3 py-3 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50 transition"
                  }, [
                    createTextVNode(toDisplayString(_ctx.$page.props.user.current_team.name) + " ", 1),
                    (openBlock(), createBlock("svg", {
                      class: "ml-2 -mr-0.5 h-4 w-4",
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 20 20",
                      fill: "currentColor"
                    }, [
                      createVNode("path", {
                        "fill-rule": "evenodd",
                        d: "M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",
                        "clip-rule": "evenodd"
                      })
                    ]))
                  ])
                ])
              ];
            }
          }),
          content: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="w-60"${_scopeId}>`);
              if (_ctx.$page.props.jetstream.hasTeamFeatures) {
                _push2(`<!--[--><div class="block px-4 py-2 text-xs text-gray-400"${_scopeId}> Manage Team </div>`);
                _push2(ssrRenderComponent(_sfc_main$8, {
                  href: _ctx.route("teams.show", _ctx.$page.props.user.current_team)
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` Team Settings `);
                    } else {
                      return [
                        createTextVNode(" Team Settings ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                if (_ctx.$page.props.jetstream.canCreateTeams) {
                  _push2(ssrRenderComponent(_sfc_main$8, {
                    href: _ctx.route("teams.create")
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(` Create New Team `);
                      } else {
                        return [
                          createTextVNode(" Create New Team ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<div class="border-t border-gray-100"${_scopeId}></div><div class="block px-4 py-2 text-xs text-gray-400"${_scopeId}> Switch Teams </div><!--[-->`);
                ssrRenderList(_ctx.$page.props.user.all_teams, (team) => {
                  _push2(`<form${_scopeId}>`);
                  _push2(ssrRenderComponent(_sfc_main$8, { as: "button" }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`<div class="flex items-center"${_scopeId2}>`);
                        if (team.id == _ctx.$page.props.user.current_team_id) {
                          _push3(`<svg class="mr-2 h-5 w-5 text-green-400" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"${_scopeId2}><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"${_scopeId2}></path></svg>`);
                        } else {
                          _push3(`<!---->`);
                        }
                        _push3(`<div${_scopeId2}>${ssrInterpolate(team.name)}</div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex items-center" }, [
                            team.id == _ctx.$page.props.user.current_team_id ? (openBlock(), createBlock("svg", {
                              key: 0,
                              class: "mr-2 h-5 w-5 text-green-400",
                              fill: "none",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24"
                            }, [
                              createVNode("path", { d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" })
                            ])) : createCommentVNode("", true),
                            createVNode("div", null, toDisplayString(team.name), 1)
                          ])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                  _push2(`</form>`);
                });
                _push2(`<!--]--><!--]-->`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "w-60" }, [
                  _ctx.$page.props.jetstream.hasTeamFeatures ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                    createVNode("div", { class: "block px-4 py-2 text-xs text-gray-400" }, " Manage Team "),
                    createVNode(_sfc_main$8, {
                      href: _ctx.route("teams.show", _ctx.$page.props.user.current_team)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Team Settings ")
                      ]),
                      _: 1
                    }, 8, ["href"]),
                    _ctx.$page.props.jetstream.canCreateTeams ? (openBlock(), createBlock(_sfc_main$8, {
                      key: 0,
                      href: _ctx.route("teams.create")
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Create New Team ")
                      ]),
                      _: 1
                    }, 8, ["href"])) : createCommentVNode("", true),
                    createVNode("div", { class: "border-t border-gray-100" }),
                    createVNode("div", { class: "block px-4 py-2 text-xs text-gray-400" }, " Switch Teams "),
                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.$page.props.user.all_teams, (team) => {
                      return openBlock(), createBlock("form", {
                        key: team.id,
                        onSubmit: withModifiers(($event) => switchToTeam(team), ["prevent"])
                      }, [
                        createVNode(_sfc_main$8, { as: "button" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex items-center" }, [
                              team.id == _ctx.$page.props.user.current_team_id ? (openBlock(), createBlock("svg", {
                                key: 0,
                                class: "mr-2 h-5 w-5 text-green-400",
                                fill: "none",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24"
                              }, [
                                createVNode("path", { d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" })
                              ])) : createCommentVNode("", true),
                              createVNode("div", null, toDisplayString(team.name), 1)
                            ])
                          ]),
                          _: 2
                        }, 1024)
                      ], 40, ["onSubmit"]);
                    }), 128))
                  ], 64)) : createCommentVNode("", true)
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (_ctx.$page.props.user) {
        _push(`<div class="ml-3 mt-4 relative hidden sm:block">`);
        _push(ssrRenderComponent(_sfc_main$7, {
          align: "right",
          width: "48"
        }, {
          trigger: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (_ctx.$page.props.jetstream.managesProfilePhotos) {
                _push2(`<button class="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition"${_scopeId}><img class="h-8 w-8 rounded-full object-cover"${ssrRenderAttr("src", _ctx.$page.props.user.profile_photo_url)}${ssrRenderAttr("alt", _ctx.$page.props.user.name)}${_scopeId}></button>`);
              } else {
                _push2(`<span class="inline-flex rounded-md"${_scopeId}><button type="button" class="inline-flex items-center px-3 py-2 sm:py-3-6 border-0 border-transparent text-md leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition"${_scopeId}>${ssrInterpolate(_ctx.$page.props.user.name)} <svg class="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"${_scopeId}><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"${_scopeId}></path></svg></button></span>`);
              }
            } else {
              return [
                _ctx.$page.props.jetstream.managesProfilePhotos ? (openBlock(), createBlock("button", {
                  key: 0,
                  class: "flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition"
                }, [
                  createVNode("img", {
                    class: "h-8 w-8 rounded-full object-cover",
                    src: _ctx.$page.props.user.profile_photo_url,
                    alt: _ctx.$page.props.user.name
                  }, null, 8, ["src", "alt"])
                ])) : (openBlock(), createBlock("span", {
                  key: 1,
                  class: "inline-flex rounded-md"
                }, [
                  createVNode("button", {
                    type: "button",
                    class: "inline-flex items-center px-3 py-2 sm:py-3-6 border-0 border-transparent text-md leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition"
                  }, [
                    createTextVNode(toDisplayString(_ctx.$page.props.user.name) + " ", 1),
                    (openBlock(), createBlock("svg", {
                      class: "ml-2 -mr-0.5 h-4 w-4",
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 20 20",
                      fill: "currentColor"
                    }, [
                      createVNode("path", {
                        "fill-rule": "evenodd",
                        d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                        "clip-rule": "evenodd"
                      })
                    ]))
                  ])
                ]))
              ];
            }
          }),
          content: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="block px-4 py-2 text-xs text-gray-400"${_scopeId}> Manage Account </div>`);
              _push2(ssrRenderComponent(_sfc_main$8, {
                href: _ctx.route("profile.show")
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Profile `);
                  } else {
                    return [
                      createTextVNode(" Profile ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$8, {
                href: _ctx.route("myorders")
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` My Orders `);
                  } else {
                    return [
                      createTextVNode(" My Orders ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              if (_ctx.$page.props.jetstream.hasApiFeatures) {
                _push2(ssrRenderComponent(_sfc_main$8, {
                  href: _ctx.route("api-tokens.index")
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` API Tokens `);
                    } else {
                      return [
                        createTextVNode(" API Tokens ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="border-t border-gray-100"${_scopeId}></div><form${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$8, { as: "button" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Log Out `);
                  } else {
                    return [
                      createTextVNode(" Log Out ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</form>`);
            } else {
              return [
                createVNode("div", { class: "block px-4 py-2 text-xs text-gray-400" }, " Manage Account "),
                createVNode(_sfc_main$8, {
                  href: _ctx.route("profile.show")
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Profile ")
                  ]),
                  _: 1
                }, 8, ["href"]),
                createVNode(_sfc_main$8, {
                  href: _ctx.route("myorders")
                }, {
                  default: withCtx(() => [
                    createTextVNode(" My Orders ")
                  ]),
                  _: 1
                }, 8, ["href"]),
                _ctx.$page.props.jetstream.hasApiFeatures ? (openBlock(), createBlock(_sfc_main$8, {
                  key: 0,
                  href: _ctx.route("api-tokens.index")
                }, {
                  default: withCtx(() => [
                    createTextVNode(" API Tokens ")
                  ]),
                  _: 1
                }, 8, ["href"])) : createCommentVNode("", true),
                createVNode("div", { class: "border-t border-gray-100" }),
                createVNode("form", {
                  onSubmit: withModifiers(logout, ["prevent"])
                }, [
                  createVNode(_sfc_main$8, { as: "button" }, {
                    default: withCtx(() => [
                      createTextVNode(" Log Out ")
                    ]),
                    _: 1
                  })
                ], 40, ["onSubmit"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="col-2"><div class="flex items-center sm:hidden"><button class="inline-flex items-center border rounded-lg mt-3 justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition"><svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24"><path class="${ssrRenderClass({ "hidden": showingNavigationDropdown.value, "inline-flex": !showingNavigationDropdown.value })}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path><path class="${ssrRenderClass({ "hidden": !showingNavigationDropdown.value, "inline-flex": showingNavigationDropdown.value })}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div></div></div></div><div class="${ssrRenderClass([{ "block": showingNavigationDropdown.value, "hidden": !showingNavigationDropdown.value }, "sm:hidden"])}"><div class="pt-2 pb-3 space-y-1">`);
      _push(ssrRenderComponent(_sfc_main$9, {
        href: _ctx.route("dashboard"),
        active: _ctx.route().current("dashboard")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Dashboard `);
          } else {
            return [
              createTextVNode(" Dashboard ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (_ctx.$page.props.user) {
        _push(`<div class="pt-4 pb-1 border-t border-gray-200"><div class="flex items-center px-4">`);
        if (_ctx.$page.props.jetstream.managesProfilePhotos) {
          _push(`<div class="shrink-0 mr-3"><img class="h-10 w-10 rounded-full object-cover"${ssrRenderAttr("src", _ctx.$page.props.user.profile_photo_url)}${ssrRenderAttr("alt", _ctx.$page.props.user.name)}></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div><div class="font-medium text-base text-gray-800">${ssrInterpolate(_ctx.$page.props.user.name)}</div><div class="font-medium text-sm text-gray-500">${ssrInterpolate(_ctx.$page.props.user.email)}</div></div></div><div class="mt-3 space-y-1">`);
        _push(ssrRenderComponent(_sfc_main$9, {
          href: _ctx.route("profile.show"),
          active: _ctx.route().current("profile.show")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Profile `);
            } else {
              return [
                createTextVNode(" Profile ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_sfc_main$9, {
          href: _ctx.route("myorders")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` My Orders `);
            } else {
              return [
                createTextVNode(" My Orders ")
              ];
            }
          }),
          _: 1
        }, _parent));
        if (_ctx.$page.props.jetstream.hasApiFeatures) {
          _push(ssrRenderComponent(_sfc_main$9, {
            href: _ctx.route("api-tokens.index"),
            active: _ctx.route().current("api-tokens.index")
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` API Tokens `);
              } else {
                return [
                  createTextVNode(" API Tokens ")
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<form method="POST">`);
        _push(ssrRenderComponent(_sfc_main$9, { as: "button" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Log Out `);
            } else {
              return [
                createTextVNode(" Log Out ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</form>`);
        if (_ctx.$page.props.jetstream.hasTeamFeatures) {
          _push(`<!--[--><div class="border-t border-gray-200"></div><div class="block px-4 py-2 text-xs text-gray-400"> Manage Team </div>`);
          _push(ssrRenderComponent(_sfc_main$9, {
            href: _ctx.route("teams.show", _ctx.$page.props.user.current_team),
            active: _ctx.route().current("teams.show")
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Team Settings `);
              } else {
                return [
                  createTextVNode(" Team Settings ")
                ];
              }
            }),
            _: 1
          }, _parent));
          if (_ctx.$page.props.jetstream.canCreateTeams) {
            _push(ssrRenderComponent(_sfc_main$9, {
              href: _ctx.route("teams.create"),
              active: _ctx.route().current("teams.create")
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(` Create New Team `);
                } else {
                  return [
                    createTextVNode(" Create New Team ")
                  ];
                }
              }),
              _: 1
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="border-t border-gray-200"></div><div class="block px-4 py-2 text-xs text-gray-400"> Switch Teams </div><!--[-->`);
          ssrRenderList(_ctx.$page.props.user.all_teams, (team) => {
            _push(`<form>`);
            _push(ssrRenderComponent(_sfc_main$9, { as: "button" }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<div class="flex items-center"${_scopeId}>`);
                  if (team.id == _ctx.$page.props.user.current_team_id) {
                    _push2(`<svg class="mr-2 h-5 w-5 text-green-400" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"${_scopeId}></path></svg>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`<div${_scopeId}>${ssrInterpolate(team.name)}</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center" }, [
                      team.id == _ctx.$page.props.user.current_team_id ? (openBlock(), createBlock("svg", {
                        key: 0,
                        class: "mr-2 h-5 w-5 text-green-400",
                        fill: "none",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24"
                      }, [
                        createVNode("path", { d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" })
                      ])) : createCommentVNode("", true),
                      createVNode("div", null, toDisplayString(team.name), 1)
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</form>`);
          });
          _push(`<!--]--><!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></nav>`);
      if (_ctx.$slots.header) {
        _push(`<header class="bg-white shadow"><div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">`);
        ssrRenderSlot(_ctx.$slots, "header", {}, null, _push, _parent);
        _push(`</div></header>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<main>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(_sfc_main$5, null, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/FrontLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  FormButton as F,
  _sfc_main as _
};
