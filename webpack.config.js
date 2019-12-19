'use strict';
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  target: 'web',
  entry: {
    app: 'app/web/page/app/app.js',
  },
  output: {
    path: path.join(__dirname, 'app/public'),
    publicPath: '/public/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: '../view/app.tpl',
      template: './app/web/view/layout.tpl'
    })
  ]
};
