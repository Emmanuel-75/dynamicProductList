const products = [
  { id: 1, name: "Wireless Mouse", category: "Electronics", price: 25.99 },
  { id: 2, name: "Bluetooth Speaker", category: "Electronics", price: 49.99 },
  { id: 3, name: "Yoga Mat", category: "Fitness", price: 20.0 },
  { id: 4, name: "Running Shoes", category: "Footwear", price: 75.5 },
  { id: 5, name: "Water Bottle", category: "Fitness", price: 15.0 },
  { id: 6, name: "LED Desk Lamp", category: "Home", price: 30.25 },
  { id: 7, name: "Noise-Canceling Headphones", category: "Electronics", price: 120.0 },
  { id: 8, name: "Smart Watch", category: "Electronics", price: 199.99 },
  { id: 9, name: "Backpack", category: "Accessories", price: 40.0 },
  { id: 10, name: "Sunglasses", category: "Accessories", price: 60.0 },
  { id: 11, name: "Coffee Maker", category: "Home", price: 85.5 },
  { id: 12, name: "Electric Kettle", category: "Home", price: 35.0 },
  { id: 13, name: "Tennis Racket", category: "Sports", price: 110.0 },
  { id: 14, name: "Football", category: "Sports", price: 25.0 },
  { id: 15, name: "Jeans", category: "Clothing", price: 50.0 },
  { id: 16, name: "T-Shirt", category: "Clothing", price: 20.0 }
];

const productTemplate = document.querySelector('.productTemplate');
const productContainer = document.querySelector('#productsContainer');
const buttonsContainer = document.querySelector('.buttonsContainer');
const searchInput = document.getElementById('searchInput');

const noResult = document.querySelector(".noResult");
const queryText = document.querySelector(".query");

let activeBtns = [];

function createProducts(user){
  const clone = productTemplate.content.cloneNode(true);
  clone.querySelector('.productName').innerText = user.name;
  clone.querySelector('.productPrice').innerText = `$${user.price}`;
  clone.querySelector('.productCategory').innerText = `- ${user.category} -`;
  productContainer.appendChild(clone);
}

function calculateTotal(list){
  const totalPrice = list.reduce((acc, curr) => acc + curr.price, 0);
  document.querySelector('.totalPrice').innerText = `$${totalPrice}`;
}

function renderProducts(list){
  productContainer.classList.add('opacity-0');
  setTimeout(()=>{
    productContainer.querySelectorAll(".product").forEach(el => el.remove());
    if (list.length === 0) {
      productContainer.classList.remove("grid", "grid-cols-1", "sm:grid-cols-2", "md:grid-cols-3", "lg:grid-cols-4", "gap-10", "p-10")
      noResult.classList.add("hidden");
      productContainer.classList.add('flex','justify-center','items-center');
      noResult.classList.remove("hidden");
      queryText.textContent = searchInput.value.trim();
    } else {
      productContainer.classList.remove('flex','justify-center','items-center');
      productContainer.classList.add("grid", "grid-cols-1", "sm:grid-cols-2", "md:grid-cols-3", "lg:grid-cols-4", "gap-10", "p-10")
      noResult.classList.add("hidden");
      list.map(product => createProducts(product));
    }
    calculateTotal(list)
  },300)
  productContainer.classList.remove('opacity-0');
}

function getFilteredByCategory(){
  if (activeBtns.length === 0) return products;
  return products.filter(product => activeBtns.includes(product.category.toLowerCase()));
}


function applySearchAndFilter(){
  const value = searchInput.value.trim().toLowerCase();
  const categoryFiltered = getFilteredByCategory();
  const result = value
    ? categoryFiltered.filter(product => product.name.toLowerCase().includes(value))
    : categoryFiltered;
  renderProducts(result);
}

renderProducts(products);

function filterProducts(){
  const filters = Array.from(document.querySelectorAll('.filterBtn')).filter(button => !button.querySelector('.cancel').classList.contains('hidden'));
  activeBtns = filters.map(button => button.querySelector('span').textContent.toLowerCase());
  applySearchAndFilter();
}

buttonsContainer.addEventListener('click', e => {
  const button = e.target.closest('.filterBtn');

  if(!button) return;

  const cancelBtn = button.querySelector('.cancel');
  const category = button.querySelector("span").textContent;

  if (category === "All") {
    activeBtns = [];
    searchInput.value = ''
    document.querySelectorAll(".cancel").forEach(i => i.classList.add("hidden"));
    applySearchAndFilter();
    return
  }
  cancelBtn.classList.toggle("hidden");
  filterProducts();
})

searchInput.addEventListener('input', applySearchAndFilter)