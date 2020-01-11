<template>
    <div class="photoinfo-container">
        <h3>{{ textList.title }}</h3>
        <p class="subtitle">
            <span>发表时间：{{ showTime }}</span>
            <span>点击：{{ textList.id }}次</span>
        </p>
        <hr>
        <!-- 缩略图 -->
        <vue-preview :slides="slide1" @close="handleClose"></vue-preview>
        <!-- 图片内容区 -->
        <div class="content"></div>
        <!-- 评论子组件 -->
        <cmt-box></cmt-box>
    </div>
</template>

<script>
    import comment from '../subcomponents/comment.vue'
    export default {
        data() {
            return {
                textList: '',
                showTime: '',
                imgList: [],
                // 
                slide1: [
                    {
                        src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
                        msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
                        alt: 'picture1',
                        title: 'Image Caption 1',
                        w: 600,
                        h: 400
                    },
                    {
                        src: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg',
                        msrc: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
                        alt: 'picture2',
                        title: 'Image Caption 2',
                        w: 1200,
                        h: 900
                    }
                ]
            }
        },
        created() {
            this.getPhotoInfo();
            this.getTime();
        },
        methods: {
            getPhotoInfo() {
                this.$http.get('http://jsonplaceholder.typicode.com/posts').then(res=>{
                    res.data.filter((e) => {
                        if (e.id < 2) {
                            this.textList = {
                                id: e.id,
                                title: e.title,
                                body: e.body
                            }
                        }
                    });
                });
            },
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
            handleClose () {
                console.log('close event')
            }
        },
        components: {
            'cmt-box': comment
        }
    }
</script>

<style>
    .photoinfo-container {
        padding: 3px;
    }
    .photoinfo-container h3 {
        color: #26a2fe;
        font-size: 15px;
        margin: 15px 0;
    }
    .subtitle {
        display: flex;
        justify-content: space-between;
    } 
    .content {
        font-size: 13px;
        line-height: 30px;
    }
</style>