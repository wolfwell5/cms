<template>
  <div>

    <div class="searchCondition">
      <contract-search-condition @loading-data="loadingData"/>
    </div>

    <div>
      <template>
        <el-table
          :data="tableData"
          border
          size="medium"
          max-height="550"
          show-summary
          v-loading="listLoading"
          :row-class-name="tableRowClassName"
          highlight-current-row

          style="width: 100%">
          <!--          <el-table-column-->
          <!--            type="index"-->
          <!--            label="idx"-->
          <!--            width="50">-->
          <!--          </el-table-column>-->
          <el-table-column
            prop="rownum"
            label="序号"
            hidden="true"
            width="60">
          </el-table-column>
          <el-table-column
            prop="customer"
            label="往来客户">
          </el-table-column>
          <el-table-column
            prop="contractName"
            sortable
            label="合同名称">
          </el-table-column>
          <el-table-column
            prop="contractMoney"
            sortable
            width="120"
            label="合同金额">
          </el-table-column>

          <el-table-column
            v-if="ifShowColumn()"
            prop="receiveMoney"
            sortable
            width="120"
            label="收款金额">
          </el-table-column>
          <el-table-column
            v-else
            prop="payMoney"
            sortable
            width="120"
            label="付款金额">
          </el-table-column>

          <el-table-column
            v-if="ifShowColumn()"
            prop="receiveDate"
            sortable
            label="收款日期">
          </el-table-column>
          <el-table-column
            v-else
            prop="payDate"
            sortable
            label="付款日期">
          </el-table-column>

          <el-table-column
            prop="insuranceMoney"
            sortable
            width="100"
            label="质保金">
          </el-table-column>
          <el-table-column
            prop="insuranceDueDate"
            sortable
            width="130"
            label="质保金到期日">
          </el-table-column>

          <el-table-column
            v-if="ifShowColumn()"
            prop="ticketStatus"
            :formatter="ticketStatusTransfer"
            sortable
            width="110"
            label="开票情况">
          </el-table-column>
          <el-table-column
            v-else
            prop="ticketBackStatus"
            :formatter="ticketStatusTransfer"
            sortable
            width="110"
            label="回票情况">
          </el-table-column>

          <el-table-column
            v-if="ifShowColumn()"
            prop="ticketCompany"
            sortable
            label="开票单位">
          </el-table-column>
          <el-table-column
            v-else
            prop="ticketBackCompany"
            sortable
            label="回票单位">
          </el-table-column>

          <el-table-column
            v-if="ifShowColumn()"
            prop="ticketGenerateDate"
            sortable
            label="开票日期">
          </el-table-column>
          <el-table-column
            v-else
            prop="ticketBackDate"
            sortable
            label="回票日期">
          </el-table-column>

          <el-table-column
            prop="comment"
            label="备注">
          </el-table-column>
          <el-table-column label="操作" fixed="right" width="150">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">编辑
              </el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>

    </div>
  </div>
</template>

