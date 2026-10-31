# My Bike Garage

Sito statico della landing page di My Bike Garage, app di Hope & Trust per Android e iPhone.

Sono solo HTML, CSS e JavaScript. Non ci sono framework, backend, analytics né cookie.

## Vedere la pagina in locale

Nella cartella del sito:

```bash
python3 -m http.server 8080
```

Apri [http://localhost:8080](http://localhost:8080).

Per fermare il server: `Ctrl + C` nel terminale.

## Pubblicare su GitHub Pages

1. Crea il repository quando vuoi pubblicare. Questo progetto non va unito a `bike_garage` né al repository della Privacy Policy.
2. Carica il contenuto di questa cartella sul branch da pubblicare.
3. In GitHub: Settings, Pages, Deploy from a branch, cartella root.
4. I percorsi del sito sono relativi, senza slash iniziale. Funzionano anche se la pagina vive in una sottocartella, per esempio `https://utente.github.io/nome-repository/`.
5. Il file `.nojekyll` evita che GitHub Pages ignori cartelle particolari.

Dopo la pubblicazione, se vuoi i metadati social con immagine, aggiungi in `index.html` gli URL assoluti reali:

```html
<meta property="og:url" content="https://utente.github.io/nome-repository/">
<meta property="og:image" content="https://utente.github.io/nome-repository/assets/images/logo.png">
```

## App Store

In `site-config.js`, `appStoreUrl` è l’indirizzo ufficiale:

```js
appStoreUrl: "https://apps.apple.com/it/app/my-bike-garage/id6819202381",
```

I pulsanti della pagina puntano a questo indirizzo. Restano spenti solo se il valore è vuoto o non inizia con `https://`.

## Screenshot

1. Metti i file originali in `assets/images/screenshots/`.
2. In `site-config.js`, aggiungi un oggetto per ogni file, con percorso relativo e testo alternativo vero:

```js
screenshots: [
  {
    src: "assets/images/screenshots/garage.png",
    alt: "Elenco delle biciclette nel garage"
  }
]
```

Senza file in elenco, la galleria mostra solo l’avviso che gli screenshot non ci sono ancora. Un’immagine mancante o senza testo alternativo non viene inserita.

Prima di aggiungerle, riduci il lato lungo a circa 1200 pixel e salva in JPEG o PNG senza una compressione aggressiva. Il sito non deve collegare file che non esistono.

## Prova gratuita

Sul sito la prova è di 3 giorni, cioè 72 ore dall’attivazione. Continua anche se l’app non viene usata e non è rinnovabile.
