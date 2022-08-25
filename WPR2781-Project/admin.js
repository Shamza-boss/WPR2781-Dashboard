var user = new Array();

function AddUser(){
    GetUser();
    user.push({
    ID: document.getElementById('ID').value,
    user: document.getElementById('user').value,
    name: document.getElementById('name').value,
    surname: document.getElementById('surname').value,  
    email: document.getElementById('email').value

    });

    localStorage.setItem("localData",JSON.stringify(user));
    ShowUser();

    
}

function ShowUser() {
    GetUser();
    let AddRow = document.getElementById("mytable");

    var x = AddRow.rows.length;
    while (--x) {
        AddRow.deleteRow(x);

    }

    for (i=0; i<user.length; i++) {
        let NewRow = AddRow.insertRow();
        let cel1 = NewRow.insertCell();
        let cel2 = NewRow.insertCell();
        let cel3 = NewRow.insertCell();
        let cel4 = NewRow.insertCell();
        let cel5 = NewRow.insertCell();


        cel1.innerHTML = user[i].ID;
        cel2.innerHTML = user[i].user;
        cel3.innerHTML = user[i].name;
        cel4.innerHTML = user[i].surname;
        cel5.innerHTML = user[i].email;

    }
}

function AlterUser(){
    document.getElementsByName("edit").onclick = function() {
        window.location.href = "User.html";
        document.getElementById("name").innerHTML;
    
    };
}

function DeleteUser(){
    localStorage.Clear();
}

function GetUser(){
    let str = localStorage.getItem("localData");
    if (str != null) {
        user = JSON.parse(str);

    }

}


