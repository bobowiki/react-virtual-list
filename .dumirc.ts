import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  // 核心两行
  base: '/react-virtual-list/',
  publicPath: '/react-virtual-list/',
  themeConfig: {
    name: 'react-virtual-list',
  },
});
