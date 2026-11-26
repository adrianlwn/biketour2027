// Contenu du voyage : De Siena à Chiusi, gravel en Toscane, 30 mai – 5 juin 2027
export const TRIP = {
  title: "De Siena à Chiusi, par les routes blanches",
  dates: "Du dimanche 30 mai au samedi 5 juin 2027",
  lede: "Une semaine de gravel du Chianti au Val d’Orcia : vignes et villages perchés, collines d’argile des Crete Senesi, cyprès et sources chaudes. Train à l’aller comme au retour. Choisissez votre scénario de voyage, les nuits changent avec lui.",
  totals: [
    { v: "6 + 1", l: "jours de vélo + repos" },
    { v: "≈ 245 km", l: "hors boucle de repos" },
    { v: "≈ 4 500 m", l: "de dénivelé positif" },
  ],
};

// Lieux (st = gare)
export const PLACES = {
  siena:        { n: "Siena", full: "Siena – Piazza del Campo", lat: 43.3188, lon: 11.3308, st: 1 },
  scalo:        { n: "Gare de Castellina-Monteriggioni", lat: 43.4087, lon: 11.2122, st: 1 },
  badesse:      { n: "Gare de Badesse", lat: 43.3856, lon: 11.273, st: 1 },
  castellina:   { n: "Castellina in Chianti", lat: 43.471, lon: 11.286 },
  radda:        { n: "Radda in Chianti", lat: 43.487, lon: 11.374 },
  gaiole:       { n: "Gaiole in Chianti", lat: 43.467, lon: 11.434 },
  brolio:       { n: "Castello di Brolio", lat: 43.418, lon: 11.456 },
  castel:       { n: "Castelnuovo Berardenga", lat: 43.346, lon: 11.504 },
  asciano:      { n: "Asciano", lat: 43.234, lon: 11.561, st: 1 },
  oliveto:      { n: "Monte Oliveto Maggiore", full: "Abbazia di Monte Oliveto Maggiore", lat: 43.175, lon: 11.544 },
  buon:         { n: "Buonconvento", lat: 43.134, lon: 11.483, st: 1 },
  montalcino:   { n: "Montalcino", lat: 43.059, lon: 11.489 },
  angelo:       { n: "Sant’Angelo in Colle", lat: 43.002, lon: 11.477 },
  antimo:       { n: "Sant’Antimo", full: "Abbazia di Sant’Antimo", lat: 43.0005, lon: 11.5155 },
  vignoni:      { n: "Bagno Vignoni", lat: 43.0285, lon: 11.6185 },
  quirico:      { n: "San Quirico d’Orcia", lat: 43.0585, lon: 11.6046 },
  vitaleta:     { n: "Chapelle de Vitaleta", full: "Cappella della Madonna di Vitaleta", lat: 43.0598, lon: 11.6337 },
  pienza:       { n: "Pienza", lat: 43.077, lon: 11.679 },
  montepulciano:{ n: "Montepulciano", lat: 43.0925, lon: 11.782 },
  chiusi:       { n: "Chiusi", lat: 43.0156, lon: 11.9459, st: 1 },
  // lieux des scénarios « boucle depuis Siena » et « sens inverse »
  leonina:      { n: "Site Transitoire", full: "Site Transitoire, sur la Via Lauretana", lat: 43.2934, lon: 11.4654 },
  sangiovanni:  { n: "San Giovanni d’Asso", lat: 43.1526, lon: 11.59 },
  montisi:      { n: "Montisi", lat: 43.157, lon: 11.6521 },
  castelmuzio:  { n: "Castelmuzio", lat: 43.1409, lon: 11.6643 },
  monteroni:    { n: "Monteroni d’Arbia", lat: 43.2301, lon: 11.4199, st: 1 },
  // lieux des détours
  monteriggioni:{ n: "Monteriggioni", lat: 43.3897, lon: 11.2234 },
  volpaia:      { n: "Volpaia", lat: 43.5166, lon: 11.381 },
  sangusme:     { n: "San Gusmè", lat: 43.3879, lon: 11.4983 },
  chiusure:     { n: "Chiusure", lat: 43.176, lon: 11.5582 },
  castiglione:  { n: "Rocca d’Orcia", full: "Castiglione d’Orcia et Rocca d’Orcia", lat: 43.0114, lon: 11.6141 },
  belvedere:    { n: "Podere Belvedere", lat: 43.0621, lon: 11.6205 },
  monticchiello:{ n: "Monticchiello", lat: 43.0682, lon: 11.7256 },
};

// Dates du voyage (une par jour, quel que soit le scénario)
export const DATES = ["Dim. 30 mai","Lun. 31 mai","Mar. 1er juin","Mer. 2 juin","Jeu. 3 juin","Ven. 4 juin","Sam. 5 juin"];

