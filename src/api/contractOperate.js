import request from '@/utils/request'
import axios from 'axios'
import {transParams} from '@/utils/requestParamTransfer.js';
import {formatDate} from '@/utils/NumberUtil'

const moment = require('moment');


function saveContract(contract) {

  return request({
    url: '/contractManagement/saveContract',
    method: 'post',
    data: contract,
  })
}

function contractNameAutoCompletion(str) {
  // console.log('function ', JSON.parse(JSON.stringify(str)));
  return request({
    url: '/contractManagement/contractNameAutoCompletion/' + str,
    method: 'get',
    // 'Content-Type': 'application/json',
    // data: contract,

  })
}

function searchContractTableData(param) {
  const axiosPromise = request({
    url: '/contractManagement/searchContractTableData/',
    method: 'get',
    params: param,
  });

  return axiosPromise;
}

function getCostSummary(param) {
  const axiosPromise = request({
    url: '/contractManagement/getCostSummary/',
    method: 'get',
    params: param,
  });

  return axiosPromise;
}

function deleteContractTableData(param) {

  // console.log('param', JSON.parse(JSON.stringify(param)));

  const axiosPromise = request({
    url: '/contractManagement/deleteContractTableData/',
    method: 'post',
    // params: param,
    data: param,
    // 'Content-Type': 'application/json',
  });

  return axiosPromise;
}

function getContractById(cid) {
  return request({
    url: '/contractManagement/getContractById/' + cid,
    method: 'get',
  })
}

function downloadExcelDataByCondition(param) {
  const transP = transParams(param);
  let nowTime = formatDate(moment(), 'YYYYMMDDHHmm');

  // this.$axios({
  axios({
    method: 'post',
    url: 'http://localhost:8088/contractManagement/downloadExcelDataByCondition/',
    data: transP,
    responseType: 'blob',
  }).then((res) => {
    let blob = new Blob([res.data], {type: 'application/ms-excel;charset=utf-8'});
    let downloadElement = document.createElement('a');
    let href = window.URL.createObjectURL(blob); //创建下载的链接
    downloadElement.href = href;
    downloadElement.download = '合同详情' + nowTime + '.xls'; //下载后文件名
    document.body.appendChild(downloadElement);
    downloadElement.click(); //点击下载
    document.body.removeChild(downloadElement); //下载完成移除元素
    window.URL.revokeObjectURL(href); //释放掉blob对象//这里使用了ES6的语法

  }).catch((error) => {
      console.log(error)       //请求失败返回的数据
    }
  )
}

export {
  saveContract,
  contractNameAutoCompletion,
  searchContractTableData,
  getCostSummary,
  deleteContractTableData,
  getContractById,
  downloadExcelDataByCondition,
}
