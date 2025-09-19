
let products = [
  { id: 1, name: "Luxury Sofa", price: 450, img: "https://i.pinimg.com/1200x/60/46/d4/6046d41cc11f058fd6cd7ae5e55bc15f.jpg" },
  { id: 2, name: "Wooden Chair", price: 120, img: "https://i.pinimg.com/736x/f1/07/0b/f1070bc6785acdd96d2ab6bad1e0a73e.jpg" },
];
function renderProducts() {
  const productsContainer = document.getElementById("products");
  productsContainer.innerHTML = "";
  products.forEach(product => {
    const col = document.createElement("div");
    col.className = "col-md-3 mb-4";
    col.innerHTML = `
      <div class="card h-100 shadow-sm" style="font-size=25px;font-weight=bold">
        <img src="${product.img}" class="card-img-top" alt="${product.name}">
        <div class="card-body text-center">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text fw-bold">$${product.price}</p>
          <button class="btn btn-danger btn-sm" onclick="removeProduct(${product.id})" style="background-color:#d8b266;color:black;border:5px solid #d8b266 ">Remove</button>
        </div>
      </div>
    `;
    productsContainer.appendChild(col);
  });
}
renderProducts();

document.getElementById("productForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const price = document.getElementById("price").value.trim();
  const img = document.getElementById("img").value.trim();

  if (!name || !price || !img) {
    Swal.fire("Error", "Please fill all fields!", "error");
    return;
  }

  const newProduct = {
    id: Date.now(),
    name,
    price: Number(price),
    img
  };

  products.push(newProduct);
  renderProducts();

  Swal.fire("Success", "Product added successfully!", "success");
  document.getElementById("productForm").reset();
});

function removeProduct(id) {
  Swal.fire({
    title: "Are you sure?",
    text: "This product will be deleted!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, delete it",
    cancelButtonText: "Cancel"
  }).then((result) => {
    if (result.isConfirmed) {
      products = products.filter(p => p.id !== id);
      renderProducts();
      Swal.fire("Deleted!", "Product removed.", "success");
    }
  });
}
