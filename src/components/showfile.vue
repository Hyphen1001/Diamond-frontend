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
          <el-container>

            <el-aside width="60%">
              <workbutton></workbutton>
              <file :filelist="list"></file>
            </el-aside>

            <el-main>
              <newfilebutton></newfilebutton>
            </el-main>

          </el-container>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import top from "@/components/top";
import asidenavigation from "@/components/asidenavigation";
import workbutton from "@/components/workbutton";
import Newfilebutton from "@/components/newfilebutton";
import file from "@/components/file";

export default {
  name:"showfile",
  components: {
    file,
    Newfilebutton,
    top,
    asidenavigation,
    workbutton
  },
  props:{
    list:{
      type:Array,

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