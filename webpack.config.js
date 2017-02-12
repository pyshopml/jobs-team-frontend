var webpack   = require('webpack');
var path      = require('path');

var BUILD_DIR = path.join(__dirname, '/dist');
var APP_DIR   = path.join(__dirname, '/app');

// var ExtractTextPlugin = require("extract-text-webpack-plugin");

var config = {
  entry : [
    'webpack-hot-middleware/client',
    APP_DIR + '/index.js'
  ],
  output : {
    path : BUILD_DIR,
    filename : 'bundle.js',
    publicPath: '/static/'
  },
  devServer:{
    contentBase: BUILD_DIR
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module : {
    loaders : [ 
      {
        test : /\.jsx?$/,
        include : APP_DIR,
        loader : 'babel',
        query : {
          presets : ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loaders: [
          'style', 
          'css?modules&localIdentName=[local]---[hash:base64:5]', 'postcss'
          ]
      }
      /*      
      {
        test: /\.css/,
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader', 'eslint-loader']
      }
      */
    ]
  },
  /*
  eslint: {
    configFile: './.eslintrc'
  },
  */
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
};

module.exports = config;
