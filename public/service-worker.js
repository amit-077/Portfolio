self.addEventListener("install", (event) => {
    event.waitUntil(
      caches.open("offline-cache").then((cache) => {
        return cache.addAll(["/offline"]); // Cache offline page
      })
    );
  });
  
  self.addEventListener("fetch", (event) => {
    event.respondWith(
      fetch(event.request).catch(() => caches.match("/offline")) // If network fails, serve offline page
    );
  });
  