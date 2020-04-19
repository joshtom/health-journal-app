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

    workbox.precaching.precacheAndRoute([]);
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
      // Cache the Google Fonts stylesheets with a stale-while-revalidate strategy.
      workbox.routing.registerRoute(
        /^https:\/\/fonts\.googleapis\.com/,
        new workbox.strategies.StaleWhileRevalidate({
          cacheName: 'google-fonts-stylesheets',
        })
      );

      // Cache the underlying font files with a cache-first strategy for 1 year.
      workbox.routing.registerRoute(
        /^https:\/\/fonts\.gstatic\.com/,
        new workbox.strategies.CacheFirst({
          cacheName: 'google-fonts-webfonts',
          plugins: [
            new workbox.cacheableResponse.CacheableResponse({
              statuses: [0, 200],
            }),
            new workbox.expiration.Plugin({
              maxAgeSeconds: 60 * 60 * 24 * 365,
              maxEntries: 30,
            }),
          ],
        })
      );
      
} else {
    console.log('Workbox didnt load correctly');
}
