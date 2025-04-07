// Inicializar GSAP e ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll("[data-animate]").forEach((element) => {
    const animationType = element.getAttribute("data-animate");
    gsap.from(element, {
        scrollTrigger: {
            trigger: element,
            start: "top 80%", // Inicia a animação quando o elemento entra na viewport
            toggleActions: "play none none none",
        },
        opacity: 0,
        y: animationType === "fade-up" ? 50 : 0, // Animação de subida
        duration: 1,
    });
});

