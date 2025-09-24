self.addEventListener("install", event =>{
    event.waitUntil(
        caches.open("app-relogio-cache").then(cache => {
        return cache.addAll([
            "index.html",
            "manifest.json",
            "relogio.png",
            "icon-512.png",
            //colocar aqui as pastas


        ]);
        })
        );
    
});
self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => response || fetch(event.request))

    );
});