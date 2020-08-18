<template>
  <body id="poster">
  <div>
    <showfile :list="filelist">
    </showfile>
  </div>
  </body>
</template>

<script>
import showfile from "@/components/showfile"
import file from "@/components/file";
export default {
  components: {
    showfile,
    file
  },
  data()
  {
    return{
      filelist : this.$route.query.filelist3
    }

  }
}

</script>

<style scoped>

</style>