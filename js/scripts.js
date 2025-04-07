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

// Remove a animação da seção "Jornada" no mobile
const timelineSection = document.querySelector(".timeline-section");
if (timelineSection && window.innerWidth <= 991) {
    ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === timelineSection) {
            trigger.kill(); // Remove o ScrollTrigger associado
        }
    });
} else if (timelineSection) {
    gsap.fromTo(
        timelineSection,
        { opacity: 0, y: 20 }, // Estado inicial
        {
            scrollTrigger: {
                trigger: timelineSection,
                start: "top 80%", // Inicia a animação
                toggleActions: "play none none none",
            },
            opacity: 1, // Estado final
            y: 0, // Remove o deslocamento
            duration: 1,
        }
    );
}

// Impede que os links de navegação atualizem a barra de endereço
document.querySelectorAll(".nav-link.click-scroll").forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    });
});

// Gerencia a ativação das seções no menu de navegação
const navLinks = document.querySelectorAll(".nav-link.click-scroll");

navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        // Remove a classe 'active' de todos os links
        navLinks.forEach((nav) => nav.classList.remove("active"));

        // Adiciona a classe 'active' ao link clicado
        link.classList.add("active");

        // Faz o scroll suave até o elemento alvo
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    });
});

// Atualiza a seção ativa com base no scroll
window.addEventListener("scroll", () => {
    let currentSection = "";

    document.querySelectorAll("section[id]").forEach((section) => {
        const sectionTop = section.offsetTop - 150; // Ajuste para considerar o topo
        const sectionHeight = section.offsetHeight; // Altura da seção
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").substring(1) === currentSection) {
            link.classList.add("active");
        }
    });
});

// Garante que a seção de contato seja ativada ao clicar
document.querySelectorAll(".nav-link.click-scroll").forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        // Remove a classe 'active' de todos os links
        navLinks.forEach((nav) => nav.classList.remove("active"));

        // Adiciona a classe 'active' ao link clicado
        link.classList.add("active");

        // Faz o scroll suave até o elemento alvo
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    });
});

