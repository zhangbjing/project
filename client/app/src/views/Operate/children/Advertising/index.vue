<template>
    <div class='advertising'>
        <h2>
            <p>广告位配置</p>
            <el-button type='primary' @click='dialogFormVisible = true'>添加广告</el-button>
        </h2>
        <el-dialog title='收货地址' :visible.sync='dialogFormVisible'>
            <el-form :model='form'>
                <el-form-item label='上传图标' :label-width='formLabelWidth'>  
                <el-upload
                    class='avatar-uploader'
                    action='https://jsonplaceholder.typicode.com/posts/'
                    :show-file-list='false'
                    :on-success='handleAvatarSuccess'
                    :before-upload='beforeAvatarUpload'>
                    <img v-if='form.image' :src='form.image' class='avatar'>
                    <i v-else class='el-icon-plus avatar-uploader-icon'></i>
                </el-upload> 
                <!-- </el-form-item>
                <el-form-item label="分类名称" :label-width="formLabelWidth">
                <el-input v-model="form.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="分类描述" :label-width="formLabelWidth">
                <el-input v-model="form.description" auto-complete="off"></el-input> -->
                </el-form-item>
            </el-form> 
            <!-- <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="addFoodEntry">确 定</el-button>
            </div> -->
        </el-dialog>
    </div>
</template>
<script>
export default {
    name: 'Advertising',
    data () {
        return {
            dialogFormVisible: false,
            imageUrl: '',
            formLabelWidth: '100',
            form: {
                name: '',
                description: '',
                image: ''
            }
        }
    },
    methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
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
      }
    }
}
</script>

<style>
     .advertising h2{
        display: flex;
        justify-content: space-between;
        align-items: center;
        line-height: 50px;
    }
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
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

