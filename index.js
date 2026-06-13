document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));

    if (!target) {
      return;
    }

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 32) {
    header.style.boxShadow = "0 18px 60px rgba(88, 67, 42, 0.12)";
  } else {
    header.style.boxShadow = "none";
  }
});
