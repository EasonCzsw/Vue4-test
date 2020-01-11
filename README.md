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
1. 完后 Header 区域，使用的是 Mint-UI 中的Header组件
2. 制作底部的 Tabbar 区域，使用的是 MUI 的 Tabbar.html
    + 在制作 购物车 小图标的时候，操作会相对多一些
    + 先把 扩展图标的 css 样式，拷贝到项目中
    + 拷贝 扩展字体库 ttf 文件，到项目中
    + 为购物车 小图标，添加 如下样式 ’mui-icon mui-icon-extra mui-icon-extrs-cart‘
    + 为会员 小图标，添加 如下样式 ’ mui-icon-contact‘
3. 要在中间区域放置一个 router-view 来展示路由匹配到的组件

## 改造tabbar 为 router-link

## 设置路由高亮

## 点击 tabbar 中的路由链接，展示对应的路由组件

## 制作首页轮播布局

## 加载首页轮播图效果
1. 获取数据，使用vue-resource
2. 使用 vue-resource 的 this.$http.get 获取数据
3. 获取数据，保存到data
4. 使用v-for 循环渲染每个item项

## 改造九宫格区域的样式

## 默认首页 添加动画效果transtion

## 改造 newslist 路由链接
1. 新闻资讯链接
2. 绘制界面 media-list
3. 使用vue-resource获取数据
4. 渲染真实数据

## 时间内容修改

## 实现列表内容的详情跳转
1. 改变每一项列表为 router-link, 跳转时提供唯一标识符
2. 创建详情组件页面
3. 在路由模块中，将详情的路由地址和组件页面对应起来

## 单独封装一个 comment.vue 评论子组件
1. 先创建一个单独的 comment.vue 组件模板
2. 在需要使用 comment 组件对的页面中，导入组件
3. 在父组件中，使用 'components' 属性, 将 comment 组件，注册为自己的子组件
4. 将注册子组件时，注册名称，以标签形式引用

## 获取评论内容到页面
1. 为加载更多添加按钮绑定事件
2. 点击加载是userId++,并且重新调用getMsg
3. 数组方法concat拼接字符串

## 加载点击加载更多评论
1. 文本框做双向数据绑定
2. 发表按钮绑定事件
3. 判断文本框内是否为空
4. post上传数据提交服务器
5. 自动刷新加载发表的数据

## 图片分享

## 图片列表样式
1. 顶部滑动条
    + 借助 MUI 中的 tab-top-webview-main.html
    + 去掉 id 为 silder 区域的全局class mui-fullscreen
    + 滑动条滑动需要添加 MUI 自带的js文件 
    * {
        touch-action: pan-y 
    }
    + 为了配合使用muiscroll 修改类名:mui-tab-item-ll
2. 底部图片列表
    + 懒加载lazy load
3. 实现图片详情页面

## 实现图片详情缩略图
1. 使用vue-preview插件
2. 获取图片列表

## 绘制商品列表

## 尝试手机预览和测试