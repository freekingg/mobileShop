import Vue from 'vue'
import Router from 'vue-router'

import ShoppingMall from '@/views/ShoppingMall'
import Register from '@/views/Register'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'ShoppingMall',
      component: ShoppingMall
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})


