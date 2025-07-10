document.addEventListener("DOMContentLoaded", () => {
    // when DOM loaded getting the logo and nav elements by it
    const logo = document.getElementById("logo");
    const nav = document.getElementById("nav");

    // event listener when logo is clicked
    logo.addEventListener("click", (e) => {
        // if using responsive design set as active
        if (window.innerWidth <= 768) {
            e.preventDefault();
            nav.classList.toggle("active");
        }
    });
});