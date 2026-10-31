/*
  Configurazione del sito, da modificare senza toccare il resto della pagina.

  Percorsi delle immagini: relativi, senza slash iniziale.
  Esempio corretto: "assets/images/screenshots/garage.png"
  Così la pagina funziona sia in locale sia su GitHub Pages in una sottocartella.

  appStoreUrl è l'indirizzo ufficiale dell'App Store.
  Deve iniziare con https://, altrimenti il pulsante resta spento.
*/
window.SITE = {
  playStoreUrl:
    "https://play.google.com/store/apps/details?id=com.hopeandtrust.mybikegarage",
  appStoreUrl: "https://apps.apple.com/it/app/my-bike-garage/id6819202381",
  privacyUrl: "https://rraymon150.github.io/my-bike-garage-privacy/",
  email: "hopeandtrust.dev@gmail.com",
  screenshots: [
    {
      src: "assets/images/screenshots/garage.png",
      alt: "Schermata Garage: la bici Raymon Trailray 150, E-bike, con 50 Km e stato In strada",
      width: 804,
      height: 1748
    },
    {
      src: "assets/images/screenshots/riepilogo.png",
      alt: "Schermata Riepilogo: spese per tipologia, totale 280 euro e distanza percorsa 50 Km",
      width: 804,
      height: 1748
    },
    {
      src: "assets/images/screenshots/spese.png",
      alt: "Schermata Spese: camera d'aria, polizza bici, casco e sellino",
      width: 804,
      height: 1748
    },
    {
      src: "assets/images/screenshots/pneumatici.png",
      alt: "Schermata Pneumatici: Vittoria Mazza Enduro, dimensione 29 per 2.4, 50 Km, in uso",
      width: 804,
      height: 1748
    },
    {
      src: "assets/images/screenshots/officina.png",
      alt: "Schermata Officina: coppie di serraggio, sospensioni, tagliandi, motore e batteria, prodotti preferiti, guasti e problemi",
      width: 804,
      height: 1748
    }
  ],
};
