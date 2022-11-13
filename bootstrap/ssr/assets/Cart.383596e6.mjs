import { mapGetters, mapMutations } from "vuex";
import { _ as _sfc_main$3, F as FormButton } from "./FrontLayout.7e21ee94.mjs";
import { Head, Link } from "@inertiajs/inertia-vue3";
import { mergeProps, useSSRContext, resolveComponent, withCtx, createTextVNode, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, withModifiers, createCommentVNode } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrInterpolate, ssrRenderAttr, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
import { s as store } from "../app2.mjs";
import "@inertiajs/inertia";
import "./ResponsiveNavLink.cc3c0f4e.mjs";
import "lodash";
import "axios";
import "laravel-echo";
import "pusher-js";
/* empty css       */import "@inertiajs/progress";
import "bootstrap";
import "vuex-persistedstate";
import "sweetalert2";
import "vue-sweetalert2";
import "@ionic/pwa-elements/loader";
const _sfc_main$2 = {
  props: {
    value: {
      type: [Number, String],
      default: null
    },
    type: {
      type: String,
      default: "text",
      validator: (value) => {
        return [
          "text",
          "email",
          "number",
          "date",
          "password",
          "month",
          "tel"
        ].includes(value);
      }
    },
    variant: {
      type: String,
      default: "prepend",
      validator: (value) => {
        return ["append", "prepend"].includes(value);
      }
    },
    label: {
      type: [String, Number],
      default: ""
    },
    placeholder: {
      type: [String, Number],
      default: ""
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($props.variant == "prepend") {
    _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-nowrap items-stretch w-full relative rounded-full overflow-hidden border border-gray-300 focus-within:border-primary-300 focus-within:outline-none focus-within:ring focus-within:ring-primary-200 focus-within:ring-opacity-50" }, _attrs))}><div class="flex -mr-px bg-gray-200"><span class="w-10 flex items-center justify-center leading-normal whitespace-no-wrap text-grey-dark text-xs font-semibold uppercase">`);
    ssrRenderSlot(_ctx.$slots, "default", {}, () => {
      _push(`<span>${ssrInterpolate($props.label)}</span>`);
    }, _push, _parent);
    _push(`</span></div><input${ssrRenderAttr("type", $props.type)}${ssrRenderAttr("value", $props.value)} class="flex-shrink flex-grow leading-normal w-px flex-1 h-6 rounded rounded-l-none px-3 relative focus:outline-none"${ssrRenderAttr("placeholder", $props.placeholder)}></div>`);
  } else {
    _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-nowrap items-stretch w-full relative rounded-full overflow-hidden border border-gray-300 focus-within:border-primary-300 focus-within:outline-none focus-within:ring focus-within:ring-primary-200 focus-within:ring-opacity-50" }, _attrs))}><input${ssrRenderAttr("type", $props.type)}${ssrRenderAttr("value", $props.value)} class="flex-shrink flex-grow leading-normal w-px flex-1 h-6 px-3 relative focus:outline-none"${ssrRenderAttr("placeholder", $props.placeholder)}><div class="flex -mr-px bg-gray-200"><span class="flex items-center leading-normal px-3 whitespace-no-wrap text-grey-dark text-xs font-semibold uppercase">`);
    ssrRenderSlot(_ctx.$slots, "default", {}, () => {
      _push(`<span>${ssrInterpolate($props.label)}</span>`);
    }, _push, _parent);
    _push(`</span></div></div>`);
  }
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/frontend/components/form/InputGroup.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const FormInputGroup = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<button${ssrRenderAttrs(mergeProps({
    type: "button",
    class: "text-gray-400 hover:text-red-500 cursor-pointer"
  }, _attrs))}><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></button>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/frontend/components/shared/RemoveIconButton.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const RemoveIconButton = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const Cart_vue_vue_type_style_index_0_scoped_1e8a73fb_lang = "";
const _sfc_main = {
  computed: {
    ...mapGetters({
      cartItems: "cart/getCartItems",
      totalItems: "cart/getTotalItem",
      totalPrice: "cart/getTotalPrice",
      totalDiscount: "cart/getTotalDiscount",
      grandTotal: "cart/getGrandTotal"
    }),
    orderItems() {
      return this.cartItems.map((item) => {
        return {
          book_id: item.id,
          quantity: item.quantity
        };
      });
    }
  },
  components: {
    FrontLayout: _sfc_main$3,
    Head,
    Link,
    FormInputGroup,
    FormButton,
    RemoveIconButton
  },
  data() {
    return {
      coupon: {
        type: null,
        coupon_code: null,
        coupon_amount: null,
        coupon_expiry: null,
        status: null
      },
      loading: false
    };
  },
  methods: {
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
    },
    async placeOrder() {
      this.loading = true;
      try {
        await axios.get("/sanctum/csrf-cookie").then((res) => {
          if (res) {
            const response = axios.post(route("orders.store"), {
              customer_id: this.$page.props.user.id,
              totalDiscount: 0,
              orderItems: this.orderItems
            });
            if (response) {
              this.$swal("Order created successfully!");
              store.dispatch("cart/resetCart");
              window.location.href = route("myorders");
              this.loading = false;
            }
          }
        });
      } catch (error) {
        console.log(error);
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_FrontLayout = resolveComponent("FrontLayout");
  const _component_remove_icon_button = resolveComponent("remove-icon-button");
  const _component_Link = resolveComponent("Link");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, { title: "Cart" }, null, _parent));
  _push(ssrRenderComponent(_component_FrontLayout, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="container mx-auto my-5" data-v-1e8a73fb${_scopeId}><div class="lg:flex" data-v-1e8a73fb${_scopeId}><div class="lg:w-9/12 lg:mr-5" data-v-1e8a73fb${_scopeId}><h5 class="font-semibold text-xl mb-3" data-v-1e8a73fb${_scopeId}>Booklist Items</h5>`);
        if (_ctx.cartItems.length) {
          _push2(`<div class="rounded-primary overflow-hidden" data-v-1e8a73fb${_scopeId}><div class="overflow-x-auto overflow-y-hidden w-full" data-v-1e8a73fb${_scopeId}><table class="filament-tables-table w-full text-left rtl:text-right divide-y table-auto" data-v-1e8a73fb${_scopeId}><thead data-v-1e8a73fb${_scopeId}><tr class="bg-primary-600" data-v-1e8a73fb${_scopeId}><th class="text-white" data-v-1e8a73fb${_scopeId}>Book</th><th class="text-white" data-v-1e8a73fb${_scopeId}>Name</th><th class="text-white" data-v-1e8a73fb${_scopeId}>Price</th><th class="text-white" data-v-1e8a73fb${_scopeId}>Quantity</th><th class="text-white" data-v-1e8a73fb${_scopeId}>Total</th><th class="text-white" data-v-1e8a73fb${_scopeId}></th></tr></thead><tbody class="bg-white divide-y divide-gray-200 pb-3" data-v-1e8a73fb${_scopeId}><!--[-->`);
          ssrRenderList(_ctx.cartItems, (item, index) => {
            _push2(`<tr data-v-1e8a73fb${_scopeId}><td class="px-3" data-v-1e8a73fb${_scopeId}><div class="h-16 w-16" data-v-1e8a73fb${_scopeId}><img${ssrRenderAttr("src", item.featured_image)} class="w-full h-full object-cover"${ssrRenderAttr("alt", item.name)} data-v-1e8a73fb${_scopeId}></div></td><td data-v-1e8a73fb${_scopeId}>${ssrInterpolate(item.name)}</td><td data-v-1e8a73fb${_scopeId}><span class="px-3 py-1.5 bg-orange-200 text-orange-700 text-center rounded-full text-sm" data-v-1e8a73fb${_scopeId}>pending quotation</span></td><td data-v-1e8a73fb${_scopeId}><input${ssrRenderAttr("value", item.quantity)} type="number" data-v-1e8a73fb${_scopeId}></td><td data-v-1e8a73fb${_scopeId}><span class="font-semibold" data-v-1e8a73fb${_scopeId}><span data-v-1e8a73fb${_scopeId}>pending quotation</span></span></td><td data-v-1e8a73fb${_scopeId}>`);
            _push2(ssrRenderComponent(_component_remove_icon_button, {
              onClick: ($event) => $options.removeFromCart(item)
            }, null, _parent2, _scopeId));
            _push2(`</td></tr>`);
          });
          _push2(`<!--]--></tbody></table></div></div>`);
        } else {
          _push2(`<div data-v-1e8a73fb${_scopeId}><div class="flex flex-col items-center justify-center text-gray-300 h-44 bg-gray-50 rounded-lg" data-v-1e8a73fb${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="currentColor" data-v-1e8a73fb${_scopeId}><path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" data-v-1e8a73fb${_scopeId}></path><path fill-rule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clip-rule="evenodd" data-v-1e8a73fb${_scopeId}></path></svg><p class="mt-2 text-gray-400" data-v-1e8a73fb${_scopeId}>Your Book List is Empty!</p></div></div>`);
        }
        _push2(`</div>`);
        if (_ctx.cartItems.length) {
          _push2(`<div class="md:w-6/12 lg:w-3/12 mt-10 lg:mt-0" data-v-1e8a73fb${_scopeId}><h5 class="font-semibold text-xl mb-3" data-v-1e8a73fb${_scopeId}>Cart Details</h5><div class="bg-gray-200 p-4 rounded-primary" data-v-1e8a73fb${_scopeId}><p class="flex justify-between py-2 text-sm" data-v-1e8a73fb${_scopeId}><span class="font-medium" data-v-1e8a73fb${_scopeId}> Sub Total: </span><span class="font-bold" data-v-1e8a73fb${_scopeId}> request quotation first </span></p><p class="flex justify-between py-2 text-sm border-b border-gray-300" data-v-1e8a73fb${_scopeId}><span class="font-medium" data-v-1e8a73fb${_scopeId}> Discount: </span><span class="font-bold" data-v-1e8a73fb${_scopeId}> request quotation first </span></p><p class="flex justify-between py-2 text-sm" data-v-1e8a73fb${_scopeId}><span class="font-medium" data-v-1e8a73fb${_scopeId}> Cart Total: </span><span class="font-bold" data-v-1e8a73fb${_scopeId}> request quotation first </span></p></div>`);
          if (_ctx.$page.props.user) {
            _push2(`<button class="w-full mt-8 text-sm bg-primary text-white px-6 py-3 block rounded-md text-center" data-v-1e8a73fb${_scopeId}>`);
            if ($data.loading) {
              _push2(`<div class="spinner-border" role="status" data-v-1e8a73fb${_scopeId}><span class="visually-hidden" data-v-1e8a73fb${_scopeId}>Please wait, Loading...</span></div>`);
            } else {
              _push2(`<span data-v-1e8a73fb${_scopeId}>Get a Quotation now</span>`);
            }
            _push2(`</button>`);
          } else {
            _push2(`<div data-v-1e8a73fb${_scopeId}>`);
            if (_ctx.cartItems.length) {
              _push2(ssrRenderComponent(_component_Link, {
                class: "w-full mt-8 text-sm bg-primary text-white px-6 py-3 block rounded-md text-center text-decoration-none",
                href: _ctx.route("login")
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Login to request a quotation`);
                  } else {
                    return [
                      createTextVNode("Login to request a quotation")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`<span class="my-5 block text-center font-medium text-lg" data-v-1e8a73fb${_scopeId}>or</span>`);
            if (_ctx.cartItems.length) {
              _push2(ssrRenderComponent(_component_Link, {
                class: "w-full mt-8 text-sm bg-redish text-white px-6 py-3 block rounded-md text-center text-decoration-none",
                href: _ctx.route("register")
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Sign up to request a quotation`);
                  } else {
                    return [
                      createTextVNode("Sign up to request a quotation")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          }
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div>`);
      } else {
        return [
          createVNode("div", { class: "container mx-auto my-5" }, [
            createVNode("div", { class: "lg:flex" }, [
              createVNode("div", { class: "lg:w-9/12 lg:mr-5" }, [
                createVNode("h5", { class: "font-semibold text-xl mb-3" }, "Booklist Items"),
                _ctx.cartItems.length ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "rounded-primary overflow-hidden"
                }, [
                  createVNode("div", { class: "overflow-x-auto overflow-y-hidden w-full" }, [
                    createVNode("table", { class: "filament-tables-table w-full text-left rtl:text-right divide-y table-auto" }, [
                      createVNode("thead", null, [
                        createVNode("tr", { class: "bg-primary-600" }, [
                          createVNode("th", { class: "text-white" }, "Book"),
                          createVNode("th", { class: "text-white" }, "Name"),
                          createVNode("th", { class: "text-white" }, "Price"),
                          createVNode("th", { class: "text-white" }, "Quantity"),
                          createVNode("th", { class: "text-white" }, "Total"),
                          createVNode("th", { class: "text-white" })
                        ])
                      ]),
                      createVNode("tbody", { class: "bg-white divide-y divide-gray-200 pb-3" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.cartItems, (item, index) => {
                          return openBlock(), createBlock("tr", { key: index }, [
                            createVNode("td", { class: "px-3" }, [
                              createVNode("div", { class: "h-16 w-16" }, [
                                createVNode("img", {
                                  src: item.featured_image,
                                  class: "w-full h-full object-cover",
                                  alt: item.name
                                }, null, 8, ["src", "alt"])
                              ])
                            ]),
                            createVNode("td", null, toDisplayString(item.name), 1),
                            createVNode("td", null, [
                              createVNode("span", { class: "px-3 py-1.5 bg-orange-200 text-orange-700 text-center rounded-full text-sm" }, "pending quotation")
                            ]),
                            createVNode("td", null, [
                              createVNode("input", {
                                onInput: ($event) => $options.changedQuantity($event, item),
                                value: item.quantity,
                                type: "number"
                              }, null, 40, ["onInput", "value"])
                            ]),
                            createVNode("td", null, [
                              createVNode("span", { class: "font-semibold" }, [
                                createVNode("span", null, "pending quotation")
                              ])
                            ]),
                            createVNode("td", null, [
                              createVNode(_component_remove_icon_button, {
                                onClick: ($event) => $options.removeFromCart(item)
                              }, null, 8, ["onClick"])
                            ])
                          ]);
                        }), 128))
                      ])
                    ])
                  ])
                ])) : (openBlock(), createBlock("div", { key: 1 }, [
                  createVNode("div", { class: "flex flex-col items-center justify-center text-gray-300 h-44 bg-gray-50 rounded-lg" }, [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "h-8 w-8",
                      viewBox: "0 0 20 20",
                      fill: "currentColor"
                    }, [
                      createVNode("path", { d: "M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" }),
                      createVNode("path", {
                        "fill-rule": "evenodd",
                        d: "M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z",
                        "clip-rule": "evenodd"
                      })
                    ])),
                    createVNode("p", { class: "mt-2 text-gray-400" }, "Your Book List is Empty!")
                  ])
                ]))
              ]),
              _ctx.cartItems.length ? (openBlock(), createBlock("div", {
                key: 0,
                class: "md:w-6/12 lg:w-3/12 mt-10 lg:mt-0"
              }, [
                createVNode("h5", { class: "font-semibold text-xl mb-3" }, "Cart Details"),
                createVNode("div", { class: "bg-gray-200 p-4 rounded-primary" }, [
                  createVNode("p", { class: "flex justify-between py-2 text-sm" }, [
                    createVNode("span", { class: "font-medium" }, " Sub Total: "),
                    createVNode("span", { class: "font-bold" }, " request quotation first ")
                  ]),
                  createVNode("p", { class: "flex justify-between py-2 text-sm border-b border-gray-300" }, [
                    createVNode("span", { class: "font-medium" }, " Discount: "),
                    createVNode("span", { class: "font-bold" }, " request quotation first ")
                  ]),
                  createVNode("p", { class: "flex justify-between py-2 text-sm" }, [
                    createVNode("span", { class: "font-medium" }, " Cart Total: "),
                    createVNode("span", { class: "font-bold" }, " request quotation first ")
                  ])
                ]),
                _ctx.$page.props.user ? (openBlock(), createBlock("button", {
                  key: 0,
                  class: "w-full mt-8 text-sm bg-primary text-white px-6 py-3 block rounded-md text-center",
                  onClick: withModifiers($options.placeOrder, ["prevent"])
                }, [
                  $data.loading ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "spinner-border",
                    role: "status"
                  }, [
                    createVNode("span", { class: "visually-hidden" }, "Please wait, Loading...")
                  ])) : (openBlock(), createBlock("span", { key: 1 }, "Get a Quotation now"))
                ], 8, ["onClick"])) : (openBlock(), createBlock("div", { key: 1 }, [
                  _ctx.cartItems.length ? (openBlock(), createBlock(_component_Link, {
                    key: 0,
                    class: "w-full mt-8 text-sm bg-primary text-white px-6 py-3 block rounded-md text-center text-decoration-none",
                    href: _ctx.route("login")
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Login to request a quotation")
                    ]),
                    _: 1
                  }, 8, ["href"])) : createCommentVNode("", true),
                  createVNode("span", { class: "my-5 block text-center font-medium text-lg" }, "or"),
                  _ctx.cartItems.length ? (openBlock(), createBlock(_component_Link, {
                    key: 1,
                    class: "w-full mt-8 text-sm bg-redish text-white px-6 py-3 block rounded-md text-center text-decoration-none",
                    href: _ctx.route("register")
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Sign up to request a quotation")
                    ]),
                    _: 1
                  }, 8, ["href"])) : createCommentVNode("", true)
                ]))
              ])) : createCommentVNode("", true)
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Cart.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Cart = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-1e8a73fb"]]);
export {
  Cart as default
};
