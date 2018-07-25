const Koa = require('koa');
const app = new Koa()
const mongoose = require('mongoose');
const dbOptions = require('./db/config');

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
    UserModel.create({userName:'wp0214',passWord:'wangpeng'}).then((doc)=>{
        console.log(doc);
    })
})

app.use(async (ctx)=>{
    ctx.body = 'koa'
})

// 监听端口
app.listen(3000,function(){
    console.log('server run ok');
})