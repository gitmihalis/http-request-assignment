// const step1 = require('./step-1');
// const step2 = require('./step-2');
const step3 = require('./step-3');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

// step1.getAndPrintHTMLChunks();
// step2.getAndPrintHTML();
step3.getAndPrintHTML(requestOptions);
