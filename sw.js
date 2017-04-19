this.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('v1').then(function(cache) {
            return cache.addAll([
                '/',
                'index.html',
                'style.css',
                'reset.css',
                'icons/logo.png',
                'images/logo.jpg',
                'images/1.jpg',
                'images/2.jpg',
                'images/3.jpg',
                'app.js',
                'shake.js',
                'shake-custom.js',
                'manifest.json',
                'handlebars.js',
                'jquery.min.js'
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
            return caches.match('icons/logo.jpg');
        })
    );
});