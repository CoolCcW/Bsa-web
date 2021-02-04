<template>
    <div class="body_left">
        <el-menu class="left-menu" id="body_left">
            <el-link style="font-size: 20px;  margin-left: 12px;height: 80px" v-for="tab in tabs">
                <i :class='tab.iconmenu' style="font-size: 20px;"></i>
                {{tab.menu}}
            </el-link>
        </el-menu>
    </div>
</template>
<script>
    import {mapState} from 'vuex'

    var flag = true;
    export default {
        name: "leftmenu",
        computed:{
            roll(){
                flag = this.$store.state.bol
                return flag;
            },
            ...mapState([
                'tabs'
            ]),
        },
        watch:{
            roll:'chengeMenu'
        },
        methods:{
            chengeMenu(){
                var ele = document.getElementsByClassName("body_left")
                if(flag){
                    for (var i = 0; i<ele.length;i++) {
                        ele[i].style.width="20%";

                    };
                }else{
                    for (var i = 0; i<ele.length;i++) {
                        ele[i].style.width="6%";
                    };

                }

            }
        }
    }
</script>

<style scoped>
    .body_left {
        width: 20%;
        height: 100%;
        background-color: #263238;
    }

    .left-menu {
        background-color: #263238;
        position: relative;
        margin-left: 20px;
    }
</style>