const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
const navLinks = navMenu ? navMenu.querySelectorAll("a") : [];
const yearEl = document.getElementById("year");
const dynamicExperienceLineEl = document.getElementById("dynamicExperienceLine");

if (dynamicExperienceLineEl) {
  const experience = {};
  experience.diff = new Date() - new Date(2018, 10, 20);
  experience.years = Math.round(experience.diff / (365 * 24 * 60 * 60 * 100)) / 10;
  experience.experienceFraction = experience.years - Math.round(experience.years);
  experience.qualifier = experience.experienceFraction < 0 ? "about" : "over";

  dynamicExperienceLineEl.textContent = `${experience.qualifier} ${Math.round(experience.years)}`;
}

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

if (menuBtn && navMenu) {
  menuBtn.addEventListener("click", () => {
    const expanded = menuBtn.getAttribute("aria-expanded") === "true";
    menuBtn.setAttribute("aria-expanded", String(!expanded));
    navMenu.classList.toggle("open", !expanded);
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuBtn.setAttribute("aria-expanded", "false");
      navMenu.classList.remove("open");
    });
  });
}