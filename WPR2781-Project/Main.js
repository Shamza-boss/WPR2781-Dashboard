let Database = JSON.parse(localStorage.getItem("Bugs"));
let USERS = JSON.parse(localStorage.getItem("userBase"));

let ElementsBacklog = [];
let ElementsReady = [];
let ElementsProgress = [];
let ElementsDone = [];
let id = localStorage.getItem("userID");
console.log(Database);
Database.forEach((bug, i) => {
  if (bug.phase == "Backlog") {
    let usernames = [];
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
    <div class="card" id="spc">
    <div class="card-body">
    <h5 class="card-title">${bug.projectName} : ${bug.summary}</h5>
    <h6 class="card-subtitle mb-2 text-muted"> Date: ${bug.date} - <a href="#" class="card-link">Full Details</a></h6>
    <p class="card-text">${bug.description}</p>
    <!-- These can be made to be like the buttons -->
    <p class="card-text" style="color: ${color}">Severity: ${bug.Serverity}</p>
    <p class="card-text""> Status: ${bug.Status} - User: ` +
      usernames[i] +
      `</p>
    </div></div>`;
    console.log(bug);
    ElementsBacklog.push(createCard(e));
  }
  if (bug.phase == "Ready") {
    let usernames = [];
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
    <div class="card" id="spc">
    <div class="card-body">
    <h5 class="card-title">${bug.projectName} : ${bug.summary}</h5>
    <h6 class="card-subtitle mb-2 text-muted"> Date: ${bug.date} - <a href="#" class="card-link">Full Details</a></h6>
    <p class="card-text">${bug.description}</p>
    <!-- These can be made to be like the buttons -->
    <p class="card-text" style="color: ${color}">Severity: ${bug.Serverity}</p>
    <p class="card-text""> Status: ${bug.Status} - User: ` +
      usernames[i] +
      `</p>
    </div></div>`;
    console.log(bug);
    ElementsReady.push(createCard(e));
  }
  if (bug.phase == "Progress") {
    let usernames = [];
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
    <div class="card" id="spc">
    <div class="card-body">
    <h5 class="card-title">${bug.projectName} : ${bug.summary}</h5>
    <h6 class="card-subtitle mb-2 text-muted"> Date: ${bug.date} - <a href="#" class="card-link">Full Details</a></h6>
    <p class="card-text">${bug.description}</p>
    <!-- These can be made to be like the buttons -->
    <p class="card-text" style="color: ${color}">Severity: ${bug.Serverity}</p>
    <p class="card-text""> Status: ${bug.Status} - User: ` +
      usernames[i] +
      `</p>
    </div></div>`;
    console.log(bug);
    ElementsProgress.push(createCard(e));
  }
  if (bug.phase == "Done") {
    let usernames = [];
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
    <div class="card" id="spc">
    <div class="card-body">
    <h5 class="card-title">${bug.projectName} : ${bug.summary}</h5>
    <h6 class="card-subtitle mb-2 text-muted"> Date: ${bug.date} - <a href="#" class="card-link">Full Details</a></h6>
    <p class="card-text">${bug.description}</p>
    <!-- These can be made to be like the buttons -->
    <p class="card-text" style="color: ${color}">Severity: ${bug.Serverity}</p>
    <p class="card-text""> Status: ${bug.Status} - User: ` +
      usernames[i] +
      `</p>
    </div></div>`;
    console.log(bug);
    ElementsDone.push(createCard(e));
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

for (let i = 0; i < ElementsBacklog.length; i++) {
  document
    .getElementById("BackLog")
    .appendChild(ElementsBacklog[i], document.body.childNodes[0]);
}
for (let i = 0; i < ElementsReady.length; i++) {
  document
    .getElementById("Ready")
    .appendChild(ElementsReady[i], document.body.childNodes[0]);
}
for (let i = 0; i < ElementsProgress.length; i++) {
  document
    .getElementById("Progress")
    .appendChild(ElementsProgress[i], document.body.childNodes[0]);
}
for (let i = 0; i < ElementsDone.length; i++) {
  document
    .getElementById("Done")
    .appendChild(ElementsDone[i], document.body.childNodes[0]);
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
