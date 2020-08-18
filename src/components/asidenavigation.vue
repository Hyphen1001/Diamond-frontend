<template>
  <div>
    <el-row class="tac">
      <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#F5F5F5"
          text-color="#808080"
          active-text-color="#696969">
        <el-submenu index="1" @click.native="getgroup">
          <template slot="title" >
            <i class="el-icon-location"></i>
            <span>我的团队</span>
          </template>
          <el-menu-item>

            <span @click="dialogFormVisible = true"><i class="el-icon-circle-plus-outline"></i>新建团队</span>
            <el-dialog title="新建团队" :visible.sync="dialogFormVisible" :append-to-body="true">
              <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic">
                <el-form-item
                    prop="teamname"
                    label="团队名称"
                    :rules="[
      { required: true, message: '请输入团队名称', trigger: 'blur' }
    ]"
                >
                  <el-input v-model="dynamicValidateForm.teamname"></el-input>
                </el-form-item>
                <el-form-item
                    prop="message"
                    label="团队介绍"
                    :rules="[
      { required: true, message: '请输入团队介绍', trigger: 'blur' }
    ]"
                >
                  <el-input v-model="dynamicValidateForm.message"></el-input>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="submitForm(dynamicValidateForm)">创 建</el-button>
              </div>

            </el-dialog>
          </el-menu-item>
          <el-menu-item-group>
            <template slot="title">我加入的团队</template>

            <el-menu-item v-for="group in mygrouplist" @click="tosetting()">
              {{group.groupname}}
            </el-menu-item>

          </el-menu-item-group>

        </el-submenu>


        <el-menu-item index="2" @click="towork">
          <i class="el-icon-menu" ></i>
          <span slot="title">工作台</span>
        </el-menu-item>

        <el-menu-item index="4" @click="tobin">
          <i class="el-icon-setting"></i>
          <span slot="title">回收站</span>
        </el-menu-item>
      </el-menu>

    </el-row>
  </div>
</template>

<script>
import qs from "qs"
export default {
  name:"asidenavigation",
  data() {
    return {
      mygrouplist:'',
      activeIndex: '1',
      activeIndex2: '1',
      dialogFormVisible: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px',
      dynamicValidateForm: {
        message:'',
        teamname: ''
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.dialogFormVisible=false
      let param={name:this.dynamicValidateForm.teamname,
        message:this.dynamicValidateForm.message}
      this.$axios.post("/"+sessionStorage.getItem("sid")+"/mygroup/new",
          qs.stringify(param)).then(response =>{
        let res=response.data
        console.log(res.result)
        if (res.result===true){
          this.$router.push("/work")
          this.$message({
            message: '新建成功',
            type: 'success'
          });
        }else {
          this.$message.error(res.msg);
        }
      });
      for (let item of this.dynamicValidateForm.domains){
        param={}
      }
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    removeDomain(item) {
      var index = this.dynamicValidateForm.domains.indexOf(item)
      if (index !== -1) {
        this.dynamicValidateForm.domains.splice(index, 1)
      }
    },
    addDomain() {
      this.dynamicValidateForm.domains.push({
        value: '',
        key: Date.now()
      });
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    tochange()
    {
      console.log("123123")
      this.$router.push({path: '/'})
    },
    towork()
    {
      this.$router.push("/work")
    },
    tobin(){

      this.$axios.post("/" + sessionStorage.getItem("sid") + "/recycle")
          .then(response =>{
            let res = response.data
            console.log(res)
            if (res.result === true){
              this.$router.push({
                name: 'bin',
                params: {
                  filelist: res.datas
                }
              })
            }
            else {
              this.$message.error(res.msg);
            }
          })
    },
    tosetting()
    {
      this.$router.push("/work/setteam")
    },
    getgroup()
    {
      this.$axios.post("/" + sessionStorage.getItem("sid") + "/mygroup")
          .then( response => {
            let res = response.data
            if (res.result === true)
            {
              this.mygrouplist = res.datas
            }
            else {
              this.$message.error("未")
            }
          })
    }

  }
}
</script>

<style scoped>
.tac{
  margin-top: 130px;
  width: 200px;
}
</style>