const { name } = require('./package.json')

module.exports = {
    devServer: {
        disableHostCheck: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    },
    chainWebpack: config => {
        config.output
            .library(`${name}-[name]`)
            .libraryTarget('umd')
            .jsonpFunction(`webpackJsonp_${name}`)
    }
}
