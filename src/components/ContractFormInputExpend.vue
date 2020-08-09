<template>
  <div>

    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
      <el-form-item label="包出项目来源" prop="customerSource">
        <el-autocomplete class="" v-model="ruleForm.customerSource" placeholder="请输入 包出项目来源"
                         style="float: left;width: 100%"
                         :fetch-suggestions="querySearchPid"
                         :trigger-on-focus="false"
                         @select="handlePidSelect"/>
      </el-form-item>
      <el-form-item label="来往客户" prop="customer">
        <el-autocomplete class="" v-model="ruleForm.customer" placeholder="请输入 来往客户"
                         style="float: left;width: 100%"
                         :fetch-suggestions="querySearch"
                         :trigger-on-focus="false"
                         @select="handleSelect"/>
      </el-form-item>

      <el-form-item label="合同名称" prop="contractName">
        <el-input v-model="ruleForm.contractName" placeholder="请输入 合同名称"></el-input>
      </el-form-item>
      <el-form-item label="合同金额(元)" prop="contractMoney">
        <el-input v-model="ruleForm.contractMoney" placeholder="请输入 合同金额"></el-input>
      </el-form-item>

      <el-form-item label="付款金额(元)" prop="payMoney">
        <el-input v-model="ruleForm.payMoney" placeholder="请输入 付款金额"></el-input>
      </el-form-item>

      <el-form-item label="付款日期" required>
        <el-col :span="4">
          <el-form-item prop="payDate">
            <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.payDate"
                            style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>
      </el-form-item>

      <el-form-item label="质保金(元)" prop="insuranceMoney">
        <el-input v-model="ruleForm.insuranceMoney" placeholder="请输入 质保金"></el-input>
      </el-form-item>

      <el-form-item label="质保金到期日" required>
        <el-col :span="4">
          <el-form-item prop="insuranceDueDate">
            <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.insuranceDueDate"
                            style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>
      </el-form-item>

      <el-form-item label="回票情况" prop="ticketBackStatus">
        <el-select v-model="ruleForm.ticketBackStatus === '0' ? '未回票' :'已回票'" placeholder="请选择回票状态" clearable>
          <el-option
            v-for="item in ticketBackStatus"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="回票单位" prop="ticketBackCompany">
        <el-input v-model="ruleForm.ticketBackCompany" placeholder="请输入 回票单位"></el-input>
      </el-form-item>

      <el-form-item label="回票日期" required>
        <el-col :span="4">
          <el-form-item prop="ticketBackDate">
            <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.ticketBackDate"
                            style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>
      </el-form-item>


      <el-form-item label="备注" prop="desc">
        <el-input type="textarea" v-model="ruleForm.comment" placeholder="请输入 备注"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>

    </el-form>

  </div>
</template>

