import Vue from 'vue'
import App from './App.vue'
import router from './router'
import  './assets/scss/style.scss'
import './assets/icon-font/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default global options } */)

import card from './components/Card'
Vue.component('m-card',card)

import listcard from './components/listCard'
Vue.component('list-card',listcard)

Vue.config.productionTip = false

import axios from 'axios'
Vue.prototype.$http = axios.create({
    baseURL: "http://localhost:3000/web/api"
    
})

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
