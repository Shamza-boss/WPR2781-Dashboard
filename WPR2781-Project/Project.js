
let oldProjects = JSON.parse(localStorage.getItem('Projects'))
let Projects = [].concat(oldProjects);
function AddProject(){
    let Name = prompt("Enter your Project Name");
    let Description = prompt("Enter your Project Description");      

    function Project(projectName, projectDescription){
        this.projectName = projectName;
        this.projectDescription = projectDescription;
    };

    let NewProject = Project(Name, Description);
    localStorage.setItem('Project', JSON.stringify(Projects));                
    Projects.push(NewProject);
    console.log(Projects);
}
function renderProjects(){
    Data = JSON.parse(localStorage.getItem('Projects'));
    html = '';
for(let i=0; i<Data.length; i++){
    html += "<tr><td>"+i+"</td><td>"+Data[i].projectName+"</td><td>"+Data[i].projectDescription+"</td>/tr>";
}
    Data.forEach(function(user){
       
    });
    document.getElementById('ProjectList').innerHTML = html;
}

function manageUser(){
    let username = prompt("Enter your username");
    let password = prompt("Enter your password");
    if(username != "admin" && password != "admin123"){
      alert("Sorry, you are not allowed to add users");
      window.location.assign = './Main.html';
    }
    else if(username == "admin" && password == "admin123"){
      alert("Welcome administrator!");
      window.location.href = './UserManager.html';
    }
  }

 // renderProjects();