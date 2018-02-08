<template>
    <div class="banner-add">
        <h2><p>首页弹层配置</p><p><button>编辑</button><button>提交</button></p></h2>
        <div class="add-main">
            <div>
                <p>banner位</p>
                <el-select v-model="value" placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div>
                <p>图片</p>
                <el-upload
                    class="avatar-uploader"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </div>
            <div>
                <p>标题</p>
                <el-input
                    placeholder="请输入内容"
                    v-model="input10"
                    clearable>
                </el-input>
            </div>
            <div>
                <p>上线时间起</p>
                <el-input
                    placeholder="日历"
                    suffix-icon="el-icon-date"
                    v-model="input1">
                </el-input>
            </div>
            <div>
                <p>上线时间止</p>
                <el-input
                    placeholder="日历"
                    suffix-icon="el-icon-date"
                    v-model="input2">
                </el-input>
            </div>
            <div>
                <p>地区</p>
                <el-input
                    placeholder="请输入内容"
                    v-model="input3"
                    clearable>
                </el-input>
            </div>
            <div>
                <p>分享</p>
                <el-radio v-model="radio" label="1">是</el-radio>
                <el-radio v-model="radio" label="2">否</el-radio>
            </div>
            <div>
                <button @click="open5">保存</button>
                <button @click="open5">保存并提交</button>
                <button @click="open5">取消</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'AddHome',
    data() {
        return {
            imageUrl: '',
            input10: '',
            input1: '',
            input2: '',
            input3: '',
            radio: '1',
            options: [
                {
                    value: '选项1',
                    label: '官网焦点图'
                },
                {
                    value: '选项2',
                    label: 'APP首页'
                }, 
                {
                    value: '选项3',
                    label: '财富页'
                }, 
                {
                    value: '选项4',
                    label: '官网腰封'
                }
            ],
            value: ''
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
      },
      open5() {
        this.$alert('<div><input type="radio" name="num"/>审批岗1</br><input type="radio" name="num"/>审批岗2</div>', '选择审批人', {
          dangerouslyUseHTMLString: true
        });
      }
    }
}
</script>
<style>
    .banner-add{
        background: #fff;
        width: 100%;
        height: 100%;
        margin-top: 10px;
    }
    .banner-add h2{
        line-height: 40px;
        display: flex;
        justify-content: space-between;
    }
    .banner-add h2 p:nth-of-type(2) button{
        width: 100px;
        height: 30px;
        background: #169bd5;
        border: none;
        outline: none;
        color: #fff;
        border-radius: 5px;
        margin: 0 10px;
    }
    .add-main{
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
    }
    .add-main>div{
        display: flex;
        align-items: center;
        padding: 5px 0;
    }
    .add-main>div p{
        width: 120px;
        text-align: center;
        color:#f00;
        font-size: 16px;
    }
    .add-main>div button {
        width: 15%;
        height: 40px;
        background: #169bd5;
        border:none;
        outline: none;
        color:#fff;
        border-radius: 5px;
        margin: 20px;
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
        width: 100px;
        height: 100px;
        line-height: 100px;
        text-align: center;
    }
    .avatar {
        width: 100px;
        height: 100px;
        display: block;
    }
</style>


