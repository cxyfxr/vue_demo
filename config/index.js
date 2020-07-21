'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.
//打包时才会运行的文件 ，log在shell

const path = require('path')

module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},

    // Various Dev Server settings
    host: 'localhost', //域名：可通过 process.env.HOST 修改
    port: 8080, // 端口号：可通过 process.env.PORT 修改, 如果冲突了，会生成新的
    autoOpenBrowser: true, // 运行成功后自动打开浏览器
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    // Use Eslint Loader?
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    useEslint: true,
    // If true, eslint errors and warnings will also be shown in the error overlay
    // in the browser.
    showEslintErrorsInOverlay: false,

    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  //打包后的 ==>
  build: {
    // 静态页面主页，生成在当前config/index.js的上级目录下的dist文件夹内，名为index.html
    index: path.resolve(__dirname, '../dist/index.html'),
    // 文件目录，与config同级的dist
    assetsRoot: path.resolve(__dirname, '../dist'),
    // 除index.html之外的静态资源
    assetsSubDirectory: 'static',
    // index.html 页面中引用资源的 相对路径
    assetsPublicPath: './', //具体看nginx有没有改变目录结构
    // assetsPublicPath + assetsSubDirectory ==> ./static <== index.html中引用静态资源的路径
    
    /**
     * Source Maps
     */

    productionSourceMap: true, 
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
