const examResults = require("../");

// DISCLAIMER: Got these index numbers randomly on facebook.
// PR or pull up an issue if you want it taken down.
examResults
  .getCurrentExams()
  .then(console.log)
  .catch(console.error);
examResults
  .getALResults("5026024")
  .then(console.log)
  .catch(console.error);
examResults
  .getOLResults("60207698")
  .then(console.log)
  .catch(console.error);
examResults
  .getOLResults("60043156")
  .then(console.log)
  .catch(console.error);
examResults
  .getGrade5Results("2905809")
  .then(console.log)
  .catch(console.error);
