/* eslint-disable no-unused-vars */
// 入口文件
import Vue from "vue";
import Mint from "mint-ui";
import VueRouter from "vue-router";

import "../src/mui/mui-master/dist/css/mui.min.css";
import "../src/mui/mui-master/examples/hello-mui/css/icons-extra.css";
import "mint-ui/lib/style.css";

// 导入App根组件
import app from "./App.vue";

// 导入路由模块
import router from "./router/index.js";

// 导入vue-resource
import VueResource from "vue-resource";

// 导入 vue-preview
import VuePreview from "vue-preview";

// 跨域配置
// import axios from "axios";
// import VueAxios from "vue-axios";

// 安装组件
Vue.use(VueRouter);
Vue.use(Mint);
Vue.use(VueResource);
Vue.use(VuePreview);
// Vue.http.options.root = "http://v.juhe.cn/joke/content/list.php";
// Vue.use(axios);
// Vue.use(VueAxios);
Vue.config.productionTip = false;

// 全局设置post true
Vue.http.options.emulateJSON = true;

// 定义vue
var vm = new Vue({
  el: "#app",
  render: c => c(app),
  router
});
