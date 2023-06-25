const form = document.querySelector(".form-inline");
const currentYearElement = document.getElementById("current-year");
let currentYear = new Date().getFullYear();
$(document).ready(function () {
  $(".carousel").carousel({
    interval: 5000,
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
});
currentYearElement.textContent = currentYear;
