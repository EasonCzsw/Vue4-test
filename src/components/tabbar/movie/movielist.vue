<template>
    <div>
        <ul class="mui-table-view">
            <router-link class="mui-table-view-cell mui-media" :to="'/home/movie/' + item.id" tag="li" v-for="item in imgUrl" :key="item.id">
                <img class="mui-media-object mui-pull-left" :src="item.url">
                <div class="mui-media-body">视频{{ item.id }}
                    <p class="mui-ellipsis">{{ item.title }}</p>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                imgUrl: []
            }
        },
        created() {
            this.getImg();
        },
        methods: {
            getImg() {
                this.$http.get('http://jsonplaceholder.typicode.com/photos').then(res => {
                    var list = []; 
                    res.data.filter((e) => {
                        if (e.id < 20) {
                            list.push({
                                id: e.id,
                                title: e.title,
                                url: e.url
                            });
                        }
                    });
                    this.imgUrl = list;
                    console.log(this.imgUrl);
                })
            }
        },
    }
</script>