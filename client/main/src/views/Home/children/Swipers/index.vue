<template>
    <swiper :options="swiperOptions" ref="mySwiper" class="content">
        <swiper-slide v-for="(item, index) in icon_logo" :key="index">
            <router-link :to="list.link" v-for="(list, index) in item.icon_logo" :key="index">
                <img :src="list.imgUrl" alt="">
                <span>{{list.content}}</span>
            </router-link> 
        </swiper-slide>
        <div class="swiper-pagination pagination" slot="pagination"></div>
    </swiper>
</template>
<script>
import axios from 'axios';
import {swiper,swiperSlide} from 'vue-awesome-swiper';
export default {
    name: 'Swipers',
    data:function(){
      return {
        icon_logo: [],
        swiperOptions:{
          notNextTick:true,
          loop:true,
          pagination:".pagination",
          autoplayDisableOnInteraction:false
        }
      }
    },
    mounted: function() {
        this.getData()
    },
    methods: {
        getData: function(){
            let that = this;
            axios.get('/icon_logo').then(function(res){
                that.icon_logo = res.data.reult
            })
        }
    },
    components:{
        swiper,
        swiperSlide
    }
}
</script>
<style lang="less" scoped>
    .content{
        width: 100%;
        height: 160px;
        .swiper-wrapper{
            width: 100%;
            height: 100%;
            .swiper-slide{
                width: 100%;
                height: 100%;
                display: flex;
                flex-wrap: wrap;
                a{
                    width: 20%;
                    height: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    font-size: 14px;
                    img{
                        width: 50px;
                        height: 50px;
                    }
                }
            }
        }
    }
</style>

