var form = document.getElementById("regForm");
var message = document.getElementById("message");

form.addEventListener("submit", function (event) {
  event.preventDefault(); 

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var password = document.getElementById("password").value;
  var confirm = document.getElementById("confirm").value;

  message.className = "error";

  if (name == "" || email == "" || phone == "" || password == "" || confirm == "") {
    message.innerText = "Please fill in all fields.";
  } else if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
    message.innerText = "Please enter a valid email.";
  } else if (phone.length != 11) {
    message.innerText = "Phone must be 11 digits.";
  } else if (password.length < 6) {
    message.innerText = "Password must be at least 6 characters.";
  } else if (password != confirm) {
    message.innerText = "Passwords do not match.";
  } else {
    message.className = "success";
    message.innerText = "Registration successful!";
  }
});
