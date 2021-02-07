import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        bol:true,
        tabs: [
            {
                menu: '系统首页',
                iconmenu:'iconfont iconhome',
                url:'homepage'
            },
            {
                menu: '视频播放',
                iconmenu:'iconfont iconplay',
                url:'vidiomenu'
            },
            {
                menu: '系统邮件',
                iconmenu:'iconfont iconemail',
                url:'homepage'
            },
            {
                menu: '系统设置',
                iconmenu:'iconfont iconsetting',
                url:'homepage'
            },
        ]
    },
    mutations: {
        bigger(state){
            state.bol=true;
            state.tabs=[
                {
                    menu: '系统首页',
                    iconmenu:'iconfont iconhome',
                    url:'homepage'
                },
                {
                    menu: '视频播放',
                    iconmenu:'iconfont iconplay',
                    url:'vidiomenu'
                },
                {
                    menu: '系统邮件',
                    iconmenu:'iconfont iconemail',
                    url:'homepage'
                },
                {
                    menu: '系统设置',
                    iconmenu:'iconfont iconsetting',
                    url:'homepage'
                },
            ]
        },
        littler(state){
            state.bol=false;
            state.tabs= [
                {
                    menu: '',
                    iconmenu:'iconfont iconhome',
                    url:'homepage'
                },
                {
                    menu: '',
                    iconmenu:'iconfont iconplay',
                    url:'vidiomenu'
                },
                {
                    menu: '',
                    iconmenu:'iconfont iconemail',
                    url:'homepage'
                },
                {
                    menu: '',
                    iconmenu:'iconfont iconsetting',
                    url:'homepage'
                },
            ]
        }
    }
})
export default store;