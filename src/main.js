import 'list-entities-vue/assets/css/vuestic.css'
import 'list-entities-vue/assets/css/style.css'
import 'list-entities-vue/lib/fontawesome/css/all.min.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import jQuery from 'jquery'
import axios from 'axios'

import './mixins'

Vue.use(BootstrapVue)

axios.defaults.withCredentials = true
axios.defaults.timeout = 7000

global.jQuery = jQuery
global.$ = jQuery

Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')
