<template>
  <div style="margin-left: 0%">
    <el-button  class="but1" @click="tocreatedoc">新建文档</el-button><br><br>
    <el-button  class="but1" @click="totemplate">模板库</el-button><br><br>
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
  background-color: #F5F5F5;
  color: #808080;
}

.el-button{
  font-size: x-large;
  width: 170px;
  font-weight: bold;
}

</style>