const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/main.js",
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
