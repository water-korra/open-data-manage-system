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
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "4696d318f6b737134f6b49e0fd04e918"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.8bd5f8f2.css",
    "revision": "b9a9f5311ff70ceac4cc27ccc498ad14"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/SQL_scheme.b6684a80.png",
    "revision": "b6684a80a32870bb6118a80c8aeff2f3"
  },
  {
    "url": "assets/js/10.30ba7dd2.js",
    "revision": "1ab8921b9681065ec7efeb5aad5366f3"
  },
  {
    "url": "assets/js/11.29ee89f8.js",
    "revision": "92f8f39cc3fdb0899cf3176a91a6c543"
  },
  {
    "url": "assets/js/12.d1dd4fe3.js",
    "revision": "e5486ba9bdf7d7fb71a5b43ea5ef4068"
  },
  {
    "url": "assets/js/13.6b4a3ce8.js",
    "revision": "ff602871a9dd9eac5035869fcaa21901"
  },
  {
    "url": "assets/js/14.2545c1ad.js",
    "revision": "c47e00178e234471f42ccc2546285565"
  },
  {
    "url": "assets/js/15.c58950da.js",
    "revision": "2c016a396b08b149c2d785b105518527"
  },
  {
    "url": "assets/js/16.f115e911.js",
    "revision": "f10097b531c0f891b7cedf8c9a58bf21"
  },
  {
    "url": "assets/js/17.1b4456e6.js",
    "revision": "06e3ed0224b60a56db2fc3c5ed8ad8c9"
  },
  {
    "url": "assets/js/18.b441cfa0.js",
    "revision": "87ef1dfdd4ab08d2c088d2c7105ca240"
  },
  {
    "url": "assets/js/19.dba6214a.js",
    "revision": "a5a924eea2c3cc4a7c351996926f383c"
  },
  {
    "url": "assets/js/2.d365fde8.js",
    "revision": "f57e9f1755d4ab96c82e5556eb5a84f9"
  },
  {
    "url": "assets/js/20.2302e5c4.js",
    "revision": "0d470c93ed11fd7297d793375a804278"
  },
  {
    "url": "assets/js/21.edd3e7a1.js",
    "revision": "b39690a5d77a13a3ad74f9370d3c8ee1"
  },
  {
    "url": "assets/js/22.91672e5f.js",
    "revision": "9729406695d69886c6de94c881544e10"
  },
  {
    "url": "assets/js/23.3d7a60d3.js",
    "revision": "daac2b52bf7fe8f49609dc07c0830944"
  },
  {
    "url": "assets/js/24.2d009868.js",
    "revision": "dc039ea7c2eaf4e5e48d7c0a957f756a"
  },
  {
    "url": "assets/js/25.80a4b416.js",
    "revision": "f8a9d3aababeae5c49a379eb27f91055"
  },
  {
    "url": "assets/js/26.7d81ea87.js",
    "revision": "2163d838e28189113d0211d4050e2a57"
  },
  {
    "url": "assets/js/28.01bbdb4a.js",
    "revision": "b7166a3f790d8c0a1497c6bd3a169410"
  },
  {
    "url": "assets/js/3.773b1300.js",
    "revision": "e3d8ea9b477cd8c1ca68583b241caebf"
  },
  {
    "url": "assets/js/4.4c193c95.js",
    "revision": "20f92a95ac69fb7c48e63b470c35d475"
  },
  {
    "url": "assets/js/5.dea68fdd.js",
    "revision": "8b28fd847ef12b655dba770bb9e8d494"
  },
  {
    "url": "assets/js/6.6d8c3d51.js",
    "revision": "5666693a1497354d7117ebbb34cc592d"
  },
  {
    "url": "assets/js/7.9617083c.js",
    "revision": "bb0c8e37415a02abe60360941ab6ec31"
  },
  {
    "url": "assets/js/8.52c6b126.js",
    "revision": "b4471ce48b6aee9416bd965aea74b617"
  },
  {
    "url": "assets/js/9.1882ecda.js",
    "revision": "ef6bda57b9752e0580bb940b71e9b188"
  },
  {
    "url": "assets/js/app.98e0157f.js",
    "revision": "ed0b5a9ec9cdc626c1cd2649d2c6bdb0"
  },
  {
    "url": "conclusion/index.html",
    "revision": "f38a3cbb79cf9c4835bfa2e4c0da5bc6"
  },
  {
    "url": "design/index.html",
    "revision": "902ea00f727c3add63206b4a20aa53b7"
  },
  {
    "url": "index.html",
    "revision": "f41256aa14e01d7f33f9c684bc471ea8"
  },
  {
    "url": "intro/index.html",
    "revision": "14b050172d543404f3bb3784cfbe1f13"
  },
  {
    "url": "license.html",
    "revision": "c6ae94487788630ac26fdec72cecb7f2"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "48d6766ec0de7af499b03afd94e151ea"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "2d95b039d5ac77cbf1325f99d6f71c0c"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "4f0e7eeb61ccdd4aea31a600af6afaef"
  },
  {
    "url": "software/index.html",
    "revision": "ec1e0cd12dc492cefa02ca5803c5e516"
  },
  {
    "url": "test/index.html",
    "revision": "872d8184bedf77a5f61dc164675dd589"
  },
  {
    "url": "use cases/DataConsumer.html",
    "revision": "faf50a131bb0bda7e4cf1b03dfb8d6b3"
  },
  {
    "url": "use cases/DataPublisher.html",
    "revision": "5da61aa77c43fa726f8344f8acc62374"
  },
  {
    "url": "use cases/index.html",
    "revision": "7fe75ec3c2f2ab34646d5a9d9146bd2d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
