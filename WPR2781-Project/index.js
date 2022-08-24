//Need to retrieve all bugs that are stored in the database
  //now we can convert the item back into a jason object so we can use it
  let Database = JSON.parse(localStorage.getItem("Bugs"));
  console.log("Number of records "+Database.length);
  Database.forEach(bug => {
    e = `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${bug.projectName}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${bug.summary}</h6>
      <p class="card-text">${bug.description}</p>
      <!-- These can be made to be like the buttons -->
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
    </div>
  </div>`
    console.log(bug);
  })
  console.log(Database);
  //to empty DATABASE after testing
  //localStorage.clear();
  function createCard(htmlStr) {
    var frag = document.createDocumentFragment(),
        temp = document.createElement('div');
    temp.innerHTML = htmlStr;
    while (temp.firstChild) {
        frag.appendChild(temp.firstChild);
    }
    return frag;
}


var fragment = createCard(e);
// You can use native DOM methods to insert the fragment:
document.getElementById("BackLog").appendChild(fragment, document.body.childNodes[0]);