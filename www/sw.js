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
    "revision": "230fd620c2eb1377a9a50e454fdf679e"
  },
  {
    "url": "ui-button.html",
    "revision": "78b2e6ac7a6dffcb4f35e440c606692b"
  },
  {
    "url": "ui-heading.html",
    "revision": "8ac472c2752703a73287739589c51cc9"
  },
  {
    "url": "ui-icon.html",
    "revision": "5c3b7df63c6abeea294b189012b6231d"
  },
  {
    "url": "ui-input.html",
    "revision": "15fb96aa2c0371e199fddd76d0b9fe33"
  },
  {
    "url": "ui-modal.html",
    "revision": "a4df6df11d13d81c84055e5e61647d8c"
  },
  {
    "url": "ui-paragraph.html",
    "revision": "691ed8ffa13000f133c4f284b852dd65"
  },
  {
    "url": "ui-table.html",
    "revision": "c54c11f62f64c908288250b1d080ed95"
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
    "url": "build/p-00b458b3.entry.js"
  },
  {
    "url": "build/p-0bfa12bc.entry.js"
  },
  {
    "url": "build/p-115281cf.entry.js"
  },
  {
    "url": "build/p-2455477a.entry.js"
  },
  {
    "url": "build/p-53ae8106.js"
  },
  {
    "url": "build/p-74b2dabc.entry.js"
  },
  {
    "url": "build/p-7ae5f8ca.entry.js"
  },
  {
    "url": "build/p-850ba901.js"
  },
  {
    "url": "build/p-874fbf42.entry.js"
  },
  {
    "url": "build/p-8c36fa21.entry.js"
  },
  {
    "url": "build/p-947e0cfb.entry.js"
  },
  {
    "url": "build/p-a1bbd8a8.entry.js"
  },
  {
    "url": "build/p-a2616ec7.entry.js"
  },
  {
    "url": "build/p-b3a4424a.entry.js"
  },
  {
    "url": "build/p-cb3edd1e.entry.js"
  },
  {
    "url": "build/p-dfc23375.entry.js"
  },
  {
    "url": "build/p-ec9ae726.entry.js"
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
