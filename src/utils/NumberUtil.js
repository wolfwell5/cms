function isNum(rule, value, callback) {

  const age = /^(([1-9]{1}\d*)|(0{1}))(\.\d{1,2})?$/;
  if (!age.test(value)) {
    callback(new Error('请输入合法的金额，最多两位小数'))
  } else {
    callback()
  }
}

function formatDate(time, fmt) {
  return time.format(fmt);
}

export {
  isNum,
  formatDate,
}
