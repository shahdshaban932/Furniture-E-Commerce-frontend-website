
const categories = [
  { id: 1, name: "Sofas", img: "https://i.pinimg.com/736x/b1/a4/a7/b1a4a7a5d9d67aa5c173f1a48e23deb6.jpg" },
  { id: 2, name: "Chairs", img: "https://i.pinimg.com/1200x/80/24/88/802488d2c04df789bd22e6ffc766fa91.jpg" },
  { id: 3, name: "Tables", img: "https://i.pinimg.com/736x/99/ca/91/99ca914c481fff7b8cff916f7027c554.jpg" },
  { id: 4, name: "Beds", img: "https://i.pinimg.com/736x/9e/cc/4a/9ecc4a8aa26761bc1224f280cf32be33.jpg" }
];

let products = [
  { id: 1, name: "Luxury Sofa", price: 450, img:"https://i.pinimg.com/1200x/60/46/d4/6046d41cc11f058fd6cd7ae5e55bc15f.jpg"},
  { id: 2, name: "Wooden Chair", price: 120, img: "https://i.pinimg.com/736x/f1/07/0b/f1070bc6785acdd96d2ab6bad1e0a73e.jpg" },
  { id: 3, name: "Dining Table", price: 300, img: "https://i.pinimg.com/1200x/53/08/0b/53080bf025ef2cb7cda915abb7f3c2c3.jpg" },
  { id: 4, name: "Bed Frame", price: 600, img: "https://i.pinimg.com/1200x/31/2c/b4/312cb4c923ee5dc12349e0057b3f748c.jpg" },
  { id: 5, name: "Coffee Table", price: 150, img: "https://i.pinimg.com/736x/48/24/76/4824769155530e2202b8c74555bc8406.jpg" },
  { id: 6, name: "Bookshelf", price: 200, img: "https://i.pinimg.com/736x/87/d0/f0/87d0f08b8210bfea03d29e948f7ad690.jpg" },
  { id: 7, name: "Wardrobe", price: 500, img: "https://i.pinimg.com/736x/de/31/fa/de31fa6c0da5443cdf3a7f862625cb1d.jpg" },
  { id: 8, name: "Lamp", price: 80, img: "https://i.pinimg.com/736x/f9/8b/d0/f98bd04b298c0762101174acfd928a86.jpg" }
];

let cart = [];

function addToCart(product) {
  let existing = cart.find(p => p.id === product.id);
  if (existing) {
    existing.quantity += 1; 
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  updateCartLink();

  Swal.fire({
    icon: "success",
    title: "Added to Cart",
    text: `${product.name} added!`,
    timer: 1200,
    showConfirmButton: false
  });
}

function updateCartLink() {
  document.getElementById("view-cart").href =
    "cart.html?data=" + encodeURIComponent(JSON.stringify(cart));
}

const categoriesContainer = document.getElementById("categories");
categories.forEach(cat => {
  const col = document.createElement("div");
  col.className = "col-md-3 mb-4";
  col.innerHTML = `
    <div class="card category-card shadow-sm">
      <img src="${cat.img}" class="card-img-top" alt="${cat.name}">
      <div class="card-body text-center">
        <h6 class="card-title">${cat.name}</h6>
      </div>
    </div>
  `;
  categoriesContainer.appendChild(col);
});

function renderProducts() {
  const productsContainer = document.getElementById("products");
  productsContainer.innerHTML = "";
  products.forEach((product, index) => {
    const col = document.createElement("div");
    col.className = "col-md-3 mb-4";
    col.innerHTML = `
      <div class="card h-100 shadow-sm">
        <img src="${product.img}" class="card-img-top" alt="${product.name}">
        <div class="card-body text-center">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text fw-bold">$${product.price}</p>
        </div>
        <div class="card-footer d-flex justify-content-between">
          <button class="btn btn-success btn-sm add" 
            style="background-color:rgba(246, 226, 175, 1);border:2px solid rgba(246, 226, 175, 1);color:black">
            Add to Cart
          </button>
          <button class="btn btn-danger btn-sm remove" 
            style="background-color:rgba(153, 88, 41, 1);border:2px solid rgba(153, 88, 41, 1);color:black">
            Remove
          </button>
        </div>
      </div>
    `;
    col.querySelector(".add").addEventListener("click", () => {
      addToCart(product);
    });
    col.querySelector(".remove").addEventListener("click", () => {
      Swal.fire({
        title: "Are you sure?",
        text: "This product will be deleted!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "rgba(182, 167, 243, 1)",
        cancelButtonColor: "#d67830ff",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          products.splice(index, 1);
          renderProducts();
          Swal.fire("Deleted!", "Product has been removed.", "success");
        }
      });
    });

    productsContainer.appendChild(col);
  });
}

renderProducts();
