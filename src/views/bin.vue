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
          <div>
            <el-button @click="deleteall()">清空回收站</el-button>
            <el-timeline >
              <el-timeline-item v-for="file in list">
                <el-button class="filebutton"  style="border-radius: 0px; width: 200px; " @click="toedit(file)" >
                  {{file.title}}

                  <el-dropdown>
      <span class="el-icon-arrow-down el-icon--right" >

      </span>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item icon="el-icon-edit-outline" @click.native="toedit(file)">查看</el-dropdown-item>
                      <el-dropdown-item icon="el-icon-refresh-right" @click.native="recycle(file)">还原</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </el-button>

              </el-timeline-item>
            </el-timeline>
          </div>
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

export default {
  name:"bin",
  components: {
    file,
    Newfilebutton,
    top,
    asidenavigation,
    workbutton
  },

  data() {

    return {
      list : this.$route.params.filelist,
      content: null,
      editorOption: {}
    }
  },
  methods:{
    recycle(file){
      this.$axios.post("/" + sessionStorage.getItem("sid") + "/" + file.docid + "/back")
          .then(response =>{
            let res = response.data
            if (res.result === true){

              this.$message({
                message:'还原成功',
                type : "success"
              })
              this.$router.push("/work")
            }
            else {
              this.$message.error(res.msg);
            }
          })
    },
    deleteall()
    {
      let param = {
        usernmae : this.loginForm.username
      }
      this.$axios.post("/" + sessionStorage.getItem("sid") + "/recycle/deleteall")
          .then(response =>{

            let res = response.data

            if (res.result === true){
              this.$message({
                message:'删除成功',
                type : "success"
              })
              this.$router.push("/work")
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
.el-main{
  margin-top: 20px;
  margin-left: 0;
  text-align: left;
}
</style>