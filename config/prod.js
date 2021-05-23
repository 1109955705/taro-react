module.exports = {
  env: {
    NODE_ENV: '"production"'
  },
  defineConstants: {
    // 必须加JSON.stringify包裹 https://webpack.js.org/plugins/define-plugin/
    SERVICE_URL: JSON.stringify('https://third-api.yolanda.hk/open_api'),
    H5_URL: JSON.stringify('https://xcx.runcobo.com'),
  },
  mini: {},
  h5: {
    /**
     * 如果h5端编译后体积过大，可以使用webpack-bundle-analyzer插件对打包体积进行分析。
     * 参考代码如下：
     * webpackChain (chain) {
     *   chain.plugin('analyzer')
     *     .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin, [])
     * }
     */
  }
}
