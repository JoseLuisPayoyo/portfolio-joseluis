const hamburger = document.getElementById('hamburger');
const hamburgerIcon = document.getElementById('hamburger-icon');
const nav = document.getElementById('nav');

let menuAbierto = false;

hamburger.addEventListener('click', () => {
  menuAbierto = !menuAbierto;
  nav.classList.toggle('show');
  hamburgerIcon.src = menuAbierto ? "img/cerrar.png" : "img/hamburguesa.png";
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('show');
    hamburgerIcon.src = "img/hamburguesa.png";
    menuAbierto = false;
  });
});


const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("appear");
    }
  });
}, {
  threshold: 0.1,
});

sections.forEach(section => {
  observer.observe(section);
});


gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero-content h1", {
  y: 40,
  opacity: 0,
  duration: 1,
});

gsap.from(".hero-content p", {
  y: 20,
  opacity: 0,
  duration: 1,
  delay: 0.3,
});

gsap.from(".btn", {
  opacity: 0,
  scale: 0.8,
  duration: 0.6,
  delay: 0.6,
});

gsap.from(".hero-image img", {
  x: 50,
  opacity: 0,
  duration: 1,
  delay: 0.5,
});

gsap.to(".hero-image img", {
  y: -80,
  scale: 1.1,
  opacity: 0.7,
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true,
  }
});


/*MANIFIESTO*/
gsap.from(".manifesto-title", {
  scrollTrigger: {
    trigger: ".manifesto",
    start: "top 80%",
  },
  y: 30,
  opacity: 0,
  duration: 1,
});

gsap.from(".manifesto-text", {
  scrollTrigger: {
    trigger: ".manifesto",
    start: "top 80%",
  },
  y: 40,
  opacity: 0,
  duration: 1.2,
  delay: 0.2,
});
gsap.from(".manifesto-container", {
  scrollTrigger: {
    trigger: ".manifesto",
    start: "top 80%",
  },
  opacity: 0,
  y: 50,
  duration: 1.2,
  ease: "power2.out"
});


/*TECNOLOGÍAS*/
gsap.from(".stack-item", {
  scrollTrigger: {
    trigger: ".stack-grid",
    start: "top 80%",
  },
  y: 30,
  opacity: 0,
  duration: 0.6,
  stagger: 0.1,
  ease: "power2.out"
});

/*SOBRE MI*/
gsap.registerPlugin(ScrollTrigger);

const tlAbout = gsap.timeline({
  scrollTrigger: {
    trigger: ".about",
    start: "top 80%",
  }
});

tlAbout.from(".about-image img", {
  x: -100,
  scale: 0.8,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out"
});

tlAbout.from(".about-title", {
  y: 40,
  opacity: 0,
  duration: 0.8,
  ease: "power2.out"
}, "-=0.8");

tlAbout.from(".about-text", {
  y: 30,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2,
  ease: "power2.out"
}, "-=0.6");

tlAbout.from(".about-values li", {
  y: 20,
  opacity: 0,
  duration: 0.6,
  stagger: 0.15,
  ease: "power1.out"
}, "-=0.5");


/*CONTACTO*/
gsap.from(".contact-container", {
  scrollTrigger: {
    trigger: ".contact",
    start: "top 85%",
  },
  y: 120,
  scale: 0.92,
  opacity: 0,
  duration: 1.5,
  ease: "expo.out"
});

/*FOOTER*/
gsap.from(".footer", {
  scrollTrigger: {
    trigger: ".footer",
    start: "top 95%",
  },
  opacity: 0,
  y: 40,
  duration: 1,
  ease: "power2.out"
});























