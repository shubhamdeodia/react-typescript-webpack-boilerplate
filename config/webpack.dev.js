/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

const devConfig = {
    mode: 'development',
    devServer: {
        port: 3000,
        hot: true,
        contentBase: path.join(__dirname, 'src'),
        historyApiFallback: {
            index: 'index.html'
        }
    },
    devtool: 'cheap-module-source-map'
};

module.exports = merge(commonConfig, devConfig);
