//Need to retrieve all bugs that are stored in the database
  //now we can convert the item back into a jason object so we can use it
  let Database = JSON.parse(localStorage.getItem("Bugs"));
  console.log("Number of records "+Database.length);
  Database.forEach(value => {
    console.log(value);
  })
  //to empty DATABASE after testing
  //localStorage.clear();
  