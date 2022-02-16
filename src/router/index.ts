import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'

const About = {template: '<div>About</div>'}

// 存放固定的路由
const defaultRouterList: Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: 'login',
        component: ()=> import('@/page/home/Home.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
]

export const page404 = {
    path: '/:w+',
    name: '404Page',
    redirect: '/result/404',
}

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes: defaultRouterList, // short for `routes: routes`
})

export {router};