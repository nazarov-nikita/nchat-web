const path = require('path')
const fs = require('fs')
const HtmlWebpackPlugin = require('html-webpack-plugin')
require('dotenv').config()

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js'
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'chat',
      template: './index.html'
    })
  ],
  devServer: {
    host: '0.0.0.0',
    public: 'nikkita.ru',
    disableHostCheck: true,
    watchContentBase: true,
    contentBase: path.join(__dirname, 'build'),
    compress: true,
    port: process.env.N_HTTPS ? 443 : 80,
    historyApiFallback: true,
    headers: {
      'Cache-Control': 'no-cache'
    },
    https: process.env.N_HTTPS ? ({
      key: fs.readFileSync('./cert/private.key'),
      cert: fs.readFileSync('./cert/certificate.crt')
    }) : false
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      }, {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        }
      }, {
        test: /\.(png|jpg)(\?v.*)?$/,
        use: 'file-loader?name=images/[name].[ext]'
      }
    ]
  }
}
