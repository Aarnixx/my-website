const translations = {
    fi: {
    home: "Koti",
    contact: "Yhteydenotto",
    gallery: "Galleria",
    lang: "EN",
    latest: "Kootut valinnat",
    other: "Muut työt",
    heroTitle: "Tervetuloa sivuilleni!",
    heroParagraph: `Teen taidetta ihan vain siksi, että maailmasta tulisi hieman parempi paikka.
Uskon, että ihminen tarvitsee ympärilleen taidetta – oli se sitten kuvataidetta, musiikkia, runoutta – voidakseen hyvin.
Taiteilijana minua kuvaa monipuolisuus ja vapaus tehdä sitä, mikä milloinkin sattuu huvittamaan.
Minulla on aina monta teosta keskeneräisenä.
Maalaan akvarelleilla, akryyleillä ja öljyllä; piirrän lyijykynällä, hiilellä, musteella sekä kuiva- ja öljypastelliliiduilla.
Pidän myös kolmiulotteisten teosten tekemisestä, esimerkiksi rautalangasta, paperimassasta, savesta tai puusta.
Yhteen tekotapaan kyllästyttyäni vaihdan hetkeksi toiseen.
Koska en tee taidetta elääkseni, paineita tehdä tietynlaisia teoksia ei ole.
Teen sitä, mistä nautin ja mikä tuottaa minulle iloa.
Voin toteuttaa kummallisimmatkin ideani halutessani.
Näen mahdottoman paljon unia, ja usein ideat teoksiini tulevatkin unistani.
Taiteessa minua on aina kiehtoneet ihmiset.
Ihmistä piirtäessäni ja maalatessani minua hämmästyttää, miten pienestä viivasta tai valosta voi olla kiinni teoksen tunnelma ja tunne.
Ihan kuin oikeassa elämässä, myös taideteoksissa pieni kulman kohotus tai juonne suun ympärillä voi merkitä paljon.
Toinen minua kiehtova asia on värit ja valot.
Värien sekoittaminen ja juuri oikean sävyn löytäminen on uskomattoman ihanaa ja mielenkiintoista.
Valot ja varjot tuovat kuviin kolmiulotteisuutta ja syvyyttä.
Koska haluan kehittyä taiteilijana ja oppia uutta, olen opiskellut lukuisilla taidekursseilla, vuoden yksityisessä taidekoulussa sekä suorittanut kuvataiteen perusopinnot Helsingin kesäyliopistossa.
Kaikki teokseni ovat myytävänä, joten jos joku niistä kiinnostaa, ole yhteydessä yhteystietolomakkeen kautta tai vaihtoehtoisesti viestillä Instagram-tilini kautta.`,
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
    },
    contactTitle: "Yhteydenotto",
    name: "Nimi",
    email: "Sähköposti",
    message: "Viesti",
    send: "Lähetä",
    successMsg: "Viesti lähetettiin onnistuneesti!",
    errorMsg: "Jokin meni pieleen. Yritä uudelleen."
  },
  
  
  
  en: {
    home: "Home",
    contact: "Contact",
    gallery: "Gallery",
    lang: "FI",
    latest: "Curated picks",
    other: "Other Works",
    heroTitle: "Welcome to my website!",
    heroParagraph: `I create art simply to make the world a slightly better place.
I believe that people need art around them—whether it’s visual art, music, or poetry—in order to feel well.
As an artist, I am characterized by versatility and the freedom to do whatever I feel like at any given moment.
I always have several works in progress.
I paint with watercolors, acrylics, and oils; I draw with pencil, charcoal, ink, as well as dry and oil pastels.
I also enjoy creating three-dimensional works, for example using wire, papier-mâché, clay, or wood.
When I get bored with one technique, I switch to another for a while.
Since I don’t make art to earn a living, there’s no pressure to create a certain type of work.
I do what I enjoy and what brings me joy.
I can realize even my most unusual ideas if I want to.
I dream an incredible amount, so often the ideas for my works come from my dreams.
I have always been fascinated by people in art.
When I draw or paint a person, I am always amazed at how the mood and emotion conveyed by a work can hinge on just a tiny line or a touch of light.
Just like in real life, in artworks a small lift of an eyebrow or a line around the mouth can mean a lot.
Another thing that fascinates me is colors and light.
Mixing colors and finding the exact right shade is incredibly wonderful and interesting.
Lights and shadows, in turn, give images three-dimensionality and depth.
Because I want to develop as an artist and learn new things, I have taken numerous art courses, spent a year in a private art school, and completed the basic studies of visual arts at Helsinki Summer University.
All my works are for sale, so if any of them interest you, please get in touch via the contact form, or alternatively via a message on my Instagram account.`,
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
    },
    contactTitle: "Contact",
    name: "Name",
    email: "Email",
    message: "Message",
    send: "Send",
    successMsg: "Message sent successfully!",
    errorMsg: "Something went wrong. Please try again."
  }
};

let currentLang = localStorage.getItem("lang") || "en";

const sections = {
  home: document.getElementById("home"),
  gallery: document.getElementById("gallery"),
  contact: document.getElementById("contact")
};


const homeBtn = document.getElementById("home-btn");
const galleryBtn = document.getElementById("gallery-btn");
const contactBtn = document.getElementById("contact-btn");
const langBtn = document.getElementById("lang-btn");
const latestLabel = document.getElementById("latest-works-label");
const otherLabel = document.getElementById("other-works-label");
const heroTitle = document.getElementById("hero-title");
const heroParagraph = document.getElementById("hero-paragraph");
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

