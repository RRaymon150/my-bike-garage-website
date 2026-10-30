(function () {
  var site = window.SITE || {};
  var motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

  setupMenu();
  setupContacts(site);
  setupStores(site);
  setupGallery(Array.isArray(site.screenshots) ? site.screenshots : []);
  setupLightbox();

  function setupMenu() {
    var button = document.querySelector(".nav-toggle");
    var menu = document.getElementById("menu");
    if (!button || !menu) {
      return;
    }

    var label = button.querySelector(".visually-hidden");
    var desktop = window.matchMedia("(min-width: 761px)");

    function setOpen(open) {
      menu.classList.toggle("is-open", open);
      button.setAttribute("aria-expanded", open ? "true" : "false");
      if (label) {
        label.textContent = open ? label.getAttribute("data-close-label") : label.getAttribute("data-open-label");
      }
    }

    button.addEventListener("click", function () {
      var open = button.getAttribute("aria-expanded") !== "true";
      setOpen(open);
      if (open) {
        var first = menu.querySelector("a");
        if (first) {
          first.focus();
        }
      }
    });

    menu.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        setOpen(false);
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && button.getAttribute("aria-expanded") === "true") {
        setOpen(false);
        button.focus();
      }
    });

    function onDesktopChange(event) {
      if (event.matches) {
        setOpen(false);
      }
    }

    if (desktop.addEventListener) {
      desktop.addEventListener("change", onDesktopChange);
    }
  }

  function setupContacts(config) {
    var email = safeEmail(config.email);
    var privacy = safeHttps(config.privacyUrl);
    var play = safeHttps(config.playStoreUrl);

    if (email) {
      document.querySelectorAll("[data-contact='email']").forEach(function (link) {
        link.href = "mailto:" + email;
        link.textContent = email;
      });
    }

    if (privacy) {
      document.querySelectorAll("[data-contact='privacy']").forEach(function (link) {
        link.href = privacy;
      });
    }

    if (play) {
      document.querySelectorAll("[data-store='google']").forEach(function (link) {
        link.href = play;
      });
    }
  }

  function setupStores(config) {
    var apple = safeHttps(config.appStoreUrl);
    if (!apple) {
      return;
    }

    document.querySelectorAll("[data-download-note]").forEach(function (note) {
      note.textContent = "Scegli lo store del tuo telefono.";
    });

    document.querySelectorAll("[data-store='apple']").forEach(function (node) {
      var link = document.createElement("a");
      link.className = "store";
      link.href = apple;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.dataset.store = "apple";
      link.innerHTML =
        '<span class="store-kicker">Disponibile su</span>' +
        '<span class="store-name">App Store</span>' +
        '<span class="visually-hidden"> (si apre in una nuova scheda)</span>';
      node.replaceWith(link);
    });
  }

  function setupGallery(items) {
    var empty = document.getElementById("gallery-empty");
    var gallery = document.getElementById("gallery");
    var track = gallery ? gallery.querySelector(".gallery-track") : null;
    var count = gallery ? gallery.querySelector(".gallery-count") : null;
    var prev = gallery ? gallery.querySelector("[data-gallery='prev']") : null;
    var next = gallery ? gallery.querySelector("[data-gallery='next']") : null;
    if (!empty || !gallery || !track || !count || !prev || !next) {
      return;
    }

    var slides = [];

    var added = 0;
    items.forEach(function (item) {
      var src = safeImageSrc(item && item.src);
      var alt = cleanText(item && item.alt);
      if (!src || !alt) {
        return;
      }

      var button = document.createElement("button");
      button.type = "button";
      button.className = "shot";

      button.setAttribute("aria-label", alt);

      var image = document.createElement("img");
      image.alt = alt;
      image.decoding = "async";
      var width = positiveInteger(item && item.width);
      var height = positiveInteger(item && item.height);
      if (width && height) {
        image.width = width;
        image.height = height;
      }
      if (added === 0) {
        image.setAttribute("fetchpriority", "high");
      } else {
        image.loading = "lazy";
      }
      added += 1;
      image.addEventListener("load", refresh);
      image.addEventListener("error", function () {
        button.remove();
        refresh();
      });
      image.src = src;
      button.appendChild(image);
      track.appendChild(button);
    });

    function slideList() {
      return Array.prototype.slice.call(track.querySelectorAll(".shot"));
    }

    function slideLeft(slide) {
      return slide.getBoundingClientRect().left - track.getBoundingClientRect().left + track.scrollLeft;
    }

    function nearestIndex() {
      var list = slideList();
      if (!list.length) {
        return 0;
      }
      var edge = track.scrollLeft;
      var best = 0;
      var bestDistance = Infinity;
      list.forEach(function (slide, index) {
        var distance = Math.abs(slideLeft(slide) - edge);
        if (distance < bestDistance) {
          bestDistance = distance;
          best = index;
        }
      });
      return best;
    }

    function refresh() {
      slides = slideList();
      var hasSlides = slides.length > 0;
      empty.hidden = hasSlides;
      gallery.hidden = !hasSlides;
      if (!hasSlides) {
        count.textContent = "";
        return;
      }
      var index = nearestIndex();
      var trackRect = track.getBoundingClientRect();
      var firstRect = slides[0].getBoundingClientRect();
      var lastRect = slides[slides.length - 1].getBoundingClientRect();
      count.textContent = "Immagine " + (index + 1) + " di " + slides.length;
      prev.disabled = firstRect.left >= trackRect.left - 2;
      next.disabled = lastRect.right <= trackRect.right + 2;
    }

    function go(step) {
      var list = slideList();
      if (!list.length) {
        return;
      }
      var index = nearestIndex() + step;
      if (index < 0) {
        index = 0;
      }
      if (index > list.length - 1) {
        index = list.length - 1;
      }
      track.scrollTo({
        left: slideLeft(list[index]),
        behavior: motionQuery.matches ? "auto" : "smooth"
      });
    }

    prev.addEventListener("click", function () {
      go(-1);
    });
    next.addEventListener("click", function () {
      go(1);
    });
    track.addEventListener("scroll", refresh, { passive: true });
    window.addEventListener("resize", refresh);
    track.addEventListener("keydown", function (event) {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        go(1);
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        go(-1);
      }
    });

    refresh();
  }

  function setupLightbox() {
    var dialog = document.getElementById("lightbox");
    var gallery = document.getElementById("gallery");
    if (!dialog || !gallery || typeof dialog.showModal !== "function") {
      return;
    }

    var image = dialog.querySelector("img");
    var close = dialog.querySelector("[data-lightbox='close']");

    gallery.addEventListener("click", function (event) {
      var shot = event.target.closest(".shot");
      if (!shot) {
        return;
      }
      var source = shot.querySelector("img");
      if (!source || !image) {
        return;
      }
      image.src = source.currentSrc || source.src;
      image.alt = source.alt;
      dialog.showModal();
    });

    if (close) {
      close.addEventListener("click", function () {
        dialog.close();
      });
    }

    dialog.addEventListener("click", function (event) {
      if (event.target === dialog) {
        dialog.close();
      }
    });

    dialog.addEventListener("close", function () {
      if (image) {
        image.removeAttribute("src");
        image.alt = "";
      }
    });
  }

  function safeHttps(value) {
    if (typeof value !== "string") {
      return "";
    }
    var text = value.trim();
    if (!text) {
      return "";
    }
    try {
      var url = new URL(text);
      if (url.protocol !== "https:") {
        return "";
      }
      return url.href;
    } catch (error) {
      return "";
    }
  }

  function safeEmail(value) {
    if (typeof value !== "string") {
      return "";
    }
    var text = value.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text)) {
      return "";
    }
    return text;
  }

  function safeImageSrc(value) {
    if (typeof value !== "string") {
      return "";
    }
    var text = value.trim();
    if (!text || text.charAt(0) === "/" || text.indexOf("\\") !== -1 || text.indexOf("//") === 0) {
      return "";
    }
    if (/^[a-z][a-z0-9+.-]*:/i.test(text)) {
      return "";
    }
    if (text.split("/").indexOf("..") !== -1) {
      return "";
    }
    return text;
  }

  function positiveInteger(value) {
    var number = Number(value);
    if (!Number.isFinite(number) || number < 1) {
      return 0;
    }
    return Math.round(number);
  }

  function cleanText(value) {
    if (typeof value !== "string") {
      return "";
    }
    return value.trim();
  }
})();
