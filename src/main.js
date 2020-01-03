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

// 跨域配置
import axios from 'axios';

// 安装组件
Vue.use(VueRouter);
Vue.use(Mint);
Vue.use(VueResource);
Vue.prototype.$axios = axios;

// 定义vue
var vm = new Vue({
  el: "#app",
  render: c => c(app),
  router
});
