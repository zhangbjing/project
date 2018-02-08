<template>
    <div class="food_entry">
        <Content title="分类管理">
            <el-button type="primary" @click="dialogFormVisible = true">添加分类</el-button>
            <FoodEntryList :tableData="food_entry_list" v-on:delData ="delFoodEntry"></FoodEntryList>
        </Content> 
        <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
            <el-form :model="form">
                <el-form-item label="上传图标" :label-width="formLabelWidth">
                    <el-upload
                        class="avatar-uploader"
                        action="/api/upload"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                        <img v-if="form.image" :src="form.image" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-form-item>
                <el-form-item label="分类名称" :label-width="formLabelWidth">
                    <el-input v-model="form.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="父类" :label-width="formLabelWidth">
                    <el-select v-model="form.parent_id" clearable  placeholder="请选择">
                        <el-option
                            v-for="item in food_entry_list"
                            :key="item.id"
                            :label="item.name"
                            :value="item.id">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="分类描述" :label-width="formLabelWidth">
                    <el-input v-model="form.description" auto-complete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="addFoodEntry">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
import FoodEntryList from './components/FoodEntryList'
import {mapState} from 'vuex'
export default {
    name: 'FoodEntry',
    data () {
        return {
            dialogFormVisible: false,
            imageUrl: '',
            formLabelWidth: '100',
            form: {
                name: '',
                description: '',
                image: '',
                parent_id: ''
            }
        }
    },
    components: {
        FoodEntryList
    },
    computed: {
        ...mapState('foodEntry', ['food_entry_list'])
    },
    created () {
        console.log(process.env.NODE_ENV)
        this.getFoodEntry()
    },
    methods: {
        handleAvatarSuccess(res, file) {
            this.form.image = baseUrl + res.file.filename;
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
                this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
        },
        addFoodEntry () {
            // this.$axios.post('/api/food_entry/food_entry', this.form).then((data) => {
            // console.log(data, '成功')
            // this.dialogFormVisible = false
            // })
            this.$store.dispatch('foodEntry/AddFoodEntry', this.form).then((data) => {
                console.log(data, '成功')
                this.dialogFormVisible = false
            })
        },
        getFoodEntry () {
            // this.$axios.get('/api/food_entry/food_entry').then((data) => {
            //     this.food_entry_list = data.data.data
            // })
            this.$store.dispatch('foodEntry/GetFoodEntry')
        },
        delFoodEntry (id) {
            this.$store.dispatch('foodEntry/DelFoodEntry', {'id': id}).then((data) => {
                console.log(data, '删除')
            })
        }
    }
}
</script>
<style>
    .food_entry{
        margin-top: 20px;
    }
    .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .el-upload:hover {
        border-color: #409EFF;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }
    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }
</style>


