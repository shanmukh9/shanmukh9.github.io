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
    header.style.borderColor = "rgba(85, 230, 255, 0.45)";
  } else {
    header.style.borderColor = "rgba(237, 245, 243, 0.14)";
  }
});
