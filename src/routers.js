// 引入组件
import index from './components/index'
import LogonUser from './components/LogonUser'
import VueRouter from 'vue-router'
import Vue from "vue";
Vue.use(VueRouter)
const router = new VueRouter({
  mode: "history",
  // 配置页面的路由
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
  if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
    if (sessionStorage.getItem("token") == 'true') { // 判断本地是否存在token
      next()
    } else {
      // 未登录,跳转到登陆页面
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