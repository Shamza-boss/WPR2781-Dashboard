let Bugs = JSON.parse(localStorage.getItem("Bugs"));
let USERS = JSON.parse(localStorage.getItem("userBase"));
let FilterBase = JSON.parse(localStorage.getItem("FilterBase"));
// if(FilterBase.length!=Bugs.length){
//   localStorage.setItem("FilterBase", JSON.stringify(Bugs));
// }
// FilterBase = JSON.parse(localStorage.getItem("FilterBase"));
// console.log(Bugs)



//filer box populated with Projects
renderProjects();
let ElementsBacklog = [];
  let ElementsReady = [];
  let ElementsProgress = [];
  let ElementsDone = [];

let renderCards = (Database)=>{
  
  let id = localStorage.getItem("userID");
  //console.log(Database);
  let allUsers = [];
  Database.forEach((bug, i) => {
    //users with index
    allUsers.push({ i: bug });
    if (bug.phase == "Backlog") {
      let usernames = [];
      let Backlogbugs = [];
      console.log("Usernames: "+usernames);
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
      <div class="card" id="spc" onclick="BackLogSub()">
      <div class="card-body">
      <h5 class="card-title">${bug.projectName} : ${bug.summary}</h5>
      <h6 class="card-subtitle mb-2 text-muted"> Date: ${bug.date}</h6>
      <p class="card-text">${bug.description}</p>
      <p class="card-text" style="color: ${color}">Severity: ${bug.Serverity}</p>
      <p class="card-text""> Status: ${bug.Status} - Assigned: ` +
        bug.PersonAssigned +
        `</p>
      </div></div>`;
      console.log(bug);
      ElementsBacklog.push(createCard(e));
      Database.forEach(bug =>{
        if(bug.phase == "Backlog"){
          Backlogbugs.push(bug);
        }
      })
      localStorage.setItem("Backlog", JSON.stringify(Backlogbugs));
    }
    if (bug.phase == "Ready") {
      let usernames = [];
      let ReadyBugs = [];
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
      <div class="card" id="spc" onclick="ReadyLogSub()">
      <div class="card-body">
      <h5 class="card-title">${bug.projectName} : ${bug.summary}</h5>
      <h6 class="card-subtitle mb-2 text-muted"> Date: ${bug.date}</h6>
      <p class="card-text">${bug.description}</p>
      <p class="card-text" style="color: ${color}">Severity: ${bug.Serverity}</p>
      <p class="card-text""> Status: ${bug.Status} - Assigned: ` +
      bug.PersonAssigned +
        `</p>
      </div></div>`;
      console.log(bug);
      Database.forEach(bug =>{
        if(bug.phase == "Ready"){
          ReadyBugs.push(bug);
        }
      })
      ElementsReady.push(createCard(e));
      
      localStorage.setItem("Ready", JSON.stringify(ReadyBugs));
    }
    if (bug.phase == "Progress") {
      let usernames = [];
      let ProgressBugs = [];
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
      <div class="card" id="spc" onclick="ProgressLogSub()">
      <div class="card-body">
      <h5 class="card-title">${bug.projectName} : ${bug.summary}</h5>
      <h6 class="card-subtitle mb-2 text-muted"> Date: ${bug.date}</h6>
      <p class="card-text">${bug.description}</p>
      <p class="card-text" style="color: ${color}">Severity: ${bug.Serverity}</p>
      <p class="card-text""> Status: ${bug.Status} - Assigned: ` +
      bug.PersonAssigned +
        `</p>
      </div></div>`;
      Database.forEach(bug =>{
        if(bug.phase == "Progress"){
          ProgressBugs.push(bug);
        }
      })      
      ElementsProgress.push(createCard(e));
      localStorage.setItem("Progress", JSON.stringify(ProgressBugs));
    }
    if (bug.phase == "Done") {
      let usernames = [];
      let DoneBugs = []
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
      <div class="card" id="spc" onclick="DoneLogSub()">
      <div class="card-body">
      <h5 class="card-title">${bug.projectName} : ${bug.summary}</h5>
      <h6 class="card-subtitle mb-2 text-muted"> Date: ${bug.date}</h6>
      <p class="card-text">${bug.description}</p>
      <p class="card-text" style="color: ${color}">Severity: ${bug.Serverity}</p>
      <p class="card-text""> Status: ${bug.Status} - Assigned: ` +
      bug.PersonAssigned +
        `</p>
      </div></div>`;
      
      Database.forEach(bug =>{
        if(bug.phase == "Done"){
          DoneBugs.push(bug);
        }
      })
      ElementsDone.push(createCard(e));
      localStorage.setItem("Done", JSON.stringify(DoneBugs))
    }
  });
}

console.log(FilterBase);
if(FilterBase===null){
  renderCards(Bugs);
}else if(FilterBase.length>=1){
  renderCards(FilterBase);
} 


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
function renderProjects() {
  Data = JSON.parse(localStorage.getItem("Projects"));
  console.log(Data);
  let OptionARR = [];
  for (let i = 0; i < Data.length; i++) {
    if (i == 0) {
      let html =
        '<option value="all">All Bugs in projects</option>'
      let options = document.createElement("Option");
      options.innerHTML = html;
      OptionARR.push(options);
    }if(i == 0){
      let html ='<option value="'+Data[0].projectName +'">' +Data[0].projectName +'</option>';
      let options = document.createElement("Option");
      options.innerHTML = html;
      OptionARR.push(options);
    } else if (i > 0) {
      let html =
        "<option value=" +
        Data[i].projectName +
        ">" +
        Data[i].projectName +
        "</option>";
      let options = document.createElement("Option");
      options.innerHTML = html;
      OptionARR.push(options);
    }
  }
  let select = document.getElementById("FilterValue");
  OptionARR.forEach((element) => {
    console.log(element);
    select.appendChild(element);
  });
}

const FilterForm = document.getElementById("Filter-form");
FilterForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  var data = new FormData(event.target);
  let Bugs = JSON.parse(localStorage.getItem("Bugs"));

  data.append("FilterValue", document.getElementById("FilterValue").value);

  let value = [...data.entries()];
  let FilterValue = value[0][1];
let FilterData = [];
  if(FilterValue==="All Bugs in projects"){
    Bugs.forEach(bug =>{
        FilterData.push(bug);
    })
      localStorage.setItem("FilterBase", JSON.stringify(Bugs));
    
  }
  else{
    Bugs.forEach(bug =>{
      if(bug.projectName==FilterValue){
        FilterData.push(bug)
      }
    })
    localStorage.setItem("FilterBase", JSON.stringify(FilterData));
  }
  window.location.href = "./Main.html";
}

function DoneLogSub(){
  window.location.href = "./Done.html";
}
function ProgressLogSub(){
  window.location.href = "./Progress.html";
}
function ReadyLogSub(){
  window.location.href = "./Ready.html";
}
function BackLogSub(){
  window.location.href = "./BackLog.html";
}
