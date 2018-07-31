const Koa = require('koa');
const app = new Koa()
const cors = require('koa2-cors');
const mongoose = require('mongoose');
var bodyParser = require('koa-bodyparser');
const dbOptions = require('./db/config');
const koaRouter = require('koa-router');
let router = new koaRouter();

app.use(cors())
app.use(bodyParser());

const UserModel = require('./model/User');

// 连接数据库
mongoose.connect(dbOptions.url,dbOptions.options)
const db = mongoose.connection;
// 监听数据库连接状态
db.on('error',function(err){
    console.log('db connection fail')
})
db.on('open',function(){
    console.log('db connection sucess');
})

/* 插入商品详情数据 */
// var insertGood = require('./data_json/insertGoods');
// insertGood()
/* 插入分类数据 */
// var insertCategory = require('./data_json/insertCategory');
// insertCategory()
/* 插入子分类数据 */
// var insertCategorySub = require('./data_json/insertCategorySub');
// insertCategorySub()

// 路由分发
router.use('/goods',require('./api/goods').routes())
router.use('/user',require('./api/user').routes())
router.use('/',require('./api/home').routes())

//加载路由中间件
app.use(router.routes()); 
app.use(router.allowedMethods());  

// 监听端口
app.listen(3000,function(){
    console.log('server run ok');
})