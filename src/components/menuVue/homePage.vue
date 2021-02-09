<template>
    <div class="body-iframe">
        <el-row :gutter="20">
            <el-col :span="8">
                <el-card class="uf-person" style="background-color: gold">
                    <el-image :src="require('../../assets/logo.png')" class="img"></el-image>
                    <div class="name">{{unickname}}</div>
                    <div class="usname">{{uusername}}</div>
                    <pre class="uphone">手机号：{{uphone}}</pre>
                    <pre class="uhobby">爱&nbsp;好：{{uhobby}}</pre>
                    <pre class="ulastlogintime">上次登录时间：{{ulastlogintime.replace('T',' ')}}</pre>
                </el-card>
            </el-col>
            <el-col :span="11">
                <el-card class="rollmenu" style="background-color:cornflowerblue">
                    <div class="rollword" @click="stop">{{umsg}}</div>
                </el-card>
            </el-col>
            <el-col :span="11">
                <el-card class="note" style="background-color:orange">
                    <el-form :rules="checkdate" :model="dates">
                        <el-input type="textarea" v-model="umsg"></el-input>
                        <el-button></el-button>
                        <el-row>
                            <el-col :span="10">
                                <el-form-item label="开始日期" prop="startTime">
                                    <el-date-picker v-model="dates.startTime" @change="tim" type="date"
                                                    value-format="yyyy-MM-dd" format="yyyy-MM-dd"
                                                    style="width: 60%"></el-date-picker>

                                </el-form-item>
                            </el-col>
                            <el-col :span="10">
                                <el-form-item label="结束日期" prop="endTime">
                                    <el-date-picker v-model="dates.endTime" @change="tim" type="date"
                                                    value-format="yyyy-MM-dd" format="yyyy-MM-dd"
                                                    style="width: 60%"></el-date-picker>
                                </el-form-item>
                            </el-col>
                            <el-col :span="4">
                                <el-button icon="el-icon-search" @click="selectRoll('form')" :loading="loadingbut"
                                           v-preventReClick>{{loadingbuttext}}
                                </el-button>
                            </el-col>
                        </el-row>
                    </el-form>

                </el-card>
            </el-col>
        </el-row>
        <!--                <iframe src="https://www.baidu.com/?tn=80035161_1_dg"   class="c"></iframe>-->
        <el-row :gutter="20">
            <el-col :span="8">
                <el-card class="iframe" style="background-color:darkorchid">
                    <video autoplay="autoplay" width="100%" height="100%" preload="auto" controls="controls">
                        <source src="../../assets/video/te.mp4" type="video/mp4">
                    </video>
                </el-card>
            </el-col>
<el-col :span="11">
    <el-card class="note" style="background-color:orange">
    <el-table :data="nots" height="100%">
        <el-table-column
                prop="id"
                label="序号"
                width="50%"
                align="center">
        </el-table-column>
        <el-table-column
                prop="txt"
                label="便签"
                width="300%"
                align="center">
        </el-table-column>
        <el-table-column
                prop="makedate"
                label="创建日期"
                width="100%"
                align="center">
        </el-table-column>
        <el-table-column
                prop="star"
                label="星级"
                align="center">
        </el-table-column>
    </el-table>
    <el-pagination></el-pagination>
    </el-card>
</el-col>
        </el-row>
    </div>

</template>

