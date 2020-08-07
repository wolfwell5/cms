<template>
  <div>

    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
      <el-form-item label="来往客户" prop="customer">
        <!--        <el-input v-model="ruleForm.customer" placeholder="请输入 来往客户"></el-input>-->
        <!--        <el-autocomplete :fetch-suggestions="querySearch" :trigger-on-focus="false"></el-autocomplete>-->

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

      <el-form-item label="收款金额(元)" prop="receiveMoney">
        <el-input v-model="ruleForm.receiveMoney" placeholder="请输入 收款金额"></el-input>
      </el-form-item>

      <el-form-item label="收款日期" required>
        <el-col :span="4">
          <el-form-item prop="receiveDate">
            <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.receiveDate"
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

      <el-form-item label="开票情况" prop="ticketStatus">
        <el-select v-model="ruleForm.ticketStatus" placeholder="请选择开票状态" clearable>
          <el-option
            v-for="item in ticketStatus"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="开票单位" prop="ticketCompany">
        <el-input v-model="ruleForm.ticketCompany" placeholder="请输入 开票单位"></el-input>
      </el-form-item>

      <el-form-item label="开票日期" required>
        <el-col :span="4">
          <el-form-item prop="ticketGenerateDate">
            <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.ticketGenerateDate"
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

    // import {showMessage} from "@/utils/MessagePopUp.js";

    const isNum = (rule, value, callback) => {
        const age = /^(([1-9]{1}\d*)|(0{1}))(\.\d{1,2})?$/;
        if (!age.test(value)) {
            callback(new Error('请输入合法的金额，最多两位小数'))
        } else {
            callback()
        }
    }

    export default {
        name: "ContractFormInput",
        data() {
            return {
                ruleForm: {
                    // customer: 'customer',
                    // contractName: 'contractName',
                    // contractMoney: '16666',
                    // receiveMoney: '666',
                    // receiveDate: '2020-07-04',
                    // insuranceMoney: '333',
                    // // insuranceDueDate: new Date(),
                    // insuranceDueDate: '2020-07-04',
                    // ticketStatus: 0,
                    // ticketCompany: 'ticketCompany',
                    // ticketGenerateDate: '2020-07-04',
                    customer: '',
                    contractName: '',
                    contractMoney: '',
                    receiveMoney: '',
                    receiveDate: '',
                    insuranceMoney: '',
                    insuranceDueDate: '',
                    ticketStatus: 0,
                    ticketCompany: '',
                    ticketGenerateDate: '',
                    comment: '',
                },
                ticketStatus: [{
                    value: 0,
                    label: '未开票'
                }, {
                    value: 1,
                    label: '已开票'
                }],
                rules: {
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
                    receiveMoney: [
                        {required: true, message: '请输入 收款金额', trigger: 'blur'},
                        {min: 1, max: 30, message: '请输入合法的金额，最多两位小数', trigger: 'blur'},
                        {validator: isNum, trigger: 'blur'}
                    ],
                    receiveDate: [
                        {required: true, message: '请选择 收款日期', trigger: 'blur'}
                    ],
                    insuranceMoney: [
                        {required: true, message: '请输入 质保金', trigger: 'blur'},
                        {min: 1, max: 30, message: '请输入合法的金额，最多两位小数', trigger: 'blur'},
                        {validator: isNum, trigger: 'blur'}

                    ],
                    insuranceDueDate: [
                        {required: true, message: '请选择 质保金到期日', trigger: 'blur'}
                    ],
                    ticketStatus: [
                        {required: true, message: '请选择 开票情况', trigger: 'blur'}
                    ],
                    ticketCompany: [
                        {required: true, message: '请填写 开票单位', trigger: 'blur'}
                    ],
                    ticketGenerateDate: [
                        {required: true, message: '请选择 开票日期', trigger: 'blur'}
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
            // console.log('cid', this.$route.query);
            this.initFormData(this.$route.query);
        },
        methods: {
            submitForm(formName) {

                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$store.dispatch("SaveContract", this.ruleForm);
                        this.showMessage('创建合同： ' + `${this.ruleForm.contractName}` + '  成功', 'success');
                        setTimeout(() => {
                            // this.$router.push({path: "/summary"})
                        }, 200);
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

                this.$store.dispatch("ContractNameAutoCompletion", this.ruleForm.customer).then(data => {

                    data.data.forEach((item) => {
                        res.push({value: item})
                    });
                    // console.log('res', JSON.parse(JSON.stringify(res)));
                    callback(res);
                });

            },
            handleSelect() {
            },
            showMessage(message, type) {
                this.$message({
                    message,
                    type,
                });
            },
            initFormData(query) {
                const cid = query.cid;
                if (cid) {
                    this.$store.dispatch("ContractFormDataInit", cid).then(res => {
                        this.ruleForm = res.data;
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
