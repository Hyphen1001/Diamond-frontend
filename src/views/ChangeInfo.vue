<template>
  <body id="poster">
  <div>
    <el-container>
      <el-header>
        <top></top>
      </el-header>
      <el-container>
        <el-aside>
          <asidenavigation>
          </asidenavigation>
        </el-aside>
        <el-main>
          <el-container>
            <el-side>
              <div align="center" style="margin-top: 40px">
                <el-card style="width: 450px" shadow="always">
                  <span>基础信息</span>
                  <br>
                  <el-form ref="form" :model="changeInfoForm" label-width="80px" size="small" style="width:400px">
                    <el-form-item label="昵称" >
                      <el-input v-model="changeInfoForm.nickname" placeholder="请输入昵称" auto-complete="on"></el-input>
                    </el-form-item>
                    <el-form-item label="邮箱" align="left">
                      <el-input v-model="changeInfoForm.email" placeholder="请输入邮箱地址" auto-complete="on"></el-input>
                    </el-form-item>
                    <el-form-item label="头像" align="left">
                      <el-input v-model="changeInfoForm.avatar" placeholder="请输入头像地址" auto-complete="off"></el-input>
                      <br><br>
                      <img v-if="changeInfoForm.avatar!=''" v-bind:src="changeInfoForm.avatar" style="height: 255px">
                      <img v-else src="../assets/avatarpreview.jpg" height="200px" />
                      <!--                <el-avatar v-if="changeInfoForm.avatar!=''" v-bind:src="changeInfoForm.avatar" style="size: 200%; margin-left: 45%"></el-avatar>-->
                    </el-form-item>
                    <el-form-item label="自我介绍">
                      <el-input type="textarea" max-length="20" show-word-limit v-model="changeInfoForm.umessage"></el-input>
                    </el-form-item>
                    <el-form-item>
                      <el-button type="primary" @click="onSubmit"><a href="../"> 保存</a></el-button>
                      <el-button>取消</el-button>
                    </el-form-item>
                  </el-form>
                </el-card>
              </div>

            </el-side>
            <el-main>
              <div align="center">
                <el-card style="width: 450px" shadow="always">
                  <span style="margin-left: 0px">修改密码</span>
                  <br>
                  <el-form ref="form" :model="changeInfoForm" label-width="80px" size="small" style="width:400px">
                    <el-form-item label="原密码" >
                      <el-input v-model="changeInfoForm.oldpw" placeholder="请输入原密码" type="password" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="新密码" align="left">
                      <el-input v-model="changeInfoForm.newpw" placeholder="请输入新密码" type="password" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="再次确认" align="left">
                      <el-input v-model="changeInfoForm.newpw2" placeholder="请再次输入新密码" type="password" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item>
                      <el-button type="primary" @click="submitpw"><a href="../"> 保存</a></el-button>
                      <el-button>取消</el-button>
                    </el-form-item>
                  </el-form>
                </el-card>
              </div>
            </el-main>
          </el-container>
        </el-main>
      </el-container>
    </el-container>
  </div>


  </body>

</template>

<script>
import top from "@/components/top";
import asidenavigation from "@/components/asidenavigation";
import workbutton from "@/components/workbutton";
import Newfilebutton from "@/components/newfilebutton";
import file from "@/components/file";
import qs from "qs"
import Element from "element-ui";

export default {
  name:"ChangeInfo",
  components: {
    file,
    top,
    asidenavigation,
  },
  props:{

    list:{
      type:Array,
    }
  },
  data() {

    return {
      changeInfoForm:{
        nickname:sessionStorage.getItem("username"),
        avatar:sessionStorage.getItem("avatar"),
        email:sessionStorage.getItem("email"),
        umessage:sessionStorage.getItem("umessage"),
        oldpw:'',
        newpw:'',
        newpw2:'',
      },
      content: null,
      editorOption: {}
    }
  },
  methods:{
    onSubmit(){
      // const _this=this
      // this.changeInfoForm
      console.log(this.changeInfoForm.nickname)
      let param={nickname : this.changeInfoForm.nickname}
      if (this.changeInfoForm.nickname === sessionStorage.getItem("username"))
      {

      }
      else {
        this.$axios.post("/"+sessionStorage.getItem("sid")+"/usershow/change/changenickname",
            qs.stringify(param))
            .then(response=>{
              let res=response.data

              if (res.result===true){
                sessionStorage.setItem("username",res.datas.username)

                this.$message({
                  message: '修改成功',
                  type: 'success'
                });
              }else {
                this.$message.error(res.msg);
              }
            })
      }

      console.log(this.changeInfoForm.email)
      param={email : this.changeInfoForm.email}
      if (this.changeInfoForm.email === sessionStorage.getItem("email"))
      {

      }
      else {
        this.$axios.post("/"+sessionStorage.getItem("sid")+"/usershow/change/changeemail",
            qs.stringify(param))
            .then(response=>{
              let res=response.data

              if (res.result===true){
                sessionStorage.setItem("email",res.datas.email)

                this.$message({
                  message: '修改成功',
                  type: 'success'
                });
              }else {
                this.$message.error(res.msg);
              }
            })
      }


      console.log(this.changeInfoForm.avatar)
      param={avatar : this.changeInfoForm.avatar}
      if (this.changeInfoForm.avatar === sessionStorage.getItem("avatar"))
      {

      }
      else {
        this.$axios.post("/"+sessionStorage.getItem("sid")+"/usershow/change/changeavatar",
            qs.stringify(param))
            .then(response=>{
              let res=response.data
              console.log(res.result)
              if (res.result===true){
                sessionStorage.setItem("avatar",res.datas.avatar)
                this.$message({
                  message: '修改成功',
                  type: 'success'
                });
              }else {
                this.$message.error(res.msg);
              }
            })
      }


      console.log(this.changeInfoForm.umessage)
      param={umessage : this.changeInfoForm.umessage}
      if (this.changeInfoForm.umessage === sessionStorage.getItem("umessage"))
      {

      }
      else {
        this.$axios.post("/"+sessionStorage.getItem("sid")+"/usershow/change/changemessage",
            qs.stringify(param))
            .then(response=>{
              let res=response.data
              console.log(res.result)
              if (res.result===true){
                sessionStorage.setItem("umessage",res.datas.umessage)
                this.$message({
                  message: '修改成功',
                  type: 'success'
                });
              }else {
                this.$message.error(res.msg);
              }
            })
      }
      
    },
    submitpw(){
      let param={oldpw : this.changeInfoForm.oldpw,
        newpw: this.changeInfoForm.newpw,
        newpw2: this.changeInfoForm.newpw2}
      this.$axios.post("/"+sessionStorage.getItem("sid")+"/usershow/change/changepass",
          qs.stringify(param))
          .then(response=>{
            let res=response.data
            console.log(res.result)
            if (res.result===true){
              this.$router.push("/")
              this.$message({
                message: '修改成功',
                type: 'success'
              });
            }else {
              this.$message.error(res.msg);
            }
          })
    }
  }
}

</script>

<style scoped>
.el-main{
  margin-top: 20px;
  margin-left: 0;
  text-align: left;
}
</style>