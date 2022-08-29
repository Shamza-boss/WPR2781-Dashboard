let Database = JSON.parse(localStorage.getItem("Backlog"));
console.log(Database);

let Bugs = JSON.parse(localStorage.getItem("Bugs"));
let USERS = JSON.parse(localStorage.getItem("userBase"));
let FilterBase = JSON.parse(localStorage.getItem("FilterBase"));

let ElementsBacklog = [];

let id = localStorage.getItem("userID");
//console.log(Database);
let allUsers = [];
Database.forEach((bug, i) => {
  //users with index
  allUsers.push({ i: bug });
  if (bug.phase !== null) {
    let usernames = [];
    console.log("Usernames: " + usernames);
    USERS.forEach((user) => {
      if (user.id == bug.id) {
        usernames.push(user.username);
      }
    });
    let color = "";
    if (bug.Serverity === "high") {
      color = "red";
    } else if (bug.Serverity === "medium") {
      color = "orange";
    } else if (bug.Serverity === "low") {
      color = "blue";
    }
    e =
      `
      <div class="card">
      <div class="card-body">
      <h5 class="card-title">${bug.projectName} : ${bug.summary}</h5>
      <h6 class="card-subtitle mb-2 text-muted"> Date: ${bug.date} - Description ${bug.description} <br/></h6>
      <p class="card-text"> ${bug.DetailedSummary}</p>
      <!-- These can be made to be like the buttons -->
      <p class="card-text" style="color: ${color}">Severity: ${bug.Serverity}</p>
      <p class="card-text""> Status: ${bug.Status} - Assigned: ` +
      bug.PersonAssigned +
      `</p>
      </div></div>`;
    ElementsBacklog.push(createCard(e));
  }
});

function createCard(htmlStr) {
  var frag = document.createDocumentFragment(),
    temp = document.createElement("div");
  temp.innerHTML = htmlStr;
  while (temp.firstChild) {
    frag.appendChild(temp.firstChild);
  }
  return frag;
}
console.log(ElementsBacklog.length);
for (let i = 0; i < ElementsBacklog.length; i++) {
  document
    .getElementById("BackLog")
    .appendChild(ElementsBacklog[i], document.body.childNodes[0]);
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
function ResetDB() {
  localStorage.clear();
  window.location.reload();
}
