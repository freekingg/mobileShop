// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import 'lib-flexible'

// axios引入并挂载Vue原型
import axios from 'axios'
Vue.prototype.axios = axios;

Vue.config.productionTip = false

// vant组件
import {
  Button,
  Row,
  Col,
  Swipe, 
  SwipeItem,
  Lazyload,
  List,
  Field,
  NavBar,
  Toast,
  Loading,
  Tab,Tabs ,PullRefresh
} from 'vant'
Vue.use(Button)
  .use(Row)
  .use(Col)
  .use(Swipe)
  .use(SwipeItem)
  .use(Lazyload)
  .use(List)
  .use(Field)
  .use(NavBar)
  .use(Toast)
  .use(Loading)
  .use(Tab)
  .use(Tabs)
  .use(PullRefresh);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  data:{'name':111},
  components: {
    App
  },
  template: '<App/>'
})
