import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        user:{
            name:'',
            password:''
        },
        bol:true,
        tabs: [
            {
                menu: '系统首页',
                iconmenu:'iconfont iconhome'
            },
            {
                menu: '视频播放',
                iconmenu:'iconfont iconplay'
            },
            {
                menu: '系统邮件',
                iconmenu:'iconfont iconemail'
            },
            {
                menu: '系统设置',
                iconmenu:'iconfont iconsetting'
            },
        ]
    },
    mutations: {
        makeUser(state,user){
            state.user=user;
        },
        bigger(state){
            state.bol=true;
            state.tabs=[
                {
                    menu: '系统首页',
                    iconmenu:'iconfont iconhome'
                },
                {
                    menu: '视频播放',
                    iconmenu:'iconfont iconplay'
                },
                {
                    menu: '系统邮件',
                    iconmenu:'iconfont iconemail'
                },
                {
                    menu: '系统设置',
                    iconmenu:'iconfont iconsetting'
                },
            ]
        },
        littler(state){
            state.bol=false;
            state.tabs= [
                {
                    menu: '',
                    iconmenu:'iconfont iconhome'
                },
                {
                    menu: '',
                    iconmenu:'iconfont iconplay'
                },
                {
                    menu: '',
                    iconmenu:'iconfont iconemail'
                },
                {
                    menu: '',
                    iconmenu:'iconfont iconsetting'
                },
            ]
        }
    }
})
export default store;