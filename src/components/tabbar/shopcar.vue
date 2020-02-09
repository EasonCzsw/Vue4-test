<template>
    <div class="shopcar-container">
        <div class="goos-list">

            <!-- 商品列表 -->
            <div class="mui-card" v-for="(item, i) in goodslist" :key="item.id">
				<div class="mui-card-content">
					<div class="mui-card-content-inner goodslist">
                        <mt-switch></mt-switch>
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
					<div class="mui-card-content-inner">
						这是一个最简单的卡片视图控件；卡片视图常用来显示完整独立的一段信息，比如一篇文章的预览图、作者信息、点赞数量等
					</div>
				</div>
			</div>
        </div>
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
</style>