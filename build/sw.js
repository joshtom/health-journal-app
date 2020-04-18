/*
Copyright 2018 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js');
if(workbox) {
    console.log('Yay, workbox is working');

    workbox.precaching.precacheAndRoute([
  {
    "url": "style/main.css",
    "revision": "00b833e344444d810d57a33ba159e887"
  },
  {
    "url": "sass/main.scss",
    "revision": "2a071f78b90b6efb35e43c70043af3b2"
  },
  {
    "url": "js/script.js",
    "revision": "9694a9a80eb148b8dfd1068ee51b11ab"
  },
  {
    "url": "index.html",
    "revision": "1f8e77414a0c31da57c9d21ad52fd11e"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "4358242651be7e9baa3d85e4aa459f39"
  },
  {
    "url": "images/custom-install.png",
    "revision": "1667ad0a60284d3a7d0519154cdef890"
  },
  {
    "url": "images/end-of-game-install.png",
    "revision": "11c1fd9182e3acb1c5c0ec9ab06a4856"
  },
  {
    "url": "images/in-feed-install.png",
    "revision": "140f33d4dab6a9108236ca198bd879d9"
  },
  {
    "url": "images/install-promotion.png",
    "revision": "85f059fdba14a5aa2d61a43445fed895"
  },
  {
    "url": "images/install-prompt.png",
    "revision": "927033da1b110001b42d3cccfd8bfa0a"
  },
  {
    "url": "images/signup-journey.png",
    "revision": "e7bc3451e51631452ee5bc7592321032"
  },
  {
    "url": "images/user-journey.png",
    "revision": "f05fa228e50bcb7eda1b974fae75bf46"
  },
  {
    "url": "pages/offline.html",
    "revision": "ac391351493317fabdd57f3b4b3d04aa"
  }
]);
    // Adding routing
    workbox.routing.registerRoute(
        /(.*)articles(.*)\.(?:png|gif|jpg)/,
        workbox.strategies.cacheFirst({
          cacheName: 'images-cache',
          plugins: [
            new workbox.expiration.Plugin({
              maxEntries: 50,
              maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
            })
          ]
        })
      );
      const homePage = workbox.strategies.networkFirst({
        cacheName: 'homepage-cache',
        plugins: [
          new workbox.expiration.Plugin({
            maxEntries: 50,
          })
        ]
      });
      
      workbox.routing.registerRoute(/(.*)index(.*)\.html/, args => {
        return homePage.handle(args).then((response) => {
            // Args returns a promise to handle invalid responses
            if (!response) {
                return caches.match('pages/offline.html');
              } else if (response.status === 404) {
                return caches.match('pages/404.html');
              }
              return response;
        })
      });

      
      
} else {
    console.log('Workbox didnt load correctly');
}
