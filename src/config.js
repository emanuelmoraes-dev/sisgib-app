if (process.env.NODE_ENV === 'development') {
	exports.urlBase = 'http://localhost:3000'
	exports.origin = 'http://localhost:8080'
} else {
	exports.urlBase = 'https://sisgib.herokuapp.com'
	exports.origin = 'https://sisgib.herokuapp.com'
}
