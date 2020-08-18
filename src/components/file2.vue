<template>
<div>
  <el-timeline >
    <el-timeline-item v-for="file in filelist">
      <el-dropdown>
      <el-button class="filebutton" icon="el-icon-document" style="border-radius: 0px; width: 200px; " >
        {{file.title}}<i class="el-icon-arrow-down el-icon--right" ></i></el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-view" @click.native="toview(file)">查看</el-dropdown-item>
            <el-dropdown-item icon="el-icon-edit-outline" @click.native="toedit(file)">编辑</el-dropdown-item>
            <el-dropdown-item icon="el-icon-delete" @click.native="deletefile(file)">删除</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-close" @click.native="quitfav(file)">取消收藏</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>


    </el-timeline-item>
  </el-timeline>
</div>
</template>

<script>
export default {
  props:{
    filelist: {
      type:Array,

    }
  },
  name: "file",
  data()
  {
    return{

    }
  },
  methods:{
    quitfav(file){
      this.$axios.post('/'+sessionStorage.getItem("sid")+"/"+file.docid+"/cancelcollectdoc")
      .then( response=>{
        let res = response.data
        if (res.result === true){

          this.$router.push({
            path: '/work',
          })
          this.$message({
            message: '取消收藏成功',
            type: 'success'
          });
        }
        else {
          this.$message.error(res.msg);
        }
      })
    },
    toview:function (file)
    {
      this.$axios.post('/' + sessionStorage.getItem("sid")+ "/"+ file.docid + "/viewdoc")
          .then( response=>{
            let res = response.data
            if (res.result === false)
            {
              this.$message.error(res.msg)
              return
            }
            else {

            }
          })

      this.$axios.post('/' + sessionStorage.getItem("sid")+ "/mycomment/" + file.docid)
          .then( response=>{

            let res = response.data
            let tes = res.datas
            if (res.result === true)
            {
              this.$router.push({ path: '/work/viewdoc', query: {
                  file : file,
                  commentlist : tes
                }})
            }
          })


    },
    toedit(file){
      if (file.ischange===1){
        this.$message.error("此文档正在被编辑")
      }else{
        this.$axios.post('/' + sessionStorage.getItem("sid")+ "/"+ file.docid + "/editdoc")
            .then( response=>{
              let res = response.data
              if (res.result === false)
              {
                this.$message.error(res.msg)
                return
              }
              else {

              }
            })

        this.$axios.post('/' + sessionStorage.getItem("sid")+ "/mycomment/" + file.docid)
            .then( response=>{

              let res = response.data
              let tes = res.datas
              if (res.result === true)
              {
                this.$router.push({ path: '/work/showdoc', query: {
                    file : file,
                    commentlist : tes
                  }})
              }
            })
      }},
    deletefile(file)
    {
      this.$axios.post("/" + sessionStorage.getItem("sid") + "/" + file.docid + "/delete")
          .then(response =>{
            let res = response.data
            if (res.result === true){

              this.$router.push({
                path: '/work',
              })
              this.$message({
                message: '删除成功',
                type: 'success'
              });
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

</style>