import Http from './DefaultHttp'

export default class LivroHttp extends Http {
	constructor () {
		super('livros')
	}
}

export const livro = new LivroHttp()
