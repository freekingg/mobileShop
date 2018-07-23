<template>
  <div>
    <!-- 搜索条 -->
    <div class="search-bar">
      <van-row>
        <van-col span='3' class="location-icon"><i class="iconfont icon-dingwei"></i></van-col>
        <van-col span='16'><input type="text" class="search-input"></van-col>
        <van-col span='5'><van-button size="mini">查找</van-button></van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
  

  export default {
    data() {
      return {

      }
    },
  }
</script>

<style scoped>
  /* iconfont font-class */
  @import '//at.alicdn.com/t/font_759501_xb6qhglu0ka.css';

  .search-bar{
    height: 2.2rem /* 165/75 */;
    background: #e5017d;  
    line-height: 2.2rem /* 165/75 */;
  }
  .location-icon{
    text-align: center;
  }
  .icon-dingwei{
    color: #fff;
    font-size: .533333rem /* 40/75 */;

  }
  .search-input{
    width: 100%;
    height: 1.3rem /* 97.5/75 */;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid #fff !important;
    background: #e5017d;
    color: #fff;
  }
</style>