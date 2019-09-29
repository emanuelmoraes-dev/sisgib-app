import Http from 'request-list-entities-vue-alpha-restful'
import axios from 'axios'
import { urlBase, origin } from '@/config.js'
import Cookie from 'cookie-js'

export default class DefaultHttp extends Http {
	constructor (resource) {
		super(urlBase, origin, resource)
	}

	async login (user, pwd) {
		let res = await axios.post(this.url('login'), { user, pwd, type: 'employee' }, { headers: this.__headersBase })
		Cookie.set('x-access-token', res.data.access_token)
		return res
	}

	async searchDefault (caseInsensitive, inputSearch, params, attr, page, pageSize, sort) {
		let { count } = await this.requestGet('searchAll/count', { params: { search: inputSearch } })

		let entities = await this.requestGet('searchAll', {
			params: {
				search: inputSearch,
				skip: (page - 1) * pageSize,
				limit: pageSize,
				sort
			}
		})

		return { count, entities }
	}

	async requestGet (url, options = {}) {
		return super.requestGet(url, options)
			.catch(() =>
				this.login('e072dcc5-d2aa-4e87-ac2e-80c1af8305f2', '6fdd7070-cc8b-43f6-8e42-fc9ed0eea5cc')
			).then(() => super.requestGet(url, options))
	}

	async requestPost (url, body, options = {}) {
		return super.requestPost(url, body, options)
			.catch(() =>
				this.login('e072dcc5-d2aa-4e87-ac2e-80c1af8305f2', '6fdd7070-cc8b-43f6-8e42-fc9ed0eea5cc')
			).then(() => super.requestPost(url, body, options))
	}

	async requestPut (url, body, options = {}) {
		return super.requestPut(url, body, options)
			.catch(() =>
				this.login('e072dcc5-d2aa-4e87-ac2e-80c1af8305f2', '6fdd7070-cc8b-43f6-8e42-fc9ed0eea5cc')
			).then(() => super.requestPut(url, body, options))
	}

	async requestPatch (url, body, options = {}) {
		return super.requestPatch(url, body, options)
			.catch(() =>
				this.login('e072dcc5-d2aa-4e87-ac2e-80c1af8305f2', '6fdd7070-cc8b-43f6-8e42-fc9ed0eea5cc')
			).then(() => super.requestPatch(url, body, options))
	}

	async requestDelete (url, options = {}) {
		return super.requestDelete(url, options)
			.catch(() =>
				this.login('e072dcc5-d2aa-4e87-ac2e-80c1af8305f2', '6fdd7070-cc8b-43f6-8e42-fc9ed0eea5cc')
			).then(() => super.requestDelete(url, options))
	}
}

export const http = new DefaultHttp()
