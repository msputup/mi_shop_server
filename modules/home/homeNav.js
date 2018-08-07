const request = require('../../utils/requestPromise')

// 获取首页nav_tabs数据

module.exports = () =>{

  let url = 'https://m.mi.com/v1/home/page'
  
  let form = {
    'client_id':'180100031051',
    'channel_id':'0',
    'webp':'1',
    'page_type':'recommend',
    'recommend_tag':'XMGUEST-95966CC0-984C-11E8-A624-0969FDADFC7B'
  }
  return request.postHanddle(url,form)
}