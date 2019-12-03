import Vue from 'vue';

Vue.directive('hc-hidden', function(el, binding) {
  el.style.display = binding.value ? 'none' : null;
});
