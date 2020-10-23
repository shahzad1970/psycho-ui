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
    "revision": "df5464d6409b9984ec32334ce40b6d1c"
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
    "url": "build/p-07bee6f9.entry.js"
  },
  {
    "url": "build/p-2019edcf.entry.js"
  },
  {
    "url": "build/p-2c20acc8.js"
  },
  {
    "url": "build/p-7a087ca4.entry.js"
  },
  {
    "url": "build/p-a76084b0.js"
  },
  {
    "url": "build/p-b078b41e.entry.js"
  },
  {
    "url": "build/p-e0ca88c2.entry.js"
  },
  {
    "url": "build/p-e298b231.entry.js"
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
