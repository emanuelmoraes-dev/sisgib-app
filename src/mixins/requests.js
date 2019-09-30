import jwtDecode from 'jwt-decode'
import Cookie from 'js-cookie'
import {
	livro,
	emprestimo
} from '@/request'

export default {
	created () {
		this.$req = {
			livro,
			emprestimo
		}
	},

	methods: {
		getAlunoLogado () {
			try {
				if (!Cookie.get('x-access-token'))
					return null

				let accessToken = Cookie.get('x-access-token')

				if (!accessToken)
					return null

				let { user } = jwtDecode(accessToken)
				return user
			} catch (err) {
				console.error('Erro em extrair aluno em token', err)
			}
		}
	}
}
