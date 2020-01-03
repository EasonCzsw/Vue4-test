<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr>
        <textarea maxlength="120" placeholder="请输入要评论的内容"></textarea>
        <mt-button type="primary" size="large">发表评论</mt-button>
        <div class="cmt-list">
            <div class="cmt-item" v-for="(item, i) in nameslist" :key="item.name">
                <div class="cmt-title">
                    第{{ i + 1 }}楼用户：{{ item.name }}
                    <span style="float: right;"> 时间：{{ showTime }} </span>
                </div>
                <div class="cmt-body">
                    {{ item.company.bs }}
                </div>
            </div>
        </div>
        <mt-button type="danger" size="large" plain>加载更多</mt-button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                nameslist: [],
                newsMsg: [],
                showTime: '',
                getNamesUrl: "http://jsonplaceholder.typicode.com/users",
                getNewsMsg: "/api/v.juhe.cn/toutiao/index?type=top&key=48394c2938d028445b94cafab90464c9"
            }
        },
        created() {
            this.getNames();
            this.getTime();
            this.getMsg();
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
                this.showTime = year+'.'+mon+'.'+da+'.'+'周'+day+' '+h+':'+m+':'+s;
            },
            getNames() {
                this.$http({
                    method: 'GET',
                    url: this.getNamesUrl
                }).then((result) => {
                    this.nameslist = result.body;
                });
            },
            getMsg() {
                this.$http({
                    method: 'GET',
                    url: this.getNewsMsg
                }).then((result) => {
                    console.log(result.body.reason);
                    console.log(this.newsMsg);
                });
            },
            
        },
    }
</script>

<style lang="less">
    .cmt-container h3{
        text-align: left;
        font-size: 18px;
    }
    .cmt-container textarea {
        font-size: 14px;
        height: 85px;
        margin: 0;
    }
    .cmt-list {
        text-align: left;
        margin: 10px 0;
    }
    .cmt-item {
        font-size: 13px;
    }
    .cmt-title {
        background-color: #ccc;
        height: 30px;
        line-height: 30px;
    }
    .cmt-body {
        line-height: 35px;
        text-indent: 2em;
    }
</style>