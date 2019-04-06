// 项目入口文件
import Vue from 'vue';
// 1.1 导入路由的包
import VueRouter from 'vue-router';
// 1.2 安装路由模块
Vue.use(VueRouter);

// 1.3 导入router
import router from './router.js';

import { Header } from 'mint-ui';
import 'mint-ui/lib/style.css';
import './lib/mui/css/mui.css';
import './lib/mui/css/icon-extra.css';

Vue.component(Header.name, Header);

import app from './App.vue';

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router
})