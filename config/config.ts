import { defineConfig } from 'umi';
import proxy from './proxy';

const { REACT_APP_ENV } = process.env;

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
  proxy: proxy[REACT_APP_ENV || 'dev'],
});
