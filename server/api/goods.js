const KoaRouter = require('koa-router');
const Router = new KoaRouter()

const GoodsModel = require('../model/Good');
const CategoryModel = require('../model/Category');
const CategorySubModel = require('../model/CategorySub');

//***获取商品详细信息的接口
Router.get('/getDetails',async(ctx)=>{
    var goodsId = ctx.query.goodsId
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
// 获取分类大类
Router.get('/getCategory',async(ctx)=>{
    await CategoryModel.find({}).then((data) => {
        ctx.body = {code:0,data}
    })
})

// 获取小类
Router.get('/getCategorySub',async(ctx)=>{
    var categoryId = ctx.request.query.categoryId
    await CategorySubModel.find({MALL_CATEGORY_ID:categoryId}).then((data) => {
        ctx.body = {code:0,data}
    })
})

// 根据分类获取商品列表数据
Router.post('/getGoodsListByCategorySubId',async(ctx)=>{
    var getCategorySubId = ctx.request.body.getCategorySubId //子分类ID
    var page = ctx.request.body.page //当前页数
    var number = 10 //每页显示数量
    var start = (page-1)*number //开始位置

    await GoodsModel.find({SUB_ID:getCategorySubId}).skip(start).limit(number).then((data) => {
        ctx.body={code:0,data}
    })

})


module.exports = Router;