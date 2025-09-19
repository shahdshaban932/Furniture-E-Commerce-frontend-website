document.querySelector(".nav-link.logout")?.addEventListener("click", function(e) {
  e.preventDefault();
  localStorage.removeItem("loggedInUser");
  window.location.href = "login.html";
});
