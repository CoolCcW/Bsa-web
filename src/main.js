import Vue from 'vue'
import Logon from "@/Logon";
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(Element)
new Vue({
  render:h => h(Logon),
}).$mount('#logon')