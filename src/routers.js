// �������
import index from './components/index'
import LogonUser from './components/LogonUser'
import VueRouter from 'vue-router'
import Vue from "vue";
Vue.use(VueRouter)
const router = new VueRouter({
  mode: "history",
  // ����ҳ���·��
  routes: [
    {
      path: '/',
      component:index,
      redirect: 'index',
      meta: {
        requireAuth: true
      }
    }, {
      path: '/LogonUser',
      component: LogonUser,
    }, {
      path: '/index',
      component: index,
      meta: {
        requireAuth: true
      }
    }
  ]
});

export default router;

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) { // �жϸ�·���Ƿ���Ҫ��¼Ȩ��
    if (sessionStorage.getItem("token") == 'true') { // �жϱ����Ƿ����token
      next()
    } else {
      // δ��¼,��ת����½ҳ��
      next({
        path: '/LogonUser'
      })
    }
  } else {
    if(sessionStorage.getItem("token") == 'true'){
      next('/index');
    }else{
      next();
    }
  }
});