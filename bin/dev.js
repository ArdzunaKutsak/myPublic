// import { createRequire } from 'module';


const webpack = require('webpack');
const webpackConfig = require('../webpack.config')
const nodemon = require('nodemon');
const compiler = webpack(webpackConfig);
const path = require('path');


compiler.run((err) => {
    if (err) {
        console.log('Compiler failed: ', err)
    }

    compiler.watch({}, (err) => {
        if (err) {
            console.log('Compiler failed: ', err)
        } else console.log('Success!');
    })

    nodemon({
        script: path.resolve(__dirname, '../dist/server/server.js'),
        wathc: [
            path.resolve(__dirname, '../dist/server'),
            path.resolve(__dirname, '../dist/client'),
        ]
    })
})