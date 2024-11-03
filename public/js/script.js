document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggleButton");
  const dropdownMenu = document.getElementById("dropdownMenu");

  toggleButton.addEventListener("click", () => {
    dropdownMenu.classList.toggle("hidden");
    toggleButton.classList.toggle("active");
  });
});
