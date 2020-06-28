<template>
  <div>
    Welcome! {{msg}}
    <br/>
    <a @click="rout2error">rout2error</a>
  </div>
</template>

<script>
    export default {
        name: "success",
        data() {
            return {
                msg: this.$route.query.data
            }
        },
        methods: {
            rout2error(e) {
                alert(e);
                this.$router.push({path: "/error"});
            },
        },
    }
</script>

<style scoped>

</style>
