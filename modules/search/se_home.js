const request = require('../../utils/requestPromise')

// 搜索页搜索关键字点击后

module.exports = (query) =>{

  let url = 'https://m.mi.com/v1/hisearch/se_home'
  
  let form = {
    'client_id':'180100031051',
    'channel_id':'0',
    'webp':'1',
    'query':query,
    'page_index':'1',
    'page_size':'20'
  }
  return request.postHanddle(url,form)
}