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
        <el-page-header @back="goBack" content="编辑文档">
        </el-page-header>
        <br><br>
        <el-scrollbar class="el-scrollbar__wrap" style="height:600px">
          <div>
            <el-input style="width: 80%;  margin-right:20%"
                      placeholder="请输入文档名" bn
                      v-model="title"
                      clearable>
            </el-input>
            <br> <br> <br>
            <el-card style="height: 610px;width: 80%">
              <quill-editor v-model="content" ref="myQuillEditor" style="height: 500px;" :options="editorOption">
              </quill-editor>
            </el-card>
            <br><br>
            <el-button type="success" round style="margin-left:50%" @click="collect()">收藏</el-button>
            <br><br>
            <el-timeline style="width: 80%" v-for="comment in commentlist">
              <el-timeline-item v-bind:timestamp=formatDate(comment.object.time) placement="top">

                <el-card style="width: 95%">
                  <el-container>
                    <el-aside width="8%"><el-avatar v-bind:src=comment.user.avatar ></el-avatar><br>
                      {{comment.user.username}}
                    </el-aside>
                    <el-main>
                      <p>{{comment.object.content}}</p>
                    </el-main>
                  </el-container>


                </el-card>
              </el-timeline-item>

            </el-timeline>
            <el-input
                type="textarea"
                :autosize="{ minRows: 4, maxRows: 4}"
                placeholder="文明评论更好哦"
                style="width: 80%; margin-right: 20%"
                maxlength="100"
                show-word-limit
                v-model="textarea">
            </el-input>
            <br><br>
            <el-button type="success" round style="margin-left:50%" @click="sendcomment">发表</el-button>
            <br><br>
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
import asidenavigation from "@/components/asidenavigation";
import top from "@/components/top";

export default {

  name: 'showdoc',
  components: {
    top,
    asidenavigation,
    quillEditor
  },
  data() {

    return {
      textarea:'',
      commentlist: this.$route.query.commentlist,
      title: this.$route.query.file.title,
      content: this.$route.query.file.content,
      docid: this.$route.query.file.docid,
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
    save:function (){
      this.$router.push("/work")
    },
    handleNodeClick(data) {
      console.log(data);
    },
    towork:function ()
    {
      this.$router.push("/work")
    },
    tochange:function ()
    {
      this.$router.push("/changeinfo")
    },
    collect()
    {
      this.$axios.post("/" + sessionStorage.getItem("sid") + "/" + this.docid + "/collectdoc")
          .then(response =>{
            let res = response.data
            if (res.result === true){
              this.$message({
                message:'收藏成功',
                type : 'success'
              });
            }
            else {
              this.$message.error(res.msg);
            }
          })
    },
    save1(content)
    {
      let param = {
        content : content
      }
      this.$axios.post("/" + sessionStorage.getItem("sid") + "/" + this.docid + "/changedoc",qs.stringify(param))
          .then(response =>{

            let res = response.data
            if (res.result === true){
              this.$message({
                message:'修改成功',
                type : 'success'
              });
            }
            else {
              this.$message.error(res.msg);
            }
          })
    },
    formatDate: function (value) {
      let date = new Date(value);
      let y = date.getFullYear();
      let MM = date.getMonth() + 1;
      MM = MM < 10 ? ('0' + MM) : MM;
      let d = date.getDate();
      d = d < 10 ? ('0' + d) : d;
      let h = date.getHours();
      h = h < 10 ? ('0' + h) : h;
      let m = date.getMinutes();
      m = m < 10 ? ('0' + m) : m;
      let s = date.getSeconds();
      s = s < 10 ? ('0' + s) : s;
      return y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s;
    },
    sendcomment()
    {
      let param = {
        content : this.textarea
      }
      this.$axios.post("/" + sessionStorage.getItem("sid") + "/" + this.docid + "/commentdoc" , qs.stringify(param))
          .then( response => {
            let res = response.data
            if (res.result === true)
            {
              this.$message({
                message : "发布成功",
                type : "success"
              })
              this.commentlist.push({
                user : {
                  username : sessionStorage.getItem("username"),
                  avatar : sessionStorage.getItem("avatar")
                },
                object :{
                  content : this.textarea,
                  time : new Date()
                }
              })
              this.textarea = ''
            }
            else {
              this.$message.error(res.msg)
            }
          })
    }
  },
}
</script>

<style scoped>
.el-scrollbar__wrap {
  overflow-x: hidden!important;
}

#poster {
  background-position: center;
  position: fixed;
}
body{
  margin: 0px;
  padding: 0;
}


</style>