var path = require('path');

module.exports = {
  entry: './frontend/entry.js',
  output: {
    path: path.resolve(__dirname),
    filename: './bundle.js'
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*']
  }
};