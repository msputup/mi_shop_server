const request = require('../../utils/requestPromise')

// 搜索页wordlist

module.exports = (query) =>{

  let url = 'https://m.mi.com/v1/search/wordList'
  
  let form = {
    'client_id':'180100031051',
    'channel_id':'0',
    'webp':'1',
    'query':query
  }
  return request.postHanddle(url,form)
}