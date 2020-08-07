<template>
  <div id="app">
    <!--    解决相同路由 不同param不刷新问题-->
    <router-view :key="$route.fullPath"/>
    <!--    <home-lay-out/>-->
  </div>
</template>

<script>
    import HomeLayOut from "@/views/HomeLayOut";

    export default {
        name: 'App',
        components: {HomeLayOut}
    }
</script>

<style>
  #app {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /*overflow-y: hidden;*/
  }

</style>
