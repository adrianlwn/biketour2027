import { TRIP, PLACES, NIGHTS, DAYS, PRACTICAL } from "./data.js";
import { PHOTOS } from "./photos.js";
import { ROUTES } from "./routes.js";

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const fr = (n, d = 0) => n.toLocaleString("fr-FR", { minimumFractionDigits: d, maximumFractionDigits: d });
const photos = k => PHOTOS[k] || [];
const placeName = k => PLACES[k].full || PLACES[k].n;
const isDesktop = () => matchMedia("(min-width: 1000px)").matches;
const store = { get(k) { try { return JSON.parse(localStorage.getItem(k)); } catch { return null; } }, set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} } };

/* ---------- Scénarios ---------- */
// choice[i] = index du scénario retenu pour le jour i (0 = conseillé)
const choice = DAYS.map((d, i) => {
  const saved = store.get("choice")?.[i] ?? 0;
  return d.variants && saved < d.variants.length ? saved : 0;
});
const day = i => DAYS[i].variants ? { ...DAYS[i], ...DAYS[i].variants[choice[i]] } : DAYS[i];
const route = i => ROUTES[i][choice[i]];
const gpxOf = i => `gpx/jour-${i + 1}${DAYS[i].variants ? "-" + day(i).id : ""}.gpx`;
const allStops = () => DAYS.flatMap((d, i) => [...day(i).stops, ...(d.variants || []).flatMap(v => v.stops)]);
const descOf = k => allStops().find(s => s[0] === k)?.[1] || "";

// Pentes et trafic
const SLOPE = [["0–3 %", "#8DB38B"], ["3–6 %", "#E1C25B"], ["6–9 %", "#E39A4B"], ["9–12 %", "#D4603F"], ["12 % et +", "#8F2430"]];
const slopeBin = g => g >= 12 ? 4 : g >= 9 ? 3 : g >= 6 ? 2 : g >= 3 ? 1 : 0;
const TRAF = [["Pistes et chemins", "#4F9A6A"], ["Petites routes", "#A9C46F"], ["Routes secondaires", "#E3A94B"], ["Routes numérotées (SS, SR, SP)", "#C8553D"]];
const scoreLabel = sc => sc >= 85 ? "Très agréable" : sc >= 75 ? "Agréable" : sc >= 60 ? "Correct" : "Exposé au trafic";
const roadKind = n => /^SS/.test(n) ? "route nationale" : /^SR/.test(n) ? "route régionale" : /^SP/.test(n) ? "route provinciale" : "";
// regroupe les tronçons d'une même route (même numéro)
const groupBusy = list => {
  const m = new Map();
  for (const b of list) {
    const key = b.name.split(" · ")[0];
    const g = m.get(key);
    if (g) { g.km = Math.round((g.km + b.km) * 10) / 10; g.cls = Math.max(g.cls, b.cls); g.maxspeed ||= b.maxspeed; }
    else m.set(key, { ...b });
  }
  return [...m.values()].sort((a, b) => b.cls - a.cls || b.km - a.km);
};
const bar = (vals, cols, label) => `<div class="sbar" role="img" aria-label="${esc(label)}">${vals.map((v, j) => v ? `<i style="width:${v}%;background:${cols[j]}"></i>` : "").join("")}</div>`;
const legend = (vals, pal) => `<div class="slegend">${vals.map((v, j) => v ? `<span style="--c:${pal[j][1]}">${pal[j][0]} ${v} %</span>` : "").join("")}</div>`;

const COVERS = ["castellina", "brolio", "oliveto", "montalcino", "antimo", "vitaleta", "montepulciano"];
const label = i => DAYS[i].rest ? "R" : String(DAYS.slice(0, i + 1).filter(d => !d.rest).length);
const stageName = i => DAYS[i].rest ? "Jour de repos" : "Étape " + label(i);

/* ---------- Thème ---------- */
const root = document.documentElement;
try { const t = localStorage.getItem("theme"); if (t) root.dataset.theme = t; } catch {}
const isDark = () => root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;

