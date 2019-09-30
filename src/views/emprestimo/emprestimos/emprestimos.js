import listarEmprestimos from '@/components/listar-emprestimos/listar-emprestimos.vue'

export default {
	name: 'emprestimos',

	components: { listarEmprestimos },

	methods: {
		onError (err) {
			console.error(err)
		}
	}
}
