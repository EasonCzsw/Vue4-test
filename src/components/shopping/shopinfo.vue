<template>
    <div class="shopinfo">
        <transition 
            @before-enter="beforeEnter"
            @enter="enter"
            @after-enter="afterEnter">
            <div class="ball" ref="ball" v-show="ballFlag"></div>
        </transition>

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
            <div class="mui-card-header">商品</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner mui-card-l">
                    <p class="price">
                        市场价：<del>￥999</del>&nbsp;&nbsp;销售价：<span class="now_price">￥{{ this.price }}</span>
                    </p>
                    <p>购买数量：
                        <numberbox @getcount="getSelectedCount"
                    :max="num"    
                        ></numberbox>
                    </p>
                    <p>
                        <mt-button type="primary" szie="small">立即购买</mt-button>
                        &nbsp;
                        <mt-button type="danger" szie="small" @click="addShopcar">加入购物车</mt-button>
                    </p>
                </div>
            </div>
        </div>

        <!-- 商品参数区域 -->
        <div class="mui-card">
            <div class="mui-card-header">商品</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner mui-card-l" v-for="item in textList" :key="item.id">
                    <p>商品货号：{{ item }}</p>
                    <p>库存情况：{{ num }}</p>
                    <p>上架时间：{{ time }}</p>
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
                textList:[],
                ballFlag: false, // 隐藏显示
                selectedCount: 1, // 默认数量1
                time: new Date(),
                num: 60,
                price: 899
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
                            if (e.id == this.id) {
                                this.imgTyUrl.push(e.url);
                            }
                        })
                    }
                });
            },
            getText() {
                this.$http.get("http://jsonplaceholder.typicode.com/users/" + this.id).then(res=>{
                    if (res.status === 200) {
                        this.textList.push(res.data.id)
                    }
                });
            },
            goDesc(id) {
                this.$router.push({ name: "shopdesc",params: { id } });
            },
            goCommit(id) {
                this.$router.push({ name: "shopcommit", params: { id } })
            },

            // 小球
            addShopcar() {
                this.ballFlag = !this.ballFlag;
                // 加入购物车获取的数据
                var goodsinfo = 
                {
                    id: '商品'+this.id, 
                    count: this.selectedCount,
                    price: this.price,
                    url: '' + this.imgTyUrl[0],
                    selected: true
                }
                console.log(goodsinfo);
                this.$store.commit('addToCar', goodsinfo);
            },
            beforeEnter(el) {
                el.style.transform = "translate(0,0)";
            },
            enter(el) {
                el.offsetWidth;
                
                // 获取小球在页面的位置
                // let ballPosition = this.$refs.ball.getBoundingClientRect();
                // let badgePosition = document.getElementById('badge').getBoundingClientRect();

                el.style.transform = `translate(${ document.getElementById('badge').getBoundingClientRect().left - el.getBoundingClientRect().left }px, ${ document.getElementById('badge').getBoundingClientRect().top - el.getBoundingClientRect().top }px)`;
                el.style.transition = "all 1s cubic-bezier(.4, -0.3,1,.68)";
            },
            afterEnter() {
                this.ballFlag = !this.ballFlag;
            },
            getSelectedCount(count) {
                this.selectedCount = count;
            }
        },
        // 挂载组件
        components: {
            swiper,
            numberbox
        },
        mounted() {
            
        },
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
    .shopinfo .ball {
        position: absolute;
        top: 390px;
        left: 146px;
        z-index: 99;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: red;
    }
</style>