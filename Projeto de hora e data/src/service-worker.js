self.addEventListener("install", event =>{
    event.waitUntil(
        caches.open("app-relogio-cache").then(cache => {
        return cache.addAll([
            "index.html",
            "manifest.json",
            "icone-192.png",
            "icone-512.png",
            "4125202-panorama-da-noite-ceu-com-nuvens-e-lua-cheia-foto.jpg",
            "pexeels-goumbik-296234.jpg",
            "download.jpg",
            "service-worker.js
            
            
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
