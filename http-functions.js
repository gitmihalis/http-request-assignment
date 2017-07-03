const https = require('https');

module.exports = function getHTML (options, callback = console.log) {
	var buffer = "";

	https.get( options, (response) => {
		response.setEncoding('utf8');
		response.on('data', (data) => {
			buffer += data;
		});
		response.on('end', (response) => {
			callback(buffer);
		});		
	} );
}