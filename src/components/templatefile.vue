<template>
  <div>
    <el-row  :gutter="10" style="width: 80%;">
      <el-col :span="8" v-for="file in filelist" style:>
        <el-button class="filebutton" icon="el-icon-document" style="border-radius: 0px; width: 100%; " @click="toedit(file)" >
          {{file.title}}
        </el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props:{
    filelist: {
      type:Array,
      default()
      {
        return [{
          title :"无文档",
          content :"this is file a"
        },
        ]
      }
    }
  },
  name: "templatefile",
  data()
  {
    return{

    }
  },
  methods:{
    toedit:function (file)
    {
      this.$router.push({ path: '/work/createdoc', query: file})
    }
  }
}
</script>

<style scoped>

</style>