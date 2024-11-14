const userList = [{ username: "admin", password: "admin" }]; // Array of user object

const login = (event) => {
  event.preventDefault(); // Prevent form submit
  const username = document.getElementById("username").value; // Get username from input
  const password = document.getElementById("password").value; // Get password from input

  const userIndex = userList.findIndex((u) => u.username === username); // Find user index in array
  if (userIndex > -1) {
    if (userList[userIndex].password === password) {
      alert("Login success");
      localStorage.setItem("username", username); // Set username to local storage
      localStorage.setItem("isLogin", true); // Set isLogin to local storage
      window.location.href = "auth-home.html"; // Redirect to home page
    } else {
      alert("Password is wrong");
    }
  } else {
    alert("Username not found");
  }
};

const register = (event) => {
  event.preventDefault(); // Prevent form submit
  const username = document.getElementById("username").value; // Get username from input
  const password = document.getElementById("password").value; // Get password from input

  // Check if input is empty
  if (!username || !password) {
    alert("Please fill all input");
    return;
  }

  const userIndex = user.findIndex((u) => u.username === username); // Find user index in array
  if (userIndex > -1) {
    alert("Username already exists");
    return;
  }

  userList.push({ username, password }); // Push user object to array
  alert("Register success");

  document.getElementById("username").value = ""; // Clear username input
  document.getElementById("password").value = ""; // Clear password input
};

const logout = () => {
  localStorage.removeItem("isLogin"); // Remove isLogin from local storage
  localStorage.removeItem("username"); // Remove username from local storage
  window.location.href = "index.html"; // Redirect to login page
};
