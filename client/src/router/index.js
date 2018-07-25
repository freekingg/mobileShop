import Vue from 'vue'
import Router from 'vue-router'

import ShoppingMall from '@/views/ShoppingMall'

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


