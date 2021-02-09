<template>
    <div class="header">
        <!-- 隐藏右边菜单栏按钮-->
        <div class="lt_menu" @click="cae()">
            <i class="iconfont iconmenu" style="font-size: 30px"></i>
            后台管理系统
        </div>
        <!-- 用户头像 -->
        <div class="user-avatar">
            <img src="../assets/logo.png"/>
            <!-- 用户名下拉菜单 -->
            <el-dropdown class="user-name" trigger="click">
                        <span class="el-dropdown-link">
                            {{uname}}
                            <i class="el-icon-caret-bottom"></i>
                        </span>
                <el-dropdown-menu slot="dropdown">
                    <a href="https://github.com/lin-xin/vue-manage-system" target="_blank">
                        <el-dropdown-item>项目仓库</el-dropdown-item>
                    </a>
                    <el-dropdown-item divided command="loginout">退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex';

    var flag = false;
    export default {
        name: "top-menu",
        computed:{
          ...mapState([
              'user'
          ])
        },
        data() {
            return {
                uname:JSON.parse(sessionStorage.getItem('user')).nickname
            }
        },
        methods: {
            cae() {
                if (flag) {
                    this.$store.commit("bigger")
                    flag = false;
                } else {
                    this.$store.commit("littler")
                    flag = true;
                }
            }
        }
    }
</script>

<style scoped>
    .header {
        position: relative;
        top: 0;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 100%;
        height: 10%;
        font-size: 22px;
        background-color: #263238;
    }

    .user-avatar img {
        position: relative;
        left: 90%;
        top: -30px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: cornflowerblue;
    }

    .user-name {
        position: relative;
        left: 90.5%;
        top: -45px;
        width: 50px;
        color: ghostwhite;
    }

    .lt_menu {
        position: relative;
        top: 10px;
        font-size: 30px;
        width: 400px;
        color: white;
    }
</style>