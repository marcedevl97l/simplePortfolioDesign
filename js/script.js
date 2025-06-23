window.addEventListener("scroll", () => {
  const hero = document.querySelector(".hero-section");
  if (window.scrollY > 50) {
    hero.style.opacity = "0.95";
  } else {
    hero.style.opacity = "1";
  }
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;

const animateDarkMode = () => {
  body.classList.add('darkmode-anim');
  setTimeout(() => {
    body.classList.remove('darkmode-anim');
    body.classList.add('darkmode-anim-end');
    setTimeout(() => {
      body.classList.remove('darkmode-anim-end');
    }, 1000);
  }, 10);
};

const enableDarkMode = () => {
  body.classList.add("dark-mode");
  localStorage.setItem("darkMode", "enabled");
  darkModeToggle.textContent = "☀️";
  animateDarkMode();
};

const disableDarkMode = () => {
  body.classList.remove("dark-mode");
  localStorage.setItem("darkMode", "disabled");
  darkModeToggle.textContent = "🌙";
  animateDarkMode();
};

// Comprobar la preferencia del usuario al cargar la página
if (localStorage.getItem("darkMode") === "enabled") {
  enableDarkMode();
}

darkModeToggle.addEventListener("click", () => {
  if (localStorage.getItem("darkMode") !== "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

// --- Modal de Certificaciones ---
const certs = {
  frontend: {
    img: "images/cert-frontend.jpg",
    desc: "Administración de Bases de Datos y Ciberseguridad (2025).",
    pdf: "certs/cert-frontend.pdf",
  },
  responsive: {
    img: "/images/intro admin linux.jpg",
    desc: "Introduccion a la administracion de servidores Linux (2025).",
    pdf: "assets/pdf/Introduccion a la administracion de servidores Linux.pdf",
  },
  ccna: {
    img: "/images/manejo de recursos.jpg",
    desc: "Administracion de servidores manejo de recursos (2025).",
    pdf: "assets/pdf/Administracion de servidores manejo de recursos.pdf",
  },
};

const certModal = document.getElementById("cert-modal");
const certImg = document.getElementById("cert-img");
const certDesc = document.getElementById("cert-desc");
const certPdf = document.getElementById("cert-pdf");
const certClose = document.querySelector(".cert-modal-close");

// Abrir modal
Array.from(document.querySelectorAll(".view-cert-btn")).forEach((btn) => {
  btn.addEventListener("click", function () {
    const certKey = this.getAttribute("data-cert");
    const cert = certs[certKey];
    if (cert) {
      certImg.src = cert.img;
      certDesc.textContent = cert.desc;
      certPdf.href = cert.pdf;
      certModal.style.display = "flex";
      // Forzar reflow para que la animación funcione siempre
      void certModal.offsetWidth;
      certModal.classList.add("active");
    }
  });
});
// Cerrar modal
certClose.addEventListener("click", () => {
  certModal.classList.remove("active");
  setTimeout(() => {
    certModal.style.display = "none";
  }, 300);
});
// Cerrar al hacer click fuera del contenido
certModal.addEventListener("click", (e) => {
  if (e.target === certModal) {
    certModal.classList.remove("active");
    setTimeout(() => {
      certModal.style.display = "none";
    }, 300);
  }
});

// Cerrar con tecla ESC
window.addEventListener("keydown", (e) => {
  if (
    certModal.style.display === "flex" &&
    (e.key === "Escape" || e.key === "Esc")
  ) {
    certModal.classList.remove("active");
    setTimeout(() => {
      certModal.style.display = "none";
    }, 300);
  }
});
