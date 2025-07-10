document.addEventListener("DOMContentLoaded", () => {
    // when DOM loaded getting the logo and nav elements by it
    const logo = document.getElementById("logo");
    const nav = document.getElementById("nav");

    // If window size is smaller than 768 changing logo text
    function checkSmallScreen() {
        if (window.innerWidth <= 768){
            logo.innerHTML = "☰";
        }
        else{
            logo.innerHTML = "Sergey";
        }
    };

    // event listener when logo is clicked
    logo.addEventListener("click", (e) => {
        // if using responsive design set as active
        if (window.innerWidth <= 768) {
            e.preventDefault();
            nav.classList.toggle("active");
        }
    });
    checkSmallScreen();

    //Dynamically checking to update logo text when screen is resized
    window.addEventListener("resize", checkSmallScreen);
});