// Bibliothèque d'étapes : chaque étape a une ou plusieurs variantes (la première est conseillée)
export const DAYLIB = {
 "d1": {
  "region": "Chianti",
  "variants": [
   {
    "id": "scalo-safety",
    "profile": "safety",
    "label": "Gare de Castellina, routes calmes",
    "short": "Équilibré",
    "t": "Castellina Scalo → Gaiole in Chianti",
    "path": [
     "scalo",
     "castellina",
     "radda",
     "gaiole"
    ],
    "stops": [
     [
      "scalo",
      "descente du train depuis Florence (ligne Florence–Siena)"
     ],
     [
      "castellina",
      "tunnel médiéval, pause déjeuner"
     ],
     [
      "radda",
      "bourg fortifié"
     ],
     [
      "gaiole",
      "berceau de l’Eroica, nuit"
     ]
    ],
    "tips": [
     "Le meilleur compromis pour un jour d’arrivée : environ 300 m de D+ de moins que le plan d’origine, en évitant au maximum les grands axes.",
     "Siena se visite en fin de voyage (train direct depuis Chiusi, environ 1h30) ou le matin, avant de prendre le train pour Castellina Scalo (environ 15 min).",
     "Vérifiez sur Trenitalia que votre train s’arrête à Castellina in Chianti-Monteriggioni et qu’il a des places vélo."
    ]
   },
   {
    "id": "scalo-monteriggioni",
    "profile": "safety",
    "label": "Équilibré + Monteriggioni",
    "short": "Détour · village fortifié",
    "t": "Castellina Scalo → Gaiole in Chianti",
    "path": [
     "scalo",
     "monteriggioni",
     "castellina",
     "radda",
     "gaiole"
    ],
    "stops": [
     [
      "scalo",
      "descente du train depuis Florence"
     ],
     [
      "monteriggioni",
      "village entièrement fortifié, café sur la place"
     ],
     [
      "castellina",
      "pause déjeuner"
     ],
     [
      "radda",
      "bourg fortifié"
     ],
     [
      "gaiole",
      "berceau de l’Eroica, nuit"
     ]
    ],
    "tips": [
     "Monteriggioni est tout près de la gare : le détour se fait en début de journée, jambes fraîches.",
     "Vérifiez sur Trenitalia que votre train s’arrête à Castellina in Chianti-Monteriggioni et qu’il a des places vélo."
    ]
   },
   {
    "id": "scalo-volpaia",
    "profile": "safety",
    "label": "Équilibré + Volpaia",
    "short": "Détour · hameau perché",
    "t": "Castellina Scalo → Gaiole in Chianti",
    "path": [
     "scalo",
     "castellina",
     "volpaia",
     "radda",
     "gaiole"
    ],
    "stops": [
     [
      "scalo",
      "descente du train depuis Florence"
     ],
     [
      "castellina",
      "pause déjeuner"
     ],
     [
      "volpaia",
      "hameau fortifié au-dessus de Radda"
     ],
     [
      "radda",
      "bourg fortifié"
     ],
     [
      "gaiole",
      "berceau de l’Eroica, nuit"
     ]
    ],
    "tips": [
     "Volpaia est perchée au-dessus de Radda : le détour ajoute du D+, à garder si les jambes sont bonnes."
    ]
   },
   {
    "id": "scalo-route",
    "profile": "trekking",
    "label": "Gare de Castellina, par la route",
    "short": "Le moins de D+, mais du trafic",
    "t": "Castellina Scalo → Gaiole in Chianti",
    "path": [
     "scalo",
     "castellina",
     "radda",
     "gaiole"
    ],
    "stops": [
     [
      "scalo",
      "descente du train depuis Florence (ligne Florence–Siena)"
     ],
     [
      "castellina",
      "tunnel médiéval, pause déjeuner"
     ],
     [
      "radda",
      "bourg fortifié"
     ],
     [
      "gaiole",
      "berceau de l’Eroica, nuit"
     ]
    ],
    "tips": [
     "Le moins de dénivelé : de l’asphalte aux pentes régulières. Mais l’essentiel du parcours suit des routes principales, dont la Chiantigiana, fréquentée le dimanche par les voitures et les motos.",
     "Si vous choisissez cette option, partez tôt et portez des vêtements visibles.",
     "Siena se visite en fin de voyage (train direct depuis Chiusi, environ 1h30) ou le matin, avant de prendre le train pour Castellina Scalo (environ 15 min).",
     "Vérifiez sur Trenitalia que votre train s’arrête à Castellina in Chianti-Monteriggioni et qu’il a des places vélo."
    ]
   },
   {
    "id": "scalo-gravel",
    "profile": "gravel",
    "label": "Gare de Castellina, en gravel",
    "short": "Compromis",
    "t": "Castellina Scalo → Gaiole in Chianti",
    "path": [
     "scalo",
     "castellina",
     "radda",
     "gaiole"
    ],
    "stops": [
     [
      "scalo",
      "descente du train depuis Florence"
     ],
     [
      "castellina",
      "tunnel médiéval, pause déjeuner"
     ],
     [
      "radda",
      "bourg fortifié"
     ],
     [
      "gaiole",
      "berceau de l’Eroica, nuit"
     ]
    ],
    "tips": [
     "Dix kilomètres de moins que depuis Siena, mais les chemins blancs du Chianti enchaînent les bosses : le D+ reste élevé.",
     "Siena se visite en fin de voyage ou le matin, avant le train pour Castellina Scalo."
    ]
   },
   {
    "id": "badesse-gravel",
    "profile": "gravel",
    "label": "Gare de Badesse, en gravel",
    "short": "Moins de km",
    "t": "Badesse → Gaiole in Chianti",
    "path": [
     "badesse",
     "castellina",
     "radda",
     "gaiole"
    ],
    "stops": [
     [
      "badesse",
      "petite gare entre Siena et Castellina Scalo"
     ],
     [
      "castellina",
      "tunnel médiéval, pause déjeuner"
     ],
     [
      "radda",
      "bourg fortifié"
     ],
     [
      "gaiole",
      "berceau de l’Eroica, nuit"
     ]
    ],
    "tips": [
     "Peu de trains s’arrêtent à Badesse : vérifiez les horaires avant de choisir cette option."
    ]
   },
   {
    "id": "siena-gravel",
    "profile": "gravel",
    "label": "Depuis Siena, en gravel",
    "short": "Plan d’origine",
    "t": "Siena → Gaiole in Chianti",
    "path": [
     "siena",
     "castellina",
     "radda",
     "gaiole"
    ],
    "stops": [
     [
      "siena",
      "arrivée en train depuis Florence, départ après le Campo"
     ],
     [
      "castellina",
      "tunnel médiéval, pause déjeuner"
     ],
     [
      "radda",
      "bourg fortifié"
     ],
     [
      "gaiole",
      "berceau de l’Eroica, nuit"
     ]
    ],
    "tips": [
     "La journée la plus dense : tout le Chianti d’un coup. Vous l’attaquez avec des jambes fraîches, mais gardez un rythme tranquille sur les côtes."
    ]
   }
  ],
  "cover": "castellina"
 },
 "d2": {
  "region": "Chianti → Crete Senesi",
  "variants": [
   {
    "id": "base",
    "profile": "gravel",
    "label": "Itinéraire de base",
    "short": "Par Brolio",
    "t": "Gaiole → Asciano",
    "path": [
     "gaiole",
     "brolio",
     "castel",
     "asciano"
    ],
    "stops": [
     [
      "brolio",
      "château et jardins des Ricasoli"
     ],
     [
      "castel",
      "routes blanches de l’Eroica, panneaux marron"
     ],
     [
      "asciano",
      "entrée dans les Crete Senesi, nuit"
     ]
    ],
    "tips": [
     "Gardez la dégustation de Brolio pour une pause, jamais juste avant une descente sur gravier."
    ]
   },
   {
    "id": "sangusme",
    "profile": "gravel",
    "label": "Détour par San Gusmè",
    "short": "Détour · bourg médiéval",
    "t": "Gaiole → Asciano",
    "path": [
     "gaiole",
     "brolio",
     "sangusme",
     "castel",
     "asciano"
    ],
    "stops": [
     [
      "brolio",
      "château et jardins des Ricasoli"
     ],
     [
      "sangusme",
      "minuscule bourg médiéval sur les routes de l’Eroica"
     ],
     [
      "castel",
      "pause déjeuner"
     ],
     [
      "asciano",
      "entrée dans les Crete Senesi, nuit"
     ]
    ],
    "tips": [
     "San Gusmè est sur le parcours de l’Eroica : un village très calme, idéal pour une pause café."
    ]
   }
  ],
  "cover": "brolio"
 },
 "d3": {
  "region": "Crete Senesi",
  "variants": [
   {
    "id": "base",
    "profile": "gravel",
    "label": "Itinéraire de base",
    "short": "Par Monte Oliveto",
    "t": "Asciano → Montalcino",
    "path": [
     "asciano",
     "oliveto",
     "buon",
     "montalcino"
    ],
    "stops": [
     [
      "oliveto",
      "fresques du cloître"
     ],
     [
      "buon",
      "pause café dans le bourg fortifié"
     ],
     [
      "montalcino",
      "forteresse et Brunello, deux nuits"
     ]
    ],
    "tips": [
     "L’abbaye ferme souvent à l’heure du déjeuner : vérifiez les horaires.",
     "Montée finale d’environ 10 km vers Montalcino : prenez-la à votre rythme."
    ]
   },
   {
    "id": "chiusure",
    "profile": "gravel",
    "label": "Détour par Chiusure",
    "short": "Détour · belvédère sur les Crete",
    "t": "Asciano → Montalcino",
    "path": [
     "asciano",
     "chiusure",
     "oliveto",
     "buon",
     "montalcino"
    ],
    "stops": [
     [
      "chiusure",
      "belvédère sur les Crete Senesi"
     ],
     [
      "oliveto",
      "fresques du cloître"
     ],
     [
      "buon",
      "pause café dans le bourg fortifié"
     ],
     [
      "montalcino",
      "forteresse et Brunello, deux nuits"
     ]
    ],
    "tips": [
     "Chiusure domine l’abbaye de Monte Oliveto : un des plus beaux points de vue sur les collines d’argile.",
     "L’abbaye ferme souvent à l’heure du déjeuner : vérifiez les horaires."
    ]
   }
  ],
  "cover": "oliveto"
 },
 "rest_montalcino": {
  "rest": true,
  "region": "Montalcino",
  "variants": [
   {
    "id": "vin",
    "profile": "gravel",
    "label": "Montalcino, caves et remparts",
    "short": "Repos · vin et village",
    "t": "Repos à Montalcino",
    "path": [
     "montalcino",
     "angelo",
     "montalcino"
    ],
    "stops": [
     [
      "montalcino",
      "forteresse, musée, caves"
     ],
     [
      "angelo",
      "boucle facultative à vélo vers ce village perché dans les vignes"
     ]
    ],
    "tips": [
     "Montalcino est perchée à plus de 500 m : toute sortie à vélo finit par une montée. Une journée à pied est aussi une très bonne option.",
     "Jour férié (Festa della Repubblica) : réservez restaurant et dégustation à l’avance."
    ]
   },
   {
    "id": "rando",
    "profile": "hiking-mountain",
    "walk": true,
    "label": "Randonnée vers Sant’Antimo",
    "short": "Repos · à pied",
    "t": "Montalcino → Sant’Antimo à pied",
    "path": [
     "montalcino",
     "antimo"
    ],
    "stops": [
     [
      "montalcino",
      "départ à pied par les sentiers"
     ],
     [
      "antimo",
      "abbaye romane, retour en bus ou en taxi"
     ]
    ],
    "tips": [
     "Une journée sans vélo mais active : surtout de la descente au milieu des vignes et des oliviers.",
     "Retour en bus local ou en taxi depuis Castelnuovo dell’Abate (à réserver).",
     "L’étape du lendemain repasse par Sant’Antimo : gardez la visite de l’abbaye pour l’un des deux jours."
    ]
   }
  ],
  "cover": "montalcino"
 },
 "d5": {
  "region": "Val d’Orcia",
  "variants": [
   {
    "id": "base",
    "profile": "gravel",
    "label": "Itinéraire de base",
    "short": "Par Sant’Antimo",
    "t": "Montalcino → Bagno Vignoni",
    "path": [
     "montalcino",
     "antimo",
     "vignoni"
    ],
    "stops": [
     [
      "antimo",
      "abbaye romane au milieu des oliviers"
     ],
     [
      "vignoni",
      "bassin thermal sur la place, thermes à côté, nuit"
     ]
    ],
    "tips": [
     "Remplissez les gourdes à Montalcino : peu de points d’eau avant Bagno Vignoni. Fin d’après-midi aux thermes pour récupérer."
    ]
   },
   {
    "id": "rocca",
    "profile": "gravel",
    "label": "Détour par la Rocca d’Orcia",
    "short": "Détour · forteresse et panorama",
    "t": "Montalcino → Bagno Vignoni",
    "path": [
     "montalcino",
     "antimo",
     "castiglione",
     "vignoni"
    ],
    "stops": [
     [
      "antimo",
      "abbaye romane au milieu des oliviers"
     ],
     [
      "castiglione",
      "forteresse perchée, vue sur tout le Val d’Orcia"
     ],
     [
      "vignoni",
      "bassin thermal sur la place, thermes à côté, nuit"
     ]
    ],
    "tips": [
     "C’est la journée la plus courte : le bon jour pour ce détour, même si la montée vers la Rocca est raide.",
     "Remplissez les gourdes à Montalcino."
    ]
   }
  ],
  "cover": "antimo"
 },
 "d6": {
  "region": "Val d’Orcia",
  "variants": [
   {
    "id": "base",
    "profile": "gravel",
    "label": "Itinéraire de base",
    "short": "Par Vitaleta et Pienza",
    "t": "Bagno Vignoni → Montepulciano",
    "path": [
     "vignoni",
     "quirico",
     "vitaleta",
     "pienza",
     "montepulciano"
    ],
    "stops": [
     [
      "quirico",
      "jardins Horti Leonini"
     ],
     [
      "vitaleta",
      "chapelle et cyprès, l’arrêt photo du voyage"
     ],
     [
      "pienza",
      "ville Renaissance, pecorino"
     ],
     [
      "montepulciano",
      "Vino Nobile, nuit"
     ]
    ],
    "tips": [
     "Passez tôt à Vitaleta pour la lumière et le calme.",
     "La montée dans Montepulciano est raide sur la fin : n’hésitez pas à pousser le vélo dans les rues pavées."
    ]
   },
   {
    "id": "belvedere",
    "profile": "gravel",
    "label": "Avec le Podere Belvedere",
    "short": "Détour · la vue iconique",
    "t": "Bagno Vignoni → Montepulciano",
    "path": [
     "vignoni",
     "quirico",
     "belvedere",
     "vitaleta",
     "pienza",
     "montepulciano"
    ],
    "stops": [
     [
      "quirico",
      "jardins Horti Leonini"
     ],
     [
      "belvedere",
      "la ferme et ses cyprès, la vue la plus photographiée du Val d’Orcia"
     ],
     [
      "vitaleta",
      "chapelle et cyprès"
     ],
     [
      "pienza",
      "ville Renaissance, pecorino"
     ],
     [
      "montepulciano",
      "Vino Nobile, nuit"
     ]
    ],
    "tips": [
     "Belvedere et Vitaleta sont à quelques kilomètres l’un de l’autre : deux arrêts photo dans la même matinée.",
     "Propriétés privées : photos depuis la route ou le chemin."
    ]
   },
   {
    "id": "complet",
    "profile": "gravel",
    "label": "Belvedere + Monticchiello",
    "short": "Détours · les cyprès en lacets",
    "t": "Bagno Vignoni → Montepulciano",
    "path": [
     "vignoni",
     "quirico",
     "belvedere",
     "vitaleta",
     "pienza",
     "monticchiello",
     "montepulciano"
    ],
    "stops": [
     [
      "quirico",
      "jardins Horti Leonini"
     ],
     [
      "belvedere",
      "la vue iconique du Val d’Orcia"
     ],
     [
      "vitaleta",
      "chapelle et cyprès"
     ],
     [
      "pienza",
      "ville Renaissance, pecorino"
     ],
     [
      "monticchiello",
      "village fortifié et route en lacets bordée de cyprès"
     ],
     [
      "montepulciano",
      "Vino Nobile, nuit"
     ]
    ],
    "tips": [
     "La journée photo du voyage : partez tôt pour profiter de la lumière.",
     "La montée dans Montepulciano est raide sur la fin : n’hésitez pas à pousser le vélo dans les rues pavées."
    ]
   }
  ],
  "cover": "vitaleta"
 },
 "d7": {
  "region": "Valdichiana",
  "cover": "montepulciano",
  "variants": [
   {
    "id": "base",
    "profile": "gravel",
    "label": "Itinéraire de base",
    "short": "Par la Valdichiana",
    "t": "Montepulciano → Chiusi",
    "path": [
     "montepulciano",
     "chiusi"
    ],
    "stops": [
     [
      "montepulciano",
      "descente vers la Valdichiana"
     ],
     [
      "chiusi",
      "gare, train retour vers Florence ou Siena"
     ]
    ],
    "tips": [
     "Étape courte pour arriver à la gare en fin de matinée. Vérifiez l’horaire du train de retour la veille."
    ]
   }
  ]
 },
 "rest_vignoni": {
  "rest": true,
  "region": "Val d’Orcia",
  "cover": "vignoni",
  "variants": [
   {
    "id": "pied",
    "profile": "hiking-mountain",
    "walk": true,
    "label": "Thermes et Rocca d’Orcia à pied",
    "short": "Repos · thermes",
    "t": "Repos à Bagno Vignoni",
    "path": [
     "vignoni",
     "castiglione",
     "vignoni"
    ],
    "stops": [
     [
      "vignoni",
      "thermes et Parco dei Mulini"
     ],
     [
      "castiglione",
      "montée à pied vers la Rocca d’Orcia"
     ]
    ],
    "tips": [
     "Une vraie journée de récupération : piscines thermales le matin, balade vers la Rocca l’après-midi.",
     "Option : taxi vers les vasques blanches de Bagni San Filippo, à environ 15 km."
    ]
   },
   {
    "id": "velo",
    "profile": "gravel",
    "label": "Petite boucle vélo vers la Rocca d’Orcia",
    "short": "Repos · vélo léger",
    "t": "Repos à Bagno Vignoni",
    "path": [
     "vignoni",
     "castiglione",
     "vignoni"
    ],
    "stops": [
     [
      "vignoni",
      "thermes et Parco dei Mulini"
     ],
     [
      "castiglione",
      "forteresse perchée, vue sur le Val d’Orcia"
     ]
    ],
    "tips": [
     "Une boucle courte mais qui grimpe : faites-la le matin, gardez l’après-midi pour les thermes."
    ]
   }
  ]
 },
 "d6pienza": {
  "region": "Val d’Orcia",
  "cover": "belvedere",
  "variants": [
   {
    "id": "base",
    "profile": "gravel",
    "label": "Par Vitaleta",
    "short": "Étape courte",
    "t": "Bagno Vignoni → Pienza",
    "path": [
     "vignoni",
     "quirico",
     "vitaleta",
     "pienza"
    ],
    "stops": [
     [
      "quirico",
      "jardins Horti Leonini"
     ],
     [
      "vitaleta",
      "chapelle et cyprès, l’arrêt photo du voyage"
     ],
     [
      "pienza",
      "ville Renaissance, deux nuits"
     ]
    ],
    "tips": [
     "Étape courte : arrivée à Pienza en début d’après-midi, le soleil couchant sur le Val d’Orcia depuis les remparts."
    ]
   },
   {
    "id": "belvedere",
    "profile": "gravel",
    "label": "Avec le Podere Belvedere",
    "short": "Détour · la vue iconique",
    "t": "Bagno Vignoni → Pienza",
    "path": [
     "vignoni",
     "quirico",
     "belvedere",
     "vitaleta",
     "pienza"
    ],
    "stops": [
     [
      "quirico",
      "jardins Horti Leonini"
     ],
     [
      "belvedere",
      "la vue la plus photographiée du Val d’Orcia"
     ],
     [
      "vitaleta",
      "chapelle et cyprès"
     ],
     [
      "pienza",
      "ville Renaissance, deux nuits"
     ]
    ],
    "tips": [
     "Propriétés privées : photos depuis la route ou le chemin."
    ]
   }
  ]
 },
 "rest_pienza": {
  "rest": true,
  "region": "Val d’Orcia",
  "cover": "monticchiello",
  "variants": [
   {
    "id": "velo",
    "profile": "gravel",
    "label": "Boucle vélo vers Monticchiello",
    "short": "Repos · cyprès en lacets",
    "t": "Journée à Pienza",
    "path": [
     "pienza",
     "monticchiello",
     "pienza"
    ],
    "stops": [
     [
      "pienza",
      "Piazza Pio II, remparts, pecorino"
     ],
     [
      "monticchiello",
      "village fortifié et route en lacets bordée de cyprès"
     ]
    ],
    "tips": [
     "Boucle courte le matin, après-midi tranquille à Pienza.",
     "La route en lacets se photographie depuis le bas, au pied du village."
    ]
   },
   {
    "id": "pied",
    "profile": "hiking-mountain",
    "walk": true,
    "label": "À pied vers Monticchiello",
    "short": "Repos · sans vélo",
    "t": "Journée à Pienza",
    "path": [
     "pienza",
     "monticchiello"
    ],
    "stops": [
     [
      "pienza",
      "départ à pied"
     ],
     [
      "monticchiello",
      "déjeuner au village, retour en taxi ou à pied"
     ]
    ],
    "tips": [
     "Une belle marche sur les chemins blancs ; prévoyez de l’eau et un chapeau."
    ]
   }
  ]
 },
 "d7pienza": {
  "region": "Val d’Orcia → Valdichiana",
  "cover": "montepulciano",
  "variants": [
   {
    "id": "base",
    "profile": "gravel",
    "label": "Par Montepulciano",
    "short": "Dernière étape",
    "t": "Pienza → Chiusi",
    "path": [
     "pienza",
     "montepulciano",
     "chiusi"
    ],
    "stops": [
     [
      "montepulciano",
      "Piazza Grande, caves, pause déjeuner"
     ],
     [
      "chiusi",
      "gare, train retour vers Florence ou Siena"
     ]
    ],
    "tips": [
     "Partez tôt : la montée vers Montepulciano se fait mieux au frais.",
     "Vérifiez l’horaire du train de retour la veille."
    ]
   }
  ]
 },
 "d1radda": {
  "region": "Chianti",
  "cover": "radda",
  "variants": [
   {
    "id": "safety",
    "profile": "safety",
    "label": "Gare de Castellina, routes calmes",
    "short": "Première étape courte",
    "t": "Castellina Scalo → Radda in Chianti",
    "path": [
     "scalo",
     "castellina",
     "radda"
    ],
    "stops": [
     [
      "scalo",
      "descente du train depuis Florence"
     ],
     [
      "castellina",
      "tunnel médiéval, pause déjeuner"
     ],
     [
      "radda",
      "bourg fortifié, nuit"
     ]
    ],
    "tips": [
     "Une mise en jambes douce le jour de l’arrivée.",
     "Vérifiez sur Trenitalia que votre train s’arrête à Castellina in Chianti-Monteriggioni et qu’il a des places vélo."
    ]
   },
   {
    "id": "monteriggioni",
    "profile": "safety",
    "label": "Avec Monteriggioni",
    "short": "Détour · village fortifié",
    "t": "Castellina Scalo → Radda in Chianti",
    "path": [
     "scalo",
     "monteriggioni",
     "castellina",
     "radda"
    ],
    "stops": [
     [
      "scalo",
      "descente du train"
     ],
     [
      "monteriggioni",
      "village entièrement fortifié"
     ],
     [
      "castellina",
      "pause déjeuner"
     ],
     [
      "radda",
      "bourg fortifié, nuit"
     ]
    ],
    "tips": [
     "Monteriggioni est tout près de la gare : à faire en début de journée.",
     "Vérifiez sur Trenitalia que votre train s’arrête à Castellina in Chianti-Monteriggioni et qu’il a des places vélo."
    ]
   },
   {
    "id": "volpaia",
    "profile": "safety",
    "label": "Avec Volpaia",
    "short": "Détour · hameau perché",
    "t": "Castellina Scalo → Radda in Chianti",
    "path": [
     "scalo",
     "castellina",
     "volpaia",
     "radda"
    ],
    "stops": [
     [
      "scalo",
      "descente du train"
     ],
     [
      "castellina",
      "pause déjeuner"
     ],
     [
      "volpaia",
      "hameau fortifié au-dessus de Radda"
     ],
     [
      "radda",
      "bourg fortifié, nuit"
     ]
    ],
    "tips": [
     "Volpaia ajoute une belle montée : à garder si les jambes sont bonnes."
    ]
   }
  ]
 },
 "d2radda": {
  "region": "Chianti",
  "cover": "gaiole",
  "variants": [
   {
    "id": "base",
    "profile": "gravel",
    "label": "Par Gaiole et Brolio",
    "short": "Routes de l’Eroica",
    "t": "Radda → Castelnuovo Berardenga",
    "path": [
     "radda",
     "gaiole",
     "brolio",
     "castel"
    ],
    "stops": [
     [
      "gaiole",
      "berceau de l’Eroica, café"
     ],
     [
      "brolio",
      "château et jardins des Ricasoli"
     ],
     [
      "castel",
      "bourg tranquille, nuit"
     ]
    ],
    "tips": [
     "Gardez la dégustation de Brolio pour une pause, jamais juste avant une descente sur gravier."
    ]
   },
   {
    "id": "sangusme",
    "profile": "gravel",
    "label": "Avec San Gusmè",
    "short": "Détour · bourg médiéval",
    "t": "Radda → Castelnuovo Berardenga",
    "path": [
     "radda",
     "gaiole",
     "brolio",
     "sangusme",
     "castel"
    ],
    "stops": [
     [
      "gaiole",
      "berceau de l’Eroica, café"
     ],
     [
      "brolio",
      "château et jardins des Ricasoli"
     ],
     [
      "sangusme",
      "minuscule bourg médiéval"
     ],
     [
      "castel",
      "nuit"
     ]
    ],
    "tips": [
     "San Gusmè est sur le parcours de l’Eroica : très calme."
    ]
   }
  ]
 },
 "d3castel": {
  "region": "Crete Senesi",
  "cover": "asciano",
  "variants": [
   {
    "id": "base",
    "profile": "gravel",
    "label": "Par Asciano et Monte Oliveto",
    "short": "Cœur des Crete",
    "t": "Castelnuovo Berardenga → Buonconvento",
    "path": [
     "castel",
     "asciano",
     "oliveto",
     "buon"
    ],
    "stops": [
     [
      "asciano",
      "entrée dans les Crete Senesi, café"
     ],
     [
      "oliveto",
      "fresques du cloître"
     ],
     [
      "buon",
      "bourg fortifié, nuit"
     ]
    ],
    "tips": [
     "L’abbaye ferme souvent à l’heure du déjeuner : vérifiez les horaires."
    ]
   },
   {
    "id": "chiusure",
    "profile": "gravel",
    "label": "Avec Chiusure",
    "short": "Détour · belvédère",
    "t": "Castelnuovo Berardenga → Buonconvento",
    "path": [
     "castel",
     "asciano",
     "chiusure",
     "oliveto",
     "buon"
    ],
    "stops": [
     [
      "asciano",
      "café"
     ],
     [
      "chiusure",
      "belvédère sur les Crete Senesi"
     ],
     [
      "oliveto",
      "fresques du cloître"
     ],
     [
      "buon",
      "bourg fortifié, nuit"
     ]
    ],
    "tips": [
     "Chiusure domine l’abbaye : un des plus beaux points de vue sur les collines d’argile."
    ]
   }
  ]
 },
 "d4buon": {
  "region": "Montalcino",
  "cover": "montalcino",
  "variants": [
   {
    "id": "base",
    "profile": "gravel",
    "label": "Direct",
    "short": "Étape courte",
    "t": "Buonconvento → Montalcino",
    "path": [
     "buon",
     "montalcino"
    ],
    "stops": [
     [
      "montalcino",
      "forteresse et Brunello, nuit"
     ]
    ],
    "tips": [
     "Étape courte mais qui monte : arrivée tôt pour profiter de Montalcino et d’une dégustation l’après-midi."
    ]
   },
   {
    "id": "angelo",
    "profile": "gravel",
    "label": "Par Sant’Angelo in Colle",
    "short": "Détour · vignes du Brunello",
    "t": "Buonconvento → Montalcino",
    "path": [
     "buon",
     "angelo",
     "montalcino"
    ],
    "stops": [
     [
      "angelo",
      "village perché dans les vignes"
     ],
     [
      "montalcino",
      "forteresse et Brunello, nuit"
     ]
    ],
    "tips": [
     "Un grand tour dans les vignes du Brunello avant de monter à Montalcino."
    ]
   }
  ]
 },
 "d2gusme": {
  "region": "Chianti",
  "cover": "sangusme",
  "variants": [
   {
    "id": "base",
    "profile": "gravel",
    "label": "Itinéraire de base",
    "short": "Villages perchés",
    "t": "Radda → San Gusmè",
    "path": [
     "radda",
     "gaiole",
     "brolio",
     "sangusme"
    ],
    "stops": [
     [
      "gaiole",
      "berceau de l’Eroica, café"
     ],
     [
      "brolio",
      "château et jardins des Ricasoli"
     ],
     [
      "sangusme",
      "minuscule bourg médiéval, nuit"
     ]
    ],
    "tips": [
     "Dormez dans un des rares B&B ou agriturismi du village : réservez tôt.",
     "Gardez la dégustation de Brolio pour une pause, jamais juste avant une descente sur gravier."
    ]
   }
  ]
 },
 "d3chiusure": {
  "region": "Crete Senesi",
  "cover": "chiusure",
  "variants": [
   {
    "id": "base",
    "profile": "gravel",
    "label": "Itinéraire de base",
    "short": "Villages perchés",
    "t": "San Gusmè → Chiusure",
    "path": [
     "sangusme",
     "castel",
     "asciano",
     "chiusure"
    ],
    "stops": [
     [
      "castel",
      "pause café au bourg"
     ],
     [
      "asciano",
      "entrée dans les Crete Senesi, déjeuner"
     ],
     [
      "chiusure",
      "belvédère sur les Crete, nuit"
     ]
    ],
    "tips": [
     "Le coucher du soleil sur les collines d’argile depuis Chiusure est l’un des moments du voyage.",
     "Hébergements rares à Chiusure même : regardez aussi les agriturismi alentour."
    ]
   }
  ]
 },
 "d4oliveto": {
  "region": "Crete Senesi → Montalcino",
  "cover": "oliveto",
  "variants": [
   {
    "id": "base",
    "profile": "gravel",
    "label": "Itinéraire de base",
    "short": "Villages perchés",
    "t": "Chiusure → Montalcino",
    "path": [
     "chiusure",
     "oliveto",
     "buon",
     "montalcino"
    ],
    "stops": [
     [
      "oliveto",
      "fresques du cloître, à visiter dès l’ouverture"
     ],
     [
      "buon",
      "déjeuner dans le bourg fortifié"
     ],
     [
      "montalcino",
      "forteresse et Brunello, nuit"
     ]
    ],
    "tips": [
     "Monte Oliveto est juste en dessous de Chiusure : visite le matin, avant la fermeture de midi.",
     "Montée finale d’environ 10 km vers Montalcino : prenez-la à votre rythme."
    ]
   }
  ]
 },
 "d5rocca": {
  "region": "Val d’Orcia",
  "cover": "castiglione",
  "variants": [
   {
    "id": "base",
    "profile": "gravel",
    "label": "Itinéraire de base",
    "short": "Villages perchés",
    "t": "Montalcino → Rocca d’Orcia",
    "path": [
     "montalcino",
     "antimo",
     "castiglione"
    ],
    "stops": [
     [
      "antimo",
      "abbaye romane au milieu des oliviers"
     ],
     [
      "castiglione",
      "village perché au pied de la forteresse, nuit"
     ]
    ],
    "tips": [
     "La dernière montée vers la Rocca est raide : poussez sans honte dans les derniers lacets.",
     "Bagno Vignoni est juste en dessous : descente aux thermes possible le soir ou le lendemain matin."
    ]
   }
  ]
 },
 "d6monti": {
  "region": "Val d’Orcia",
  "cover": "belvedere",
  "variants": [
   {
    "id": "base",
    "profile": "gravel",
    "label": "Itinéraire de base",
    "short": "Villages perchés",
    "t": "Rocca d’Orcia → Monticchiello",
    "path": [
     "castiglione",
     "vignoni",
     "quirico",
     "belvedere",
     "vitaleta",
     "pienza",
     "monticchiello"
    ],
    "stops": [
     [
      "vignoni",
      "bassin thermal, café"
     ],
     [
      "quirico",
      "jardins Horti Leonini"
     ],
     [
      "belvedere",
      "la vue iconique du Val d’Orcia"
     ],
     [
      "vitaleta",
      "chapelle et cyprès"
     ],
     [
      "pienza",
      "déjeuner, pecorino"
     ],
     [
      "monticchiello",
      "village fortifié au-dessus des cyprès en lacets, nuit"
     ]
    ],
    "tips": [
     "La plus belle journée du voyage : partez tôt pour la lumière, prenez votre temps.",
     "Propriétés privées à Belvedere et Vitaleta : photos depuis la route ou le chemin."
    ]
   }
  ]
 },
 "d7monti": {
  "region": "Valdichiana",
  "cover": "montepulciano",
  "variants": [
   {
    "id": "base",
    "profile": "gravel",
    "label": "Itinéraire de base",
    "short": "Villages perchés",
    "t": "Monticchiello → Chiusi",
    "path": [
     "monticchiello",
     "montepulciano",
     "chiusi"
    ],
    "stops": [
     [
      "montepulciano",
      "Piazza Grande, caves, déjeuner"
     ],
     [
      "chiusi",
      "gare, train retour vers Florence ou Siena"
     ]
    ],
    "tips": [
     "Vérifiez l’horaire du train de retour la veille."
    ]
   }
  ]
 },
 "s1": {
  "region": "Crete Senesi",
  "cover": "leonina",
  "variants": [
   {
    "id": "base",
    "profile": "gravel",
    "label": "Par la Via Lauretana",
    "short": "Les crêtes d’argile",
    "t": "Siena → Asciano",
    "path": [
     "siena",
     "leonina",
     "asciano"
    ],
    "stops": [
     [
      "siena",
      "arrivée en train depuis Florence, café sur le Campo"
     ],
     [
      "leonina",
      "le Site Transitoire et les crêtes de la Lauretana"
     ],
     [
      "asciano",
      "bourg siennois, nuit"
     ]
    ],
    "tips": [
     "La Lauretana est une route goudronnée mais peu fréquentée, avec les plus beaux paysages des Crete.",
     "Train direct Florence → Siena, environ 1h30."
    ]
   }
  ]
 },
 "s2": {
  "region": "Crete Senesi",
  "cover": "chiusure",
  "variants": [
   {
    "id": "base",
    "profile": "gravel",
    "label": "Par Chiusure et San Giovanni d’Asso",
    "short": "Villages secrets",
    "t": "Asciano → Montisi",
    "path": [
     "asciano",
     "chiusure",
     "sangiovanni",
     "montisi"
    ],
    "stops": [
     [
      "chiusure",
      "belvédère sur les Crete"
     ],
     [
      "sangiovanni",
      "château et truffe blanche, déjeuner"
     ],
     [
      "montisi",
      "village perché hors des circuits, nuit"
     ]
    ],
    "tips": [
     "Les villages les plus calmes du voyage.",
     "Monte Oliveto est à 2 km de Chiusure : détour possible pour le cloître."
    ]
   },
   {
    "id": "oliveto",
    "profile": "gravel",
    "label": "Avec Monte Oliveto Maggiore",
    "short": "Détour · abbaye",
    "t": "Asciano → Montisi",
    "path": [
     "asciano",
     "chiusure",
     "oliveto",
     "sangiovanni",
     "montisi"
    ],
    "stops": [
     [
      "chiusure",
      "belvédère sur les Crete"
     ],
     [
      "oliveto",
      "fresques du cloître"
     ],
     [
      "sangiovanni",
      "château et truffe blanche"
     ],
     [
      "montisi",
      "nuit"
     ]
    ],
    "tips": [
     "L’abbaye ferme souvent à l’heure du déjeuner : vérifiez les horaires."
    ]
   }
  ]
 },
 "s3": {
  "region": "Val d’Orcia",
  "cover": "pienza",
  "variants": [
   {
    "id": "base",
    "profile": "gravel",
    "label": "Par Castelmuzio",
    "short": "Étape courte",
    "t": "Montisi → Pienza",
    "path": [
     "montisi",
     "castelmuzio",
     "pienza"
    ],
    "stops": [
     [
      "castelmuzio",
      "bourg fortifié sur une crête"
     ],
     [
      "pienza",
      "ville Renaissance, nuit"
     ]
    ],
    "tips": [
     "Étape courte : après-midi à Pienza, coucher de soleil depuis les remparts."
    ]
   },
   {
    "id": "monticchiello",
    "profile": "gravel",
    "label": "Avec Monticchiello",
    "short": "Détour · cyprès en lacets",
    "t": "Montisi → Pienza",
    "path": [
     "montisi",
     "castelmuzio",
     "monticchiello",
     "pienza"
    ],
    "stops": [
     [
      "castelmuzio",
      "bourg fortifié sur une crête"
     ],
     [
      "monticchiello",
      "village fortifié et route en lacets bordée de cyprès"
     ],
     [
      "pienza",
      "nuit"
     ]
    ],
    "tips": [
     "La route en lacets se photographie depuis le bas, au pied du village."
    ]
   }
  ]
 },
 "s4": {
  "region": "Val d’Orcia",
  "cover": "belvedere",
  "variants": [
   {
    "id": "base",
    "profile": "gravel",
    "label": "Par Vitaleta et Belvedere",
    "short": "Les cyprès iconiques",
    "t": "Pienza → Bagno Vignoni",
    "path": [
     "pienza",
     "vitaleta",
     "belvedere",
     "quirico",
     "vignoni"
    ],
    "stops": [
     [
      "vitaleta",
      "chapelle et cyprès"
     ],
     [
      "belvedere",
      "la vue la plus photographiée du Val d’Orcia"
     ],
     [
      "quirico",
      "jardins Horti Leonini, déjeuner"
     ],
     [
      "vignoni",
      "thermes, nuit"
     ]
    ],
    "tips": [
     "Passez tôt à Vitaleta pour la lumière.",
     "Fin d’après-midi aux thermes pour récupérer."
    ]
   }
  ]
 },
 "s7": {
  "region": "Val d’Arbia → Siena",
  "cover": "siena",
  "variants": [
   {
    "id": "base",
    "profile": "gravel",
    "label": "Par la Via Francigena",
    "short": "Retour à vélo",
    "t": "Montalcino → Siena",
    "path": [
     "montalcino",
     "buon",
     "monteroni",
     "siena"
    ],
    "stops": [
     [
      "buon",
      "café dans le bourg fortifié"
     ],
     [
      "monteroni",
      "moulin fortifié sur l’Arbia"
     ],
     [
      "siena",
      "le Campo, train retour vers Florence"
     ]
    ],
    "tips": [
     "Longue descente puis vallée de l’Arbia : la dernière étape est plus roulante.",
     "Prévoyez du temps à Siena avant le train du retour, ou une nuit sur place."
    ]
   },
   {
    "id": "train",
    "profile": "gravel",
    "label": "Jusqu’à Buonconvento, puis train",
    "short": "Version courte",
    "t": "Montalcino → Buonconvento",
    "path": [
     "montalcino",
     "buon"
    ],
    "stops": [
     [
      "buon",
      "gare : train vers Siena (environ 30 min)"
     ]
    ],
    "tips": [
     "Une matinée tranquille, puis le train pour avoir l’après-midi à Siena."
    ]
   }
  ]
 },
 "r7": {
  "region": "Valdichiana",
  "cover": "montepulciano",
  "variants": [
   {
    "id": "base",
    "profile": "gravel",
    "label": "Itinéraire de base",
    "short": "Mise en jambes",
    "t": "Chiusi → Montepulciano",
    "path": [
     "chiusi",
     "montepulciano"
    ],
    "stops": [
     [
      "chiusi",
      "arrivée en train depuis Florence"
     ],
     [
      "montepulciano",
      "Piazza Grande, caves, nuit"
     ]
    ],
    "tips": [
     "Train direct Florence → Chiusi-Chianciano Terme, environ 1h30 à 2h.",
     "Une montée régulière pour finir : Montepulciano se mérite."
    ]
   }
  ]
 },
 "r6": {
  "region": "Val d’Orcia",
  "cover": "vitaleta",
  "variants": [
   {
    "id": "base",
    "profile": "gravel",
    "label": "Par Pienza et Vitaleta",
    "short": "Le cœur du Val d’Orcia",
    "t": "Montepulciano → Bagno Vignoni",
    "path": [
     "montepulciano",
     "pienza",
     "vitaleta",
     "quirico",
     "vignoni"
    ],
    "stops": [
     [
      "pienza",
      "ville Renaissance, déjeuner"
     ],
     [
      "vitaleta",
      "chapelle et cyprès"
     ],
     [
      "quirico",
      "jardins Horti Leonini"
     ],
     [
      "vignoni",
      "thermes, nuit"
     ]
    ],
    "tips": [
     "Fin d’après-midi aux thermes pour récupérer."
    ]
   },
   {
    "id": "complet",
    "profile": "gravel",
    "label": "Monticchiello + Belvedere",
    "short": "Détours · cyprès",
    "t": "Montepulciano → Bagno Vignoni",
    "path": [
     "montepulciano",
     "monticchiello",
     "pienza",
     "vitaleta",
     "belvedere",
     "quirico",
     "vignoni"
    ],
    "stops": [
     [
      "monticchiello",
      "village fortifié et cyprès en lacets"
     ],
     [
      "pienza",
      "déjeuner"
     ],
     [
      "vitaleta",
      "chapelle et cyprès"
     ],
     [
      "belvedere",
      "la vue iconique"
     ],
     [
      "quirico",
      "jardins Horti Leonini"
     ],
     [
      "vignoni",
      "thermes, nuit"
     ]
    ],
    "tips": [
     "La journée photo du voyage : prenez votre temps."
    ]
   }
  ]
 },
 "r5": {
  "region": "Val d’Orcia",
  "cover": "antimo",
  "variants": [
   {
    "id": "base",
    "profile": "gravel",
    "label": "Par Sant’Antimo",
    "short": "Abbaye romane",
    "t": "Bagno Vignoni → Montalcino",
    "path": [
     "vignoni",
     "antimo",
     "montalcino"
    ],
    "stops": [
     [
      "antimo",
      "abbaye romane au milieu des oliviers"
     ],
     [
      "montalcino",
      "forteresse et Brunello, deux nuits"
     ]
    ],
    "tips": [
     "La montée finale vers Montalcino est longue : partez tôt."
    ]
   },
   {
    "id": "rocca",
    "profile": "gravel",
    "label": "Avec la Rocca d’Orcia",
    "short": "Détour · forteresse",
    "t": "Bagno Vignoni → Montalcino",
    "path": [
     "vignoni",
     "castiglione",
     "antimo",
     "montalcino"
    ],
    "stops": [
     [
      "castiglione",
      "forteresse perchée, vue sur le Val d’Orcia"
     ],
     [
      "antimo",
      "abbaye romane"
     ],
     [
      "montalcino",
      "deux nuits"
     ]
    ],
    "tips": [
     "Deux belles montées dans la journée : à garder pour les jambes fraîches."
    ]
   }
  ]
 },
 "r3": {
  "region": "Crete Senesi",
  "cover": "oliveto",
  "variants": [
   {
    "id": "base",
    "profile": "gravel",
    "label": "Par Monte Oliveto",
    "short": "Les Crete",
    "t": "Montalcino → Asciano",
    "path": [
     "montalcino",
     "buon",
     "oliveto",
     "asciano"
    ],
    "stops": [
     [
      "buon",
      "café dans le bourg fortifié"
     ],
     [
      "oliveto",
      "fresques du cloître"
     ],
     [
      "asciano",
      "bourg siennois, nuit"
     ]
    ],
    "tips": [
     "L’abbaye ferme souvent à l’heure du déjeuner : vérifiez les horaires."
    ]
   },
   {
    "id": "chiusure",
    "profile": "gravel",
    "label": "Avec Chiusure",
    "short": "Détour · belvédère",
    "t": "Montalcino → Asciano",
    "path": [
     "montalcino",
     "buon",
     "oliveto",
     "chiusure",
     "asciano"
    ],
    "stops": [
     [
      "buon",
      "café"
     ],
     [
      "oliveto",
      "fresques du cloître"
     ],
     [
      "chiusure",
      "belvédère sur les Crete"
     ],
     [
      "asciano",
      "nuit"
     ]
    ],
    "tips": [
     "Chiusure domine l’abbaye : un des plus beaux points de vue sur les collines d’argile."
    ]
   }
  ]
 },
 "r2": {
  "region": "Crete Senesi → Chianti",
  "cover": "brolio",
  "variants": [
   {
    "id": "base",
    "profile": "gravel",
    "label": "Par Brolio",
    "short": "Routes de l’Eroica",
    "t": "Asciano → Gaiole in Chianti",
    "path": [
     "asciano",
     "castel",
     "brolio",
     "gaiole"
    ],
    "stops": [
     [
      "castel",
      "déjeuner au bourg"
     ],
     [
      "brolio",
      "château et jardins des Ricasoli"
     ],
     [
      "gaiole",
      "berceau de l’Eroica, nuit"
     ]
    ],
    "tips": [
     "Gardez la dégustation de Brolio pour une pause, jamais juste avant une descente sur gravier."
    ]
   },
   {
    "id": "sangusme",
    "profile": "gravel",
    "label": "Avec San Gusmè",
    "short": "Détour · bourg médiéval",
    "t": "Asciano → Gaiole in Chianti",
    "path": [
     "asciano",
     "castel",
     "sangusme",
     "brolio",
     "gaiole"
    ],
    "stops": [
     [
      "castel",
      "café"
     ],
     [
      "sangusme",
      "minuscule bourg médiéval"
     ],
     [
      "brolio",
      "château des Ricasoli"
     ],
     [
      "gaiole",
      "nuit"
     ]
    ],
    "tips": [
     "San Gusmè est sur le parcours de l’Eroica : très calme."
    ]
   }
  ]
 },
 "r1": {
  "region": "Chianti → Siena",
  "cover": "castellina",
  "variants": [
   {
    "id": "base",
    "profile": "gravel",
    "label": "Jusqu’à Siena",
    "short": "Finale à Siena",
    "t": "Gaiole → Siena",
    "path": [
     "gaiole",
     "radda",
     "castellina",
     "siena"
    ],
    "stops": [
     [
      "radda",
      "bourg fortifié, café"
     ],
     [
      "castellina",
      "tunnel médiéval, déjeuner"
     ],
     [
      "siena",
      "le Campo, train retour vers Florence"
     ]
    ],
    "tips": [
     "Arrivée à Siena dans l’après-midi : gardez du temps pour le Campo et le Duomo, ou dormez sur place."
    ]
   },
   {
    "id": "gare",
    "profile": "safety",
    "label": "Jusqu’à la gare de Castellina",
    "short": "Plus court",
    "t": "Gaiole → Castellina Scalo",
    "path": [
     "gaiole",
     "radda",
     "castellina",
     "scalo"
    ],
    "stops": [
     [
      "radda",
      "bourg fortifié, café"
     ],
     [
      "castellina",
      "déjeuner"
     ],
     [
      "scalo",
      "train direct vers Florence ou Siena"
     ]
    ],
    "tips": [
     "Descente finale vers la gare : la dernière étape la plus facile."
    ]
   }
  ]
 },
 "d56": {
  "region": "Val d’Orcia",
  "cover": "pienza",
  "variants": [
   {
    "id": "base",
    "profile": "gravel",
    "label": "Par Bagno Vignoni et Pienza",
    "short": "Grande journée",
    "t": "Montalcino → Montepulciano",
    "path": [
     "montalcino",
     "antimo",
     "vignoni",
     "quirico",
     "vitaleta",
     "pienza",
     "montepulciano"
    ],
    "stops": [
     [
      "antimo",
      "abbaye romane"
     ],
     [
      "vignoni",
      "bassin thermal, café"
     ],
     [
      "quirico",
      "jardins Horti Leonini"
     ],
     [
      "vitaleta",
      "chapelle et cyprès"
     ],
     [
      "pienza",
      "déjeuner, pecorino"
     ],
     [
      "montepulciano",
      "Vino Nobile, deux nuits"
     ]
    ],
    "tips": [
     "La plus longue journée du voyage : partez tôt.",
     "Récompense : deux nuits à Montepulciano."
    ]
   }
  ]
 },
 "rest_montepulciano": {
  "rest": true,
  "region": "Montepulciano",
  "cover": "montepulciano",
  "variants": [
   {
    "id": "pied",
    "profile": "hiking-mountain",
    "label": "Montepulciano à pied",
    "short": "Repos · caves",
    "t": "Repos à Montepulciano",
    "path": [
     "montepulciano",
     "monticchiello"
    ],
    "stops": [
     [
      "montepulciano",
      "Piazza Grande, caves souterraines, San Biagio"
     ],
     [
      "monticchiello",
      "balade à pied facultative vers le village"
     ]
    ],
    "tips": [
     "Le matin : San Biagio et les caves de Vino Nobile ; l’après-midi : sieste ou balade vers Monticchiello."
    ],
    "walk": true
   },
   {
    "id": "velo",
    "profile": "gravel",
    "label": "Boucle vélo vers Monticchiello",
    "short": "Repos · vélo léger",
    "t": "Repos à Montepulciano",
    "path": [
     "montepulciano",
     "monticchiello",
     "montepulciano"
    ],
    "stops": [
     [
      "montepulciano",
      "départ sans bagages"
     ],
     [
      "monticchiello",
      "village fortifié et cyprès en lacets"
     ]
    ],
    "tips": [
     "Une boucle courte sans sacoches."
    ]
   }
  ]
 }
};

