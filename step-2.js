const https = require('https');

function getAndPrintHTML () {
	var buffer = "";

	var requestOptions = {
		host: 'sytantris.github.io',
		path: '/http-examples/step2.html'
	};

	https.get( requestOptions, (response) => {
		response.setEncoding('utf8');
		response.on('data', (data) => {
			buffer += data;
		});
		response.on('end', (response) => {
			console.log(buffer);
		});		
	} );
}
module.exports = { getAndPrintHTML }