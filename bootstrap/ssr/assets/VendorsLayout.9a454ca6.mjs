import { resolveComponent, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList, withModifiers, useSSRContext } from "vue";
import { Inertia } from "@inertiajs/inertia";
import { Head, Link } from "@inertiajs/inertia-vue3";
import { A as ApplicationMark, _ as _sfc_main$1, b as _sfc_main$2, c as _sfc_main$3, a as _sfc_main$4, d as _sfc_main$5 } from "./ResponsiveNavLink.cc3c0f4e.mjs";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderStyle, ssrRenderClass, ssrRenderAttr, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
const _sfc_main = {
  props: {
    title: String
  },
  components: {
    Head,
    Link,
    ApplicationMark,
    Banner: _sfc_main$1,
    Dropdown: _sfc_main$2,
    DropdownLink: _sfc_main$3,
    NavLink: _sfc_main$4,
    ResponsiveNavLink: _sfc_main$5
  },
  data() {
    return {
      showingNavigationDropdown: false
    };
  },
  methods: {
    switchToTeam(team) {
      this.Inertia.put(route("current-team.update"), {
        team_id: team.id
      }, {
        preserveState: false
      });
    },
    clearAll() {
      Inertia.post(route("mark.read.all"));
    },
    logout() {
      Inertia.post(route("logout.vendor"));
    }
  },
  created() {
    Echo.private(`private-App.Models.BookShop.${this.$page.props.user.id}`).notification((notification) => {
      console.log(notification);
      switch (notification.type) {
        case "App\\Notifications\\NewOrderNotification":
          this.$page.props.unreadNotifications++;
          break;
      }
    });
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Banner = resolveComponent("Banner");
  const _component_Link = resolveComponent("Link");
  const _component_ApplicationMark = resolveComponent("ApplicationMark");
  const _component_NavLink = resolveComponent("NavLink");
  const _component_Dropdown = resolveComponent("Dropdown");
  const _component_DropdownLink = resolveComponent("DropdownLink");
  const _component_ResponsiveNavLink = resolveComponent("ResponsiveNavLink");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, { title: $props.title }, null, _parent));
  _push(ssrRenderComponent(_component_Banner, null, null, _parent));
  _push(`<div class="min-h-screen bg-gray-100"><nav class="bg-white border-b border-gray-100"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4"><div class="flex justify-between h-16"><div class="flex"><div class="shrink-0 flex items-center">`);
  _push(ssrRenderComponent(_component_Link, {
    href: _ctx.route("dashboard")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_ApplicationMark, {
          class: "block w-auto",
          style: { "height": "90px" }
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_ApplicationMark, {
            class: "block w-auto",
            style: { "height": "90px" }
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">`);
  _push(ssrRenderComponent(_component_NavLink, {
    href: _ctx.route("vendor.dashboard"),
    active: _ctx.route().current("vendor.dashboard"),
    class: "text-decoration-none"
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
  _push(ssrRenderComponent(_component_NavLink, {
    href: _ctx.route("orders.index"),
    active: _ctx.route().current("orders.index"),
    class: "text-decoration-none"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Orders `);
      } else {
        return [
          createTextVNode(" Orders ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="hidden sm:flex sm:items-center sm:ml-6"><div class="ml-3 relative">`);
  if (_ctx.$page.props.jetstream.hasTeamFeatures) {
    _push(ssrRenderComponent(_component_Dropdown, {
      align: "right",
      width: "60"
    }, {
      trigger: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<span class="inline-flex rounded-md"${_scopeId}><button type="button" class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50 transition"${_scopeId}>${ssrInterpolate(_ctx.$page.props.user.current_team.name)} <svg class="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"${_scopeId}><path fill-rule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"${_scopeId}></path></svg></button></span>`);
        } else {
          return [
            createVNode("span", { class: "inline-flex rounded-md" }, [
              createVNode("button", {
                type: "button",
                class: "inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50 transition"
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
            _push2(ssrRenderComponent(_component_DropdownLink, {
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
              _push2(ssrRenderComponent(_component_DropdownLink, {
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
              _push2(ssrRenderComponent(_component_DropdownLink, { as: "button" }, {
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
                createVNode(_component_DropdownLink, {
                  href: _ctx.route("teams.show", _ctx.$page.props.user.current_team)
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Team Settings ")
                  ]),
                  _: 1
                }, 8, ["href"]),
                _ctx.$page.props.jetstream.canCreateTeams ? (openBlock(), createBlock(_component_DropdownLink, {
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
                    onSubmit: withModifiers(($event) => $options.switchToTeam(team), ["prevent"])
                  }, [
                    createVNode(_component_DropdownLink, { as: "button" }, {
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
  _push(`</div><div class="ml-3 relative flex">`);
  _push(ssrRenderComponent(_component_Dropdown, { width: "80" }, {
    trigger: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<button class="ti-bell px-4 relative text-xl text-gray-800 rounded-full hover:text-primary-500 focus:outline-none focus:text-primary-600 transition duration-150 ease-in-out mt-2"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"${_scopeId}></path></svg>`);
        if (_ctx.$page.props.unreadNotifications) {
          _push2(`<span class="bg-primary text-white text-xs absolute w-5 h-5 rounded-full flex items-center justify-center border border-white" style="${ssrRenderStyle({ "top": "-10px", "right": "15px" })}"${_scopeId}>${ssrInterpolate(_ctx.$page.props.unreadNotifications)}</span>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</button>`);
      } else {
        return [
          createVNode("button", { class: "ti-bell px-4 relative text-xl text-gray-800 rounded-full hover:text-primary-500 focus:outline-none focus:text-primary-600 transition duration-150 ease-in-out mt-2" }, [
            (openBlock(), createBlock("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              "stroke-width": "1.5",
              stroke: "currentColor",
              class: "w-6 h-6"
            }, [
              createVNode("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
              })
            ])),
            _ctx.$page.props.unreadNotifications ? (openBlock(), createBlock("span", {
              key: 0,
              class: "bg-primary text-white text-xs absolute w-5 h-5 rounded-full flex items-center justify-center border border-white",
              style: { "top": "-10px", "right": "15px" }
            }, toDisplayString(_ctx.$page.props.unreadNotifications), 1)) : createCommentVNode("", true)
          ])
        ];
      }
    }),
    content: withCtx((_, _push2, _parent2, _scopeId) => {
      var _a, _b, _c, _d;
      if (_push2) {
        _push2(`<div class="md:w-64"${_scopeId}><div class="p-3 border-b"${_scopeId}><div class="flex items-center"${_scopeId}><span class="font-semibold text-sm mr-3"${_scopeId}> Notifications (${ssrInterpolate(_ctx.$page.props.unreadNotifications)}) </span>`);
        if ((_a = _ctx.$page.props.notifications) == null ? void 0 : _a.length) {
          _push2(`<span role="button" class="font-medium ml-auto text-sm text-primary-500 hover:underline hover:text-primary-600"${_scopeId}>Mark As Read</span>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div><div style="${ssrRenderStyle({ "max-height": "245px", "overflow": "auto" })}"${_scopeId}>`);
        if ((_b = _ctx.$page.props.notifications) == null ? void 0 : _b.length) {
          _push2(`<div${_scopeId}><!--[-->`);
          ssrRenderList(_ctx.$page.props.notifications, (notification) => {
            _push2(`<div role="button" class="${ssrRenderClass([{ "bg-gray-50": notification.read_at === null }, "border-b px-4 py-2 text-sm leading-5 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition"])}"${_scopeId}><div class=""${_scopeId}><p class="${ssrRenderClass([{
              "text-indigo-500": notification.data.type == "info",
              "text-green-500": notification.data.type == "success",
              "text-yellow-500": notification.data.type == "warning",
              "text-red-500": notification.data.type == "error",
              "font-semibold": notification.read_at === null
            }, "mb-1"])}"${_scopeId}>${ssrInterpolate(notification.data.title)}</p><p class="text-xs text-gray-700 truncate font-normal"${_scopeId}>${ssrInterpolate(notification.data.subtitle)}</p></div></div>`);
          });
          _push2(`<!--]--></div>`);
        } else {
          _push2(`<div${_scopeId}><div class="text-gray-500 text-center w-full py-3 border-b text-sm"${_scopeId}>No notifications found</div></div>`);
        }
        _push2(`</div><div class="p-2 text-center"${_scopeId}><a class="font-medium text-sm text-primary-500 hover:text-primary-600 hover:underline" href="javascript:void(0)"${_scopeId}>Clear All</a></div></div>`);
      } else {
        return [
          createVNode("div", { class: "md:w-64" }, [
            createVNode("div", { class: "p-3 border-b" }, [
              createVNode("div", { class: "flex items-center" }, [
                createVNode("span", { class: "font-semibold text-sm mr-3" }, " Notifications (" + toDisplayString(_ctx.$page.props.unreadNotifications) + ") ", 1),
                ((_c = _ctx.$page.props.notifications) == null ? void 0 : _c.length) ? (openBlock(), createBlock("span", {
                  key: 0,
                  role: "button",
                  onClick: $options.clearAll,
                  class: "font-medium ml-auto text-sm text-primary-500 hover:underline hover:text-primary-600"
                }, "Mark As Read", 8, ["onClick"])) : createCommentVNode("", true)
              ])
            ]),
            createVNode("div", { style: { "max-height": "245px", "overflow": "auto" } }, [
              ((_d = _ctx.$page.props.notifications) == null ? void 0 : _d.length) ? (openBlock(), createBlock("div", { key: 0 }, [
                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.$page.props.notifications, (notification) => {
                  return openBlock(), createBlock("div", {
                    role: "button",
                    class: ["border-b px-4 py-2 text-sm leading-5 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition", { "bg-gray-50": notification.read_at === null }],
                    onClick: ($event) => _ctx.handleClick(notification),
                    key: notification.id
                  }, [
                    createVNode("div", { class: "" }, [
                      createVNode("p", {
                        class: ["mb-1", {
                          "text-indigo-500": notification.data.type == "info",
                          "text-green-500": notification.data.type == "success",
                          "text-yellow-500": notification.data.type == "warning",
                          "text-red-500": notification.data.type == "error",
                          "font-semibold": notification.read_at === null
                        }]
                      }, toDisplayString(notification.data.title), 3),
                      createVNode("p", { class: "text-xs text-gray-700 truncate font-normal" }, toDisplayString(notification.data.subtitle), 1)
                    ])
                  ], 10, ["onClick"]);
                }), 128))
              ])) : (openBlock(), createBlock("div", { key: 1 }, [
                createVNode("div", { class: "text-gray-500 text-center w-full py-3 border-b text-sm" }, "No notifications found")
              ]))
            ]),
            createVNode("div", { class: "p-2 text-center" }, [
              createVNode("a", {
                class: "font-medium text-sm text-primary-500 hover:text-primary-600 hover:underline",
                href: "javascript:void(0)",
                onClick: withModifiers($options.clearAll, ["prevent"])
              }, "Clear All", 8, ["onClick"])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Dropdown, {
    align: "right",
    width: "48"
  }, {
    trigger: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if (_ctx.$page.props.jetstream.managesProfilePhotos) {
          _push2(`<button class="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition"${_scopeId}><img class="h-8 w-8 rounded-full object-cover"${ssrRenderAttr("src", _ctx.$page.props.user.profile_photo_url)}${ssrRenderAttr("alt", _ctx.$page.props.user.business_name)}${_scopeId}></button>`);
        } else {
          _push2(`<span class="inline-flex rounded-md"${_scopeId}><button type="button" class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition"${_scopeId}>${ssrInterpolate(_ctx.$page.props.user.business_name)} <svg class="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"${_scopeId}><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"${_scopeId}></path></svg></button></span>`);
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
              alt: _ctx.$page.props.user.business_name
            }, null, 8, ["src", "alt"])
          ])) : (openBlock(), createBlock("span", {
            key: 1,
            class: "inline-flex rounded-md"
          }, [
            createVNode("button", {
              type: "button",
              class: "inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition"
            }, [
              createTextVNode(toDisplayString(_ctx.$page.props.user.business_name) + " ", 1),
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
            href: _ctx.route("profile.show")
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
  _push(`</div></div><div class="-mr-2 flex items-center sm:hidden"><button class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition"><svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24"><path class="${ssrRenderClass({ "hidden": $data.showingNavigationDropdown, "inline-flex": !$data.showingNavigationDropdown })}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path><path class="${ssrRenderClass({ "hidden": !$data.showingNavigationDropdown, "inline-flex": $data.showingNavigationDropdown })}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div></div></div><div class="${ssrRenderClass([{ "block": $data.showingNavigationDropdown, "hidden": !$data.showingNavigationDropdown }, "sm:hidden"])}"><div class="pt-2 pb-3 space-y-1">`);
  _push(ssrRenderComponent(_component_ResponsiveNavLink, {
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
  _push(`</div><div class="pt-4 pb-1 border-t border-gray-200"><div class="flex items-center px-4">`);
  if (_ctx.$page.props.jetstream.managesProfilePhotos) {
    _push(`<div class="shrink-0 mr-3"><img class="h-10 w-10 rounded-full object-cover"${ssrRenderAttr("src", _ctx.$page.props.user.profile_photo_url)}${ssrRenderAttr("alt", _ctx.$page.props.user.name)}></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div><div class="font-medium text-base text-gray-800">${ssrInterpolate(_ctx.$page.props.user.name)}</div><div class="font-medium text-sm text-gray-500">${ssrInterpolate(_ctx.$page.props.user.email)}</div></div></div><div class="mt-3 space-y-1">`);
  _push(ssrRenderComponent(_component_ResponsiveNavLink, {
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
  if (_ctx.$page.props.jetstream.hasApiFeatures) {
    _push(ssrRenderComponent(_component_ResponsiveNavLink, {
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
  _push(ssrRenderComponent(_component_ResponsiveNavLink, { as: "button" }, {
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
    _push(ssrRenderComponent(_component_ResponsiveNavLink, {
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
      _push(ssrRenderComponent(_component_ResponsiveNavLink, {
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
      _push(ssrRenderComponent(_component_ResponsiveNavLink, { as: "button" }, {
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
  _push(`</div></div></div></nav>`);
  if (_ctx.$slots.header) {
    _push(`<header class="bg-white"><div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">`);
    ssrRenderSlot(_ctx.$slots, "header", {}, null, _push, _parent);
    _push(`</div></header>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<main class="max-w-7xl mx-auto px-4 lg:px-6">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/VendorsLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AppLayout = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  AppLayout as A
};
