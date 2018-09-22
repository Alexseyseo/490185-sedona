  var button = document.querySelector(".search-button");
  var popup = document.querySelector("form");
  var arrival = popup.querySelector("[name=date-of-arrival]");
  var departure = popup.querySelector("[name=date-of-departure]");
  var adults = popup.querySelector("[name=amount-of-adults]");
  var children = popup.querySelector("[name=amount-of-children]");
  popup.classList.remove("active");

  button.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("error");
    popup.classList.toggle("active");
  });

  popup.addEventListener("submit", function (evt) {
      if (!arrival.value || !departure.value || !adults.value || !children.value) {
        evt.preventDefault();
        popup.classList.remove("error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("error");
      }
  });
