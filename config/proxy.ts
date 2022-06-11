const proxy = {
  dev: {
    '/api/': {
      target: 'http://localhost:1337',
      changeOrigin: true,
      pathRewrite: { '^': '' },
      secure: false,
      logLevel: 'debug',
    },
  }, 
  prod: {
    '/api/': {
      target: 'https://strapi-leqv.onrender.com',
      changeOrigin: true,
      pathRewrite: { '^': '' },
      secure: false,
      logLevel: 'debug',
    },
  }, 
}

export default proxy;