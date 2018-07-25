const KoaRouter = require('koa-router');
const Router = new KoaRouter();

Router.get('/',async(ctx)=>{
    ctx.body ='user'
})

Router.post('/register',async(ctx)=>{
    console.log(ctx.request.body);
    ctx.body =ctx.request.body
})

module.exports = Router;
