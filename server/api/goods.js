const KoaRouter = require('koa-router');
const Router = new KoaRouter()

const GoodsModel = require('../model/Good');
//***获取商品详细信息的接口
Router.get('/getDetails',async(ctx)=>{
    var goodsId = ctx.query.goodsId
    console.log(goodsId);
    // var goodsId = ctx.request.body.goodsId
    await GoodsModel.find({ID:goodsId}).then((data) => {
        if(data.length){
            ctx.body = data[0]
        }else{
            ctx.body = {
                code:1,
                message:"获取失败"
            }
        }
    })
})

module.exports = Router;