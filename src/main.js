import Vue from 'vue'
import App from "@/App.vue";
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import router from './routers'
import store from './js/store/index.js'
import './assets/font-ali/iconfont.css'
import Router from 'vue-router'
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
// axios.defaults.baseURL='/api'
Vue.prototype.$axios = axios
axios.defaults.baseURL = '/'  //关键代码
Vue.use(axios)
//提示框
import VueSimpleAlert from "vue-simple-alert";
Vue.use(VueSimpleAlert, { reverseButtons: true });


Vue.config.productionTip = false
Vue.use(Element)
new Vue({
  router,
  store,
  render:h => h(App),
}).$mount('#logon')