/* ---------- Couverture ---------- */
$("#dates").textContent = TRIP.dates;
$("#title").innerHTML = TRIP.title.split(", ").map(esc).join(",<br>");
$("#lede").textContent = TRIP.lede;
const coverP = photos("orcia")[2] || photos("vitaleta")[0];
if (coverP) {
  $("#coverImg").src = coverP.src;
  const c = $("#coverCredit"); c.href = coverP.page; c.textContent = `Photo : ${coverP.artist} · ${coverP.license}`;
}

/* ---------- Statistiques ---------- */
const surfaceBar = r => `
  <div class="sbar" role="img" aria-label="${r.gravel} % gravier, ${r.paved} % asphalte"><i class="g" style="width:${r.gravel}%"></i><i class="p" style="width:${r.paved}%"></i></div>
  <div class="slegend"><span style="--c:var(--gravel)">Gravier et terre ${r.gravel} %</span><span style="--c:var(--paved)">Asphalte ${r.paved} %</span>${r.unknown ? `<span style="--c:var(--unknown)">Non renseigné ${r.unknown} %</span>` : ""}</div>`;
function renderTotals() {
  const riding = DAYS.map((_, i) => i).filter(i => !DAYS[i].rest).map(route);
  const km = riding.reduce((s, r) => s + r.km, 0), up = riding.reduce((s, r) => s + r.up, 0);
  const pct = key => Math.round(riding.reduce((s, r) => s + r[key] * r.km, 0) / km);
  $("#totals").innerHTML = `
    <div><dt>jours de vélo + repos</dt><dd>6 + 1</dd></div>
    <div><dt>distance, hors repos</dt><dd>${fr(km)}<small>km</small></dd></div>
    <div><dt>dénivelé positif</dt><dd>${fr(Math.round(up / 10) * 10)}<small>m</small></dd></div>
    <div><dt>sur chemins blancs</dt><dd>${pct("gravel")}<small>%</small></dd></div>`;
  $("#totalSurface").innerHTML = surfaceBar({ gravel: pct("gravel"), paved: pct("paved"), unknown: Math.max(0, 100 - pct("gravel") - pct("paved")) })
    + `<p class="note">Agrément vélo moyen <b>${pct("score")}/100</b> (${scoreLabel(pct("score")).toLowerCase()}) · pente max du voyage <b>${fr(Math.max(...riding.map(r => r.slope.max)), 1)} %</b></p>`;
}

/* ---------- Navigation ---------- */
$("#daynav").innerHTML =
  `<a href="#apercu" data-nav="-1">Aperçu</a>` +
  DAYS.map((d, i) => `<a href="#jour-${i + 1}" data-nav="${i}" title="${esc(d.date + " · " + day(i).t)}">${label(i)}</a>`).join("") +
  `<span class="sep"></span><a href="#lieux" data-nav="lieux">Lieux</a><a href="#infos" data-nav="infos">Infos</a>`;
function markNav(key) {
  $$("[data-nav]").forEach(a => {
    const on = a.dataset.nav === key; a.setAttribute("aria-current", String(on));
    if (on) { const nav = a.parentElement; nav.scrollTo({ left: a.offsetLeft - nav.clientWidth / 2 + a.clientWidth / 2, behavior: "smooth" }); }
  });
}

