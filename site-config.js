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
      src: "assets/images/screenshots/garage.jpg",
      alt: "Schermata Garage: la bici Raymon Trailray 150, E-bike, con 401 Km e stato In strada",
      width: 485,
      height: 1024
    },
    {
      src: "assets/images/screenshots/riepilogo.jpg",
      alt: "Schermata Riepilogo: spese per tipologia, totale 440,78 euro e distanza percorsa 401 Km",
      width: 485,
      height: 1024
    },
    {
      src: "assets/images/screenshots/spese.jpg",
      alt: "Schermata Spese: step gomme Magic, pedali SPD, siringa per lattice, liquido antiforatura e adattatore pompa",
      width: 485,
      height: 1024
    },
    {
      src: "assets/images/screenshots/officina.jpg",
      alt: "Schermata Officina: coppie di serraggio, sospensioni, ciclistica, motore e batteria, prodotti preferiti, tagliandi, guasti e problemi",
      width: 485,
      height: 1024
    }
  ],
};
