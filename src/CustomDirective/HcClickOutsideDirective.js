import Vue from 'vue';

Vue.directive('hc-click-outside', {
  bind(el, binding) {
    console.log(el, binding);
  },

  unbind(el) {
    console.log(el);
  },
});
