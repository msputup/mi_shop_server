const request = require('../../utils/requestPromise')

// 购物车页

module.exports = () =>{

  let url = 'https://m.mi.com/v1/cart/index'
  
  let form = {
    'client_id':'180100031051',
    'channel_id':'0',
    'webp':'1',
  }
  return request.postHanddle(url,form)
}