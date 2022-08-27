let date = new Date();
let id = localStorage.getItem('userID');
console.log("This is the ID: " + id);
  const Login = document.getElementById("LoginForm"); 
  Login.addEventListener("submit", handleSubmit);
  
  function handleSubmit(event) {
    //preventDefault prevents auto reloading
    event.preventDefault();
      var data = new FormData(event.target);
  
      data.append("UserFullName", document.getElementById("UserFullName").value);
      data.append("Username", document.getElementById("Username").value);
      data.append("password", document.getElementById("password").value);
  
      let value = [...data.entries()];
      let fullname = value[0][1];
      let username = value[1][1];
      let password = value[2][1];
      
      let USERS = JSON.parse(localStorage.getItem('userBase'));
      
      let userExist = false;
      getUser();
      function getUser() {
        USERS.forEach(user =>{
            if(user.username==fullname&&user.password==password&&user.username===username){
                userExist = true;
            };
            if(userExist){
                console.log(user);
                localStorage.setItem('userID', user.id);
                alert("Welcome!: " + user.username)
                window.location.href = './BugAdder.html';
            }
        }) 
        if (userExist==false){
            alert("You have not been registerd or your details were incorrect. Contact Admin.");
            window.location.href = './Main.html';
        }
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