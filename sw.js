const cacheName = "hello-world-PWA";

const filesToCache = [
  '/',
  '/index.html',
  'css/style.css',
  'js/main.js'
]

// Start the service worker and cache all the app's content
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName)
      .then((cache) => {
      return cache.addAll(filesToCache)
    })
  )
})

// Serve the cached content when offline
self.addEventListener('fetch', event => {
  event.respondWith(
    catches.match(event.request)
      .then(response => {
        return response || fetch(event.request)
    })
  )
})
