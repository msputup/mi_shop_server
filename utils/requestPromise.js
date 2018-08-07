var rp = require('request-promise')
    rp = rp.defaults({
      method:'POST',
      headers: {
        'Referer': 'https://m.mi.com/'
      },
      json: true
    })

exports.postHanddle = (url,form) => {
  let opt = {
    url: url,
    form: form,
  }
  return rp(opt).then(data => {
    return {
      status:'ok',
      data
    }
  })
  .catch(err=>{
    return {
      status:'error',
      err
    }
  })  
}
