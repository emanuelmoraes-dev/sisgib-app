if (process.env.NODE_ENV === 'development') {
	exports.urlBase = 'http://localhost:3000'
	exports.origin = 'http://localhost:8080'
} else {
	exports.urlBase = 'http://localhost'
	exports.origin = 'http://localhost'
}
