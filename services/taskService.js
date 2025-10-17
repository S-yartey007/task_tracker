// import services
const { loadTasks, saveTasks } = require("../utils/fileUtils");
const { getCurrentTimestamp } = require("../utils/timeUtils");
const {
  validateDescription,
  validateTaskExists,
  validateCorrectStatus,
  validateStatus,
} = require("../helpers/validator");

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
function updateTask(id, newDescription) {
  validateDescription(newDescription);
  validateTaskExists(id);
  const tasks = loadTasks();
  const taskToUpdate = tasks[id - 1];
  taskToUpdate.description = newDescription;
  taskToUpdate.updatedAt = getCurrentTimestamp();
  saveTasks(tasks);
  console.log(`✅ Task updated successfully (ID: ${taskToUpdate.id})`);
}
function deleleTask(id) {
  if (validateTaskExists(id)) {
    const tasks = loadTasks();
    const newTasks = tasks.filter((task) => task.id !== id);
    saveTasks(newTasks);
    console.log("task deleted successfully");
  } else return;
}
function markTask(id, status) {
  if (
    validateTaskExists(id) &&
    validateStatus(status) &&
    validateCorrectStatus(status)
  ) {
    const tasks = loadTasks();
    const taskToMark = tasks[id - 1];
    taskToMark.status = status;
    taskToMark.updatedAt = getCurrentTimestamp();
    saveTasks(tasks);
    console.log("task marked successfully");
  } else return;
}

function list(filter) {
  const tasks = loadTasks();
  if (filter) {
    const filteredTasks = tasks.filter((task) => task.status === filter);
    console.log(filteredTasks);
  } else console.log(tasks);
}

module.exports = {
  addTask,
  updateTask,
  deleleTask,
  markTask,
  list,
};
