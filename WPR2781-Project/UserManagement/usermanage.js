function getNewUserId(){
    userBase = JSON.parse(localStorage.getItem('userBase'));
    return userBase.length + 1;
}

function saveUser(){
    userID = getNewUserId();
    userObject = {
        id: userID,
        name: document.getElementById('name').value,
        surname: document.getElementById('surname').value,
        email: document.getElementById('email').value,
        username: document.getElementById('username').value
    };

    userBase = JSON.parse(localStorage.getItem('userBase'));
    console.log(userBase);
    userBase.push(userObject);
    localStorage.setItem('userBase', JSON.stringify(userBase));

    document.getElementById('name').value = '',
    document.getElementById('surname').value = '',
    document.getElementById('email').value = '',
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

function renderUsers(){
    users = JSON.parse(localStorage.getItem('userBase'));
    html = '';

    users.forEach(function(user){
        html += "<tr><td>"+user.name+"</td><td>"+user.surname+"</td><td>"+user.email+"</td><td>"+user.username+"</td></tr>";
    });
    document.getElementById('userList').innerHTML = html;
}
