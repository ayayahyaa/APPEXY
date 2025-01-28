const carousel = document.querySelector("#controls-carousel");
const items = carousel.querySelectorAll("[data-carousel-item]");
const nextButton = carousel.querySelector("[data-carousel-next]");
const prevButton = carousel.querySelector("[data-carousel-prev]");
let currentIndex = 0;

const hideAllItems = () => {
  items.forEach((item) => {
    item.classList.add("hidden");
    item.removeAttribute("data-carousel-item-active");
  });
};

const showItem = (index) => {
  hideAllItems();
  items[index].classList.remove("hidden");
  items[index].setAttribute("data-carousel-item-active", "true");
};

const nextItem = () => {
  currentIndex = (currentIndex + 1) % items.length;
  showItem(currentIndex);
};

const prevItem = () => {
  currentIndex = (currentIndex - 1 + items.length) % items.length; 
  showItem(currentIndex);
};

nextButton.addEventListener("click", nextItem);
prevButton.addEventListener("click", prevItem);

showItem(currentIndex);






const toggleButton = document.getElementById("toggle");


if (localStorage.theme === "dark" || 
    (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  document.documentElement.classList.add("dark");
  toggleButton.innerText = "Light Mode";  
} else {
  document.documentElement.classList.remove("dark");
  toggleButton.innerText = "Dark Mode"; 
}

toggleButton.addEventListener("click", function () {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";  
    toggleButton.innerText = "Dark Mode"; 
  } else {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";  
    toggleButton.innerText = "Light Mode";  
  }
});