const contactTitle = document.getElementById("contact-title");
const labelName = document.getElementById("label-name");
const labelEmail = document.getElementById("label-email");
const labelMessage = document.getElementById("label-message");
const sendBtn = document.getElementById("send-btn");
const formStatus = document.getElementById("form-status");
const formError = document.getElementById("form-error");

function updateLanguage() {
  [homeBtn, galleryBtn, contactBtn, langBtn].forEach((btn, idx) => {
    if (!btn) return;
    const text = idx === 0 ? translations[currentLang].home :
                 idx === 1 ? translations[currentLang].gallery :
                 idx === 2 ? translations[currentLang].contact :
                 translations[currentLang].lang;
    btn.textContent = text;
  });

  if (latestLabel) latestLabel.textContent = translations[currentLang].latest;
  if (otherLabel) otherLabel.textContent = translations[currentLang].other;
  if (heroTitle) heroTitle.textContent = translations[currentLang].heroTitle;
  if (heroParagraph) {
    heroParagraph.innerHTML = "";
    translations[currentLang].heroParagraph.split("\n")
      .map(p => p.trim()).filter(p => p).forEach(p => {
        const para = document.createElement("p");
        para.textContent = p;
        heroParagraph.appendChild(para);
      });
  }

  Object.keys(categoryLabels).forEach(key => {
    if (categoryLabels[key]) categoryLabels[key].textContent = translations[currentLang].categories[key];
  });

  if (contactTitle) contactTitle.textContent = translations[currentLang].contactTitle;
  if (labelName) labelName.textContent = translations[currentLang].name;
  if (labelEmail) labelEmail.textContent = translations[currentLang].email;
  if (labelMessage) labelMessage.textContent = translations[currentLang].message;
  if (sendBtn) sendBtn.textContent = translations[currentLang].send;
  if (formStatus) formStatus.textContent = translations[currentLang].successMsg;
  if (formError) formError.textContent = translations[currentLang].errorMsg;
}

updateLanguage();

if (langBtn) {
  langBtn.addEventListener("click", () => {
    currentLang = currentLang === "en" ? "fi" : "en";
    localStorage.setItem("lang", currentLang);
    updateLanguage();
  });
}

if (homeBtn) homeBtn.addEventListener("click", () => sections.home?.scrollIntoView({behavior:"smooth"}));
if (galleryBtn) galleryBtn.addEventListener("click", () => sections.gallery?.scrollIntoView({behavior:"smooth"}));
if (contactBtn) contactBtn.addEventListener("click", () => sections.contact?.scrollIntoView({behavior:"smooth"}));

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

document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".grid-gallery img, .carousel img");

  images.forEach(img => {
    img.addEventListener("click", () => {
      const oldOverlay = document.getElementById("overlay-bg");
      if (oldOverlay) oldOverlay.remove();

      document.body.style.overflow = "hidden";

      const overlay = document.createElement("div");
      overlay.id = "overlay-bg";
      overlay.style.position = "fixed";
      overlay.style.top = "0";
      overlay.style.left = "0";
      overlay.style.width = "100%";
      overlay.style.height = "100%";
      overlay.style.background = "rgba(0,0,0,0.65)";
      overlay.style.backdropFilter = "blur(6px)";
      overlay.style.zIndex = "1999";
      overlay.style.display = "flex";
      overlay.style.alignItems = "center";
      overlay.style.justifyContent = "center";
      overlay.style.animation = "fadeIn 0.3s ease";

      const panel = document.createElement("div");
      panel.id = "img-panel";
      panel.style.background = "#fff";
      panel.style.padding = "24px";
      panel.style.borderRadius = "14px";
      panel.style.position = "relative";
      panel.style.maxWidth = "80%";
      panel.style.maxHeight = "80%";
      panel.style.overflow = "auto";
      panel.style.display = "flex";
      panel.style.flexDirection = "column";
      panel.style.alignItems = "center";
      panel.style.boxShadow = "0 0 40px rgba(0,0,0,0.6)";
      panel.style.animation = "scaleIn 0.25s ease";

      const fullImg = document.createElement("img");
      fullImg.src = img.src;
      fullImg.style.maxWidth = "100%";
      fullImg.style.maxHeight = "65vh";
      fullImg.style.objectFit = "contain";
      fullImg.style.borderRadius = "10px";

      const info = document.createElement("p");
      info.textContent = img.dataset.info || "";
      info.style.marginTop = "14px";
      info.style.color = "#333";
      info.style.textAlign = "center";
      info.style.fontSize = "16px";
      info.style.lineHeight = "1.4";

      panel.appendChild(fullImg);
      panel.appendChild(info);
      overlay.appendChild(panel);
      document.body.appendChild(overlay);

      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
          overlay.remove();
          document.body.style.overflow = "auto";
        }
      });
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && document.getElementById("overlay-bg")) {
          overlay.remove();
          document.body.style.overflow = "auto";
        }
      });
    });
  });
});

const style = document.createElement("style");
style.textContent = `
@keyframes fadeIn {
  from { opacity: 0 }
  to { opacity: 1 }
}
@keyframes scaleIn {
  from { transform: scale(0.9); opacity: 0 }
  to { transform: scale(1); opacity: 1 }
}`;
document.head.appendChild(style);
