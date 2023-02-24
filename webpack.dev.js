const { merge } = require('webpack-merge');
const webpCommonConfig = require('./webpack.common.js');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

// Development config
const webpDevConfig = {
	mode: 'development'
};

// Add browserstack for dev testing 
const webpPluginsConfig = {
	plugins: [new BrowserSyncPlugin({
		host: 'localhost',
		port: 3333,
		files: ['wp-content/themes/**/*.php', 'wp-content/themes/**/*.html'],
		proxy: 'http://localhost/wordpress'
	})]
}

// Create exports array
let webpExports = [];
for (var i = 0; i < webpCommonConfig.length; i++) {
	webpExports.push(merge(webpCommonConfig[i], webpDevConfig, webpPluginsConfig));
}

module.exports = webpExports;