<template>
  <div class="app-container">
    <div class="searchCondition">


      <el-card class="filter-container" shadow="">

        <div>
          <div style="float: left">
            <i class="el-icon-search"></i>
            <span style="font-weight:bolder">筛选搜索</span>
          </div>

          <div style="float: right">
            <el-button
              style="float: right"
              @click="handleSearchList()"
              type="primary"
              size="small">
              查询结果
            </el-button>
            <el-button
              style="float: right;margin-right: 15px"
              @click="handleResetSearch()"
              size="small">
              重置
            </el-button>
          </div>
        </div>

        <div style="margin-top: 45px">
          <el-form :inline="true" :model="listQuery" size="small" label-width="140px"
                   @keyup.enter.native="handleSearchList()">
            <el-form-item label="输入来往客户：">
              <el-autocomplete class="" v-model="listQuery.customer" placeholder="请输入 来往客户"
                               style="float: left;width: 300px"
                               :fetch-suggestions="querySearch"
                               :trigger-on-focus="false"
                               @select="handleSelect"/>
            </el-form-item>
            <el-form-item label="合同名称：">
              <el-input style="width: 203px" v-model="listQuery.contractName" placeholder="合同名称"></el-input>
            </el-form-item>
            <el-form-item label="合同金额范围：">
              <el-input style="width: 110px" v-model="listQuery.contractMoneyStart" placeholder="合同金额"></el-input>
              <span> &nbsp;~&nbsp;</span>
              <el-input style="width: 110px" v-model="listQuery.contractMoneyEnd" placeholder="合同金额"></el-input>
            </el-form-item>
            <el-form-item label="开票状态：" style="float: right;margin-right: 227px;">
              <el-select v-model="listQuery.ticketStatus" placeholder="全部" clearable>
                <el-option
                  v-for="item in ticketStatus"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-form>
        </div>

      </el-card>

    </div>
  </div>
</template>

<script>

    const defaultListQuery = {
        pageNum: 1,
        pageSize: 20,
        customer: null,
        contractName: null,
        ticketStatus: null,
        contractMoneyStart: null,
        contractMoneyEnd: null,
    };

    export default {
        name: "ContractSearchCondition",
        data() {
            return {
                ruleForm: {
                    customer: '',
                    contractName: '',
                    contractMoney: '',
                    receiveMoney: '',
                    receiveDate: '',
                    insuranceMoney: '',
                    insuranceDueDate: '',
                    ticketStatus: '',
                    ticketCompany: '',
                    ticketGenerateDate: '',
                    comment: '',
                },
                listQuery: Object.assign({}, defaultListQuery),
                ticketStatus: [{
                    value: 0,
                    label: '未开票'
                }, {
                    value: 1,
                    label: '已开票'
                }],
            };
        },
        methods: {
            handleSelect() {

            },
            querySearch(queryString, callback) {
                let res = [];
                this.$store.dispatch("ContractNameAutoCompletion", this.listQuery.customer).then(data => {
                    data.data.forEach((item) => {
                        res.push({value: item.customer, key: item.cid})
                    });
                    callback(res);
                });
            },
            handleSearchList() {
                this.listQuery.pageNum = 1;
                this.getList();
            },
            handleResetSearch() {
                this.listQuery = Object.assign({}, defaultListQuery);
            },
            getList() {
                // this.listLoading = true;
                this.$emit('loading-data', this.listQuery);
                // fetchList(this.listQuery).then(response => {
                //     this.listLoading = false;
                //     this.list = response.data.list;
                //     this.total = response.data.total;
                // });
            },
        },
    }
</script>

<style scoped>

  .app-container {
    margin-top: 5px;
    margin-left: 5px;
    margin-right: 5px;
  }

  .searchCondition {
    background-color: #B3C0D1;
    /*line-height: 14vh;*/
    margin-bottom: 20px;
  }

</style>
