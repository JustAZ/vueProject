import Vue from 'vue'
import VueRouter from 'vue-router'


// import Home from '../views/Home.vue'
import Main from '../views/Main'
// import categotiesEdit from '../views/CategotiesEdit'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'main',
        component: Main,
        children: [{
            path: '/categoties/create',
            name: 'create',
            // component: categotiesEdit
            component: () => import('../views/CategotiesEdit')
        }, {
            path: '/categoties/list',
            name: 'list',
            component: () => import('../views/CategotiesList')
        }, {
            path: '/categoties/edit/:id',
            name: 'edit',
            component: () => import('../views/CategotiesEdit'),
            props: true//把路由上的参数注入到页面的props中
        }, {
            path: '/item/list',
            name: 'itemList',
            component: () => import('../views/itemList')
        },
        {
            path: '/item/create',
            name: 'itemedit',
            component: () => import('../views/itemEdit')
        }, {
            path: '/item/create/:id',
            name: 'edit',
            component: () => import('../views/itemEdit'),
            props: true//把路由上的参数注入到页面的props中
        },
        ]
    },
    //   {
    //     path: '/about',
    //     name: 'about',
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    //   }
]

const router = new VueRouter({
    routes
})

export default router
