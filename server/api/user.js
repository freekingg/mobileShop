const KoaRouter = require('koa-router');
const Router = new KoaRouter();

const UserModel = require('../model/User');

/* 注册 */
Router.post('/register',async(ctx)=>{
    // 检测数据库是否存在相册用户名
    await UserModel.find({userName:ctx.request.body.userName}).then(data=>{
        if(data.length>0){
            ctx.body ={
                code:1,
                message:'用户名已被占用'
            }
            return
        }
    })

    // 将注册信息保存数据库
   await UserModel.create({
        userName:ctx.request.body.userName,passWord:ctx.request.body.passWord
    }).then(doc=>{
        ctx.body ={
            code:0,
            message:'注册成功'
        }
    }).catch(error=>{
        console.log(error);
    })
})

/* 登录 */
Router.post('/login',async(ctx)=>{
    // 检测数据库是否存在用户名
    await UserModel.find({userName:ctx.request.body.userName}).then(data=>{
        if(data.length==0){
            ctx.body = {
                code:1,
                message:'用户名不存在'
            }
        }else if(data.length>0 && ctx.request.body.passWord == data[0].passWord ){
            ctx.body = {
                code:0,
                message:'登录成功'
            }
        }
    })
})

module.exports = Router;
