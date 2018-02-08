<template>
    <el-card class="login_box">
        <el-form 
            :model="loginFrom" 
            ref="loginFrom" 
            label-width="100px" 
            class="demo-ruleForm">
            <el-form-item
                label="用户名"
                prop="phone"
                :rules="[
                { required: true, trigger: 'blur', message: '请输入用户名'},
                { min: 3, max: 11, trigger: 'blur', message: '长度在3到5个字符之间'}
                ]"
            >
                <el-input type="text" v-model="loginFrom.phone" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item
                label="密码"
                prop="password"
                :rules="[
                { required: true, trigger: 'blur', message: '请输入密码'}
                ]"
            >
                <el-input type="password" v-model="loginFrom.password" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm">提交</el-button>
            </el-form-item>
        </el-form>
    </el-card>
</template>
<script>
export default {
    name: "Login",
    data() {
      return {
        loginFrom: {
          phone: '',
          password: ''
        }
      };
    },
    methods: {
      submitForm() {
        this.$refs['loginFrom'].validate((valid) => {
          if (valid) {
            this.$axios.post('/api/user/login_do', this.loginFrom).then((data) => {
                this.$router.replace('/home')
            }, (error) => {
                console.dir(error)
            })
            window.localStorage.setItem('user', JSON.stringify(this.loginFrom)) 
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
}
</script>
<style>
    .login_box{
        width: 400px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>


