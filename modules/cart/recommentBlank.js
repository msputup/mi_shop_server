const request = require('../../utils/requestPromise')

// 购物车为你推荐

module.exports = () =>{

  let url = 'https://m.mi.com/v1/home/recommendBlank'
  
  let form = {
    'client_id':'180100031051',
    'channel_id':'0',
    'webp':'1',
    'source':'list',
    'recommend_tag':'XMGUEST-95966CC0-984C-11E8-A624-0969FDADFC7B'
  }
  return request.postHanddle(url,form)
}