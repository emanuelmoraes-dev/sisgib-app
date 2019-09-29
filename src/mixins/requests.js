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
	}
}
