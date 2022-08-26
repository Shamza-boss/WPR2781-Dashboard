

let date = new Date();//date of issue
let Database = JSON.parse(localStorage.getItem("Bugs"));
let Bugs = []
if(Database!=null){
  Bugs = [].concat(Database);
}
renderProjects();
let id = localStorage.getItem('userID');
console.log("This is the ID: " + id);
if(id==null){
  alert("Please Login");
  window.location.href = './Login.html';
}else{
  const BugForm = document.getElementById("Bug-Form"); 
  BugForm.addEventListener("submit", handleSubmit);
  
  function handleSubmit(event) {
    //preventDefault prevents auto reloading
    event.preventDefault();
      var data = new FormData(event.target);
  
      data.append("summary", document.getElementById("summary").value);
      data.append("Description", document.getElementById("Description").value);
      data.append("RealOption", document.getElementById("RealOption").value);
      data.append("PersonAssigned", document.getElementById("PersonAssigned").value);
      data.append("Status", document.getElementById("Status").value);
      data.append("Phase", document.getElementById("Phase").value);
  
      let value = [...data.entries()];
      let summary = value[0][1];
      let description = value[1][1];
      let projectName = value[2][1];
      let personAssigned = value[3][1];
      let status = value[4][1];
      let phase = value[5][1];
  
      function DataBaseBugs(id,summary,description, date, project,PersonAssigned,Status, phase){
        this.id = id;
        this.summary = summary;
        this.description = description;
        this.date = date;
        this.projectName = project;
        this.PersonAssigned = PersonAssigned;
        this.Status = Status;
        this.phase = phase;
     }
     if(summary!=null||description!=null||projectName!=null||personAssigned!=null||status!=null||phase!=null){
      let userId = id;
      if(userId!=null||userId!=" "){
        let bug = new DataBaseBugs(userId,summary,description, date, projectName, personAssigned, status, phase);
   
        Bugs.push(bug);//add bug to array that is to be saved
        localStorage.setItem("Vals", JSON.stringify(Bugs));
      }else{
        alert("Sorry, you are not logged in");
        window.location.href = './Main.html';
      }
      
     }
     localStorage.DataBase = localStorage.setItem("Bugs", JSON.stringify(Bugs));
  }
}


function renderProjects(){
  Data = JSON.parse(localStorage.getItem('Projects'));
  console.log(Data);
  let OptionARR = [];
for(let i=0; i<Data.length; i++){
  let html = "<option value="+Data[i].projectName+">"+Data[i].projectName+"</option>";
  let options = document.createElement('Option');
  options.innerHTML = html;
  OptionARR.push(options);
}
  let select = document.getElementById('RealOption');
  OptionARR.forEach(element =>{
    select.appendChild(element);
  })
  
}

function ManageBuggers(){
  let id = localStorage.getItem('userID');
  if(id==null){
    alert("Please Login");
    window.location.href = './Login.html';
  }
  else{
    window.location.href = './BugAdder.html';
  }
}
//user database
let userBase = JSON.parse(localStorage.getItem('userBase'));
let Bugs = [].concat(Database);


const BugForm = document.getElementById("Bug-Form"); 
BugForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  //preventDefault prevents auto reloading
  event.preventDefault();
    var data = new FormData(event.target);

    data.append("summary", document.getElementById("summary").value);
    data.append("Description", document.getElementById("Description").value);
    data.append("ProjectName", document.getElementById("ProjectName").value);
    data.append("PersonAssigned", document.getElementById("PersonAssigned").value);
    data.append("Status", document.getElementById("Status").value);
    data.append("Phase", document.getElementById("Phase").value);

    let value = [...data.entries()];
    let summary = value[0][1];
    let description = value[1][1];
    let projectName = value[2][1];
    let personAssigned = value[3][1];
    let status = value[4][1];
    let phase = value[5][1];

    function DataBaseBugs(id,summary,description, date, project,PersonAssigned,Status, phase){
      this.id = id;
      this.summary = summary;
      this.description = description;
      this.date = date;
      this.projectName = project;
      this.PersonAssigned = PersonAssigned;
      this.Status = Status;
      this.phase = phase;
   }
//need to create a better user id so we can use it in the project

   let userId = localStorage.getItem('userID');
   let bug = new DataBaseBugs(userId,summary,description, date, projectName, personAssigned, status, phase);

   Bugs.push(bug);//add bug to array that is to be saved
   localStorage.setItem("Vals", JSON.stringify(Bugs));
  // Bugs = JSON.parse(localStorage.getItem("Vals"))
  // console.log("Bug Added with id: "+userId)
  // alert("Bug Added with id: "+userId);

   //The key user is an identifier we can use to identify the database basically.
   localStorage.DataBase = localStorage.setItem("Bugs", JSON.stringify(Bugs))
  //localStorage.DataBase = user1;
}

function manageUser(){
  let username = prompt("Enter your username");
  let password = prompt("Enter your password");
  if(username != "admin" && password != "admin123"){
    alert("Sorry, you are not allowed to add users");
    window.location.href = './Main.html';
    window.location.assign = './Main.html';
  }
  else if(username == "admin" && password == "admin123"){
    alert("Welcome administrator!");
    window.location.href = './UserManager.html';
  }
}
function AddProject(){
  let username = prompt("Enter your username");
  let password = prompt("Enter your password");
  if(username != "admin" && password != "admin123"){
    alert("Sorry, you are not allowed to add users");
    window.location.href = './Main.html';
  }
  else if(username == "admin" && password == "admin123"){
    alert("Welcome administrator!");
    window.location.href = './AdminProject.html';
  }
}
