import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/game', component: '@/pages/game' },
    { path: '/app/:page', component: '@/pages/application/[page]' },
  ],
  proxy: {
    '/api': {
      target: 'https://api.apkking.cc',
      pathRewrite: { '^/api': '' },
      changeOrigin: true,
      secure: false,
      headers: {
        Connection: 'keep-alive',
      },
      onProxyReq: function (proxyReq, req, res, options) {
        if (req.body) {
          let bodyData = JSON.stringify(req.body);
          // incase if content-type is application/x-www-form-urlencoded -> we need to change to application/json
          proxyReq.setHeader('Content-Type', 'application/json');
          proxyReq.setHeader('Content-Length', Buffer.byteLength(bodyData));
          // stream the content
          proxyReq.write(bodyData);
        }
      },
    },
  },
  sass: {},
  ssr: {},
  // fastRefresh: {},
});
