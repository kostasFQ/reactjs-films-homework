const webpack = require('webpack')
const merge = require('webpack-merge');
const StyleLintPlugin = require('stylelint-webpack-plugin')
const common = require('./webpack.common.config.js');

module.exports = merge(common, {
  entry: {
    main: ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000', './src/index.jsx']
  },
  mode: 'development',
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
      {
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
              localIdentName: "[name]__[local]__[hash:base64:5]"
            }
          },
          {
            loader: "sass-loader"
          }
        ]
      },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new StyleLintPlugin({ fix: true })
  ]
})