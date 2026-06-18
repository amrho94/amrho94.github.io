const nav = document.querySelector(".nav-wrap");
const dashboard = document.querySelector(".showcase-frame");
const visual = document.querySelector(".hero-visual");
const downloadButton = document.querySelector("#download-button");
const downloadNote = document.querySelector("#download-note");

document.querySelector("#year").textContent = new Date().getFullYear();

window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 24);
}, { passive: true });

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".scroll-reveal").forEach((element) => {
  observer.observe(element);
});

if (window.matchMedia("(pointer: fine)").matches) {
  visual.addEventListener("mousemove", (event) => {
    const bounds = visual.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    dashboard.style.transform =
      `rotateX(${2 - y * 5}deg) rotateY(${x * 6}deg) translateY(-2px)`;
  });

  visual.addEventListener("mouseleave", () => {
    dashboard.style.transform = "rotateX(2deg) rotateY(0deg)";
  });
}

downloadButton.addEventListener("click", (event) => {
  if (downloadButton.getAttribute("href") === "#") {
    event.preventDefault();
    downloadNote.textContent = "The config download has not been added yet.";
    downloadButton.animate(
      [
        { transform: "translateX(0)" },
        { transform: "translateX(-4px)" },
        { transform: "translateX(4px)" },
        { transform: "translateX(0)" }
      ],
      { duration: 280, easing: "ease-out" }
    );
  }
});
