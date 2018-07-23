<template>
  <div>
    <!-- 搜索条 -->
    <div class="search-bar">
      <van-row>
        <van-col span='3' class="location-icon"><i class="iconfont icon-dingwei"></i></van-col>
        <van-col span='16'><input type="text" class="search-input"></van-col>
        <van-col span='5'><van-button size="small">查找</van-button></van-col>
      </van-row>
    </div>
    <!-- swipe -->
    <div class="swipe-area">
      <van-swipe :autoplay="3000">
        <van-swipe-item
          v-for="(image, index) in bannerPicArray" 
          :key="index"
          >
          <img v-lazy="image.imageUrl" />
         </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
  

  export default {
    data() {
      return {
        // 轮播图数据
        bannerPicArray:[
                {imageUrl:'http://7xjyw1.com1.z0.glb.clouddn.com/simleVueDemoPic001.jpg'},
                {imageUrl:'http://7xjyw1.com1.z0.glb.clouddn.com/simleVueDemoPic002.jpg'},
                {imageUrl:'http://7xjyw1.com1.z0.glb.clouddn.com/simleVueDemoPic003.jpg'},
            ]
      }
    },
    created(){
      // 首页模拟数据
      this.axios.get('https://easy-mock.com/mock/5b559f6f4ff1f856c44c67ec/index', {
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
         console.log(error);
      })
    }
  }
</script>

<style scoped>
  /* iconfont font-class */
  @import '//at.alicdn.com/t/font_759501_xb6qhglu0ka.css';

  .search-bar{
    height: 2.2rem /* 165/75 */;
    background: #e5017d;  
    line-height: 2.2rem /* 165/75 */;
    overflow: hidden;
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
  .swipe-area{
    clear: both;
    max-height: 6.666667rem; /* 500/75 */
    overflow: hidden;
  }
  .swipe-area img{
    display: block;
    width: 100%
  }
</style>