if (process.env.NODE_ENV === 'development') {
	exports.urlBase = 'http://localhost:3000'
	exports.origin = 'http://localhost:8080'
} else {
	exports.urlBase = 'sisgib.herokuapp.com'
	exports.origin = 'sisgib.herokuapp.com'
}
