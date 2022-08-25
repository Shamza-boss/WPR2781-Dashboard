//Information we need to save the
// + means complete
/*
- Issue summary +
- Issue description +
- User id to know who created issues - temporaryID created (Revision needed)
- Date of issue identified +
- Project that issue is related to + (Placeholder)
- Who the issue is assigned to + (Placeholder) +
- Status of the issue [open/resolved/overdue] +
*/

let date = new Date();//date of issue
let Database = JSON.parse(localStorage.getItem("Bugs"));
let Bugs = []
if(Database!=null){
  Bugs = [].concat(Database);
}
renderProjects();
let id = localStorage.setItem('userID', userID);

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