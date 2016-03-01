/**
 * Created by zhengqiguang on 16/2/27.
 */
var path = require("path"),
    webpack = require("webpack"),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    WebpackMd5Hash = require('webpack-md5-hash'),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
    entry: {
        index: "./src/js/index.js",
        lib: ["vue"]
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "./js/[name].[chunkhash].js"
    },
    module: {
        loaders: [{
            test: /\.tpl$/,
            loader: "html-loader"
        }, {
            test: /\.jpe?g|\.png|\.gif$/,
            loader: "file-loader",
            query: {
                name: "/images/[name].[ext]"
            }
        }

            , {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap")
        }

        ]
    },

    plugins: [
        new CleanWebpackPlugin("./dist")
        , new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html"
        }),
        new WebpackMd5Hash()
        , new webpack.optimize.CommonsChunkPlugin("lib", "./js/lib/lib.[chunkhash].js")
        , new ExtractTextPlugin("./css/[chunkhash].css")
        //, new webpack.optimize.UglifyJsPlugin({
        //    compress: {
        //        warnings: false,
        //        drop_console: true,
        //        dead_code: true
        //    },
        //    preserveComments: false,
        //    report: "min",
        //    sourceMap: false,
        //    mangle: true
        //})

    ]

};


