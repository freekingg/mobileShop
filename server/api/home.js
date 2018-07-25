const Koa = require('koa');
const KoaRouter = require('koa-router');
const Router = new KoaRouter();

Router.get('/',async (ctx)=>{
    ctx.body = 'home'
})


module.exports = Router;
