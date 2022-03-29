const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const webpConfig = {
	path : path.resolve(__dirname),
	js : {
		src : './assets/src/js/bundle.js',
		dist : './assets/dist/js/bundle.js'
	},
	css : {
		src : './assets/src/css/styles.scss',
		dist : './assets/dist/css/styles.css'		
	}	
};

module.exports = {
	mode: 'development',
	entry: [webpConfig.js.src, webpConfig.css.src],
	output: {
		filename: webpConfig.js.dist,
		path: webpConfig.path
	},
	devServer: {
		static: {
		  directory: webpConfig.path
		},
		compress: true,
		port: 3333
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: webpConfig.css.dist
		})
	],
	module: {
		rules: [
			{
				test: /\.(scss|css)$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader'
				],
			},
		],
	}	
};

console.log(path.resolve(__dirname, './assets/src/css'), module.exports);