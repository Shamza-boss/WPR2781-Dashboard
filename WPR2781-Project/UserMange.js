let id = localStorage.getItem("userID");
function getNewUserId(name, suname, username) {
  userBase = JSON.parse(localStorage.getItem("userBase"));
  let namet = name.slice(0, 1).toUpperCase();
  let sunamet = suname.slice(0, 1).toUpperCase();
  let usernamet = username.slice(0, 1).toUpperCase();
  let id =
    usernamet +
    namet +
    sunamet +
    userBase.length +
    Math.floor(Math.random() * 10) +
    1;
  return id;
}

function saveUser() {
  let name = document.getElementById("name").value;
  let suname = document.getElementById("surname").value;
  let username = document.getElementById("email").value;
  userID = getNewUserId(name, suname, username);
  localStorage.setItem("userID", userID);
  userObject = {
    id: userID,
    name: document.getElementById("name").value,
    surname: document.getElementById("surname").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
    username: document.getElementById("username").value,
  };

  userBase = JSON.parse(localStorage.getItem("userBase"));
  console.log(userBase);
  userBase.push(userObject);
  localStorage.setItem("userBase", JSON.stringify(userBase));

  (document.getElementById("name").value = ""),
    (document.getElementById("surname").value = ""),
    (document.getElementById("email").value = ""),
    (document.getElementById("password").value = ""),
    (document.getElementById("username").value = "");
    window.location.reload();
}

function printUser() {
  user = localStorage.getItem("user");
  console.log(user);
}

if (localStorage.getItem("userBase") == undefined) {
  localStorage.setItem("userBase", JSON.stringify([]));
}

function resetUsers() {
  localStorage.setItem("userBase", JSON.stringify([]));
}
// resetUsers();
function renderUsers() {
  users = JSON.parse(localStorage.getItem("userBase"));
  html = "";

  users.forEach(function (user) {
    html +=
      "<tr><td>" +
      user.name +
      "</td><td>" +
      user.surname +
      "</td><td>" +
      user.email +
      "</td><td>" +
      user.username +
      "</td></tr>";
  });
  document.getElementById("userList").innerHTML = html;
}
function ManageBuggers() {
  let id = localStorage.getItem("userID");
  let projects = localStorage.getItem("Projects");
  let users = localStorage.getItem("userBase");
  if (projects == null) {
    alert("Please ask admin to input projects in order to continue");
    window.location.href = "./Main.html";
  } else if (users == null && id == null) {
    alert("Please ask admin to input Users in order to continue");
    window.location.href = "./Main.html";
  } else if (id == null && users != null) {
    alert("Please Login");
    window.location.href = "./Login.html";
  } else {
    window.location.href = "./BugAdder.html";
  }
}
function manageUser() {
  let username = prompt("Enter your username");
  let password = prompt("Enter your password");
  if (username != "admin" && password != "admin123") {
    alert("Sorry, you are not allowed to add users");
    window.location.href = "./Main.html";
  } else if (username == "admin" && password == "admin123") {
    alert("Welcome administrator!");
    window.location.href = "./UserManager.html";
  }
}

function AddProject() {
  let username = prompt("Enter your username");
  let password = prompt("Enter your password");
  if (username != "admin" && password != "admin123") {
    alert("Sorry, you are not allowed to add users");
    window.location.href = "./Main.html";
  } else if (username == "admin" && password == "admin123") {
    alert("Welcome administrator!");
    window.location.href = "./AdminProject.html";
  }
}
function ResetDB() {
  localStorage.clear();
  window.location.reload();
}
