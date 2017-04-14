this.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('v1').then(function(cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/css/style.css',
                '/css/reset.css',
                '/js/app.js',
                '/manifest.json',
                '/icons/logo.png',
                '/js/shake.js',
                '/js/shake-custom.js',
                'https://connect.facebook.net/en_US/sdk.js'
            ]);
        })
    );
});

this.addEventListener('fetch', function(event) {
    var response;
    event.respondWith(
        caches.match(event.request).catch(function() {
            return fetch(event.request);
        }).then(function(r) {
            response = r;
            caches.open('v1').then(function(cache) {
                cache.put(event.request, response);
            });
            return response.clone();
        }).catch(function() {
            return caches.match('/gallery/myLittleVader.jpg');
        })
    );
});
