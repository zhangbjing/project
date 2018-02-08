<template>
    <el-card>
        <div class="box-card">
            <h3>
                <p>{{title}}</p>
                <small>{{smTitle}}</small>
            </h3>
            <output>{{getNum}}</output>
        </div>
    </el-card>
</template>
<script>
export default {
    name: 'Card',
    props: {
        title: {
            type: String,
            default:''
        },
        smTitle: {
            type: String,
            default:''
        },
        num: {
            type: Number,
            default: 0
        }
    },
    computed: {
        getNum () {
            let reg = /(\d{1,})(\d{3})/g
            let newNum = this.num.toString()
            while(reg.test(newNum)) {
                newNum = newNum.replace(reg, '$1, $2')
            }
            return newNum
        }
    }
}
</script>

