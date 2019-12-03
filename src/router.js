import Vue from 'vue';
import Router from 'vue-router';
import CustomDirective from './CustomDirective/CustomDirective';
import Mixins from './Mixins/Mixins.vue';
import Plugin from './Plugin/Plugin.vue';
import RenderProps from './RenderProps/RenderProps';
import Model from './v-model/Model';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'v-model',
      component: Model,
    },
    {
      path: '/custom-directive',
      name: 'custom-directive',
      component: CustomDirective,
    },
    {
      path: '/render-props',
      name: 'render-props',
      component: RenderProps,
    },
    {
      path: '/plugin',
      name: 'plugin',
      component: Plugin,
    },
    {
      path: '/mixins',
      name: 'mixins',
      component: Mixins,
    },
  ],
});
