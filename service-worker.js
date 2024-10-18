self.addEventListener('install', (e) => {
    console.log('Service Worker: Установлен');
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => {
            return response || fetch(e.request);
        })
    );
});
