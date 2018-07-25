<template>
    <div class="floor">
        <div class="floor-title">
                <span>{{ floorNum }}F</span> {{ floorName }}
            </div>
            <div class="floor-anomaly">
                <div class="floor-one"><img :src="floor1_0.image" width="100%" /></div>
                <div>
                    <div class="floor-two"><img :src="floor1_1.image" width="100%" /></div>
                    <div><img :src="floor1_2.image" width="100%" /></div>
                </div>
            </div>
            <div class="floor-rule">
                <div v-for="(item ,index) in floorData.slice(3)" :key="index">
                    <img :src="item.image" width="100%"/>
                </div>
            </div>
    </div>
</template>

<script>
export default {
  // 接受父组件数据
  props: ["floorData","floorName",'floorNum'],
  data() {
    return {
      floor1_0: {},
      floor1_1: {},
      floor1_2: {}
    };
  },
  watch: {
    floorData(val) {
      this.floor1_0 = this.floorData[0];
      this.floor1_1 = this.floorData[1];
      this.floor1_2 = this.floorData[2];
    }
  }
};
</script>

<style scoped>
img{ pointer-events: none}
.floor-anomaly {
  display: flex;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
}

.floor-anomaly div {
  /* width:10rem; */
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
}

.floor-one {
  border-right: 1px solid #ddd;
}

.floor-two {
  border-bottom: 1px solid #ddd;
}

.floor-rule {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #fff;
}

.floor-rule div {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 50%;
  border-bottom: 1px solid #ddd;
}

.floor-rule div:nth-child(odd) {
  border-right: 1px solid #ddd;
}

.floor-title {
  background: #efefef;
  line-height: 0.88rem;
  /* 66/75 */
  text-align: center;
  vertical-align: middle;
  color: #d54312;
}

.floor-title span {
  display: inline-block;
  border-radius: 50%;
  color: #fff;
  background: #d54312;
  width: 0.613333rem;
  /* 46/75 */
  height: 0.613333rem;
  /* 30/75 */
  vertical-align: middle;
  line-height: 0.613333rem;
  text-align: center;
}
</style>