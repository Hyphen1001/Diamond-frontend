<template>
  <body id="poster">
  <el-form :model="loginForm" :rules="rules" ref="loginForm" class="login-container" label-position="left" label-width="0px">
    <h3 class="login_title">欢迎使用Diamond文档</h3>
    <el-form-item prop='username'>
      <el-input  prefix-icon="el-icon-user-solid" type="text" v-model="loginForm.username" auto-complete="off" placeholder="用户名"></el-input>
    </el-form-item>

    <el-form-item  prop='password'>
      <el-input prefix-icon="el-icon-lock" type="password" v-model="loginForm.password" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>

    <el-form-item style="width: 100%">
      <el-button type="primary" style="width: 100%;background: #505458;border: none" @click="submitForm('loginForm')">登录</el-button>
    </el-form-item>
    <el-form-item style="width: 100%">
      <el-button type="primary" style="width: 100%;background: #505458;border: none" @click="regist">注册</el-button>
    </el-form-item>
  </el-form>
  </body>
</template>


<script>
import Element from "element-ui";
import qs from "qs";
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
        ]
      },

    }
  },
  methods: {
    submitForm(FormName) {
      this.$refs[FormName].validate((valid) => {
        if (valid) {

          let param = {
            username: this.loginForm.username,
            password: this.loginForm.password
          }
          const _this = this

          this.$axios
              .post('/login',qs.stringify(param))
              .then(successResponse => {

                let res = successResponse.data
                if (res.result === true)
                {
                  sessionStorage.setItem("avatar",res.datas.avatar)
                  sessionStorage.setItem("username",res.datas.username)
                  sessionStorage.setItem("sid",res.msg)
                  sessionStorage.setItem("umessage",res.datas.umessage)
                  sessionStorage.setItem("email",res.datas.email)
                  _this.$router.push("/intimate")
                  this.$message({
                    message: '登陆成功',
                    type: 'success'
                  });
                }
                else if (res.result === false){
                  Element.Message.error('用户名或密码错误', {duration: 3 * 1000})
                }
              })
              .catch(failResponse => {
                // alert("用户名或密码错误,请重新输入")
              })
        } else {
          console.log("?????????????")
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    regist(){
      this.$router.push({path: '/Regist' })
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