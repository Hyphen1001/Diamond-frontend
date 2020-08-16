<template>
    <div>
        <el-container>
            <el-header><Header></Header></el-header>
            <el-main>
                <div align="center">
                    <el-form ref="form" :model="form" label-width="80px" size="small" style="width:400px">
                        <el-form-item label="昵称" >
                            <el-input v-model="form.name" placeholder="请输入昵称"></el-input>
                        </el-form-item>
                        <el-form-item label="性别" align="left">
                            <el-select v-model="form.region" placeholder="请选择活动性别">
                                <el-option label="男" value="shanghai"></el-option>
                                <el-option label="女" value="beijing"></el-option>
                                <el-option label="秘密" value="2"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="生日">
                            <el-col :span="11">
                                <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                            </el-col>

                        </el-form-item>
                        <el-form-item label="城市">
                           <el-input placeholder="请输入所在城市"></el-input>
                        </el-form-item>

                        <el-form-item label="自我介绍">
                            <el-input type="textarea" v-model="form.desc"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="onSubmit"><a href="../"> 保存</a></el-button>
                            <el-button>取消</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    import Header from "../components/Header";
    export default {
        data() {
            return {
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                }
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            }
        },
        name: "ChangeInfo",
        components:{Header}
    }
</script>

<style scoped>
    .el-header {
        background-color: #409EFF;
        color: #333;
        text-align: center;
        line-height: 0px;
    }
    .el-main {
        background-color: Transparent;
        color: #333;
        text-align: center;
        line-height: 160px;
    }
</style>