// Scénarios de voyage, rangés par catégorie : ils changent les lieux où l'on dort
// pick : variantes présélectionnées par le scénario
export const SCENARIO_CATS = ["Équilibrés","Plus facile","Plus beau","Autre itinéraire"];
export const SCENARIOS = [
 {
  "id": "classique",
  "name": "Classique",
  "pitch": "Le repos à Montalcino, au milieu du voyage, pour les amateurs de vin.",
  "days": [
   "d1",
   "d2",
   "d3",
   "rest_montalcino",
   "d5",
   "d6",
   "d7"
  ],
  "cat": "Équilibrés"
 },
 {
  "id": "thermes",
  "name": "Repos aux thermes",
  "pitch": "Une seule nuit à Montalcino, deux à Bagno Vignoni pour récupérer dans l’eau chaude.",
  "days": [
   "d1",
   "d2",
   "d3",
   "d5",
   "rest_vignoni",
   "d6",
   "d7"
  ],
  "cat": "Équilibrés"
 },
 {
  "id": "pienza",
  "name": "Deux nuits à Pienza",
  "pitch": "Plus de temps au cœur du Val d’Orcia ; la dernière étape passe par Montepulciano.",
  "days": [
   "d1",
   "d2",
   "d3",
   "d5",
   "d6pienza",
   "rest_pienza",
   "d7pienza"
  ],
  "cat": "Équilibrés"
 },
 {
  "id": "doux",
  "name": "Petites étapes, sans jour off",
  "pitch": "Sept jours de vélo plus courts, avec des nuits dans de petits bourgs du Chianti et des Crete.",
  "days": [
   "d1radda",
   "d2radda",
   "d3castel",
   "d4buon",
   "d5",
   "d6",
   "d7"
  ],
  "cat": "Plus facile"
 },
 {
  "id": "deuxoff",
  "cat": "Plus facile",
  "name": "Deux jours off",
  "pitch": "Repos à Montalcino et à Montepulciano ; une seule grande journée à travers le Val d’Orcia.",
  "days": [
   "d1",
   "d2",
   "d3",
   "rest_montalcino",
   "d56",
   "rest_montepulciano",
   "d7"
  ]
 },
 {
  "id": "villages",
  "name": "Villages perchés",
  "pitch": "Chaque nuit dans un lieu remarquable : Radda, San Gusmè, Chiusure, Montalcino, la Rocca d’Orcia et Monticchiello. Sept jours de vélo, sans jour off.",
  "days": [
   "d1radda",
   "d2gusme",
   "d3chiusure",
   "d4oliveto",
   "d5rocca",
   "d6monti",
   "d7monti"
  ],
  "cat": "Plus beau"
 },
 {
  "id": "detours",
  "cat": "Plus beau",
  "name": "Tous les détours",
  "pitch": "Le parcours classique avec chaque détour : Volpaia, San Gusmè, Chiusure, la Rocca d’Orcia, Belvedere et Monticchiello.",
  "days": [
   "d1",
   "d2",
   "d3",
   "rest_montalcino",
   "d5",
   "d6",
   "d7"
  ],
  "pick": {
   "d1": "scalo-volpaia",
   "d2": "sangusme",
   "d3": "chiusure",
   "d5": "rocca",
   "d6": "complet"
  }
 },
 {
  "id": "boucle",
  "cat": "Autre itinéraire",
  "name": "Boucle depuis Siena",
  "pitch": "Train aller et retour à Siena : la Via Lauretana, les villages secrets des Crete (Montisi, San Giovanni d’Asso), le Val d’Orcia, et le retour par la Via Francigena.",
  "days": [
   "s1",
   "s2",
   "s3",
   "s4",
   "r5",
   "rest_montalcino",
   "s7"
  ],
  "pick": {
   "s3": "monticchiello"
  }
 },
 {
  "id": "inverse",
  "cat": "Autre itinéraire",
  "name": "Sens inverse, finale à Siena",
  "pitch": "Départ en train à Chiusi, fin du voyage dans le Chianti puis à Siena : on garde la plus belle ville pour la fin.",
  "days": [
   "r7",
   "r6",
   "r5",
   "rest_montalcino",
   "r3",
   "r2",
   "r1"
  ]
 }
];

