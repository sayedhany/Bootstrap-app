const currentYearElement = document.getElementById("current-year");
const gearBox = document.querySelector(".option-box .color-option");
let currentYear = new Date().getFullYear();
currentYearElement.textContent = currentYear;
$(document).ready(function () {
  $(".carousel").carousel({
    interval: 5000,
  });
  $(".gear-check").click(() => {
    $(".color-option").fadeToggle();
  });
});
