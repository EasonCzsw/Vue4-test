module.exports = {
  devServer: {
    baseUrl: "/",
    port: 8081,
    host: "localhost",
    https: false,
    open: true,
    //代理
    proxy: {
      "/api": {
        target: "http://v.juhe.cn/",
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
};
