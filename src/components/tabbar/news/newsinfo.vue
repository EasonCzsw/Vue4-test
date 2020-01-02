<template>
    <div>
        <p v-for='item in newslist' :key="item.email">{{ item.email }}</p>
        <img src="../../../assets/logo.png" alt="">
    </div>
</template>

<script>
    export default {
        data() {
            return {
                newslist: [],
                getNewsUrl: "http://jsonplaceholder.typicode.com/users"
            }
        },
        created() {
            this.getNews();
        },
        methods: {
            getNews() {
                this.$http({
                    method: 'GET',
                    url: this.getNewsUrl
                }).then((result) => {
                    this.newslist = result.body;
                });
            }
        },
    }
</script>

<style lang="less">
</style>