<script>

    import {isNum} from "@/utils/NumberUtil.js";
    // const isNum = (rule, value, callback) => {
    //     const age = /^(([1-9]{1}\d*)|(0{1}))(\.\d{1,2})?$/;
    //     if (!age.test(value)) {
    //         callback(new Error('请输入合法的金额，最多两位小数'))
    //     } else {
    //         callback()
    //     }
    // }

    export default {
        name: "ContractFormInputExpend",
        data() {
            return {
                ruleForm: {
                    pid: null,
                    customerSource: '',
                    customer: '',
                    contractName: '',
                    contractMoney: '',
                    // receiveMoney: '',
                    payMoney: '',
                    // receiveDate: '',
                    payDate: '',
                    insuranceMoney: '',
                    insuranceDueDate: '',
                    // ticketStatus: 0,
                    ticketBackStatus: 0,
                    // ticketCompany: '',
                    ticketBackCompany: '',
                    // ticketGenerateDate: '',
                    ticketBackDate: '',
                    comment: '',
                },
                ticketBackStatus: [{
                    value: 0,
                    label: '未回票'
                }, {
                    value: 1,
                    label: '已回票'
                }],
                rules: {
                    customerSource: [
                        {required: true, message: '请输入 包出项目来源', trigger: 'blur'},
                        {min: 1, max: 200, message: '长度在 1 到 200 个字符', trigger: 'blur'}
                    ],
                    customer: [
                        {required: true, message: '请输入 往来客户', trigger: 'blur'},
                        {min: 1, max: 200, message: '长度在 1 到 200 个字符', trigger: 'blur'}
                    ],
                    contractName: [
                        {required: true, message: '请输入 合同名称', trigger: 'blur'},
                        {min: 3, max: 200, message: '长度在 3 到 200 个字符', trigger: 'blur'}
                    ],
                    contractMoney: [
                        {required: true, message: '请输入 合同金额', trigger: 'blur'},
                        {min: 1, max: 30, message: '请输入合法的金额，最多两位小数', trigger: 'blur'},
                        {validator: isNum, trigger: 'blur'}
                    ],
                    payMoney: [
                        {required: true, message: '请输入 付款金额', trigger: 'blur'},
                        {min: 1, max: 30, message: '请输入合法的金额，最多两位小数', trigger: 'blur'},
                        {validator: isNum, trigger: 'blur'}
                    ],
                    payDate: [
                        {required: true, message: '请选择 付款日期', trigger: 'blur'}
                    ],
                    insuranceMoney: [
                        {required: true, message: '请输入 质保金', trigger: 'blur'},
                        {min: 1, max: 30, message: '请输入合法的金额，最多两位小数', trigger: 'blur'},
                        {validator: isNum, trigger: 'blur'}

                    ],
                    insuranceDueDate: [
                        {required: true, message: '请选择 质保金到期日', trigger: 'blur'}
                    ],
                    ticketBackStatus: [
                        {required: true, message: '请选择 回票情况', trigger: 'blur'}
                    ],
                    ticketBackCompany: [
                        {required: true, message: '请填写 回票单位', trigger: 'blur'}
                    ],
                    ticketBackDate: [
                        {required: true, message: '请选择 回票日期', trigger: 'blur'}
                    ],
                    comment: [
                        {required: false, message: '请填写 备注', trigger: 'blur'},
                        {min: 1, max: 1000, message: '备注长度小于 1000 个字符', trigger: 'blur'}
                    ],
                }
            };
        },
        watch: {
            // ruleForm: {
            //     handler: function (newv, oldv) {
            //         // console.log('new', newv);
            //         // console.log('oldv', oldv);
            //         this.$store.dispatch("ContractNameAutoCompletion", this.ruleForm.customer).then((info) => {
            //             console.log(info)
            //         });
            //     },
            //     deep: true,
            // }
        },
        mounted() {
            // console.log('cid', this.$route.params);
            // console.log('query', this.$route.query);
            this.initFormData(this.$route.query);
        },
        methods: {
            submitForm(formName) {
                // console.log('form', JSON.parse(JSON.stringify(this.ruleForm)));

                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$store.dispatch("SaveContract", this.ruleForm).then(res => {
                            const code = res.data.code;
                            if (200 === code) {
                                this.showMessage('创建合同： ' + `${this.ruleForm.contractName}` + res.data.message, 'success');
                            } else {
                                this.showMessage('创建合同： ' + `${this.ruleForm.contractName}` + res.data.message, 'error');
                            }
                        });
                    } else {
                        this.showMessage('创建合同： ' + `${this.ruleForm.contractName}` + '  失败！', 'error');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            querySearch(queryString, callback) {
                let res = [];
                this.$store.dispatch("ContractNameAutoCompletion", queryString).then(data => {
                    data.data.forEach((item) => {
                        res.push({value: item.customer, key: item.cid})
                    });
                    callback(res);
                });
            },
            querySearchPid(queryString, callback) {
                let res = [];
                this.$store.dispatch("ContractNameAutoCompletion", queryString).then(data => {
                    data.data.forEach((item) => {
                        res.push({value: item.customer, key: item.cid})
                    });
                    callback(res);
                });
            },
            handleSelect(item) {
                // this.ruleForm.pid = `${item.key}`;
            },
            handlePidSelect(item) {
                this.ruleForm.pid = `${item.key}`;
                // console.log('this.ruleForm.pid', JSON.parse(JSON.stringify(this.ruleForm.pid)));
                // console.log('val', JSON.parse(JSON.stringify(item)));
            },
            showMessage(message, type) {
                this.$message({
                    message,
                    type,
                });
            },
            initFormData(query) {
                let cid = query.cid;

                if (cid) {
                    this.$store.dispatch("ContractFormDataInit", cid).then(res => {
                        if (res.data) {
                            this.ruleForm = res.data;
                        }
                    });
                }

            }
        }
    }
</script>

<style scoped>
  .el-select {
    width: 16.7%;
    display: block;
  }
</style>
