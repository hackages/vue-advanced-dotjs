import * as axios from 'axios';
import _ from 'lodash';
import {getMyDirective} from './MyDirective';

const Plugin = {
  install(Vue) {
    // 1. add global debounce from lodash
    // 2. add a global directive setRedColor in MyDirective
    // 3. add an $http instance method using axios

    // Bonus: Register hc-hidden directive created in Custom Directive

    Vue.debounce = _.debounce;
    Vue.prototype.$http = axios;
    getMyDirective(Vue);
  },
};

export default Plugin;
