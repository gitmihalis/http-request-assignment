const https = require('https');

function getHTML (options, callback) {
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

function printHTML (html) {
	console.log(html);
}
module.exports = { printHTML, getHTML }