import 'font-awesome/css/font-awesome.min.css'
import 'ionicons/dist/css/ionicons.min.css'
import 'list-entities-vue/assets/css/vuestic.css'
import 'list-entities-vue/assets/css/style.css'
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
