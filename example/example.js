const examResults = require("../");

// DISCLAIMER: Got these index numbers randomly on facebook.
// PR or pull up an issue if you want it taken down.
console.log("Get current exams..");
examResults
  .getCurrentExams()
  .then(console.log)
  .catch(console.error);

console.log("Get A/L results..");
examResults
  .getALResults("5026024")
  .then(console.log)
  .catch(console.error);

console.log("Get O/L results..");
examResults
  .getOLResults("60207698")
  .then(console.log)
  .catch(console.error);

console.log("Get O/L results..");
examResults
  .getOLResults("60043156")
  .then(console.log)
  .catch(console.error);

console.log("Get Grade 5 results..");
examResults
  .getGrade5Results("2905809")
  .then(console.log)
  .catch(console.error);
