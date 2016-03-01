/**
 * Created by zhengqiguang on 16/2/27.
 */
var baseConfig = require("./webpack.base"),
    webpack = require("webpack");

var config = baseConfig;

config.module.loaders.push({
    test: /\.jpe?g|\.png|\.gif$/,
    loader: "img-loader",
    query: {
        minimize: true,
        optimizationLevel: 5,
        progressive: true
    }
});

config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false,
        drop_console: true,
        dead_code: true
    },
    preserveComments: false,
    report: "min",
    sourceMap: false,
    mangle: true
}));

module.exports = config;









