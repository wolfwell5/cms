<template>
  <div>
    <el-container>

      <left-nav-menu class="full-height"/>

      <el-container>
        <el-header class="item">
          <span style="flex-grow: 0.1;">
            <full-screen-button/>
          </span>
          <span style="flex-grow: 7;">项目合同 管理系统</span>
          <span style="flex-grow: 1;"></span>

        </el-header>

        <el-main>
          <router-view/>
        </el-main>
        <!--        <el-footer>Footer</el-footer>-->
      </el-container>
    </el-container>

  </div>
</template>

<script>
    import ContractFormInput from "../components/ContractFormInput";
    import LeftNavMenu from "./leftNavMenu";
    import FullScreenButton from "@/components/FullScreenButton";

    export default {
        name: "HomeLayOut",
        components: {FullScreenButton, LeftNavMenu, ContractFormInput},
    }
</script>

<style scoped>
  .el-header, .el-footer {
    background-color: whitesmoke;
    /*background-color: #D3DCE6;*/
    color: #333;
    text-align: center;
    line-height: 60px;
    height: 100%;
  }

  .el-header > span {
    font-size: 28px;
    font-weight: bolder;
    font-family: 楷体;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 100vh;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    /*line-height: 160px;*/
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .full-height {
    height: 105.4vh;
    border: 1px solid #eee
  }

  .item {
    /*flex-grow: 0;*/
    display: flex;
  }

</style>

