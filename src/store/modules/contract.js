import {
  saveContract,
  contractNameAutoCompletion,
  searchContractTableData,
  getCostSummary,
  deleteContractTableData,
  getContractById,
  downloadExcelDataByCondition,
} from '@/api/contractOperate'

const contract = {
  state: {
    type: '',
  },
  mutations: {
    changeType(state, payload) {
      state.type = payload;
    }
  },
  actions: {
    SaveContract({commit}, contractInfo) {

      return new Promise((resolve, reject) => {
        saveContract(contractInfo, {emulateJSON: true}).then(response => {
          // commit('') //提交一个 mutation，通知状态改变
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    ContractNameAutoCompletion({commit}, contractName) {
      return new Promise((resolve, reject) => {
        contractNameAutoCompletion(contractName).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    SearchContractTableData({commit}, param) {
      return new Promise((resolve, reject) => {
        searchContractTableData(param).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    GetCostSummary({commit}, param) {
      return new Promise((resolve, reject) => {
        getCostSummary(param).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    DeleteContractTableData({commit}, param) {
      return new Promise((resolve, reject) => {
        deleteContractTableData(param).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    ContractFormDataInit({commit}, cid) {
      return new Promise((resolve, reject) => {
        getContractById(cid).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    DownloadExcelDataByCondition({commit}, param) {
      return new Promise((resolve, reject) => {
        downloadExcelDataByCondition(param);
      })
    },

  },
}

export default contract
