<template>
<div>
    <div class="navbar-div">
        <van-nav-bar
            title="商品详情"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        />
    </div>
    <div class="topimage-div">
        <img :src="goodsInfo.IMAGE1" width="100%"/>
    </div>
    <div class="goods-name">{{goodsInfo.NAME}}</div>
    <div class="goods-price">价格：{{goodsInfo.PRESENT_PRICE}}</div>
    <div>
        <van-tabs >
        <van-tab title="商品详情">
          <div class="detail" v-html="goodsInfo.DETAIL">
             
          </div>
        </van-tab>
        <van-tab title="评价">
            正在制作中
        </van-tab>
        </van-tabs>

    </div>
    <div class="goods-bottom">
    
    <div>
            <van-button size="large" type="primary">加入购物车</van-button>
    </div>
    <div>
            <van-button size="large" type="danger">直接购买</van-button>
    </div>
    
</div>
</div>
</template>

<script>
    export default {
        data(){
            return {
                goodsId:'',
                goodsInfo:{},   //商品详细数据
            }
        },
        methods:{
            onClickLeft(){
                this.$router.go(-1)
            }
        },
        created() {
            // 获取路由信息中的query参数
            this.goodsId = this.$route.query.goodsId
            // 通过商品id查询商品信息
            this.axios({
                method:'get',
                url:'http://192.168.1.103:3000/goods/getDetails',
                params:{
                    goodsId:this.goodsId
                }
            })
            .then((result) => {
                console.log(result);
                this.goodsInfo = result.data
            })
            .catch((err) => {
                console.log(err);
            });
        },
    }
</script>

<style scoped>
 .detail{
     font-size:0px;
    }
    .goods-name{
        background-color: #fff;
    }
    .goods-price{
        background-color: #fff;
    }
    .goods-bottom{
    position: fixed;
    bottom:0px;
    left:0px;
    background-color: #FFF;
    width:100%;

    display: flex;
    flex-direction: row;
    flex-flow: nowrap;
}
.goods-bottom >div{
    flex:1;
    padding:5px;
}

</style>