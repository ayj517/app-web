import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/admin', component: '@/pages/admin' },

  ],
  sass: { },
  ssr: {},
  // fastRefresh: {},
});
