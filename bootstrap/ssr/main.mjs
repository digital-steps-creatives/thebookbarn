import Alpine from "alpinejs";
import AlpineFloatingUI from "@awcodes/alpine-floating-ui";
import { createApp } from "vue/dist/vue.esm-bundler";
var onAttributeAddeds = [];
var onElRemoveds = [];
var onElAddeds = [];
function cleanupAttributes(el, names) {
  if (!el._x_attributeCleanups)
    return;
  Object.entries(el._x_attributeCleanups).forEach(([name, value]) => {
    if (names === void 0 || names.includes(name)) {
      value.forEach((i) => i());
      delete el._x_attributeCleanups[name];
    }
  });
}
new MutationObserver(onMutate);
function mutateDom(callback) {
  return callback();
}
function onMutate(mutations) {
  let addedNodes = [];
  let removedNodes = [];
  let addedAttributes = /* @__PURE__ */ new Map();
  let removedAttributes = /* @__PURE__ */ new Map();
  for (let i = 0; i < mutations.length; i++) {
    if (mutations[i].target._x_ignoreMutationObserver)
      continue;
    if (mutations[i].type === "childList") {
      mutations[i].addedNodes.forEach((node) => node.nodeType === 1 && addedNodes.push(node));
      mutations[i].removedNodes.forEach((node) => node.nodeType === 1 && removedNodes.push(node));
    }
    if (mutations[i].type === "attributes") {
      let el = mutations[i].target;
      let name = mutations[i].attributeName;
      let oldValue = mutations[i].oldValue;
      let add = () => {
        if (!addedAttributes.has(el))
          addedAttributes.set(el, []);
        addedAttributes.get(el).push({ name, value: el.getAttribute(name) });
      };
      let remove = () => {
        if (!removedAttributes.has(el))
          removedAttributes.set(el, []);
        removedAttributes.get(el).push(name);
      };
      if (el.hasAttribute(name) && oldValue === null) {
        add();
      } else if (el.hasAttribute(name)) {
        remove();
        add();
      } else {
        remove();
      }
    }
  }
  removedAttributes.forEach((attrs, el) => {
    cleanupAttributes(el, attrs);
  });
  addedAttributes.forEach((attrs, el) => {
    onAttributeAddeds.forEach((i) => i(el, attrs));
  });
  for (let node of removedNodes) {
    if (addedNodes.includes(node))
      continue;
    onElRemoveds.forEach((i) => i(node));
    if (node._x_cleanups) {
      while (node._x_cleanups.length)
        node._x_cleanups.pop()();
    }
  }
  addedNodes.forEach((node) => {
    node._x_ignoreSelf = true;
    node._x_ignore = true;
  });
  for (let node of addedNodes) {
    if (removedNodes.includes(node))
      continue;
    if (!node.isConnected)
      continue;
    delete node._x_ignoreSelf;
    delete node._x_ignore;
    onElAddeds.forEach((i) => i(node));
    node._x_ignore = true;
    node._x_ignoreSelf = true;
  }
  addedNodes.forEach((node) => {
    delete node._x_ignoreSelf;
    delete node._x_ignore;
  });
  addedNodes = null;
  removedNodes = null;
  addedAttributes = null;
  removedAttributes = null;
}
function once(callback, fallback = () => {
}) {
  let called = false;
  return function() {
    if (!called) {
      called = true;
      callback.apply(this, arguments);
    } else {
      fallback.apply(this, arguments);
    }
  };
}
var notification_default = (Alpine2) => {
  Alpine2.data("notificationComponent", ({ notification }) => ({
    isShown: false,
    computedStyle: null,
    init: function() {
      this.computedStyle = window.getComputedStyle(this.$el);
      this.configureTransitions();
      this.configureAnimations();
      if (notification.duration !== null) {
        setTimeout(() => this.close(), notification.duration);
      }
      this.isShown = true;
    },
    configureTransitions: function() {
      const display = this.computedStyle.display;
      const show = () => {
        mutateDom(() => {
          this.$el.style.setProperty("display", display);
          this.$el.style.setProperty("visibility", "visible");
        });
        this.$el._x_isShown = true;
      };
      const hide = () => {
        mutateDom(() => {
          this.$el._x_isShown ? this.$el.style.setProperty("visibility", "hidden") : this.$el.style.setProperty("display", "none");
        });
      };
      const toggle = once((value) => value ? show() : hide(), (value) => {
        this.$el._x_toggleAndCascadeWithTransitions(this.$el, value, show, hide);
      });
      Alpine2.effect(() => toggle(this.isShown));
    },
    configureAnimations: function() {
      let animation;
      Livewire.hook("message.received", (_, component) => {
        if (component.fingerprint.name !== "notifications") {
          return;
        }
        const getTop = () => this.$el.getBoundingClientRect().top;
        const oldTop = getTop();
        animation = () => {
          this.$el.animate([
            { transform: `translateY(${oldTop - getTop()}px)` },
            { transform: "translateY(0px)" }
          ], {
            duration: this.getTransitionDuration(),
            easing: this.computedStyle.transitionTimingFunction
          });
        };
        this.$el.getAnimations().forEach((animation2) => animation2.finish());
      });
      Livewire.hook("message.processed", (_, component) => {
        if (component.fingerprint.name !== "notifications") {
          return;
        }
        if (!this.isShown) {
          return;
        }
        animation();
      });
    },
    close: function() {
      this.isShown = false;
      setTimeout(() => Livewire.emit("notificationClosed", notification.id), this.getTransitionDuration());
    },
    getTransitionDuration: function() {
      return parseFloat(this.computedStyle.transitionDuration) * 1e3;
    }
  }));
};
var js_default = (Alpine2) => {
  Alpine2.plugin(notification_default);
};
Alpine.plugin(AlpineFloatingUI);
Alpine.plugin(js_default);
window.Alpine = Alpine;
Alpine.start();
const app = createApp({
  mounted() {
    console.log("The app is working");
  }
});
app.mount("#application");
