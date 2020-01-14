<template>
    <div>
        <mt-swipe :auto="4000"> 
            <mt-swipe-item v-for='item in imgList' :key="item">
                <img class='LBT' alt="logo" :src="item" :class="{'full': isfull}">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
    export default {
        props: ["imgList", "isfull"]
    }
</script>

<style>
    .mint-swipe {
        height: 200px;
    }
    .LBT {
        height: 100%;
    }
    .full {
        width: 200px;
    }
</style>