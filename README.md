---
# 📝 Task Tracker CLI

A simple **Command Line Interface (CLI)** application built with **Node.js** to help you **track and manage tasks** directly from your terminal.
You can **add**, **update**, **delete**, and **mark** tasks as `todo`, `in-progress`, or `done`, all stored locally in a JSON file.
---

## ⚙️ Installation & Setup

### 1️⃣ Clone this repository

```bash
git clone https://github.com/S-yartey007/task_tracker.git
cd task_tracker
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Make the CLI command globally available

This step links the CLI so you can run it using `task-cli` from anywhere.

```bash
npm link
```

> ⚠️ Ensure your `package.json` includes a **bin** entry like this:
>
> ```json
> "bin": {
>   "task-cli": "./index.js"
> }
> ```

---

## 🚀 Usage

Run commands in your terminal using the format:

```bash
task-cli <command> [options]
```

---

### 🟢 Add a new task

```bash
task-cli add "Buy groceries"
```

---

### ✏️ Update an existing task

```bash
task-cli update 1 "Buy groceries and cook dinner"
```

---

### ❌ Delete a task

```bash
task-cli delete 1
```

---

### 🔄 Mark task status

```bash
task-cli mark 1 in-progress
task-cli mark 1 done
```

---

### 📋 List tasks

Show **all tasks**:

```bash
task-cli list
```

Show tasks by **status**:

```bash
task-cli list todo
task-cli list in-progress
task-cli list done
```

---

## 🗂️ File Structure

```
task_tracker/
├── index.js          # Entry point / CLI handler
├── helpers/
│   └── taskManager.js # Core logic for managing tasks
├── tasks.json        # Local JSON storage
├── package.json
└── README.md
```

---

## 💡 Example

```bash
$ task-cli add "Finish Node.js project"
✅ Task added successfully!

$ task-cli list
1. Finish Node.js project [todo]
```

---

## 🧰 Tech Stack

- **Node.js**
- **File System (fs)**
- **Path Module**
- **Command Line Interface (CLI)**

---

## 🧑‍💻 Author

**Emmanuel Yartey**
📧 [Your Email Here]
🌐 [https://github.com/S-yartey007](https://github.com/S-yartey007)

---