export const PRACTICAL = [
  { h: "Aller, dimanche 30 mai", p: "Train régional de Florence vers Siena (environ 1h30 jusqu’à Siena). Selon le scénario du jour 1, descendez à Castellina in Chianti-Monteriggioni, à Badesse ou à Siena. Le dimanche, il y a moins de trains : vérifiez les arrêts et les places vélo sur Trenitalia." },
  { h: "Visiter Siena", p: "Si vous partez de Castellina Scalo, gardez Siena pour la fin : trains directs depuis Chiusi, environ 1h30. Une nuit à Siena le 5 juin permet de voir le Campo et la cathédrale sans se presser." },
  { h: "Retour, samedi 5 juin", p: "De Chiusi-Chianciano Terme, trains directs vers Florence (environ 1h30 à 2h) ou vers Siena (environ 1h30)." },
  { h: "2 juin, jour férié", p: "Festa della Repubblica. Restaurants et caves restent en général ouverts à Montalcino, mais il y a plus de monde : réservez tôt." },
  { h: "Météo début juin", p: "Journées longues, souvent 25 à 28 °C l’après-midi. Partez tôt pour rouler à la fraîche." },
  { h: "Plan B", p: "Asciano et Buonconvento ont une gare, pour écourter une étape fatigante ou pluvieuse." },
];

