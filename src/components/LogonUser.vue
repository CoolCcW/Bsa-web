<template>
    <el-form id="logon">
        <h2 style="margin-left: 4%">后台管理系统</h2>
            <el-form-item >
                <el-col span="7">
                <el-input placeholder="请输入用户名"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item >
                <el-col span="7">
                    <el-input placeholder="请输入密码" show-password></el-input>
                </el-col>
            </el-form-item>
            <el-button type="primary" style="margin-left: 8.5%">立即登录</el-button>
        </el-form>
</template>


<script>
    export default {
        name: "LogonUser",
    }
</script>

<style>
   #logon{
       margin-left: 40%;
       margin-top: 10%;
   }
</style>