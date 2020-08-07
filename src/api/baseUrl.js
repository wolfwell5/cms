let baseUrl = "";
switch (process.env.NODE_ENV) {
  case 'development':
    baseUrl = "http://localhost:8088/"  //开发环境url
    break
  case 'serve':
    baseUrl = "http://localhost:8089/"   //生产环境url
    break
  default:
    baseUrl = "http://localhost:808811/"   //生产环境url

}

export default baseUrl;
