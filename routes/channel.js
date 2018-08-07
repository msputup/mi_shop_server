var router = require('koa-router')();

// channel页？大广告？路由

//recommendChannel id channel单页

const getChannel = require('../modules/channel/recommendChannel')

const back = require('../utils/back')

router.post('/recommendChannel',async ctx => {
  let id = ctx.request.body.id
  let res = await getCommentView(id)
  back(ctx,res)
})

module.exports = router.routes();