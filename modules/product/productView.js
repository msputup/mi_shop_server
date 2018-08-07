const request = require('../../utils/requestPromise')

// 商品页

module.exports = (commodity_id) =>{

  let url = 'https://m.mi.com/v1/product/productView2_new'
  
  let form = {
    'client_id':'180100031051',
    'channel_id':'0',
    'webp':'1',
    'commodity_id':commodity_id,
    'width':'720'
  }
  return request.postHanddle(url,form)
}