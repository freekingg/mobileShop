<template>
    <div>
        <div class="navbar-div">
             <van-nav-bar   title="类别列表" /> 
        </div>
        <div>
    <van-row>
        <van-col span="6">
            <div id="leftNav">
                <ul>
                    <li @click="clickCategory(index,item.ID)" :class="{categoryActive:categoryIndex == index}" v-for="(item,index) in category" :key="index">
                        {{ item.MALL_CATEGORY_NAME }}
                    </li>
                </ul>
            </div>
        </van-col>
        <van-col span="18">
            <div class="tabCategorySub">
    <van-tabs v-model="active"  @click="onClickCategorySub">
        <van-tab v-for="(item, index) in categorySub" :key="index" :title="item.MALL_SUB_NAME">
        </van-tab>
    </van-tabs>
    <div id="list-div">
            <van-pull-refresh v-model="isRefresh" @refresh="onRefresh">
    <van-list
        v-model="loading"
        :finished="finished"
        @load="onLoad"
        >
        <div class="list-item" @click="goGoodsInfo(item.ID)" v-for="(item,index) in goodsList" :key="index">
            <div class="list-item-img"><img :src="item.IMAGE1" width="100%" :onerror="errorImg" /></div>
            <div class="list-item-text">
                <div>{{item.NAME}}</div>
                <div class="">￥{{item.ORI_PRICE}}</div>
            </div>
        </div>
    </van-list>
        </van-pull-refresh>
</div>
</div>
        </van-col>
    </van-row>
</div>
    </div>
    
</template>

<script>
export default {
  data() {
    return {
      category: [], //大分类
      categoryIndex: 0,
      categorySub: [], //小分类
      getCategorySubId: "", //小分类ID
      active: 0,
      goodsList: [], //商品数据
      page: 1, //当前页数
      loading: false, //上拉加载
      finished: false, //上拉加载是否没有数据了
      isRefresh: false, //下载刷新
      errorImg: 'this.src="' + require("@/assets/img/errorimg.png") + '"' //错误图片显示路径
    };
  },
  methods: {
    // 获取大类
    getCategory() {
      this.axios({
        method: "get",
        url: "http://localhost:3000/goods/getCategory"
      })
        .then(result => {
          if (result.data.code == 0) {
            this.category = result.data.data;
            this.getCategorySub(this.category[0].ID); //打开页面。默认显示分类1
            this.getGoodsListByCategorySubId();
          }
        })
        .catch(err => {
          console.log("err :", err);
        });
    },
    // 获取小类
    getCategorySub(categoryId) {
      this.axios({
        method: "get",
        url: "http://localhost:3000/goods/getCategorySub",
        params: {
          categoryId: categoryId
        }
      })
        .then(result => {
          if (result.data.code == 0) {
            this.categorySub = result.data.data;
          }
        })
        .catch(err => {
          console.log("err :", err);
        });
    },
    // 点击大类的方法
    clickCategory(index, categoryId) {
      this.categoryIndex = index;
      this.getCategorySub(categoryId);
      this.getCategorySubId = this.categorySub[0].ID;
      //点击大类。将子分类第一个ID赋值

      this.categoryIndex = index;
      this.page = 1;
      this.finished = false;
      this.goodsList = [];
      this.getGoodsListByCategorySubId(this.getCategorySubId);
      this.onLoad();
    },
    //点击子类获取商品信息
    onClickCategorySub(index, title) {
      this.categorySubId = this.categorySub[index].ID;
      this.goodsList = [];
      this.finished = false;
      this.page = 1;
      this.onLoad();
    },
    getGoodsListByCategorySubId() {
      this.axios({
        method: "post",
        url: "http://localhost:3000/goods/getGoodsListByCategorySubId",
        data: {
          getCategorySubId: this.getCategorySubId,
          page: this.page
        }
      })
        .then(result => {
          console.log("result :", result);
          this.page++;
          this.goodsList = this.goodsList.concat(result.data.data);
          this.loading = false;
        })
        .catch(err => {
          console.log("err :", err);
        });
    },
    // 上拉加载
    onLoad() {
      // setTimeout(() => {
      //   this.getCategorySubId = this.getCategorySubId
      //     ? this.getCategorySubId
      //     : this.categorySub[0].ID;
      //   this.getGoodsListByCategorySubId();
      // }, 1000);
    },
    // 下载刷新
    onRefresh() {
      setTimeout(() => {
        this.isRefresh = false;
        this.finished = false;
        this.list = [];
        this.onLoad();
      }, 500);
    },
    //跳转到商品详细页
    goGoodsInfo(id) {
      console.log("id :", id);
      this.$router.push({ name: "GoodDetail", query: { goodsId: id } });
    }
  },
  created() {
    this.getCategory();
  },
  mounted() {
    let winHeight = document.documentElement.clientHeight;
    document.getElementById("leftNav").style.height = winHeight - 46 + "px";
    document.getElementById("list-div").style.height = winHeight - 90 + "px";
  }
};
</script>

<style scoped>
#leftNav ul li {
  line-height: 40px;
  border-bottom: 1px solid #e4e7ed;
  padding: 3px;
  font-size: 14px;
  text-align: center;
}
.categoryActive {
  background-color: #f0f;
}
#list-div {
  overflow: scroll;
}
.list-item {
  display: flex;
  flex-direction: row;
  font-size: 0.8rem;
  border-bottom: 1px solid #f0f0f0;
  background-color: #fff;
  padding: 5px;
}
.list-item-img {
  flex: 8;
}
.list-item-text {
  flex: 16;
  margin-top: 10px;
  margin-left: 10px;
  font-size: 14px;
}
</style>