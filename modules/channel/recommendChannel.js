const request = require('../../utils/requestPromise')

// Channel？ 大广告页？

module.exports = (id) =>{

  let url = 'https://m.mi.com/v1/home/recommendChannel'
  
  let form = {
    'client_id':'180100031051',
    'channel_id':'0',
    'webp':'1',
    'id':id
  }
  return request.postHanddle(url,form)
}