import Vue from 'vue'
import Router from 'vue-router'
import livros from '@/views/livro/livros/livros.vue'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/livros',
			component: livros
		},
		{
			path: '*',
			component: livros
		}
	]
})
