import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'psycho-ui',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    { 
      type: 'docs-json',
      file: "./src/components/ui-playground/doc.json"
    },
    {
      type: 'www',
      serviceWorker: null,
      copy: [
        { src: 'static', dest: 'static' }
        { src: '*.html', dest: '' }
      ]
    }
  ],
  plugins: [
    sass()
  ]
};
