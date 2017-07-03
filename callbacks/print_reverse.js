const getHTML = require('../http-functions')

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function reverse(string) {
	let reverse = string.split('').reverse().join('')
	console.log(reverse);
	return reverse;
}
getHTML(requestOptions, reverse );

