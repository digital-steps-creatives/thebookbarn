import { Head, Link } from "@inertiajs/inertia-vue3";
import { resolveComponent, mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
const _sfc_main = {
  props: {
    links: Array
  },
  components: {
    Head,
    Link
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  _push(`<div${ssrRenderAttrs(mergeProps({
    style: $props.links.length > 3 ? null : { display: "none" }
  }, _attrs))}><div class="flex flex-wrap -mb-1"><!--[-->`);
  ssrRenderList($props.links, (link, key) => {
    _push(`<!--[-->`);
    if (link.url === null) {
      _push(`<div class="mr-1 mb-1 px-4 py-3 text-sm leading-4 text-gray-400 border rounded">${link.label}</div>`);
    } else {
      _push(ssrRenderComponent(_component_Link, {
        key,
        class: ["mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded hover:bg-primary-700 hover:text-white focus:border-indigo-500 focus:text-indigo-500 text-decoration-none", { "bg-primary text-white": link.active }],
        href: link.url
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>${link.label}</span>`);
          } else {
            return [
              createVNode("span", {
                innerHTML: link.label
              }, null, 8, ["innerHTML"])
            ];
          }
        }),
        _: 2
      }, _parent));
    }
    _push(`<!--]-->`);
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Pagination.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Pagination = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Pagination as P
};
