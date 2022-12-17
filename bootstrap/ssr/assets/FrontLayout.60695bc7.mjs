import { useSSRContext, mergeProps, ref, unref, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList, withModifiers } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrRenderList, ssrInterpolate, ssrRenderComponent, ssrRenderClass, ssrRenderSlot } from "vue/server-renderer";
import { Inertia } from "@inertiajs/inertia";
import { Head, Link } from "@inertiajs/inertia-vue3";
import { _ as _sfc_main$2, A as ApplicationMark, b as _sfc_main$3, c as _sfc_main$4, d as _sfc_main$5 } from "./ResponsiveNavLink.cc3c0f4e.mjs";
import { C as CartDropdown, _ as _sfc_main$6 } from "./CartDropdown.79450e68.mjs";
import { s as store } from "../app.mjs";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
import axios$1 from "axios";
import Cookies from "js-cookie";
const _sfc_main$1 = {
  data() {
    return {
      query: null,
      results: []
    };
  },
  watch: {
    query(after, before) {
      this.searchProducts();
    }
  },
  methods: {
    searchProducts() {
      axios.get(route("products.search"), { params: { query: this.query } }).then((response) => this.results = response.data).catch((error) => {
      });
    },
    addToCart(bookItem) {
      store.dispatch("cart/addToCart", bookItem);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}><input${ssrRenderAttr("value", $data.query)} type="text" id="email-address-icon" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-3 py-3" placeholder="search over 100s products"><button type="submit" class="absolute right-0 top-0 mt-3 mr-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-green-600"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path></svg></button>`);
  if ($data.results.length > 0 && $data.query) {
    _push(`<ul class="absolute bg-gray-100 p-4 w-full rounded-r-lg rounded-l-lg" style="${ssrRenderStyle({ "z-index": "100", "height": "350px", "overflow-y": "scroll", "padding-bottom": "2rem" })}"><!--[-->`);
    ssrRenderList($data.results.slice(0, 10), (result) => {
      _push(`<li class="border-b mb-2 pb-2"><a${ssrRenderAttr("href", result.url)} class="flex justify-between text-decoration-none"><img${ssrRenderAttr("src", result.searchable.featured_image)}${ssrRenderAttr("alt", result.title)} class="w-14 rounded mr-4"><div class="text-green-700 font-normal text-sm text-left text-decoration-none mt-2">${ssrInterpolate(result.title)}</div><button class="text-white bg-green-600 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-300 font-normal rounded-lg text-sm px-3 py-1 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-2 -ml-1 w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path></svg><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"></path></svg></button></a></li>`);
    });
    _push(`<!--]--></ul>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/MySearch.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Search = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "FrontLayout",
  __ssrInlineRender: true,
  props: {
    title: String
  },
  setup(__props) {
    const via = new URL(location.href).searchParams.get("via");
    if (via) {
      axios$1.post(`/affiliate/${encodeURIcomponent(this.via)}`).then((response) => {
        Cookies.set("bookbarn_affiliate", response.data, { expires: 30, domain: ".bookbarn.school", secure: true, sameSite: "lax" });
      }).catch((error) => {
        if (!error.response || error.response.status !== 404)
          return console.log("Something went wrong");
        console.log("Affiliate does not exist. Register for our referral program here: https://bookbarn.school/affiliate");
      });
    }
    const showingNavigationDropdown = ref(false);
    const switchToTeam = (team) => {
      Inertia.put(route("current-team.update"), {
        team_id: team.id
      }, {
        preserveState: false
      });
    };
    const logout = () => {
      Inertia.post(route("logout"));
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(unref(Head), { title: __props.title }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`<div class="min-h-screen bg-gray-100"><nav class="bg-white border-b border-gray-100 py-3"><div class="container"><div class="row"><div class="col-sm-3 col-6"><div class="shrink-0 flex items-center mr-8">`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/",
        class: "logo"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(ApplicationMark, {
              class: "block w-auto",
              style: { "height": "90px" }
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(ApplicationMark, {
                class: "block w-auto",
                style: { "height": "90px" }
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="col-sm-6 hidden sm:block"><div class="relative mt-4 hidden sm:block">`);
      _push(ssrRenderComponent(Search, null, null, _parent));
      _push(`</div></div><div class="col-sm-3 col-4"><div class="flex justify-between"><div class="sm:mt-4 mt-4 relative"><div class="flex justify-between">`);
      _push(ssrRenderComponent(CartDropdown, { class: "sm:py-3 sm:pt-0" }, null, _parent));
      _push(`<div class="sm:py-3 sm:pt-0">`);
      if (!_ctx.$page.props.user) {
        _push(ssrRenderComponent(unref(Link), {
          class: "mr-2 flex text-decoration-none sm:my-3",
          href: _ctx.route("login")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="text-green-500 hover:text-red-500"${_scopeId}>Log In</span>`);
            } else {
              return [
                createVNode("span", { class: "text-green-500 hover:text-red-500" }, "Log In")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      if (_ctx.$page.props.jetstream.hasTeamFeatures) {
        _push(ssrRenderComponent(_sfc_main$3, {
          align: "right",
          width: "60"
        }, {
          trigger: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="inline-flex rounded-md"${_scopeId}><button type="button" class="inline-flex items-center px-3 py-3 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50 transition"${_scopeId}>${ssrInterpolate(_ctx.$page.props.user.current_team.name)} <svg class="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"${_scopeId}><path fill-rule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"${_scopeId}></path></svg></button></span>`);
            } else {
              return [
                createVNode("span", { class: "inline-flex rounded-md" }, [
                  createVNode("button", {
                    type: "button",
                    class: "inline-flex items-center px-3 py-3 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50 transition"
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
                _push2(ssrRenderComponent(_sfc_main$4, {
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
                  _push2(ssrRenderComponent(_sfc_main$4, {
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
                  _push2(ssrRenderComponent(_sfc_main$4, { as: "button" }, {
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
                    createVNode(_sfc_main$4, {
                      href: _ctx.route("teams.show", _ctx.$page.props.user.current_team)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Team Settings ")
                      ]),
                      _: 1
                    }, 8, ["href"]),
                    _ctx.$page.props.jetstream.canCreateTeams ? (openBlock(), createBlock(_sfc_main$4, {
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
                        onSubmit: withModifiers(($event) => switchToTeam(team), ["prevent"])
                      }, [
                        createVNode(_sfc_main$4, { as: "button" }, {
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
      _push(`</div>`);
      if (_ctx.$page.props.user) {
        _push(`<div class="ml-3 mt-4 relative hidden sm:block">`);
        _push(ssrRenderComponent(_sfc_main$3, {
          align: "right",
          width: "48"
        }, {
          trigger: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (_ctx.$page.props.jetstream.managesProfilePhotos) {
                _push2(`<button class="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition"${_scopeId}><img class="h-8 w-8 rounded-full object-cover"${ssrRenderAttr("src", _ctx.$page.props.user.profile_photo_url)}${ssrRenderAttr("alt", _ctx.$page.props.user.name)}${_scopeId}></button>`);
              } else {
                _push2(`<span class="inline-flex rounded-md"${_scopeId}><button type="button" class="inline-flex items-center px-3 py-2 sm:py-3-6 border-0 border-transparent text-md leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition"${_scopeId}>${ssrInterpolate(_ctx.$page.props.user.name)} <svg class="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"${_scopeId}><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"${_scopeId}></path></svg></button></span>`);
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
                    class: "inline-flex items-center px-3 py-2 sm:py-3-6 border-0 border-transparent text-md leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition"
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
              _push2(ssrRenderComponent(_sfc_main$4, {
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
              if (!_ctx.$page.props.user.role === "teacher" || !_ctx.$page.props.user.role === "other") {
                _push2(ssrRenderComponent(_sfc_main$4, {
                  href: _ctx.route("myorders")
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` My Orders `);
                    } else {
                      return [
                        createTextVNode(" My Orders ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (_ctx.$page.props.user.role === "teacher" || _ctx.$page.props.user.role === "other") {
                _push2(ssrRenderComponent(_sfc_main$4, {
                  href: _ctx.route("affiliates.dashboard")
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` My Dashboard `);
                    } else {
                      return [
                        createTextVNode(" My Dashboard ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (_ctx.$page.props.jetstream.hasApiFeatures) {
                _push2(ssrRenderComponent(_sfc_main$4, {
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
              _push2(ssrRenderComponent(_sfc_main$4, { as: "button" }, {
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
                createVNode(_sfc_main$4, {
                  href: _ctx.route("profile.show")
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Profile ")
                  ]),
                  _: 1
                }, 8, ["href"]),
                !_ctx.$page.props.user.role === "teacher" || !_ctx.$page.props.user.role === "other" ? (openBlock(), createBlock(_sfc_main$4, {
                  key: 0,
                  href: _ctx.route("myorders")
                }, {
                  default: withCtx(() => [
                    createTextVNode(" My Orders ")
                  ]),
                  _: 1
                }, 8, ["href"])) : createCommentVNode("", true),
                _ctx.$page.props.user.role === "teacher" || _ctx.$page.props.user.role === "other" ? (openBlock(), createBlock(_sfc_main$4, {
                  key: 1,
                  href: _ctx.route("affiliates.dashboard")
                }, {
                  default: withCtx(() => [
                    createTextVNode(" My Dashboard ")
                  ]),
                  _: 1
                }, 8, ["href"])) : createCommentVNode("", true),
                _ctx.$page.props.jetstream.hasApiFeatures ? (openBlock(), createBlock(_sfc_main$4, {
                  key: 2,
                  href: _ctx.route("api-tokens.index")
                }, {
                  default: withCtx(() => [
                    createTextVNode(" API Tokens ")
                  ]),
                  _: 1
                }, 8, ["href"])) : createCommentVNode("", true),
                createVNode("div", { class: "border-t border-gray-100" }),
                createVNode("form", {
                  onSubmit: withModifiers(logout, ["prevent"])
                }, [
                  createVNode(_sfc_main$4, { as: "button" }, {
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
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="col-2"><div class="flex items-center sm:hidden"><button class="inline-flex items-center border rounded-lg mt-3 justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition"><svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24"><path class="${ssrRenderClass({ "hidden": showingNavigationDropdown.value, "inline-flex": !showingNavigationDropdown.value })}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path><path class="${ssrRenderClass({ "hidden": !showingNavigationDropdown.value, "inline-flex": showingNavigationDropdown.value })}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div></div></div></div><div class="${ssrRenderClass([{ "block": showingNavigationDropdown.value, "hidden": !showingNavigationDropdown.value }, "sm:hidden"])}"><div class="pt-2 pb-3 space-y-1">`);
      _push(ssrRenderComponent(_sfc_main$5, {
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
      _push(`</div>`);
      if (_ctx.$page.props.user) {
        _push(`<div class="pt-4 pb-1 border-t border-gray-200"><div class="flex items-center px-4">`);
        if (_ctx.$page.props.jetstream.managesProfilePhotos) {
          _push(`<div class="shrink-0 mr-3"><img class="h-10 w-10 rounded-full object-cover"${ssrRenderAttr("src", _ctx.$page.props.user.profile_photo_url)}${ssrRenderAttr("alt", _ctx.$page.props.user.name)}></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div><div class="font-medium text-base text-gray-800">${ssrInterpolate(_ctx.$page.props.user.name)}</div><div class="font-medium text-sm text-gray-500">${ssrInterpolate(_ctx.$page.props.user.email)}</div></div></div><div class="mt-3 space-y-1">`);
        _push(ssrRenderComponent(_sfc_main$5, {
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
        if (!_ctx.$page.props.user.role === "teacher" || !_ctx.$page.props.user.role === "other") {
          _push(ssrRenderComponent(_sfc_main$5, {
            href: _ctx.route("myorders")
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` My Orders `);
              } else {
                return [
                  createTextVNode(" My Orders ")
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        if (_ctx.$page.props.jetstream.hasApiFeatures) {
          _push(ssrRenderComponent(_sfc_main$5, {
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
        _push(ssrRenderComponent(_sfc_main$5, { as: "button" }, {
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
          _push(ssrRenderComponent(_sfc_main$5, {
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
            _push(ssrRenderComponent(_sfc_main$5, {
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
            _push(ssrRenderComponent(_sfc_main$5, { as: "button" }, {
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
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></nav>`);
      if (_ctx.$slots.header) {
        _push(`<header class="bg-white shadow"><div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">`);
        ssrRenderSlot(_ctx.$slots, "header", {}, null, _push, _parent);
        _push(`</div></header>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<main>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(_sfc_main$6, null, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/FrontLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
