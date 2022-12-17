import { mergeProps, withCtx, createVNode, unref, toDisplayString, openBlock, createBlock, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AppLayout.095c79de.mjs";
import "./ApplicationLogo.8c74c1d0.mjs";
import { ref } from "@vue/runtime-core";
import axios from "axios";
import { useForm } from "@inertiajs/inertia-vue3";
import { Table } from "@protonemedia/inertiajs-tables-laravel-query-builder";
import "@inertiajs/inertia";
import "./ResponsiveNavLink.cc3c0f4e.mjs";
import "./_plugin-vue_export-helper.43be4956.mjs";
const _sfc_main = {
  __name: "Dashboard",
  __ssrInlineRender: true,
  props: {
    refcodes: Object,
    greetings: String
  },
  setup(__props) {
    const generatedCode = ref(null);
    const generateCode = () => {
      spinner.value = true;
      axios.post(route("referral.code.create")).then((response) => {
        generatedCode.value = response.data.referral;
        window.location.reload();
        spinner.value = false;
      });
    };
    const spinner = ref(false);
    useForm({
      code: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({ title: "Dashboard" }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="font-semibold text-xl text-gray-800 leading-tight"${_scopeId}> Dashboard </h2>`);
          } else {
            return [
              createVNode("h2", { class: "font-semibold text-xl text-gray-800 leading-tight" }, " Dashboard ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-12"${_scopeId}><div class="max-w-7xl mx-auto sm:px-6 lg:px-4"${_scopeId}><div class="mb-5"${_scopeId}><div class="font-bold text-xl text-gray-800 leading-none mb-4"${_scopeId}>${ssrInterpolate(__props.greetings)}, ${ssrInterpolate(_ctx.$page.props.user.name)}</div><h2 class="font-normal text-2xl text-primary"${_scopeId}>Affiliate Program</h2><p${_scopeId}>Share your referral code to potential customers and earn a commission.</p></div><div class="overflow-hidden shadow-xl sm:rounded-lg mb-4"${_scopeId}><div class="bg-green-600 px-5 py-2 flex justify-between"${_scopeId}><div${_scopeId}><h4 class="text-white"${_scopeId}>Affiliate Stats</h4></div><div${_scopeId}><span class="text-white"${_scopeId}>(Updates after every 30 minutes)</span></div></div><div class="px-5 py-4 pb-5 bg-white"${_scopeId}><div class="grid grid-cols-4 gap-4"${_scopeId}><div class="p-4 bg-green-100 rounded-xl text-gray-800"${_scopeId}><div class="font-bold text-2xl leading-none"${_scopeId}>0</div><div class="mt-2"${_scopeId}>Referrals</div></div><div class="p-4 bg-green-100 rounded-xl text-gray-800"${_scopeId}><div class="font-bold text-2xl leading-none"${_scopeId}>${ssrInterpolate(__props.refcodes.data.length)}</div><div class="mt-2"${_scopeId}>Ref Codes Generate</div></div><div class="p-4 bg-green-100 rounded-xl text-gray-800"${_scopeId}><div class="font-bold text-2xl leading-none"${_scopeId}>0</div><div class="mt-2"${_scopeId}>Total Earnings</div></div><div class="p-4 bg-green-100 rounded-xl text-gray-800"${_scopeId}><div class="font-bold text-2xl leading-none"${_scopeId}>0</div><div class="mt-2"${_scopeId}>Paid Commissions</div></div></div></div></div><div class="overflow-hidden shadow-xl sm:rounded-lg"${_scopeId}><div class="bg-green-600 px-5 py-2 flex justify-between"${_scopeId}><h4 class="text-white mb-0"${_scopeId}>Referral Codes</h4><button type="submit" class="btn btn-primary block text-white"${_scopeId}>`);
            if (unref(spinner)) {
              _push2(`<div class="spinner-border spinner-border-sm text-light" role="status"${_scopeId}><span class="visually-hidden"${_scopeId}>Loading...</span></div>`);
            } else {
              _push2(`<span${_scopeId}>Generate ref code</span>`);
            }
            _push2(`</button></div><div class="px-5 py-4 pb-5 bg-white"${_scopeId}><div class="row"${_scopeId}><div class="col-sm-12" id="unstyle"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Table), {
              striped: true,
              "prevent-overlapping-requests": false,
              "input-debounce-ms": 1e3,
              "prevent-scroll": true,
              resource: __props.refcodes
            }, null, _parent2, _scopeId));
            _push2(`</div></div></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-12" }, [
                createVNode("div", { class: "max-w-7xl mx-auto sm:px-6 lg:px-4" }, [
                  createVNode("div", { class: "mb-5" }, [
                    createVNode("div", { class: "font-bold text-xl text-gray-800 leading-none mb-4" }, toDisplayString(__props.greetings) + ", " + toDisplayString(_ctx.$page.props.user.name), 1),
                    createVNode("h2", { class: "font-normal text-2xl text-primary" }, "Affiliate Program"),
                    createVNode("p", null, "Share your referral code to potential customers and earn a commission.")
                  ]),
                  createVNode("div", { class: "overflow-hidden shadow-xl sm:rounded-lg mb-4" }, [
                    createVNode("div", { class: "bg-green-600 px-5 py-2 flex justify-between" }, [
                      createVNode("div", null, [
                        createVNode("h4", { class: "text-white" }, "Affiliate Stats")
                      ]),
                      createVNode("div", null, [
                        createVNode("span", { class: "text-white" }, "(Updates after every 30 minutes)")
                      ])
                    ]),
                    createVNode("div", { class: "px-5 py-4 pb-5 bg-white" }, [
                      createVNode("div", { class: "grid grid-cols-4 gap-4" }, [
                        createVNode("div", { class: "p-4 bg-green-100 rounded-xl text-gray-800" }, [
                          createVNode("div", { class: "font-bold text-2xl leading-none" }, "0"),
                          createVNode("div", { class: "mt-2" }, "Referrals")
                        ]),
                        createVNode("div", { class: "p-4 bg-green-100 rounded-xl text-gray-800" }, [
                          createVNode("div", { class: "font-bold text-2xl leading-none" }, toDisplayString(__props.refcodes.data.length), 1),
                          createVNode("div", { class: "mt-2" }, "Ref Codes Generate")
                        ]),
                        createVNode("div", { class: "p-4 bg-green-100 rounded-xl text-gray-800" }, [
                          createVNode("div", { class: "font-bold text-2xl leading-none" }, "0"),
                          createVNode("div", { class: "mt-2" }, "Total Earnings")
                        ]),
                        createVNode("div", { class: "p-4 bg-green-100 rounded-xl text-gray-800" }, [
                          createVNode("div", { class: "font-bold text-2xl leading-none" }, "0"),
                          createVNode("div", { class: "mt-2" }, "Paid Commissions")
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "overflow-hidden shadow-xl sm:rounded-lg" }, [
                    createVNode("div", { class: "bg-green-600 px-5 py-2 flex justify-between" }, [
                      createVNode("h4", { class: "text-white mb-0" }, "Referral Codes"),
                      createVNode("button", {
                        type: "submit",
                        class: "btn btn-primary block text-white",
                        onClick: generateCode
                      }, [
                        unref(spinner) ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "spinner-border spinner-border-sm text-light",
                          role: "status"
                        }, [
                          createVNode("span", { class: "visually-hidden" }, "Loading...")
                        ])) : (openBlock(), createBlock("span", { key: 1 }, "Generate ref code"))
                      ])
                    ]),
                    createVNode("div", { class: "px-5 py-4 pb-5 bg-white" }, [
                      createVNode("div", { class: "row" }, [
                        createVNode("div", {
                          class: "col-sm-12",
                          id: "unstyle"
                        }, [
                          createVNode(unref(Table), {
                            striped: true,
                            "prevent-overlapping-requests": false,
                            "input-debounce-ms": 1e3,
                            "prevent-scroll": true,
                            resource: __props.refcodes
                          }, null, 8, ["resource"])
                        ])
                      ])
                    ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Affiliates/Dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
