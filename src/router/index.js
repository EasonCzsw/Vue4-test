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
import Shopdesc from "../components/shopping/shopmain/shopdesc.vue";
import Shopcommit from "../components/shopping/shopmain/shopcommit.vue";
import Movielist from "../components/tabbar/movie/movielist.vue";
import Movie from "../components/tabbar/movie/movie.vue";
import Me from "../components/tabbar/me/me.vue";

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
    { path: "/home/shopinfo/:id", component: Shopinfo, name: "shopinfo" },
    { path: "/home/shopdesc/:id", component: Shopdesc, name: "shopdesc" },
    { path: "/home/shopcommit/:id", component: Shopcommit, name: "shopcommit" },
    { path: "/home/movielist", component: Movielist },
    { path: "/home/movie/:id", component: Movie, name: "movie" },
    { path: "/home/me", component: Me }
  ],
  linkActiveClass: "mui-active" // 覆盖默认的路由高亮类
});

export default router;
