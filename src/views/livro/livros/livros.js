import listarLivros from '@/components/listar-livros/listar-livros.vue'

export default {
	name: 'livros',

	components: { listarLivros },

	methods: {
		onError (err) {
			console.error(err)
		},

		entityView (entity, index) {
			this.$refs.listarLivros.getListEntities().entityView(entity, index)
		},

		async realizarEmprestimo (entity, index) {
			try {
				let emprestimo = {
					aluno: { id: this.getAlunoLogado()._id },
					livro: { ...entity }
				}

				delete emprestimo.livro._id

				await this.$req.emprestimo.save(emprestimo)
				this.$set(entity, 'reservado', true)
			} catch (err) {
				console.error(err)
			}
		}
	}
}
