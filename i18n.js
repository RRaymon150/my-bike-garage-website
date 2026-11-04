/*
  Testi del sito in sei lingue. Nessuna libreria: funziona su GitHub Pages.

  Priorità della lingua:
  1. parametro URL valido (?lang=it|en|de|es|fr|pt, anche en-US o pt-BR)
  2. scelta manuale salvata nel browser
  3. lingua del browser
  4. inglese

  La scelta si salva solo quando si usa il selettore.
  Se il browser blocca il salvataggio, la pagina continua a funzionare.
*/
(function () {
  var CODES = ["it", "en", "de", "es", "fr", "pt"];
  var NAMES = {
    it: "Italiano",
    en: "English",
    de: "Deutsch",
    es: "Español",
    fr: "Français",
    pt: "Português"
  };
  var LOCALES = {
    it: "it_IT",
    en: "en_US",
    de: "de_DE",
    es: "es_ES",
    fr: "fr_FR",
    pt: "pt_PT"
  };
  var STORAGE_KEY = "mbg-lang";

  var MESSAGES = {
    it: {
      "meta.title": "My Bike Garage | Hope & Trust",
      "meta.description": "App di Hope & Trust per Android e iPhone. Organizza garage, manutenzioni, officina, chilometraggi, pneumatici, spese, statistiche e fotografie delle tue biciclette.",
      "meta.og": "Tutte le informazioni delle tue biciclette in un unico posto. App per Android e iPhone, con licenza permanente e senza abbonamento.",
      "meta.twitter": "Garage, manutenzioni, officina, chilometri, pneumatici, spese e fotografie delle tue biciclette.",
      "meta.jsonld": "Organizza in un unico posto le informazioni delle tue biciclette: garage, manutenzioni, officina, chilometraggi, pneumatici, spese, statistiche e fotografie.",
      "meta.offer": "Licenza permanente, pagamento unico, prezzo in Italia. Gli acquisti su Google Play e sull'App Store sono separati.",
      "a11y.skip": "Vai al contenuto",
      "a11y.newTab": " (si apre in una nuova scheda)",
      "a11y.facebook": "Facebook di My Bike Garage (si apre in una nuova scheda)",
      "a11y.instagram": "Instagram di My Bike Garage (si apre in una nuova scheda)",
      "nav.aria": "Sezioni della pagina",
      "nav.open": "Apri il menu",
      "nav.close": "Chiudi il menu",
      "nav.benefits": "Vantaggi",
      "nav.features": "Funzioni",
      "nav.gallery": "Galleria",
      "nav.license": "Licenza",
      "nav.faq": "Domande",
      "nav.download": "Scarica",
      "lang.choose": "Lingua",
      "hero.eyebrow": "Per Android e iPhone",
      "hero.lead": "Tutte le informazioni delle tue biciclette, organizzate in un unico posto: garage, manutenzioni, officina, chilometraggi, pneumatici, spese, statistiche e fotografie.",
      "hero.byline": "Un’applicazione di Hope & Trust.",
      "hero.note": "Prova gratuita di 3 giorni, 72 ore dall’attivazione: continua anche se non usi l’app e non è rinnovabile. Poi licenza permanente, senza abbonamento.",
      "store.googleAlt": "Disponibile su Google Play",
      "store.appleAlt": "Scarica su App Store",
      "why.eyebrow": "Perché usarla",
      "why.title": "Il garage delle tue bici, sul telefono",
      "why.lead": "My Bike Garage riunisce in una sola app ciò che di solito resta sparso tra fogli, note e memoria: la scheda di ogni bicicletta e il lavoro che ci fai sopra.",
      "why.place.title": "Un unico posto",
      "why.place.text": "Marca, modello, chilometri, interventi, pneumatici, spese e fotografie stanno insieme, bici per bici.",
      "why.device.title": "Dati sul dispositivo",
      "why.device.text": "Le informazioni restano sul telefono. Non serve un account Hope & Trust per usare l’app.",
      "why.backup.title": "Una copia quando serve",
      "why.backup.text": "Puoi creare un backup e ripristinarlo. Il file lo conservi tu: Hope & Trust non lo tiene su un proprio server.",
      "feat.eyebrow": "Cosa puoi fare",
      "feat.title": "Le funzioni dell’app",
      "feat.lead": "Ogni voce qui sotto è una parte di My Bike Garage.",
      "feat.garage.title": "Garage",
      "feat.garage.text": "Più biciclette nello stesso elenco, con nome, marca, modello, anno, tipologia, peso, ruote, data e prezzo di acquisto, note.",
      "feat.maint.title": "Manutenzioni",
      "feat.maint.text": "Uno storico degli interventi registrati su ciascuna bicicletta.",
      "feat.workshop.title": "Officina",
      "feat.workshop.text": "Guasti, problemi e note di lavoro, con fotografie e allegati collegati a quella bici.",
      "feat.distance.title": "Chilometraggi",
      "feat.distance.text": "Annoti i chilometri della bici. La distanza degli pneumatici si aggiorna quando una spesa riporta il chilometraggio del momento.",
      "feat.tires.title": "Pneumatici",
      "feat.tires.text": "Una scheda per i copertoni montati e per la distanza percorsa con quelli.",
      "feat.expenses.title": "Spese",
      "feat.expenses.text": "Data, importo, descrizione e tipologia di ogni spesa: ricambi, manutenzione, accessori, abbigliamento, assicurazione o altro.",
      "feat.stats.title": "Statistiche",
      "feat.stats.text": "Totale spese, suddivisione per tipologia e andamento nel tempo, più la distanza percorsa. Spese e pneumatici si possono esportare in CSV o Excel.",
      "feat.photos.title": "Fotografie",
      "feat.photos.text": "Una foto della bicicletta e immagini associate alle informazioni gestite nell’app, anche in officina.",
      "feat.backup.title": "Backup e ripristino",
      "feat.backup.text": "Crei tu la copia e scegli quali dati includere. Dal ripristino ricarichi un backup già salvato. La licenza non entra nel file.",
      "gallery.eyebrow": "Schermate",
      "gallery.title": "Galleria",
      "gallery.lead": "Qui saranno mostrati solo screenshot originali di My Bike Garage.",
      "gallery.empty": "Le schermate dell’app non sono ancora state pubblicate in questa pagina.",
      "gallery.prev": "Screenshot precedente",
      "gallery.next": "Screenshot successivo",
      "gallery.track": "Screenshot di My Bike Garage",
      "gallery.count": "Immagine {n} di {total}",
      "license.eyebrow": "Licenza",
      "license.title": "Prova, poi un solo pagamento",
      "license.lead": "Niente abbonamento. Dopo la prova, l’accesso continua con una licenza permanente.",
      "license.trial.title": "Prova gratuita",
      "license.trial.price": "3 giorni",
      "license.trial.text": "72 ore dall’attivazione. Continua anche se non usi l’app e non può essere rinnovata. Al termine, per continuare a usare l’app è necessario acquistare la licenza permanente.",
      "license.full.title": "Licenza permanente",
      "license.full.price": "4,99 €",
      "license.full.text": "Prezzo in Italia, una volta sola. Sblocca l’app senza limite di tempo e senza rinnovo. Lo store mostra il prezzo nel tuo account prima della conferma.",
      "license.callout": "Gli acquisti Android e iPhone sono separati. Una licenza comprata su Google Play non sblocca l’app su iPhone, e una licenza comprata sull’App Store non sblocca l’app su Android.",
      "faq.eyebrow": "Domande",
      "faq.title": "Prima di installarla",
      "faq.offline.q": "Si può usare senza connessione?",
      "faq.offline.a": "I dati delle biciclette restano sul dispositivo e non serve un account Hope & Trust. Una connessione serve per aggiornare i tassi di cambio tra euro, dollaro e sterlina, e per acquistare o ripristinare la licenza nello store.",
      "faq.backup.q": "Come funzionano backup e ripristino?",
      "faq.backup.a": "Il backup lo avvii tu. Scegli quali categorie includere: impostazioni, biciclette, fotografie, manutenzioni, spese, pneumatici, officina e altri dati inseriti. Su Android indichi la cartella di destinazione, anche un cloud già presente sul telefono. Hope & Trust non conserva questi file su un proprio server. Dalla schermata di ripristino ricarichi una copia già salvata. La licenza non viene copiata nel file.",
      "faq.trial.q": "Quanto dura la prova?",
      "faq.trial.a": "La prova dura 72 ore dall’attivazione e scade anche se non usi l’app durante questo periodo. Al termine non può essere rinnovata: per continuare a usare l’app è necessario acquistare la licenza permanente.",
      "faq.sub.q": "L’acquisto è un abbonamento?",
      "faq.sub.a": "No. È un pagamento unico. In Italia la licenza permanente costa 4,99 €. Non c’è un canone periodico. Il prezzo che lo store mostra prima della conferma è quello valido per il tuo account.",
      "faq.move.q": "Posso spostare i dati su un altro telefono?",
      "faq.move.a": "I dati si trasferiscono creando un backup e ripristinandolo sull’altro dispositivo. La licenza non è dentro quel file. Sul nuovo telefono, con lo stesso account dello store, usa «Ripristina acquisto». Un acquisto Google Play vale per Android; un acquisto App Store vale per iPhone. Non si trasferiscono da uno store all’altro.",
      "download.eyebrow": "Download",
      "download.title": "Installa My Bike Garage",
      "download.note": "Scegli lo store del tuo telefono.",
      "social.title": "Seguici anche sui social",
      "footer.role": "Editore di My Bike Garage.",
      "footer.privacy": "Privacy Policy",
      "lightbox.label": "Screenshot ingrandito",
      "lightbox.close": "Chiudi",
      "shots.garage": "Schermata Garage: la bici Raymon Trailray 150, E-bike, con 401 Km e stato In strada",
      "shots.riepilogo": "Schermata Riepilogo: spese per tipologia, totale 440,78 euro e distanza percorsa 401 Km",
      "shots.spese": "Schermata Spese: step gomme Magic, pedali SPD, siringa per lattice, liquido antiforatura e adattatore pompa",
      "shots.officina": "Schermata Officina: coppie di serraggio, sospensioni, ciclistica, motore e batteria, prodotti preferiti, tagliandi, guasti e problemi"
    },
    en: {
      "meta.title": "My Bike Garage | Hope & Trust",
      "meta.description": "Hope & Trust app for Android and iPhone. Organize garage, maintenance, workshop, mileage, tires, expenses, statistics, and photos of your bicycles.",
      "meta.og": "All of your bicycle information in one place. An app for Android and iPhone, with a permanent license and no subscription.",
      "meta.twitter": "Garage, maintenance, workshop, mileage, tires, expenses, and photos of your bicycles.",
      "meta.jsonld": "Organize your bicycle information in one place: garage, maintenance, workshop, mileage, tires, expenses, statistics, and photos.",
      "meta.offer": "Permanent license, one-time payment, price in Italy. Purchases on Google Play and the App Store are separate.",
      "a11y.skip": "Skip to content",
      "a11y.newTab": " (opens in a new tab)",
      "a11y.facebook": "My Bike Garage on Facebook (opens in a new tab)",
      "a11y.instagram": "My Bike Garage on Instagram (opens in a new tab)",
      "nav.aria": "Page sections",
      "nav.open": "Open menu",
      "nav.close": "Close menu",
      "nav.benefits": "Benefits",
      "nav.features": "Features",
      "nav.gallery": "Gallery",
      "nav.license": "License",
      "nav.faq": "Questions",
      "nav.download": "Download",
      "lang.choose": "Language",
      "hero.eyebrow": "For Android and iPhone",
      "hero.lead": "All of your bicycle information, organized in one place: garage, maintenance, workshop, mileage, tires, expenses, statistics, and photos.",
      "hero.byline": "An app by Hope & Trust.",
      "hero.note": "3-day free trial, 72 hours from activation: it keeps running even if you do not use the app, and it cannot be renewed. Then a permanent license, with no subscription.",
      "store.googleAlt": "Get it on Google Play",
      "store.appleAlt": "Download on the App Store",
      "why.eyebrow": "Why use it",
      "why.title": "Your bike garage, on your phone",
      "why.lead": "My Bike Garage brings together in one app what usually stays scattered across sheets, notes, and memory: each bicycle’s record and the work you do on it.",
      "why.place.title": "One place",
      "why.place.text": "Brand, model, mileage, service, tires, expenses, and photos stay together, bike by bike.",
      "why.device.title": "Data on the device",
      "why.device.text": "The information stays on the phone. You do not need a Hope & Trust account to use the app.",
      "why.backup.title": "A copy when you need one",
      "why.backup.text": "You can create a backup and restore it. You keep the file: Hope & Trust does not store it on its own server.",
      "feat.eyebrow": "What you can do",
      "feat.title": "App features",
      "feat.lead": "Each item below is a part of My Bike Garage.",
      "feat.garage.title": "Garage",
      "feat.garage.text": "Several bicycles in the same list, with name, brand, model, year, type, weight, wheels, purchase date and price, and notes.",
      "feat.maint.title": "Maintenance",
      "feat.maint.text": "A history of the service recorded for each bicycle.",
      "feat.workshop.title": "Workshop",
      "feat.workshop.text": "Faults, problems, and work notes, with photos and attachments linked to that bike.",
      "feat.distance.title": "Mileage",
      "feat.distance.text": "You record the bike’s kilometers. Tire distance updates when an expense includes the mileage at that time.",
      "feat.tires.title": "Tires",
      "feat.tires.text": "A record for the tires fitted and for the distance ridden with them.",
      "feat.expenses.title": "Expenses",
      "feat.expenses.text": "Date, amount, description, and type of each expense: parts, maintenance, accessories, clothing, insurance, or other.",
      "feat.stats.title": "Statistics",
      "feat.stats.text": "Total expenses, breakdown by type, and trend over time, plus distance ridden. Expenses and tires can be exported to CSV or Excel.",
      "feat.photos.title": "Photos",
      "feat.photos.text": "A photo of the bicycle and images linked to the information kept in the app, including in the workshop.",
      "feat.backup.title": "Backup and restore",
      "feat.backup.text": "You create the copy and choose which data to include. Restore loads a backup you already saved. The license is not included in the file.",
      "gallery.eyebrow": "Screens",
      "gallery.title": "Gallery",
      "gallery.lead": "Only original My Bike Garage screenshots will be shown here.",
      "gallery.empty": "The app screens have not been published on this page yet.",
      "gallery.prev": "Previous screenshot",
      "gallery.next": "Next screenshot",
      "gallery.track": "My Bike Garage screenshots",
      "gallery.count": "Image {n} of {total}",
      "license.eyebrow": "License",
      "license.title": "A trial, then a single payment",
      "license.lead": "No subscription. After the trial, access continues with a permanent license.",
      "license.trial.title": "Free trial",
      "license.trial.price": "3 days",
      "license.trial.text": "72 hours from activation. It keeps running even if you do not use the app, and it cannot be renewed. When it ends, you need to buy the permanent license to keep using the app.",
      "license.full.title": "Permanent license",
      "license.full.price": "€4.99",
      "license.full.text": "Price in Italy, paid once. It unlocks the app with no time limit and no renewal. The store shows the price on your account before you confirm.",
      "license.callout": "Android and iPhone purchases are separate. A license bought on Google Play does not unlock the app on iPhone, and a license bought on the App Store does not unlock the app on Android.",
      "faq.eyebrow": "Questions",
      "faq.title": "Before you install it",
      "faq.offline.q": "Can I use it offline?",
      "faq.offline.a": "Bicycle data stays on the device, and you do not need a Hope & Trust account. A connection is needed to update exchange rates between the euro, the dollar, and the pound, and to buy or restore the license in the store.",
      "faq.backup.q": "How do backup and restore work?",
      "faq.backup.a": "You start the backup. You choose which categories to include: settings, bicycles, photos, maintenance, expenses, tires, workshop, and other data you entered. On Android you choose the destination folder, including a cloud already on the phone. Hope & Trust does not keep these files on its own server. From the restore screen you load a copy you already saved. The license is not copied into the file.",
      "faq.trial.q": "How long is the trial?",
      "faq.trial.a": "The trial lasts 72 hours from activation and expires even if you do not use the app during that time. When it ends it cannot be renewed: to keep using the app you need to buy the permanent license.",
      "faq.sub.q": "Is the purchase a subscription?",
      "faq.sub.a": "No. It is a one-time payment. In Italy the permanent license costs €4.99. There is no recurring fee. The price the store shows before you confirm is the one that applies to your account.",
      "faq.move.q": "Can I move the data to another phone?",
      "faq.move.a": "You move the data by creating a backup and restoring it on the other device. The license is not inside that file. On the new phone, with the same store account, use “Restore purchase”. A Google Play purchase is valid for Android; an App Store purchase is valid for iPhone. They do not transfer from one store to the other.",
      "download.eyebrow": "Download",
      "download.title": "Install My Bike Garage",
      "download.note": "Choose the store for your phone.",
      "social.title": "Follow us on social media",
      "footer.role": "Publisher of My Bike Garage.",
      "footer.privacy": "Privacy Policy",
      "lightbox.label": "Enlarged screenshot",
      "lightbox.close": "Close",
      "shots.garage": "Garage screen: the Raymon Trailray 150 bike, e-bike, with 401 km and status On the road",
      "shots.riepilogo": "Summary screen: expenses by type, total 440.78 euro, and distance ridden 401 km",
      "shots.spese": "Expenses screen: Magic tire step, SPD pedals, latex syringe, sealant, and pump adapter",
      "shots.officina": "Workshop screen: torque settings, suspension, drivetrain, motor and battery, favorite products, services, faults and problems"
    },
    de: {
      "meta.title": "My Bike Garage | Hope & Trust",
      "meta.description": "App von Hope & Trust für Android und iPhone. Organisiere Garage, Wartungen, Werkstatt, Kilometerstände, Reifen, Ausgaben, Statistiken und Fotos deiner Fahrräder.",
      "meta.og": "Alle Informationen zu deinen Fahrrädern an einem Ort. App für Android und iPhone, mit Dauerlizenz und ohne Abonnement.",
      "meta.twitter": "Garage, Wartungen, Werkstatt, Kilometer, Reifen, Ausgaben und Fotos deiner Fahrräder.",
      "meta.jsonld": "Organisiere die Informationen zu deinen Fahrrädern an einem Ort: Garage, Wartungen, Werkstatt, Kilometerstände, Reifen, Ausgaben, Statistiken und Fotos.",
      "meta.offer": "Dauerlizenz, einmalige Zahlung, Preis in Italien. Käufe bei Google Play und im App Store sind getrennt.",
      "a11y.skip": "Zum Inhalt springen",
      "a11y.newTab": " (öffnet sich in einem neuen Tab)",
      "a11y.facebook": "Facebook von My Bike Garage (öffnet sich in einem neuen Tab)",
      "a11y.instagram": "Instagram von My Bike Garage (öffnet sich in einem neuen Tab)",
      "nav.aria": "Abschnitte der Seite",
      "nav.open": "Menü öffnen",
      "nav.close": "Menü schließen",
      "nav.benefits": "Vorteile",
      "nav.features": "Funktionen",
      "nav.gallery": "Galerie",
      "nav.license": "Lizenz",
      "nav.faq": "Fragen",
      "nav.download": "Download",
      "lang.choose": "Sprache",
      "hero.eyebrow": "Für Android und iPhone",
      "hero.lead": "Alle Informationen zu deinen Fahrrädern, an einem Ort geordnet: Garage, Wartungen, Werkstatt, Kilometerstände, Reifen, Ausgaben, Statistiken und Fotos.",
      "hero.byline": "Eine App von Hope & Trust.",
      "hero.note": "Kostenlose Testphase von 3 Tagen, 72 Stunden ab Aktivierung: sie läuft weiter, auch wenn du die App nicht nutzt, und sie ist nicht verlängerbar. Danach eine Dauerlizenz, ohne Abonnement.",
      "store.googleAlt": "Jetzt bei Google Play",
      "store.appleAlt": "Laden im App Store",
      "why.eyebrow": "Warum sie nutzen",
      "why.title": "Die Garage deiner Fahrräder, auf dem Telefon",
      "why.lead": "My Bike Garage bringt in einer App zusammen, was sonst auf Zetteln, in Notizen und im Gedächtnis verteilt bleibt: das Datenblatt jedes Fahrrads und die Arbeit, die du daran machst.",
      "why.place.title": "Ein einziger Ort",
      "why.place.text": "Marke, Modell, Kilometer, Arbeiten, Reifen, Ausgaben und Fotos bleiben zusammen, Fahrrad für Fahrrad.",
      "why.device.title": "Daten auf dem Gerät",
      "why.device.text": "Die Informationen bleiben auf dem Telefon. Du brauchst kein Hope & Trust-Konto, um die App zu nutzen.",
      "why.backup.title": "Eine Kopie, wenn du sie brauchst",
      "why.backup.text": "Du kannst ein Backup erstellen und wiederherstellen. Die Datei behältst du: Hope & Trust speichert sie nicht auf einem eigenen Server.",
      "feat.eyebrow": "Was du tun kannst",
      "feat.title": "Die Funktionen der App",
      "feat.lead": "Jeder Punkt unten ist ein Teil von My Bike Garage.",
      "feat.garage.title": "Garage",
      "feat.garage.text": "Mehrere Fahrräder in derselben Liste, mit Name, Marke, Modell, Jahr, Typ, Gewicht, Laufrädern, Kaufdatum und Kaufpreis sowie Notizen.",
      "feat.maint.title": "Wartungen",
      "feat.maint.text": "Ein Verlauf der Arbeiten, die für jedes Fahrrad erfasst wurden.",
      "feat.workshop.title": "Werkstatt",
      "feat.workshop.text": "Defekte, Probleme und Arbeitsnotizen, mit Fotos und Anhängen zu diesem Fahrrad.",
      "feat.distance.title": "Kilometerstände",
      "feat.distance.text": "Du notierst die Kilometer des Fahrrads. Die Strecke der Reifen aktualisiert sich, wenn eine Ausgabe den Kilometerstand zu diesem Zeitpunkt enthält.",
      "feat.tires.title": "Reifen",
      "feat.tires.text": "Ein Eintrag für die montierten Reifen und für die damit zurückgelegte Strecke.",
      "feat.expenses.title": "Ausgaben",
      "feat.expenses.text": "Datum, Betrag, Beschreibung und Art jeder Ausgabe: Ersatzteile, Wartung, Zubehör, Kleidung, Versicherung oder anderes.",
      "feat.stats.title": "Statistiken",
      "feat.stats.text": "Ausgaben insgesamt, Aufteilung nach Art und Verlauf über die Zeit, plus zurückgelegte Strecke. Ausgaben und Reifen lassen sich als CSV oder Excel exportieren.",
      "feat.photos.title": "Fotos",
      "feat.photos.text": "Ein Foto des Fahrrads und Bilder zu den Informationen in der App, auch in der Werkstatt.",
      "feat.backup.title": "Backup und Wiederherstellen",
      "feat.backup.text": "Du erstellst die Kopie und wählst, welche Daten enthalten sind. Beim Wiederherstellen lädst du ein bereits gespeichertes Backup. Die Lizenz ist nicht in der Datei.",
      "gallery.eyebrow": "Bildschirme",
      "gallery.title": "Galerie",
      "gallery.lead": "Hier werden nur Original-Screenshots von My Bike Garage gezeigt.",
      "gallery.empty": "Die Bildschirme der App wurden auf dieser Seite noch nicht veröffentlicht.",
      "gallery.prev": "Vorheriger Screenshot",
      "gallery.next": "Nächster Screenshot",
      "gallery.track": "Screenshots von My Bike Garage",
      "gallery.count": "Bild {n} von {total}",
      "license.eyebrow": "Lizenz",
      "license.title": "Testphase, dann eine einzige Zahlung",
      "license.lead": "Kein Abonnement. Nach der Testphase geht der Zugang mit einer Dauerlizenz weiter.",
      "license.trial.title": "Kostenlose Testphase",
      "license.trial.price": "3 Tage",
      "license.trial.text": "72 Stunden ab Aktivierung. Sie läuft weiter, auch wenn du die App nicht nutzt, und sie kann nicht verlängert werden. Danach musst du die Dauerlizenz kaufen, um die App weiter zu nutzen.",
      "license.full.title": "Dauerlizenz",
      "license.full.price": "4,99 €",
      "license.full.text": "Preis in Italien, einmalig. Schaltet die App ohne Zeitlimit und ohne Verlängerung frei. Der Store zeigt den Preis in deinem Konto vor der Bestätigung.",
      "license.callout": "Käufe für Android und iPhone sind getrennt. Eine bei Google Play gekaufte Lizenz schaltet die App auf dem iPhone nicht frei, und eine im App Store gekaufte Lizenz schaltet die App auf Android nicht frei.",
      "faq.eyebrow": "Fragen",
      "faq.title": "Bevor du sie installierst",
      "faq.offline.q": "Kann ich sie ohne Verbindung nutzen?",
      "faq.offline.a": "Die Fahrraddaten bleiben auf dem Gerät, und du brauchst kein Hope & Trust-Konto. Eine Verbindung brauchst du, um die Wechselkurse zwischen Euro, Dollar und Pfund zu aktualisieren und um die Lizenz im Store zu kaufen oder wiederherzustellen.",
      "faq.backup.q": "Wie funktionieren Backup und Wiederherstellen?",
      "faq.backup.a": "Das Backup startest du selbst. Du wählst, welche Kategorien enthalten sind: Einstellungen, Fahrräder, Fotos, Wartungen, Ausgaben, Reifen, Werkstatt und andere eingegebene Daten. Unter Android gibst du den Zielordner an, auch eine Cloud, die schon auf dem Telefon ist. Hope & Trust bewahrt diese Dateien nicht auf einem eigenen Server auf. Auf dem Bildschirm zum Wiederherstellen lädst du eine bereits gespeicherte Kopie. Die Lizenz wird nicht in die Datei kopiert.",
      "faq.trial.q": "Wie lange dauert die Testphase?",
      "faq.trial.a": "Die Testphase dauert 72 Stunden ab Aktivierung und endet auch dann, wenn du die App in dieser Zeit nicht nutzt. Danach kann sie nicht verlängert werden: um die App weiter zu nutzen, musst du die Dauerlizenz kaufen.",
      "faq.sub.q": "Ist der Kauf ein Abonnement?",
      "faq.sub.a": "Nein. Es ist eine einmalige Zahlung. In Italien kostet die Dauerlizenz 4,99 €. Es gibt keine wiederkehrende Gebühr. Der Preis, den der Store vor der Bestätigung zeigt, gilt für dein Konto.",
      "faq.move.q": "Kann ich die Daten auf ein anderes Telefon übertragen?",
      "faq.move.a": "Die Daten überträgst du, indem du ein Backup erstellst und es auf dem anderen Gerät wiederherstellst. Die Lizenz steckt nicht in dieser Datei. Verwende auf dem neuen Telefon mit demselben Store-Konto „Kauf wiederherstellen“. Ein Google-Play-Kauf gilt für Android, ein App-Store-Kauf für das iPhone. Sie lassen sich nicht von einem Store auf den anderen übertragen.",
      "download.eyebrow": "Download",
      "download.title": "My Bike Garage installieren",
      "download.note": "Wähle den Store deines Telefons.",
      "social.title": "Folge uns auch in den sozialen Medien",
      "footer.role": "Herausgeber von My Bike Garage.",
      "footer.privacy": "Datenschutzerklärung",
      "lightbox.label": "Vergrößerter Screenshot",
      "lightbox.close": "Schließen",
      "shots.garage": "Bildschirm Garage: das Fahrrad Raymon Trailray 150, E-Bike, mit 401 km und Status Unterwegs",
      "shots.riepilogo": "Bildschirm Übersicht: Ausgaben nach Art, insgesamt 440,78 Euro und zurückgelegte Strecke 401 km",
      "shots.spese": "Bildschirm Ausgaben: Magic-Reifenstep, SPD-Pedale, Latexspritze, Dichtmittel und Pumpenadapter",
      "shots.officina": "Bildschirm Werkstatt: Anzugsdrehmomente, Federungen, Antrieb, Motor und Akku, bevorzugte Produkte, Inspektionen, Defekte und Probleme"
    },
    es: {
      "meta.title": "My Bike Garage | Hope & Trust",
      "meta.description": "App de Hope & Trust para Android y iPhone. Organiza garaje, mantenimientos, taller, kilometrajes, neumáticos, gastos, estadísticas y fotografías de tus bicicletas.",
      "meta.og": "Toda la información de tus bicicletas en un solo lugar. App para Android y iPhone, con licencia permanente y sin suscripción.",
      "meta.twitter": "Garaje, mantenimientos, taller, kilómetros, neumáticos, gastos y fotografías de tus bicicletas.",
      "meta.jsonld": "Organiza en un solo lugar la información de tus bicicletas: garaje, mantenimientos, taller, kilometrajes, neumáticos, gastos, estadísticas y fotografías.",
      "meta.offer": "Licencia permanente, pago único, precio en Italia. Las compras en Google Play y en el App Store son independientes.",
      "a11y.skip": "Ir al contenido",
      "a11y.newTab": " (se abre en una pestaña nueva)",
      "a11y.facebook": "Facebook de My Bike Garage (se abre en una pestaña nueva)",
      "a11y.instagram": "Instagram de My Bike Garage (se abre en una pestaña nueva)",
      "nav.aria": "Secciones de la página",
      "nav.open": "Abrir el menú",
      "nav.close": "Cerrar el menú",
      "nav.benefits": "Ventajas",
      "nav.features": "Funciones",
      "nav.gallery": "Galería",
      "nav.license": "Licencia",
      "nav.faq": "Preguntas",
      "nav.download": "Descargar",
      "lang.choose": "Idioma",
      "hero.eyebrow": "Para Android y iPhone",
      "hero.lead": "Toda la información de tus bicicletas, organizada en un solo lugar: garaje, mantenimientos, taller, kilometrajes, neumáticos, gastos, estadísticas y fotografías.",
      "hero.byline": "Una aplicación de Hope & Trust.",
      "hero.note": "Prueba gratuita de 3 días, 72 horas desde la activación: sigue corriendo aunque no uses la app y no se puede renovar. Después, licencia permanente, sin suscripción.",
      "store.googleAlt": "Disponible en Google Play",
      "store.appleAlt": "Consíguela en el App Store",
      "why.eyebrow": "Por qué usarla",
      "why.title": "El garaje de tus bicis, en el teléfono",
      "why.lead": "My Bike Garage reúne en una sola app lo que suele quedar repartido entre hojas, notas y memoria: la ficha de cada bicicleta y el trabajo que haces en ella.",
      "why.place.title": "Un solo lugar",
      "why.place.text": "Marca, modelo, kilómetros, intervenciones, neumáticos, gastos y fotografías están juntos, bici por bici.",
      "why.device.title": "Datos en el dispositivo",
      "why.device.text": "La información permanece en el teléfono. No necesitas una cuenta de Hope & Trust para usar la app.",
      "why.backup.title": "Una copia cuando hace falta",
      "why.backup.text": "Puedes crear una copia de seguridad y restaurarla. El archivo lo guardas tú: Hope & Trust no lo conserva en un servidor propio.",
      "feat.eyebrow": "Qué puedes hacer",
      "feat.title": "Las funciones de la app",
      "feat.lead": "Cada punto de abajo es una parte de My Bike Garage.",
      "feat.garage.title": "Garaje",
      "feat.garage.text": "Varias bicicletas en la misma lista, con nombre, marca, modelo, año, tipo, peso, ruedas, fecha y precio de compra, y notas.",
      "feat.maint.title": "Mantenimientos",
      "feat.maint.text": "Un historial de las intervenciones registradas en cada bicicleta.",
      "feat.workshop.title": "Taller",
      "feat.workshop.text": "Averías, problemas y notas de trabajo, con fotografías y archivos adjuntos vinculados a esa bici.",
      "feat.distance.title": "Kilometrajes",
      "feat.distance.text": "Anotas los kilómetros de la bici. La distancia de los neumáticos se actualiza cuando un gasto indica el kilometraje de ese momento.",
      "feat.tires.title": "Neumáticos",
      "feat.tires.text": "Una ficha de las cubiertas montadas y de la distancia recorrida con ellas.",
      "feat.expenses.title": "Gastos",
      "feat.expenses.text": "Fecha, importe, descripción y tipo de cada gasto: recambios, mantenimiento, accesorios, ropa, seguro u otro.",
      "feat.stats.title": "Estadísticas",
      "feat.stats.text": "Total de gastos, desglose por tipo y evolución en el tiempo, más la distancia recorrida. Gastos y neumáticos se pueden exportar a CSV o Excel.",
      "feat.photos.title": "Fotografías",
      "feat.photos.text": "Una foto de la bicicleta e imágenes asociadas a la información de la app, también en el taller.",
      "feat.backup.title": "Copia de seguridad y restauración",
      "feat.backup.text": "Tú creas la copia y eliges qué datos incluir. Desde la restauración cargas una copia ya guardada. La licencia no entra en el archivo.",
      "gallery.eyebrow": "Pantallas",
      "gallery.title": "Galería",
      "gallery.lead": "Aquí solo se mostrarán capturas originales de My Bike Garage.",
      "gallery.empty": "Las pantallas de la app todavía no se han publicado en esta página.",
      "gallery.prev": "Captura anterior",
      "gallery.next": "Captura siguiente",
      "gallery.track": "Capturas de My Bike Garage",
      "gallery.count": "Imagen {n} de {total}",
      "license.eyebrow": "Licencia",
      "license.title": "Prueba y después un solo pago",
      "license.lead": "Sin suscripción. Después de la prueba, el acceso continúa con una licencia permanente.",
      "license.trial.title": "Prueba gratuita",
      "license.trial.price": "3 días",
      "license.trial.text": "72 horas desde la activación. Sigue corriendo aunque no uses la app y no se puede renovar. Al terminar, para seguir usando la app hay que comprar la licencia permanente.",
      "license.full.title": "Licencia permanente",
      "license.full.price": "4,99 €",
      "license.full.text": "Precio en Italia, una sola vez. Desbloquea la app sin límite de tiempo y sin renovación. La tienda muestra el precio de tu cuenta antes de la confirmación.",
      "license.callout": "Las compras de Android y de iPhone son independientes. Una licencia comprada en Google Play no desbloquea la app en el iPhone, y una licencia comprada en el App Store no desbloquea la app en Android.",
      "faq.eyebrow": "Preguntas",
      "faq.title": "Antes de instalarla",
      "faq.offline.q": "¿Se puede usar sin conexión?",
      "faq.offline.a": "Los datos de las bicicletas permanecen en el dispositivo y no hace falta una cuenta de Hope & Trust. La conexión hace falta para actualizar los tipos de cambio entre euro, dólar y libra, y para comprar o restaurar la licencia en la tienda.",
      "faq.backup.q": "¿Cómo funcionan la copia de seguridad y la restauración?",
      "faq.backup.a": "La copia de seguridad la inicias tú. Eliges qué categorías incluir: ajustes, bicicletas, fotografías, mantenimientos, gastos, neumáticos, taller y otros datos introducidos. En Android indicas la carpeta de destino, también una nube que ya esté en el teléfono. Hope & Trust no conserva estos archivos en un servidor propio. Desde la pantalla de restauración cargas una copia ya guardada. La licencia no se copia en el archivo.",
      "faq.trial.q": "¿Cuánto dura la prueba?",
      "faq.trial.a": "La prueba dura 72 horas desde la activación y caduca aunque no uses la app durante ese periodo. Al terminar no se puede renovar: para seguir usando la app hay que comprar la licencia permanente.",
      "faq.sub.q": "¿La compra es una suscripción?",
      "faq.sub.a": "No. Es un pago único. En Italia la licencia permanente cuesta 4,99 €. No hay una cuota periódica. El precio que la tienda muestra antes de la confirmación es el válido para tu cuenta.",
      "faq.move.q": "¿Puedo pasar los datos a otro teléfono?",
      "faq.move.a": "Los datos se transfieren creando una copia de seguridad y restaurándola en el otro dispositivo. La licencia no está dentro de ese archivo. En el teléfono nuevo, con la misma cuenta de la tienda, usa «Restaurar compra». Una compra de Google Play vale para Android; una compra del App Store vale para iPhone. No se transfieren de una tienda a la otra.",
      "download.eyebrow": "Descarga",
      "download.title": "Instala My Bike Garage",
      "download.note": "Elige la tienda de tu teléfono.",
      "social.title": "Síguenos también en las redes",
      "footer.role": "Editor de My Bike Garage.",
      "footer.privacy": "Política de privacidad",
      "lightbox.label": "Captura ampliada",
      "lightbox.close": "Cerrar",
      "shots.garage": "Pantalla Garaje: la bici Raymon Trailray 150, e-bike, con 401 km y estado En ruta",
      "shots.riepilogo": "Pantalla Resumen: gastos por tipo, total 440,78 euros y distancia recorrida 401 km",
      "shots.spese": "Pantalla Gastos: step de cubiertas Magic, pedales SPD, jeringa de látex, líquido antipinchazos y adaptador de bomba",
      "shots.officina": "Pantalla Taller: pares de apriete, suspensiones, transmisión, motor y batería, productos favoritos, revisiones, averías y problemas"
    },
    fr: {
      "meta.title": "My Bike Garage | Hope & Trust",
      "meta.description": "Application Hope & Trust pour Android et iPhone. Organisez garage, entretiens, atelier, kilométrages, pneus, dépenses, statistiques et photos de vos vélos.",
      "meta.og": "Toutes les informations de vos vélos au même endroit. Application pour Android et iPhone, avec une licence permanente et sans abonnement.",
      "meta.twitter": "Garage, entretiens, atelier, kilomètres, pneus, dépenses et photos de vos vélos.",
      "meta.jsonld": "Organisez au même endroit les informations de vos vélos : garage, entretiens, atelier, kilométrages, pneus, dépenses, statistiques et photos.",
      "meta.offer": "Licence permanente, paiement unique, prix en Italie. Les achats sur Google Play et sur l’App Store sont distincts.",
      "a11y.skip": "Aller au contenu",
      "a11y.newTab": " (s’ouvre dans un nouvel onglet)",
      "a11y.facebook": "Facebook de My Bike Garage (s’ouvre dans un nouvel onglet)",
      "a11y.instagram": "Instagram de My Bike Garage (s’ouvre dans un nouvel onglet)",
      "nav.aria": "Sections de la page",
      "nav.open": "Ouvrir le menu",
      "nav.close": "Fermer le menu",
      "nav.benefits": "Avantages",
      "nav.features": "Fonctions",
      "nav.gallery": "Galerie",
      "nav.license": "Licence",
      "nav.faq": "Questions",
      "nav.download": "Télécharger",
      "lang.choose": "Langue",
      "hero.eyebrow": "Pour Android et iPhone",
      "hero.lead": "Toutes les informations de vos vélos, rangées au même endroit : garage, entretiens, atelier, kilométrages, pneus, dépenses, statistiques et photos.",
      "hero.byline": "Une application de Hope & Trust.",
      "hero.note": "Essai gratuit de 3 jours, 72 heures à partir de l’activation : il continue même si vous n’utilisez pas l’app, et il n’est pas renouvelable. Ensuite, une licence permanente, sans abonnement.",
      "store.googleAlt": "Disponible sur Google Play",
      "store.appleAlt": "Télécharger dans l’App Store",
      "why.eyebrow": "Pourquoi l’utiliser",
      "why.title": "Le garage de vos vélos, sur le téléphone",
      "why.lead": "My Bike Garage réunit dans une seule app ce qui reste d’habitude éparpillé entre feuilles, notes et mémoire : la fiche de chaque vélo et le travail que vous y faites.",
      "why.place.title": "Un seul endroit",
      "why.place.text": "Marque, modèle, kilomètres, interventions, pneus, dépenses et photos restent ensemble, vélo par vélo.",
      "why.device.title": "Données sur l’appareil",
      "why.device.text": "Les informations restent sur le téléphone. Vous n’avez pas besoin d’un compte Hope & Trust pour utiliser l’app.",
      "why.backup.title": "Une copie quand il le faut",
      "why.backup.text": "Vous pouvez créer une sauvegarde et la restaurer. Vous conservez le fichier : Hope & Trust ne le garde pas sur un serveur qui lui appartient.",
      "feat.eyebrow": "Ce que vous pouvez faire",
      "feat.title": "Les fonctions de l’app",
      "feat.lead": "Chaque entrée ci-dessous fait partie de My Bike Garage.",
      "feat.garage.title": "Garage",
      "feat.garage.text": "Plusieurs vélos dans la même liste, avec nom, marque, modèle, année, type, poids, roues, date et prix d’achat, et notes.",
      "feat.maint.title": "Entretiens",
      "feat.maint.text": "Un historique des interventions enregistrées sur chaque vélo.",
      "feat.workshop.title": "Atelier",
      "feat.workshop.text": "Pannes, problèmes et notes de travail, avec photos et pièces jointes liées à ce vélo.",
      "feat.distance.title": "Kilométrages",
      "feat.distance.text": "Vous notez les kilomètres du vélo. La distance des pneus se met à jour quand une dépense indique le kilométrage du moment.",
      "feat.tires.title": "Pneus",
      "feat.tires.text": "Une fiche pour les pneus montés et pour la distance parcourue avec eux.",
      "feat.expenses.title": "Dépenses",
      "feat.expenses.text": "Date, montant, description et type de chaque dépense : pièces, entretien, accessoires, vêtements, assurance ou autre.",
      "feat.stats.title": "Statistiques",
      "feat.stats.text": "Total des dépenses, répartition par type et évolution dans le temps, plus la distance parcourue. Dépenses et pneus peuvent être exportés en CSV ou Excel.",
      "feat.photos.title": "Photos",
      "feat.photos.text": "Une photo du vélo et des images associées aux informations gérées dans l’app, y compris dans l’atelier.",
      "feat.backup.title": "Sauvegarde et restauration",
      "feat.backup.text": "Vous créez la copie et vous choisissez les données à inclure. La restauration recharge une sauvegarde déjà enregistrée. La licence n’est pas dans le fichier.",
      "gallery.eyebrow": "Écrans",
      "gallery.title": "Galerie",
      "gallery.lead": "Seules des captures d’écran originales de My Bike Garage seront affichées ici.",
      "gallery.empty": "Les écrans de l’app n’ont pas encore été publiés sur cette page.",
      "gallery.prev": "Capture précédente",
      "gallery.next": "Capture suivante",
      "gallery.track": "Captures d’écran de My Bike Garage",
      "gallery.count": "Image {n} sur {total}",
      "license.eyebrow": "Licence",
      "license.title": "Un essai, puis un seul paiement",
      "license.lead": "Pas d’abonnement. Après l’essai, l’accès continue avec une licence permanente.",
      "license.trial.title": "Essai gratuit",
      "license.trial.price": "3 jours",
      "license.trial.text": "72 heures à partir de l’activation. Il continue même si vous n’utilisez pas l’app, et il ne peut pas être renouvelé. À la fin, pour continuer à utiliser l’app, il faut acheter la licence permanente.",
      "license.full.title": "Licence permanente",
      "license.full.price": "4,99 €",
      "license.full.text": "Prix en Italie, une seule fois. Débloque l’app sans limite de durée et sans renouvellement. La boutique affiche le prix de votre compte avant la confirmation.",
      "license.callout": "Les achats Android et iPhone sont distincts. Une licence achetée sur Google Play ne débloque pas l’app sur iPhone, et une licence achetée sur l’App Store ne débloque pas l’app sur Android.",
      "faq.eyebrow": "Questions",
      "faq.title": "Avant de l’installer",
      "faq.offline.q": "Peut-on l’utiliser sans connexion ?",
      "faq.offline.a": "Les données des vélos restent sur l’appareil et vous n’avez pas besoin d’un compte Hope & Trust. Une connexion sert à mettre à jour les taux de change entre l’euro, le dollar et la livre, et à acheter ou restaurer la licence dans la boutique.",
      "faq.backup.q": "Comment fonctionnent la sauvegarde et la restauration ?",
      "faq.backup.a": "C’est vous qui lancez la sauvegarde. Vous choisissez les catégories à inclure : réglages, vélos, photos, entretiens, dépenses, pneus, atelier et autres données saisies. Sur Android, vous indiquez le dossier de destination, y compris un cloud déjà présent sur le téléphone. Hope & Trust ne conserve pas ces fichiers sur un serveur qui lui appartient. Depuis l’écran de restauration, vous rechargez une copie déjà enregistrée. La licence n’est pas copiée dans le fichier.",
      "faq.trial.q": "Combien de temps dure l’essai ?",
      "faq.trial.a": "L’essai dure 72 heures à partir de l’activation et se termine même si vous n’utilisez pas l’app pendant cette période. À la fin, il ne peut pas être renouvelé : pour continuer à utiliser l’app, il faut acheter la licence permanente.",
      "faq.sub.q": "L’achat est-il un abonnement ?",
      "faq.sub.a": "Non. C’est un paiement unique. En Italie, la licence permanente coûte 4,99 €. Il n’y a pas de redevance périodique. Le prix que la boutique affiche avant la confirmation est celui qui vaut pour votre compte.",
      "faq.move.q": "Puis-je transférer les données sur un autre téléphone ?",
      "faq.move.a": "Les données se transfèrent en créant une sauvegarde et en la restaurant sur l’autre appareil. La licence n’est pas dans ce fichier. Sur le nouveau téléphone, avec le même compte de la boutique, utilisez « Restaurer l’achat ». Un achat Google Play vaut pour Android ; un achat App Store vaut pour iPhone. Ils ne passent pas d’une boutique à l’autre.",
      "download.eyebrow": "Téléchargement",
      "download.title": "Installez My Bike Garage",
      "download.note": "Choisissez la boutique de votre téléphone.",
      "social.title": "Suivez-nous aussi sur les réseaux",
      "footer.role": "Éditeur de My Bike Garage.",
      "footer.privacy": "Politique de confidentialité",
      "lightbox.label": "Capture agrandie",
      "lightbox.close": "Fermer",
      "shots.garage": "Écran Garage : le vélo Raymon Trailray 150, vélo électrique, avec 401 km et l’état Sur la route",
      "shots.riepilogo": "Écran Récapitulatif : dépenses par type, total 440,78 euros et distance parcourue 401 km",
      "shots.spese": "Écran Dépenses : step pneus Magic, pédales SPD, seringue à latex, liquide anti-crevaison et adaptateur de pompe",
      "shots.officina": "Écran Atelier : couples de serrage, suspensions, transmission, moteur et batterie, produits favoris, révisions, pannes et problèmes"
    },
    pt: {
      "meta.title": "My Bike Garage | Hope & Trust",
      "meta.description": "App da Hope & Trust para Android e iPhone. Organiza garagem, manutenções, oficina, quilometragem, pneus, despesas, estatísticas e fotografias das tuas bicicletas.",
      "meta.og": "Todas as informações das tuas bicicletas num só lugar. App para Android e iPhone, com licença permanente e sem subscrição.",
      "meta.twitter": "Garagem, manutenções, oficina, quilómetros, pneus, despesas e fotografias das tuas bicicletas.",
      "meta.jsonld": "Organiza num só lugar as informações das tuas bicicletas: garagem, manutenções, oficina, quilometragem, pneus, despesas, estatísticas e fotografias.",
      "meta.offer": "Licença permanente, pagamento único, preço em Itália. As compras na Google Play e na App Store são separadas.",
      "a11y.skip": "Ir para o conteúdo",
      "a11y.newTab": " (abre num novo separador)",
      "a11y.facebook": "Facebook do My Bike Garage (abre num novo separador)",
      "a11y.instagram": "Instagram do My Bike Garage (abre num novo separador)",
      "nav.aria": "Secções da página",
      "nav.open": "Abrir o menu",
      "nav.close": "Fechar o menu",
      "nav.benefits": "Vantagens",
      "nav.features": "Funções",
      "nav.gallery": "Galeria",
      "nav.license": "Licença",
      "nav.faq": "Perguntas",
      "nav.download": "Descarregar",
      "lang.choose": "Idioma",
      "hero.eyebrow": "Para Android e iPhone",
      "hero.lead": "Todas as informações das tuas bicicletas, organizadas num só lugar: garagem, manutenções, oficina, quilometragem, pneus, despesas, estatísticas e fotografias.",
      "hero.byline": "Uma aplicação da Hope & Trust.",
      "hero.note": "Teste gratuito de 3 dias, 72 horas a partir da ativação: continua mesmo que não uses a app e não é renovável. Depois, licença permanente, sem subscrição.",
      "store.googleAlt": "Disponível no Google Play",
      "store.appleAlt": "Descarregar na App Store",
      "why.eyebrow": "Porquê usá-la",
      "why.title": "A garagem das tuas bicicletas, no telefone",
      "why.lead": "O My Bike Garage junta numa só app o que normalmente fica espalhado entre folhas, notas e memória: a ficha de cada bicicleta e o trabalho que lhe fazes.",
      "why.place.title": "Um só lugar",
      "why.place.text": "Marca, modelo, quilómetros, intervenções, pneus, despesas e fotografias ficam juntos, bicicleta a bicicleta.",
      "why.device.title": "Dados no dispositivo",
      "why.device.text": "As informações ficam no telefone. Não precisas de uma conta Hope & Trust para usar a app.",
      "why.backup.title": "Uma cópia quando é precisa",
      "why.backup.text": "Podes criar uma cópia de segurança e restaurá-la. O ficheiro fica contigo: a Hope & Trust não o guarda num servidor próprio.",
      "feat.eyebrow": "O que podes fazer",
      "feat.title": "As funções da app",
      "feat.lead": "Cada ponto abaixo é uma parte do My Bike Garage.",
      "feat.garage.title": "Garagem",
      "feat.garage.text": "Várias bicicletas na mesma lista, com nome, marca, modelo, ano, tipo, peso, rodas, data e preço de compra, e notas.",
      "feat.maint.title": "Manutenções",
      "feat.maint.text": "Um histórico das intervenções registadas em cada bicicleta.",
      "feat.workshop.title": "Oficina",
      "feat.workshop.text": "Avarias, problemas e notas de trabalho, com fotografias e anexos ligados a essa bicicleta.",
      "feat.distance.title": "Quilometragem",
      "feat.distance.text": "Registas os quilómetros da bicicleta. A distância dos pneus atualiza-se quando uma despesa indica a quilometragem desse momento.",
      "feat.tires.title": "Pneus",
      "feat.tires.text": "Uma ficha dos pneus montados e da distância percorrida com eles.",
      "feat.expenses.title": "Despesas",
      "feat.expenses.text": "Data, valor, descrição e tipo de cada despesa: peças, manutenção, acessórios, vestuário, seguro ou outro.",
      "feat.stats.title": "Estatísticas",
      "feat.stats.text": "Total de despesas, divisão por tipo e evolução no tempo, mais a distância percorrida. Despesas e pneus podem ser exportados para CSV ou Excel.",
      "feat.photos.title": "Fotografias",
      "feat.photos.text": "Uma fotografia da bicicleta e imagens associadas às informações geridas na app, também na oficina.",
      "feat.backup.title": "Cópia de segurança e restauro",
      "feat.backup.text": "És tu que crias a cópia e escolhes que dados incluir. No restauro carregas uma cópia já guardada. A licença não entra no ficheiro.",
      "gallery.eyebrow": "Ecrãs",
      "gallery.title": "Galeria",
      "gallery.lead": "Aqui só serão mostradas capturas de ecrã originais do My Bike Garage.",
      "gallery.empty": "Os ecrãs da app ainda não foram publicados nesta página.",
      "gallery.prev": "Captura anterior",
      "gallery.next": "Captura seguinte",
      "gallery.track": "Capturas de ecrã do My Bike Garage",
      "gallery.count": "Imagem {n} de {total}",
      "license.eyebrow": "Licença",
      "license.title": "Teste e depois um só pagamento",
      "license.lead": "Sem subscrição. Depois do teste, o acesso continua com uma licença permanente.",
      "license.trial.title": "Teste gratuito",
      "license.trial.price": "3 dias",
      "license.trial.text": "72 horas a partir da ativação. Continua mesmo que não uses a app e não pode ser renovado. No fim, para continuares a usar a app, é preciso comprar a licença permanente.",
      "license.full.title": "Licença permanente",
      "license.full.price": "4,99 €",
      "license.full.text": "Preço em Itália, uma única vez. Desbloqueia a app sem limite de tempo e sem renovação. A loja mostra o preço da tua conta antes da confirmação.",
      "license.callout": "As compras para Android e iPhone são separadas. Uma licença comprada na Google Play não desbloqueia a app no iPhone, e uma licença comprada na App Store não desbloqueia a app no Android.",
      "faq.eyebrow": "Perguntas",
      "faq.title": "Antes de a instalares",
      "faq.offline.q": "Dá para usar sem ligação?",
      "faq.offline.a": "Os dados das bicicletas ficam no dispositivo e não é precisa uma conta Hope & Trust. É precisa ligação para atualizar as taxas de câmbio entre euro, dólar e libra, e para comprar ou restaurar a licença na loja.",
      "faq.backup.q": "Como funcionam a cópia de segurança e o restauro?",
      "faq.backup.a": "A cópia de segurança és tu que a inicias. Escolhes que categorias incluir: definições, bicicletas, fotografias, manutenções, despesas, pneus, oficina e outros dados introduzidos. No Android indicas a pasta de destino, incluindo uma nuvem que já esteja no telefone. A Hope & Trust não guarda estes ficheiros num servidor próprio. No ecrã de restauro carregas uma cópia já guardada. A licença não é copiada para o ficheiro.",
      "faq.trial.q": "Quanto tempo dura o teste?",
      "faq.trial.a": "O teste dura 72 horas a partir da ativação e termina mesmo que não uses a app durante esse período. No fim não pode ser renovado: para continuares a usar a app, é preciso comprar a licença permanente.",
      "faq.sub.q": "A compra é uma subscrição?",
      "faq.sub.a": "Não. É um pagamento único. Em Itália, a licença permanente custa 4,99 €. Não há uma mensalidade. O preço que a loja mostra antes da confirmação é o que vale para a tua conta.",
      "faq.move.q": "Posso passar os dados para outro telefone?",
      "faq.move.a": "Os dados transferem-se criando uma cópia de segurança e restaurando-a no outro dispositivo. A licença não está nesse ficheiro. No telefone novo, com a mesma conta da loja, usa «Restaurar compra». Uma compra na Google Play vale para Android; uma compra na App Store vale para iPhone. Não passam de uma loja para a outra.",
      "download.eyebrow": "Transferência",
      "download.title": "Instala o My Bike Garage",
      "download.note": "Escolhe a loja do teu telefone.",
      "social.title": "Segue-nos também nas redes",
      "footer.role": "Editora do My Bike Garage.",
      "footer.privacy": "Política de privacidade",
      "lightbox.label": "Captura ampliada",
      "lightbox.close": "Fechar",
      "shots.garage": "Ecrã Garagem: a bicicleta Raymon Trailray 150, e-bike, com 401 km e estado Em estrada",
      "shots.riepilogo": "Ecrã Resumo: despesas por tipo, total de 440,78 euros e distância percorrida de 401 km",
      "shots.spese": "Ecrã Despesas: step de pneus Magic, pedais SPD, seringa de látex, líquido antipunção e adaptador de bomba",
      "shots.officina": "Ecrã Oficina: binários de aperto, suspensões, transmissão, motor e bateria, produtos favoritos, revisões, avarias e problemas"
    }
  };

  var current = "en";
  var listeners = [];

  function normalize(value) {
    if (typeof value !== "string") {
      return "";
    }
    var text = value.trim().toLowerCase().replace(/_/g, "-");
    if (!text) {
      return "";
    }
    var primary = text.split("-")[0];
    if (CODES.indexOf(primary) === -1) {
      return "";
    }
    return primary;
  }

  function choose(urlValue, savedValue, browserList) {
    var fromUrl = normalize(urlValue);
    if (fromUrl) {
      return fromUrl;
    }
    var saved = normalize(savedValue);
    if (saved) {
      return saved;
    }
    var list = browserList || [];
    for (var i = 0; i < list.length; i += 1) {
      var code = normalize(list[i]);
      if (code) {
        return code;
      }
    }
    return "en";
  }

  function readSaved() {
    try {
      return window.localStorage.getItem(STORAGE_KEY) || "";
    } catch (error) {
      return "";
    }
  }

  function writeSaved(code) {
    try {
      window.localStorage.setItem(STORAGE_KEY, code);
      return true;
    } catch (error) {
      return false;
    }
  }

  function browserLanguages() {
    if (navigator.languages && navigator.languages.length) {
      return Array.prototype.slice.call(navigator.languages);
    }
    if (navigator.language) {
      return [navigator.language];
    }
    return [];
  }

  function t(key) {
    var pack = MESSAGES[current] || MESSAGES.en;
    if (pack[key]) {
      return pack[key];
    }
    return MESSAGES.en[key] || "";
  }

  function shotAlt(src) {
    var path = String(src || "").split("?")[0].split("#")[0];
    var file = path.split("/").pop() || "";
    var name = file.replace(/\.[^.]+$/, "");
    return t("shots." + name);
  }

  function galleryCount(index, total) {
    return t("gallery.count").replace("{n}", String(index)).replace("{total}", String(total));
  }

  function setMeta(attribute, name, value) {
    var node = document.head.querySelector("meta[" + attribute + "=\"" + name + "\"]");
    if (node && value) {
      node.setAttribute("content", value);
    }
  }

  function updateJsonLd() {
    var node = document.getElementById("app-jsonld");
    if (!node) {
      return;
    }
    try {
      var data = JSON.parse(node.textContent);
      data.description = t("meta.jsonld");
      if (data.offers) {
        data.offers.description = t("meta.offer");
      }
      node.textContent = JSON.stringify(data);
    } catch (error) {
      return;
    }
  }

  function updateAlternates() {
    document.querySelectorAll("link[data-alt-lang]").forEach(function (node) {
      node.remove();
    });
    var currentUrl = new URL(window.location.href);
    currentUrl.hash = "";
    CODES.forEach(function (code) {
      var link = document.createElement("link");
      link.rel = "alternate";
      link.hreflang = code;
      link.setAttribute("data-alt-lang", code);
      var url = new URL(currentUrl.href);
      url.searchParams.set("lang", code);
      link.href = url.href;
      document.head.appendChild(link);
    });
    var fallback = document.createElement("link");
    fallback.rel = "alternate";
    fallback.hreflang = "x-default";
    fallback.setAttribute("data-alt-lang", "x-default");
    var fallbackUrl = new URL(currentUrl.href);
    fallbackUrl.searchParams.set("lang", "en");
    fallback.href = fallbackUrl.href;
    document.head.appendChild(fallback);
  }

  function writeUrl(code) {
    try {
      var url = new URL(window.location.href);
      url.searchParams.set("lang", code);
      var next = url.pathname + url.search + url.hash;
      var now = window.location.pathname + window.location.search + window.location.hash;
      if (next !== now && window.history && window.history.replaceState) {
        window.history.replaceState(null, "", next);
      }
    } catch (error) {
      return;
    }
  }

  function apply(code) {
    document.documentElement.lang = code;
    document.title = t("meta.title");
    setMeta("name", "description", t("meta.description"));
    setMeta("property", "og:title", t("meta.title"));
    setMeta("property", "og:description", t("meta.og"));
    setMeta("property", "og:locale", LOCALES[code] || LOCALES.en);
    setMeta("name", "twitter:title", t("meta.title"));
    setMeta("name", "twitter:description", t("meta.twitter"));
    updateJsonLd();
    updateAlternates();

    document.querySelectorAll("[data-i18n]").forEach(function (node) {
      var value = t(node.getAttribute("data-i18n"));
      if (value) {
        node.textContent = value;
      }
    });

    document.querySelectorAll("[data-i18n-aria]").forEach(function (node) {
      var value = t(node.getAttribute("data-i18n-aria"));
      if (value) {
        node.setAttribute("aria-label", value);
      }
    });

    document.querySelectorAll("[data-i18n-alt]").forEach(function (node) {
      var value = t(node.getAttribute("data-i18n-alt"));
      if (value) {
        node.alt = value;
      }
    });

    var menuLabel = document.querySelector(".nav-toggle .visually-hidden");
    if (menuLabel) {
      menuLabel.setAttribute("data-open-label", t("nav.open"));
      menuLabel.setAttribute("data-close-label", t("nav.close"));
      var expanded = document.querySelector(".nav-toggle");
      var open = expanded && expanded.getAttribute("aria-expanded") === "true";
      menuLabel.textContent = open ? t("nav.close") : t("nav.open");
    }

    document.querySelectorAll("[data-set-lang]").forEach(function (button) {
      var selected = button.getAttribute("data-set-lang") === code;
      button.setAttribute("aria-checked", selected ? "true" : "false");
    });

    var currentLabel = document.querySelector(".lang-current");
    if (currentLabel) {
      currentLabel.textContent = NAMES[code];
      currentLabel.lang = code;
    }
  }

  function notify() {
    listeners.forEach(function (listener) {
      listener(current);
    });
  }

  function setLang(code, manual) {
    var next = normalize(code);
    if (!next) {
      return false;
    }
    current = next;
    apply(next);
    if (manual) {
      writeSaved(next);
      writeUrl(next);
    }
    notify();
    return true;
  }

  function bindSwitcher() {
    var root = document.querySelector(".lang-switch");
    var toggle = document.getElementById("lang-toggle");
    var list = document.getElementById("lang-list");
    if (!root || !toggle || !list) {
      return;
    }

    function options() {
      return Array.prototype.slice.call(list.querySelectorAll("[data-set-lang]"));
    }

    function isOpen() {
      return toggle.getAttribute("aria-expanded") === "true";
    }

    function closeLang(focusToggle) {
      list.hidden = true;
      toggle.setAttribute("aria-expanded", "false");
      if (focusToggle) {
        toggle.focus();
      }
    }

    function openLang() {
      document.dispatchEvent(new CustomEvent("mbg-lang-open"));
      list.hidden = false;
      toggle.setAttribute("aria-expanded", "true");
      var selected = list.querySelector("[aria-checked='true']") || options()[0];
      if (selected) {
        selected.focus();
      }
    }

    toggle.addEventListener("click", function () {
      if (isOpen()) {
        closeLang(false);
      } else {
        openLang();
      }
    });

    toggle.addEventListener("keydown", function (event) {
      if (event.key === "ArrowDown" || event.key === "ArrowUp") {
        event.preventDefault();
        if (!isOpen()) {
          openLang();
        }
        var items = options();
        if (!items.length) {
          return;
        }
        if (event.key === "ArrowUp") {
          items[items.length - 1].focus();
        }
      }
      if (event.key === "Escape" && isOpen()) {
        event.preventDefault();
        closeLang(true);
      }
    });

    list.addEventListener("click", function (event) {
      var choice = event.target.closest("[data-set-lang]");
      if (!choice) {
        return;
      }
      setLang(choice.getAttribute("data-set-lang"), true);
      closeLang(true);
    });

    list.addEventListener("keydown", function (event) {
      var items = options();
      var index = items.indexOf(document.activeElement);
      if (event.key === "ArrowDown" && items.length) {
        event.preventDefault();
        items[(index + 1) % items.length].focus();
      }
      if (event.key === "ArrowUp" && items.length) {
        event.preventDefault();
        items[(index - 1 + items.length) % items.length].focus();
      }
      if (event.key === "Home" && items.length) {
        event.preventDefault();
        items[0].focus();
      }
      if (event.key === "End" && items.length) {
        event.preventDefault();
        items[items.length - 1].focus();
      }
      if (event.key === "Escape") {
        event.preventDefault();
        closeLang(true);
      }
      if ((event.key === "Enter" || event.key === " ") && index !== -1) {
        event.preventDefault();
        items[index].click();
      }
    });

    root.addEventListener("focusout", function () {
      window.setTimeout(function () {
        if (!root.contains(document.activeElement)) {
          closeLang(false);
        }
      }, 0);
    });

    document.addEventListener("click", function (event) {
      if (!root.contains(event.target)) {
        closeLang(false);
      }
    });

    document.addEventListener("mbg-nav-open", function () {
      closeLang(false);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && isOpen()) {
        closeLang(true);
      }
    });
  }

  function start() {
    var params = null;
    try {
      params = new URLSearchParams(window.location.search);
    } catch (error) {
      params = null;
    }
    var urlValue = params ? params.get("lang") : null;
    current = choose(urlValue, readSaved(), browserLanguages());
    if (typeof urlValue === "string" && normalize(urlValue) === current && urlValue.trim().toLowerCase() !== current) {
      writeUrl(current);
    }
    apply(current);
    bindSwitcher();
  }

  window.SiteI18n = {
    codes: CODES,
    names: NAMES,
    messages: MESSAGES,
    choose: choose,
    normalize: normalize,
    t: t,
    shotAlt: shotAlt,
    galleryCount: galleryCount,
    getLang: function () {
      return current;
    },
    setLang: setLang,
    onChange: function (listener) {
      listeners.push(listener);
    },
    start: start
  };

  start();
})();
