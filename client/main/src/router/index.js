import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/Home'
import HomePage from '@/views/Home'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'HomePage',
      component: HomePage
    }
  ]
})
// router.beforeEach((to, from, next) => {
//   // let isLogin = window.localStorage.getItem('user')
//   if (from.path === '/') {
//     next()
//   }
//   store.dispatch('base/setUserInfo').then((data) => {
//     next()
//   }, (data) => {
//     if (to.meta.noLogin) {
//       next()
//     } else {
//       next('/login')
//     }
//   })
//   // Fetch.get('/api/user/userInfo', {
//   //   name: 'aaa'
//   // }).then((data) => {
//   //   if (from.path === '/') {
//   //     next('/home')
//   //   } else {
//   //     next()
//   //   }
//   // }, (error) => {
//   //   if (to.meta.noLogin) {
//   //     next()
//   //   } else {
//   //     next('/login')
//   //   }
//   // })
// })
export default router
