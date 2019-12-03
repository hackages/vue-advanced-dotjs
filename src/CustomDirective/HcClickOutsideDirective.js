import Vue from 'vue';

const handleOutsideClick = (el, binding) => e => {
  e.stopPropagation();

  if (!el.contains(e.target) && binding.value) {
    binding.value();
  }
};

Vue.directive('hc-click-outside', {
  bind(el, binding) {
    const hander = handleOutsideClick(el, binding);
    el.__vueClickOutside__ = hander;
    document.addEventListener('click', hander);
    document.addEventListener('touchstart', hander);
  },

  unbind(el) {
    const hander = el.__vueClickOutside__;
    document.removeEventListener('click', hander);
    document.removeEventListener('touchstart', hander);
  },
});
