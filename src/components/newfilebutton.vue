<template>
  <div style="margin-left: 80%">
    <el-button  class="but1" @click="tocreatedoc">新建文档</el-button><br><br>
    <el-button @click="totemplate">模板库</el-button><br><br>
  </div>
</template>

<script>
export default {
  name: "newfilebutton",
  methods:{
    tocreatedoc:function ()
    {
      this.$router.push("/work/createdoc")
    },
    totemplate:function ()
    {
      this.$router.push("/work/template")
    },
  }
}
</script>

<style scoped>
.but1{
  font-size: x-large;
  background-color: #333333;
  font-weight: bold;
  color: #dcdfe6;
}
.el-button{
  font-size: x-large;
  width: 170px;
  font-weight: bold;
}

</style>