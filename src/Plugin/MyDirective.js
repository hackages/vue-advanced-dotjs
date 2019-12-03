export const getMyDirective = Vue => {
  Vue.directive('setRedColor', {
    bind(e1, binding, vnode) {
      console.log(e1);
      e1.style.color = 'red';
    },
  });
};
