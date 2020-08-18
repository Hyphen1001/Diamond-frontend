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
          this.$axios.post("/" + sessionStorage.getItem("sid") + "/vieweddoc")
          .then(response =>{
            let res = response.data
            if (res.result === true){
              this.$router.push({
                path: '/work/recent',
                query: {
                  filelist3: res.datas
                }
              })
            }
            else {
              this.$message.error(res.msg);
            }
          })

        },

        showmycreate:function () {
          this.$axios.post("/" + sessionStorage.getItem("sid") + "/mycreatedoc")
              .then(response =>{
                let res = response.data
                if (res.result === true){
                  this.$router.push({
                    path: '/work/mycreate',
                    query: {
                      filelist: res.datas
                    }
                  })
                }
                else {
                  this.$message.error(res.msg);
                }
              })
        },

        showmyfav:function ()
        {
          this.$axios.post("/" + sessionStorage.getItem("sid") + "/collectdoc")
              .then(response =>{
                let res = response.data
                if (res.result === true){
                  this.$router.push({
                    path: '/work/favorites',
                    query: {
                      filelist2: res.datas
                    }
                  })
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
.but1{
  font-size: x-large;
  background-color: #F5F5F5;
  color: #808080;
}

</style>