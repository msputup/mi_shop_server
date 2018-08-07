const request = require('../../utils/requestPromise')

// 搜索页主页

module.exports = () =>{

  let url = 'https://m.mi.com/v1/search/search_default'
  
  let form = {
    'client_id':'180100031051',
    'channel_id':'0',
    'webp':'1',
  }
  return request.postHanddle(url,form)
}