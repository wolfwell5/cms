<template>
  <div>
    <el-container>

      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1', '2','3']">

          <!--          <el-menu-item index="1" @click="openPage('summary')"><i class="el-icon-pie-chart"/>合同签订概况</el-menu-item>-->
          <el-menu-item index="1" @click="openPage('','summary')"><i class="el-icon-pie-chart"/>合同签订总览</el-menu-item>

          <el-submenu index="2">
            <template slot="title"><i class="el-icon-message"></i>收款</template>
            <!--            <template slot="title"><i class="el-icon-download"></i>收款</template>-->
            <el-menu-item index="2-1" @click="openPage('','inputIncome')"><i class="el-icon-circle-plus"/>
              <span style="">录入收款信息</span>
            </el-menu-item>
            <el-menu-item index="2-2" @click="openPage('incomeSearch','summary')">
              <i class="el-icon-search"/>查询收款
            </el-menu-item>
          </el-submenu>

          <el-submenu index="3">
            <template slot="title"><i class="el-icon-menu"></i>付款</template>
            <el-menu-item-group>
              <el-menu-item index="3-1" @click="openPage('','inputExpend')">
                <i class="el-icon-circle-plus-outline"/>录入付款信息
              </el-menu-item>
              <el-menu-item index="3-2" @click="openPage('expendSearch','summary')">
                <i class="el-icon-search"/>查询付款
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-menu-item index="4" @click="openPage('costSummary')"><i class="el-icon-s-marketing"/>成本汇总表</el-menu-item>


        </el-menu>
      </el-aside>

    </el-container>
  </div>

</template>

<script>
    export default {
        name: "leftNavMenu",
        data() {
            return {}
        },
        methods: {
            openPage(type, url) {
                if (type === 'costSummary') {
                    this.$message({
                        type: 'info',
                        message: '敬请期待 ...'
                    });
                    return;
                }

                this.$store.commit('changeType', type);
                this.$router.push({path: "/" + url, query: {type}});
            },
        },
    }
</script>


<style scoped>

  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
</style>
