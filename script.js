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


