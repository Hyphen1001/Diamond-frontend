<template>
<div>
  <el-button round class="but1" @click="showrecent">最近使用</el-button>
  <el-divider direction="vertical"></el-divider>
  <el-button round class="but1" @click="showmycreate">我创建的</el-button>
  <el-divider direction="vertical"></el-divider>
  <el-button round class="but1" @click="showmyfav">我的收藏</el-button>
  <br><br>
</div>
</template>

<script>
export default {
  name: "workbutton",
  methods:
      {
        showrecent:function () {
          this.$router.push("/work/recent")
        },
        showmycreate:function () {
          this.$router.push("/work/mycreate")
        },
        showmyfav:function ()
        {
          this.$router.push("/work/favorites")
        }
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

</style>