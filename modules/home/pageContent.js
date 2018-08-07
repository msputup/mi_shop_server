const request = require('../../utils/requestPromise')

// 获取首页nav对应content数据

module.exports = (page_id,page_type) =>{

  let url = 'https://m.mi.com/v1/home/page'
  
  let form = {
    'client_id':'180100031051',
    'channel_id':'0',
    'webp':'1',
    'page_type':page_type,
    'page_id':page_id
  }
  return request.postHanddle(url,form)
}