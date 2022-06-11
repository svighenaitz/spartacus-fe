import { defineConfig } from 'umi';
import proxy from './proxy';

const { API_URL } = process.env;

if(!API_URL) throw new Error("Attenzione, API_URL non definito!");

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { exact: false, path: '/', component: '@/layouts/index',
      routes: [
        { exact: true, path: '/', component: '@/pages/index' },                
      ],
    },
  ],
  fastRefresh: {},
  request: {
    dataField: '',
  },
  esbuild:{},
  webpack5:{},
  mfsu:{},
  define: {
    API_URL: API_URL || '/',
  },
});
