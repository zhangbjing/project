<template>
    <Chart :options='polar' ref=''></Chart>
</template>
<script>
import Chart from '@/components/Charts'
export default {
    name: "shanChart",
    components: {
        Chart
    },
    data () {
        return {
            polar: {
                tooltip : {
                    formatter: "{a} <br/>{b} : {c}%"
                },
                toolbox: {
                    feature: {
                        restore: {},
                        saveAsImage: {}
                    }
                },
                series: [
                    {
                        name: '业务指标',
                        type: 'gauge',
                        detail: {formatter:'{value}%'},
                        data: [{value: 50, name: '完成率'}]
                    }
                ]
            }
        }
    },
    created () {
        let value = this.polar.series[0].data[0].value
        setInterval(function () {
            value = (Math.random() * 100).toFixed(2) - 0;
            // this.myChart.setOption(this.polar, true);
        },2000);
    }
    
}

</script>
<style>
    .section-box .echarts{
        height: 400px;
        background: #fff;
        margin-top: 20px;
    }
</style>


