
let date = new Date().toISOString().slice(0, 10);
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
    event.preventDefault();
      var data = new FormData(event.target);
  
      data.append("summary", document.getElementById("summary").value);
      data.append("Description", document.getElementById("Description").value);
      data.append("RealOption", document.getElementById("RealOption").value);
      data.append("PersonAssigned", document.getElementById("PersonAssigned").value);
      data.append("Status", document.getElementById("Status").value);
      data.append("Phase", document.getElementById("Phase").value);
      data.append("Serverity", document.getElementById("Serverity").value);
      data.append("DetailedSummary", document.getElementById("DetailedSummary").value);
      data.append("projectedtime", document.getElementById("projectedtime").value);


  
      let value = [...data.entries()];
      let summary = value[0][1];
      let description = value[1][1];
      let projectName = value[2][1];
      let personAssigned = value[3][1];
      let status = value[4][1];
      let phase = value[5][1];
      let Serverity = value[6][1];
      let DetailedSummary = value[7][1];
      let projectedTime = value[8][1];
  
      function DataBaseBugs(id,summary,description, date, project,PersonAssigned,Status, phase, Serverity, DetailedSummary, ProjectedTime){
        this.id = id;
        this.summary = summary;
        this.description = description;
        this.date = date;
        this.projectName = project;
        this.PersonAssigned = PersonAssigned;
        this.Status = Status;
        this.phase = phase;
        this.Serverity = Serverity;
        this.DetailedSummary = DetailedSummary;
        this.ProjectedTime = ProjectedTime;
     }
     if(summary!=null||description!=null||projectName!=null||personAssigned!=null||status!=null||phase!=null){
      let userId = id;
      if(userId!=null||userId!=" "){
        let time = new Date(projectedTime).toISOString().slice(0, 10);
        let bug = new DataBaseBugs(userId,summary,description, date, projectName, personAssigned, status, phase, Serverity, DetailedSummary, time);
   
        Bugs.push(bug);//add bug to array that is to be saved
        localStorage.setItem("Vals", JSON.stringify(Bugs));
        alert("Bug added")
      }else{
        alert("Sorry, you are not logged in");
        window.location.href = './Main.html';
      }
      
     }
     localStorage.DataBase = localStorage.setItem("Bugs", JSON.stringify(Bugs));
     window.location.href = './Main.html';
  }
}


function renderProjects(){
  userBase = JSON.parse(localStorage.getItem('userBase'));
  console.log(userBase);
  Data = JSON.parse(localStorage.getItem('Projects'));
  if(userBase==null){
    alert("there are now existing users in the project");
    window.location.href = './Main.html';
  }
  if(Data==null){
    alert("Please ask admin to input projects in order to continue");
    window.location.href = './Main.html';
  }else{
    console.log(Data);
    let OptionARR = [];
    let personArry = [];
  for(let i=0; i<Data.length; i++){
    let html = "<option value="+Data[i].projectName+">"+Data[i].projectName+"</option>";
    let options = document.createElement('Option');
    options.innerHTML = html;
    OptionARR.push(options);
  }
  for(let i=0; i<userBase.length; i++){
    let html = "<option value="+userBase[i].name+">"+userBase[i].name+"</option>";
    let options = document.createElement('Option');
    options.innerHTML = html;
    personArry.push(options);
  }
    let select = document.getElementById('RealOption');
    OptionARR.forEach(element =>{
      console.log(element);
      select.appendChild(element);
    })
    let select1 = document.getElementById('PersonAssigned');
    personArry.forEach(element =>{
      select1.appendChild(element);
    })
  }
  
  
}

function ManageBuggers(){
  let id = localStorage.getItem('userID');
  let projects = localStorage.getItem('Projects');
  let users = localStorage.getItem('userBase');
  if(projects==null){
    alert("Please ask admin to input projects in order to continue");
    window.location.href = './Main.html';
  }else if(users==null&&id==null){
    alert("Please ask admin to input Users in order to continue");
    window.location.href = './Main.html';
  }else if(id==null&&users!=null){
    alert("Please Login");
    window.location.href = './Login.html';
  }else{
    window.location.href = './BugAdder.html';
  }
}
function manageUser(){
  let username = prompt("Enter your username");
  let password = prompt("Enter your password");
  if(username != "admin" && password != "admin123"){
    alert("Sorry, you are not allowed to add users");
    window.location.href = './Main.html';
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
function ResetDB(){
  localStorage.clear();
window.location.reload();
}