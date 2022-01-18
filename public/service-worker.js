// // Set this to true for production
// var doCache = true;

// // Name our cache
// var CACHE_NAME = 'my-pwa-cache-v1';

// const assetUrls = [
//     './index.html',
//     '../src/index.js'
// ]

// // The first time the user starts up the PWA, 'install' is triggered.
// self.addEventListener('install', async function(event) {
//   const cache = await caches.open(CACHE_NAME)
//   await cache.addAll(assetUrls)
// });

// // Delete old caches that are not our current one!
// self.addEventListener("activate", event => {
  
// });


// // When the webpage goes to fetch files, we intercept that request and serve up the matching files
// // if we have them
// self.addEventListener('fetch', function(event) {
//     // if (doCache) {
//     //   event.respondWith(
//     //       caches.match(event.request).then(function(response) {
//     //           return response || fetch(event.request);
//     //       })
//     //   );
//     // }

//     console.log('Fetch', event.request.url);
// });