<template>
    <div>
        <div class="card-group">
            <Card
                title="总用户数(人)"
                smTitle = '注册人数'
                :num = '2841190'
            />
            <Card
                title="总用订单数"
                smTitle = '用户下单量总数'
                :num = '4567'
            />
            <Card
                title="总商户数(人)"
                smTitle = '近日注册人数'
                :num = '190'
            />
        </div>
        <Content title="数据统计">
            <LinChart></LinChart>
        </Content>
    </div>
</template>
<script>
import LinChart from './components/LinChart'
export default {
    name: "Home",
    components: {
        LinChart
    },
    data () {
        return {

        }
    }
}

</script>
<style>
    .echarts{
        height: 400px;
    }
    .card-group, .box-card{
        display: flex;
        justify-content: space-between;
    }
    .el-card{
         width: 30%;
    }
    .box-card{
        align-items: center;
    }
    .box-card h3 p{
        font-weight: bold;
    }
    .box-card h3 small{
        font-size: 12px;
        color: #ccc;
        margin-top: 5px;
    }
    .box-card output{
        color: #2689BB;
        font-size: 18px;
    }
</style>


