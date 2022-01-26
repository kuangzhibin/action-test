/* eslint-disable no-console */
const axios = require('axios');
const pushMsg = require('./pushPlus.js');

const url = 'https://devapi.qweather.com/v7/weather/now'
const location = 101020100 // 101020100 上海
const key = process.env.HEWEATHER_KEY;
axios.get(url, {
  params: {
    location,
    key
  }
}).then(res => {
  console.log(res.data)
  let {fxLink, now} = res.data;
  let {text, temp, feelsLike, windDir, windScale} = now;
  // 101020100 上海
  pushMsg('实时天气-上海',
  `天气：${text}
气温：${temp}℃\t\t体感温度：${feelsLike}℃
风向：${windDir}\t\t风力：${windScale}级

详细信息： <a href="${fxLink}" target="_blank">${fxLink}</a> `);
}).catch(() => {
  console.log('天气查询失败！')
})
