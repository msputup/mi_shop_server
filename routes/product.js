var router = require('koa-router')();

// 商品路由

//productview commodity_id 商品页详情
//recommend commodity_id 商品页评论数据

const getProductView = require('../modules/product/productView')
const getRecommend = require('../modules/product/recommend')

const back = require('../utils/back')

router.post('/productview',async ctx => {
  let commodity_id = ctx.request.body.commodity_id
  let res = await getProductView(commodity_id)
  back(ctx,res)
})

router.post('/recommend',async ctx => {
  let commodity_id = ctx.request.body.commodity_id
  let res = await getRecommend(commodity_id)
  back(ctx,res)
})

module.exports = router.routes();