import {
  saveContract,
  contractNameAutoCompletion,
  searchContractTableData,
  deleteContractTableData,
  getContractById
} from '@/api/contractOperate'

const contract = {
  actions: {
    SaveContract({commit}, contractInfo) {
      // const loginName = contractInfo.username.trim()
      // console.log(1000, contractInfo)

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
      // console.log('1000', JSON.parse(JSON.stringify(contractName)));
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
      console.log('1000', JSON.parse(JSON.stringify(cid)));
      return new Promise((resolve, reject) => {
        getContractById(cid).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

  }
}

export default contract
