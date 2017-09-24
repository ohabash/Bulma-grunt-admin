var path = require('path');

module.exports = {
  entry: './assets/js/index.js',
  output: {
    filename: 'bundle.js',
    path: here('dist')
  }
};


function here(d) {
	if (!d){ return __dirname; }
	return path.resolve(__dirname, d);
}