<script>
    import ContractSearchCondition from "@/components/ContractSearchCondition";

    export default {
        name: "Summary",
        components: {ContractSearchCondition},
        data() {
            return {
                /*tableData: [{
                    id: '12987122',
                    customer: 'customer1',
                    contractName: '怀柔新农家二期合同',
                    contractMoney: 10000,
                    receiveMoney: 2000,
                    receiveDate: '2020-07-13',
                    insuranceMoney: 500,
                    insuranceDueDate: '2020-09-13',
                    ticketStatus: '已开票',
                    ticketCompany: '娜娜装潢有限公司',
                    ticketGenerateDate: '2020-07-13',
                    comment: '备注',
                },
                    {
                        id: '22',
                        customer: '怀柔新农家1',
                        contractName: '怀柔新农家二期合同',
                        contractMoney: 20000,
                        receiveMoney: 1000,
                        receiveDate: '2020-07-13',
                        insuranceMoney: 500,
                        insuranceDueDate: '2020-09-13',
                        ticketStatus: '已开票',
                        ticketCompany: '娜娜装潢有限公司',
                        ticketGenerateDate: '2020-07-13',
                        comment: '备注',
                    },
                    {
                        id: '3',
                        customer: '朝阳区阜新大街',
                        contractName: '怀柔新农家二期合同',
                        contractMoney: 30000,
                        receiveMoney: 200,
                        receiveDate: '2020-07-13',
                        insuranceMoney: 500,
                        insuranceDueDate: '2020-09-13',
                        ticketStatus: '已开票',
                        ticketCompany: '娜娜装潢有限公司',
                        ticketGenerateDate: '2020-07-13',
                        comment: '备注',
                    },
                    {
                        id: '4',
                        customer: '顺义区重庆火锅城',
                        contractName: '顺义区重庆火锅城合同',
                        contractMoney: 10000,
                        receiveMoney: 2000,
                        receiveDate: '2020-07-13',
                        insuranceMoney: 500,
                        insuranceDueDate: '2020-09-13',
                        ticketStatus: '已开票',
                        ticketCompany: '娜娜装潢有限公司',
                        ticketGenerateDate: '2020-07-13',
                        comment: '备注',
                    },
                ],*/
                tableData: [],
                listLoading: false,
                searchParam: {
                    pageNum: 1,
                    pageSize: 20,
                    customer: '',
                    contractName: '',
                    ticketStatus: '',
                    contractMoney: '',
                    type: '',
                },
            };
        },
        watch: {
            tableData(newv, oldv) {
            },
            // searchParam: {
            //     handler: function (newv, oldv) {
            //     },
            //     deep: true,
            // }
        },
        mounted() {
            const type = this.$route.query.type;
            this.$store.commit('changeType', type);
            this.searchParam.type = this.$store.state.contract.type;
            this.initTableData();
        },
        methods: {
            tableRowClassName({row, rowIndex}) {
                if (!row) {
                    return '';
                }
                if (row.contractMoney <= 10000) {
                    return 'success-row'; //&& row.receiveMoney == 2000
                } else if (row.contractMoney > 10000 && row.contractMoney <= 20000) {
                    return 'warning-row';
                } else if (row.contractMoney > 20000) {
                    return 'danger-row';
                }
                return '';
            },
            initTableData() {
                this.tableData = [];
                try {
                    this.listLoading = true;
                    this.$store.dispatch("SearchContractTableData", this.searchParam).then(res => {
                        res.data.forEach(item => {
                            this.tableData.push(item);
                        });
                    });
                } finally {
                    this.listLoading = false
                }
            },
            loadingData(param) {
                this.searchParam = param;
                try {
                    this.listLoading = true;
                    this.initTableData();
                } finally {
                    this.listLoading = false
                }
            },
            handleEdit(index, row) {
                console.log('row', JSON.parse(JSON.stringify(row)));
                if (!row.ticketBackStatus && row.ticketStatus) {
                    this.$router.push({path: '/inputIncome', query: {cid: row.cid}});
                } else {
                    this.$router.push({path: '/inputExpend', query: {cid: row.cid}});
                }
                // this.$router.push({name: 'ContractFormInput', params: {cid: row.cid}});
            },
            handleDelete(index, row) {
                let cids = [];
                cids.push(row.cid);
                this.messageAlert('delete', cids);
            },
            messageAlert(msg, cids) {
                this.$confirm('此操作将删除该数据, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$store.dispatch("DeleteContractTableData", cids).then(data => {
                        this.$message({
                            type: 'success',
                            message: data.data.message
                        });
                    }).catch(() => {
                        this.$message({
                            type: 'error',
                            message: '删除失败'
                        });
                    });

                    this.initTableData();
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
            ticketStatusTransfer(val) {
                const va = val.ticketStatus || val.ticketBackStatus;
                let middleWord = val.ticketStatus ? '开' : '回';
                if (va === '0') {
                    return '未' + middleWord + '票'
                } else if (va === '1') {
                    return '已' + middleWord + '票';
                } else {
                    return '未知';
                }
            },
            ifShowColumn() {
                return this.$route.query.type === 'incomeSearch';
            },
        },

    }
</script>

<style>
  .el-table__header tr,
  .el-table__header th {
    padding: 0;
    height: 40px;
  }

  .el-table__body tr,
  .el-table__body td {
    padding: 0;
    height: 40px;
  }


  .el-table .success-row {
    background: #F0FfAF;
  }

  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .danger-row {
    background: lightcoral;
  }


</style>
