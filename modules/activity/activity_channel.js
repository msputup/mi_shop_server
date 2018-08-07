const request = require('../../utils/requestPromise')

// 活动页

module.exports = (page_id) =>{

  let url = 'https://m.mi.com/v1/product/recommend'
  
  let form = {
    'client_id':'180100031051',
    'channel_id':'0',
    'webp':'1',
    'page_id':page_id
  }
  return request.postHanddle(url,form)
}