<template>
  <div>

    <home-lay-out>
    </home-lay-out>

  </div>
</template>

<script>

    import ContractInput from "../components/ContractFormInput";
    import HomeLayOut from "./HomeLayOut";

    export default {
        name: "success",
        components: {HomeLayOut, ContractInput},
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
        created() {
            // console.log(222333)

        },
    }
</script>

<style scoped>

</style>
