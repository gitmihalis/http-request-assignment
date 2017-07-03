const getHTML = require('../http-functions')

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function upperCase(string) {
	console.log(string.toUpperCase());
	return string.toUpperCase();
}
getHTML(requestOptions, upperCase );

