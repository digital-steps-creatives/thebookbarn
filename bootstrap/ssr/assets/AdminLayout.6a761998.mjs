import { useSSRContext, ref, resolveComponent, withCtx, createVNode, openBlock, createBlock, createCommentVNode, createTextVNode, toDisplayString, withModifiers } from "vue";
import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/inertia-vue3";
import { b as _sfc_main$2, c as _sfc_main$3 } from "./ResponsiveNavLink.cc3c0f4e.mjs";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderSlot, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
const _sfc_main$1 = {
  components: {
    Link
  },
  data() {
    return {};
  },
  methods: {}
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Sidebar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Sidebar = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  props: {
    title: String
  },
  components: {
    Sidebar,
    Link,
    Dropdown: _sfc_main$2,
    DropdownLink: _sfc_main$3
  },
  data() {
    return {
      showingNavigationDropdown: ref(false),
      openSidebar: false,
      currentmenu: false
    };
  },
  methods: {
    logout() {
      Inertia.post(route("logout"));
    },
    switchToTeam(team) {
      Inertia.put(route("current-team.update"), {
        team_id: team.id
      }, {
        preserveState: false
      });
    },
    toggleMenu() {
      this.openSidebar = true;
      this.$emit("checkSidebar", this.openSidebar);
    },
    closeMenu() {
      this.openSidebar = false;
      this.$emit("checkSidebar", this.openSidebar);
    }
  },
  computed: {
    isOpen() {
      if (this.openSidebar === true) {
        return "filament-sidebar-open translate-x-0 max-w-[20em] lg:max-w-[var(--sidebar-width)]' : '-translate-x-full lg:translate-x-0 lg:max-w-[var(--collapsed-sidebar-width)] rtl:lg:-translate-x-0 rtl:translate-x-full";
      }
    },
    hasSidebar() {
      if (this.openSidebar === true) {
        return "lg:pl-[var(--collapsed-sidebar-width)]";
      } else {
        return "lg:pl-[var(--sidebar-width)] filament-main-sidebar-open";
      }
    },
    currentMenu() {
      if (this.currentmenu === true) {
        return "bg-primary-500 text-white";
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Banner = resolveComponent("Banner");
  const _component_Link = resolveComponent("Link");
  const _component_Dropdown = resolveComponent("Dropdown");
  const _component_DropdownLink = resolveComponent("DropdownLink");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, { title: $props.title }, null, _parent));
  _push(ssrRenderComponent(_component_Banner, null, null, _parent));
  _push(`<div class="filament-app-layout flex w-full min-h-screen overflow-x-clip bg-gray-50"><aside class="${ssrRenderClass([$options.isOpen, "filament-sidebar fixed inset-y-0 left-0 rtl:left-auto rtl:right-0 z-20 flex flex-col h-screen overflow-hidden shadow-2xl transition-all bg-white lg:border-r rtl:lg:border-r-0 rtl:lg:border-l w-[var(--sidebar-width)] lg:z-0 filament-sidebar-open translate-x-0 max-w-[20em] lg:max-w-[var(--sidebar-width)]"])}"><header class="filament-sidebar-header border-b h-[4rem] shrink-0 flex items-center justify-center">`);
  if ($data.openSidebar === false) {
    _push(`<div class="flex items-center jusify-center px-6 w-full lg:px-4">`);
    _push(ssrRenderComponent(_component_Link, { class: "block w-full lg:ml-3 text-decoration-none" }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="filament-brand text-xl font-bold tracking-tight"${_scopeId}>The Book Barn</div>`);
        } else {
          return [
            createVNode("div", { class: "filament-brand text-xl font-bold tracking-tight" }, "The Book Barn")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`<button class="filament-sidebar-collapse-button shrink-0 hidden lg:flex items-center justify-center w-10 h-10 text-primary-500 rounded-full hover:bg-gray-500/5 focus:bg-primary-500/10 focus:outline-none"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"></path></svg></button></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.openSidebar === true) {
    _push(`<button class="filament-sidebar-close-button shrink-0 flex items-center justify-center w-10 h-10 text-primary-500 rounded-full hover:bg-gray-500/5 focus:bg-primary-500/10 focus:outline-none"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path></svg></button>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</header><nav class="flex-1 py-6 overflow-x-hidden overflow-y-auto filament-sidebar-nav"><ul class="px-6 space-y-6"><li class="${ssrRenderClass([{ "filament-sidebar-item-active": _ctx.route().current("admin.dashboard") }, "filament-sidebar-item"])}">`);
  _push(ssrRenderComponent(_component_Link, {
    href: _ctx.route("admin.dashboard"),
    class: [{ "bg-primary-500 text-white": _ctx.route().current("admin.dashboard") }, "text-decoration-none text-sm flex items-center justify-center gap-3 px-3 py-2 rounded-lg font-medium transition text-gray-600 hover:bg-gray-500/5 focus:bg-gray-500/5"]
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg class="h-5 w-5 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"${_scopeId}></path></svg>`);
        if ($data.openSidebar === false) {
          _push2(`<div class="flex flex-1"${_scopeId}><span${_scopeId}>Dashboard</span></div>`);
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          (openBlock(), createBlock("svg", {
            class: "h-5 w-5 shrink-0",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            "stroke-width": "2",
            stroke: "currentColor",
            "aria-hidden": "true"
          }, [
            createVNode("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            })
          ])),
          $data.openSidebar === false ? (openBlock(), createBlock("div", {
            key: 0,
            class: "flex flex-1"
          }, [
            createVNode("span", null, "Dashboard")
          ])) : createCommentVNode("", true)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="${ssrRenderClass([{ "filament-sidebar-item-active": _ctx.route().current("admin.customers") }, "filament-sidebar-item"])}">`);
  _push(ssrRenderComponent(_component_Link, {
    href: _ctx.route("admin.customers"),
    class: [{ "bg-primary-500 text-white": _ctx.route().current("admin.customers") }, "text-decoration-none text-sm flex items-center justify-center gap-3 px-3 py-2 rounded-lg font-medium transition text-gray-600 hover:bg-gray-500/5 focus:bg-gray-500/5"]
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 shrink-0"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"${_scopeId}></path></svg>`);
        if ($data.openSidebar === false) {
          _push2(`<div class="flex flex-1"${_scopeId}><span${_scopeId}>Manage Customers</span></div>`);
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          (openBlock(), createBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            "stroke-width": "1.5",
            stroke: "currentColor",
            class: "h-5 w-5 shrink-0"
          }, [
            createVNode("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              d: "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
            })
          ])),
          $data.openSidebar === false ? (openBlock(), createBlock("div", {
            key: 0,
            class: "flex flex-1"
          }, [
            createVNode("span", null, "Manage Customers")
          ])) : createCommentVNode("", true)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="${ssrRenderClass([{ "filament-sidebar-item-active": _ctx.route().current("admin.affiliates") }, "filament-sidebar-item"])}">`);
  _push(ssrRenderComponent(_component_Link, {
    href: _ctx.route("admin.affiliates"),
    class: [{ "bg-primary-500 text-white": _ctx.route().current("admin.affiliates") }, "text-decoration-none text-sm flex items-center justify-center gap-3 px-3 py-2 rounded-lg font-medium transition text-gray-600 hover:bg-gray-500/5 focus:bg-gray-500/5"]
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 shrink-0"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"${_scopeId}></path></svg>`);
        if ($data.openSidebar === false) {
          _push2(`<div class="flex flex-1"${_scopeId}><span${_scopeId}>Manage Affiliates</span></div>`);
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          (openBlock(), createBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            "stroke-width": "1.5",
            stroke: "currentColor",
            class: "h-5 w-5 shrink-0"
          }, [
            createVNode("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              d: "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
            })
          ])),
          $data.openSidebar === false ? (openBlock(), createBlock("div", {
            key: 0,
            class: "flex flex-1"
          }, [
            createVNode("span", null, "Manage Affiliates")
          ])) : createCommentVNode("", true)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="${ssrRenderClass([{ "filament-sidebar-item-active": _ctx.route().current("admin.manage.products") }, "filament-sidebar-item"])}">`);
  _push(ssrRenderComponent(_component_Link, {
    href: _ctx.route("admin.manage.products"),
    class: [{ "bg-primary-500 text-white": _ctx.route().current("admin.manage.products") }, "text-decoration-none text-sm flex items-center justify-center gap-3 px-3 py-2 rounded-lg font-medium transition text-gray-600 hover:bg-gray-500/5 focus:bg-gray-500/5"]
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 shrink-0"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"${_scopeId}></path></svg>`);
        if ($data.openSidebar === false) {
          _push2(`<div class="flex flex-1"${_scopeId}><span${_scopeId}>Manage Products</span></div>`);
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          (openBlock(), createBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            "stroke-width": "1.5",
            stroke: "currentColor",
            class: "h-5 w-5 shrink-0"
          }, [
            createVNode("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              d: "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
            })
          ])),
          $data.openSidebar === false ? (openBlock(), createBlock("div", {
            key: 0,
            class: "flex flex-1"
          }, [
            createVNode("span", null, "Manage Products")
          ])) : createCommentVNode("", true)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="${ssrRenderClass([{ "filament-sidebar-item-active": _ctx.route().current("admin.view.payment") }, "filament-sidebar-item"])}">`);
  _push(ssrRenderComponent(_component_Link, {
    href: _ctx.route("admin.view.payment"),
    class: [{ "bg-primary-500 text-white": _ctx.route().current("admin.view.payment") }, "text-decoration-none text-sm flex items-center justify-center gap-3 px-3 py-2 rounded-lg font-medium transition text-gray-600 hover:bg-gray-500/5 focus:bg-gray-500/5"]
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 shrink-0"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"${_scopeId}></path></svg>`);
        if ($data.openSidebar === false) {
          _push2(`<div class="flex flex-1"${_scopeId}><span${_scopeId}>Manage Payments</span></div>`);
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          (openBlock(), createBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            "stroke-width": "1.5",
            stroke: "currentColor",
            class: "h-5 w-5 shrink-0"
          }, [
            createVNode("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              d: "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
            })
          ])),
          $data.openSidebar === false ? (openBlock(), createBlock("div", {
            key: 0,
            class: "flex flex-1"
          }, [
            createVNode("span", null, "Manage Payments")
          ])) : createCommentVNode("", true)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></nav></aside><div class="${ssrRenderClass([$options.hasSidebar, "filament-main flex-col gap-y-6 w-screen flex-1 rtl:lg:pl-0 h-full transition-all"])}">`);
  if (_ctx.$slots.header) {
    _push(`<header class="filament-main-topbar sticky top-0 z-10 flex h-16 w-full shrink-0 items-center border-b bg-white"><div class="flex items-center w-full px-4 sm:px-6 md:px-6 lg:px-8"><div class="flex items-center justify-between flex-1"><div>`);
    ssrRenderSlot(_ctx.$slots, "header", {}, null, _push, _parent);
    _push(`</div>`);
    _push(ssrRenderComponent(_component_Dropdown, {
      align: "right",
      width: "48"
    }, {
      trigger: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          if (_ctx.$page.props.jetstream.managesProfilePhotos) {
            _push2(`<button class="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition"${_scopeId}><img class="h-8 w-8 rounded-full object-cover"${ssrRenderAttr("src", _ctx.$page.props.user.profile_photo_url)}${ssrRenderAttr("alt", _ctx.$page.props.user.name)}${_scopeId}></button>`);
          } else {
            _push2(`<span class="inline-flex rounded-md"${_scopeId}><button type="button" class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition"${_scopeId}>${ssrInterpolate(_ctx.$page.props.user.name)} <svg class="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"${_scopeId}><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"${_scopeId}></path></svg></button></span>`);
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
                class: "inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition"
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
          _push2(ssrRenderComponent(_component_DropdownLink, {
            href: _ctx.route("admin.profile")
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
          if (_ctx.$page.props.jetstream.hasApiFeatures) {
            _push2(ssrRenderComponent(_component_DropdownLink, {
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
          _push2(ssrRenderComponent(_component_DropdownLink, { as: "button" }, {
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
            createVNode(_component_DropdownLink, {
              href: _ctx.route("admin.profile")
            }, {
              default: withCtx(() => [
                createTextVNode(" Profile ")
              ]),
              _: 1
            }, 8, ["href"]),
            _ctx.$page.props.jetstream.hasApiFeatures ? (openBlock(), createBlock(_component_DropdownLink, {
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
              onSubmit: withModifiers($options.logout, ["prevent"])
            }, [
              createVNode(_component_DropdownLink, { as: "button" }, {
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
    _push(`</div></div></header>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<main><div class="container my-4"><div class="row justify-content-center"><div class="col-sm-9">`);
  if (_ctx.$page.props.flash.success) {
    _push(`<div class="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800" role="alert"><span class="font-medium">${ssrInterpolate(_ctx.$page.props.flash.success)}</span></div>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.$page.props.flash.error) {
    _push(`<div class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert"><span class="font-medium">${ssrInterpolate(_ctx.$page.props.flash.error)}</span></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></div>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/AdminLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AppLayout = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  AppLayout as A
};
