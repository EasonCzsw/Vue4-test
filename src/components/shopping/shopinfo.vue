<template>
    <div>
        <!-- 商品轮播图区域 -->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <swiper :imgList="imgTyUrl" :isfull="true"></swiper>
                </div>
            </div>
        </div>
        <!-- 商品购买区域 -->
        <div class="mui-card">
            <div class="mui-card-header">页眉</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner mui-card-l">
                    <p class="price">
                        市场价：<del>￥2399</del>&nbsp;&nbsp;销售价：<span class="now_price">￥2199</span>
                    </p>
                    <p>购买数量：<numberbox></numberbox></p>
                    <p>
                        <mt-button type="primary" szie="small">立即购买</mt-button>
                        <mt-button type="danger" szie="small">立即购买</mt-button>
                    </p>
                </div>
            </div>
        </div>

        <!-- 商品参数区域 -->
        <div class="mui-card">
            <div class="mui-card-header">页眉</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner mui-card-l" v-for="item in textList" :key="item.id">
                    <p>商品货号：{{ item.id }}</p>
                    <p>库存情况：{{ item.num }}</p>
                    <p>上架时间：{{ item.time }}</p>
                </div>
            </div>
            <div class="mui-card-footer">
                <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
                <mt-button type="danger" size="large" plain @click="goCommit(id)">商品评价</mt-button>
            </div>
        </div>
    </div>
</template>

<script>
    // 导入轮播
    import swiper from "../tabbar/subcomponents/swiper/swiper.vue";
    import numberbox from "../../components/shopping/numberbox/numberbox.vue";

    export default {
        data() {
            return {
                id: this.$route.params.id,
                imgTyUrl:[],
                textList:[]
            }
        },
        created() {
            this.getImg();
            this.getText();
        },
        methods: {
            getImg() {
                this.$http.get("http://jsonplaceholder.typicode.com/photos").then(res=>{
                    if (res.status === 200) { 
                        res.data.filter(e=>{
                            if (e.id < 7) {
                                this.imgTyUrl.push(e.url);
                            }
                        })
                    }
                });
            },
            getText() {
                this.$http.get("http://jsonplaceholder.typicode.com/users/" + this.id).then(res=>{
                    if (res.status === 200) {
                        this.textList.push({
                            id: res.data.name,
                            num: res.data.id,
                            time: new Date()
                        })
                    }
                });
            },
            goDesc(id) {
                this.$router.push({ name: "shopdesc",params: { id } });
                console.log(id);
            },
            goCommit(id) {
                this.$router.push({ name: "shopcommit", params: { id } })
                console.log(id);
            }
        },
        // 挂载组件
        components: {
            swiper,
            numberbox
        }
    }
</script>

<style>
    .now_price {
        font-size: 16px;
        font-weight: bold;
        color: red;
    }
    .mui-card-l {
        text-align: left;
    }
    .mui-card-footer {
        display: block;
    }
    .mint-button--primary.is-plain, .mint-button--danger.is-plain {
        width: 100%;
        margin-bottom: 15px;
    }
</style>