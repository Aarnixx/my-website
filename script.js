const translations = {
  fi: {
    home: "Etusivu",
    gallery: "Galleria",
    contact: "Yhteystiedot",
    welcome: "Tervetuloa Virpi Annanollin taidesivulle!",
    instagramFeed: "Lähiajan Instagram-julkaisuja",
    section1: "Uusimmat teokset",
    section2: "Luonnokset",
    section3: "Valokuvat",
    section4: "Sekalaiset",
    nameLabel: "Nimi",
    emailLabel: "Sähköposti",
    messageLabel: "Viesti",
    sendButton: "Lähetä",
    namePh: "Kirjoita nimesi",
    emailPh: "esimerkki@email.com",
    messagePh: "Kirjoita viestisi tähän"
  },
  en: {
    home: "Home",
    gallery: "Gallery",
    contact: "Contact",
    welcome: "Welcome to Virpi Annanolli’s art page!",
    instagramFeed: "Recent Instagram posts",
    section1: "Latest Works",
    section2: "Sketches",
    section3: "Photography",
    section4: "Miscellaneous",
    nameLabel: "Name",
    emailLabel: "Email",
    messageLabel: "Message",
    sendButton: "Send",
    namePh: "Enter your name",
    emailPh: "example@email.com",
    messagePh: "Write your message here"
  }
};

function setLang(lang) {
  document.documentElement.lang = lang;
  localStorage.setItem("lang", lang);
  const toggle = document.getElementById("langToggle");
  if (toggle) toggle.textContent = lang === "fi" ? "EN" : "FI";

  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");
    const value = translations[lang][key];
    if (!value) return;
    if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
      el.setAttribute("placeholder", value);
    } else {
      el.textContent = value;
    }
  });
}

function initLang() {
  const saved = localStorage.getItem("lang") || "fi";
  setLang(saved);
  const toggle = document.getElementById("langToggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      const next = document.documentElement.lang === "fi" ? "en" : "fi";
      setLang(next);
    });
  }
}

function initPageTransitions() {
  requestAnimationFrame(() => document.body.classList.add("show"));

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); });
  }, { threshold: 0.2 });
  document.querySelectorAll(".fade-in").forEach(el => io.observe(el));

  document.querySelectorAll("a[href$='.html']").forEach(a => {
    a.addEventListener("click", (e) => {
      if (e.metaKey || e.ctrlKey || e.shiftKey || a.target === "_blank" || a.getAttribute("href").startsWith("#")) return;
      e.preventDefault();
      const href = a.getAttribute("href");
      document.body.classList.remove("show");
      setTimeout(() => { window.location.href = href; }, 450);
    });
  });
}

