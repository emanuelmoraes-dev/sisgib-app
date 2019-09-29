import listarEmprestimos from '@/components/listar-emprestimos/listar-emprestimos.vue'
import { definitionAdapter } from 'list-entities-vue'

export default {
	name: 'emprestimos-ativos',

	components: { listarEmprestimos },

	data () {
		return {
			definitions: definitionAdapter({
				dateEmprestimo: {
					type: Date,
					sort: 1,
					optionSearch: 'Data do Empréstimo',
					modalHeaderText: 'Data do Empréstimo',
					displayAttr: 'Data do Empréstimo'
				},
				dataDevolucao: {
					type: Date,
					optionSearch: 'Data de Devolução',
					modalHeaderText: 'Data de Devolução',
					displayAttr: 'Data de Devolução'
				},
				'livro.titulo': {
					type: String,
					optionSearch: 'Título do Livro',
					modalHeaderText: 'Título do Livro',
					defaultLastAttr: 'Título do Livro'
				},
				'livro.volume': {
					type: Number,
					optionSearch: 'Volume do Livro',
					modalHeaderText: 'Volume do Livro'
				},
				'livro.autor': {
					type: String,
					optionSearch: 'Autor do Livro',
					modalHeaderText: 'Autor do Livro'
				},
				'livro.editora': {
					type: String,
					optionSearch: 'Editora do Livro',
					modalHeaderText: 'Editora do Livro'
				},
				'livro.categoria': {
					type: String,
					optionSearch: 'Categoria do Livro',
					modalHeaderText: 'Categoria do Livro'
				},
				'livro.area': {
					type: String,
					optionSearch: 'Área do Livro',
					modalHeaderText: 'Área do Livro'
				},
				'livro.idioma': {
					type: String,
					optionSearch: 'Idioma do Livro',
					modalHeaderText: 'Idioma do Livro'
				}
			})
		}
	},

	methods: {
		onError(err) {
			console.error(err)
		}
	}
}
