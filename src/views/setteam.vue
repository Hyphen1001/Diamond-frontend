<template>
  <body id="poster">
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
          <el-page-header @back="goBack" content="团队管理">
          </el-page-header>
          <br><br>
          <el-table
              :data="tableData"
              stripe
              border
              style="width: 80%">

            <el-table-column
                prop="date"
                label="ID"
                width="180">
            </el-table-column>
            <el-table-column
                prop="name"
                label="昵称"
                width="180">
            </el-table-column>
            <el-table-column
                prop=""
                label="权限"
                width="360">
              <el-radio v-model="radio1" label="1" border>评论</el-radio>
              <el-radio v-model="radio1" label="2" border>编辑</el-radio>
            </el-table-column>
            <el-table-column

                label="操作"
            >
              <template slot-scope="scope">
                <el-button
                    size="mini"
                    @click="">设为管理员</el-button>
                <el-button
                    size="mini"
                    type="danger"
                    @click="">移出团队</el-button>
              </template>
            </el-table-column>
          </el-table>
          <br><br>
          <el-button type="primary" style="margin-left: 55%">邀请新成员</el-button>
          <el-button type="success" style="margin-left: 5%">保存更改</el-button>
        </el-main>
      </el-container>
    </el-container>
  </div>

  </body>
</template>

<script>
import top from "@/components/top";
import asidenavigation from "@/components/asidenavigation";
export default {
  name: "setTeam",
  components: {
    top,
    asidenavigation,
  },

  data(){
    return{

      value:true,
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  methods:{
    goBack() {
      this.$router.push("/work")
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