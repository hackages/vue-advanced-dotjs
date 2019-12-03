import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Plugin from './Plugin/Plugin';
import './CustomDirective/HcHiddenDirective';
import './CustomDirective/HcIfDirective';
import './CustomDirective/HcClickOutsideDirective';

Vue.use(Plugin);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
