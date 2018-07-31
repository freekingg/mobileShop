import Vue from 'vue'
import Router from 'vue-router'

import ShoppingMall from '@/views/ShoppingMall'
import Register from '@/views/Register'
import Login from '@/views/Login'
import GoodDetail from '@/views/goodDetail'

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
      path:'/detail',
      name:'GoodDetail',
      component:GoodDetail
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})


