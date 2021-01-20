<template>
    <el-form id="logon">
        <h2 style="margin-left: 4%">后台管理系统</h2>
            <el-form-item :model="user" >
                <el-col :span=7>
                <el-input placeholder="请输入用户名" v-model="user.name"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item >
                <el-col :span=7>
                    <el-input placeholder="请输入密码" show-password v-model="user.password"></el-input>
                </el-col>
            </el-form-item>
            <el-button type="primary" style="margin-left: 8.5%" @click="submit">立即登录</el-button>
        </el-form>
</template>


<script>
    import axios from 'axios';
    import '../../vue.config'

    export default {
        name: "LogonUser",
        data(){
            return{
                user:{
                    name:'',
                    password:''
                }
            }
        },
        methods:{
            submit(){
                    /* json格式提交： */
                    let formData = JSON.stringify(this.user);
                    axios({
                        method:"post",
                        url:"/api/verifyUser",
                        headers: {
                            "Content-Type": "text/plain"
                        },
                        data:formData
                    }).then((response)=>{
                        console.log(response);
                        var r = response.data.toString();
                        if("index"==r){
                            sessionStorage.setItem("token", 'true');
                            this.$router.push('/index')
                            // this.$alert(r,'友情提示', "success", "success");
                        }else{
                            this.$alert(r,'友情提示', "warning","warning");
                        }
                    }).catch((response)=>{
                        this.$alert(response);
                        //返回index跳转index页面否则提示账户或密码不正确
                    });
            }
        }
    }
</script>

<style>
   #logon{
       margin-left: 40%;
       margin-top: 10%;
   }
</style>