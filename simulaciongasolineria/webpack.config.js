const HtmlWebpackPlugin	= require("html-webpack-plugin");
MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
	entry: "./src/index.js",
  	output: {
    	filename: "bundle.js",
    	path: path.resolve(__dirname, "dist"),
 	},
	module: {
		rules:[
		{
			test:/\.js$/i,
			exclude: /node_modules/,
			use:"babel-loader",
		},
		{
			test:/\.html/i,
			use:[
			{
				loader: "html-loader",
				options: {
			 		minimize: true,
			 	},
			},
			],
		},
		{
			test:/\.css$/i,
			use:[MiniCssExtractPlugin.loader, "css-loader"],
		},
		],
	},
	plugins:[
	 new HtmlWebpackPlugin({
	 	filename: "./index.html",
	 	template: "./src/index.html",
	 }),
	 new MiniCssExtractPlugin(),
	],
};