var router = require('koa-router')();

// 分类页路由

//category 无参数 获取分类页数据

const getCategory = require('../modules/category/category')

const back = require('../utils/back')

router.post('/category',async ctx => {
  let res = await getCategory()
  back(ctx,res)
})

module.exports = router.routes();