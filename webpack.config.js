const path = require('path');
const webpack = require('webpack');

const config = {
  context: __dirname,
  entry: ['./src/index.jsx'],
  devtool:
    process.env.NODE_ENV === 'development' ? 'cheap-eval-source-map' : false,
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/',
  },
  devServer: {
    hot: true,
    publicPath: '/public/',
    historyApiFallback: true,
    contentBase: [path.join(__dirname, 'public'), path.join(__dirname)],
    watchContentBase: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
      },
    ],
  },
};

if (process.env.NODE_ENV === 'development') {
  config.entry.unshift(
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
  );
}

module.exports = config;
