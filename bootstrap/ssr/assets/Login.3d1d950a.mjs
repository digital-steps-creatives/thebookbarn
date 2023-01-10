import { unref, withCtx, createTextVNode, createVNode, openBlock, createBlock, toDisplayString, createCommentVNode, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { useForm, Head, Link } from "@inertiajs/inertia-vue3";
import { _ as _sfc_main$1 } from "./FrontLayout.93c446e2.mjs";
import "./AuthenticationCardLogo.679e9e13.mjs";
import { _ as _sfc_main$5 } from "./Checkbox.75ff4498.mjs";
import { _ as _sfc_main$3, a as _sfc_main$4 } from "./TextInput.4df6fbdc.mjs";
import { _ as _sfc_main$2 } from "./InputLabel.4e8d4ed9.mjs";
import { _ as _sfc_main$6 } from "./PrimaryButton.1245566b.mjs";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
import "@inertiajs/inertia";
import "./ResponsiveNavLink.cc3c0f4e.mjs";
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
const Login_vue_vue_type_style_index_0_scoped_23d716b8_lang = "";
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
      })).post(route("signin.vendor"), {
        onFinish: () => form.reset("password")
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Log in" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="container my-5" data-v-23d716b8${_scopeId}><div class="row" data-v-23d716b8${_scopeId}><div class="col-sm-5" data-v-23d716b8${_scopeId}><div class="bg-white p-5 shadow rounded" data-v-23d716b8${_scopeId}><h4 class="text-red-600" data-v-23d716b8${_scopeId}>Welcome back <br data-v-23d716b8${_scopeId}>Login!</h4><hr data-v-23d716b8${_scopeId}>`);
            if (__props.status) {
              _push2(`<div class="mb-4 font-medium text-sm text-green-600" data-v-23d716b8${_scopeId}>${ssrInterpolate(__props.status)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<form data-v-23d716b8${_scopeId}><div data-v-23d716b8${_scopeId}>`);
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
              required: "",
              autofocus: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "mt-2",
              message: unref(form).errors.email
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4" data-v-23d716b8${_scopeId}>`);
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
            _push2(`</div><div class="flex items-center justify-between mt-4" data-v-23d716b8${_scopeId}><label class="" data-v-23d716b8${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$5, {
              checked: unref(form).remember_token,
              "onUpdate:checked": ($event) => unref(form).remember_token = $event,
              name: "remember"
            }, null, _parent2, _scopeId));
            _push2(`<span class="ml-2 text-sm text-gray-600" data-v-23d716b8${_scopeId}>Remember me</span></label>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("password.request"),
              class: "underline text-sm text-gray-600 hover:text-gray-900"
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
            _push2(`</div><div class="flex items-center justify-end mt-4" data-v-23d716b8${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("register.vendor"),
              class: "underline text-sm text-gray-600 hover:text-gray-900"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Don&#39;t have an account? `);
                } else {
                  return [
                    createTextVNode(" Don't have an account? ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$6, {
              class: ["ml-4", { "opacity-25": unref(form).processing }],
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Log in `);
                } else {
                  return [
                    createTextVNode(" Log in ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex justify-content-center" data-v-23d716b8${_scopeId}>`);
            if (__props.canResetPassword) {
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("register"),
                class: "underline text-sm text-gray-600 hover:text-gray-900"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Dont have an Account? Register `);
                  } else {
                    return [
                      createTextVNode(" Dont have an Account? Register ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></form></div></div><div class="col-sm-7" data-v-23d716b8${_scopeId}><img src="/images/illustration.svg" alt="" class="flex mx-auto" data-v-23d716b8${_scopeId}></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "container my-5" }, [
                createVNode("div", { class: "row" }, [
                  createVNode("div", { class: "col-sm-5" }, [
                    createVNode("div", { class: "bg-white p-5 shadow rounded" }, [
                      createVNode("h4", { class: "text-red-600" }, [
                        createTextVNode("Welcome back "),
                        createVNode("br"),
                        createTextVNode("Login!")
                      ]),
                      createVNode("hr"),
                      __props.status ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "mb-4 font-medium text-sm text-green-600"
                      }, toDisplayString(__props.status), 1)) : createCommentVNode("", true),
                      createVNode("form", {
                        onSubmit: withModifiers(submit, ["prevent"])
                      }, [
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
                            required: "",
                            autofocus: ""
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
                          ]),
                          createVNode(unref(Link), {
                            href: _ctx.route("password.request"),
                            class: "underline text-sm text-gray-600 hover:text-gray-900"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Forgot your password? ")
                            ]),
                            _: 1
                          }, 8, ["href"])
                        ]),
                        createVNode("div", { class: "flex items-center justify-end mt-4" }, [
                          createVNode(unref(Link), {
                            href: _ctx.route("register.vendor"),
                            class: "underline text-sm text-gray-600 hover:text-gray-900"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Don't have an account? ")
                            ]),
                            _: 1
                          }, 8, ["href"]),
                          createVNode(_sfc_main$6, {
                            class: ["ml-4", { "opacity-25": unref(form).processing }],
                            disabled: unref(form).processing
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Log in ")
                            ]),
                            _: 1
                          }, 8, ["class", "disabled"])
                        ]),
                        createVNode("div", { class: "flex justify-content-center" }, [
                          __props.canResetPassword ? (openBlock(), createBlock(unref(Link), {
                            key: 0,
                            href: _ctx.route("register"),
                            class: "underline text-sm text-gray-600 hover:text-gray-900"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Dont have an Account? Register ")
                            ]),
                            _: 1
                          }, 8, ["href"])) : createCommentVNode("", true)
                        ])
                      ], 40, ["onSubmit"])
                    ])
                  ]),
                  createVNode("div", { class: "col-sm-7" }, [
                    createVNode("img", {
                      src: "/images/illustration.svg",
                      alt: "",
                      class: "flex mx-auto"
                    })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Business/Auth/Login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Login = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-23d716b8"]]);
export {
  Login as default
};
