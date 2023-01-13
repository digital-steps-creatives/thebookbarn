import { unref, withCtx, createVNode, createTextVNode, withModifiers, withDirectives, vModelRadio, openBlock, createBlock, createCommentVNode, vModelCheckbox, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrIncludeBooleanAttr, ssrLooseEqual, ssrRenderAttr, ssrLooseContain } from "vue/server-renderer";
import { useForm, Head, Link } from "@inertiajs/inertia-vue3";
import { _ as _sfc_main$1 } from "./FrontLayout.290c8d19.mjs";
import "./AuthenticationCardLogo.679e9e13.mjs";
import { _ as _sfc_main$5 } from "./Checkbox.75ff4498.mjs";
import { _ as _sfc_main$3, a as _sfc_main$4 } from "./TextInput.4df6fbdc.mjs";
import { _ as _sfc_main$2 } from "./InputLabel.4e8d4ed9.mjs";
import { _ as _sfc_main$6 } from "./PrimaryButton.1245566b.mjs";
import { ref } from "@vue/runtime-core";
import "@inertiajs/inertia";
import "./ResponsiveNavLink.016ef96f.mjs";
import "./_plugin-vue_export-helper.43be4956.mjs";
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
const _sfc_main = {
  __name: "Register",
  __ssrInlineRender: true,
  setup(__props) {
    const form = useForm({
      name: "",
      contact_name: "",
      type: "",
      address: "",
      email: "",
      cellphone: "",
      password: "",
      password_confirmation: "",
      terms: false
    });
    const showModal = ref(false);
    const termsAgreed = ref(false);
    const submit = () => {
      form.post(route("signup.vendor"), {
        onFinish: () => form.reset("password", "password_confirmation")
      });
    };
    const acceptTerms = () => {
      termsAgreed.value = true;
      form.terms = true;
      showModal.value = false;
    };
    const rejectTerms = () => {
      termsAgreed.value = false;
      showModal.value = false;
      form.terms = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Register" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="container my-5"${_scopeId}><div class="row"${_scopeId}><div class="col-sm-5"${_scopeId}><div class="bg-white p-5 shadow rounded"${_scopeId}><h4 class="mb-3"${_scopeId}>Register an Account</h4><hr${_scopeId}><form${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "name",
              value: "Name of your Business"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              id: "name",
              modelValue: unref(form).name,
              "onUpdate:modelValue": ($event) => unref(form).name = $event,
              type: "text",
              class: "mt-1 block w-full",
              required: "",
              autofocus: "",
              autocomplete: "name"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "mt-2",
              message: unref(form).errors.name
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
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
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "contact_name",
              value: "Contact Person"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              id: "contact_name",
              modelValue: unref(form).contact_name,
              "onUpdate:modelValue": ($event) => unref(form).contact_name = $event,
              type: "text",
              class: "mt-1 block w-full",
              required: "",
              autofocus: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "mt-2",
              message: unref(form).errors.contact_name
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "cellphone",
              value: "Cellphonee Number"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              id: "cellphone",
              modelValue: unref(form).cellphone,
              "onUpdate:modelValue": ($event) => unref(form).cellphone = $event,
              type: "text",
              class: "mt-1 block w-full",
              required: "",
              autofocus: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "mt-2",
              message: unref(form).errors.cellphone
            }, null, _parent2, _scopeId));
            _push2(`<small${_scopeId}>we will be sending SMS notifications about Orders</small></div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "address",
              value: "Business Address"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              id: "address",
              modelValue: unref(form).address,
              "onUpdate:modelValue": ($event) => unref(form).address = $event,
              type: "text",
              class: "mt-1 block w-full",
              required: "",
              autofocus: "",
              autocomplete: "address"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "mt-2",
              message: unref(form).errors.address
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}><label for="" class="block font-medium text-sm text-gray-700 mb-2"${_scopeId}><span${_scopeId}>What is the Nature of your Business?</span></label><ul class="grid gap-6 w-full md:grid-cols-2" style="${ssrRenderStyle({ "padding-left": "0" })}"${_scopeId}><li${_scopeId}><input type="radio" id="business_nature-small" name="business_nature" value="limited"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(form).type, "limited")) ? " checked" : ""} class="hidden peer" required${_scopeId}><label for="business_nature-small" class="inline-flex justify-between items-center border-2 p-3 w-full text-gray-500 rounded-lg border-gray-200 cursor-pointer peer-checked:border-green-600 peer-checked:text-green-600 hover:text-gray-600 hover:bg-gray-200 ring-green-600"${_scopeId}><div class="block"${_scopeId}><div class="w-full text-sm font-semibold"${_scopeId}>LTD with directors</div><div class="w-full"${_scopeId}>Limited Company</div></div><svg aria-hidden="true" class="ml-3 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"${_scopeId}></path></svg></label></li><li${_scopeId}><input type="radio" id="business_nature-big" name="business_nature" value="sole"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(form).type, "sole")) ? " checked" : ""} class="hidden peer"${_scopeId}><label for="business_nature-big" class="inline-flex justify-between items-center border-2 p-3 w-full text-gray-500 rounded-lg border-gray-200 cursor-pointer peer-checked:border-green-600 peer-checked:text-green-600 hover:text-gray-600 hover:bg-gray-100"${_scopeId}><div class="block"${_scopeId}><div class="w-full text-sm font-semibold"${_scopeId}>Only one director</div><div class="w-full"${_scopeId}>Sole Proprietor</div></div><svg aria-hidden="true" class="ml-3 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"${_scopeId}></path></svg></label></li></ul><div class="flex items-center mb-4"${_scopeId}><input id="unregistered" type="radio" value="unregistered" name="business_nature" class="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"${_scopeId}><label for="unregistered" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"${_scopeId}>Not Registered</label></div></div><div class="mt-4"${_scopeId}>`);
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
              autocomplete: "new-password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "mt-2",
              message: unref(form).errors.password
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "password_confirmation",
              value: "Confirm Password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              id: "password_confirmation",
              modelValue: unref(form).password_confirmation,
              "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
              type: "password",
              class: "mt-1 block w-full",
              required: "",
              autocomplete: "new-password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "mt-2",
              message: unref(form).errors.password_confirmation
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            if (_ctx.$page.props.jetstream.hasTermsAndPrivacyPolicyFeature) {
              _push2(`<div class="mt-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$2, { for: "terms" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="flex items-center"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_sfc_main$5, {
                      id: "terms",
                      checked: unref(form).terms,
                      "onUpdate:checked": ($event) => unref(form).terms = $event,
                      name: "terms",
                      required: ""
                    }, null, _parent3, _scopeId2));
                    _push3(`<div class="ml-2"${_scopeId2}> I agree to the <a target="_blank"${ssrRenderAttr("href", _ctx.route("terms.show"))} class="underline text-sm text-gray-600 hover:text-gray-900"${_scopeId2}>Terms of Service</a> and <a target="_blank"${ssrRenderAttr("href", _ctx.route("policy.show"))} class="underline text-sm text-gray-600 hover:text-gray-900"${_scopeId2}>Privacy Policy</a></div></div>`);
                    _push3(ssrRenderComponent(_sfc_main$4, {
                      class: "mt-2",
                      message: unref(form).errors.terms
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode("div", { class: "flex items-center" }, [
                        createVNode(_sfc_main$5, {
                          id: "terms",
                          checked: unref(form).terms,
                          "onUpdate:checked": ($event) => unref(form).terms = $event,
                          name: "terms",
                          required: ""
                        }, null, 8, ["checked", "onUpdate:checked"]),
                        createVNode("div", { class: "ml-2" }, [
                          createTextVNode(" I agree to the "),
                          createVNode("a", {
                            target: "_blank",
                            href: _ctx.route("terms.show"),
                            class: "underline text-sm text-gray-600 hover:text-gray-900"
                          }, "Terms of Service", 8, ["href"]),
                          createTextVNode(" and "),
                          createVNode("a", {
                            target: "_blank",
                            href: _ctx.route("policy.show"),
                            class: "underline text-sm text-gray-600 hover:text-gray-900"
                          }, "Privacy Policy", 8, ["href"])
                        ])
                      ]),
                      createVNode(_sfc_main$4, {
                        class: "mt-2",
                        message: unref(form).errors.terms
                      }, null, 8, ["message"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="flex items-center mt-4"${_scopeId}><input id="termsconditions" type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(unref(form).terms) ? ssrLooseContain(unref(form).terms, null) : unref(form).terms) ? " checked" : ""} class="w-4 h-4 text-green-600 bg-gray-100 rounded border-gray-300 focus:ring-green-500 focus:ring-2 dark:bg-gray-700"${_scopeId}><label for="termsconditions" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"${_scopeId}>I agree to the <a href="#" class="text-green-600 hover:underline dark:text-green-500"${_scopeId}>terms and conditions</a>.</label></div><div class="flex items-center justify-end mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("login.vendor"),
              class: "underline text-sm text-gray-600 hover:text-gray-900"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Already have an account? `);
                } else {
                  return [
                    createTextVNode(" Already have an account? ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$6, {
              class: ["ml-4", { "opacity-25": unref(form).processing }],
              disabled: unref(form).processing || !unref(termsAgreed)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Register `);
                } else {
                  return [
                    createTextVNode(" Register ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form></div></div><div class="col-sm-7"${_scopeId}><img src="/images/illustration.svg" alt="" class="flex mx-auto"${_scopeId}></div></div><div class="container"${_scopeId}>`);
            if (unref(showModal)) {
              _push2(`<div id="defaultModal" tabindex="-1" class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full"${_scopeId}><div class="relative p-4 w-full max-w-2xl h-full md:h-auto mx-auto"${_scopeId}><div class="relative bg-white rounded-lg shadow dark:bg-gray-700"${_scopeId}><div class="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600"${_scopeId}><h3 class="text-xl font-semibold text-gray-900 dark:text-white"${_scopeId}> Terms of Service </h3><button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal"${_scopeId}><svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"${_scopeId}></path></svg><span class="sr-only"${_scopeId}>Close modal</span></button></div><div class="p-6 space-y-6"${_scopeId}><p class="text-base leading-relaxed text-gray-500 dark:text-gray-400"${_scopeId}> With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply. </p><p class="text-base leading-relaxed text-gray-500 dark:text-gray-400"${_scopeId}> The European Union\u2019s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them. </p></div><div class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600"${_scopeId}><button type="button" id="accept__terms" class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"${_scopeId}>I accept</button><button type="button" id="reject__terms" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-green-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"${_scopeId}>Decline</button></div></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            if (unref(showModal)) {
              _push2(`<div class="opacity-25 fixed inset-0 z-40 bg-black"${_scopeId}></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "container my-5" }, [
                createVNode("div", { class: "row" }, [
                  createVNode("div", { class: "col-sm-5" }, [
                    createVNode("div", { class: "bg-white p-5 shadow rounded" }, [
                      createVNode("h4", { class: "mb-3" }, "Register an Account"),
                      createVNode("hr"),
                      createVNode("form", {
                        onSubmit: withModifiers(submit, ["prevent"])
                      }, [
                        createVNode("div", null, [
                          createVNode(_sfc_main$2, {
                            for: "name",
                            value: "Name of your Business"
                          }),
                          createVNode(_sfc_main$3, {
                            id: "name",
                            modelValue: unref(form).name,
                            "onUpdate:modelValue": ($event) => unref(form).name = $event,
                            type: "text",
                            class: "mt-1 block w-full",
                            required: "",
                            autofocus: "",
                            autocomplete: "name"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_sfc_main$4, {
                            class: "mt-2",
                            message: unref(form).errors.name
                          }, null, 8, ["message"])
                        ]),
                        createVNode("div", { class: "mt-4" }, [
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
                            for: "contact_name",
                            value: "Contact Person"
                          }),
                          createVNode(_sfc_main$3, {
                            id: "contact_name",
                            modelValue: unref(form).contact_name,
                            "onUpdate:modelValue": ($event) => unref(form).contact_name = $event,
                            type: "text",
                            class: "mt-1 block w-full",
                            required: "",
                            autofocus: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_sfc_main$4, {
                            class: "mt-2",
                            message: unref(form).errors.contact_name
                          }, null, 8, ["message"])
                        ]),
                        createVNode("div", { class: "mt-4" }, [
                          createVNode(_sfc_main$2, {
                            for: "cellphone",
                            value: "Cellphonee Number"
                          }),
                          createVNode(_sfc_main$3, {
                            id: "cellphone",
                            modelValue: unref(form).cellphone,
                            "onUpdate:modelValue": ($event) => unref(form).cellphone = $event,
                            type: "text",
                            class: "mt-1 block w-full",
                            required: "",
                            autofocus: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_sfc_main$4, {
                            class: "mt-2",
                            message: unref(form).errors.cellphone
                          }, null, 8, ["message"]),
                          createVNode("small", null, "we will be sending SMS notifications about Orders")
                        ]),
                        createVNode("div", { class: "mt-4" }, [
                          createVNode(_sfc_main$2, {
                            for: "address",
                            value: "Business Address"
                          }),
                          createVNode(_sfc_main$3, {
                            id: "address",
                            modelValue: unref(form).address,
                            "onUpdate:modelValue": ($event) => unref(form).address = $event,
                            type: "text",
                            class: "mt-1 block w-full",
                            required: "",
                            autofocus: "",
                            autocomplete: "address"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_sfc_main$4, {
                            class: "mt-2",
                            message: unref(form).errors.address
                          }, null, 8, ["message"])
                        ]),
                        createVNode("div", { class: "mt-4" }, [
                          createVNode("label", {
                            for: "",
                            class: "block font-medium text-sm text-gray-700 mb-2"
                          }, [
                            createVNode("span", null, "What is the Nature of your Business?")
                          ]),
                          createVNode("ul", {
                            class: "grid gap-6 w-full md:grid-cols-2",
                            style: { "padding-left": "0" }
                          }, [
                            createVNode("li", null, [
                              withDirectives(createVNode("input", {
                                type: "radio",
                                id: "business_nature-small",
                                name: "business_nature",
                                value: "limited",
                                "onUpdate:modelValue": ($event) => unref(form).type = $event,
                                class: "hidden peer",
                                required: ""
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelRadio, unref(form).type]
                              ]),
                              createVNode("label", {
                                for: "business_nature-small",
                                class: "inline-flex justify-between items-center border-2 p-3 w-full text-gray-500 rounded-lg border-gray-200 cursor-pointer peer-checked:border-green-600 peer-checked:text-green-600 hover:text-gray-600 hover:bg-gray-200 ring-green-600"
                              }, [
                                createVNode("div", { class: "block" }, [
                                  createVNode("div", { class: "w-full text-sm font-semibold" }, "LTD with directors"),
                                  createVNode("div", { class: "w-full" }, "Limited Company")
                                ]),
                                (openBlock(), createBlock("svg", {
                                  "aria-hidden": "true",
                                  class: "ml-3 w-6 h-6",
                                  fill: "currentColor",
                                  viewBox: "0 0 20 20",
                                  xmlns: "http://www.w3.org/2000/svg"
                                }, [
                                  createVNode("path", {
                                    "fill-rule": "evenodd",
                                    d: "M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z",
                                    "clip-rule": "evenodd"
                                  })
                                ]))
                              ])
                            ]),
                            createVNode("li", null, [
                              withDirectives(createVNode("input", {
                                type: "radio",
                                id: "business_nature-big",
                                name: "business_nature",
                                value: "sole",
                                "onUpdate:modelValue": ($event) => unref(form).type = $event,
                                class: "hidden peer"
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelRadio, unref(form).type]
                              ]),
                              createVNode("label", {
                                for: "business_nature-big",
                                class: "inline-flex justify-between items-center border-2 p-3 w-full text-gray-500 rounded-lg border-gray-200 cursor-pointer peer-checked:border-green-600 peer-checked:text-green-600 hover:text-gray-600 hover:bg-gray-100"
                              }, [
                                createVNode("div", { class: "block" }, [
                                  createVNode("div", { class: "w-full text-sm font-semibold" }, "Only one director"),
                                  createVNode("div", { class: "w-full" }, "Sole Proprietor")
                                ]),
                                (openBlock(), createBlock("svg", {
                                  "aria-hidden": "true",
                                  class: "ml-3 w-6 h-6",
                                  fill: "currentColor",
                                  viewBox: "0 0 20 20",
                                  xmlns: "http://www.w3.org/2000/svg"
                                }, [
                                  createVNode("path", {
                                    "fill-rule": "evenodd",
                                    d: "M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z",
                                    "clip-rule": "evenodd"
                                  })
                                ]))
                              ])
                            ])
                          ]),
                          createVNode("div", { class: "flex items-center mb-4" }, [
                            createVNode("input", {
                              id: "unregistered",
                              type: "radio",
                              value: "unregistered",
                              name: "business_nature",
                              class: "w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            }),
                            createVNode("label", {
                              for: "unregistered",
                              class: "ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            }, "Not Registered")
                          ])
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
                            autocomplete: "new-password"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_sfc_main$4, {
                            class: "mt-2",
                            message: unref(form).errors.password
                          }, null, 8, ["message"])
                        ]),
                        createVNode("div", { class: "mt-4" }, [
                          createVNode(_sfc_main$2, {
                            for: "password_confirmation",
                            value: "Confirm Password"
                          }),
                          createVNode(_sfc_main$3, {
                            id: "password_confirmation",
                            modelValue: unref(form).password_confirmation,
                            "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
                            type: "password",
                            class: "mt-1 block w-full",
                            required: "",
                            autocomplete: "new-password"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_sfc_main$4, {
                            class: "mt-2",
                            message: unref(form).errors.password_confirmation
                          }, null, 8, ["message"])
                        ]),
                        _ctx.$page.props.jetstream.hasTermsAndPrivacyPolicyFeature ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "mt-4"
                        }, [
                          createVNode(_sfc_main$2, { for: "terms" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex items-center" }, [
                                createVNode(_sfc_main$5, {
                                  id: "terms",
                                  checked: unref(form).terms,
                                  "onUpdate:checked": ($event) => unref(form).terms = $event,
                                  name: "terms",
                                  required: ""
                                }, null, 8, ["checked", "onUpdate:checked"]),
                                createVNode("div", { class: "ml-2" }, [
                                  createTextVNode(" I agree to the "),
                                  createVNode("a", {
                                    target: "_blank",
                                    href: _ctx.route("terms.show"),
                                    class: "underline text-sm text-gray-600 hover:text-gray-900"
                                  }, "Terms of Service", 8, ["href"]),
                                  createTextVNode(" and "),
                                  createVNode("a", {
                                    target: "_blank",
                                    href: _ctx.route("policy.show"),
                                    class: "underline text-sm text-gray-600 hover:text-gray-900"
                                  }, "Privacy Policy", 8, ["href"])
                                ])
                              ]),
                              createVNode(_sfc_main$4, {
                                class: "mt-2",
                                message: unref(form).errors.terms
                              }, null, 8, ["message"])
                            ]),
                            _: 1
                          })
                        ])) : createCommentVNode("", true),
                        createVNode("div", { class: "flex items-center mt-4" }, [
                          withDirectives(createVNode("input", {
                            id: "termsconditions",
                            type: "checkbox",
                            "onUpdate:modelValue": ($event) => unref(form).terms = $event,
                            onChange: ($event) => showModal.value = true,
                            class: "w-4 h-4 text-green-600 bg-gray-100 rounded border-gray-300 focus:ring-green-500 focus:ring-2 dark:bg-gray-700"
                          }, null, 40, ["onUpdate:modelValue", "onChange"]), [
                            [vModelCheckbox, unref(form).terms]
                          ]),
                          createVNode("label", {
                            for: "termsconditions",
                            class: "ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          }, [
                            createTextVNode("I agree to the "),
                            createVNode("a", {
                              href: "#",
                              class: "text-green-600 hover:underline dark:text-green-500"
                            }, "terms and conditions"),
                            createTextVNode(".")
                          ])
                        ]),
                        createVNode("div", { class: "flex items-center justify-end mt-4" }, [
                          createVNode(unref(Link), {
                            href: _ctx.route("login.vendor"),
                            class: "underline text-sm text-gray-600 hover:text-gray-900"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Already have an account? ")
                            ]),
                            _: 1
                          }, 8, ["href"]),
                          createVNode(_sfc_main$6, {
                            class: ["ml-4", { "opacity-25": unref(form).processing }],
                            disabled: unref(form).processing || !unref(termsAgreed)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Register ")
                            ]),
                            _: 1
                          }, 8, ["class", "disabled"])
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
                ]),
                createVNode("div", { class: "container" }, [
                  unref(showModal) ? (openBlock(), createBlock("div", {
                    key: 0,
                    id: "defaultModal",
                    tabindex: "-1",
                    class: "overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full"
                  }, [
                    createVNode("div", { class: "relative p-4 w-full max-w-2xl h-full md:h-auto mx-auto" }, [
                      createVNode("div", { class: "relative bg-white rounded-lg shadow dark:bg-gray-700" }, [
                        createVNode("div", { class: "flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600" }, [
                          createVNode("h3", { class: "text-xl font-semibold text-gray-900 dark:text-white" }, " Terms of Service "),
                          createVNode("button", {
                            type: "button",
                            class: "text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white",
                            "data-modal-toggle": "defaultModal"
                          }, [
                            (openBlock(), createBlock("svg", {
                              "aria-hidden": "true",
                              class: "w-5 h-5",
                              fill: "currentColor",
                              viewBox: "0 0 20 20",
                              xmlns: "http://www.w3.org/2000/svg"
                            }, [
                              createVNode("path", {
                                "fill-rule": "evenodd",
                                d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
                                "clip-rule": "evenodd"
                              })
                            ])),
                            createVNode("span", { class: "sr-only" }, "Close modal")
                          ])
                        ]),
                        createVNode("div", { class: "p-6 space-y-6" }, [
                          createVNode("p", { class: "text-base leading-relaxed text-gray-500 dark:text-gray-400" }, " With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply. "),
                          createVNode("p", { class: "text-base leading-relaxed text-gray-500 dark:text-gray-400" }, " The European Union\u2019s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them. ")
                        ]),
                        createVNode("div", { class: "flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600" }, [
                          createVNode("button", {
                            onClick: acceptTerms,
                            type: "button",
                            id: "accept__terms",
                            class: "text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                          }, "I accept"),
                          createVNode("button", {
                            onClick: rejectTerms,
                            type: "button",
                            id: "reject__terms",
                            class: "text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-green-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                          }, "Decline")
                        ])
                      ])
                    ])
                  ])) : createCommentVNode("", true)
                ]),
                unref(showModal) ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "opacity-25 fixed inset-0 z-40 bg-black"
                })) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Business/Auth/Register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
