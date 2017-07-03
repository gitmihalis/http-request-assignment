const https = require('https');

function getAndPrintHTMLChunka() {
	var requestOptions = {
		host: 'sytantris.github.io',
		path: '/http-examples/step1.html'
	};

	https.get( requestOptions, (response) => {
		// set the encoding
		response.setEncoding('utf8');
		// invoke a callback when a `data` chunk is received
		response.on('data', (data) => {
			console.log(`${data}\n`)
		})		
	})
}


getAndPrintHTMLChunka();