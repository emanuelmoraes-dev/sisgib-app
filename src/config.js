if (process.env.NODE_ENV === 'development') {
	exports.urlBase = 'http://localhost:3000'
	exports.origin = 'http://localhost:8080'
} else {
	if (location.protocol === 'https:')
		exports.urlBase = 'https://sisgib.herokuapp.com'
	else
		exports.urlBase = 'http://sisgib.herokuapp.com'
	exports.origin = 'sisgib.herokuapp.com'
}
