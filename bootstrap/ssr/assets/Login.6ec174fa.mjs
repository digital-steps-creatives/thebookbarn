import { unref, withCtx, createTextVNode, createVNode, withModifiers, openBlock, createBlock, toDisplayString, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { useForm, Head, Link } from "@inertiajs/inertia-vue3";
import { _ as _sfc_main$1 } from "./FrontLayout.290c8d19.mjs";
import "./AuthenticationCardLogo.679e9e13.mjs";
import { _ as _sfc_main$5 } from "./Checkbox.75ff4498.mjs";
import { _ as _sfc_main$3, a as _sfc_main$4 } from "./TextInput.4df6fbdc.mjs";
import { _ as _sfc_main$2 } from "./InputLabel.4e8d4ed9.mjs";
import { _ as _sfc_main$6 } from "./PrimaryButton.1245566b.mjs";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
import "@inertiajs/inertia";
import "./ResponsiveNavLink.016ef96f.mjs";
import "./CartDropdown.b11f13c5.mjs";
import "vuex";
import "../app.mjs";
import "lodash";
import "axios";
import "laravel-echo";
import "pusher-js";
import "@inertiajs/progress";
import "bootstrap";
import "vuex-persistedstate";
import "sweetalert2";
import "vue-camera-lib";
import "@formkit/vue";
import "@formkit/themes";
import "vue-instantsearch/vue3/es";
const Login_vue_vue_type_style_index_0_scoped_be3d8f3e_lang = "";
const _sfc_main = {
  __name: "Login",
  __ssrInlineRender: true,
  props: {
    canResetPassword: Boolean,
    status: String
  },
  setup(__props) {
    const form = useForm({
      email: "",
      password: "",
      remember_token: false
    });
    const submit = () => {
      form.transform((data) => ({
        ...data,
        remember_token: form.remember_token ? "on" : ""
      })).post(route("affiliates.post.signin"), {
        onFinish: () => form.reset("password")
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Affiliates Login" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="container my-12 py-8" data-v-be3d8f3e${_scopeId}><div class="row g-5 align-center" data-v-be3d8f3e${_scopeId}><div class="col-sm-5" data-v-be3d8f3e${_scopeId}><form class="p-5 bg-white/50 space-y-8 backdrop-blur-xl border border-gray-200 shadow rounded" data-v-be3d8f3e${_scopeId}><div class="w-full" data-v-be3d8f3e${_scopeId}><div class="filament-brand text-xl font-bold tracking-tight" data-v-be3d8f3e${_scopeId}> Affiliates Login </div></div>`);
            if (__props.status) {
              _push2(`<div class="my-4 font-medium text-sm text-green-600" data-v-be3d8f3e${_scopeId}>${ssrInterpolate(__props.status)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div data-v-be3d8f3e${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "email",
              value: "Email"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              id: "email",
              modelValue: unref(form).email,
              "onUpdate:modelValue": ($event) => unref(form).email = $event,
              type: "email",
              class: "mt-1 block w-full",
              required: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "mt-2",
              message: unref(form).errors.email
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4" data-v-be3d8f3e${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "password",
              value: "Password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              id: "password",
              modelValue: unref(form).password,
              "onUpdate:modelValue": ($event) => unref(form).password = $event,
              type: "password",
              class: "mt-1 block w-full",
              required: "",
              autocomplete: "current-password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "mt-2",
              message: unref(form).errors.password
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center justify-between mt-4" data-v-be3d8f3e${_scopeId}><label class="" data-v-be3d8f3e${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$5, {
              checked: unref(form).remember_token,
              "onUpdate:checked": ($event) => unref(form).remember_token = $event,
              name: "remember"
            }, null, _parent2, _scopeId));
            _push2(`<span class="ml-2 text-sm text-gray-600" data-v-be3d8f3e${_scopeId}>Remember me</span></label></div><div class="flex items-center mt-4" data-v-be3d8f3e${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$6, {
              class: ["w-full text-center block-must", { "opacity-25": unref(form).processing }],
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Sign in `);
                } else {
                  return [
                    createTextVNode(" Sign in ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center mt-4" data-v-be3d8f3e${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("password.request"),
              class: "text-primary-600 text-center text-decoration-none hover:text-primary-700"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Forgot your password? `);
                } else {
                  return [
                    createTextVNode(" Forgot your password? ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form></div><div class="col-sm-7" data-v-be3d8f3e${_scopeId}><img src="/images/illustration.svg" alt="" class="flex mx-auto" data-v-be3d8f3e${_scopeId}></div></div></div><section class="bg-green-100 py-5" data-v-be3d8f3e${_scopeId}><div class="container" data-v-be3d8f3e${_scopeId}><div class="row" data-v-be3d8f3e${_scopeId}><h2 class="text-center mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-green-600 font-bold leading-tight" data-v-be3d8f3e${_scopeId}>FAQs</h2><div class="col-12" data-v-be3d8f3e${_scopeId}><div class="row mb-4" data-v-be3d8f3e${_scopeId}><div class="col-sm-4" data-v-be3d8f3e${_scopeId}><h4 data-v-be3d8f3e${_scopeId}>What&#39;s the affiliate program?</h4></div><div class="col-sm-8" data-v-be3d8f3e${_scopeId}><p data-v-be3d8f3e${_scopeId}>We offer commission for each qualified referral who signs up and makes a purchase of any of our products through their affiliate link.</p></div></div><div class="row mb-4" data-v-be3d8f3e${_scopeId}><div class="col-sm-4" data-v-be3d8f3e${_scopeId}><h4 data-v-be3d8f3e${_scopeId}>How much will I get paid?</h4></div><div class="col-sm-8" data-v-be3d8f3e${_scopeId}><p data-v-be3d8f3e${_scopeId}>It&#39;s a 10% commission on the administration cost for every order purchase and paid for using your unique link/code. For qualifications, check out our terms of service.</p></div></div><div class="row" data-v-be3d8f3e${_scopeId}><div class="col-sm-4" data-v-be3d8f3e${_scopeId}><h4 data-v-be3d8f3e${_scopeId}>How will I get paid?</h4></div><div class="col-sm-8" data-v-be3d8f3e${_scopeId}><p data-v-be3d8f3e${_scopeId}>We pay commissions through Mpesa instant when we receive a payment from your referral.</p></div></div></div></div></div></section><section class="bg-gray-50 py-9" data-v-be3d8f3e${_scopeId}><div class="container" data-v-be3d8f3e${_scopeId}><div class="row justify-content-center" data-v-be3d8f3e${_scopeId}><div class="col-6" data-v-be3d8f3e${_scopeId}><p data-v-be3d8f3e${_scopeId}>BECOME AN AFFILIATE</p><h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-green-500 font-bold leading-tight" data-v-be3d8f3e${_scopeId}>Sign up fast, for free.</h2><p data-v-be3d8f3e${_scopeId}>In just a few minutes, you&#39;ll have a unique tracking code.</p><p data-v-be3d8f3e${_scopeId}>Send your unique code to your referrals, once they purchase any item, you earn</p>`);
            _push2(ssrRenderComponent(unref(Link), {
              class: "btn btn-primary text-white w-full",
              href: _ctx.route("affiliates.register")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Create an account`);
                } else {
                  return [
                    createTextVNode("Create an account")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div></section>`);
          } else {
            return [
              createVNode("div", { class: "container my-12 py-8" }, [
                createVNode("div", { class: "row g-5 align-center" }, [
                  createVNode("div", { class: "col-sm-5" }, [
                    createVNode("form", {
                      onSubmit: withModifiers(submit, ["prevent"]),
                      class: "p-5 bg-white/50 space-y-8 backdrop-blur-xl border border-gray-200 shadow rounded"
                    }, [
                      createVNode("div", { class: "w-full" }, [
                        createVNode("div", { class: "filament-brand text-xl font-bold tracking-tight" }, " Affiliates Login ")
                      ]),
                      __props.status ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "my-4 font-medium text-sm text-green-600"
                      }, toDisplayString(__props.status), 1)) : createCommentVNode("", true),
                      createVNode("div", null, [
                        createVNode(_sfc_main$2, {
                          for: "email",
                          value: "Email"
                        }),
                        createVNode(_sfc_main$3, {
                          id: "email",
                          modelValue: unref(form).email,
                          "onUpdate:modelValue": ($event) => unref(form).email = $event,
                          type: "email",
                          class: "mt-1 block w-full",
                          required: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(_sfc_main$4, {
                          class: "mt-2",
                          message: unref(form).errors.email
                        }, null, 8, ["message"])
                      ]),
                      createVNode("div", { class: "mt-4" }, [
                        createVNode(_sfc_main$2, {
                          for: "password",
                          value: "Password"
                        }),
                        createVNode(_sfc_main$3, {
                          id: "password",
                          modelValue: unref(form).password,
                          "onUpdate:modelValue": ($event) => unref(form).password = $event,
                          type: "password",
                          class: "mt-1 block w-full",
                          required: "",
                          autocomplete: "current-password"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(_sfc_main$4, {
                          class: "mt-2",
                          message: unref(form).errors.password
                        }, null, 8, ["message"])
                      ]),
                      createVNode("div", { class: "flex items-center justify-between mt-4" }, [
                        createVNode("label", { class: "" }, [
                          createVNode(_sfc_main$5, {
                            checked: unref(form).remember_token,
                            "onUpdate:checked": ($event) => unref(form).remember_token = $event,
                            name: "remember"
                          }, null, 8, ["checked", "onUpdate:checked"]),
                          createVNode("span", { class: "ml-2 text-sm text-gray-600" }, "Remember me")
                        ])
                      ]),
                      createVNode("div", { class: "flex items-center mt-4" }, [
                        createVNode(_sfc_main$6, {
                          class: ["w-full text-center block-must", { "opacity-25": unref(form).processing }],
                          disabled: unref(form).processing
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Sign in ")
                          ]),
                          _: 1
                        }, 8, ["class", "disabled"])
                      ]),
                      createVNode("div", { class: "flex items-center mt-4" }, [
                        createVNode(unref(Link), {
                          href: _ctx.route("password.request"),
                          class: "text-primary-600 text-center text-decoration-none hover:text-primary-700"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Forgot your password? ")
                          ]),
                          _: 1
                        }, 8, ["href"])
                      ])
                    ], 40, ["onSubmit"])
                  ]),
                  createVNode("div", { class: "col-sm-7" }, [
                    createVNode("img", {
                      src: "/images/illustration.svg",
                      alt: "",
                      class: "flex mx-auto"
                    })
                  ])
                ])
              ]),
              createVNode("section", { class: "bg-green-100 py-5" }, [
                createVNode("div", { class: "container" }, [
                  createVNode("div", { class: "row" }, [
                    createVNode("h2", { class: "text-center mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-green-600 font-bold leading-tight" }, "FAQs"),
                    createVNode("div", { class: "col-12" }, [
                      createVNode("div", { class: "row mb-4" }, [
                        createVNode("div", { class: "col-sm-4" }, [
                          createVNode("h4", null, "What's the affiliate program?")
                        ]),
                        createVNode("div", { class: "col-sm-8" }, [
                          createVNode("p", null, "We offer commission for each qualified referral who signs up and makes a purchase of any of our products through their affiliate link.")
                        ])
                      ]),
                      createVNode("div", { class: "row mb-4" }, [
                        createVNode("div", { class: "col-sm-4" }, [
                          createVNode("h4", null, "How much will I get paid?")
                        ]),
                        createVNode("div", { class: "col-sm-8" }, [
                          createVNode("p", null, "It's a 10% commission on the administration cost for every order purchase and paid for using your unique link/code. For qualifications, check out our terms of service.")
                        ])
                      ]),
                      createVNode("div", { class: "row" }, [
                        createVNode("div", { class: "col-sm-4" }, [
                          createVNode("h4", null, "How will I get paid?")
                        ]),
                        createVNode("div", { class: "col-sm-8" }, [
                          createVNode("p", null, "We pay commissions through Mpesa instant when we receive a payment from your referral.")
                        ])
                      ])
                    ])
                  ])
                ])
              ]),
              createVNode("section", { class: "bg-gray-50 py-9" }, [
                createVNode("div", { class: "container" }, [
                  createVNode("div", { class: "row justify-content-center" }, [
                    createVNode("div", { class: "col-6" }, [
                      createVNode("p", null, "BECOME AN AFFILIATE"),
                      createVNode("h2", { class: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-green-500 font-bold leading-tight" }, "Sign up fast, for free."),
                      createVNode("p", null, "In just a few minutes, you'll have a unique tracking code."),
                      createVNode("p", null, "Send your unique code to your referrals, once they purchase any item, you earn"),
                      createVNode(unref(Link), {
                        class: "btn btn-primary text-white w-full",
                        href: _ctx.route("affiliates.register")
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Create an account")
                        ]),
                        _: 1
                      }, 8, ["href"])
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Affiliates/Login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Login = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-be3d8f3e"]]);
export {
  Login as default
};
