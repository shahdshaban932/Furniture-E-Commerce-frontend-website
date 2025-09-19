document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("exampleInputEmail1").value.trim();
  const password = document.getElementById("exampleInputPassword1").value.trim();

  const users = [
    { email: "hana999@gmail.com", password: "admin123" },
    { email: "ali8877@gmail.com", password: "user123" },
    { email: "shahdshaban932@gmail.com", password: "1234" }
  ];
  const validUser = users.find(
    user => user.email === email && user.password === password
  );

  if (validUser) {
    Swal.fire({
      icon: "success",
      title: "Login Successful",
      text: `Welcome ${email}`,
      timer: 2000,
      showConfirmButton: false
    }).then(() => {
      window.location.href = "home.html"; 
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Invalid email or password!",
    });
  }
});
