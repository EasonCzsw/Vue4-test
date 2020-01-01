<template>
    <div>
        <h3>home</h3>
        <!-- 轮播图 -->
        <mt-swipe :auto="4000"> 
            <mt-swipe-item v-for='item in imgList' :key="item.name">
                <span>{{item.name}}</span>
                <br>
                <img src="../../assets/logo.png" alt="logo" width="100px" height="100px">
            </mt-swipe-item>
        </mt-swipe>

        <!-- 九宫格 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img class="menuImg" src="../../assets/六宫格小图标/menu1.png" alt="menu">
                    <div class="mui-media-body">新闻资讯</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img class="menuImg" src="../../assets/六宫格小图标/menu2.png" alt="menu">
                    <div class="mui-media-body">图品分享</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img class="menuImg" src="../../assets/六宫格小图标/menu3.png" alt="menu">
                    <div class="mui-media-body">商品购买</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img class="menuImg" src="../../assets/六宫格小图标/menu4.png" alt="menu">
                    <div class="mui-media-body">留言反馈</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img class="menuImg" src="../../assets/六宫格小图标/menu5.png" alt="menu">
                    <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img class="menuImg" src="../../assets/六宫格小图标/menu6.png" alt="menu">                
                    <div class="mui-media-body">联系我们</div></a></li>
        </ul> 
    </div>
</template>

<script>
    export default {
        data() {
            return {
                imgList: [],
                getImgUrl: 'http://jsonplaceholder.typicode.com/users'
            }
        },
        created() {
            this.getLunbotu();
        },
        methods: {
            getLunbotu() {
                this.$http({
                    method: 'GET',
                    url: this.getImgUrl
                }).then((result) => {
                    console.log(result.body);
                    this.imgList = result.body;
                });
            }
        },
    }
</script>

<style lang="less">
    .mint-swipe {
        height: 200px;
        width: 100%;
        background-color: skyblue;
    }
    .mui-grid-view.mui-grid-9 {
        background-color: #fff;
        border: none;
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell {
        border: 0;
    }
    .menuImg {
        width: 60px;
        height: 60px;
    }
</style>