<template>
  <div id="app">
    <Home></Home>
  </div>
</template>

<script>
import '@/static/css/reset.css'
import '@/static/icon/iconfont.css'
import '@/static/css/swiper-3.3.1.min.css'
import Home from './components/Home'
export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
  #app{
    width: 100%;
    height: 100%;
  }
</style>
