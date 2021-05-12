const axios = require('axios');

module.exports = function pushMsg() {
  const token = 'b1aa0c343c4c4164824704c4653a5ee5';
  let title = "掘金创作者中心上线啦！！"
  let content = `在这里你可以即时看到粉丝的增长；

  也可以即时感受到文章阅读量的提升；

  在这里你可以整理自己的文章并创建专栏；

  也可以在第一时间获知官方最新活动！

  你需要的创作可视化数据都在这里，快点击这里（web端）体验吧！`

  // http://www.pushplus.plus/send?token=b1aa0c343c4c4164824704c4653a5ee5&title=XXX&content=XXX&template=html
  axios.get('http://www.pushplus.plus/send', {
    params: {
      token,
      title,
      content
    }
  }).then((res) => {
    // eslint-disable-next-line no-console
    console.log(res.data)
  }).catch(() => {
    // eslint-disable-next-line no-console
    console.log('发送失败')
  })
}
