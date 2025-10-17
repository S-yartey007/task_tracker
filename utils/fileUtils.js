const fs = require("fs");
const path = require("path");

const filepath = path.join(__dirname, "../tasks.json");

function ensureFileExist() {
  if (!fs.existsSync(filepath)) {
    fs.writeFileSync(filepath, JSON.stringify([]));
    return [];
  }
}

//loads task from file and retures as JS array
function loadTasks() {
  try {
    //Ensure the file exists, create a file if not with empty array
    if (!fs.existsSync(filepath)) {
      fs.writeFileSync(filepath, JSON.stringify([]));
      return [];
    }
    const data = fs.readFileSync(filepath, "utf-8");
    // Handle empty file
    if (!data.trim()) return [];
    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading tasks.json", err);
  }
}

//Saves JS array of task back to JSOn file
function saveTasks(tasks) {
  try {
    fs.writeFileSync(filepath, JSON.stringify(tasks, null, 2));
  } catch (error) {
    console.error("Error writing to task.json", error);
  }
}

module.exports = {
  ensureFileExist,
  loadTasks,
  saveTasks,
};
