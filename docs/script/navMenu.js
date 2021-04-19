// grab everything we need
const mobileMenuButton = document.querySelector(".mobile-menu-button");
const sidebar = document.querySelector(".sidebar");
const mobileCloseButton = document.querySelector(".mobile-close-button");

// add our event listener for the click
mobileMenuButton.addEventListener("click", () => {
  sidebar.classList.toggle("-translate-x-full");
});
mobileCloseButton.addEventListener("click", () => {
    sidebar.classList.toggle("-translate-x-full")
});