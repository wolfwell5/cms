// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import elmentui from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import './icons'
import store from './store' //引入 Vuex 状态管理
import qs from 'qs'
import axios from 'axios'

Vue.prototype.$qs = qs;
Vue.use(elmentui);
Vue.config.productionTip = false
// Vue.prototype.$ajax = axios
Vue.prototype.$axios = axios
// Vue.use(axios)
// axios.defaults.baseURL='8088'


/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   store, //使用 Vuex 进行状态管理
//   components: {App},
//   template: '<App/>'
// });

new Vue({
  render: h => h(App),
  router, //使用路由配置
  store //使用 Vuex 进行状态管理
}).$mount('#app')
