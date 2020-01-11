<template>
    <div class="shopping">
        <!-- 编程式路由 -->
        <div class="shoppingList" v-for="item in imgList" :key="item.id" @click="getRouter(item.id)">
            <img :src="item.url">
            <h1 class="title">商品</h1>
            <div class="msg">    
                <div class="price">
                    <span class="now">￥899</span>
                    <span class="old">￥999</span>
                </div>
                <div class="sell">
                    <span>热卖中</span>
                    <span>剩60件</span>
                </div>
            </div>
        </div>
        <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                imgList: [],
                pageIndex: 7,
            }
        },
        created() {
            this.getImg();
        },
        methods: {
            getImg() {
                this.$http.get('http://jsonplaceholder.typicode.com/photos').then(res=>{
                    res.data.filter((e)=>{
                        if (e.id < 7) {
                            this.imgList.push({
                                id: e.id,
                                url: e.url
                            });
                        }
                    });
                });
            },
            getMore() {
                this.pageIndex++;
                this.$http.get('http://jsonplaceholder.typicode.com/photos/' + this.pageIndex).then(res=>{
                    this.imgList.push({
                        id: res.data.id,
                        url: res.data.url
                    });
                });
                this.pageIndex++;
                this.$http.get('http://jsonplaceholder.typicode.com/photos/' + this.pageIndex).then(res=>{
                    this.imgList.push({
                        id: res.data.id,
                        url: res.data.url
                    });
                });
            },
            getRouter(id) {
                this.$router.push({ name: "shopinfo", params: { id } });
            }
        },
    }
</script>

<style>
    .shopping {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 7px;
        color: black;
    }
    .shoppingList {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 190px;
        width: 49%;
        margin-bottom: 5px;
        text-align: left;
        border: 1px solid #ccc;
        box-shadow: 0 0 8px #ccc;
        color: black;
    }
    .shoppingList img {
        width: 100%;
    }
    .shoppingList .title {
        font-size: 18px;
        font-weight: bold;
    }

    .msg {
        background-color: #eee;
    }
    .msg p {
        margin: 0;
        padding: 5px;
    }
    .msg .price .new {
        color: red;
        font-weight: bold;
        font-size: 16px;
    }
    .msg .price .old {
        text-decoration: line-through;
        font-size: 12px;
        margin-left: 10px;
    }
    .msg .sell {
        display: flex;
        justify-content: space-between;
        font-size: 12px;
    }
</style>