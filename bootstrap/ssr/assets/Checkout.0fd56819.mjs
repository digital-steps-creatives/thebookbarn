import { _ as _sfc_main$1 } from "./AppLayout.095c79de.mjs";
import { ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseEqual, ssrInterpolate, ssrRenderList, ssrRenderStyle } from "vue/server-renderer";
import "./ApplicationLogo.8c74c1d0.mjs";
import { resolveComponent, mergeProps, withCtx, createVNode, withDirectives, vModelText, createTextVNode, vModelRadio, openBlock, createBlock, createCommentVNode, Fragment, renderList, toDisplayString, useSSRContext } from "vue";
import { useForm } from "@inertiajs/inertia-vue3";
import "axios";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
import "@inertiajs/inertia";
import "./ResponsiveNavLink.cc3c0f4e.mjs";
const _sfc_main = {
  props: {
    user: Object
  },
  data() {
    return {
      orderItems: {},
      form: useForm({
        address: null,
        delivery_type: "home",
        delivery_fee: 250,
        name: this.user.name,
        email: this.user.email,
        phone: this.user.phone
      }),
      loading: false,
      checkoutId: null
    };
  },
  methods: {
    makePayment() {
      this.loading = true;
      let payload = {
        phone: this.form.phone,
        amount: Math.round(this.orderItems.grand_total + this.form.delivery_fee),
        invoice_no: this.orderItems.invoice_no,
        email: this.form.email,
        delivery_type: this.form.delivery_type,
        delivery_fee: this.form.delivery_fee,
        address: this.form.address,
        name: this.form.name
      };
      window.axios.post(route("make.mpesa.payment"), payload).then((response) => {
        console.log(response.data.status);
        this.checkoutId = response.data.checkoutId;
        if (response.data.status === 200) {
          Swal.fire({
            title: response.data.message,
            icon: "success",
            timerProgressBar: false,
            showConfirmButton: true,
            confirmButtonText: "Confirm Payment"
          }).then((result) => {
            if (result.isConfirmed) {
              this.checkPaymentStatus(response.data.checkoutId);
            } else if (result.isDenied) {
              Swal.fire("Changes are not saved", "", "info");
            }
          });
          this.loading = false;
        }
      });
    },
    registerurl() {
      window.axios.post(route("register.urls")).then((response) => {
        console.log(response);
      });
    },
    checkPaymentStatus(checkoutId) {
      let checkoutPayload = {
        checkoutId,
        invoice_no: this.orderItems.invoice_no
      };
      window.axios.post(route("confirm.payment"), checkoutPayload).then((response) => {
        console.log(response);
        if (response.data.data.status === 1) {
          Swal.fire({
            title: "Payment confirmed Successfully",
            icon: "success",
            timerProgressBar: true,
            showConfirmButton: false
          });
          window.location.href = route("myorders");
        } else if (response.data.data.status === 0) {
          Swal.fire({
            title: "Payment not confirmed",
            icon: "warning",
            timerProgressBar: false,
            showConfirmButton: true,
            confirmButtonText: "Confirm Payment"
          }).then((result) => {
            if (result.isConfirmed) {
              this.checkPaymentStatus(this.checkoutId);
            }
          });
        }
      });
    }
  },
  mounted() {
    window.axios.get(route("get.orders", localStorage.getItem("orderItemready"))).then((response) => {
      this.orderItems = response.data.order;
    });
  },
  components: {
    AppLayout: _sfc_main$1
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_AppLayout = resolveComponent("AppLayout");
  _push(ssrRenderComponent(_component_AppLayout, mergeProps({ title: "Checkout" }, _attrs), {
    header: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h2 class="font-semibold text-xl text-gray-800 leading-tight"${_scopeId}> Checkout </h2>`);
      } else {
        return [
          createVNode("h2", { class: "font-semibold text-xl text-gray-800 leading-tight" }, " Checkout ")
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="py-12"${_scopeId}><div class="max-w-7xl mx-auto sm:px-6 lg:px-8"${_scopeId}><div class="row"${_scopeId}><div class="col-sm-8"${_scopeId}><div class="bg-white p-8"${_scopeId}><div class="row"${_scopeId}><div class="col-12"${_scopeId}><h4${_scopeId}>Billing Infomation</h4></div></div><div class="row mb-3"${_scopeId}><div class="col-sm-12"${_scopeId}><label for="name"${_scopeId}>Name</label><input id="name" type="text" class="form-control"${ssrRenderAttr("value", $data.form.name)}${_scopeId}></div></div><div class="row mb-3"${_scopeId}><div class="col-sm-6"${_scopeId}><label for="email"${_scopeId}>Email</label><input id="email" type="text" class="form-control"${ssrRenderAttr("value", $data.form.email)}${_scopeId}></div><div class="col-sm-6"${_scopeId}><label for="phone"${_scopeId}>Phone Number<small class="text-red-600"${_scopeId}>*</small></label><input id="phone" type="text" class="form-control"${ssrRenderAttr("value", $data.form.phone)} placeholder="Mpesa Phone number to pay from "${_scopeId}></div></div><div class="row mb-3"${_scopeId}><div class="col-12"${_scopeId}><label for="" class="mb-2"${_scopeId}>Choose where we should deliver your order <small class="text-red-600"${_scopeId}>*</small></label></div></div><div class="row mb-3"${_scopeId}><div class="col-6"${_scopeId}><div class="items-center pl-4 rounded border-2 border-gray-200 focus:border-green-600 peer-checked:text-green-600 hover:text-gray-600 hover:bg-gray-200 ring-green-600"${_scopeId}><input id="home" type="radio" value="home" name="delivery_type"${ssrIncludeBooleanAttr(ssrLooseEqual($data.form.delivery_type, "home")) ? " checked" : ""} class="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"${_scopeId}><label for="home" class="py-4 ml-2 w-full text-sm font-medium text-gray-900"${_scopeId}>Deliver at Home</label></div></div><div class="col-sm-6"${_scopeId}><div class="items-center pl-4 rounded border-2 border-gray-200 peer-checked:border-green-600 peer-checked:text-green-600 hover:text-gray-600 hover:bg-gray-200 ring-green-600"${_scopeId}><input id="school" type="radio" value="school" name="delivery_type"${ssrIncludeBooleanAttr(ssrLooseEqual($data.form.delivery_type, "school")) ? " checked" : ""} class="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"${_scopeId}><label for="school" class="py-4 ml-2 w-full text-sm font-medium text-gray-900"${_scopeId}>Deliver at School </label></div></div></div>`);
        if ($data.form.delivery_type) {
          _push2(`<div${_scopeId}><label for="message" class="block mb-2 text-sm font-medium text-gray-900"${_scopeId}>`);
          if ($data.form.delivery_type === "home") {
            _push2(`<span${_scopeId}>Enter Home Address below</span>`);
          } else if ($data.form.delivery_type === "school") {
            _push2(`<span${_scopeId}>Enter Name of the School, Student, Admission Number, Class &amp; Address below</span>`);
          } else {
            _push2(`<span${_scopeId}>Enter Name of the City/Town you are in</span>`);
          }
          _push2(`</label><textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="add more information on where we should deliver the order ..."${_scopeId}>${ssrInterpolate($data.form.address)}</textarea></div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div><div class="col-sm-4"${_scopeId}><div class="bg-gray-50 p-8"${_scopeId}><h4${_scopeId}>Order Infomation</h4><h5${_scopeId}>Books</h5><hr${_scopeId}><ul class="pl-0 mb-4"${_scopeId}><!--[-->`);
        ssrRenderList($data.orderItems.order_items, (items, index) => {
          _push2(`<li${_scopeId}><div class="flex mb-2" style="${ssrRenderStyle({ "max-height": "230px" })}"${_scopeId}><div class="h-16 w-16 mr-2"${_scopeId}><img${ssrRenderAttr("src", items.product.featured_image)}${ssrRenderAttr("alt", items.product.name)} class="w-full h-full object-cover"${_scopeId}></div><p${_scopeId}><strong${_scopeId}>${ssrInterpolate(items.product.name)}</strong><br${_scopeId}><span${_scopeId}><strong${_scopeId}>Price: </strong>KES ${ssrInterpolate(items.amount)}</span></p></div></li>`);
        });
        _push2(`<!--]--></ul><hr${_scopeId}><div${_scopeId}><p${_scopeId}><strong${_scopeId}>Sub total</strong> KES ${ssrInterpolate($data.orderItems.sub_total)}</p><p${_scopeId}><strong${_scopeId}>Tax charged</strong> KES ${ssrInterpolate(parseInt($data.orderItems.grand_total - $data.orderItems.sub_total))}</p><p${_scopeId}><strong${_scopeId}>Delivery Fee</strong> KES ${ssrInterpolate(parseInt(this.form.delivery_fee))}</p><p${_scopeId}><strong${_scopeId}>Total</strong> KES ${ssrInterpolate($data.orderItems.grand_total + parseInt(this.form.delivery_fee))}</p><div class="mt-5"${_scopeId}><div class="py-4 alert alert-info"${_scopeId}> Note: We are only delivering in Nairobi only </div><button class="text-decoration-none px-6 py-3 hover:bg-green-400 font-semibold rounded-md bg-gray-600 text-white"${_scopeId}>`);
        if ($data.loading) {
          _push2(`<div class="flex"${_scopeId}><div class="spinner-border" role="status"${_scopeId}></div><span class="ml-2"${_scopeId}>Please wait, Loading...</span></div>`);
        } else {
          _push2(`<span${_scopeId}>Make Payment</span>`);
        }
        _push2(`</button></div></div></div></div></div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "py-12" }, [
            createVNode("div", { class: "max-w-7xl mx-auto sm:px-6 lg:px-8" }, [
              createVNode("div", { class: "row" }, [
                createVNode("div", { class: "col-sm-8" }, [
                  createVNode("div", { class: "bg-white p-8" }, [
                    createVNode("div", { class: "row" }, [
                      createVNode("div", { class: "col-12" }, [
                        createVNode("h4", null, "Billing Infomation")
                      ])
                    ]),
                    createVNode("div", { class: "row mb-3" }, [
                      createVNode("div", { class: "col-sm-12" }, [
                        createVNode("label", { for: "name" }, "Name"),
                        withDirectives(createVNode("input", {
                          id: "name",
                          type: "text",
                          class: "form-control",
                          "onUpdate:modelValue": ($event) => $data.form.name = $event
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, $data.form.name]
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "row mb-3" }, [
                      createVNode("div", { class: "col-sm-6" }, [
                        createVNode("label", { for: "email" }, "Email"),
                        withDirectives(createVNode("input", {
                          id: "email",
                          type: "text",
                          class: "form-control",
                          "onUpdate:modelValue": ($event) => $data.form.email = $event
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, $data.form.email]
                        ])
                      ]),
                      createVNode("div", { class: "col-sm-6" }, [
                        createVNode("label", { for: "phone" }, [
                          createTextVNode("Phone Number"),
                          createVNode("small", { class: "text-red-600" }, "*")
                        ]),
                        withDirectives(createVNode("input", {
                          id: "phone",
                          type: "text",
                          class: "form-control",
                          "onUpdate:modelValue": ($event) => $data.form.phone = $event,
                          placeholder: "Mpesa Phone number to pay from "
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, $data.form.phone]
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "row mb-3" }, [
                      createVNode("div", { class: "col-12" }, [
                        createVNode("label", {
                          for: "",
                          class: "mb-2"
                        }, [
                          createTextVNode("Choose where we should deliver your order "),
                          createVNode("small", { class: "text-red-600" }, "*")
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "row mb-3" }, [
                      createVNode("div", { class: "col-6" }, [
                        createVNode("div", { class: "items-center pl-4 rounded border-2 border-gray-200 focus:border-green-600 peer-checked:text-green-600 hover:text-gray-600 hover:bg-gray-200 ring-green-600" }, [
                          withDirectives(createVNode("input", {
                            id: "home",
                            type: "radio",
                            value: "home",
                            name: "delivery_type",
                            "onUpdate:modelValue": ($event) => $data.form.delivery_type = $event,
                            class: "w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelRadio, $data.form.delivery_type]
                          ]),
                          createVNode("label", {
                            for: "home",
                            class: "py-4 ml-2 w-full text-sm font-medium text-gray-900"
                          }, "Deliver at Home")
                        ])
                      ]),
                      createVNode("div", { class: "col-sm-6" }, [
                        createVNode("div", { class: "items-center pl-4 rounded border-2 border-gray-200 peer-checked:border-green-600 peer-checked:text-green-600 hover:text-gray-600 hover:bg-gray-200 ring-green-600" }, [
                          withDirectives(createVNode("input", {
                            id: "school",
                            type: "radio",
                            value: "school",
                            name: "delivery_type",
                            "onUpdate:modelValue": ($event) => $data.form.delivery_type = $event,
                            class: "w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelRadio, $data.form.delivery_type]
                          ]),
                          createVNode("label", {
                            for: "school",
                            class: "py-4 ml-2 w-full text-sm font-medium text-gray-900"
                          }, "Deliver at School ")
                        ])
                      ])
                    ]),
                    $data.form.delivery_type ? (openBlock(), createBlock("div", { key: 0 }, [
                      createVNode("label", {
                        for: "message",
                        class: "block mb-2 text-sm font-medium text-gray-900"
                      }, [
                        $data.form.delivery_type === "home" ? (openBlock(), createBlock("span", { key: 0 }, "Enter Home Address below")) : $data.form.delivery_type === "school" ? (openBlock(), createBlock("span", { key: 1 }, "Enter Name of the School, Student, Admission Number, Class & Address below")) : (openBlock(), createBlock("span", { key: 2 }, "Enter Name of the City/Town you are in"))
                      ]),
                      withDirectives(createVNode("textarea", {
                        id: "message",
                        "onUpdate:modelValue": ($event) => $data.form.address = $event,
                        rows: "6",
                        class: "block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500",
                        placeholder: "add more information on where we should deliver the order ..."
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, $data.form.address]
                      ])
                    ])) : createCommentVNode("", true)
                  ])
                ]),
                createVNode("div", { class: "col-sm-4" }, [
                  createVNode("div", { class: "bg-gray-50 p-8" }, [
                    createVNode("h4", null, "Order Infomation"),
                    createVNode("h5", null, "Books"),
                    createVNode("hr"),
                    createVNode("ul", { class: "pl-0 mb-4" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList($data.orderItems.order_items, (items, index) => {
                        return openBlock(), createBlock("li", { key: index }, [
                          createVNode("div", {
                            class: "flex mb-2",
                            style: { "max-height": "230px" }
                          }, [
                            createVNode("div", { class: "h-16 w-16 mr-2" }, [
                              createVNode("img", {
                                src: items.product.featured_image,
                                alt: items.product.name,
                                class: "w-full h-full object-cover"
                              }, null, 8, ["src", "alt"])
                            ]),
                            createVNode("p", null, [
                              createVNode("strong", null, toDisplayString(items.product.name), 1),
                              createVNode("br"),
                              createVNode("span", null, [
                                createVNode("strong", null, "Price: "),
                                createTextVNode("KES " + toDisplayString(items.amount), 1)
                              ])
                            ])
                          ])
                        ]);
                      }), 128))
                    ]),
                    createVNode("hr"),
                    createVNode("div", null, [
                      createVNode("p", null, [
                        createVNode("strong", null, "Sub total"),
                        createTextVNode(" KES " + toDisplayString($data.orderItems.sub_total), 1)
                      ]),
                      createVNode("p", null, [
                        createVNode("strong", null, "Tax charged"),
                        createTextVNode(" KES " + toDisplayString(parseInt($data.orderItems.grand_total - $data.orderItems.sub_total)), 1)
                      ]),
                      createVNode("p", null, [
                        createVNode("strong", null, "Delivery Fee"),
                        createTextVNode(" KES " + toDisplayString(parseInt(this.form.delivery_fee)), 1)
                      ]),
                      createVNode("p", null, [
                        createVNode("strong", null, "Total"),
                        createTextVNode(" KES " + toDisplayString($data.orderItems.grand_total + parseInt(this.form.delivery_fee)), 1)
                      ]),
                      createVNode("div", { class: "mt-5" }, [
                        createVNode("div", { class: "py-4 alert alert-info" }, " Note: We are only delivering in Nairobi only "),
                        createVNode("button", {
                          class: "text-decoration-none px-6 py-3 hover:bg-green-400 font-semibold rounded-md bg-gray-600 text-white",
                          onClick: $options.makePayment
                        }, [
                          $data.loading ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "flex"
                          }, [
                            createVNode("div", {
                              class: "spinner-border",
                              role: "status"
                            }),
                            createVNode("span", { class: "ml-2" }, "Please wait, Loading...")
                          ])) : (openBlock(), createBlock("span", { key: 1 }, "Make Payment"))
                        ], 8, ["onClick"])
                      ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Checkout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Checkout = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Checkout as default
};
