// import services
const { loadTasks, saveTasks } = require("../utils/fileUtils");
const { getCurrentTimestamp } = require("../utils/timeUtils");
const { validateDescription } = require("../helpers/validator");

// add a task
function addTask(description) {
  validateDescription(description);

  const tasks = loadTasks();

  const newTask = {
    id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
    description,
    status: "todo",
    createdAt: getCurrentTimestamp(),
    updatedAt: getCurrentTimestamp(),
  };
  tasks.push(newTask);
  saveTasks(tasks);
  console.log(`✅ Task added successfully (ID: ${newTask.id})`);
}
function updateTask(id, newDescription) {}
function deleleTask(id) {}
function markTask(id, status) {}
function listTasks(filter) {}

module.exports = {
  addTask,
  updateTask,
  deleleTask,
  markTask,
  listTasks,
};
