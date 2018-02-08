import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

import Home from '@/views/Home'
import Login from '@/views/Login'

import Shop from '@/views/Shop'

// import ShopList from '@/views/Shop/children/ShopList'
import Add from '@/views/Shop/children/ShopList/children/add'

// import AddShop from '@/views/Shop/children/AddShop'
import AddList from '@/views/Shop/children/AddShop/children/add'

// import HomePopup from '@/views/Shop/children/HomePopup'
import AddHome from '@/views/Shop/children/HomePopup/children/add'

import User from '@/views/User'

import Operate from '@/views/Operate'
import FoodEntry from '@/views/Operate/children/FoodEntry'
import Advertising from '@/views/Operate/children/Advertising'

import Map from '@/views/Map'

// import Fetch from '@/util/Fetch'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home',
      meta: {
        isFull: true
      }
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        title: '系统首页',
        icon: 'el-icon-location'
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        title: '登录',
        icon: '',
        isFull: true,
        noLogin: true
      }
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop,
      meta: {
        title: '运营位配置',
        icon: 'el-icon-menu'
      },
      children: [
        {
          path: 'banner添加、编辑',
          name: 'Add',
          component: Add,
          meta: {
            title: 'banner添加、编辑',
            icon: ''
          }
        },
        {
          path: '启动页添加、编辑',
          name: 'AddList',
          component: AddList,
          meta: {
            title: '启动页添加、编辑',
            icon: ''
          }
        },
        {
          path: '首页弹屏添加、编辑',
          name: 'AddHome',
          component: AddHome,
          meta: {
            title: '首页弹屏添加、编辑',
            icon: ''
          }
        }
      ]
    },
    {
      path: '/user',
      name: 'User',
      component: User,
      meta: {
        title: '用户管理',
        icon: 'el-icon-setting'
      }
    },
    {
      path: '/operate',
      name: 'Operate',
      component: Operate,
      meta: {
        title: '运营配置',
        icon: 'el-icon-info'
      },
      children: [
        {
          path: 'food_entry',
          name: 'FoodEntry',
          component: FoodEntry,
          meta: {
            title: '分类管理'
          }
        },
        {
          path: 'advertising',
          name: 'Advertising',
          component: Advertising,
          meta: {
            title: '广告位配置'
          }
        }
      ]
    },
    {
      path: '/map',
      name: 'Map',
      component: Map,
      meta: {
        title: '所在位置',
        icon: 'el-icon-location'
      }
    }
  ]
})
router.beforeEach((to, from, next) => {
  // let isLogin = window.localStorage.getItem('user')
  if (from.path === '/') {
    next()
  }
  store.dispatch('base/setUserInfo').then((data) => {
    next()
  }, (data) => {
    if (to.meta.noLogin) {
      next()
    } else {
      next('/login')
    }
  })
  // Fetch.get('/api/user/userInfo', {
  //   name: 'aaa'
  // }).then((data) => {
  //   if (from.path === '/') {
  //     next('/home')
  //   } else {
  //     next()
  //   }
  // }, (error) => {
  //   if (to.meta.noLogin) {
  //     next()
  //   } else {
  //     next('/login')
  //   }
  // })
})
export default router
