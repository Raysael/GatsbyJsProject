const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const devserver = require('./webpack/devserver');
const sass = require('./webpack/sass');
const css = require('./webpack/css');
const extractCSS = require('./webpack/css.extract');
//const uglifyJS = require('./webpack/js.uglify');
const images = require('./webpack/images');
const babel = require('./webpack/js.babel');

const PATHS = {
    source: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'build')
};

const common = merge([
    {
        entry: PATHS.source + '/index.js',
        output: {
            path: PATHS.build,
            filename: 'js/[name].js'
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: 'Knotel'
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'common'
            })
        ]
    },
    babel(),
    images()
]);

module.exports = function (env) {
    if (env === 'production') {
        return merge([
            common,
            extractCSS(),
            // uglifyJS() don't work
        ])
    }
    if (env === 'development') {
        return merge([
            common,
            devserver(),
            sass(),
            css()
            ])
    }
};