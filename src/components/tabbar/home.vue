<template>
    <div>
        <!-- 轮播图 -->
        <swiper :imgList="List" :isfull="false"></swiper>

        <!-- 九宫格 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/newslist">
                    <img class="menuImg" src="../../assets/六宫格小图标/menu1.png" alt="menu">
                    <div class="mui-media-body">
                        <a href="javascript:;" style="color: #333;">新闻资讯</a>
                    </div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/photolist">
                    <img class="menuImg" src="../../assets/六宫格小图标/menu2.png" alt="menu">
                    <div class="mui-media-body">
                        <a href="javascript:;" style="color: #333;">图片分享</a>
                    </div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/shopping">
                    <img class="menuImg" src="../../assets/六宫格小图标/menu3.png" alt="menu">
                    <div class="mui-media-body">
                        <a href="javascript:;" style="color: #333;">商品购买</a>
                    </div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#" @click="goCommit">
                    <img class="menuImg" src="../../assets/六宫格小图标/menu4.png" alt="menu">
                    <div class="mui-media-body">留言反馈</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img class="menuImg" src="../../assets/六宫格小图标/menu5.png" alt="menu">
                    <div class="mui-media-body">视频专区</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img class="menuImg" src="../../assets/六宫格小图标/menu6.png" alt="menu">                
                    <div class="mui-media-body">联系我们</div>
                    <!-- <div style="position: relative;">
                        <input type="button" value="减少" @click="remove">
                        <input type="button" value="增加" @click="add">
                        <br>
                        <input type="text" v-model="$store.getters.optCount">
                    </div> -->
                </a>
            </li>
        </ul> 
    </div>
</template>

<script>
    // 传入轮播图组件
    import swiper from '../tabbar/subcomponents/swiper/swiper.vue';

    export default {
        data() {
            return {
                List: [],
                getImgUrl: 'http://jsonplaceholder.typicode.com/photos'
            }
        },
        created() {
            this.getText();
        },
        methods: {
            getText() {
                this.$http({
                    method: 'GET',
                    url: this.getImgUrl
                }).then((result) => {
                    var list = []; 
                    result.data.filter((e) => {
                        if (e.id < 7) {
                            list.push(e.url);
                        }
                    });
                    this.List = list;
                });
            },
            add() {
                this.$store.commit('increment');
            },
            remove() {
                this.$store.commit('subtract', 1);
                // 最多支持两个参数
                // this.$store.commit('subtract', {c:2,d:1})
            },
            goCommit() {
                this.$router.push({ name: "shopcommit" })
            }
        },
        // 挂载组件
        components: {
            swiper
        }
    }
</script>

<style lang="less">
    /* .mint-swipe {
        height: 200px;
        width: 100%;
    }
    .LBT {
        width: 100%;
        height: 100%;
    } */

    .mui-grid-view.mui-grid-9 {
        background-color: #fff;
        border: none;
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell {
        border: 0;
    }
    .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body {
        font-size: 13px;
    }
    .menuImg {
        width: 60px;
        height: 60px;
    }
</style>