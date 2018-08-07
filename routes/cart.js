var router = require('koa-router')();

// 购物车页路由

//index 无参数  购物车页
//recommentBlank 无参数 购物车为你推荐

const getCart = require('../modules/cart/index')
const getRecommentBlank = require('../modules/cart/recommentBlank')

const back = require('../utils/back')

router.post('/index',async ctx => {
  let res = await getCart();
  back(ctx,res)
})

router.post('/recommentBlank',async ctx => {
  let res = await getRecommentBlank()
  back(ctx,res)
})

module.exports = router.routes();