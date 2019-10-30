const webpack = require('webpack');
var path = require('path');

module.exports = {
  entry:{
   path: __dirname + '/index.js'
  } ,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  devServer: {
    port: 8080,
    contentBase: __dirname + '../',
    hot: true,
    proxy:{
       "/":"http://localhost:3000"
    }
  }
};
