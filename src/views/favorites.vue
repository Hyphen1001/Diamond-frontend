<template>
  <body id="poster">
  <div>
    <showfile2 :list="filelist">
    </showfile2>
  </div>
  </body>
</template>

<script>
import showfile from "@/components/showfile"
import file from "@/components/file";
import showfile2 from "@/components/showfile2";
export default {
  components: {
    showfile2,
    showfile,
    file
  },
  data()
  {
    return{
      filelist : this.$route.query.filelist2
    }

  }
}

</script>

<style scoped>

</style>