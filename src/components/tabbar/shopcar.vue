<template>
    <div class="shopcar-container">
        <div class="goos-list">

            <!-- 商品列表 -->
            <div class="mui-card" v-for="(item, i) in goodslist" :key="item.id">
				<div class="mui-card-content">
					<div class="mui-card-content-inner goodslist">
                        <mt-switch 
                        v-model="$store.getters.getGoodsSelected[item.id]" 
                        @change="selectedChanged(item.id,$store.getters.getGoodsSelected[item.id])"></mt-switch>
                        <img class="cardImg" :src=item.url>
                        <div class="cardInfo">
                            <h1>{{ item.id }}</h1>
                            <p>
                                <span class="cardPrice">￥{{ item.price }}</span>
                                <numbox :initcount="$store.getters.getgoodCount[item.id]" :goodsid="item.id"></numbox>
                                <a href="#" @click.prevent="remove(item.id, i)">删除</a>
                            </p>
                        </div>
					</div>
				</div>
            </div>

            <!-- 商品结算区域 -->
            <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner Settlement">
                        <div class="card-left">
                            <p>总计（不含运费）</p>
                            <p>已勾选商品<span class="red">{{ $store.getters.getGoodsCountAmount.count }}</span>件，总价<span class="red">￥{{ $store.getters.getGoodsCountAmount.amount }}</span></p>
                        </div>   
                        <mt-button type="danger">已结算</mt-button>
					</div>
				</div>
            </div>
        </div>
        <p>{{ $store.getters.getGoodsSelected }}</p>
    </div>
</template>
<script>
    import numbox from '../shopping/numberbox/shopcar_numberbox.vue';
    export default {
        data() {
            return {
                goodslist: []
            }
        },
        created() {
            this.getGoodsList();
        },
        methods: {
            getGoodsList() {
                this.goodslist = this.$store.state.car;
                console.log(this.goodslist);
            },
            remove(id, index) {
                // 点击删除
                this.goodslist.splice(index,1);
                this.$store.commit('removeFormCar', id);
            },
            selectedChanged(id,value) {
                // console.log(id + '---' + value);
                this.$store.commit('updateGoodsSelected', { id,selected:value });
            }
        },
        components:{
            numbox
        }
    }
</script>
<style lang="less"> 
    .shopcar-container {
        background-color: #eee;
        overflow: hidden;
    }
    .goodslist {
        display: flex;
        align-items: center;
        padding: 10px;
    }
    .cardInfo {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .cardInfo h1 {
        font-size: 13px;
    }
    .cardImg {
        width: 60px;
        height: 60px;
    }
    .cardPrice {
        color: red;
    }

    .Settlement {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .card-left p {
        float: left;
    }
    .red {
        margin: 0 3px;
        color: red;
        font-weight: bold;
        font-size: 16px;
    }
</style>