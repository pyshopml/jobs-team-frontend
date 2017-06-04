var webpack   = require('webpack');
var path      = require('path');
var HtmlWebpackPlugin = require("html-webpack-plugin");
var UglifyJsPlugin = require('uglify-js-plugin');
var merge = require('webpack-merge')

var baseConfig = require('./webpack.base.js')

var BUILD_DIR = path.join(__dirname, '/dist');
var SRC_DIR   = path.join(__dirname, '/src');


var prodConfig = {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new HtmlWebpackPlugin({
      template: SRC_DIR + '/index.html',
      excludeChunks: ['whm']
    }),
    new UglifyJsPlugin({
      beautify: false,
      output: {
        comments: false
      },
      mangle: {
        screw_ie8: true
      },
      compress: {
        screw_ie8: true,
        warnings: false,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
        negate_iife: false
      }
    })
  ],
  resolve: {
    alias: {
      'config': path.resolve(__dirname, './config.prod')
    }
  },
};

module.exports = merge(prodConfig, baseConfig)
