<template>
  <div>
    <el-row class="tac">
      <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>我的团队</span>
          </template>
          <el-menu-item>
            <i class="el-icon-circle-plus-outline"></i>
            <span @click="dialogFormVisible = true">新建团队</span>
            <el-dialog title="新建团队" :visible.sync="dialogFormVisible">
              <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic">
                <el-form-item
                        prop="email"
                        label="团队名称"
                        :rules="[
      { required: true, message: '请输入团队名称', trigger: 'blur' }
    ]"
                >
                  <el-input v-model="dynamicValidateForm.email"></el-input>
                </el-form-item>
                <el-form-item
                        v-for="(domain, index) in dynamicValidateForm.domains"
                        :label="'成员' + index"
                        :key="domain.key"
                        :prop="'domains.' + index + '.value'"
                        :rules="{required: true, message: '成员不能为空', trigger: 'blur'}"
                        :align="left"
                >
                  <el-input v-model="domain.value" style="width: 500px" align="left"></el-input><el-button @click.prevent="removeDomain(domain)">删除</el-button>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submitForm('dynamicValidateForm')">提交</el-button>
                  <el-button @click="addDomain">新增成员</el-button>
                  <el-button @click="resetForm('dynamicValidateForm')">重置</el-button>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
              </div>
            </el-dialog>
          </el-menu-item>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu" @click="towork"></i>
          <span slot="title">工作台</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4" @click="tobin">
          <i class="el-icon-setting"></i>
          <span slot="title">回收站</span>
        </el-menu-item>
      </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name:"asidenavigation",
  data() {
    return {
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
        domains: [{
          value: ''
        }],
        email: ''
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
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
      this.$router.push("/work/bin")
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