<template>
    <div class="main-box">
        <header class="header">
            <label for=""><i class="iconfont icon-fangdajing"></i><input type="text" placeholder="搜索商家、商品名称"></label>
        </header>
        <section class="section">
            <div class="main-logo">
                <img src="https://fuss10.elemecdn.com/0/cf/e16c1687a4ea84674d5b531623934png.png?imageMogr/format/webp/thumbnail/!750x210r/gravity/Center/crop/750x210/" alt="">
            </div>
            <Swipers/>
        </section>
    </div>
</template>
<script>
import Swipers from './children/Swipers'
export default {
    name: 'HomePage',
    components: {
        Swipers
    },
    created(){
        var arr = [1, [2, [[3,4], 5], 6]]
        var newArr = [];
        function sum(arr){
            var arr1 = (arr + '').split(',');// 将数组转字符串后再以逗号分隔转为数组
            var arr2 = arr1.map(((x) => {
                // console.log(newArr.push(x))
                return newArr.push(x)
                // return Number(x)
            }))
            return arr2
        }
        console.log(sum(arr));
    }
}
</script>

<style lang="less" scoped>
    .header{
        height: 50px;
        background-image: linear-gradient(90deg,#0af,#0085ff);
        display: flex;
        justify-content: center;
        align-items: center;
        label{
            width: 90%;
            height: 70%;
            background: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            input{
                border:none;
                outline: none;
                margin-left: 5px;
            }
        }
    }
    .section{
        width: 100%;
        flex:1;
        overflow-y: scroll;
        .main-logo{
            width: 100%;
            height: 106px;
            
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
</style>

