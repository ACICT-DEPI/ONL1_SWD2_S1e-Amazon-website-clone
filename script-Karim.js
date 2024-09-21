document
  .getElementById("location-input")
  .addEventListener("click", function () {
    var dropdownMenu = document.querySelector(".dropdown-menu");
    dropdownMenu.style.display =
      dropdownMenu.style.display === "block" ? "none" : "block";
  });

function selectLocation(location) {
  document.getElementById("location-input").value = location;
  document.querySelector(".dropdown-menu").style.display = "none";
}

document.addEventListener("click", function (e) {
  var dropdown = document.querySelector(".dropdown-container");
  if (!dropdown.contains(e.target)) {
    document.querySelector(".dropdown-menu").style.display = "none";
  }
});

let close = document.querySelector(".close");
let popUP = document.querySelector(".deliveryPopUP");
let deliver = document.querySelector(".deliver");
let done = document.querySelector(".popup-footer");
close.addEventListener("click", function () {
  popUP.style.display = "none";
});
done.addEventListener("click", function () {
  popUP.style.display = "none";
});
deliver.addEventListener("click", function () {
  popUP.style.display = "flex";
});

let all_close = document.querySelector(".all_close");
let all_popup = document.querySelector(".all_popUp");
let all = document.querySelector(".all");
let all_title = document.querySelector(".all_title")
all_close.addEventListener("click", function () {
  all_popup.style.display = "none";
});

all.addEventListener("click", function () {
  all_popup.style.display = "flex";
});
all_title.addEventListener("click", function(){
  window.open("login.html", "_blank")
})