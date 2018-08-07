var router = require('koa-router')();

// 评论路由

//productview commodity_id,page_index,orderby,showimg 商品评论列表
//recommend commodity_id 商品评论单页

const getCommentList = require('../modules/comment/getList')
const getCommentView = require('../modules/comment/view')

const back = require('../utils/back')

router.post('/productview',async ctx => {
  let commodity_id = ctx.request.body.commodity_id
  let page_index = ctx.request.body.page_index
  let orderby = ctx.request.body.orderby
  let showimg = ctx.request.body.showimg
  let res = await getCommentList(commodity_id,page_index,orderby,showimg)
  back(ctx,res)
})

router.post('/recommend',async ctx => {
  let commodity_id = ctx.request.body.commodity_id
  let res = await getCommentView(commodity_id)
  back(ctx,res)
})

module.exports = router.routes();