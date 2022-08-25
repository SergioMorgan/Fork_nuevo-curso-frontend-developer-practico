const menuEmail = document.querySelector(".navbar-email");
const menuHamIcon = document.querySelector(".menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const aside = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);

function toggleDesktopMenu() {
  const isAsideClosed = aside.classList.contains("inactive");
  if (!isAsideClosed) {
    aside.classList.add("inactive");
  }
  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  const isAsideClosed = aside.classList.contains("inactive");
  if (!isAsideClosed) {
    aside.classList.add("inactive");
  }
  mobileMenu.classList.toggle("inactive");
}

function toggleCarritoAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  }
  aside.classList.toggle("inactive");
}

const productList = [];

productList.push({
  name: "Bike",
  price: 120,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
  name: "Televisor",
  price: 640,
  image: "https://images.pexels.com/photos/5721869/pexels-photo-5721869.jpeg?auto=compress&cs=tinysrgb&w=1600",
});

productList.push({
  name: "Laptop",
  price: 1750,
  image: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1600",
});

productList.push({
  name: "Motoneta",
  price: 2500,
  image: "https://images.pexels.com/photos/10356255/pexels-photo-10356255.jpeg?auto=compress&cs=tinysrgb&w=1600",
});


function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement("div");
    const productImg = document.createElement("img");
    const productInfo = document.createElement("div");
    const productInfoDiv = document.createElement("div");
    const productPrice = document.createElement("p");
    const productName = document.createElement("p");
    const productInfoFigure = document.createElement("figure");
    const productImgCart = document.createElement("img");

    productCard.classList.add("product-card");
    productInfo.classList.add("product-info");
    productPrice.innerText = "$" + product.price;
    productName.innerText = product.name;
    productImgCart.setAttribute("src", './icons/bt_add_to_cart.svg');
    productImg.setAttribute("src", product.image);

    productInfoFigure.appendChild(productImgCart);
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);