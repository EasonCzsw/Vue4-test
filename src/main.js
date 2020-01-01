/* eslint-disable no-unused-vars */
// 入口文件
import Vue from "vue";
import Mint from "mint-ui";
import "../src/mui/mui-master/dist/css/mui.min.css";
import "mint-ui/lib/style.css";

// 导入App根组件
import app from "./App.vue";

// 按需导入App组件
Vue.use(Mint);

// 定义vm
var vm = new Vue({
  el: "#app",
  render: c => c(app)
});
