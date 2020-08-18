<template>
  <body id="poster">
  <el-form :model="RegistForm" :rules="rules" ref="RegistForm" class="login-container" label-position="left" label-width="0px">
    <el-page-header @back="goBack">
    </el-page-header>
    <h3 class="login_title">欢迎使用xx文档</h3>
    <el-form-item prop='username'>
      <el-input  prefix-icon="el-icon-user-solid" type="text" v-model="RegistForm.username" auto-complete="off" placeholder="用户名"></el-input>
    </el-form-item>

    <el-form-item  prop='password'>
      <el-input prefix-icon="el-icon-lock" type="password" v-model="RegistForm.password" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>

    <el-form-item  prop='password2'>
      <el-input prefix-icon="el-icon-lock" type="password" v-model="RegistForm.password2" auto-complete="off" placeholder="确认密码"></el-input>
    </el-form-item>



    <el-form-item  prop='email'>
      <el-input prefix-icon="el-icon-message" type="email" v-model="RegistForm.email" auto-complete="off" placeholder="电子邮箱"></el-input>
    </el-form-item>

    <el-form-item  prop='avatar'>
      <el-input prefix-icon="el-icon-picture" type="text" v-model="RegistForm.avatar" auto-complete="off" placeholder="头像图片地址"></el-input>
    </el-form-item>
    <el-avatar v-if="RegistForm.avatar!=''" v-bind:src="RegistForm.avatar">

    </el-avatar>
    <br>
    <el-form-item style="width: 100%">
      <el-button type="primary" style="width: 100%;background: #505458;border: none" @click="submitForm('RegistForm')">注册</el-button>
    </el-form-item>

  </el-form>
  </body>
</template>


<script>
import qs from "qs"
import Element from "element-ui";
export default {
  name: "Login",
  data() {
    return {
      RegistForm: {
        username: '',
        password: '',
        password2: '',
        avatar: '',
        email: '',
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
        ],
        password2: [
          { required: true, message: '请再次输入密码', trigger: 'blur' },
          { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
        ],
        avatar: [
          { required: true, message: '请输入头像图片地址', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入邮箱', trigger: 'blur' }
        ],
      },

    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let param = {
            username: this.RegistForm.username,
            password: this.RegistForm.password,
            password2: this.RegistForm.password2,
            avatar: this.RegistForm.avatar,
            email: this.RegistForm.email
          }
          this.$axios
              .post('/register', qs.stringify(param))
              .then(successResponse => {
                let res = successResponse.data
                console.log(res)
                if (res.result === true)
                {
                  this.$message({
                    message: '注册成功',
                    type: 'success'
                  });
                  this.$router.push({path: '/'}) // 注册成功则返回登陆页面（path:'/'为登陆页面）
                }
                else{
                  Element.Message.error(res.msg,{duration: 3 * 1000})
                }
              })
              .catch(failResponse => {

              })
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    goBack:function ()
    {
      this.$router.push("/")
    }


  }
}
</script>

<style>
#poster {
  background-color: #F5F5F5;
  background-position: center;
  height: 100%;
  width: 100%;
  background-size: cover;
  position: fixed;
}
body{
  margin: 0px;
  padding: 0;
}

.login-container {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 90px auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}

.login_title {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}


</style>