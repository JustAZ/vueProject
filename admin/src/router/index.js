import Vue from 'vue'
import VueRouter from 'vue-router'


// import Home from '../views/Home.vue'
import Main from '../views/Main'
// import categotiesEdit from '../views/CategotiesEdit'

Vue.use(VueRouter)

const routes = [
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/Login'),
        meta: { isPublic: true }
    },
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
            name: 'edits',
            component: () => import('../views/itemEdit'),
            props: true//把路由上的参数注入到页面的props中
        },
        {
            path: '/hero/list',
            name: 'heroList',
            component: () => import('../views/heroList')
        },
        {
            path: '/hero/create',
            name: 'heroedit',
            component: () => import('../views/heroEdit')
        }, {
            path: '/hero/create/:id',
            name: 'heroedits',
            component: () => import('../views/heroEdit'),
            props: true//把路由上的参数注入到页面的props中
        },
        {
            path: '/articles/list',
            name: 'heroList',
            component: () => import('../views/articleList')
        },
        {
            path: '/articles/create',
            name: 'articlesedit',
            component: () => import('../views/articleEdit')
        }, {
            path: '/articles/create/:id',
            name: 'articlesedits',
            component: () => import('../views/articleEdit'),
            props: true//把路由上的参数注入到页面的props中
        },

        {
            path: '/ads/list',
            name: 'adsList',
            component: () => import('../views/adsList')
        },
        {
            path: '/ads/create',
            name: 'adsedit',
            component: () => import('../views/adsEdit')
        }, {
            path: '/ads/create/:id',
            name: 'adsedits',
            component: () => import('../views/adsEdit'),
            props: true//把路由上的参数注入到页面的props中
        },

        {
            path: '/admin/list',
            name: 'adminList',
            component: () => import('../views/adminList')
        },
        {
            path: '/admin/create',
            name: 'adminedit',
            component: () => import('../views/adminEdit')
        }, {
            path: '/admin/create/:id',
            name: 'adminedits',
            component: () => import('../views/adminEdit'),
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

//全局路由首尾
router.beforeEach((to, form, next) => {
    if (!to.meta.isPublic && !localStorage.token) {
        next('/login')
    }
    next()
})

export default router
