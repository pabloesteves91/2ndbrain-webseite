# 2ndbrain.ch

Website der App **2nd Brain** (GitHub Pages, Domain `2ndbrain.ch`).

- `index.html` – Startseite (Bildschirmfotos, Funktionen, Kontakt & Support)
- `privacy.html` – Datenschutz
- `note.html` + `js/share-codec.js` – Empfangsseite für geteilte Notizen (`note.html#…`).
  `share-codec.js` ist eine Kopie aus dem App-Repo `2nd-Brain` – bei Änderungen dort mitziehen.
- `.well-known/apple-app-site-association` – Universal Links, damit geteilte Links direkt die App öffnen
- `sw.js` – meldet den Service Worker der früheren Web-App ab

## Bei jedem Release, der live ist

`updates.html` und `en/updates.html` ergänzen: neue Version oben als `<section class="ver" id="vX.Y">` mit dem Badge
„aktuell“/„current“ (beim bisherigen entfernen), Monat und den Neuerungen aus dem Store. Auf `index.html` und
`en/index.html` den Link „Neu in Version X.Y →“ anpassen. Erst eintragen, wenn die Version im Store freigegeben ist.
