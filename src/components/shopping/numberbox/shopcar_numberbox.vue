<template>
    <div class="mui-numbox mui-numbox-car" data-numbox-min='1'>
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number" :value="initcount" @change="countChanged" ref="numbox" />
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
</template>

<script>
import mui from '../../../mui/mui-master/examples/hello-mui/js/mui.min.js';

export default {
    mounted() {
        mui(".mui-numbox").numbox();
    },
    methods: {
        countChanged() {
            console.log(this.$refs.numbox.value);
            this.$store.commit("updateGoodsInfo", {
                id: this.goodsid,
                count: this.$refs.numbox.value
            })
        }
    },
    props: ["initcount", "goodsid"]
}
</script>

<style>
.mui-numbox {
    height: 30px;
}
.mui-numbox-car {
    height: 25px!important;
    margin: 0 7px;
}
.mint-button {
    height: 35px;
}
</style>