
let oldProjects = JSON.parse(localStorage.getItem('Projects'))
//localStorage.setItem('Project', '')
let Projects = [].concat(oldProjects);
function AddProject(){
    let Name = prompt("Enter your Project Name");
    let Description = prompt("Enter your Project Description");    

    function Project(projectName, projectDescription){
        this.projectName = projectName;
        this.projectDescription = projectDescription;
    };

    let NewProject = new Project(Name, Description);
    console.log(NewProject);
    localStorage.setItem('Projects', JSON.stringify(Projects));                
    Projects.push(NewProject);
    console.log(Projects);
    renderProjects();
}
function renderProjects(){
    Data = JSON.parse(localStorage.getItem('Projects'));
    console.log(Data);
    html = '';
for(let i=0; i<Data.length; i++){
    if(Data[i].projectName==null||Data[i].projectName===""){
        continue;
    }else if(Data[i].projectName!=null||Data[i].projectName!=""){
        html += "<tr><td>"+i+"</td><td>"+Data[i]+"</td><td>"+Data[i].projectDescription+"</td>/tr>";
    }
    document.getElementById('ProjectList').innerHTML = html;
}}
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

renderProjects();