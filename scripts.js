const translations = {
  en: {
    home: "Home",
    contact: "Contact",
    gallery: "Gallery",
    lang: "FI",
    latest: "Curated picks",
    other: "Other Works",
    categories: {
      oilCanvas: "Oil on Canvas",
      charcoalPastel: "Charcoal and Pastel on Paper",
      acrylicWatercolor: "Acrylic on Watercolor Paper",
      watercolorInk: "Watercolor and Ink on Paper",
      oilPastel: "Oil Pastel on Paper",
      acrylicPaper: "Acrylic on Paper",
      charcoalOilPastel: "Charcoal and Oil Pastel on Paper",
      inkInktense: "Ink and Inktense Pencils on Paper",
      pastelPaper: "Pastel on Paper",
      charcoalChalk: "Charcoal and White Chalk on Paper",
      inktense: "Inktense Pencils on Paper",
      charcoal: "Charcoal on Paper",
      pencil: "Pencil on Paper",
      inkPen: "Ink Pen on Paper"
    }
  },
  fi: {
    home: "Koti",
    contact: "Yhteydenotto",
    gallery: "Galleria",
    lang: "EN",
    latest: "Kootut valinnat",
    other: "Muut työt",
    categories: {
      oilCanvas: "Öljy kankaalle",
      charcoalPastel: "Hiili ja pastelli paperille",
      acrylicWatercolor: "Akryyli akvarellipaperille",
      watercolorInk: "Akvarelli ja muste paperille",
      oilPastel: "Öljypastelliliitu paperille",
      acrylicPaper: "Akryyli paperille",
      charcoalOilPastel: "Hiili ja öljypastelli paperille",
      inkInktense: "Muste ja inktense-kynät paperille",
      pastelPaper: "Pastelli paperille",
      charcoalChalk: "Hiili ja valkoliitu paperille",
      inktense: "Inktense-kynät paperille",
      charcoal: "Hiili paperille",
      pencil: "Lyijykynä paperille",
      inkPen: "Tussi paperille"
    }
  }
};

let currentLang = "en";

const homeBtn = document.getElementById("home-btn");
const contactBtn = document.getElementById("contact-btn");
const galleryBtn = document.getElementById("gallery-btn");
const langBtn = document.getElementById("lang-btn");
const latestLabel = document.getElementById("latest-works-label");
const otherLabel = document.getElementById("other-works-label");

const categoryLabels = {
  oilCanvas: document.getElementById("cat-oilCanvas"),
  charcoalPastel: document.getElementById("cat-charcoalPastel"),
  acrylicWatercolor: document.getElementById("cat-acrylicWatercolor"),
  watercolorInk: document.getElementById("cat-watercolorInk"),
  oilPastel: document.getElementById("cat-oilPastel"),
  acrylicPaper: document.getElementById("cat-acrylicPaper"),
  charcoalOilPastel: document.getElementById("cat-charcoalOilPastel"),
  inkInktense: document.getElementById("cat-inkInktense"),
  pastelPaper: document.getElementById("cat-pastelPaper"),
  charcoalChalk: document.getElementById("cat-charcoalChalk"),
  inktense: document.getElementById("cat-inktense"),
  charcoal: document.getElementById("cat-charcoal"),
  pencil: document.getElementById("cat-pencil"),
  inkPen: document.getElementById("cat-inkPen")
};

if (langBtn) {
  langBtn.addEventListener("click", () => {
    currentLang = currentLang === "en" ? "fi" : "en";
    updateLanguage();
  });
}

function updateLanguage() {
  if (homeBtn) homeBtn.textContent = translations[currentLang].home;
  if (contactBtn) contactBtn.textContent = translations[currentLang].contact;
  if (galleryBtn) galleryBtn.textContent = translations[currentLang].gallery;
  if (langBtn) langBtn.textContent = translations[currentLang].lang;

  if (latestLabel) latestLabel.textContent = translations[currentLang].latest;
  if (otherLabel) otherLabel.textContent = translations[currentLang].other;

  Object.keys(categoryLabels).forEach(key => {
    if (categoryLabels[key]) {
      categoryLabels[key].textContent = translations[currentLang].categories[key];
    }
  });
}
updateLanguage();

if (homeBtn) {
  homeBtn.addEventListener("click", () => {
    window.location.href = "index.html";
  });
}
if (galleryBtn) {
  galleryBtn.addEventListener("click", () => {
    window.location.href = "gallery.html";
  });
}
if (contactBtn) {
  contactBtn.addEventListener("click", () => {
    window.location.href = "contact.html";
  });
}

(function setupCarousel() {
  const rotator = document.getElementById("rotator") || document.getElementById("carousel");
  if (!rotator) return;

  const panels = rotator.querySelectorAll(".panel");
  const panelCount = panels.length || 1;
  const theta = 360 / panelCount;

  const css = getComputedStyle(document.documentElement);
  const cssPanelWidth = css.getPropertyValue("--panel-width").trim();
  const numericPanelWidth = cssPanelWidth ? parseFloat(cssPanelWidth) : 480;
  const panelWidth = numericPanelWidth || 480;

  const cssOverlap = css.getPropertyValue("--overlap-factor").trim();
  const overlapFactor = cssOverlap ? parseFloat(cssOverlap) : 1;
  const baseRadius = Math.round((panelWidth / 2) / Math.tan(Math.PI / panelCount));
  const radius = Math.round(baseRadius * overlapFactor);

  panels.forEach((panel, i) => {
    const angle = theta * i;
    panel.style.transform = `translate(-50%,-50%) rotateY(${angle}deg) translateZ(${radius}px)`;
    panel.style.backfaceVisibility = "hidden";
    panel.style.webkitBackfaceVisibility = "hidden";
    panel.style.transformOrigin = "center center";
  });
})();

document.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;
  if (window.scrollY > 10) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
const form = document.querySelector(".contact-form");
const statusMsg = document.getElementById("form-status");
const errorMsg = document.getElementById("form-error");

if (form) {
  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const formData = new FormData(form);
    const response = await fetch(form.action, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" }
    });

    if (response.ok) {
      statusMsg.style.display = "block";
      errorMsg.style.display = "none";
      form.reset();
    } else {
      statusMsg.style.display = "none";
      errorMsg.style.display = "block";
    }
  });
}
