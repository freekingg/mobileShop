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
    <van-tabs v-model="active"  @click="getGoodsListByCategorySubId(1)">
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
        <div class="list-item" v-for="item in list" :key="item">
            {{item}}
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
      category: [],//大分类
      categoryIndex: 0,
      categorySub: [],//小分类
      getCategorySubId:'',//小分类ID
      active: 0,
      list:[],
      goodsList: [],//商品数据
      page:1,//当前页数
      loading: false, //上拉加载
      finished: false, //上拉加载是否没有数据了
      isRefresh:false//下载刷新
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
      this.getCategorySubId = this.categorySub[0].ID
      //点击大类。将子分类第一个ID赋值
      this.getGoodsListByCategorySubId(this.getCategorySubId)
    },
    getGoodsListByCategorySubId(getCategorySubId,page){
      this.axios({
        method:'post',
        url:'http://localhost:3000/goods/getGoodsListByCategorySubId',
        data:{
          getCategorySubId:this.getCategorySubId,
          page:this.page
        }
      })
      .then((result) => {
        console.log('result :', result);
      }).catch((err) => {
        console.log('err :', err);
      });
    },
    // 上拉加载
    onLoad() {
      
    },
    // 下载刷新
    onRefresh(){
    setTimeout(() => {
        this.isRefresh = false;
        this.finished = false;
        this.list=[];
        this.onLoad()
    }, 500);
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
.list-item {
  text-align: center;
  line-height: 80px;
  border-bottom: 1px solid #f0f0f0;
  background-color: #fff;
}
#list-div {
  overflow: scroll;
}
</style>