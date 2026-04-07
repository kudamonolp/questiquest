const CACHE_NAME = "questiquest-demov1";
const ASSETS_TO_CACHE = [
  "./index.html",
  "./Build/questiquest-repo.loader.js",
  "./Build/questiquest-repo.framework.js.unityweb",
  "./Build/questiquest-repo.data.unityweb",
  "./Build/questiquest-repo.wasm.unityweb",
  "./Build/favicon.ico",
  "./Build/icon0.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});