<template>
    <div>
        <div class="card-group">
            <Card
                title="总商户"
                smTitle = '注册人数'
                :num = '2841190'
            />
            <Card
                title="覆盖城市"
                smTitle = '用户下单量总数'
                :num = '4567'
            />
            <Card
                title="未审核商户"
                smTitle = '近日注册人数'
                :num = '190'
            />
        </div>
        <Content>
            <shanChart style="background:none"></shanChart>
        </Content>
    </div>
</template>
<script>
import shanChart from './components/shanChart'
export default {
    name: "User",
    components: {
        shanChart
    },
    data () {
        return {

        }
    }
}
</script>
<style>
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

