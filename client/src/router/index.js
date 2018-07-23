import Vue from 'vue'
import Router from 'vue-router'

// 视图组件
import ShoppingMall from '@/components/ShoppingMall'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'ShoppingMall',
      component: ShoppingMall
    }
  ]
})
