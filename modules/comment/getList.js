const request = require('../../utils/requestPromise')

// 商品评论列表

module.exports = (commodity_id,page_index,orderby,showimg) =>{

  let url = 'https://m.mi.com/v1/product/productView2_new'
  
  let form = {
    'client_id':'180100031051',
    'channel_id':'0',
    'webp':'1',
    'commodity_id':commodity_id,
    'page_index':page_index,
    'orderby':orderby,
    'page_size':'10',
    'showimg':showimg,
    'need_detail':true,
    'append':'0'
  }
  return request.postHanddle(url,form)
}