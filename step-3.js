const https = require('https');

function getAndPrintHTML (options) {

	var buffer = "";

	https.get( options, (response) => {
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