// Pause conseillée (minutes) quand le lieu est traversé, et idées d'activités
export const ACTIVITIES = {
  siena:        { pause: 0, hist: "République médiévale rivale de Florence ; le Campo et la Torre del Mangia datent du XIVe siècle, et le Palio s’y court encore deux fois par an.", ideas: ["Piazza del Campo et la Torre del Mangia (environ 400 marches) pour la vue", "Le Duomo et son pavement de marbre", "Si vous partez d’une autre gare, gardez Siena pour la fin du voyage"] },
  scalo:        { pause: 0, ideas: ["Café avant d’attaquer la montée vers le Chianti", "Monteriggioni, village fortifié tout proche : voir le scénario avec détour"] },
  leonina:      { pause: 20, hist: "La Via Lauretana, ancienne route de Siena vers Cortona, traverse ici les crêtes d’argile ; Jean-Paul Philippe y a posé une sculpture ouverte sur le paysage.", ideas: ["Le Site Transitoire, sculpture de pierre face aux Crete", "Les cyprès isolés et les crêtes de la Lauretana, très photogéniques"] },
  sangiovanni:  { pause: 30, hist: "Bourg dominé par son château, capitale de la truffe blanche des Crete.", ideas: ["Le château et l’église romane San Pietro in Villore", "Le musée de la truffe blanche"] },
  montisi:      { pause: 0, hist: "Village médiéval resté à l’écart des circuits touristiques, au sommet d’une colline.", ideas: ["Promenade du soir dans le bourg et vue sur le Val d’Asso", "Dîner dans une trattoria de village"] },
  castelmuzio:  { pause: 30, hist: "Petit bourg fortifié sur une crête, au-dessus de la Pieve di Santo Stefano a Cennano.", ideas: ["Ruelles et vue vers le Val d’Orcia", "La Pieve di Santo Stefano a Cennano, en contrebas"] },
  monteroni:    { pause: 30, hist: "Étape de la Via Francigena, avec un ancien moulin fortifié sur l’Arbia.", ideas: ["Le moulin fortifié sur l’Arbia", "Gare : train vers Siena si les jambes sont lourdes"] },
  monteriggioni:{ pause: 45, hist: "Forteresse bâtie par Siena entre 1213 et 1219 pour surveiller Florence ; Dante compare ses tours à des géants dans l’Enfer.", ideas: ["Les remparts et leurs 14 tours, avec un chemin de ronde accessible", "Café en terrasse sur la Piazza Roma", "Le village cité par Dante dans l’Enfer"] },
  volpaia:      { pause: 40, hist: "Château médiéval des XIe–XIIe siècles, avant-poste florentin pendant les guerres du Chianti.", ideas: ["Hameau fortifié perché à plus de 600 m", "Dégustation au domaine Castello di Volpaia (réservation conseillée)", "Vue sur les collines du Chianti"] },
  sangusme:     { pause: 30, hist: "Petit bourg médiéval resté presque intact, sur l’ancienne frontière entre Siena et Florence.", ideas: ["Minuscule bourg médiéval aux portes de pierre", "Pause café au calme, sur les routes de l’Eroica"] },
  chiusure:     { pause: 30, hist: "C’est dans les ravins d’argile voisins que Bernardo Tolomei se retire en 1313 avant de fonder Monte Oliveto.", ideas: ["Belvédère sur les Crete Senesi et leurs ravins d’argile (calanchi)", "Vue plongeante sur l’abbaye de Monte Oliveto"] },
  castiglione:  { pause: 60, hist: "La Rocca a Tentennano contrôlait la Via Francigena ; sainte Catherine de Sienne y séjourne en 1377.", ideas: ["La Rocca a Tentennano, forteresse perchée au-dessus du Val d’Orcia", "Le panorama jusqu’au Monte Amiata", "Le bourg de Castiglione d’Orcia, juste à côté"] },
  belvedere:    { pause: 20, hist: "Ferme toscane typique, devenue l’image du Val d’Orcia, paysage classé à l’UNESCO en 2004.", ideas: ["La ferme sur sa colline et ses cyprès : la vue la plus photographiée du Val d’Orcia", "Propriété privée : photo depuis la route"] },
  monticchiello:{ pause: 45, hist: "Théâtre d’une bataille entre partisans et troupes allemandes en avril 1944 ; ses habitants y jouent le Teatro Povero depuis 1967.", ideas: ["La route en lacets bordée de cyprès, au pied du village", "Le Teatro Povero, théâtre joué par les habitants en été", "Ruelles fortifiées très calmes"] },
  badesse:      { pause: 0, ideas: ["Petite gare sans services : prévoyez eau et ravitaillement avant"] },
  castellina:   { pause: 75, hist: "Tombes étrusques des VIIe–VIe siècles av. J.-C., puis place forte florentine face à Siena, avec sa Rocca du XVe siècle.", ideas: ["La Via delle Volte, passage médiéval couvert sous les remparts", "La Rocca et le musée archéologique du Chianti siennois", "Le tumulus étrusque de Montecalvario, juste au nord du bourg"] },
  radda:        { pause: 30, hist: "Capitale de la Ligue du Chianti à partir du XVe siècle, l’alliance de Radda, Castellina et Gaiole au service de Florence.", ideas: ["Tour des remparts et Palazzo del Podestà", "Dégustation de Chianti Classico dans une enoteca du bourg"] },
  gaiole:       { pause: 30, hist: "Bourg de marché de la Ligue du Chianti ; depuis 1997, point de départ de l’Eroica, course de vélos anciens.", ideas: ["Berceau de l’Eroica : boutiques et souvenirs vélo vintage", "Dîner toscan : pici, ribollita, Chianti Classico", "Badia a Coltibuono, abbaye et domaine viticole à environ 5 km au nord, pour une sortie du soir"] },
  brolio:       { pause: 60, hist: "Propriété des Ricasoli depuis le XIIe siècle ; Bettino Ricasoli, deuxième chef du gouvernement italien, y fixe la recette du Chianti en 1872.", ideas: ["Le château des Ricasoli, berceau de la recette du Chianti", "Les jardins et la vue sur les vignes", "Dégustation à la cave du domaine (réservation conseillée)"] },
  castel:       { pause: 60, hist: "Doit son nom au comte franc Berardo (Xe siècle) ; le « château neuf » est fortifié par Siena au XIVe siècle.", ideas: ["Pause déjeuner au bourg", "Le parc de la Villa Chigi Saracini", "Premiers panneaux marron de l’Eroica"] },
  asciano:      { pause: 30, hist: "Nécropole étrusque à ses portes, puis bourg fortifié siennois aux remparts du XIVe siècle.", ideas: ["La collégiale Sant’Agata et le musée du Palazzo Corboli", "Le coucher du soleil sur les collines d’argile des Crete Senesi", "Le Site Transitoire, œuvre de land art au milieu des Crete (vers Leonina)"] },
  oliveto:      { pause: 60, hist: "Abbaye fondée en 1313 ; Luca Signorelli puis Sodoma peignent la vie de saint Benoît dans le grand cloître (1497–1508).", ideas: ["Le grand cloître et ses fresques de la vie de saint Benoît, par Signorelli et Sodoma", "L’allée de cyprès à l’entrée de l’abbaye", "Liqueurs et produits des moines à la boutique"] },
  buon:         { pause: 60, hist: "L’empereur Henri VII y meurt en 1313, alors qu’il marche sur Florence.", ideas: ["Bourg fortifié parmi les plus beaux villages d’Italie", "Le musée de la Mezzadria, sur la vie paysanne toscane", "Café ou gelato sur la rue principale"] },
  montalcino:   { pause: 0, hist: "Dernier refuge de la République de Siena (1555–1559) après la chute de la ville face à Florence et l’Espagne.", ideas: ["Les remparts de la Forteresse et l’enoteca à l’intérieur", "Dégustation de Brunello : réservez une cave", "Le Tempio del Brunello, musée du vin dans l’ancien couvent Sant’Agostino"] },
  angelo:       { pause: 45, hist: "Ancien avant-poste fortifié siennois, qui veille sur la vallée de l’Orcia.", ideas: ["Village perché, vue sur le Val d’Orcia et le Monte Amiata", "Déjeuner en terrasse ou dégustation dans un domaine voisin"] },
  antimo:       { pause: 45, hist: "Fondation attribuée à Charlemagne ; l’abbatiale romane actuelle date du XIIe siècle.", ideas: ["L’abbatiale romane en pierre claire, au milieu des oliviers", "Café à Castelnuovo dell’Abate, juste au-dessus de l’abbaye"] },
  vignoni:      { pause: 0, hist: "Thermes fréquentés depuis l’Antiquité ; le grand bassin de la place est aménagé à la Renaissance.", ideas: ["La Piazza delle Sorgenti, bassin thermal au cœur du village (baignade interdite)", "Le Parco dei Mulini : bassins d’eau chaude gratuits en contrebas, pour tremper les jambes", "Piscines thermales payantes ouvertes au public pour récupérer", "En taxi : les vasques calcaires blanches de Bagni San Filippo, à environ 15 km"] },
  quirico:      { pause: 45, hist: "Étape de la Via Francigena ; Frédéric Barberousse y rencontre les envoyés du pape en 1155.", ideas: ["Les Horti Leonini, jardin Renaissance", "Les portails sculptés de la collégiale"] },
  vitaleta:     { pause: 20, hist: "Chapelle d’origine Renaissance, à la façade refaite au XIXe siècle.", ideas: ["La chapelle et ses cyprès : restez sur le chemin, c’est une propriété privée", "Lumière plus belle tôt le matin"] },
  pienza:       { pause: 75, hist: "Village natal du pape Pie II, reconstruit en 1459–1462 comme cité idéale de la Renaissance ; classé à l’UNESCO en 1996.", ideas: ["Piazza Pio II et le Duomo, cité idéale de la Renaissance", "Les remparts côté sud, panorama sur le Val d’Orcia", "Pecorino di Pienza à goûter et à emporter", "Détour possible par Monticchiello et sa route en lacets bordée de cyprès"] },
  montepulciano:{ pause: 75, hist: "Palais Renaissance des Sangallo, temple de San Biagio (1518), et un Vino Nobile chanté par les poètes dès le XVIIe siècle.", ideas: ["La Piazza Grande et la vue depuis la tour du Palazzo Comunale", "Caves souterraines et dégustation de Vino Nobile", "Le temple de San Biagio, en contrebas du bourg"] },
  chiusi:       { pause: 0, hist: "Une des grandes cités étrusques, patrie du roi Porsenna qui assiège Rome vers 508 av. J.-C.", ideas: ["Le musée archéologique national étrusque", "Le labyrinthe de Porsenna, galeries souterraines sous la cathédrale", "Un gelato avant le train"] },
};

// Rythmes : vitesse sur asphalte et sur gravier (km/h), vitesse verticale en montée (m/h)
export const PACES = [
  { id: "calme", label: "Tranquille", paved: 18, gravel: 13, climb: 450 },
  { id: "moyen", label: "Moyen", paved: 21, gravel: 15, climb: 600 },
  { id: "sport", label: "Sportif", paved: 25, gravel: 18, climb: 800 },
];
