module.exports = {
  // apiPrefix : "",
  // timeout:1000,
  // accessTokenKey:'ACCESS_TOKEN',
  // userInfoKey:'USER_INFO',
  // requestRetry:4,
  // requestRetryDelay:800,
  // designSize:375,//设计稿宽度 375
  devServer: {
    proxy: {
      '/api': {
        target: 'http://101.236.57.232:8000',
        bypass: function(req, res, proxyOptions) {
          // console.log(999, req, res, proxyOptions);
          if (req.headers.accept.indexOf('html') !== -1) {
            console.log(123);
          } else if (process.env.MOCK !== 'none') {
            console.log(456, req.path, req.path.split('/api/'));
            let name = req.path
              .split('/api/')[1]
              .split('/')
              .join('_');
            const mock = require(`./mock/${name}`);
            const result = mock(req.method);
            delete require.cache[require.resolve(`./mock/${name}`)];
            return res.send(result);
          }
        }
      }
    },
    hot: true
  },
  css: {
    // 配置css模块
    loaderOptions: {
      // 向预处理器 Loader 传递配置选项
      less: {
        // 配置less（其他样式解析用法一致）
        javascriptEnabled: true // 设置为true
      }
    }
  },
  configureWebpack: {},
  assetsDir: 'static'
};
