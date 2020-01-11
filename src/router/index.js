import VueRouter from "vue-router";

// 导入路由
import Home from "../components/tabbar/home.vue";
import Member from "../components/tabbar/member.vue";
import Shopcar from "../components/tabbar/shopcar.vue";
import Search from "../components/tabbar/search.vue";
import NewsList from "../components/tabbar/news/newslist.vue";
import NewsInfo from "../components/tabbar/news/newsinfo.vue";
import PhotoList from "../components/tabbar/photos/photolist.vue";
import Photoinfo from "../components/tabbar/photos/photoinfo.vue";
import Shopping from "../components/shopping/shopping.vue";
import Shopinfo from "../components/shopping/shopinfo.vue";

const router = new VueRouter({
  routes: [
    // 配置路由规则
    { path: "/", redirect: "/home" },
    { path: "/home", component: Home },
    { path: "/member", component: Member },
    { path: "/shopcar", component: Shopcar },
    { path: "/search", component: Search },
    { path: "/home/newslist", component: NewsList },
    { path: "/home/newsinfo/:id", component: NewsInfo },
    { path: "/home/photolist", component: PhotoList },
    { path: "/home/photoinfo/:id", component: Photoinfo },
    { path: "/home/shopping", component: Shopping },
    { path: "/home/shopinfo/:id", component: Shopinfo, name: "shopinfo" }
  ],
  linkActiveClass: "mui-active" // 覆盖默认的路由高亮类
});

export default router;
