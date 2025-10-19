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

// Repeat function until there are 6 tasks in total
while (initialTasks.length < 6) {
  addTask();
}

// Alert user when inital tasks' array reached its limit
if (initialTasks.length === 6) {
  alert(
    "There are enough tasks on your board. Please check them in the console.",
  );
}

// Prompt user to input task and only 'todo', 'doing' or 'done' may be used as status inputs
function addTask() {
  const taskTitle = prompt("Enter task title:");
  const taskDescription = prompt("Enter task description:");
  let taskStatus = prompt("Enter task status (todo, doing, done):").toLowerCase();

  // Loop until user enters valid status input: 'todo', 'doing', or 'done'
  while (
    taskStatus !== "todo" &&
    taskStatus !== "doing" &&
    taskStatus !== "done"
  ) {
    alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
    taskStatus = prompt("Enter task status (todo, doing, done):").toLowerCase();
  }

  // Store user input values in an object
  const newTask = {
    id: initialTasks.length + 1, // Increase ID by 1 everytime a new task is added to indicate 6 ID's
    title: taskTitle,
    description: taskDescription,
    status: taskStatus,
  };

  // Push every new task to initial tasks array
  initialTasks.push(newTask);
}

// Filter all completed tasks in an array
function findcompletedTasks() {
  return initialTasks.filter((task) => task.status === "done");
}

//Display all tasks in the console
console.log("All tasks: ", initialTasks);

//Display completed tasks in the console
console.log("Completed tasks: ", findcompletedTasks());
