
  var search = document.querySelector(".hotel-search");
  var form = document.querySelector(".search-form");
  var arrival = document.querySelector("[name=check-in]");
  var leave = document.querySelector("[name=check-out]");
  var children = document.querySelector("[name=children]");
  var adults = document.querySelector("[name=adults]");
  var number1 = localStorage.getItem("adults");
  var number2 = localStorage.getItem("children");


  form.classList.toggle("search-form-close");

  search.addEventListener("click", function(event) {
    event.preventDefault();
    form.classList.toggle("search-form-close");
    form.classList.remove("form-error");
    arrival.focus();
    if (number1) {
      adults.value = number1;
    };
    if (number2) {
      children.value = number2
    }
  });

  form.addEventListener("submit", function(event) {
    if (!arrival.value || !leave.value || !adults.value || !children.value) {
      event.preventDefault();
      form.classList.remove("form-error");
      form.offsetWidth = form.offsetWidth;
      form.classList.add("form-error");
    } else {
      localStorage.setItem("adults", adults.value);
      localStorage.setItem("children", children.value);
    }
  });
