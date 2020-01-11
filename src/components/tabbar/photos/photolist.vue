<template>
    <div>
        <!-- 顶部滑动条 -->
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a :class="['mui-control-item',item.id == 101 ? 'mui-active' : ' ']" v-for="item in imgList" :key="item.id">{{'第' + item.id + '组'}}</a>
                </div>
            </div>
        </div>

        <!-- 图片 -->
        <ul class="photos-list">
            <router-link v-for="item in imgList" :key="item.id" :to="'/home/photoinfo/' + item.id" tag="li">
                <img v-lazy="item.url">
                <div class="info">
                    <h1 class="info-title">{{ item.title }}</h1>
                    <div class="info-body">{{ item.url }}</div>
                </div>
            </router-link>
        </ul>
    </div>
</template>
<script>
    // 图片数据 http://jsonplaceholder.typicode.com/photos
    // 导入 mui 的js文件 
    import mui from '../../../mui/mui-master/examples/hello-mui/js/mui.min.js'

    export default {
        data() {
            return {
                imgList: []
            };
        },
        mounted() {
            mui('.mui-scroll-wrapper').scroll({
                deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
            });
        },
        created() {
            this.getAllImg();
        },
        methods: {
            getAllImg() {
                this.$http.get('http://jsonplaceholder.typicode.com/photos').then(res => {
                    var list = []; 
                    res.data.filter((e) => {
                        if (e.id > 100 && e.id < 107) {
                            list.push({
                                id: e.id,
                                title: e.title,
                                url: e.url
                            });
                        }
                    });
                    this.imgList = list;
                })
            },
        },
    }
</script>

<style lang="less">
    * {
        touch-action: pan-y;
    }
    .mui-slider {
        z-index: 0;
    }
    img {
        width: 100%;
        margin: auto;
    }
    .photos-list {
        list-style: none;
        margin: 0;
        padding: 10px;
        padding-bottom: 0;
    }
    .photos-list li {
        position: relative;
        background-color: #ccc;
        text-align: center;
        margin-bottom: 10px;
        box-shadow: 0 0 6px #999;
    }
    .photos-list > img[lazy="loading"] {
        width: 10rem;
        height: 10rem;
        margin: auto;
    }
    .info {
        color: white;
        text-align: left;
        position: absolute;
        bottom: 0;
        background-color: rgba(0,0,0,0.4);
    }
    .info-title {
        font-size: 14px;
    }
    .info-body {
        font-size: 13px;
    }
</style>