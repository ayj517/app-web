import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  links: [{ rel: 'icon', href: '@/static/favico.png' }],
  routes: [
    // @/pages/index
    { exact: true, path: '/', component: '@/pages/index' },
    {
      exact: true,
      path: '/gameDetail/:code',
      component: '@/pages/gameDetail/[code]',
    },
    {
      exact: true,
      path: '/games/:appName/:page',
      component: '@/pages/[appName]/[page]',
    },
  ],
  proxy: {
    '/api': {
      target: 'https://api.apkking.cc',
      pathRewrite: { '^/api': '' },
      changeOrigin: true,
      secure: false,
      treeShaking: true,
      exportStatic: {},
      targets: {
        ie: 11,
      },
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
