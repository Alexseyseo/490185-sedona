var button = document.querySelector(".search-button");
var popup = document.querySelector(".search-popup");
popup.classList.remove("active");

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("active");
});
