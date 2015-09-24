var webpack = require('webpack');

module.exports = function (config) {
  config.set({
    browsers: [ 'Chrome' ],
    singleRun: true,
    frameworks: [ 'mocha' ],
    files: [
      'tests.webpack.js'
    ],
    preprocessors: {
      'tests.webpack.js': [ 'webpack', 'sourcemap' ]
    },
    reporters: [ 'dots' ],
    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: [
              "react-hot",
              "babel-loader"
            ],
          },
          {
            test: /\.html$/,
            loader: "file?name=[name].[ext]",
          },
          {
            test:   /\.css$/,
            exclude: /node_modules/,
            loader: "style!css?modules!postcss"
          }
        ],
      }
    },
    webpackServer: {
      noInfo: true
    }
  });
};
