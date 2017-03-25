const path = require('path');

module.exports = {
  entry: './docs/index.js',

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'docs'),
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.md/,
        use: [
          { loader: 'html-loader' },
          { loader: 'markdown-loader' },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ],
      },
    ],
  },

  devServer: {
    contentBase: 'docs',
  },
};
