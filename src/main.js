import Vue from 'vue'
import Logon from "@/Logon";
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
 import axios from 'axios'

// axios.defaults.baseURL='/api'
Vue.prototype.$axios = axios
axios.defaults.baseURL = '/api'  //�ؼ�����
Vue.use(axios)
//��ʾ��
import VueSimpleAlert from "vue-simple-alert";
Vue.use(VueSimpleAlert, { reverseButtons: true });

Vue.config.productionTip = false
Vue.use(Element)
new Vue({
  render:h => h(Logon),
}).$mount('#logon')