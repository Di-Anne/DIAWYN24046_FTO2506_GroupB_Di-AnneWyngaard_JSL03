const initialTasks = [
  {
    id: 1,
    title: "Launch Epic Career",
    description: "Create a killer Resume",
    status: "todo",
  },
  {
    id: 2,
    title: "Master JavaScript",
    description: "Get comfortable with the fundamentals",
    status: "doing",
  },
  {
    id: 3,
    title: "Contribute to Open Source Projects",
    description:
      "Gain practical experience and collaborate with others in the software development community",
    status: "done",
  },
];

// User may add new task vua prompt and only 'todo', 'doing' or 'done' may be used as status inputs
const taskTitle = prompt("Enter task title:");
const taskDescription = prompt("Enter task description:");
let taskStatus = prompt("Enter task status (todo, doing, done):").toLowerCase();

while (
    taskStatus !== "todo" &&
    taskStatus !== "doing" &&
    taskStatus !== "done"
  ) {
    alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
    taskStatus = prompt("Enter task status (todo, doing, done):").toLowerCase();
  }

const newTask = {
  id: initialTasks.length++,
  title: taskTitle,
  description: taskDescription,
  status: taskStatus,
}