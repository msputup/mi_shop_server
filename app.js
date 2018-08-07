const Koa = require('koa'),
      router = require('koa-router')(),
      bodyParser = require('koa-bodyparser')

const app = new Koa();

const home = require('./routes/home')
const search = require('./routes/search')
const product = require('./routes/product')
const comment = require('./routes/comment')
const channel = require('./routes/channel')
const category = require('./routes/category')
const cart = require('./routes/cart')
const activity = require('./routes/activity')

router.use('/home',home)
router.use('/search',search)
router.use('/product',product)
router.use('/comment',comment)
router.use('/channel',channel)
router.use('/category',category)
router.use('/cart',cart)
router.use('/activity',activity)

app.use(bodyParser())
app.use(router.routes()).use(router.allowedMethods())

app.listen(8989,()=>{
      console.log('ojbk')
});