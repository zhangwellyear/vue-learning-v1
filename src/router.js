// 1. 导入vue-router包
import VueRouter from 'vue-router'

import HomeComponent from './components/HomeComponent.vue';
import MemborComponent from './components/MemborComponent.vue';
import CartComponent from './components/CartComponent.vue';
import SearchComponent from './components/SearchComponent.vue';

// 3. 创建 vue对象
var router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: HomeComponent
        },
        {
            path: '/membor',
            component: MemborComponent
        },
        {
            path: '/cart',
            component: CartComponent
        },
        {
            path: '/search',
            component: SearchComponent
        },
    ],
    linkActiveClass: 'mui-active'
});

export default router;