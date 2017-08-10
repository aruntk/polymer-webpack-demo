var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js',
  },
  // the following config throws error in webpack 2.2.0
  // resolveLoader: {
  // root: path.join(__dirname, 'node_modules'),
  // },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{
          loader: 'babel-loader',
        }],
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]?[hash]'
          }
        }]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'wc-loader',
            options: {
              minify: true,
              root: '/'
            }
          }]
      },
    ],
  },
  // if you want to provile globals
  // resolve: {
  // alias: {
  // 'extTestModule': path.resolve(__dirname, './src/components/test.js')
  // }
  // },
  // plugins: [
  // new webpack.ProvidePlugin({
  // "extTestModule": "extTestModule",
  // })
  // ],
  devServer: {
    // serve index.html in place of 404 responses to allow HTML5 history
    historyApiFallback: true,
  },
  devtool: 'eval-source-map'
};


