const getHTML = require('../http-functions')
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};
function lowerCase(string) {
	console.log(string.toLowerCase());
	return string.toLowerCase;
}
getHTML(requestOptions, lowerCase)