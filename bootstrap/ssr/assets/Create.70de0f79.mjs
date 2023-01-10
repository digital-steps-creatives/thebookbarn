import { resolveComponent, mergeProps, withCtx, unref, createTextVNode, createVNode, withModifiers, withDirectives, vModelRadio, openBlock, createBlock, Fragment, renderList, toDisplayString, vModelSelect, createCommentVNode, vModelCheckbox, vShow, useSSRContext } from "vue";
import { ssrRenderComponent, ssrIncludeBooleanAttr, ssrLooseEqual, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrLooseContain, ssrRenderStyle } from "vue/server-renderer";
import { A as AppLayout } from "./AdminLayout.32c77a6f.mjs";
import "./ApplicationLogo.8c74c1d0.mjs";
import "./Checkbox.75ff4498.mjs";
import { a as _sfc_main$1 } from "./TextInput.4df6fbdc.mjs";
import { _ as _sfc_main$2 } from "./InputLabel.4e8d4ed9.mjs";
import { _ as _sfc_main$4 } from "./PrimaryButton.1245566b.mjs";
import { _ as _sfc_main$3 } from "./SecondaryButton.1e2440a9.mjs";
import { useForm, Link } from "@inertiajs/inertia-vue3";
import "@protonemedia/inertiajs-tables-laravel-query-builder";
import { ref } from "@vue/runtime-core";
import "@inertiajs/inertia";
import "./ResponsiveNavLink.cc3c0f4e.mjs";
import "./_plugin-vue_export-helper.43be4956.mjs";
const _sfc_main = {
  __name: "Create",
  __ssrInlineRender: true,
  props: {
    classes: Object,
    subjects: Object
  },
  setup(__props) {
    const photoInput = ref(null);
    const photoPreview = ref(null);
    const form = useForm({
      name: null,
      subject_id: null,
      class_level_id: null,
      product_type: null,
      featured_image: "/images/dummy_product.png",
      availability: null,
      category: null,
      status: null,
      _method: "POST"
    });
    const updatePhotoPreview = () => {
      const photo = photoInput.value.files[0];
      if (!photo)
        return;
      const reader = new FileReader();
      reader.onload = (e) => {
        photoPreview.value = e.target.result;
      };
      reader.readAsDataURL(photo);
    };
    const selectNewPhoto = () => {
      photoInput.value.click();
    };
    const createProduct = () => {
      if (photoInput.value) {
        form.featured_image = photoInput.value.files[0];
      }
      form.post(route("admin.product.create"), {
        errorBag: "createProroduct",
        preserveScroll: true,
        onSuccess: () => clearPhotoFileInput()
      });
    };
    const clearPhotoFileInput = () => {
      var _a;
      if ((_a = photoInput.value) == null ? void 0 : _a.value) {
        photoInput.value.value = null;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FormKit = resolveComponent("FormKit");
      _push(ssrRenderComponent(AppLayout, mergeProps({ title: "Manage / Products/ Add a Product" }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="font-semibold text-xl text-gray-800 leading-tight"${_scopeId}> Manage / Products/ Add a Product <br${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("admin.manage.products"),
              class: "text-secondary-600 text-decoration-none text-sm"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Back to Products`);
                } else {
                  return [
                    createTextVNode("Back to Products")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</h2>`);
          } else {
            return [
              createVNode("h2", { class: "font-semibold text-xl text-gray-800 leading-tight" }, [
                createTextVNode(" Manage / Products/ Add a Product "),
                createVNode("br"),
                createVNode(unref(Link), {
                  href: _ctx.route("admin.manage.products"),
                  class: "text-secondary-600 text-decoration-none text-sm"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Back to Products")
                  ]),
                  _: 1
                }, 8, ["href"])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-12"${_scopeId}><div class="max-w-7xl mx-auto sm:px-6 lg:px-8"${_scopeId}><div class="bg-white p-8 sm:rounded-lg"${_scopeId}><div class="row justify-content-center"${_scopeId}><div class="col-sm-6"${_scopeId}><h4 class="mb-4"${_scopeId}>Product Information</h4><form id="basic__information"${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_FormKit, {
              type: "text",
              label: "Full Names",
              validation: "required",
              "validation-visibility": "live",
              help: "Enter a product's name",
              modelValue: unref(form).name,
              "onUpdate:modelValue": ($event) => unref(form).name = $event
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$1, {
              class: "mt-2",
              message: unref(form).errors.name
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mb-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "product_type",
              value: "Select Product type",
              class: "formkit-label block mb-1 font-bold text-sm"
            }, null, _parent2, _scopeId));
            _push2(`<div class="flex"${_scopeId}><div class="flex items-center mr-4"${_scopeId}><input id="book"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(form).product_type, "book")) ? " checked" : ""} type="radio" value="book" name="product_type" class="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"${_scopeId}><label for="book" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"${_scopeId}>Book</label></div><div class="flex items-center mr-4"${_scopeId}><input id="stationary"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(form).product_type, "stationary")) ? " checked" : ""} type="radio" value="stationary" name="product_type" class="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"${_scopeId}><label for="stationary" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"${_scopeId}>Stationary</label></div><div class="flex items-center mr-4"${_scopeId}><input id="uniform"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(form).product_type, "uniform")) ? " checked" : ""} type="radio" value="uniform" name="product_type" class="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"${_scopeId}><label for="uniform" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"${_scopeId}>Uniform</label></div></div>`);
            _push2(ssrRenderComponent(_sfc_main$1, {
              class: "mt-2",
              message: unref(form).errors.product_type
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            if (unref(form).product_type === "book") {
              _push2(`<div class="mb-3"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$2, {
                for: "subject",
                value: "Select Subject",
                class: "formkit-label block mb-1 font-bold text-sm"
              }, null, _parent2, _scopeId));
              _push2(`<select name="subject" id="subject" class="form-control"${_scopeId}><!--[-->`);
              ssrRenderList(__props.subjects, (item) => {
                _push2(`<option${ssrRenderAttr("value", item.id)}${_scopeId}>${ssrInterpolate(item.name)}</option>`);
              });
              _push2(`<!--]--></select>`);
              _push2(ssrRenderComponent(_sfc_main$1, {
                class: "mt-2",
                message: unref(form).errors.subject_id
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(form).product_type === "book") {
              _push2(`<div class="mb-3"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$2, {
                for: "class_level",
                value: "Assign Class/Level",
                class: "formkit-label block mb-1 font-bold text-sm"
              }, null, _parent2, _scopeId));
              _push2(`<select name="class_level" id="class_level" class="form-control"${_scopeId}><!--[-->`);
              ssrRenderList(__props.classes, (item) => {
                _push2(`<option${ssrRenderAttr("value", item.id)}${_scopeId}>${ssrInterpolate(item.class)}</option>`);
              });
              _push2(`<!--]--></select>`);
              _push2(ssrRenderComponent(_sfc_main$1, {
                class: "mt-2",
                message: unref(form).errors.subject_id
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_FormKit, {
              type: "select",
              label: "Product Category",
              validation: "required",
              "validation-visibility": "live",
              modelValue: unref(form).category,
              "onUpdate:modelValue": ($event) => unref(form).category = $event,
              options: [
                "Pre-Primary & ECDE",
                "Competency Based Curriculum",
                "International Curriculum",
                "Primary School",
                "Secondary School",
                "Higher Education"
              ]
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$1, {
              class: "mt-2",
              message: unref(form).errors.category
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><label class="inline-flex relative items-center cursor-pointer"${_scopeId}><input type="checkbox" class="sr-only peer"${ssrIncludeBooleanAttr(Array.isArray(unref(form).availability) ? ssrLooseContain(unref(form).availability, null) : unref(form).availability) ? " checked" : ""}${_scopeId}><div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[&#39;&#39;] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"${_scopeId}></div><span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"${_scopeId}>Product Availability</span></label></div><div${_scopeId}><label class="inline-flex relative items-center cursor-pointer"${_scopeId}><input type="checkbox" class="sr-only peer"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, null) : unref(form).status) ? " checked" : ""}${_scopeId}><div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[&#39;&#39;] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"${_scopeId}></div><span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"${_scopeId}>Product Status</span></label></div><div${_scopeId}><label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="user_avatar"${_scopeId}>Upload Product Image</label><input type="file" class="hidden"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "photo",
              value: "Featured Image"
            }, null, _parent2, _scopeId));
            _push2(`<div style="${ssrRenderStyle(!unref(photoPreview) ? null : { display: "none" })}" class="mt-2"${_scopeId}><img${ssrRenderAttr("src", unref(form).featured_image)}${ssrRenderAttr("alt", unref(form).name)} class="rounded-md h-24 w-24 object-cover"${_scopeId}></div><div style="${ssrRenderStyle(unref(photoPreview) ? null : { display: "none" })}" class="mt-2"${_scopeId}><span class="block rounded-full w-20 h-20 bg-cover bg-no-repeat bg-center" style="${ssrRenderStyle("background-image: url('" + unref(photoPreview) + "');")}"${_scopeId}></span></div>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              class: "mt-2 mr-2",
              type: "button",
              onClick: selectNewPhoto
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Select A New Photo `);
                } else {
                  return [
                    createTextVNode(" Select A New Photo ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: ["my-4", { "opacity-25": unref(form).processing }],
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Update Product `);
                } else {
                  return [
                    createTextVNode(" Update Product ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form></div></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-12" }, [
                createVNode("div", { class: "max-w-7xl mx-auto sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "bg-white p-8 sm:rounded-lg" }, [
                    createVNode("div", { class: "row justify-content-center" }, [
                      createVNode("div", { class: "col-sm-6" }, [
                        createVNode("h4", { class: "mb-4" }, "Product Information"),
                        createVNode("form", {
                          id: "basic__information",
                          onSubmit: withModifiers(createProduct, ["prevent"])
                        }, [
                          createVNode("div", null, [
                            createVNode(_component_FormKit, {
                              type: "text",
                              label: "Full Names",
                              validation: "required",
                              "validation-visibility": "live",
                              help: "Enter a product's name",
                              modelValue: unref(form).name,
                              "onUpdate:modelValue": ($event) => unref(form).name = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_sfc_main$1, {
                              class: "mt-2",
                              message: unref(form).errors.name
                            }, null, 8, ["message"])
                          ]),
                          createVNode("div", { class: "mb-3" }, [
                            createVNode(_sfc_main$2, {
                              for: "product_type",
                              value: "Select Product type",
                              class: "formkit-label block mb-1 font-bold text-sm"
                            }),
                            createVNode("div", { class: "flex" }, [
                              createVNode("div", { class: "flex items-center mr-4" }, [
                                withDirectives(createVNode("input", {
                                  id: "book",
                                  "onUpdate:modelValue": ($event) => unref(form).product_type = $event,
                                  type: "radio",
                                  value: "book",
                                  name: "product_type",
                                  class: "w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                }, null, 8, ["onUpdate:modelValue"]), [
                                  [vModelRadio, unref(form).product_type]
                                ]),
                                createVNode("label", {
                                  for: "book",
                                  class: "ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                }, "Book")
                              ]),
                              createVNode("div", { class: "flex items-center mr-4" }, [
                                withDirectives(createVNode("input", {
                                  id: "stationary",
                                  "onUpdate:modelValue": ($event) => unref(form).product_type = $event,
                                  type: "radio",
                                  value: "stationary",
                                  name: "product_type",
                                  class: "w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                }, null, 8, ["onUpdate:modelValue"]), [
                                  [vModelRadio, unref(form).product_type]
                                ]),
                                createVNode("label", {
                                  for: "stationary",
                                  class: "ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                }, "Stationary")
                              ]),
                              createVNode("div", { class: "flex items-center mr-4" }, [
                                withDirectives(createVNode("input", {
                                  id: "uniform",
                                  "onUpdate:modelValue": ($event) => unref(form).product_type = $event,
                                  type: "radio",
                                  value: "uniform",
                                  name: "product_type",
                                  class: "w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                }, null, 8, ["onUpdate:modelValue"]), [
                                  [vModelRadio, unref(form).product_type]
                                ]),
                                createVNode("label", {
                                  for: "uniform",
                                  class: "ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                }, "Uniform")
                              ])
                            ]),
                            createVNode(_sfc_main$1, {
                              class: "mt-2",
                              message: unref(form).errors.product_type
                            }, null, 8, ["message"])
                          ]),
                          unref(form).product_type === "book" ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "mb-3"
                          }, [
                            createVNode(_sfc_main$2, {
                              for: "subject",
                              value: "Select Subject",
                              class: "formkit-label block mb-1 font-bold text-sm"
                            }),
                            withDirectives(createVNode("select", {
                              name: "subject",
                              id: "subject",
                              class: "form-control",
                              "onUpdate:modelValue": ($event) => unref(form).subject_id = $event
                            }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(__props.subjects, (item) => {
                                return openBlock(), createBlock("option", {
                                  value: item.id,
                                  key: item.id
                                }, toDisplayString(item.name), 9, ["value"]);
                              }), 128))
                            ], 8, ["onUpdate:modelValue"]), [
                              [vModelSelect, unref(form).subject_id]
                            ]),
                            createVNode(_sfc_main$1, {
                              class: "mt-2",
                              message: unref(form).errors.subject_id
                            }, null, 8, ["message"])
                          ])) : createCommentVNode("", true),
                          unref(form).product_type === "book" ? (openBlock(), createBlock("div", {
                            key: 1,
                            class: "mb-3"
                          }, [
                            createVNode(_sfc_main$2, {
                              for: "class_level",
                              value: "Assign Class/Level",
                              class: "formkit-label block mb-1 font-bold text-sm"
                            }),
                            withDirectives(createVNode("select", {
                              name: "class_level",
                              id: "class_level",
                              class: "form-control",
                              "onUpdate:modelValue": ($event) => unref(form).class_level_id = $event
                            }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(__props.classes, (item) => {
                                return openBlock(), createBlock("option", {
                                  value: item.id,
                                  key: item.id
                                }, toDisplayString(item.class), 9, ["value"]);
                              }), 128))
                            ], 8, ["onUpdate:modelValue"]), [
                              [vModelSelect, unref(form).class_level_id]
                            ]),
                            createVNode(_sfc_main$1, {
                              class: "mt-2",
                              message: unref(form).errors.subject_id
                            }, null, 8, ["message"])
                          ])) : createCommentVNode("", true),
                          createVNode("div", null, [
                            createVNode(_component_FormKit, {
                              type: "select",
                              label: "Product Category",
                              validation: "required",
                              "validation-visibility": "live",
                              modelValue: unref(form).category,
                              "onUpdate:modelValue": ($event) => unref(form).category = $event,
                              options: [
                                "Pre-Primary & ECDE",
                                "Competency Based Curriculum",
                                "International Curriculum",
                                "Primary School",
                                "Secondary School",
                                "Higher Education"
                              ]
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_sfc_main$1, {
                              class: "mt-2",
                              message: unref(form).errors.category
                            }, null, 8, ["message"])
                          ]),
                          createVNode("div", null, [
                            createVNode("label", { class: "inline-flex relative items-center cursor-pointer" }, [
                              withDirectives(createVNode("input", {
                                type: "checkbox",
                                class: "sr-only peer",
                                "onUpdate:modelValue": ($event) => unref(form).availability = $event
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelCheckbox, unref(form).availability]
                              ]),
                              createVNode("div", { class: "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600" }),
                              createVNode("span", { class: "ml-3 text-sm font-medium text-gray-900 dark:text-gray-300" }, "Product Availability")
                            ])
                          ]),
                          createVNode("div", null, [
                            createVNode("label", { class: "inline-flex relative items-center cursor-pointer" }, [
                              withDirectives(createVNode("input", {
                                type: "checkbox",
                                class: "sr-only peer",
                                "onUpdate:modelValue": ($event) => unref(form).status = $event
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelCheckbox, unref(form).status]
                              ]),
                              createVNode("div", { class: "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600" }),
                              createVNode("span", { class: "ml-3 text-sm font-medium text-gray-900 dark:text-gray-300" }, "Product Status")
                            ])
                          ]),
                          createVNode("div", null, [
                            createVNode("label", {
                              class: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
                              for: "user_avatar"
                            }, "Upload Product Image"),
                            createVNode("input", {
                              ref_key: "photoInput",
                              ref: photoInput,
                              type: "file",
                              class: "hidden",
                              onChange: updatePhotoPreview
                            }, null, 544),
                            createVNode(_sfc_main$2, {
                              for: "photo",
                              value: "Featured Image"
                            }),
                            withDirectives(createVNode("div", { class: "mt-2" }, [
                              createVNode("img", {
                                src: unref(form).featured_image,
                                alt: unref(form).name,
                                class: "rounded-md h-24 w-24 object-cover"
                              }, null, 8, ["src", "alt"])
                            ], 512), [
                              [vShow, !unref(photoPreview)]
                            ]),
                            withDirectives(createVNode("div", { class: "mt-2" }, [
                              createVNode("span", {
                                class: "block rounded-full w-20 h-20 bg-cover bg-no-repeat bg-center",
                                style: "background-image: url('" + unref(photoPreview) + "');"
                              }, null, 4)
                            ], 512), [
                              [vShow, unref(photoPreview)]
                            ]),
                            createVNode(_sfc_main$3, {
                              class: "mt-2 mr-2",
                              type: "button",
                              onClick: withModifiers(selectNewPhoto, ["prevent"])
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Select A New Photo ")
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ]),
                          createVNode("div", null, [
                            createVNode(_sfc_main$4, {
                              class: ["my-4", { "opacity-25": unref(form).processing }],
                              disabled: unref(form).processing
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Update Product ")
                              ]),
                              _: 1
                            }, 8, ["class", "disabled"])
                          ])
                        ], 40, ["onSubmit"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Products/Create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
