var router = require('koa-router')();

// 主页路由

//homeNav 无参数
//PageData page_id,page_type

const getHomeNav = require('../modules/home/homeNav')
const getPageData = require('../modules/home/pageContent')

const back = require('../utils/back')

router.post('/homeNav',async ctx => {
  let res = await getHomeNav();
  back(ctx,res)
})

router.post('/PageData',async ctx => {
  let page_id = ctx.request.body.page_id
  let page_type = ctx.request.body.page_type
  let res = await getPageData(page_id,page_type)
  back(ctx,res)
})

module.exports = router.routes();