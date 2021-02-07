<template>
    <div class="body-page">
        <div class="body_left">
            <el-menu class="left-menu" id="body_left">
                <el-link @click="chengeMenupage(tab.url)" style="font-size: 20px;  margin-left: 12px;height: 80px"
                         v-for="tab in tabs">
                    <i :class='tab.iconmenu' style="font-size: 20px;"></i>
                    {{tab.menu}}
                </el-link>
            </el-menu>
        </div>
        <div class="body-home">
            <home-page class="homepage"></home-page>
            <vidiomenu class="vidiomenu" style="display: none"></vidiomenu>
        </div>
    </div>
</template>
<script>
    import {mapState} from 'vuex'
    import homePage from "./menuVue/homePage";
    import vidiomenu from "./menuVue/vidiomenu";

    var flag = true;
    export default {
        name: "leftmenu",
        components: {
            homePage,
            vidiomenu
        },
        computed: {
            roll() {
                flag = this.$store.state.bol
                return flag;
            },
            ...mapState([
                'tabs'
            ]),
        },
        watch: {
            roll: 'chengeMenu'
        },
        methods: {
            chengeMenu() {
                var ele = document.getElementsByClassName("body_left")
                var ele2 = document.getElementsByClassName("body-home")
                if (flag) {
                    for (var i = 0; i < ele.length; i++) {
                        ele[i].style.width = "20%";
                        ele2[i].style.left="20%";

                    }
                    ;
                } else {
                    for (var i = 0; i < ele.length; i++) {
                        ele[i].style.width = "6%";
                        ele2[i].style.left="6%";
                    }
                    ;

                }

            },
            chengeMenupage(menupage) {
                var a = document.getElementsByClassName(menupage);
                var s = this.$store.state.tabs;
                for (let i = 0; i <s.length; i++) {
                    if(s[i].url==menupage){
                        a[0].style.display='';
                    }else{
                        document.getElementsByClassName(s[i].url)[0].style.display='none';
                    }
                }

            }
        }
    }
</script>

<style scoped>
    .body-page {
        height: 100%;
        width: 100%;
    }

    .body_left {
        position: relative;
        width: 20%;
        height: 100%;
        background-color: #263238;
    }

    .left-menu {
        background-color: #263238;
        position: relative;
        margin-left: 20px;
    }
    .body-home{
        position: relative;
        left: 20%;
        color: darkmagenta;
        top: -100%;
        height: 100%;
    }
</style>