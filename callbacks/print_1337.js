const getHTML = require('../http-functions')
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};
function lowerCase(string) {
}
getHTML(requestOptions, lowerCase)