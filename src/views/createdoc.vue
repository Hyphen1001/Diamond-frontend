<template>
  <body id="poster">
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
        <el-page-header @back="goBack" content="新建文档">
        </el-page-header>
        <br><br>
        <el-scrollbar style="height:600px">
        <div>
          <el-input style="width: 80%;  margin-right:20%"
                    placeholder="请输入文档名"
                    v-model="title"
                    clearable>
          </el-input>
          <br>
          <br> <br>
          <el-card style="height: 610px;width: 80%">
            <quill-editor v-model="content" ref="myQuillEditor" style="height: 500px;" :options="editorOption">
            </quill-editor>
          </el-card>
          <br><br>
          <el-checkbox v-model="checked" style="margin-right: 10%">允许组员查看</el-checkbox>
          <el-checkbox v-model="checked" style="margin-right: 10%">允许组员评论</el-checkbox>
          <el-checkbox v-model="checked" style="margin-right: 10%">允许组员修改</el-checkbox>
          <el-button type="success" round style="margin-right: 20%" @click="save(title,content)">保存</el-button>
        </div>
        </el-scrollbar>
      </el-main>

    </el-container>



  </el-container>
  </body>
</template>

<script>
import qs from "qs"
import {
  quillEditor
} from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import Asidenavigation from "@/components/asidenavigation";
import Top from "@/components/top";

export default {

  name: 'FuncFormsEdit',
  components: {
    Top,
    Asidenavigation,
    quillEditor
  },
  data() {

    return {
      title: this.$route.query.title,
      content: this.$route.query.content,
      editorOption: {},
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    };
  },
  methods: {
    goBack:function (){
      this.$router.push("/work")
    },
    save:function (title,content){

      let param = {
        title :this.title,
        content :this.content
      }
      console.log(sessionStorage.getItem("sid"))
      this.$axios.post("/" + sessionStorage.getItem("sid") + "/createdoc/create" , qs.stringify(param))
      .then(response =>{
        let res = response.data
        if (res.result === true)
        {
          this.$message({
            message: '保存成功',
            type :"success"
          });
          this.$router.push("/work")
        }
        else {
          this.$message.error(res.msg);
        }
      })
    },
    handleNodeClick(data) {
      console.log(data);
    },

  },
}
</script>

<style scoped>


#poster {
  background-position: center;
  position: fixed;
}
body{
  margin: 0px;
  padding: 0;
}

.tac{
  width: 200px;
  margin-top: 100px;
}

.logo{
  font-size: 20px;
  text-align: left;
}

.avat{
  margin-top: 10px;
}


</style>