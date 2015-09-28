module.exports = {
  context: __dirname + "/app",

  entry: {
      javascript: "./app.js",
      html: "./index.html",
  },

  output: {
    filename: "app.js",
    path: __dirname + "/dist",
  },

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
        exclude: /node_modules/,
        loader: "file?name=[name].[ext]",
      },
      {
        test:   /\.css$/,
        exclude: /node_modules/,
        loader: "style!css?modules!postcss"
      }
    ],
  },
}
