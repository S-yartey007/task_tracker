function validateTaskExists(task, id) {}
function validateDescription(description) {
  if (!description) {
    console.log("Enter valid task");
    return;
  }
}

module.exports = {
  validateDescription,
  validateTaskExists,
};
