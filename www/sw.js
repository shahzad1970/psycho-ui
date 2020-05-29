/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "index.html",
    "revision": "08154869fa7232c07ba78537b49b0154"
  },
  {
    "url": "ui-button.html",
    "revision": "5e02442da986b8612ab63af507c1bbc0"
  },
  {
    "url": "ui-heading.html",
    "revision": "8ac472c2752703a73287739589c51cc9"
  },
  {
    "url": "ui-icon.html",
    "revision": "6fe544b237009021dd7f7ec1b529fd43"
  },
  {
    "url": "ui-input.html",
    "revision": "d060325e0857818df051e938e01489e6"
  },
  {
    "url": "ui-paragraph.html",
    "revision": "691ed8ffa13000f133c4f284b852dd65"
  },
  {
    "url": "ui-text.html",
    "revision": "f4aa3c568b16683f7278eb29e76d1f74"
  },
  {
    "url": "build/index.esm.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "build/p-0824106d.entry.js"
  },
  {
    "url": "build/p-0ea14e86.entry.js"
  },
  {
    "url": "build/p-17258165.js"
  },
  {
    "url": "build/p-21fb5184.entry.js"
  },
  {
    "url": "build/p-2b669725.js"
  },
  {
    "url": "build/p-2e9cb895.entry.js"
  },
  {
    "url": "build/p-2f5f18d4.entry.js"
  },
  {
    "url": "build/p-2f7736a3.entry.js"
  },
  {
    "url": "build/p-306950f1.entry.js"
  },
  {
    "url": "build/p-36a5a942.entry.js"
  },
  {
    "url": "build/p-3984e19c.js"
  },
  {
    "url": "build/p-3990da8c.entry.js"
  },
  {
    "url": "build/p-3d7cbf20.entry.js"
  },
  {
    "url": "build/p-44c48430.entry.js"
  },
  {
    "url": "build/p-6cd23258.entry.js"
  },
  {
    "url": "build/p-7a4b75ea.js"
  },
  {
    "url": "build/p-7bb6c451.entry.js"
  },
  {
    "url": "build/p-7cfb0d60.entry.js"
  },
  {
    "url": "build/p-866c729f.js"
  },
  {
    "url": "build/p-9280aa5c.entry.js"
  },
  {
    "url": "build/p-948e8153.entry.js"
  },
  {
    "url": "build/p-952428b3.entry.js"
  },
  {
    "url": "build/p-955d6554.entry.js"
  },
  {
    "url": "build/p-9f8c4bca.js"
  },
  {
    "url": "build/p-9f959416.entry.js"
  },
  {
    "url": "build/p-a1e5ab2f.entry.js"
  },
  {
    "url": "build/p-b4ff2a7b.entry.js"
  },
  {
    "url": "build/p-bfc0e701.entry.js"
  },
  {
    "url": "build/p-d28c656f.entry.js"
  },
  {
    "url": "build/p-d6f0559d.entry.js"
  },
  {
    "url": "build/p-de803772.js"
  },
  {
    "url": "build/p-e3e902be.js"
  },
  {
    "url": "build/p-ee4d59bb.entry.js"
  },
  {
    "url": "build/p-fb793f61.entry.js"
  },
  {
    "url": "build/p-fb9e802c.entry.js"
  },
  {
    "url": "build/p-fd86d9a0.js"
  },
  {
    "url": "build/p-fdfd84d7.entry.js"
  },
  {
    "url": "static/js/raphael.js",
    "revision": "98b429ec5a6a0fff0a924f84d7a715e0"
  },
  {
    "url": "static/js/Treant.js",
    "revision": "2858659051f2a29c9668af825a2d8845"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
