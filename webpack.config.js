const path = require('path')

module.exports = {
	entry: './src/index.ts',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	target: 'node',

	// Enable sourcemaps for debugging webpack's output.
	devtool: 'source-map',

	resolve: {
		// Add '.ts' and '.tsx' as resolvable extensions.
		extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
	},

	module: {
		rules: [
			// All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
			{ enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
			// All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
			{ test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
		],
	},

	// Other options...
	node: {
		fs: 'empty',
		net: 'empty',
	},
}