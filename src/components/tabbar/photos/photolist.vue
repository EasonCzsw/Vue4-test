<template>
    <div>
        <!-- 顶部滑动条 -->
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a :class="['mui-control-item', item.id === 1 ? 'mui-active' : '']" v-for="item in imgList" :key="item.id">{{'第' + item.id + '组'}}</a>
                </div>
            </div>
        </div>

        <!-- 图片 -->
        <ul>
            <li v-for="item in imgList" :key="item.url">
                <img v-lazy="item.url">
            </li>
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
                        if (e.id < 11) {
                            list.push({
                                id: e.id,
                                url: e.url
                            });
                        }
                    });
                    this.imgList = list;
                })
            }
        },
    }
</script>

<style lang="less">
    * {
        touch-action: pan-y;
    }
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    img {
        width: 100%;
        height: 200px;
        margin: auto;
    }
</style>