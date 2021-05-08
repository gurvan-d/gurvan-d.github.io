var nav = document.getElementById("nav");

document.addEventListener("scroll", function (e) {
    if (window.scrollY >= document.getElementById("presentation").offsetHeight) {
        nav.style.top = 0;
        nav.style.position = "fixed";
    } else {
        nav.style.position = "relative";
    }
});

var projectsCards = document.getElementsByClassName("card");

Array.from(projectsCards).forEach(card => {
    card.addEventListener("click", function (e) {
        document.getElementById(card.id + "-info").style.display = "block";
        document.getElementById("infos-overlay").style.display = "block";
    });
});

var infosCards = document.getElementsByClassName("projetInfo");

document.getElementById("infos-overlay").addEventListener("click", function (e) {
    Array.from(infosCards).forEach(info => {
        info.style.display = "none";
        document.getElementById("infos-overlay").style.display = "none";
    });
});