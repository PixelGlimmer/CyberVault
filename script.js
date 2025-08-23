const correctCode = "sav3t00ls";
const input = document.getElementById("access-code");
const wrapper = document.querySelector(".glitch-input-wrapper");
const loader = document.getElementById("loader-screen");
const loaderText = document.getElementById("loader-text");
const content = document.getElementById("content");
const error = document.getElementById("error-msg");
const logout = document.getElementById("logoutBtn");

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const value = input.value.trim();
    if (value.toLowerCase() === correctCode) {
      wrapper.classList.add("hidden");
      loader.classList.remove("hidden");
      loaderText.textContent = "Loading...";

      setTimeout(() => {
        loaderText.textContent = "ACCESS GRANTED...";
      }, 1000);

      setTimeout(() => {
        loader.classList.add("hidden");
        content.classList.remove("hidden");
        content.classList.add("fade-in");
      }, 2000);
    } else {
      error.style.display = "block";
      setTimeout(() => (error.style.display = "none"), 2000);
    }
  }
});

logout.addEventListener("click", () => {
  content.classList.add("hidden");
  input.value = "";
  wrapper.classList.remove("hidden");
});
