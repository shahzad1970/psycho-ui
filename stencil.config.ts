import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'psycho-ui',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },

    {
      type: 'www',
      copy: [
        { src: 'static', dest: 'static' },
        { src: '*.html', dest: '' }
      ]
    }
  ]
};
