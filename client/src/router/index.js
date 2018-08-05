import Vue from 'vue'
import Router from 'vue-router'

import ShoppingMall from '@/views/ShoppingMall'//首页
import Register from '@/views/Register'//注册页面
import Login from '@/views/Login'//登陆页面
import GoodDetail from '@/views/goodDetail'//商品详情页
import CategoryList from '@/views/CategoryList'//分类页面

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
      path:'/categoryList',
      name:'CategoryList',
      component:CategoryList
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


