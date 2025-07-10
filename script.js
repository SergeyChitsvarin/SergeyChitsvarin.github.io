document.addEventListener("DOMContentLoaded", () => {
  const logo = document.getElementById("logo");
  const nav = document.getElementById("nav");

  logo.addEventListener("click", (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      nav.classList.toggle("active");
    }
  });
});