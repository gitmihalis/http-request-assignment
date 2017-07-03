// const step1 = require('./step-1');
// const step2 = require('./step-2');
// const step3 = require('./step-3');
const step4 = require('./step-4'); // Printing with Callbacks

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

// step1.getAndPrintHTMLChunks();
// step2.getAndPrintHTML();
// step3.getAndPrintHTML(requestOptions);
step4.getHTML(requestOptions, step4.printHTML);
