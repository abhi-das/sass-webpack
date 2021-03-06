var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: [
		'./src/main.js',
		'./src/scss/main.scss'
	],
	output: {
		filename: 'dist/bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract({
          			loader: 'css-loader'
				})
			},
			{ // sass / scss loader for webpack
		        test: /\.(sass|scss)$/,
		        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
	      	}

		]
	},
	plugins: [
		new ExtractTextPlugin({
			filename: 'dist/[name].bundle.css',
			allChunks: true
		})
	]
};