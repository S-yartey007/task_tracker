#!/usr/bin/env node
const {
  addTask,
  updateTask,
  deleleTask,
  markTask,
  listTasks,
} = require("./services/taskService");
const [, , command, ...args] = process.argv;

switch (command) {
  case "add":
    const description = args.join(" ");
    addTask(description);
    break;
  default:
    console.log("❓ Unknown command. Try 'add', 'update', 'list', etc.");
}
