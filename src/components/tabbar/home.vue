<template>
    <div>
        <h3>home</h3>
        <mt-swipe :auto="4000"> 
            <mt-swipe-item v-for='item in imgList' :key="item.name">
                <span>{{item.name}}</span>
            </mt-swipe-item>
        </mt-swipe>
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
    }
</style>