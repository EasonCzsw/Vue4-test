# vue4-test

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## 制作首页App组件
1.完后 Header 区域，使用的是 Mint-UI 中的Header组件
2.制作底部的 Tabbar 区域，使用的是 MUI 的 Tabbar.html
    + 在制作 购物车 小图标的时候，操作会相对多一些
    + 先把 扩展图标的 css 样式，拷贝到项目中
    + 拷贝 扩展字体库 ttf 文件，到项目中
    + 为购物车 小图标，添加 如下样式 ’mui-icon mui-icon-extra mui-icon-extrs-cart‘
    + 为会员 小图标，添加 如下样式 ’ mui-icon-contact‘
3.要在中间区域放置一个 router-view 来展示路由匹配到的组件

## 改造tabbar 为 router-link

## 设置路由高亮

## 点击 tabbar 中的路由链接，展示对应的路由组件

## 制作首页轮播布局

## 加载首页轮播图效果
1.获取数据，使用vue-resource
2.使用 vue-resource 的 this.$http.get 获取数据
3.获取数据，保存到data
4.使用v-for 循环渲染每个item项

## 改造九宫格区域的样式

## 默认首页 添加动画效果transtion