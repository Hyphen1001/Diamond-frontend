<template>
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
          <el-input style="width: 80%;  margin-right:20%"
                    placeholder="请输入文档名"
                    v-model="docname"
                    clearable>
          </el-input>
          <br> <br> <br>
          <el-card style="height: 610px;width: 80%">
            <quill-editor v-model="content" ref="myQuillEditor" style="height: 500px;" :options="editorOption">
            </quill-editor>
          </el-card>
          <br><br>
          <el-button type="success" round style="margin-left:50%" @click="save()">保存</el-button>
          <br><br>
          <el-timeline style="width: 80%">
            <el-timeline-item timestamp="2018/4/12" placement="top">
              <el-card>
                <h4>更新 Github 模板</h4>
                <p>王小虎 提交于 2018/4/12 20:46</p>
              </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2018/4/3" placement="top">
              <el-card>
                <h4>更新 Github 模板</h4>
                <p>王小虎 提交于 2018/4/3 20:46</p>
              </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2018/4/2" placement="top">
              <el-card>
                <h4>更新 Github 模板</h4>
                <p>王小虎 提交于 2018/4/2 20:46</p>
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
          <el-button type="success" round style="margin-left:50%" @click="save()">发表</el-button>
          <br><br>
        </div>
      </el-main>

    </el-container>
  </el-container>
</template>

<script>
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
      docname: this.$route.query.filename,
      content: this.$route.query.content,
      editorOption: {},
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    };
  },
  methods: {
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
    }
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