const BugForm = document.getElementById("Bug-Form"); 
BugForm.addEventListener("submit", handleSubmit);
//Information we need to save the
// + means complete
/*
- Issue summary +
- Issue description +
- User id to know who created issues - temporaryID created (Revision needed)
- Date of issue identified +
- Project that issue is related to + (Placeholder)
- Who the issue is assigned to + (Placeholder)
- Status of the issue [open/resolved/overdue] +
*/

let date = new Date();//date of issue



let Bugs = [];
function handleSubmit(event) {
  event.preventDefault();
    var data = new FormData(event.target);

    data.append("category", document.getElementById("category").value);
    data.append("Description", document.getElementById("Description").value);
    data.append("ProjectName", document.getElementById("ProjectName").value);
    data.append("PersonAssigned", document.getElementById("PersonAssigned").value);
    data.append("Status", document.getElementById("Status").value);

    let value = [...data.entries()];
    let summary = value[0][1];
    let description = value[1][1];
    let projectName = value[2][1];
    let personAssigned = value[3][1];
    let status = value[4][1];

    function DataBaseBugs(id,summary,description, date, project,PersonAssigned,Status){
      this.id = id;
      this.summary = summary;
      this.description = description;
      this.date = date;
      this.projectName = project;
      this.PersonAssigned = PersonAssigned;
      this.Status = Status;
   }
//need to create a better user id so we can use it in the project
   let userId = category+description+Math.floor(Math.random() * 10) + 1 
   let bug = new DataBaseBugs(userId,summary,description, date, projectName, personAssigned, status);

   Bugs.push(bug);//add bug to array that is to be saved

   alert("Bug Added with id: "+userId);

   //The key user is an identifier we can use to identify the database basically.
   localStorage.DataBase = localStorage.setItem("Bugs", JSON.stringify(Bugs))
  //localStorage.DataBase = user1;
}