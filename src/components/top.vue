<template>
  <div>
    <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#fff"
        text-color="#000"
        active-text-color="#696969">

      <el-menu-item class = "logo" @click="toindex" index="1">Diamond文档</el-menu-item>

      <el-submenu index="2" class="mes" @mouseenter.native="getinform">
        <template slot="title" icon="el-icon-bell">
          <i class="el-icon-bell"></i>
        </template>
        <el-menu-item v-for="message in messagelist">{{message.message}}</el-menu-item>
      </el-submenu>

      <el-submenu index="3" class="avat">

        <template slot="title">
          <el-avatar v-bind:src="avata"></el-avatar>
        </template>
        <el-menu-item index="2-1" >昵称:{{usernam}}</el-menu-item>
        <el-menu-item index="2-2" @click="tochange">修改个人信息</el-menu-item>
        <el-menu-item index="2-3" @click="logout">注销</el-menu-item>
      </el-submenu>


    </el-menu>
  </div>
</template>

<script>
export default {
  name: "top",
  data() {
    return {
      avata: sessionStorage.getItem("avatar"),
      usernam:sessionStorage.getItem("username"),
      messagelist:'',
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods: {

    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    toindex:function (){
      this.$router.push("/work")
    },
    tochange:function ()
    {
      this.$router.push("/changeinfo")
      console.log(sessionStorage.getItem("avatar"))
    },
    logout:function ()
    {
      sessionStorage.setItem("username",'')
      sessionStorage.setItem("avatar",'')
      this.$router.push("/")
    },
    getinform:function ()
    {

      this.$axios.post("/" + sessionStorage.getItem("sid") + "/inform")
          .then(response =>{
            let res = response.data
            console.log(res.datas)
            if (res.result === true){
              this.messagelist = res.datas;
            }
            else {
              this.$message.error(res.msg);
            }
          })
    }
  }
}
</script>

<style scoped>
.logo{
  font-size: 20px;
  text-align: left;
}

.avat{
  margin-left: 0
}
.mes{
  margin-left: 75%;
}

</style>