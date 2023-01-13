import { ref, resolveComponent, useSSRContext, mergeProps, withCtx, createVNode, unref, createTextVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, createCommentVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderStyle, ssrRenderAttr, ssrInterpolate, ssrRenderSlot, ssrRenderList } from "vue/server-renderer";
import { S as Search, _ as _sfc_main$5 } from "./FrontLayout.290c8d19.mjs";
import "./ApplicationLogo.8c74c1d0.mjs";
import axios from "axios";
import "@inertiajs/inertia";
import { useForm, Link, Head } from "@inertiajs/inertia-vue3";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
import { s as store } from "../app.mjs";
import "./Pagination.280cc9fe.mjs";
import "./ResponsiveNavLink.016ef96f.mjs";
import "./CartDropdown.b11f13c5.mjs";
import "vuex";
import "lodash";
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
const _sfc_main$4 = {
  data() {
    var _a, _b;
    return {
      isCameraOpen: false,
      isPhotoTaken: false,
      isShotPhoto: false,
      isLoading: false,
      link: "#",
      form: useForm({
        photoInput: ref(null),
        customer_id: (_b = (_a = this.$page.props) == null ? void 0 : _a.user) == null ? void 0 : _b.id
      }),
      excel: useForm({
        customerExcel: null
      })
    };
  },
  components: {
    Link,
    Search
  },
  methods: {
    toggleCamera() {
      if (this.isCameraOpen) {
        this.isCameraOpen = false;
        this.isPhotoTaken = false;
        this.isShotPhoto = false;
      } else {
        this.isCameraOpen = true;
      }
    },
    createCameraElement() {
      this.isLoading = true;
      const constraints = window.constraints = {
        audio: false,
        video: true
      };
      navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
        this.isLoading = false;
        this.$refs.camera.srcObject = stream;
      }).catch((error) => {
        this.isLoading = false;
        alert("Your browser doesn't support this feature or there is some errors.");
      });
    },
    stopCameraStream() {
      let tracks = this.$refs.camera.srcObject.getTracks();
      tracks.forEach((track) => {
        track.stop();
      });
    },
    takePhoto() {
      if (!this.isPhotoTaken) {
        this.isShotPhoto = true;
        const FLASH_TIMEOUT = 50;
        setTimeout(() => {
          this.isShotPhoto = false;
        }, FLASH_TIMEOUT);
      }
      this.isPhotoTaken = !this.isPhotoTaken;
      const context = this.$refs.canvas.getContext("2d");
      context.drawImage(this.$refs.camera, 0, 0, 450, 337.5);
    },
    async sendExcelQuote() {
      var _a, _b;
      this.isLoading = true;
      if (!((_b = (_a = this.$page.props) == null ? void 0 : _a.user) == null ? void 0 : _b.id)) {
        this.$swal("Hold on you need to login!");
        window.location.href = route("login");
      }
      try {
        await axios.get("/sanctum/csrf-cookie").then((res) => {
          if (res) {
            this.excel.post(route("store.excel.quote"), {
              onSuccess: () => {
                this.$swal("Order request created successfully!");
                window.location.href = route("myorders");
                this.isLoading = false;
              }
            });
          }
        });
      } catch (error) {
        console.log(error);
      }
    },
    async sendQuoteRequest(data) {
      var _a, _b;
      this.isLoading = true;
      this.form.photoInput = data.image_data_url;
      if (!((_b = (_a = this.$page.props) == null ? void 0 : _a.user) == null ? void 0 : _b.id)) {
        this.$swal("Hold on you need to login!");
        window.location.href = route("login");
      }
      try {
        await axios.get("/sanctum/csrf-cookie").then((res) => {
          if (res) {
            this.form.post(route("store.image.quote"), {
              onSuccess: () => {
                this.$swal("Order request created successfully!");
                window.location.href = route("myorders");
                this.isLoading = false;
              }
            });
          }
        });
      } catch (error) {
        console.log(error);
      }
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Search = resolveComponent("Search");
  const _component_WebCamUI = resolveComponent("WebCamUI");
  _push(`<section${ssrRenderAttrs(_attrs)}><div class="container mx-auto items-center py-2 sm:py-4"><div class="my-8 relative rounded-lg bg-green-700 container mx-auto flex flex-col items-center pt-12 sm:pt-24 pb-24 sm:pb-32 md:pb-20 lg:pb-20 xl:pb-20"><img class="mr-2 lg:mr-12 mt-2 lg:mt-12 absolute right-0 top-0" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg2.svg" alt="bg"><img class="ml-2 lg:ml-12 mb-2 lg:mb-12 absolute bottom-0 left-0" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg3.svg" alt="bg"><div class="row justify-content-center"><div class="col-12"><div class="my-12 block sm:hidden">`);
  _push(ssrRenderComponent(_component_Search, null, null, _parent));
  _push(`</div></div><div class="col-sm-8"><div class=""><h4 class="text-primary font-medium mb-4 text-lg font-sans sm:text-2xl text-center">Sign up offer!</h4><h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-white font-bold leading-tight">Special Discount to all new Customers</h1><p class="text-center visible sm:hidden text-white">Start here by taking a photo of your Book list</p></div><div class="upload__takephoto_section mt-5"><div class="border-dashed border-2 border-gray-400 rounded bg-green-100 p-4 pb-5"><div id="cameraview" class="visible sm:hidden"><div class="camera-button"><button type="button" class="${ssrRenderClass([{ "bg-green-400 hover:bg-red-600": !$data.isCameraOpen, "bg-red-600 hover:bg-green-400": $data.isCameraOpen }, "block text-center w-full rounded text-white p-2.5"])}">`);
  if (!$data.isCameraOpen) {
    _push(`<span class="w-full block">Take a photo of your book list <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline-flex"><path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"></path></svg></span>`);
  } else {
    _push(`<span>Close Camera</span>`);
  }
  _push(`</button></div><div style="${ssrRenderStyle($data.isCameraOpen && $data.isLoading ? null : { display: "none" })}" class="camera-loading"><ul class="loader-circle"><li></li><li></li><li></li></ul></div>`);
  if ($data.isCameraOpen) {
    _push(`<div style="${ssrRenderStyle(!$data.isLoading ? null : { display: "none" })}" class="${ssrRenderClass([{ "flash": $data.isShotPhoto }, "camera-box"])}">`);
    _push(ssrRenderComponent(_component_WebCamUI, {
      fullscreenState: true,
      onPhotoTaken: $options.sendQuoteRequest
    }, null, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.isCameraOpen && !$data.isLoading) {
    _push(`<div class="camera-shoot"><button type="button" class="button"><img src="https://img.icons8.com/material-outlined/50/000000/camera--v2.png"></button></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.isPhotoTaken && $data.isCameraOpen) {
    _push(`<div class="camera-download"><a id="downloadPhoto" download="my-photo.jpg" class="button text-decoration-none" role="button"> Send Book list </a></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="hidden sm:block"><h4 class="text-green-700 text-center mb-4">Get started by submitting to us a list of books</h4><div class="flex items-end"><input name="customerExcel" class="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer focus:outline-none mr-3" id="customerExcel" type="file"><div><button class="cursor-pointer text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="submit" id="sendExcelQuote">`);
  if ($data.isLoading) {
    _push(`<div class="flex"><div class="spinner-border" role="status"></div><span class="ml-2">Please wait, Loading...</span></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(` Submit </button></div></div><div class="mt-8"><a href="/images/Bookbarn_list.xlsx" class="bg-green-400 p-3 hover:bg-green-800 rounded text-white mt-4 text-decoration-none" download><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2 inline-flex"><path stroke-linecap="round" stroke-linejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"></path></svg> Download our template to use </a></div></div></div></div></div></div></div></div></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Hero.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Hero = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2]]);
const ProductCard_vue_vue_type_style_index_0_scoped_a1b32288_lang = "";
const _sfc_main$3 = {
  name: "product-card",
  props: {
    product: {
      type: Object
    }
  },
  components: {
    Head,
    Link
  },
  methods: {
    addToCart() {
      this.$store.dispatch("cart/addToCart", this.product);
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  const _component_truncate = resolveComponent("truncate");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white border border-transparent hover:border-primary-500 rounded-primary overflow-hidden mx-auto relative product p-2" }, _attrs))} data-v-a1b32288><div class="bg-white flex justify-center item-center product-image relative rounded-primary" data-v-a1b32288><img${ssrRenderAttr("src", "/storage/" + $props.product.featured_image)} class="h-full w-full" alt="product" style="${ssrRenderStyle({ "object-fit": "cover" })}" data-v-a1b32288><div class="product-options absolute flex items-center justify-center" data-v-a1b32288><button class="h-12 w-12 bg-white hover:bg-primary-500 rounded-full shadow-md flex justify-center items-center text-primary-500 hover:text-white cursor-pointer" data-v-a1b32288><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-a1b32288><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" data-v-a1b32288></path></svg></button></div><div class="absolute top-3 right-3" data-v-a1b32288>`);
  if ($props.product.saleprice > "0") {
    _push(`<span class="bg-orange-500 text-white text-xs px-3 py-1 rounded-full uppercase tracking-wider" data-v-a1b32288>Launch Offer</span>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.product.quantity <= $props.product.lowstock) {
    _push(`<span class="bg-red-500 text-white text-xs px-3 py-1 rounded-full uppercase tracking-wider" data-v-a1b32288>Out of stock</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div><div class="flex items-center justify-between p-4" data-v-a1b32288><h6 data-v-a1b32288>`);
  _push(ssrRenderComponent(_component_Link, {
    href: _ctx.route("single.product", { product: $props.product.id }),
    class: "font-medium hover:text-primary-500"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_truncate, {
          value: $props.product.name,
          length: 40
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_truncate, {
            value: $props.product.name,
            length: 40
          }, null, 8, ["value"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h6><p class="text-grey-300 whitespace-nowrap text-sm" data-v-a1b32288>`);
  if ($props.product.saleprice > "0") {
    _push(`<span data-v-a1b32288>${ssrInterpolate($props.product.salepriceFormatted)} <span class="ml-2" style="${ssrRenderStyle({ "text-decoration": "line-through" })}" data-v-a1b32288>${ssrInterpolate($props.product.priceFormatted)}</span></span>`);
  } else {
    _push(`<span data-v-a1b32288>${ssrInterpolate($props.product.priceFormatted)}</span>`);
  }
  _push(`</p></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/frontend/components/shared/ProductCard.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const ProductCard = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-a1b32288"]]);
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "section-header text-center" }, _attrs))}><h3 class="text-2xl sm:text-3xl font-bold">`);
  ssrRenderSlot(_ctx.$slots, "title", {}, null, _push, _parent);
  _push(`</h3><p class="mt-2 text-sm sm:text-md">`);
  ssrRenderSlot(_ctx.$slots, "subtitle", {}, null, _push, _parent);
  _push(`</p></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/frontend/components/shared/SectionHeader.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const SectionHeader = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = {
  props: ["products"],
  components: {
    ProductCard,
    SectionHeader
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/frontend/components/partials/FeaturedProducts.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Home",
  __ssrInlineRender: true,
  props: {
    listavailablebooks: Object
  },
  setup(__props) {
    const addToCart = (bookItem) => {
      store.dispatch("cart/addToCart", bookItem);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$5, mergeProps({
        title: "Home",
        class: "home"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Hero, null, null, _parent2, _scopeId));
            _push2(`<section class="bg-white py-4" style="${ssrRenderStyle({ "border-bottom": "1px solid #ccc" })}"${_scopeId}><div class="container"${_scopeId}><div class="row"${_scopeId}><div class="col-12"${_scopeId}><h3 class="mb-3"${_scopeId}>Available Books</h3></div></div><div class="row"${_scopeId}><!--[-->`);
            ssrRenderList(__props.listavailablebooks, (bookItem) => {
              var _a, _b, _c, _d;
              _push2(`<div class="col-sm-3 col-6"${_scopeId}><div class="mb-6"${_scopeId}><figure${_scopeId}><div class="h-48 overflow-hidden rounded-md mb-2"${_scopeId}><img${ssrRenderAttr("src", bookItem.featured_image)}${ssrRenderAttr("alt", bookItem.name)} class="w-full"${_scopeId}></div><figcaption class="mb-4"${_scopeId}><h4 class="font-semibold text-sm text-gray-600"${_scopeId}>${ssrInterpolate(bookItem.name)}</h4>`);
              if (bookItem.product_type === "book") {
                _push2(`<div${_scopeId}><h5 class="my-2 text-sm"${_scopeId}>Level: `);
                if (((_a = bookItem == null ? void 0 : bookItem.classlevel) == null ? void 0 : _a.level) === "primary") {
                  _push2(`<span class="bg-orange-500 px-2 py-1 rounded-full text-xs text-white"${_scopeId}>${ssrInterpolate((_b = bookItem == null ? void 0 : bookItem.classlevel) == null ? void 0 : _b.level)}</span>`);
                } else if (bookItem.product_type = "uniform") {
                  _push2(`<span class="bg-cyan-600 p-2 rounded-full text-xs text-white"${_scopeId}>any level</span>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(` | Class: ${ssrInterpolate((_c = bookItem == null ? void 0 : bookItem.classlevel) == null ? void 0 : _c.class)}</h5><h6 class="font-normal text-sm text-gray-400 mb-3"${_scopeId}>Subject: ${ssrInterpolate((_d = bookItem == null ? void 0 : bookItem.subject) == null ? void 0 : _d.name)}</h6></div>`);
              } else if (bookItem.product_type === "uniform") {
                _push2(`<div${_scopeId}><h6 class="font-normal text-sm text-gray-400 mb-3"${_scopeId}>Category: ${ssrInterpolate(bookItem == null ? void 0 : bookItem.category)}</h6></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<button class="text-white bg-emerald-400 hover:bg-emerald-500 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-normal rounded-lg text-sm px-4 py-2 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-2 -ml-1 w-5 h-5"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"${_scopeId}></path></svg> Add to your List </button></figcaption></figure></div></div>`);
            });
            _push2(`<!--]--></div></div></section><section class="py-14 bg-green-900"${_scopeId}><div class="container"${_scopeId}><div class="row justify-content-center mb-5"${_scopeId}><div class="col-8 text-center"${_scopeId}><span class="fs-5 text-warning ls-md text-uppercase fw-semi-bold"${_scopeId}>new way of doing business </span><h2 class="display-5 mt-4 mb-3 text-white fw-bold"${_scopeId}>Are you a Bookshop or Book Vendor?</h2><p class="lead text-white-50 px-lg-8 mb-6"${_scopeId}>Interested in Ready Business?</p>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("register.vendor"),
              class: "bg-green-500 py-3 px-12 rounded-lg text-white hover:bg-green-700 text-decoration-none"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Get started now`);
                } else {
                  return [
                    createTextVNode("Get started now")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div></section><section class="py-14 bg-black"${_scopeId}><div class="container"${_scopeId}><div class="row justify-content-center mb-5"${_scopeId}><div class="col-8 text-center"${_scopeId}><span class="fs-5 text-warning ls-md text-uppercase fw-semi-bold"${_scopeId}>Affiliate Program </span><h2 class="display-5 mt-4 mb-3 text-white fw-bold"${_scopeId}>Make more Money from the Refferals</h2><p class="lead text-white-50 px-lg-8 mb-6"${_scopeId}>Interested? Become a partner</p>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("affiliates.register"),
              class: "bg-red-500 py-3 px-12 rounded-lg text-white hover:bg-red-700 text-decoration-none"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Get started now`);
                } else {
                  return [
                    createTextVNode("Get started now")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div></section><section class="bg-gray-100 py-9"${_scopeId}><div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8"${_scopeId}><div class="container"${_scopeId}><div class="row"${_scopeId}><div class="col-sm-4"${_scopeId}><span class="icon inline-flex align-top"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 text-green-800"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"${_scopeId}></path></svg></span><span class="text-green-800 font-medium text-md inline-flex leading-10 mt-1"${_scopeId}>Value for your money</span></div><div class="col-sm-4"${_scopeId}><span class="icon inline-flex align-top"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 text-green-800"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M16.712 4.33a9.027 9.027 0 011.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 00-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 010 9.424m-4.138-5.976a3.736 3.736 0 00-.88-1.388 3.737 3.737 0 00-1.388-.88m2.268 2.268a3.765 3.765 0 010 2.528m-2.268-4.796a3.765 3.765 0 00-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 01-1.388.88m2.268-2.268l4.138 3.448m0 0a9.027 9.027 0 01-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0l-3.448-4.138m3.448 4.138a9.014 9.014 0 01-9.424 0m5.976-4.138a3.765 3.765 0 01-2.528 0m0 0a3.736 3.736 0 01-1.388-.88 3.737 3.737 0 01-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 01-1.652-1.306 9.027 9.027 0 01-1.306-1.652m0 0l4.138-3.448M4.33 16.712a9.014 9.014 0 010-9.424m4.138 5.976a3.765 3.765 0 010-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 011.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 00-1.652 1.306A9.025 9.025 0 004.33 7.288"${_scopeId}></path></svg></span><span class="text-green-800 font-medium text-md inline-flex leading-10 mt-1"${_scopeId}>24/7 Support</span></div><div class="col-sm-4"${_scopeId}><span class="icon inline-flex align-top"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 text-green-800"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"${_scopeId}></path></svg></span><span class="text-green-800 font-medium text-md inline-flex leading-10 mt-1"${_scopeId}>Safe and secure online payment</span></div></div></div></div></section>`);
          } else {
            return [
              createVNode(Hero),
              createVNode("section", {
                class: "bg-white py-4",
                style: { "border-bottom": "1px solid #ccc" }
              }, [
                createVNode("div", { class: "container" }, [
                  createVNode("div", { class: "row" }, [
                    createVNode("div", { class: "col-12" }, [
                      createVNode("h3", { class: "mb-3" }, "Available Books")
                    ])
                  ]),
                  createVNode("div", { class: "row" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.listavailablebooks, (bookItem) => {
                      var _a, _b, _c, _d;
                      return openBlock(), createBlock("div", {
                        key: bookItem.id,
                        class: "col-sm-3 col-6"
                      }, [
                        createVNode("div", { class: "mb-6" }, [
                          createVNode("figure", null, [
                            createVNode("div", { class: "h-48 overflow-hidden rounded-md mb-2" }, [
                              createVNode("img", {
                                src: bookItem.featured_image,
                                alt: bookItem.name,
                                class: "w-full"
                              }, null, 8, ["src", "alt"])
                            ]),
                            createVNode("figcaption", { class: "mb-4" }, [
                              createVNode("h4", { class: "font-semibold text-sm text-gray-600" }, toDisplayString(bookItem.name), 1),
                              bookItem.product_type === "book" ? (openBlock(), createBlock("div", { key: 0 }, [
                                createVNode("h5", { class: "my-2 text-sm" }, [
                                  createTextVNode("Level: "),
                                  ((_a = bookItem == null ? void 0 : bookItem.classlevel) == null ? void 0 : _a.level) === "primary" ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    class: "bg-orange-500 px-2 py-1 rounded-full text-xs text-white"
                                  }, toDisplayString((_b = bookItem == null ? void 0 : bookItem.classlevel) == null ? void 0 : _b.level), 1)) : (bookItem.product_type = "uniform") ? (openBlock(), createBlock("span", {
                                    key: 1,
                                    class: "bg-cyan-600 p-2 rounded-full text-xs text-white"
                                  }, "any level")) : createCommentVNode("", true),
                                  createTextVNode(" | Class: " + toDisplayString((_c = bookItem == null ? void 0 : bookItem.classlevel) == null ? void 0 : _c.class), 1)
                                ]),
                                createVNode("h6", { class: "font-normal text-sm text-gray-400 mb-3" }, "Subject: " + toDisplayString((_d = bookItem == null ? void 0 : bookItem.subject) == null ? void 0 : _d.name), 1)
                              ])) : bookItem.product_type === "uniform" ? (openBlock(), createBlock("div", { key: 1 }, [
                                createVNode("h6", { class: "font-normal text-sm text-gray-400 mb-3" }, "Category: " + toDisplayString(bookItem == null ? void 0 : bookItem.category), 1)
                              ])) : createCommentVNode("", true),
                              createVNode("button", {
                                onClick: ($event) => addToCart(bookItem),
                                class: "text-white bg-emerald-400 hover:bg-emerald-500 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-normal rounded-lg text-sm px-4 py-2 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                              }, [
                                (openBlock(), createBlock("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  fill: "none",
                                  viewBox: "0 0 24 24",
                                  "stroke-width": "1.5",
                                  stroke: "currentColor",
                                  class: "mr-2 -ml-1 w-5 h-5"
                                }, [
                                  createVNode("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    d: "M12 4.5v15m7.5-7.5h-15"
                                  })
                                ])),
                                createTextVNode(" Add to your List ")
                              ], 8, ["onClick"])
                            ])
                          ])
                        ])
                      ]);
                    }), 128))
                  ])
                ])
              ]),
              createVNode("section", { class: "py-14 bg-green-900" }, [
                createVNode("div", { class: "container" }, [
                  createVNode("div", { class: "row justify-content-center mb-5" }, [
                    createVNode("div", { class: "col-8 text-center" }, [
                      createVNode("span", { class: "fs-5 text-warning ls-md text-uppercase fw-semi-bold" }, "new way of doing business "),
                      createVNode("h2", { class: "display-5 mt-4 mb-3 text-white fw-bold" }, "Are you a Bookshop or Book Vendor?"),
                      createVNode("p", { class: "lead text-white-50 px-lg-8 mb-6" }, "Interested in Ready Business?"),
                      createVNode(unref(Link), {
                        href: _ctx.route("register.vendor"),
                        class: "bg-green-500 py-3 px-12 rounded-lg text-white hover:bg-green-700 text-decoration-none"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Get started now")
                        ]),
                        _: 1
                      }, 8, ["href"])
                    ])
                  ])
                ])
              ]),
              createVNode("section", { class: "py-14 bg-black" }, [
                createVNode("div", { class: "container" }, [
                  createVNode("div", { class: "row justify-content-center mb-5" }, [
                    createVNode("div", { class: "col-8 text-center" }, [
                      createVNode("span", { class: "fs-5 text-warning ls-md text-uppercase fw-semi-bold" }, "Affiliate Program "),
                      createVNode("h2", { class: "display-5 mt-4 mb-3 text-white fw-bold" }, "Make more Money from the Refferals"),
                      createVNode("p", { class: "lead text-white-50 px-lg-8 mb-6" }, "Interested? Become a partner"),
                      createVNode(unref(Link), {
                        href: _ctx.route("affiliates.register"),
                        class: "bg-red-500 py-3 px-12 rounded-lg text-white hover:bg-red-700 text-decoration-none"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Get started now")
                        ]),
                        _: 1
                      }, 8, ["href"])
                    ])
                  ])
                ])
              ]),
              createVNode("section", { class: "bg-gray-100 py-9" }, [
                createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 md:px-8" }, [
                  createVNode("div", { class: "container" }, [
                    createVNode("div", { class: "row" }, [
                      createVNode("div", { class: "col-sm-4" }, [
                        createVNode("span", { class: "icon inline-flex align-top" }, [
                          (openBlock(), createBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            "stroke-width": "1.5",
                            stroke: "currentColor",
                            class: "w-12 h-12 text-green-800"
                          }, [
                            createVNode("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              d: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            })
                          ]))
                        ]),
                        createVNode("span", { class: "text-green-800 font-medium text-md inline-flex leading-10 mt-1" }, "Value for your money")
                      ]),
                      createVNode("div", { class: "col-sm-4" }, [
                        createVNode("span", { class: "icon inline-flex align-top" }, [
                          (openBlock(), createBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            "stroke-width": "1.5",
                            stroke: "currentColor",
                            class: "w-12 h-12 text-green-800"
                          }, [
                            createVNode("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              d: "M16.712 4.33a9.027 9.027 0 011.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 00-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 010 9.424m-4.138-5.976a3.736 3.736 0 00-.88-1.388 3.737 3.737 0 00-1.388-.88m2.268 2.268a3.765 3.765 0 010 2.528m-2.268-4.796a3.765 3.765 0 00-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 01-1.388.88m2.268-2.268l4.138 3.448m0 0a9.027 9.027 0 01-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0l-3.448-4.138m3.448 4.138a9.014 9.014 0 01-9.424 0m5.976-4.138a3.765 3.765 0 01-2.528 0m0 0a3.736 3.736 0 01-1.388-.88 3.737 3.737 0 01-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 01-1.652-1.306 9.027 9.027 0 01-1.306-1.652m0 0l4.138-3.448M4.33 16.712a9.014 9.014 0 010-9.424m4.138 5.976a3.765 3.765 0 010-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 011.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 00-1.652 1.306A9.025 9.025 0 004.33 7.288"
                            })
                          ]))
                        ]),
                        createVNode("span", { class: "text-green-800 font-medium text-md inline-flex leading-10 mt-1" }, "24/7 Support")
                      ]),
                      createVNode("div", { class: "col-sm-4" }, [
                        createVNode("span", { class: "icon inline-flex align-top" }, [
                          (openBlock(), createBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            "stroke-width": "1.5",
                            stroke: "currentColor",
                            class: "w-12 h-12 text-green-800"
                          }, [
                            createVNode("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              d: "M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                            })
                          ]))
                        ]),
                        createVNode("span", { class: "text-green-800 font-medium text-md inline-flex leading-10 mt-1" }, "Safe and secure online payment")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
