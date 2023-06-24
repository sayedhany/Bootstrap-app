$(document).ready(function () {
  $(".carousel").carousel({
    interval: 5000,
  });
});

const form = document.querySelector(".form-inline");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
