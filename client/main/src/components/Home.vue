<template>
    <div class="main-box">
        <router-view></router-view>
        <footer class="footer">
            <router-link to="/home"><i class="iconfont icon-shouye"></i>首页</router-link>
            <router-link to="/find"><i class="iconfont icon-fangdajing"></i>发现</router-link>
            <router-link to="/home"><i class="iconfont icon-zixun"></i>订单</router-link>
            <router-link to="/home"><i class="iconfont icon-wode"></i>我的</router-link>
        </footer>
    </div>
</template>
<script>
export default {
    name: 'Home'
}
</script>
<style lang="less" scoped>
    .main-box{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        .footer{
            height: 50px;
            display: flex;
            border-top: 1px solid #ccc;
            a{
                flex:1;
                height: 100%;
                justify-content: center;
                flex-direction: column;
                display: flex;
                align-items: center;
                font-size: 12px;
                i{
                    margin-bottom: 5px;
                }
            }
        }
    }
</style>

