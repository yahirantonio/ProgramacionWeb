const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/app.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.(png|jpg|gif)$/i,
          loader:'file-loader',
          options: {
            name: '/img/[name].[ext]',
            outputPath: 'images/',
            publicPath: 'images/',
          }
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      filename: "index.html",
      template: "./index.html",
    }),
  ],
  mode: "production",
};
