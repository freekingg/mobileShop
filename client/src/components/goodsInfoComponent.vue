<template>
    <div class="goods-info">
        <div class="goods-image">
            <img v-lazy="goodsImage" width="90%" />
        </div>
        <div class="goods-name">{{goodsName}}</div>
        <div class="goods-price">￥{{goodsPrice}}</div>
    </div>
</template>

<script>
    export default {
         props:['goodsImage','goodsName','goodsPrice']
    }
</script>

<style scoped>
 .goods-name{
        padding: 0 8px;
       overflow: hidden;
       text-overflow: ellipsis;
       white-space:nowrap; 
    }
</style>