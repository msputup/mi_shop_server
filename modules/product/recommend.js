const request = require('../../utils/requestPromise')

// 商品页为你推荐

module.exports = (commodity_id) =>{

  let url = 'https://m.mi.com/v1/product/recommend'
  
  let form = {
    'client_id':'180100031051',
    'channel_id':'0',
    'webp':'1',
    'commodity_id':commodity_id
  }
  return request.postHanddle(url,form)
}