import Vue from 'vue';

// doc vnode: https://github.com/vuejs/vue/blob/dev/src/core/vdom/vnode.js
Vue.directive('hc-if', function(el, binding, vnode) {
  if (!binding.value) {
    // replace HTMLElement with comment node
    const comment = document.createComment('hided');

    vnode.elm = comment; // element
    vnode.text = ' ';
    vnode.isComment = true; // empty comment placeholder?
    vnode.context = undefined;
    vnode.tag = undefined;
    vnode.data.directives = undefined;

    // component instance
    if (vnode.componentInstance) {
      vnode.componentInstance.$el = comment;
    }

    if (el.parentNode) {
      el.parentNode.replaceChild(comment, el);
    }
  }
});
