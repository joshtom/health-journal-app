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

      // Cache fontawesome cdn
      workbox.routing.registerRoute(
        new RegExp('^https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'),
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
