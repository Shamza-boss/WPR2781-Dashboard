function getNewUserId(name, suname, username){
    userBase = JSON.parse(localStorage.getItem('userBase'));
    let namet = name.slice(0, 1).toUpperCase();
    let sunamet = suname.slice(0, 1).toUpperCase();
    let usernamet = username.slice(0, 1).toUpperCase();
    let id = usernamet+namet+sunamet+userBase.length + Math.floor(Math.random() * 10) + 1;
    //alert(id)
    return id;
}

function saveUser(){
    let name =  document.getElementById('name').value;
    let suname = document.getElementById('surname').value;
    let username = document.getElementById('email').value;
    userID = getNewUserId(name, suname, username);
    //Create local userID 
    localStorage.setItem('userID', userID);
    userObject = {
        id: userID,
        name: document.getElementById('name').value,
        surname: document.getElementById('surname').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        username: document.getElementById('username').value
    };

    userBase = JSON.parse(localStorage.getItem('userBase'));
    console.log(userBase);
    userBase.push(userObject);
    localStorage.setItem('userBase', JSON.stringify(userBase));

    document.getElementById('name').value = '',
    document.getElementById('surname').value = '',
    document.getElementById('email').value = '',
    document.getElementById('password').value = '',
    document.getElementById('username').value = ''
}

function printUser(){
    user = localStorage.getItem('user');
    console.log(user);
}

if(localStorage.getItem('userBase') == undefined){
    localStorage.setItem('userBase', JSON.stringify([]));
}

function resetUsers(){
    localStorage.setItem('userBase', JSON.stringify([]));
}
// resetUsers();
function renderUsers(){
    users = JSON.parse(localStorage.getItem('userBase'));
    html = '';

    users.forEach(function(user){
        html += "<tr><td>"+user.name+"</td><td>"+user.surname+"</td><td>"+user.email+"</td><td>"+user.username+"</td></tr>";
    });
    document.getElementById('userList').innerHTML = html;
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