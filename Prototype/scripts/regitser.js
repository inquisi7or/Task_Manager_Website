function registration() {
    // Get the user input from the form
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    // Define the user details as an array of objects
    var users = [
      {
        name: "Student 1",
        email: "student1@example.com",
        password: "student1"
      },
      {
        name: "Student 2",
        email: "student2@example.com",
        password: "student2"
      }
    ];
  
    // Check if the user already exists in the users array
    var userExists = false;
    for (var i = 0; i < users.length; i++) {
      if (users[i].email === email) {
        userExists = true;
        break;
      }
    }
  
    // If the user already exists, show an error message
    if (userExists) {
      alert("This email address is already registered.");
    } else {
      // Add the new user to the users array
      users.push({
        name: name,
        email: email,
        password: password
      });
  
      // Show a success message and reset the form
      alert("Registration successful!");
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("password").value = "";
      document.getElementById("confirm_password").value = "";
    }
  }
