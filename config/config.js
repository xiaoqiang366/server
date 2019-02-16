// 配置文件
module.exports = {
  serverPort: 3030, // 服务端口
  mongoPort: 27040, // mongodb端口
  jwtSecret: 'seller-secret', // 连接端口

  imagePath: `http://${getIp()}:3030`
  // imagePath: `http://116.62.147.91:3030`
}

function getIp() {
  let os = require('os'),
    ipStr,
    infaces = os.networkInterfaces(),
    bool = false;
  for (let i in infaces) {
    infaces[i].some(function (x) {
      if ((x.family == 'IPv4') && (x.internal == false)) {
        ipStr = x.address;
        bool = true;
        return true
      }
    })
    if (bool) {
      break
    }
  }
  return ipStr
}