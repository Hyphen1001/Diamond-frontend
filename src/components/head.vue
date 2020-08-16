<template>
  <div>
    <el-row>
      <el-col :span="8"><div class="grid-content bg-purple"><a href="../"> <img src="../assets/logo.png" height="50px" align="left"></a></div></el-col>
      <el-col :span="8"><div class="grid-content bg-purple-light">
        <el-input placeholder="请输入内容" prefix-icon="el-icon-search">
        </el-input>
      </div></el-col>
      <el-col :span="8"><div class="grid-content bg-purple" align="right">
        <el-dropdown :hide-on-click="false">
                      <span class="el-dropdown-link">
                        <el-avatar :size="50" :src="user.avatar" size="mini" ></el-avatar>
                      </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>{{user.username}}</el-dropdown-item>
            <el-dropdown-item><a href="../changeinfo"> 修改信息</a></el-dropdown-item>
            <el-dropdown-item divided>注销</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Header",
  data(){
    return {
      user:{
        username:'HYPHEN',
        avatar:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3136989361,3352211012&fm=26&gp=0.jpg'
      },
    }
  }
}

</script>

<style scoped>
.el-row {
  margin-bottom: 10px;
&:last-child {
   margin-bottom: 0;
 }
}
.el-col {
  border-radius: 10px;
}
.bg-purple-dark {
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
}
</style>