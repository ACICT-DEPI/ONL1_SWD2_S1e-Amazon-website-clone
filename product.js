const product = JSON.parse(localStorage.getItem("selectedProduct"));
if (product) {
    document.getElementById("productPageTitle").innerText = product.name
  document.getElementById("product-title").innerText = product.name;
  document.getElementById("product-image").src = product.image;
  document.getElementById(
    "product-price"
  ).innerText = `Price: EGP ${product.price}`;
  document.getElementById("product-description").innerText =
    product.description;
} else {
  document.body.innerHTML = "<p>No product found</p>";
}
