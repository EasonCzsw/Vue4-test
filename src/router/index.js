import VueRouter from "vue-router";

// 导入路由
import Home from "../components/tabbar/home.vue";
import Member from "../components/tabbar/member.vue";
import Shopcar from "../components/tabbar/shopcar.vue";
import Search from "../components/tabbar/search.vue";

const router = new VueRouter({
  routes: [
    // 配置路由规则
    { path: "/", redirect: Home },
    { path: "/home", component: Home },
    { path: "/member", component: Member },
    { path: "/shopcar", component: Shopcar },
    { path: "/search", component: Search }
  ],
  linkActiveClass: "mui-active" // 覆盖默认的路由高亮类
});

export default router;
