// const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const StyleLintPlugin = require('stylelint-webpack-plugin')

module.exports = {
  entry: {
    main: ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000', './src/index.jsx']
  },
  /* output: {
    path: path.join(__dirname, '../../build'),
    publicPath: '/',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js','.jsx']
  }, */
  mode: 'development',
  // target: 'web',
  // devtool: '#source-map',
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: [
          "babel-loader",
          {
            loader: "eslint-loader",
            options: {
              emitWarning: true,
              failOnError: false,
              failOnWarning: false,
              fix: true
            }
          }
        ]
      },
      /* {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: "[local]___[hash:base64:5]"
            }
          },
          {
            loader: "sass-loader"
          }
        ]
      }, */
      {
       test: /\.(png|svg|jpg|gif)$/,
       use: ['file-loader', 'url-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/html/index.html",
      filename: "./index.html",
      // excludeChunks: [ 'server' ]
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new StyleLintPlugin({ fix: true })
  ]
}