//load tasks
const { loadTasks } = require("../utils/fileUtils");
function validateTaskExists(id) {
  const tasks = loadTasks();
  if (tasks.filter((task) => task.id === id).length) {
    return true;
  } else {
    console.log("task does not exists enter valid id");
    return false;
  }
}
function validateDescription(description) {
  if (!description) {
    console.log("Enter valid task");
    return false;
  } else return true;
}

function validateStatus(status) {
  if (!status) {
    console.log("Enter status ");
    return false;
  } else return true;
}

function validateCorrectStatus(status) {
  console.log(status === "done");
  if (status === "done" || status === "todo" || status === "in-progress") {
    console.log("Enter valid status");
    return true;
  } else return false;
}
module.exports = {
  validateDescription,
  validateTaskExists,
  validateStatus,
  validateCorrectStatus,
};
