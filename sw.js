// Früher lief hier kurz die Web-App mit Service Worker. Dieser Ersatz meldet ihn ab und leert den Cache,
// damit Besucher die neue Website sehen.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil((async () => {
  for (const k of await caches.keys()) await caches.delete(k);
  await self.registration.unregister();
  for (const c of await self.clients.matchAll()) c.navigate(c.url);
})()));
