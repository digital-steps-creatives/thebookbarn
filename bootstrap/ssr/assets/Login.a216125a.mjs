import { ref, mergeProps, unref, useSSRContext, withCtx, createTextVNode, createVNode, withModifiers, openBlock, createBlock, toDisplayString, createCommentVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrInterpolate } from "vue/server-renderer";
import { Head, useForm, Link } from "@inertiajs/inertia-vue3";
import "@inertiajs/inertia";
import { _ as _sfc_main$2 } from "./ResponsiveNavLink.016ef96f.mjs";
import "./CartDropdown.b11f13c5.mjs";
import "./AuthenticationCardLogo.679e9e13.mjs";
import { _ as _sfc_main$6 } from "./Checkbox.75ff4498.mjs";
import { _ as _sfc_main$4, a as _sfc_main$5 } from "./TextInput.4df6fbdc.mjs";
import { _ as _sfc_main$3 } from "./InputLabel.4e8d4ed9.mjs";
import { _ as _sfc_main$7 } from "./PrimaryButton.1245566b.mjs";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
import "vuex";
const _sfc_main$1 = {
  __name: "AdminFrontLayout",
  __ssrInlineRender: true,
  props: {
    title: String
  },
  setup(__props) {
    ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gray-100" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(Head), { title: __props.title }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`<div class="min-h-screen justify-center flex items-center filament-login-page"><main class="px-6 -mt-16 md:mt-0 md:px-2 max-w-md space-y-8 w-screen">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/AdminFrontLayout.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Login_vue_vue_type_style_index_0_scoped_288602f5_lang = "";
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
      })).post(route("admin.post.login"), {
        onFinish: () => form.reset("password")
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Log in" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-v-288602f5${_scopeId}><form class="p-8 space-y-8 bg-white/50 backdrop-blur-xl border border-gray-200 shadow-2xl rounded-2xl relative filament-breezy-auth-card" data-v-288602f5${_scopeId}><div class="w-full flex justify-center" data-v-288602f5${_scopeId}><div class="filament-brand text-xl font-bold tracking-tight" data-v-288602f5${_scopeId}> The Book Barn </div></div>`);
            if (__props.status) {
              _push2(`<div class="my-4 font-medium text-sm text-green-600" data-v-288602f5${_scopeId}>${ssrInterpolate(__props.status)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div data-v-288602f5${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              for: "email",
              value: "Email"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              id: "email",
              modelValue: unref(form).email,
              "onUpdate:modelValue": ($event) => unref(form).email = $event,
              type: "email",
              class: "mt-1 block w-full",
              required: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$5, {
              class: "mt-2",
              message: unref(form).errors.email
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4" data-v-288602f5${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              for: "password",
              value: "Password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              id: "password",
              modelValue: unref(form).password,
              "onUpdate:modelValue": ($event) => unref(form).password = $event,
              type: "password",
              class: "mt-1 block w-full",
              required: "",
              autocomplete: "current-password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$5, {
              class: "mt-2",
              message: unref(form).errors.password
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center justify-between mt-4" data-v-288602f5${_scopeId}><label class="" data-v-288602f5${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$6, {
              checked: unref(form).remember_token,
              "onUpdate:checked": ($event) => unref(form).remember_token = $event,
              name: "remember"
            }, null, _parent2, _scopeId));
            _push2(`<span class="ml-2 text-sm text-gray-600" data-v-288602f5${_scopeId}>Remember me</span></label></div><div class="flex items-center mt-4" data-v-288602f5${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$7, {
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
            _push2(`</div><div class="flex items-center mt-4" data-v-288602f5${_scopeId}>`);
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
            _push2(`</div></form></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("form", {
                  onSubmit: withModifiers(submit, ["prevent"]),
                  class: "p-8 space-y-8 bg-white/50 backdrop-blur-xl border border-gray-200 shadow-2xl rounded-2xl relative filament-breezy-auth-card"
                }, [
                  createVNode("div", { class: "w-full flex justify-center" }, [
                    createVNode("div", { class: "filament-brand text-xl font-bold tracking-tight" }, " The Book Barn ")
                  ]),
                  __props.status ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "my-4 font-medium text-sm text-green-600"
                  }, toDisplayString(__props.status), 1)) : createCommentVNode("", true),
                  createVNode("div", null, [
                    createVNode(_sfc_main$3, {
                      for: "email",
                      value: "Email"
                    }),
                    createVNode(_sfc_main$4, {
                      id: "email",
                      modelValue: unref(form).email,
                      "onUpdate:modelValue": ($event) => unref(form).email = $event,
                      type: "email",
                      class: "mt-1 block w-full",
                      required: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_sfc_main$5, {
                      class: "mt-2",
                      message: unref(form).errors.email
                    }, null, 8, ["message"])
                  ]),
                  createVNode("div", { class: "mt-4" }, [
                    createVNode(_sfc_main$3, {
                      for: "password",
                      value: "Password"
                    }),
                    createVNode(_sfc_main$4, {
                      id: "password",
                      modelValue: unref(form).password,
                      "onUpdate:modelValue": ($event) => unref(form).password = $event,
                      type: "password",
                      class: "mt-1 block w-full",
                      required: "",
                      autocomplete: "current-password"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_sfc_main$5, {
                      class: "mt-2",
                      message: unref(form).errors.password
                    }, null, 8, ["message"])
                  ]),
                  createVNode("div", { class: "flex items-center justify-between mt-4" }, [
                    createVNode("label", { class: "" }, [
                      createVNode(_sfc_main$6, {
                        checked: unref(form).remember_token,
                        "onUpdate:checked": ($event) => unref(form).remember_token = $event,
                        name: "remember"
                      }, null, 8, ["checked", "onUpdate:checked"]),
                      createVNode("span", { class: "ml-2 text-sm text-gray-600" }, "Remember me")
                    ])
                  ]),
                  createVNode("div", { class: "flex items-center mt-4" }, [
                    createVNode(_sfc_main$7, {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Auth/Login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Login = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-288602f5"]]);
export {
  Login as default
};