<script>
    import userInfo from "./el-card/userInfo";
    import axios from "axios";

    export default {
        name: "homePage",
        data() {
            var validatorstartdate = (checkdate, value, callback) => {
                if (value == null || value == '') {
                    callback(new Error('请输入开始日期'));
                } else {
                    var starttime = this.crtTimeFtt(new Date(Date.parse(value)));
                    var sysdate = this.crtTimeFtt(new Date());
                    if (starttime > sysdate) {
                        callback(new Error('开始日期不能大于当前时间'));
                    }
                }
            }
            var validatorenddate = (checkdate, value, callback) => {
                if (value == null || value == '') {
                    callback(new Error('请输入结束日期'));
                } else {
                    var endtime = this.crtTimeFtt(new Date(Date.parse(value)));
                    var sysdate = this.crtTimeFtt(new Date());

                    console.log("endtime" + endtime)
                    console.log("sysdate" + sysdate)
                    if (endtime < sysdate) {
                        callback(new Error('结束日期不能小于当前时间'));
                    }
                }
            }
            return {
                unickname: JSON.parse(sessionStorage.getItem('user')).nickname,
                uusername: JSON.parse(sessionStorage.getItem('user')).username,
                uhobby: JSON.parse(sessionStorage.getItem('user')).hobby,
                uphone: JSON.parse(sessionStorage.getItem('user')).phone,
                ulastlogintime: JSON.parse(sessionStorage.getItem('user')).lastlogintime,
                umsg: '欢迎登录本系统，谢谢您的使用！',
                Intervalid: null,//用于后面清除定时器,
                dates: {
                    startTime: this.getNowTime(),
                    endTime: this.getNowTime(),
                    userId: JSON.parse(sessionStorage.getItem('user')).id,
                },
                checkdate: {
                    startTime: [
                        // trigger: 'blur' -> 失去焦点触发
                        {required: true, message: '请输入开始时间', trigger: 'blur,change'},
                        {type: 'date', validator: validatorstartdate}
                    ],
                    endTime: [
                        // trigger: 'blur' -> 失去焦点触发
                        {required: true, message: '请输入结束时间', trigger: 'blur,change'},
                        {type: 'date', validator: validatorenddate}
                    ]
                },
                loadingbut: false,//审核提交加载中
                loadingbuttext: '',
                nots:'',
                note:'1'
            }
        },
        mounted() {
            this.selectRoll(),
            this.running()
        },
        watch:{
            note:"initMsg"
        },
        methods: {
            running() {
                //防止开启多个定时器
                if (this.Intervalid != null) return;
                //通过使用ES6的()=>来实现Interval定时器的this指向外部的this指针
                this.Intervalid = setInterval(() => {
                    var start1 = this.umsg.substring(0, 1);
                    var stop1 = this.umsg.substring(1);
                    this.umsg = stop1 + start1;
                }, 500)
            },
            stop() {
                //清除定时器
                if (this.Intervalid == null) {
                    this.running();
                    return;
                }
                clearInterval(this.Intervalid);
                this.Intervalid = null;
            },
            getNowTime() {
                var now = new Date();
                var year = now.getFullYear(); //得到年份
                var month = now.getMonth(); //得到月份
                var date = now.getDate(); //得到日期
                var hour = " 00:00:00"; //默认时分秒 如果传给后台的格式为年月日时分秒，就需要加这个，如若不需要，此行可忽略
                month = month + 1;
                month = month.toString().padStart(2, "0");
                date = date.toString().padStart(2, "0");
                var defaultDate = `${year}-${month}-${date}${hour}`;
                console.log(defaultDate)
                return defaultDate;
                this.$set(this.info, "stockDate", defaultDate);
            },
            tim() {
                console.log(this.dates)
            },
            crtTimeFtt(val) {
                if (val != null) {
                    var date = new Date(val);
                    return new Date(date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate());
                }
            },
            selectRoll() {
                this.loadingbut = true;
                this.loadingbuttext = '...';

                /* json格式提交： */
                let formData = JSON.stringify(this.dates);
                axios({
                    method: "post",
                    url: "/api/getNote",
                    headers: {
                        "Content-Type": "text/plain"
                    },
                    data: formData
                }).then((response) => {
                    console.log(response);
                    var r = response.data;
                    console.log(r);
                    if ("" != r && r != null) {
                        this.nots=r;
                        this.umsg=JSON.parse(JSON.stringify(this.nots))[0].txt;
                    }
                }).catch((response) => {
                    this.$alert(response);
                    //返回index跳转index页面否则提示账户或密码不正确
                });
                this.loadingbut = false;
                this.loadingbuttext = '';
            }
        }
    }
</script>

<style>
    .body-iframe {
    }

    .img {
        position: relative;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background-color: cornflowerblue;
    }

    .name {
        position: relative;
        left: 110px;
        top: -50px;
    }

    .usname {
        position: relative;
        left: 110px;
        top: -50px;
        color: darkgray;
        font-size: 10px;
    }

    /*.rollmenu {*/
    /*    position: relative;*/
    /*    width: auto;*/
    /*    height: 60px;*/

    /*    margin-top: -20.15%;*/
    /*    color: cornflowerblue;*/
    /*}*/

    /*.iframe {*/
    /*    display: inline;*/
    /*    position: relative;*/
    /*    width: auto;*/
    /*    height: 440px;*/

    /*    margin-top: 1%;*/
    /*}*/

    /*.note {*/
    /*    position: relative;*/
    /*    width: 25%;*/
    /*    margin-top: -20%;*/
    /*    background-color: darkmagenta;*/
    /*}*/
</style>