import { definitionAdapter, listEntities } from 'list-entities-vue'
import { livro as req } from '@/request/LivroHttp'

export default {
	name: 'listar-livros',

	components: { listEntities },

	data () {
		return {
			entities: null,
			totalElements: null,
			page: null,
			attrSearch: null,
			inputSearch: null
		}
	},

	created () {
		this.entities = this.value
		this.totalElements = this.totalElements$
		this.attrSearch = this.attrSearch$
		this.page = this.page$
		this.inputSearch = this.inputSearch$
	},

	methods: {
		getListEntities () {
			return this.$refs.listEntities
		}
	},

	watch: {
		entities (newValue, oldValue) {
			if (newValue !== oldValue)
				this.$emit('input', newValue)
		},

		value (newValue, oldValue) {
			if (newValue !== oldValue)
				this.entities = newValue
		},

		totalElements (newValue, oldValue) {
			if (newValue !== oldValue)
				this.$emit('update:totalElements$', newValue)
		},

		totalElements$ (newValue, oldValue) {
			if (newValue !== oldValue)
				this.totalElements = newValue
		},

		page (newValue, oldValue) {
			if (newValue !== oldValue)
				this.$emit('update:page$', newValue)
		},

		page$ (newValue, oldValue) {
			if (newValue !== oldValue)
				this.page = newValue
		},

		attrSearch (newValue, oldValue) {
			if (newValue !== oldValue)
				this.$emit('update:attrSearch$', newValue)
		},

		attrSearch$ (newValue, oldValue) {
			if (newValue !== oldValue)
				this.attrSearch = newValue
		},

		inputSearch (newValue, oldValue) {
			if (newValue !== oldValue)
				this.$emit('update:inputSearch$', newValue)
		},

		inputSearch$ (newValue, oldValue) {
			if (newValue !== oldValue)
				this.inputSearch = newValue
		}
	},

	props: {
		autoSearch: {
			type: Boolean,
			default: true
		},

		definitions: {
			type: Object,
			default: () => definitionAdapter({
				titulo: {
					type: String,
					sort: 1,
					optionSearch: 'Título',
					modalHeaderText: 'Título',
					displayAttr: 'Título'
				},
				volume: {
					type: Number,
					optionSearch: 'Volume',
					modalHeaderText: 'Volume',
					displayAttr: 'Volume'
				},
				autor: {
					type: String,
					optionSearch: 'Autor',
					modalHeaderText: 'Autor',
					displayAttr: 'Autor'
				},
				editora: {
					type: String,
					optionSearch: 'Editora',
					modalHeaderText: 'Editora',
					defaultLastAttr: 'Editora'
				},
				categoria: {
					type: String,
					optionSearch: 'Categoria',
					modalHeaderText: 'Categoria'
				},
				area: {
					type: String,
					optionSearch: 'Área',
					modalHeaderText: 'Área'
				},
				idioma: {
					type: String,
					optionSearch: 'Idioma',
					modalHeaderText: 'Idioma'
				},
				duracaoEmprestimo: {
					type: Number,
					optionSearch: 'Duração Padrão do Empréstimo',
					modalHeaderText: 'Duração Padrão do Empréstimo'
				},
				reservado: {
					type: Boolean,
					optionSearch: 'Reservado ?',
					modalHeaderText: 'Reservado ?'
				}
			})
		},

		request: {
			type: Object,
			default: () => req.parseRequestListEntities(true)
		},

		routeNameEdit: {
			type: String,
			default: null
		},

		parseEditParams: {
			type: Function,
			default: (entity, index, idAttrName) => ({ [idAttrName]: entity[idAttrName] })
		},

		paramsRequest: {
			type: Array,
			default: () => []
		},

		joinSep: {
			type: String,
			default: ' / '
		},

		defaultPattern: {
			type: String,
			default: 'dd/MM/yyyy'
		},

		searchOperatorsShow: {
			type: Boolean,
			default: true
		},

		stringOperators: {
			type: Object,
			default: () => ({
				'Contém': 'contains',
				'Igual': 'equals',
				'Inicia com': 'startsWith',
				'Termina com': 'endsWith'
			})
		},
		numberOperators: {
			type: Object,
			default: () => ({
				'Igual': 'equals',
				'Maior que': 'greaterThan',
				'Menor que': 'lessThan',
				'Maior ou Igual que': 'greaterOrEqualThan',
				'Menor ou Igual que': 'lessOrEqualThan'
			})
		},
		dateOperators: {
			type: Object,
			default: () => ({
				'Igual': 'equals',
				'Maior que': 'greaterThan',
				'Menor que': 'lessThan',
				'Maior ou Igual que': 'greaterOrEqualThan',
				'Menor ou Igual que': 'lessOrEqualThan'
			})
		},

		titleTable: {
			type: String,
			default: 'Livros'
		},

		attrAll: {
			type: String,
			default: 'Todos'
		},

		titleSearch: {
			type: String,
			default: 'Buscar'
		},

		tdOptionName: {
			type: String,
			default: 'OPÇÕES:'
		},

		titleSuccess: {
			type: String,
			default: 'Sucesso!'
		},

		titleConfirm: {
			type: String,
			default: 'Atenção!'
		},

		titleModalEntity: {
			type: String,
			default: 'Dados do Livro'
		},

		confirmTextModalEntity: {
			Type: String,
			default: 'OK'
		},

		removeSuccessMessage: {
			type: String,
			default: 'O livro foi removida com sucesso!'
		},

		removeConfirmMessage: {
			type: String,
			default: 'Você tem certeza que deseja remover este livro?'
		},

		tdCheckName: {
			type: String,
			default: ''
		},

		idAttrName: {
			type: String,
			default: 'id'
		},

		okText: {
			type: String,
			default: 'OK'
		},

		confirmText: {
			type: String,
			default: 'SIM'
		},

		cancelText: {
			type: String,
			default: 'NÃO'
		},

		trueStr: {
			type: String,
			default: 'SIM'
		},

		falseStr: {
			type: String,
			default: 'NÃO'
		},

		okClassModalEntity: {
			type: String,
			default: 'btn btn-primary btn-modal btn-ok-modal'
		},

		options: {
			type: Object,
			default: () => ({})
		},

		hideSearch: {
			type: Boolean,
			default: false
		},

		isCompact: {
			type: Boolean,
			default: true
		},

		hideLastAttr: {
			type: Boolean,
			default: false
		},

		classLine: {
			type: Array,
			default: () => []
		},

		customRemove: {
			type: Boolean,
			default: () => false
		},

		optionRemove: {
			type: Boolean,
			default: false
		},

		optionView: {
			type: Boolean,
			default: true
		},

		optionEdit: {
			type: Boolean,
			default: false
		},

		optionReport: {
			type: Boolean,
			default: false
		},

		limitPagination: {
			type: Number | String,
			default: 5
		},

		alignPagination: {
			type: String,
			default: 'left'
		},

		sizePagination: {
			type: String,
			default: ''
		},

		pageSize: {
			type: Number,
			default: 10
		},

		isShowModal: {
			type: Boolean,
			default: false
		},

		smallModalEntity: {
			Type: Boolean,
			default: false
		},

		forceModalEntity: {
			Type: Boolean,
			default: false
		},

		// synchronous properties

		value: {
			type: Array,
			default: () => []
		},

		totalElements$: {
			type: Number,
			default: 0
		},

		page$: {
			type: Number,
			default: 1
		},

		attrSearch$: {
			type: Object,
			default: () => null
		},

		inputSearch$: {
			type: String,
			default: ''
		}
	}
}
