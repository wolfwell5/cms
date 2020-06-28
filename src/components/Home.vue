<template>
  <div>

    <i class="el-icon-share" @click="moveto" title="Move to login"></i>
    <i class="el-icon-edit"></i>
    <i class="el-icon-delete"></i>
    <el-button type="primary" icon="el-icon-search">搜索</el-button>

  </div>
</template>

<script>
    export default {
        name: "Home",
        methods: {
            moveto() {
                this.$router.push({path: "/login"});
            },
        },
    }
</script>

<style scoped>

</style>
