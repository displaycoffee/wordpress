const { merge } = require('webpack-merge');
const webpCommonConfig = require('./webpack.common.js');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

// Dev config
const webpDevConfig = {
	mode: 'development'
};

// Add browserstack for dev testing 
webpCommonConfig.plugins.push(
	new BrowserSyncPlugin({
		host: 'localhost',
		port: 3333,
		proxy: 'http://localhost/wordpress'
	})
);

module.exports = merge(webpCommonConfig, webpDevConfig);