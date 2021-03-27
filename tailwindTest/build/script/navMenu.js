// grab everything we need
const mobileMenuButton = document.querySelector(".mobile-menu-button");
const sidebar = document.querySelector(".sidebar");

// add our event listener for the click
mobileMenuButton.addEventListener("click", () => {
  sidebar.classList.toggle("-translate-x-full");
});