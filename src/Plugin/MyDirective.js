export const getMyDirective = Vue => {
  Vue.directive('setRedColor', {
    bind(e1) {
      console.log(e1);
      e1.style.color = 'red';
    },
  });
};
