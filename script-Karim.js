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
let all_title = document.querySelector(".all_title");
all_close.addEventListener("click", function () {
  all_popup.style.display = "none";
});

all.addEventListener("click", function () {
  all_popup.style.display = "flex";
});
all_title.addEventListener("click", function () {
  window.open("login.html", "_blank");
});

let dealsUnder50 = document.querySelector(".Deals_under_250");
let deals_under50_container = document.querySelector(
  ".deals_under250_container"
);
let Fashion_clothes_container = document.querySelector(
  ".Fashion_clothes_container"
);
let Electronics_container = document.querySelector(".Electronics_container");
let Accessories_container = document.querySelector(".Accessories_container");
let Home_appliances_container = document.querySelector(
  ".Home_appliances_container"
);
let product_url =
  "https://raw.githubusercontent.com/Karim-Aboualenin/Amazon-clone/f6dd46056e652f44c627d6c7d4840044e70f3d85/products.json";
fetch(product_url)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((element) => {
      if (element.price < 50) {
        let one_product = document.createElement("div");
        one_product.classList.add("one_product");
        let product_image = document.createElement("img");
        product_image.classList.add("product_image");
        product_image.src = element.image;
        let discount = Math.floor(Math.random() * (20 - 5 + 1)) + 5;
        let discountDiv = document.createElement("div");
        discountDiv.innerText = `${discount}% off`;
        discountDiv.classList.add("discount");
        let priceDiv = document.createElement("div");
        let priceAfterDiscount =
          element.price - (element.price * discount) / 100;
        priceDiv.innerHTML = `<sup>EGP</sup> ${
          element.price
        } list <sup class ="linethrough">EGP${priceAfterDiscount.toFixed(
          2
        )}</sup>`;
        let descriptionDiv = document.createElement("div");
        descriptionDiv.classList.add("description");
        descriptionDiv.innerText = element.description;
        one_product.appendChild(product_image);
        one_product.appendChild(discountDiv);
        one_product.appendChild(priceDiv);
        one_product.appendChild(descriptionDiv);
        one_product.addEventListener("click", function () {
          localStorage.setItem("selectedProduct", JSON.stringify(element));
          window.open("product.html", "_blank");
        });
        deals_under50_container.appendChild(one_product);
      }

      if (element.category === "Clothing") {
        let one_product = document.createElement("div");
        one_product.classList.add("one_product");
        let product_image = document.createElement("img");
        product_image.classList.add("product_image");
        product_image.src = element.image;
        let discount = Math.floor(Math.random() * (20 - 5 + 1)) + 5;
        let discountDiv = document.createElement("div");
        discountDiv.innerText = `${discount}% off`;
        discountDiv.classList.add("discount");
        let priceDiv = document.createElement("div");
        let priceAfterDiscount =
          element.price - (element.price * discount) / 100;
        priceDiv.innerHTML = `<sup>EGP</sup> ${
          element.price
        } list <sup class ="linethrough">EGP${priceAfterDiscount.toFixed(
          2
        )}</sup>`;
        let descriptionDiv = document.createElement("div");
        descriptionDiv.classList.add("description");
        descriptionDiv.innerText = element.description;
        one_product.appendChild(product_image);
        one_product.appendChild(discountDiv);
        one_product.appendChild(priceDiv);
        one_product.appendChild(descriptionDiv);
        one_product.addEventListener("click", function () {
          localStorage.setItem("selectedProduct", JSON.stringify(element));
          window.open("product.html", "_blank");
        });
        Fashion_clothes_container.appendChild(one_product);
      }

      if (element.category === "Electronics") {
        let one_product = document.createElement("div");
        one_product.classList.add("one_product");
        let product_image = document.createElement("img");
        product_image.classList.add("product_image");
        product_image.src = element.image;
        let discount = Math.floor(Math.random() * (20 - 5 + 1)) + 5;
        let discountDiv = document.createElement("div");
        discountDiv.innerText = `${discount}% off`;
        discountDiv.classList.add("discount");
        let priceDiv = document.createElement("div");
        let priceAfterDiscount =
          element.price - (element.price * discount) / 100;
        priceDiv.innerHTML = `<sup>EGP</sup> ${
          element.price
        } list <sup class ="linethrough">EGP${priceAfterDiscount.toFixed(
          2
        )}</sup>`;
        let descriptionDiv = document.createElement("div");
        descriptionDiv.classList.add("description");
        descriptionDiv.innerText = element.description;
        one_product.appendChild(product_image);
        one_product.appendChild(discountDiv);
        one_product.appendChild(priceDiv);
        one_product.appendChild(descriptionDiv);
        one_product.addEventListener("click", function () {
          localStorage.setItem("selectedProduct", JSON.stringify(element));
          window.open("product.html", "_blank");
        });
        Electronics_container.appendChild(one_product);
      }

      if (element.category === "Accessories") {
        let one_product = document.createElement("div");
        one_product.classList.add("one_product");
        let product_image = document.createElement("img");
        product_image.classList.add("product_image");
        product_image.src = element.image;
        let discount = Math.floor(Math.random() * (20 - 5 + 1)) + 5;
        let discountDiv = document.createElement("div");
        discountDiv.innerText = `${discount}% off`;
        discountDiv.classList.add("discount");
        let priceDiv = document.createElement("div");
        let priceAfterDiscount =
          element.price - (element.price * discount) / 100;
        priceDiv.innerHTML = `<sup>EGP</sup> ${
          element.price
        } list <sup class ="linethrough">EGP${priceAfterDiscount.toFixed(
          2
        )}</sup>`;
        let descriptionDiv = document.createElement("div");
        descriptionDiv.classList.add("description");
        descriptionDiv.innerText = element.description;
        one_product.appendChild(product_image);
        one_product.appendChild(discountDiv);
        one_product.appendChild(priceDiv);
        one_product.appendChild(descriptionDiv);
        one_product.addEventListener("click", function () {
          localStorage.setItem("selectedProduct", JSON.stringify(element));
          window.open("product.html", "_blank");
        });
        Accessories_container.appendChild(one_product);
      }

      if (element.category === "Home Appliances") {
        let one_product = document.createElement("div");
        one_product.classList.add("one_product");
        let product_image = document.createElement("img");
        product_image.classList.add("product_image");
        product_image.src = element.image;
        let discount = Math.floor(Math.random() * (20 - 5 + 1)) + 5;
        let discountDiv = document.createElement("div");
        discountDiv.innerText = `${discount}% off`;
        discountDiv.classList.add("discount");
        let priceDiv = document.createElement("div");
        let priceAfterDiscount =
          element.price - (element.price * discount) / 100;
        priceDiv.innerHTML = `<sup>EGP</sup> ${
          element.price
        } list <sup class ="linethrough">EGP${priceAfterDiscount.toFixed(
          2
        )}</sup>`;
        let descriptionDiv = document.createElement("div");
        descriptionDiv.classList.add("description");
        descriptionDiv.innerText = element.description;
        one_product.appendChild(product_image);
        one_product.appendChild(discountDiv);
        one_product.appendChild(priceDiv);
        one_product.appendChild(descriptionDiv);
        one_product.addEventListener("click", function () {
          localStorage.setItem("selectedProduct", JSON.stringify(element));
          window.open("product.html", "_blank");
        });
        Home_appliances_container.appendChild(one_product);
      }
    });
  })
  .catch((error) => {
    console.error("Error fetching JSON:", error);
  });
