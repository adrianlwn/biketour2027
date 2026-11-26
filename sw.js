// Hors-ligne : réseau d'abord (toujours la dernière version), cache en secours.
// Photos, GPX et tuiles de carte déjà consultées restent disponibles sans réseau.
const V = "gravel-toscane-v11";
const CORE = ["./", "index.html", "css/app.css", "js/app.js", "js/data.js", "js/photos.js", "js/routes.js", "js/overlays.js",
  "manifest.webmanifest", "icon.svg"];
self.addEventListener("install", e => e.waitUntil(caches.open(V).then(c => c.addAll(CORE)).then(() => self.skipWaiting())));
self.addEventListener("activate", e => e.waitUntil(
  caches.keys().then(ks => Promise.all(ks.filter(k => k !== V).map(k => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(caches.open(V).then(c => fetch(e.request)
    .then(r => { if (r.ok || r.type === "opaque") c.put(e.request, r.clone()); return r; })
    .catch(() => c.match(e.request))));
});
