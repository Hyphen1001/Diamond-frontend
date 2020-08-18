<template>
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
          <workbutton></workbutton>
          <templatefile :filelist="list"></templatefile>
          <newfilebutton></newfilebutton>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import templatefile from "@/components/templatefile";
import top from "@/components/top";
import asidenavigation from "@/components/asidenavigation";
import workbutton from "@/components/workbutton";
import Newfilebutton from "@/components/newfilebutton";
import file from "@/components/file";

export default {
  name:"showfile",
  components: {
    templatefile,
    file,
    Newfilebutton,
    top,
    asidenavigation,
    workbutton
  },
  props:{
    list:{
      type:Array,
      default()
      {
        return [{
          title :"file1",
          content: "this is file 1"
        },
          {
            title: "file2",
            content: "this is file 2"
          },
          {
            title: "file3",
            content: "this is file 3"
          }]
      }
    }
  },
  data() {

    return {

      content: null,
      editorOption: {}
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