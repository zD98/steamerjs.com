var path = require("path");

function resolve(_path) {
    return path.resolve(__dirname, _path);
}

module.exports = {
    build: {
        env: require("./prod.env"),
        index: resolve("../dist/index.html"),
        assetsRoot: resolve("../dist"),
        assetsSubDirectory: "static",
        assetsPublicPath: "/",
        productionSourceMap: true,
        // productionGzip: false,
        // productionFzipExtensions: ['js', 'css']
        bundleAnalyzerReport: process.env.npm_config_report
    },
    dev: {
        env: require("./dev.env"),
        port: 8080,
        autoOpenBrowser: true,
        assetsSubDirectory: "static",
        assetsPublicPath: "/",
        proxyTable: {},
        cssSourceMap: false
    }
};
