let projectOneEl = document.querySelector("#project01");
let projectOneUrl = "https://jlddukes.github.io/cocktail-generator/";

let projectTwoEl = document.querySelector("#project02");
let projectTwoUrl = "https://boiling-dusk-37737.herokuapp.com/";

projectOneEl.addEventListener("click", function (e) {
  e.preventDefault();
  window.open(projectOneUrl, "_blank");
});

projectTwoEl.addEventListener("click", function (e) {
  e.preventDefault();
  window.open(projectTwoUrl, "_blank");
});
