const moonButton = document.querySelector(".moon-btn");

moonButton.onclick = () => {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    moonButton.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    moonButton.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
};
