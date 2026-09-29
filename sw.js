const CACHE_NAME = "minhas-tarefas-v3";

const ARQUIVOS = [
    "./",
    "./index.html",
    "./manifest.json",
    "./icon-192.png",
    "./icon-512.png"
];

self.addEventListener("install", function(event) {

    self.skipWaiting();

    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                return cache.addAll(ARQUIVOS);
            })
    );
});


self.addEventListener("activate", function(event) {

    event.waitUntil(
        caches.keys()
            .then(function(chaves) {

                return Promise.all(
                    chaves.map(function(chave) {

                        if (chave !== CACHE_NAME) {
                            return caches.delete(chave);
                        }

                    })
                );

            })
            .then(function() {
                return self.clients.claim();
            })
    );
});


self.addEventListener("fetch", function(event) {

    if (event.request.method !== "GET") {
        return;
    }

    event.respondWith(
        caches.match(event.request)
            .then(function(resposta) {

                return resposta || fetch(event.request);

            })
    );
});