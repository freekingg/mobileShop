<template>
  <div>
    <!-- 搜索条 -->
    <div class="search-bar">
      <van-row>
        <van-col span='3' class="location-icon"><i class="iconfont icon-dingwei"></i></van-col>
        <van-col span='16'><input type="text" class="search-input"></van-col>
        <van-col span='5' class="search-btn"><van-button size="small">查找</van-button></van-col>
      </van-row>
    </div>
    <!-- swipe -->
    <div class="swipe-area">
      <van-swipe :autoplay="3000">
        <van-swipe-item
          v-for="(image, index) in bannerPicArray" 
          :key="index"
          >
          <img v-lazy="image.image" />
         </van-swipe-item>
      </van-swipe>
    </div>
    <!-- type-bar -->
    <div class="type-bar">
        <div  v-for="(cate,index) in category" :key="index" >
                <img v-lazy="cate.image" width="90%" />
                <span>{{cate.mallCategoryName}}</span> 
        </div>
    </div>
    <!--AD banner area-->
    <div class="ad-banner">
        <img v-lazy="adBanner.PICTURE_ADDRESS" width="100%">
    </div>
  <!--Recommend goods area-->
  <div class="recommend-area">
      <div class="recommend-title">
          商品推荐
      </div>
      <div class="recommend-body">
        <!--swiper-->
        <swiper :options="swiperOption">
            <swiper-slide v-for=" (item ,index) in recommendGoods" :key="index">
                <div class="recommend-item">
                        <img :src="item.image" width="80%" />
                        <div>{{item.goodsName}}</div>
                        <div>￥{{item.price}} (￥{{item.mallPrice}})</div>
                </div>
            </swiper-slide>
        </swiper>
      </div>
  </div>
  <!-- floor -->
<div class="floor">
  <div class="recommend-title">
          商品推荐
      </div>
    <div class="floor-anomaly">
        <div class="floor-one"><img :src="floor1_0.image" width="100%" /></div>
        <div>
            <div class="floor-two"><img :src="floor1_1.image" width="100%" /></div>
            <div><img :src="floor1_2.image" width="100%" /></div>
        </div>
    </div>
    <div class="floor-rule">
        <div v-for="(item ,index) in floor1.slice(3)" :key="index">
            <img :src="item.image" width="100%"/>
        </div>
    </div>
    </div>
 


  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
 
import { swiper, swiperSlide } from 'vue-awesome-swiper'
 
  export default {
    data() {
      return {
        // 轮播图数据
        bannerPicArray:[],
        // 分类数据
        category:[],
        // 广告图片
        adBanner:'',
        //推荐商品
        recommendGoods:[],
        // swiperOption
        swiperOption:{
          slidesPerView:3
        },
        // 1楼
        floor1:[],
        floor1_0:'',
        floor1_1:'',
        floor1_2:'',
      }
    },
    created(){
      // 首页模拟数据
      this.axios.get('https://easy-mock.com/mock/5b559f6f4ff1f856c44c67ec/index')
      .then(response=> {
        console.log(response);
         if(response.status==200){
            // 分类数据
            this.category=response.data.data.category;
            //获得广告图片
            this.adBanner = response.data.data.advertesPicture 
            //轮播图片
            this.bannerPicArray = response.data.data.slides  
            //推荐商品
            this.recommendGoods = response.data.data.recommend
            //楼层1数据
            this.floor1 = response.data.data.floor1
            this.floor1_0 =this.floor1[0]
            this.floor1_1 =this.floor1[1]
            this.floor1_2 =this.floor1[2]

        }
      })
      .catch(function (error) {
         console.log(error);
      })
    },
    components: {
      swiper,
      swiperSlide
   }
  }
</script>

<style scoped>
  /* iconfont font-class */
  @import '//at.alicdn.com/t/font_759501_xb6qhglu0ka.css';

  @import '../assets/css/shoppingMall.css';
  
</style>