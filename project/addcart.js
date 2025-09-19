
let products = [
  { id: 1, name: "Luxury Sofa", price: 450, img: "https://via.placeholder.com/300x200?text=Sofa" },
  { id: 2, name: "Wooden Chair", price: 120, img: "https://via.placeholder.com/300x200?text=Chair" },
  { id: 3, name: "Dining Table", price: 300, img: "https://via.placeholder.com/300x200?text=Table" },
];
function renderProducts() {
  const productsContainer = document.getElementById("products");
  productsContainer.innerHTML = "";
  products.forEach(product => {
    const col = document.createElement("div");
    col.className = "col-md-4 mb-4";
    col.innerHTML = `
      <div class="card h-100 shadow-sm">
        <img src="${product.img}" class="card-img-top" alt="${product.name}">
        <div class="card-body text-center">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text fw-bold">$${product.price}</p>
        </div>
        <div class="card-footer d-flex justify-content-between">
          <button class="btn btn-success btn-sm add-to-cart">Add to Cart</button>
          <button class="btn btn-danger btn-sm remove">Remove</button>
        </div>
      </div>
    `;
    col.querySelector(".add-to-cart").addEventListener("click", () => {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
      Swal.fire("Added!", `${product.name} added to cart.`, "success");
    });

    productsContainer.appendChild(col);
  });
}
renderProducts();