function initCarousels() {
  const carousels = document.querySelectorAll(".gallery-carousel");

  carousels.forEach((carousel, idx) => {
    const track = carousel.querySelector(".track");
    if (!track) return;

    const dirAttr = (carousel.dataset.direction || (idx % 2 === 0 ? "right" : "left")).toLowerCase();
    const delay = Math.max(1200, parseInt(carousel.dataset.speed, 10) || (2000 + idx * 800));
    const animMs = 2500;

    const FADE_START = 0.05;
    const FADE_OUT_PORTION = 0.5;
    const FADE_IN_PORTION = 0.5;

    const onTransformEnd = (el, cb) => {
      const h = (e) => {
        const prop = e.propertyName || "";
        if (e.target === el && (prop === "transform" || prop === "-webkit-transform")) {
          el.removeEventListener("transitionend", h);
          cb();
        }
      };
      el.addEventListener("transitionend", h);
    };

    function slideWidth() {
      const first = track.querySelector(".placeholder");
      if (!first) return 0;
      const gap = parseFloat(getComputedStyle(track).gap || "16");
      return first.offsetWidth + gap;
    }

    function fadeTo(el, to, ms, delayMs = 0) {
      if (!el) return;
      el.style.transition = "none";
      void el.offsetWidth;
      setTimeout(() => {
        el.style.transition = `opacity ${ms}ms ease-in-out`;
        void el.offsetWidth;
        el.style.opacity = String(to);
      }, delayMs);
    }

    function stepLeft(cb) {
      const w = slideWidth();
      if (!w) return;

      const exiting = track.firstElementChild;
      const fadeStartMs = animMs * FADE_START;
      const fadeOutMs = animMs * FADE_OUT_PORTION;

      track.style.transition = `transform ${animMs}ms ease-in-out`;
      track.style.transform = `translateX(-${w}px)`;

      fadeTo(exiting, 0, fadeOutMs, fadeStartMs);

      onTransformEnd(track, () => {
        track.style.transition = "none";
        track.appendChild(track.firstElementChild);
        track.style.transform = "translateX(0)";
        const appear = track.lastElementChild;
        appear.style.opacity = "0";
        requestAnimationFrame(() => fadeTo(appear, 1, animMs * FADE_IN_PORTION, 0));
        if (cb) cb();
      });
    }

    function stepRight(cb) {
      const w = slideWidth();
      if (!w) return;

      const exiting = track.lastElementChild;
      const fadeStartMs = animMs * FADE_START;
      const fadeOutMs = animMs * FADE_OUT_PORTION;

      track.style.transition = `transform ${animMs}ms ease-in-out`;
      track.style.transform = `translateX(${w}px)`;

      fadeTo(exiting, 0, fadeOutMs, fadeStartMs);

      onTransformEnd(track, () => {
        track.style.transition = "none";
        const moved = track.lastElementChild;
        moved.style.transition = "none";
        moved.style.opacity = "0";
        track.insertBefore(moved, track.firstElementChild);
        track.style.transform = "translateX(0)";
        requestAnimationFrame(() => fadeTo(moved, 1, animMs * FADE_IN_PORTION, 0));
        if (cb) cb();
      });
    }

    function loop() {
      if (dirAttr === "left") {
        stepLeft(() => setTimeout(loop, delay));
      } else {
        stepRight(() => setTimeout(loop, delay));
      }
    }

    setTimeout(loop, delay);
  });
}

function ensureModal() {
  let modal = document.getElementById("imageModal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "imageModal";
    modal.className = "modal";
    modal.innerHTML = `
      <span class="close" aria-label="Sulje">&times;</span>
      <div class="modal-content" role="dialog" aria-modal="true">
        <img id="modalImg" src="" alt="">
        <div class="modal-text">
          <h2 id="modalTitle"></h2>
          <p id="modalDetails"></p>
        </div>
      </div>`;
    document.body.appendChild(modal);
  }
  return modal;
}

function initImageModal() {
  if (window.__imageModalInit) return;
  window.__imageModalInit = true;

  const modal = ensureModal();
  const imgEl = modal.querySelector("#modalImg");
  const titleEl = modal.querySelector("#modalTitle");
  const detailsEl = modal.querySelector("#modalDetails");
  const closeEl = modal.querySelector(".close");

  const openModal = (src, title, details, altText) => {
    imgEl.src = src || "";
    imgEl.alt = altText || title || "Teos";
    titleEl.textContent = title || "Teos";
    detailsEl.textContent = details || "";
    modal.style.display = "block";
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    imgEl.removeAttribute("src");
  };

  closeEl.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.style.display === "block") closeModal();
  });

  document.addEventListener("click", (e) => {
    const img = e.target.closest(".gallery-grid img, .gallery-carousel img");
    if (!img) return;

    const wrapper = img.closest(".art-card, .placeholder");
    const title = wrapper?.querySelector(".art-info h4")?.textContent?.trim() || "Teos";
    const details = wrapper?.querySelector(".art-info p")?.textContent?.trim() || "";
    const src = img.getAttribute("src");
    const altText = img.getAttribute("alt") || title;

    if (src) {
      e.preventDefault();
      openModal(src, title, details, altText);
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initLang();
  initPageTransitions();
  initCarousels();
  initImageModal();
});
