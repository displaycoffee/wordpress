const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Path config
const webpPathConfig = {
	path : path.resolve(__dirname),
	src : {
		js : './assets/src/js/bundle.js',
		css : './assets/src/scss/styles.scss'
	},
	dist : {
		js : './assets/dist/js/bundle.js',
		css : './assets/dist/css/styles.css'	
	}	
};

// Common config
const webpCommonConfig = {
	entry: [webpPathConfig.src.js, webpPathConfig.src.css],
	output: {
		filename: webpPathConfig.dist.js,
		path: webpPathConfig.path
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: webpPathConfig.dist.css
		})
	],
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components|core-js|webpack\/buildin)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			},			
			{
				test: /\.(scss|css)$/,
				exclude: /(node_modules)/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader'
				],
			}
		],
	}	
};

module.exports = webpCommonConfig;