/* ---------- Étapes ---------- */
const thumbs = k => {
  const ph = photos(k); if (!ph.length) return "";
  return `<div class="thumbs">${ph.slice(0, 3).map((p, j) => `<button type="button" data-photos="${k}" data-i="${j}" aria-label="Photo ${j + 1} : ${esc(placeName(k))}"><img src="${p.src}" alt="" loading="lazy">${j === 2 && ph.length > 3 ? `<span class="more">+${ph.length - 3}</span>` : ""}</button>`).join("")}</div>`;
};
const scenarioPicker = i => !DAYS[i].variants ? "" : `
  <fieldset class="scen">
    <legend>Scénarios pour ce jour</legend>
    <div class="scen-opts">${DAYS[i].variants.map((v, j) => {
      const r = ROUTES[i][j];
      return `<label class="scen-opt">
        <input type="radio" name="scen-${i}" value="${j}" ${j === choice[i] ? "checked" : ""} data-scen="${i}">
        <span class="scen-tag">${j === 0 ? "Conseillé · " : ""}${esc(v.short)}</span>
        <span class="scen-name">${esc(v.label)}</span>
        <span class="scen-num"><b>${fr(r.km)}</b> km · <b>${fr(r.up)}</b> m D+ · ${r.gravel} % gravier</span>
        <span class="scen-num">Pente max <b>${fr(r.slope.max, 0)} %</b> · trafic <b>${r.score}/100</b></span>
      </label>`;
    }).join("")}</div>
  </fieldset>`;
function stageHTML(i) {
  const d = day(i), r = route(i), cov = photos(COVERS[i])[0];
  const stops = [...(d.rest || i === 0 ? [] : [[d.path[0], "départ"]]), ...d.stops];
  return `
    ${cov ? `<button class="stage-cover" type="button" data-photos="${COVERS[i]}" aria-label="Photos : ${esc(placeName(COVERS[i]))}"><img src="${cov.src}" alt="" loading="lazy"><span>${esc(placeName(COVERS[i]))}</span></button>` : ""}
    <p class="eyebrow">${stageName(i)} · ${esc(d.date)} · ${esc(d.region)}</p>
    <div class="stage-head"><span class="stage-num" aria-hidden="true">${label(i)}</span><h2>${esc(d.t)}</h2></div>
    ${scenarioPicker(i)}
    <dl class="stats">
      <div><dt>distance</dt><dd>${fr(r.km, 1)}<small>km</small></dd></div>
      <div><dt>dénivelé +</dt><dd>${fr(r.up)}<small>m</small></dd></div>
      <div><dt>gravier</dt><dd>${r.gravel}<small>%</small></dd></div>
      <div><dt>altitude max</dt><dd>${fr(r.max)}<small>m</small></dd></div>
    </dl>
    <div class="surface">${surfaceBar(r)}</div>
    <div class="profile" data-profile="${i}">
      <span class="read"></span>
      <svg viewBox="0 0 1000 120" preserveAspectRatio="none" aria-label="Profil d’altitude, de ${fr(r.min)} à ${fr(r.max)} m"></svg>
      <div class="axis"><span>0 km</span><span>${fr(r.min)} – ${fr(r.max)} m</span><span>${fr(r.km, 1)} km</span></div>
    </div>
    <div class="facets">
      <section class="facet">
        <h3>Pentes <span class="pill">max ${fr(r.slope.max, 1)} %</span></h3>
        ${bar(r.slope.dist, SLOPE.map(x => x[1]), "Répartition des pentes")}
        ${legend(r.slope.dist, SLOPE)}
        ${r.slope.climbs.length ? `<ul class="climbs">${r.slope.climbs.map(c => `<li><span class="ckm">km ${fr(c.at, 1)}</span><span title="sommet à ${fr(c.top)} m"><b>${fr(c.km, 1)} km à ${fr(c.avg, 1)} %</b> · +${fr(c.gain)} m</span><span class="cmax" style="--c:${SLOPE[slopeBin(c.max)][1]}">max ${fr(c.max, 1)} %</span></li>`).join("")}</ul>` : `<p class="muted">Pas de montée notable.</p>`}
      </section>
      <section class="facet">
        <h3>Trafic <span class="pill score" style="--c:${r.score >= 75 ? "#4F9A6A" : r.score >= 60 ? "#E3A94B" : "#C8553D"}">${r.score}/100 · ${scoreLabel(r.score)}</span></h3>
        ${bar(r.traffic, TRAF.map(x => x[1]), "Types de routes")}
        ${legend(r.traffic, TRAF)}
        ${r.busy.length ? `<ul class="busy">${groupBusy(r.busy).slice(0, 5).map(b => `<li><span class="dot" style="--c:${TRAF[b.cls][1]}"></span><span><b>${esc(b.name.split(" · ")[0])}</b>${b.name.includes(" · ") ? " " + esc(b.name.split(" · ").slice(1).join(" · ")) : ""}${roadKind(b.name) ? ` <em>${roadKind(b.name)}</em>` : ""}</span><span class="bkm">${fr(b.km, 1)} km${b.maxspeed && /^\d+$/.test(b.maxspeed) ? ` · ${b.maxspeed} km/h` : ""}</span></li>`).join("")}</ul>` : `<p class="muted">Aucun tronçon notable sur une grande route.</p>`}
        ${r.bike ? `<p class="muted">${r.bike} % sur un itinéraire vélo balisé.</p>` : ""}
      </section>
    </div>
    ${d.rest ? `<p class="est">Boucle facultative. Montalcino est perchée : toute sortie finit par une montée.</p>` : ""}
    <ol class="stops">${stops.map(([k, s], j) => {
      const night = !d.rest && j === stops.length - 1 && NIGHTS.has(k);
      const gare = PLACES[k].st && !PLACES[k].n.startsWith("Gare");
      return `<li class="${night ? "night" : ""}"><div><b>${esc(PLACES[k].n)}${night ? `<span class="tag">nuit</span>` : ""}${gare ? `<span class="tag">gare</span>` : ""}</b><em>${esc(s)}</em></div>${thumbs(k)}</li>`;
    }).join("")}</ol>
    <div class="tips">${d.tips.map(t => `<div class="tip"><span>${esc(t)}</span></div>`).join("")}</div>
    <div class="actions">
      <a class="btn primary" href="${gpxOf(i)}" download="gravel-toscane-jour-${i + 1}${DAYS[i].variants ? "-" + d.id : ""}.gpx">↓ GPX</a>
      <button class="btn" type="button" data-zoom="${i}">Voir sur la carte</button>
    </div>`;
}
$("#stages").innerHTML = DAYS.map((_, i) => `<section class="stage" id="jour-${i + 1}" data-stage="${i}">${stageHTML(i)}</section>`).join("");

