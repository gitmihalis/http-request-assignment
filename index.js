// const step1 = require('./step-1');
// const step2 = require('./step-2');
// const step3 = require('./step-3');
// const step4 = require('./step-4');
const getHTML = require('./http-functions'); // step 5 Make it a Module ( already been doing it!)

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

// step1.getAndPrintHTMLChunks();
// step2.getAndPrintHTML();
// step3.getAndPrintHTML(requestOptions);
// step4.getHTML(requestOptions, step4.printHTML);
getHTML(requestOptions, console.log)
