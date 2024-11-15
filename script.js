const userList = [{ username: "admin", password: "admin" }]; // Array of user object

const categoryListData = [
  { name: "All" },
  { name: "Technology" },
  { name: "Food" },
  { name: "Travel" },
  { name: "Fashion" },
  { name: "Sport" },
  { name: "Music" },
  { name: "Movie" },
  { name: "Book" },
  { name: "Game" },
];

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

const toggle = () => {
  const categoryListItem = document.getElementById("category-list-item");
  categoryListItem.innerHTML = categoryListData
    .map((category) => {
      return `<li class="hover:cursor-pointer hover:text-slate-200 duration-200">
        ${category.name}
      </li>`;
    })
    .join("");

  const categoryList = document.getElementById("category-list");

  const currentTransform = categoryList.style.transform;

  if (currentTransform === "" || currentTransform === "translateX(0px)") {
    categoryList.style.transform = "translateX(-100%)";
  } else {
    categoryList.style.transform = "translateX(0px)";
  }

  // เพิ่ม transition เพื่อให้การเคลื่อนที่นุ่มนวลขึ้น
  categoryList.style.transition = "transform 0.3s ease";
};
