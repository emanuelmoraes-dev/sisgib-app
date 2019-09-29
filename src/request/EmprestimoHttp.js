import Http from './DefaultHttp'

export default class EmprestimoHttp extends Http {
	constructor () {
		super('emprestimos')
	}
}

export const emprestimo = new EmprestimoHttp()
