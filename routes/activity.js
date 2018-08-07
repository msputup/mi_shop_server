var router = require('koa-router')();

// activity页路由

//index page_id activity活动页

const getActivity = require('../modules/activity/activity_channel')

const back = require('../utils/back')

router.post('/index',async ctx => {
  let page_id = ctx.request.body.page_id
  let res = await getActivity(page_id)
  back(ctx,res)
})

module.exports = router.routes();