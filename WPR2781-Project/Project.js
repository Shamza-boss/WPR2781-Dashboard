let id = localStorage.getItem('userID');
let oldProjects = JSON.parse(localStorage.getItem('Projects'))
let Projects = []
if(oldProjects!=null){
    Projects = [].concat(oldProjects);
}

function AddNewProject(){
    
    let Name = prompt("Enter your Project Name");
    let Description = prompt("Enter your Project Description");      

    function Project(projectName, projectDescription){
        this.projectName = projectName;
        this.projectDescription = projectDescription;
    };
    let NewProject = new Project(Name, Description);
    if(NewProject.name !== null && NewProject.Description!== null){
      Projects.push(NewProject);
      localStorage.setItem('Projects', JSON.stringify(Projects)); 
      console.log(Projects);
      //localStorage.clear();
      renderProjects();
    }        
    
}

function renderProjects(){
    Data = JSON.parse(localStorage.getItem('Projects'));
    console.log(Data);
    html = '';
for(let i=0; i<Data.length; i++){
    html += "<tr><td>"+i+"</td><td>"+Data[i].projectName+"</td><td>"+Data[i].projectDescription+"</td></tr>";
}
    Data.forEach(function(user){
       
    });
    document.getElementById('ProjectList').innerHTML = html;
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
 renderProjects();