self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open('calculator-pwa').then((cache) => {
            return cache.addAll([
                '/',
                '/static/css/bootstrap.min.css',
                '/static/js/calculator.js',
                '/static/images/icons/icon-72x72.png',
            ]);
        })
    );
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => {
            return response || fetch(e.request);
        })
    );
});
