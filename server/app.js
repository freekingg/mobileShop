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
    // UserModel.create({userName:'wp0214',passWord:'wangpeng'}).then((doc)=>{
    //     console.log(doc);
    // })
})
// 路由分发
router.use('/',require('./api/home').routes())
router.use('/user',require('./api/user').routes())

//加载路由中间件
app.use(router.routes()); 
app.use(router.allowedMethods());  

// 监听端口
app.listen(3000,function(){
    console.log('server run ok');
})