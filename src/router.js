import Vue from 'vue'
import Router from 'vue-router'
import livros from '@/views/livro/livros/livros.vue'
import emprestimos from '@/views/emprestimo/emprestimos/emprestimos.vue'
import emprestimosAtivos from '@/views/emprestimo/emprestimos-ativos/emprestimos-ativos.vue'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/livros',
			component: livros
		},
		{
			path: '/emprestimos',
			component: emprestimos
		},
		{
			path: '/emprestimos-ativos',
			component: emprestimosAtivos
		},
		{
			path: '*',
			component: livros
		}
	]
})
