const KoaRouter = require('koa-router');
const Router = new KoaRouter();

const UserModel = require('../model/User');

Router.get('/',async(ctx)=>{
    ctx.body ='user'
})

Router.post('/register',async(ctx)=>{
    UserModel.create({
        userName:ctx.request.body.userName,passWord:ctx.request.body.passWord
    }).then(doc=>{
        console.log(doc);
        ctx.body =ctx.request.body
    }).catch(error=>{
        console.log(error);
    })
   
})

module.exports = Router;
