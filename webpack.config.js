const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, "src", "index.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    devtool: "eval-source-map", //用以在打包後檢視Code的封裝來源
    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
        port: 4000
    }



}