//Need to retrieve all bugs that are stored in the database
//now we can convert the item back into a jason object so we can use it
let Database = JSON.parse(localStorage.getItem("Bugs"));
//console.log("Number of records "+Database.length);
let ElementsBacklog = [];
let ElementsReady = [];
let ElementsProgress = [];
let ElementsDone = [];
Database.forEach((bug) => {
  if (bug.phase == "Backlog") {
    e = `
    <div class="card" id="spc">
    <div class="card-body">
  <h5 class="card-title">${bug.projectName}</h5>
  <h6 class="card-subtitle mb-2 text-muted">${bug.summary}</h6>
  <p class="card-text">${bug.description}</p>
  <!-- These can be made to be like the buttons -->
  <a href="#" class="card-link">Card link</a>
  <a href="#" class="card-link">Another link</a>
</div></div>`;
    console.log(bug);
    ElementsBacklog.push(createCard(e));
  }
  if (bug.phase == "Ready") {
    e = `
    <div class="card" id="spc">
    <div class="card-body">
  <h5 class="card-title">${bug.projectName}</h5>
  <h6 class="card-subtitle mb-2 text-muted">${bug.summary}</h6>
  <p class="card-text">${bug.description}</p>
  <!-- These can be made to be like the buttons -->
  <a href="#" class="card-link">Card link</a>
  <a href="#" class="card-link">Another link</a>
</div></div>`;
    console.log(bug);
    ElementsReady.push(createCard(e));
  }
  if (bug.phase == "Progress") {
    e = `
    <div class="card" id="spc">
    <div class="card-body">
  <h5 class="card-title">${bug.projectName}</h5>
  <h6 class="card-subtitle mb-2 text-muted">${bug.summary}</h6>
  <p class="card-text">${bug.description}</p>
  <!-- These can be made to be like the buttons -->
  <a href="#" class="card-link">Card link</a>
  <a href="#" class="card-link">Another link</a>
</div></div>`;
    console.log(bug);
    ElementsProgress.push(createCard(e));
  }
  if (bug.phase == "Done") {
    e = `
    <div class="card" id="spc">
    <div class="card-body">
  <h5 class="card-title">${bug.projectName}</h5>
  <h6 class="card-subtitle mb-2 text-muted">${bug.summary}</h6>
  <p class="card-text">${bug.description}</p>
  <!-- These can be made to be like the buttons -->
  <a href="#" class="card-link">Card link</a>
  <a href="#" class="card-link">Another link</a>
</div></div>`;
    console.log(bug);
    ElementsDone.push(createCard(e));
  }
});
//console.log(Database);
//to empty DATABASE after testing
//localStorage.clear();
function createCard(htmlStr) {
  var frag = document.createDocumentFragment(),
    temp = document.createElement("div");
  temp.innerHTML = htmlStr;
  while (temp.firstChild) {
    frag.appendChild(temp.firstChild);
  }
  //Fragments.push(frag);
  return frag;
}

for(let i =0; i < ElementsBacklog.length; i++) {
  document
  .getElementById("BackLog")
  .appendChild(ElementsBacklog[i], document.body.childNodes[0]);
}
for(let i =0; i < ElementsReady.length; i++) {
  document
  .getElementById("Ready")
  .appendChild(ElementsReady[i], document.body.childNodes[0]);
}
for(let i =0; i < ElementsProgress.length; i++) {
  document
  .getElementById("Progress")
  .appendChild(ElementsProgress[i], document.body.childNodes[0]);
}
for(let i =0; i < ElementsDone.length; i++) {
  document.getElementById("Done").appendChild(ElementsDone[i], document.body.childNodes[0]);
}
//console.log(Fragments[1]);

// You can use native DOM methods to insert the fragment:
// document
//   .getElementById("BackLog")
//   .appendChild(ElementsBacklog[0], document.body.childNodes[0]);


<<<<<<< Updated upstream:WPR2781-Project/index.js

=======
>>>>>>> Stashed changes:WPR2781-Project/Main.js
