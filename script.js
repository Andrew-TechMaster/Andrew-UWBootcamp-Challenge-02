let projectOneEl = document.querySelector("#project01");
let projectOneUrl = "https://jlddukes.github.io/cocktail-generator/";

projectOneEl.addEventListener("click", function (e) {
    e.preventDefault();

    window.open(projectOneUrl, '_blank');
})