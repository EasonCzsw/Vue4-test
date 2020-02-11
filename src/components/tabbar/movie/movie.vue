<template>
    <div>
        <video width="100%" height="240px" poster="../../../assets/logo.png" controls loop>
            <source src="../../../assets/movie.mp4" type="video/mp4">
            <source src="../../../assets/movie.ogg" type="video/ogg">
            <source src="../../../assets/movie.webm" type="video/webm">
            <object data="movie.mp4" width="300" height="200">
                <embed width="300" height="200" src="../../../assets/movie.swf">
            </object>
        </video>
    </div>
</template>
<style>
</style>