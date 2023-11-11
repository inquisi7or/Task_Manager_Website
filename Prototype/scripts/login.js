// hard code of the registered email and password here
var registeredEmail = "student1@example.com";
var registeredPassword = "hpgfanfk1234";

function login() {
  event.preventDefault();
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
 
  // check if the entered email and password match the registered account
  if (email == registeredEmail && password == registeredPassword) {
    alert("Login successful");
    // redirect to home_page
    window.location.href = "./home_page.html";
  } else {
    alert("Invalid email or password");
  }
};
