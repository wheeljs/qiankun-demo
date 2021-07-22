const name = require('./package.json').name;

module.exports = {
    pages: {
        main: 'src/main.js',
        sub: 'src/sub.js'
    },
    devServer: {
        hot: true,
        disableHostCheck: true,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
    },
    configureWebpack: {
        output: {
            library: `${name}-[name]`,
            libraryTarget: 'umd',
            jsonpFunction: `webpackJsonp_${name}`
        }
    }
};
