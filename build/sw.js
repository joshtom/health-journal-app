importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js');
if(workbox) {
    console.log('Yay, workbox is working');

    workbox.precaching.precacheAndRoute([
  {
    "url": "style/main.css",
    "revision": "1397408a5109b32b54e484d5fe928d4a"
  },
  {
    "url": "sass/main.scss",
    "revision": "18ddbac3020524e6844a1cc360a7ef36"
  },
  {
    "url": "js/script.js",
    "revision": "0dc664a8f443057a34c461d3fc81d7e7"
  },
  {
    "url": "index.html",
    "revision": "04507f5560d61999286b9d84f79cdec7"
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

      // Cache gsap animation 
      workbox.routing.registerRoute(
        new RegExp('^https://cdnjs.cloudflare.com/ajax/libs/gsap/3.2.4/gsap.min.js'),
        new workbox.strategies.CacheFirst({
          cacheName: 'image-cache',
          plugins: [
            new workbox.cacheableResponse.CacheableResponse({
              statuses: [0, 200],
            })
          ]
        })
      );
      
} else {
    console.log('Workbox didnt load correctly');
}
