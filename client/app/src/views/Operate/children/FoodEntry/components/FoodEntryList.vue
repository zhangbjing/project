<template>
    <div class="tabel_list">
        <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
                label="图标"
                width="180">
                <template slot-scope="scope">
                <img :src="scope.row.image" />
                </template>
            </el-table-column>
            <el-table-column
                prop="name"
                label="名称"
                width="180">
            </el-table-column>
            <el-table-column
                prop="description"
                label="描述">
            </el-table-column>
            <el-table-column
                prop="删除"
                label="操作">
                    <template slot-scope="scope">
                        <el-button type="primary">添加子类</el-button>
                        <el-button type="warning">修改</el-button>
                        <el-button type="danger"  @click.native.prevent="deleteRow(scope.row, tableData)">删除</el-button>
                    </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
export default {
    props: {
        tableData: {
            type: Array,
            default: []
        }
    },
    methods: {
        deleteRow(index, rows) {
            this.$emit('delData', index.id)
        },
        objectSpanMethod({ row, column, rowIndex, columnIndex }) { // 合并单元格
            if (columnIndex === 0) {
            if (rowIndex % 2 === 0) {
                return {
                rowspan: 2,
                colspan: 1
                };
            } else {
                return {
                rowspan: 0,
                colspan: 0
                };
            }
            }
        }
    },
    created(){
        console.log(this.tableData)
    }
}
</script>

<style>
    .tabel_list {
        margin-top: 20px;
    }
    .tabel_list img{
        display: block;
        border: 1px solid #ccc;
        width: 80px;
        height: 80px;
    }  
</style>

