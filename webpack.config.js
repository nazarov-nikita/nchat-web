const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

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
    disableHostCheck: true,
    watchContentBase: true,
    contentBase: path.join(__dirname, 'build'),
    compress: true,
    port: 80,
    historyApiFallback: true,
    headers: {
      'Cache-Control': 'no-cache'
    }
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
