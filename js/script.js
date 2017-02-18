
  var search = document.querySelector(".hotel-search");
  var form = document.querySelector(".search-form");
  var arrival = document.querySelector("[name=check-in]");
  var leave = document.querySelector("[name=check-out]");
  var adults = document.querySelector("[name=children]");
  var chidren = document.querySelector("[name=adults]");
  var storage = localStorage.getItem("adults");
  var storage = localStorage.getItem("children");


  form.classList.toggle("search-form-close");

  search.addEventListener("click", function(event) {
    event.preventDefault();
    form.classList.toggle("search-form-close");
    arrival.focus();
    if (storage) {
      adults.value = storage;
      children.value = storage;
    }
  });

  form.addEventListener("submit", function(event) {
    if (!arrival.value || !leave.value || !adults.value || !children.value) {
      event.preventDefault();
      form.classList.add("form-error");
    } else {
      localStorage.setItem("adults", adults.value);
    }
  });
