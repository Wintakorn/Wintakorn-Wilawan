window.onscroll = function () {
    scrollFunction();
};

function scrollFunction(): void {
    const button = document.getElementById("backToTopBtn");
    if (button) {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            button.style.display = "block";
        } else {
            button.style.display = "none";
        }
    }
}

function topFunction(): void {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
