
/* eslint-disable no-console */
const axios = require('axios');

module.exports = function pushMsg(title="标题", content="正文内容") {
  const serverUrl = 'http://www.pushplus.plus/send'
  const token = process.env.PUSHPLUS_TOKEN;
  axios.get(serverUrl, {
    params: {
      token,
      title,
      content
    }
  }).then((res) => {
    console.log(res.data)
  }).catch(() => {
    console.log('发送失败')
  })
}
