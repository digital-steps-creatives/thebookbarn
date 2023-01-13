import { A as AppLayout } from "./AdminLayout.6a761998.mjs";
import { Link } from "@inertiajs/inertia-vue3";
import axios from "axios";
import { resolveComponent, mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
import "@inertiajs/inertia";
import "./ResponsiveNavLink.cc3c0f4e.mjs";
const _sfc_main = {
  data() {
    return {
      loader: false
    };
  },
  components: {
    AppLayout,
    Link
  },
  methods: {
    registerURL() {
      this.loader = true;
      axios.post(route("register.mpesa.urls")).then((response) => {
        if (response.data.status === 200) {
          Swal.fire({
            title: response.data.message,
            icon: "success",
            timer: 2e3,
            timerProgressBar: true,
            showConfirmButton: false
          });
        }
      });
      this.loader = false;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_AppLayout = resolveComponent("AppLayout");
  _push(ssrRenderComponent(_component_AppLayout, mergeProps({ title: "Payments" }, _attrs), {
    header: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h2 class="font-semibold text-xl text-gray-800 leading-tight"${_scopeId}> Payments </h2>`);
      } else {
        return [
          createVNode("h2", { class: "font-semibold text-xl text-gray-800 leading-tight" }, " Payments ")
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="py-12"${_scopeId}><div class="max-w-7xl mx-auto sm:px-6 lg:px-8"${_scopeId}><div class="row"${_scopeId}><div class="col-12"${_scopeId}><div class="bg-white pt-4 overflow-hidden shadow-xl sm:rounded-lg"${_scopeId}><div class="toolbar px-4 justify-end flex"${_scopeId}><button class="mb-2 btn btn-primary text-white"${_scopeId}>Register Mpesa URLs</button></div></div></div></div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "py-12" }, [
            createVNode("div", { class: "max-w-7xl mx-auto sm:px-6 lg:px-8" }, [
              createVNode("div", { class: "row" }, [
                createVNode("div", { class: "col-12" }, [
                  createVNode("div", { class: "bg-white pt-4 overflow-hidden shadow-xl sm:rounded-lg" }, [
                    createVNode("div", { class: "toolbar px-4 justify-end flex" }, [
                      createVNode("button", {
                        class: "mb-2 btn btn-primary text-white",
                        onClick: $options.registerURL
                      }, "Register Mpesa URLs", 8, ["onClick"])
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
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/AdminPayments.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AdminPayments = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  AdminPayments as default
};
