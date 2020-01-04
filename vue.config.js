module.exports = {
  devServer: {
    port: 8080,
    host: "localhost",
    https: false,
    open: true,
    //代理
    proxy: {
      "/api": {
        target: "http://v.juhe.cn/toutiao",
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "/api": "/"
        }
      }
    }
  }
};
