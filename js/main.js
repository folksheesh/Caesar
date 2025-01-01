var swiper = new Swiper(".home", {
  spaceBetween: 30,
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



// Sample product data
const products = [
  { id: 1, category: 'fruits', name: 'Apple', price: 2.99, discount: 10, image: 'img/apple.png' },
  { id: 2, category: 'fruits', name: 'Banana', price: 3.49, discount: 15, image: 'img/fruit.jpg' },
  { id: 3, category: 'fruits', name: 'Strawberry', price: 5.49, discount: 15, image: 'img/Strawberry1.png' },
  { id: 4, category: 'fruits', name: 'Melon', price: 7.49, discount: 15, image: 'img/melon1.png' },
  { id: 5, category: 'fruits', name: 'Cherry', price: 4.49, discount: 15, image: 'img/cherry.png' },
  { id: 6, category: 'vegetables', name: 'Carrot', price: 2.49, discount: 5, image: 'img/carrot1-removebg-preview.png' },
  { id: 7, category: 'vegetables', name: 'Lettuce', price: 1.79, discount: 20, image: 'img/lettuce.png' },
  { id: 8, category: 'vegetables', name: 'Tomato', price: 2.99, discount: 20, image: 'img/Tomato.png' },
  { id: 9, category: 'vegetables', name: 'Pakcoy', price: 1.59, discount: 20, image: 'img/pakcoy.png' },
  { id: 10, category: 'vegetables', name: 'cabbage', price: 1.39, discount: 20, image: 'img/Cabage.png' },
  { id: 11, category: 'nuts', name: 'Pistachio', price: 3.99, discount: 10, image: 'img/Pistachio.png' },
  { id: 12, category: 'nuts', name: 'Almond', price: 1.49, discount: 15, image: 'img/Almond.png' },
  { id: 13, category: 'nuts', name: 'Cashews', price: 1.49, discount: 15, image: 'img/cashews.png' },
  { id: 14, category: 'nuts', name: 'Hazelnut', price: 1.49, discount: 15, image: 'img/peanut.png' },
  { id: 15, category: 'nuts', name: 'Peanut', price: 1.49, discount: 15, image: 'img/peanut.png' }
  // Add more products as needed
];

// Function to shuffle array
function shuffle(array) {
  let currentIndex = array.length, randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}

// Function to display products
function displayProducts(productList) {
  const productContainer = document.getElementById('product-container');
  productContainer.innerHTML = '';
  productList.forEach(product => {
    const productCard = `
          <div class="box">
              <img src="${product.image}" alt="${product.name}" />
              <span>Fresh Items</span>
              <h2>${product.name}</h2>
              <h3 class="price">$${product.price.toFixed(2)} <span>/kg</span></h3>
              <box-icon name="cart-alt"></box-icon>
              <box-icon name="heart"></box-icon>
              <span class="discount">-${product.discount}%</span>
                <a href="product-detail.html" class="btn">View Details</a>
          </div>
      `;
    productContainer.innerHTML += productCard;
  });
}

// Function to display 5 random products initially
function displayRandomProducts() {
  const shuffledProducts = shuffle(products);
  displayProducts(shuffledProducts.slice(0, 5));
}

// Function to filter products by category
function filterProducts(category) {
  const filteredProducts = products.filter(product => product.category === category);
  displayProducts(filteredProducts);
}

// Display 5 random products on page load
document.addEventListener('DOMContentLoaded', displayRandomProducts);
