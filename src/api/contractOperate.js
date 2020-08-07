import request from '@/utils/request'

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

function deleteContractTableData(param) {

  console.log('param', JSON.parse(JSON.stringify(param)));

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

export {
  saveContract,
  contractNameAutoCompletion,
  searchContractTableData,
  deleteContractTableData,
  getContractById,
}
