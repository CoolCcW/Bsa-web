import Vue from 'vue'
import App from "@/App.vue";
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import router from './routers'

import Router from 'vue-router'
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

// axios.defaults.baseURL='/api'
Vue.prototype.$axios = axios
axios.defaults.baseURL = '/'  //�ؼ�����
Vue.use(axios)
//��ʾ��
import VueSimpleAlert from "vue-simple-alert";
Vue.use(VueSimpleAlert, { reverseButtons: true });

Vue.config.productionTip = false
Vue.use(Element)
new Vue({
  router,
  render:h => h(App),
}).$mount('#logon')