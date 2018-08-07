var router = require('koa-router')();

// 搜索路由

//index 无参数  这是搜索页点击后
//wordlist query  这是输入后自动查询
//searchlist query 这是输入后点击查询（回车）

const getSearchIndex = require('../modules/search/searchIndex')
const getSearchWordList = require('../modules/search/wordList')
const getSearchList = require('../modules/search/se_home')

const back = require('../utils/back')

router.post('/index',async ctx => {
  let res = await getSearchIndex();
  back(ctx,res)
})

router.post('/wordlist',async ctx => {
  let query = ctx.request.body.query
  let res = await getSearchWordList(query)
  back(ctx,res)
})

router.post('/searchlist',async ctx => {
  let query = ctx.request.body.query
  let res = await getSearchList(query)
  back(ctx,res)
})

module.exports = router.routes();