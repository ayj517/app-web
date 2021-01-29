import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/game', component: '@/pages/game' },

  ],
  sass: { },
  ssr: {},
  // fastRefresh: {},
});
