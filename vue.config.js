module.exports = {
  devServer: {
    host: '127.0.0.1',
    port: 8080,
    proxy: {
      '/x': {
        target: 'https://api.bilibili.com/',
        onProxyReq (proxyReq) {
          proxyReq.setHeader('origin', 'https://www.bilibili.com')
          proxyReq.setHeader('referer', 'https://www.bilibili.com')
        }
      },
      '/api': {
        target: 'https://www.imooc.com/',
        changeOrigin: true,
        pathRewrite: {
          '/api': ''
        }
      }
    }
  }
}
