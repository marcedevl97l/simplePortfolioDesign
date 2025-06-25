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
  body.classList.add("darkmode-anim");
  setTimeout(() => {
    body.classList.remove("darkmode-anim");
    body.classList.add("darkmode-anim-end");
    setTimeout(() => {
      body.classList.remove("darkmode-anim-end");
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
  algorithms: {
    img: "/images/manejo de recursos.jpg",
    desc: "Administracion de servidores manejo de recursos (2025).",
    pdf: "assets/pdf/Administracion de servidores manejo de recursos.pdf",
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

const langToggle = document.getElementById("lang-toggle");
let currentLang = "es";

const translations = {
  es: {
    nav: ["Sobre mí", "Proyectos", "Conocimientos", "Contacto"],
    hero: '¡Hola! Soy Marcelo, un <span class="highlight-purple">desarrollador</span> con sede en Lima - Perú.',
    heroP1:
      'Me apasiona construir soluciones que sean <span class="highlight-pink">eficientes</span>, <span class="highlight-purple">robustas</span> y <span class="highlight-yellow">confiables</span>.<br />Soy un desarrollador con enfoque en <span class="highlight-red">Linux</span> y <span class="highlight-blue">DevOps</span>, comprometido con la automatización, la mejora continua y el uso inteligente de la tecnología para generar cambios reales.<br />Mi experiencia abarca desde la administración de servidores hasta la implementación de infraestructuras reproducibles, pipelines de CI/CD y prácticas de seguridad.<br />He trabajado en entornos que valoran la <span class="highlight-pink">adaptabilidad</span>, la <span class="highlight-yellow">transparencia</span> y la <span class="highlight-red">colaboración efectiva</span>, y estoy constantemente explorando nuevas herramientas que impulsen la eficiencia y el impacto en cada proyecto.',
    heroP2: "Actualmente estoy buscando un nuevo rol como desarrollador. <br />",
    linkedin: "Ver Linkedin",
    github: "Ver Github",
    whatsapp: "WhatsApp",
    proyectos: "Proyectos",
    proyectosDesc: "Algunos de los proyectos personales en los que he trabajado, y trabajo actualmente:",
    proyecto1: "Sitio web Selling Houses 🏠",
    proyecto1Desc: "Sitio web simple creado con Bootsrap.",
    proyecto2: "Sistema de Monitoreo con Prometheus + Grafana 📊",
    proyecto2Desc: "Pequeño proyecto para monitorear un servidor Ubuntu, que actualmente tiene montado un servidor minecraft.",
    proyecto3: "Scripts para Monitoreo de Recursos 📊",
    proyecto3Desc: "Scripts personalizables.",
    verGithub: "Ver en Github",
    visitar: "Visitar",
    enProgreso: "In proges..",
    estudios: "Estudios y Certificaciones",
    habilidades: "Habilidades Técnicas",
    derechos: "&copy; 2025 Marcelo Sebastian Reyes Montenegro. Todos los derechos reservados.",
    certs: [
      {
        title: "Administración de Bases de Datos y Ciberseguridad",
        inst: "SISE | 2024 - Presente",
        btn: "Visualizar",
      },
      {
        title: "Introduccion a la administracion de servidores Linux",
        inst: "Linux | 2025",
        btn: "Visualizar",
      },
      {
        title: "Administracion de servidores manejo de recursos",
        inst: "Platzi | 2025",
        btn: "Visualizar",
      },
      {
        title: "CISCO CCNA1 en progreso..",
        inst: "CISCO | 2025",
        btn: "Visualizar",
      },
    ],
    certModalDesc: "Descripción de la certificación.",
    certModalBtn: "Descargar PDF",
    certModalAlt: "Certificación",
    socialLinks: ["LinkedIn", "GitHub", "Twitter"],
  },
  en: {
    nav: ["About me", "Projects", "Skills", "Contact"],
    hero: 'Hi! I\'m Marcelo, a <span class="highlight-purple">developer</span> based in Lima - Peru.',
    heroP1:
      'I am passionate about building <span class="highlight-pink">efficient</span>, <span class="highlight-purple">robust</span> and <span class="highlight-yellow">reliable</span> solutions.<br />I am a developer focused on <span class="highlight-red">Linux</span> and <span class="highlight-blue">DevOps</span>, committed to automation, continuous improvement and the smart use of technology to create real change.<br />My experience ranges from server administration to implementing reproducible infrastructures, CI/CD pipelines and security practices.<br />I have worked in environments that value <span class="highlight-pink">adaptability</span>, <span class="highlight-yellow">transparency</span> and <span class="highlight-red">effective collaboration</span>, and I am constantly exploring new tools that drive efficiency and impact in every project.',
    heroP2: "I am currently looking for a new role as a developer. <br />",
    linkedin: "View Linkedin",
    github: "View Github",
    whatsapp: "WhatsApp",
    proyectos: "Projects",
    proyectosDesc: "Some of the personal projects I have worked on, and currently work on:",
    proyecto1: "Selling Houses Website 🏠",
    proyecto1Desc: "Simple website created with Bootstrap.",
    proyecto2: "Monitoring System with Prometheus + Grafana 📊",
    proyecto2Desc: "Small project to monitor an Ubuntu server, which currently has a Minecraft server mounted.",
    proyecto3: "Resource Monitoring Scripts 📊",
    proyecto3Desc: "Customizable scripts.",
    verGithub: "View on Github",
    visitar: "Visit",
    enProgreso: "In progress..",
    estudios: "Education & Certifications",
    habilidades: "Technical Skills",
    derechos: "&copy; 2025 Marcelo Sebastian Reyes Montenegro. All rights reserved.",
    certs: [
      {
        title: "Database Administration and Cybersecurity",
        inst: "SISE | 2024 - Present",
        btn: "View",
      },
      {
        title: "Introduction to Linux Server Administration",
        inst: "Linux | 2025",
        btn: "View",
      },
      {
        title: "Server Resource Management",
        inst: "Platzi | 2025",
        btn: "View",
      },
      {
        title: "CISCO CCNA1 in progress..",
        inst: "CISCO | 2025",
        btn: "View",
      },
    ],
    certModalDesc: "Certification description.",
    certModalBtn: "Download PDF",
    certModalAlt: "Certification",
    socialLinks: ["LinkedIn", "GitHub", "Twitter"],
  },
};

function fadeBodyOutIn(callback) {
  // Guardar la transición original
  const originalTransition = body.style.transition;
  body.style.transition = "opacity 0.5s";
  body.style.opacity = 0;
  setTimeout(() => {
    callback();
    body.style.opacity = 1;
    setTimeout(() => {
      body.style.transition = originalTransition;
    }, 500);
  }, 500);
}

langToggle.addEventListener("click", () => {
  fadeBodyOutIn(() => {
    currentLang = currentLang === "es" ? "en" : "es";
    langToggle.textContent = currentLang === "es" ? "EN" : "ES";
    
    // Navegación
    document.querySelectorAll("nav ul li a").forEach((el, i) => {
      el.textContent = translations[currentLang].nav[i];
    });
    
    // Hero
    document.querySelector(".hero-content h2").innerHTML = translations[currentLang].hero;
    document.querySelectorAll(".hero-content p")[0].innerHTML = translations[currentLang].heroP1;
    document.querySelectorAll(".hero-content p")[1].innerHTML = translations[currentLang].heroP2;
    
    // Botones principales
    document.querySelectorAll(".buttons .btn")[0].textContent = translations[currentLang].linkedin;
    document.querySelectorAll(".buttons .btn")[1].textContent = translations[currentLang].github;
    
    // Proyectos
    document.querySelector(".projects h2").textContent = translations[currentLang].proyectos;
    document.querySelector(".projects > .container > p").textContent = translations[currentLang].proyectosDesc;
    
    // Proyecto 1 - Selling Houses
    document.querySelectorAll(".project-content h3")[0].textContent = translations[currentLang].proyecto1;
    document.querySelectorAll(".project-content p")[0].textContent = translations[currentLang].proyecto1Desc;
    document.querySelectorAll(".project-content .btn")[0].textContent = translations[currentLang].verGithub;
    document.querySelectorAll(".project-content .btn")[1].textContent = translations[currentLang].visitar;
    
    // Proyecto 2 - Sistema de Monitoreo
    document.querySelectorAll(".project-content h3")[1].textContent = translations[currentLang].proyecto2;
    document.querySelectorAll(".project-content p")[1].textContent = translations[currentLang].proyecto2Desc;
    document.querySelectorAll(".project-content .btn")[2].textContent = translations[currentLang].verGithub;
    
    // Proyecto 3 - Scripts para Monitoreo
    document.querySelectorAll(".project-content h3")[2].textContent = translations[currentLang].proyecto3;
    document.querySelectorAll(".project-content p")[2].textContent = translations[currentLang].proyecto3Desc;
    document.querySelectorAll(".project-content .btn")[3].textContent = translations[currentLang].verGithub;
    document.querySelectorAll(".project-content .btn")[4].textContent = translations[currentLang].enProgreso;
    
    // Estudios y habilidades
    document.querySelector(".education h2").textContent = translations[currentLang].estudios;
    document.querySelector(".skills h2").textContent = translations[currentLang].habilidades;
    
    // Footer
    document.querySelector("footer .container p").innerHTML = translations[currentLang].derechos;
    
    // Enlaces sociales del footer
    document.querySelectorAll(".social-links a").forEach((el, i) => {
      if (translations[currentLang].socialLinks[i]) {
        el.textContent = translations[currentLang].socialLinks[i];
      }
    });
    
    // Certificaciones
    document.querySelectorAll(".education-item h3").forEach((el, i) => {
      if (translations[currentLang].certs[i]) {
        el.textContent = translations[currentLang].certs[i].title;
      }
    });
    document.querySelectorAll(".education-item p").forEach((el, i) => {
      if (translations[currentLang].certs[i]) {
        el.textContent = translations[currentLang].certs[i].inst;
      }
    });
    document.querySelectorAll(".education-item .view-cert-btn").forEach((el, i) => {
      if (translations[currentLang].certs[i]) {
        el.textContent = translations[currentLang].certs[i].btn;
      }
    });
    
    // Modal de certificación
    document.getElementById("cert-desc").textContent = translations[currentLang].certModalDesc;
    document.getElementById("cert-pdf").textContent = translations[currentLang].certModalBtn;
    document.getElementById("cert-img").alt = translations[currentLang].certModalAlt;
  });
});
