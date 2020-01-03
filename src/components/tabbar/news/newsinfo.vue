<template>
    <div>
        <p v-for='item in newslist' :key="item.email">{{ item.email }}</p>
        <img src="../../../assets/logo.png" alt="">
        
        <!-- 评论子组件 -->
        <comment-box></comment-box>
    </div>
</template>

<script>
    // 导入 评论子组件
    import comment from "../subcomponents/comment.vue";

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
        components: {
            'comment-box': comment
        }
    }
</script>

<style lang="less">
</style>