/* ---------- Galerie ---------- */
const inDay = (k, i) => day(i).path.includes(k) || (DAYS[i].variants || []).some(v => v.path.includes(k));
const order = [...new Set(DAYS.flatMap((d, i) => [...(d.variants || []).flatMap(v => v.path), ...day(i).path]))];
$("#pgrid").innerHTML = order.filter(k => photos(k).length).map(k => {
  const di = DAYS.findIndex((_, i) => inDay(k, i));
  return `<button class="pcard" type="button" data-photos="${k}" aria-label="${esc(placeName(k))}, ${photos(k).length} photos">
    <img src="${photos(k)[0].src}" alt="" loading="lazy">
    <span class="cap"><small>${stageName(di)} · ${photos(k).length} photos</small><b>${esc(PLACES[k].n)}</b></span>
  </button>`;
}).join("");

/* ---------- Infos ---------- */
$("#prac").innerHTML = PRACTICAL.map(x => `<article><h3>${esc(x.h)}</h3><p>${esc(x.p)}</p></article>`).join("");

/* ---------- Visionneuse ---------- */
const lb = $("#lb"), lbImg = $("#lbImg");
let lbSet = [], lbI = 0, lbReturn = null;
function openLB(k, i = 0) {
  lbSet = photos(k).map(p => ({ ...p, title: placeName(k) }));
  if (!lbSet.length) return;
  lbI = i; lbReturn = document.activeElement;
  lb.hidden = false; document.body.style.overflow = "hidden";
  showLB(); $("#lbX").focus();
}
function showLB() {
  const p = lbSet[lbI];
  lbImg.src = p.src; lbImg.alt = p.title;
  $("#lbTitle").textContent = p.title;
  $("#lbCount").textContent = lbSet.length > 1 ? `${lbI + 1} / ${lbSet.length}` : "";
  const c = $("#lbCredit"); c.href = p.page; c.textContent = `© ${p.artist} · ${p.license} · Wikimedia Commons`;
  $("#lbPrev").hidden = $("#lbNext").hidden = lbSet.length < 2;
}
function closeLB() { lb.hidden = true; document.body.style.overflow = ""; lbReturn?.focus(); }
const step = d => { lbI = (lbI + d + lbSet.length) % lbSet.length; showLB(); };
$("#lbX").onclick = closeLB; $("#lbPrev").onclick = () => step(-1); $("#lbNext").onclick = () => step(1);
lb.addEventListener("click", e => { if (e.target === lb) closeLB(); });
addEventListener("keydown", e => {
  if (lb.hidden) return;
  if (e.key === "Escape") closeLB(); else if (e.key === "ArrowLeft") step(-1); else if (e.key === "ArrowRight") step(1);
});
let tx = null;
lbImg.addEventListener("touchstart", e => { tx = e.touches[0].clientX; }, { passive: true });
lbImg.addEventListener("touchend", e => { if (tx == null) return; const dx = e.changedTouches[0].clientX - tx; tx = null; if (Math.abs(dx) > 40) step(dx < 0 ? 1 : -1); });

