<template>
  <body id="poster">
  <div>
    <templateshowfile :list="slist">
    </templateshowfile>
  </div>
  </body>
</template>

<script>
import showfile from "@/components/showfile"
import file from "@/components/file";
import Templatefile from "@/components/templatefile";
import templateshowfile from "@/components/templateshowfile";
export default {

  components: {
    templateshowfile,
    Templatefile,
    showfile,
    file
  },
  data()
  {
    return{
      slist:[
        {
          title:"论文",
          content: "<p>标题</p>" + "<p>摘要</p>"
        },


      ]

    }

  }
}

</script>

<style scoped>

</style>