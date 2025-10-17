#!/usr/bin/env node
const {
  addTask,
  updateTask,
  deleleTask,
  markTask,
  list,
} = require("./services/taskService");
const [, , command, ...args] = process.argv;

switch (command) {
  case "add":
    const description = args.join(" ");
    addTask(description);
    break;
  case "update":
    const updateId = Number(args[0]);
    const newdescription = args.slice(1).join(" ");
    updateTask(updateId, newdescription);
    break;
  case "delete":
    const deleteId = Number(args[0]);
    deleleTask(deleteId);
    break;
  case "mark":
    const markId = Number(args[0]);
    const status = args.slice(1).join(" ");
    markTask(markId, status);
    break;
  case "list":
    const filter = args[0];
    list(filter);
    break;
  default:
    console.log("❓ Unknown command. Try 'add', 'update', 'list', etc.");
}
