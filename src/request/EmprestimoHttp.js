import Http from './DefaultHttp'

export default class EmprestimoHttp extends Http {
	constructor () {
		super('emprestimos')
		this.parseRequestListEntities = this.parseRequestListEntities.bind(this)
	}

	parseRequestListEntities (caseInsensitive, onlyActive = false) {
		if (!onlyActive)
			return super.parseRequestListEntities(caseInsensitive)

		let searchAll = this.searchAll.bind(this, caseInsensitive)
		let searchAttr = this.searchAttr.bind(this, caseInsensitive)
		let searchDefault = this.searchDefaultOnyActive.bind(this, caseInsensitive)

		return {
			searchAll,
			searchAttr,
			searchDefault
		}
	}

	async searchDefaultOnyActive (caseInsensitive, page, pageSize, sort, inputSearch, params) {
		let { count } = await this.requestGet('defaultSearch/onlyActive/count', { params: { search: inputSearch } })

		let entities = await this.requestGet('defaultSearch/onlyActive', {
			params: {
				search: inputSearch,
				skip: (page - 1) * pageSize,
				limit: pageSize,
				sort
			}
		})

		return { count, entities }
	}
}

export const emprestimo = new EmprestimoHttp()
