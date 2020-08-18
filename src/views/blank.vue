<template>

</template>

<script>
export default {
  name: "blank",
  data()
  {
  },
  created() {
    this.$axios.post('/' + sessionStorage.getItem("sid")+ "/mycomment/" + this.$route.query.file.docid)
        .then( response=>{

          let res = response.data
          let tes = res.datas
          if (res.result === true)
          {
            this.$router.push({ path: '/work/showdoc', query: {
                file : this.$route.query.file,
                commentlist : tes
              }})
          }
        })
  },

}
</script>

<style scoped>

</style>