<template>
    <el-container class="layout" v-if="!$route.meta.isFull">
        <el-aside width="200px" class="left-list">
            <div class="logo">
                <img src="//shadow.elemecdn.com/faas/napos-introduce/assets/eleme_logo.svg" alt="">
                <span>商家管理后台</span>
            </div>
            <MenuSlider/>
        </el-aside>
        <el-container>
            <el-header>
                <HeaderBar/>
            </el-header>
            <el-main style="height:100%">
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
    <div v-else>
        <router-view></router-view>
    </div>
</template>
<script>
import MenuSlider from './MenuSlider'
import HeaderBar from "./HeaderBar"
    export default {
        name: "Layout",
        components: {
            MenuSlider,
            HeaderBar
        }
    }
</script>
<style>
    .layout{
       padding-left: 200px; 
    }
    .left-list{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        width: 200px;
        background: #fff;
        border-right: 1px solid #eee;
    }  
    .logo{
        width: 100%;
        height: 100px;
        display: flex;
        flex-direction: column;
    }  
    .logo img{
        width: 70%;
        margin: 10%;
    } 
    .el-main{
        width: 100%;
        height: 100%;
        background: #f0f0f0;
    }
</style>


