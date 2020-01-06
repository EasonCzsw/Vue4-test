<template>
    <div>
        <h3>新闻列表</h3>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in textList" :key="item.id">
                <router-link to="/home/newsinfo">
                    <img class="mui-media-object mui-pull-left" src="../../../assets/logo.png">
                    <div class="mui-media-body">
                        <a href="javascript:;">
                            {{ item.name }}
                        </a>
                        <p class='mui-ellipsis'>
                            <span>发表时间: {{ showTime }}</span>
                            <span>点击: {{ c }} 次</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                showTime: '',
                c: 0,
                textList: [],
                getTextUrl: 'http://jsonplaceholder.typicode.com/users'
            }
        },
        created() {
            this.getTime();
            this.getText();
        },
        methods: {
            getTime() {
                var time = new Date(); 
                var year = time.getFullYear();    //获取当前年份   
                var mon = time.getMonth()+1;      //获取当前月份   
                var da = time.getDate();          //获取当前日   
                var day = time.getDay();          //获取当前星期几   
                var h = time.getHours();          //获取小时   
                var m = time.getMinutes();        //获取分钟   
                var s = time.getSeconds();  
                this.showTime = year+'年'+mon+'月'+da+'日'+'星期'+day+' '+h+':'+m+':'+s;
            },
            getText() {
                this.$http({
                    method: 'GET',
                    url: this.getTextUrl
                }).then((result) => {
                    this.textList = result.body;
                });
            }
        },
    }
</script>

<style lang="less">
    .mui-table-view {
        text-align: left;
    }
    .mui-media-body {
        font-size: 14px;
    }
    .mui-ellipsis {
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        color: gray;
    }
</style>