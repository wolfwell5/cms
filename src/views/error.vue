<template>
<div>
   error page!
</div>
</template>

<script>
    export default {
        name: "error",
        data() {
            return {
                msg: null,
            }
        },
        created() {
            this.msg = this.$route.query.message;
        }
    }
</script>

<style scoped>

</style>
