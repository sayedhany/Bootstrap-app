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
  var colorLi = $(".color-option ul li");
  colorLi.eq(0).css("backgroundColor", "#E41B17").end();
  colorLi.eq(1).css("backgroundColor", "#e426d5").end();
  colorLi.eq(2).css("backgroundColor", "#009aff").end();
  colorLi.eq(3).css("backgroundColor", "#ffd500");
  colorLi.click(function () {
    $("link[href*='theme']").attr("href", $(this).attr("data-value"));
    // console.log($(this).attr("data-value"));
  });
});

$(window).load(function () {
  "use strict";

  // Loading Elements

  $(".loading-overlay .spinner").fadeOut(2000, function () {
    // Show The Scroll

    $("body").css("overflow", "auto");

    $(this)
      .parent()
      .fadeOut(2000, function () {
        $(this).remove();
      });
  });
});