/* ---------- Carte ---------- */
const map = L.map("map", { zoomControl: true, zoomSnap: .25 });
map.zoomControl.setPosition("topright");
const esri = s => `https://server.arcgisonline.com/ArcGIS/rest/services/${s}/MapServer/tile/{z}/{y}/{x}`;
const canvas = () => {
  const t = isDark() ? "Dark" : "Light";
  return L.layerGroup([
    L.tileLayer(esri(`Canvas/World_${t}_Gray_Base`), { maxZoom: 16, maxNativeZoom: 16, attribution: "© Esri, HERE, Garmin, © OpenStreetMap" }),
    L.tileLayer(esri(`Canvas/World_${t}_Gray_Reference`), { maxZoom: 16, maxNativeZoom: 16 }),
  ]);
};
const LAYERS = [
  { name: "Plan", make: canvas },
  { name: "Satellite", make: () => L.tileLayer(esri("World_Imagery"), { maxZoom: 19, attribution: "© Esri, Maxar, Earthstar Geographics" }) },
  { name: "Vélo", make: () => L.tileLayer("https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png", { maxZoom: 19, attribution: '<a href="https://www.cyclosm.org">CyclOSM</a> · © OSM' }) },
  { name: "Relief", make: () => L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", { maxZoom: 17, attribution: "© OSM · OpenTopoMap" }) },
];
let layerI = 0, base = LAYERS[0].make().addTo(map);
function setLayer(i) { layerI = i; map.removeLayer(base); base = LAYERS[i].make().addTo(map); $("#layerName").textContent = LAYERS[i].name; }
$("#layerBtn").addEventListener("click", () => setLayer((layerI + 1) % LAYERS.length));
$("#theme").addEventListener("click", () => {
  root.dataset.theme = isDark() ? "light" : "dark";
  try { localStorage.setItem("theme", root.dataset.theme); } catch {}
  if (layerI === 0) setLayer(0);
  styleLines();
});

// Un tracé par scénario ; les scénarios non retenus apparaissent en pointillés sur l'étape active
const css = v => getComputedStyle(root).getPropertyValue(v).trim();
const lines = ROUTES.map((variants, i) => variants.map((r, j) => {
  const halo = L.polyline(r.geom, { weight: 9, interactive: false, lineCap: "round", lineJoin: "round" }).addTo(map);
  const line = L.polyline(r.geom, { weight: 4, interactive: false, lineCap: "round", lineJoin: "round" }).addTo(map);
  const hit = L.polyline(r.geom, { color: "#000", opacity: 0, weight: 22 }).addTo(map);
  const name = DAYS[i].variants ? ` · ${DAYS[i].variants[j].label}` : "";
  hit.bindTooltip(`${stageName(i)}${name}`, { sticky: true, className: "mk-lbl" });
  hit.on("click", () => {
    if (DAYS[i].variants && j !== choice[i]) setChoice(i, j);
    document.getElementById("jour-" + (i + 1)).scrollIntoView({ behavior: "smooth" });
  });
  let c = 0; r.cum = r.geom.map((p, k) => (k && (c += map.distance(r.geom[k - 1], p)), c / 1000));
  return { halo, line, hit };
}));
// Couleur du tracé : étapes, pentes ou trafic
const MODES = ["Étapes", "Pentes", "Trafic"];
let mode = 0, overlay = L.layerGroup().addTo(map);
const colorAt = (r, k) => mode === 1 ? SLOPE[slopeBin(gradeAt(r, r.cum[k]))][1] : TRAF[r.runs.find(x => k >= x[1] && k <= x[2])?.[0] ?? 1][1];
function gradeAt(r, km) { const p = r.profile; let j = 0; while (j < p.length - 1 && p[j + 1][0] < km) j++; return p[j][2]; }
function drawOverlay() {
  overlay.clearLayers();
  if (!mode) return;
  DAYS.forEach((_, i) => {
    const r = route(i), on = active == null || active < 0 || i === active;
    let start = 0, col = colorAt(r, 0);
    for (let k = 1; k <= r.geom.length; k++) {
      const c = k < r.geom.length ? colorAt(r, k) : null;
      if (c === col) continue;
      L.polyline(r.geom.slice(start, k + (k < r.geom.length ? 1 : 0)), { color: col, weight: i === active ? 6 : 4, opacity: on ? 1 : .3, interactive: false, lineCap: "round" }).addTo(overlay);
      start = k; col = c;
    }
  });
}
$("#colorBtn").addEventListener("click", () => {
  mode = (mode + 1) % MODES.length; $("#colorName").textContent = MODES[mode];
  $("#maplegend").innerHTML = mode ? (mode === 1 ? SLOPE : TRAF).map(([n, c]) => `<span style="--c:${c}">${n}</span>`).join("") : "";
  $("#maplegend").hidden = !mode;
  styleLines();
});

let active = null;
function styleLines() {
  const acc = css("--accent"), ink = css("--ink"), bg = css("--bg"), faint = css("--faint");
  const overview = active == null || active < 0;
  lines.forEach((vs, i) => vs.forEach(({ halo, line, hit }, j) => {
    const cur = i === active;
    if (j !== choice[i]) {
      // scénario alternatif : visible et cliquable seulement quand son étape est active
      line.setStyle({ color: faint, opacity: cur ? .95 : 0, weight: 3, dashArray: "6 7" });
      halo.setStyle({ opacity: 0 });
      if (cur) map.addLayer(hit); else map.removeLayer(hit);
      return;
    }
    map.addLayer(hit);
    line.setStyle({ color: cur || overview ? acc : ink, opacity: cur || overview ? 1 : .28, weight: cur ? 5 : 3.5, dashArray: DAYS[i].rest ? "2 8" : null });
    halo.setStyle({ color: bg, opacity: cur || overview ? .9 : 0, weight: cur ? 10 : 8 });
  }));
  if (active >= 0) { const { halo, line } = lines[active][choice[active]]; halo.bringToFront(); line.bringToFront(); }
  if (mode) lines.forEach((vs, i) => vs[choice[i]].line.setStyle({ opacity: 0 }));
  drawOverlay();
}

// Marqueurs : départ (D) et nuits numérotées ; arrêts en points
const markers = {};
const nightNumbers = () => { const n = {}; DAYS.forEach((d, i) => { if (!d.rest) n[day(i).path.at(-1)] = label(i); }); n[day(0).path[0]] = "D"; return n; };
const markerIcon = (k, nn) => {
  const night = k in nn, sz = night ? 22 : 10;
  return L.divIcon({ className: "", html: `<div class="mk ${night ? "night" : "stop"}">${night ? nn[k] : ""}</div>`, iconSize: [sz, sz], iconAnchor: [sz / 2, sz / 2] });
};
const tipText = k => PLACES[k].n + (PLACES[k].st && !PLACES[k].n.startsWith("Gare") ? " · gare" : "");
for (const [k, p] of Object.entries(PLACES)) {
  const m = L.marker([p.lat, p.lon], { icon: markerIcon(k, nightNumbers()), riseOnHover: true, keyboard: false });
  m.bindTooltip(tipText(k), { direction: "top", offset: [0, -8], className: "mk-lbl" });
  const ph = photos(k)[0];
  m.bindPopup(() => `<div class="pop">${ph ? `<img src="${ph.src}" alt="" data-photos="${k}">` : ""}<div><b>${esc(placeName(k))}</b><span>${esc(descOf(k))}</span></div></div>`, { minWidth: 230, maxWidth: 230 });
  markers[k] = m;
}
const allBounds = () => L.latLngBounds(DAYS.flatMap((_, i) => route(i).geom));
const pad = () => isDesktop() ? [48, 48] : [18, 18];
map.fitBounds(allBounds(), { padding: pad() });

function refreshMarkers() {
  const nn = nightNumbers();
  const inStage = active >= 0 ? new Set(day(active).path) : null;
  const used = new Set(DAYS.flatMap((_, i) => day(i).path));
  const alt = active >= 0 && DAYS[active].variants ? new Set(DAYS[active].variants.flatMap(v => v.path)) : new Set();
  for (const [k, m] of Object.entries(markers)) {
    // Siena reste sur la carte (à visiter) ; les gares des autres scénarios n'apparaissent que sur leur étape
    const visible = used.has(k) || alt.has(k) || k === "siena";
    if (!visible) { m.remove(); continue; }
    m.setIcon(markerIcon(k, nn));
    if (!map.hasLayer(m)) m.addTo(map);
    const el = m.getElement()?.firstElementChild;
    el?.classList.toggle("on", !!inStage?.has(k));
    el?.classList.toggle("dim", !!inStage && !inStage.has(k));
    const tt = m.getTooltip(), want = !!inStage?.has(k);
    if (tt.options.permanent !== want) { m.unbindTooltip(); m.bindTooltip(tipText(k), { ...tt.options, permanent: want }); }
  }
}

function setActive(i, force) {
  if (i === active && !force) return;
  active = i;
  styleLines(); refreshMarkers();
  map.flyToBounds(i >= 0 ? lines[i][choice[i]].line.getBounds() : allBounds(), { padding: pad(), duration: .7 });
  markNav(String(i));
}

function setChoice(i, j) {
  choice[i] = j; store.set("choice", choice);
  const sec = document.getElementById("jour-" + (i + 1));
  sec.innerHTML = stageHTML(i);
  bindProfile(sec.querySelector("[data-profile]"));
  sec.querySelector(`[data-scen][value="${j}"]`)?.focus({ preventScroll: true });
  $(`[data-nav="${i}"]`).title = `${DAYS[i].date} · ${day(i).t}`;
  renderTotals();
  setActive(i, true);
}

// Suivre le défilement
const io = new IntersectionObserver(es => {
  const vis = es.filter(e => e.isIntersecting);
  if (!vis.length) return;
  const el = vis[0].target;
  if (el.dataset.stage !== undefined) setActive(+el.dataset.stage);
  if (el.id === "lieux" || el.id === "infos") markNav(el.id);
}, { rootMargin: isDesktop() ? "-48% 0px -48% 0px" : "-68% 0px -28% 0px" });
$$("[data-stage]").forEach(s => io.observe(s));

document.addEventListener("click", e => {
  const ph = e.target.closest("[data-photos]");
  if (ph) return openLB(ph.dataset.photos, +(ph.dataset.i || 0));
  const z = e.target.closest("[data-zoom]");
  if (z) { setActive(+z.dataset.zoom, true); if (!isDesktop()) scrollTo({ top: $(".layout").offsetTop, behavior: "smooth" }); }
});
document.addEventListener("change", e => {
  const r = e.target.closest("[data-scen]");
  if (r) setChoice(+r.dataset.scen, +r.value);
});

// Ma position
$("#locate").addEventListener("click", () => map.locate({ setView: true, maxZoom: 14 }));
let me;
map.on("locationfound", e => { me?.remove(); me = L.circleMarker(e.latlng, { radius: 8, color: "#fff", weight: 3, fillColor: "#2F7DD1", fillOpacity: 1 }).addTo(map); });
map.on("locationerror", () => alert("Position indisponible."));

/* ---------- Profils d'altitude ---------- */
const cursor = L.marker([0, 0], { icon: L.divIcon({ className: "", html: '<div class="cursor"></div>', iconSize: [14, 14], iconAnchor: [7, 7] }), interactive: false });
function bindProfile(box) {
  const i = +box.dataset.profile, r = route(i), pr = r.profile, svg = box.querySelector("svg");
  const lo = r.min - 30, hi = r.max + 20, W = 1000, H = 120;
  const X = km => km / r.km * W, Y = e => H - (e - lo) / (hi - lo) * H;
  const d = pr.map(([km, e], j) => `${j ? "L" : "M"}${X(km).toFixed(1)},${Y(e).toFixed(1)}`).join("");
  // aire colorée par tranche de pente : le tronçon j-1 → j prend la couleur de la pente au point j
  let areas = "";
  const emit = (a, b, bin) => {
    const seg = pr.slice(a, b + 1);
    areas += `<path fill="${SLOPE[bin][1]}" d="M${X(seg[0][0]).toFixed(1)},${H}${seg.map(([km, e]) => `L${X(km).toFixed(1)},${Y(e).toFixed(1)}`).join("")}L${X(seg.at(-1)[0]).toFixed(1)},${H}Z"/>`;
  };
  let runStart = 0, runBin = slopeBin(pr[1]?.[2] ?? 0);
  for (let j = 1; j < pr.length; j++) {
    const b = slopeBin(pr[j][2]);
    if (b !== runBin) { emit(runStart, j - 1, runBin); runStart = j - 1; runBin = b; }
  }
  emit(runStart, pr.length - 1, runBin);
  svg.innerHTML = `<g class="areas">${areas}</g><line class="grid" x1="0" x2="${W}" y1="${H}" y2="${H}"/><path class="line" d="${d}"/><line class="hair" y1="0" y2="${H}"/>`;
  const hair = svg.querySelector(".hair"), read = box.querySelector(".read");
  const move = ev => {
    const rect = svg.getBoundingClientRect();
    const f = Math.min(1, Math.max(0, (ev.clientX - rect.left) / rect.width)), km = f * r.km;
    let j = 0; while (j < pr.length - 1 && pr[j + 1][0] < km) j++;
    hair.setAttribute("x1", f * W); hair.setAttribute("x2", f * W);
    read.style.left = Math.min(Math.max(f * rect.width, 50), rect.width - 50) + "px";
    read.textContent = `km ${fr(km, 1)} · ${fr(pr[j][1])} m · ${pr[j][2] > 0 ? "+" : ""}${fr(pr[j][2], 1)} %`;
    box.classList.add("hover");
    let g = 0; while (g < r.cum.length - 1 && r.cum[g + 1] < km) g++;
    cursor.setLatLng(r.geom[g]); if (!map.hasLayer(cursor)) cursor.addTo(map);
    setActive(i);
  };
  svg.addEventListener("pointermove", move);
  svg.addEventListener("pointerdown", move);
  svg.addEventListener("pointerleave", () => { box.classList.remove("hover"); cursor.remove(); });
}
$$("[data-profile]").forEach(bindProfile);

renderTotals();
styleLines();
refreshMarkers();

// Lien direct vers une étape
const h = location.hash.match(/^#jour-(\d)$/);
if (h) setTimeout(() => document.getElementById("jour-" + h[1])?.scrollIntoView(), 200);

/* ---------- Hors-ligne ---------- */
if ("serviceWorker" in navigator && location.protocol !== "file:") navigator.serviceWorker.register("sw.js").catch(() => {});
