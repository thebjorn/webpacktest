
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.commonjs.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'dk.commonjs.js',
        library: 'dk',
        libraryTarget: "var",
        // libraryExport: "default",
        // umdNamedDefine: true
    },
    externals: {jquery: 'jQuery'},
    module: { rules: [{
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
            loader: 'babel-loader',
            options: {presets: ['env']}
        }
    }]}
};
