// Prompt users for task 1 title, description and status inputs

let titleTask1 = prompt("Enter task 1 title:");

let descriptionTask1 = prompt("Enter task 1 description:");

let statusTask1 = prompt("Enter task 1 status (todo, doing, done):").toLowerCase(); //convert the status input to lowercase

// check if user status input is valid, if not return user to prompt

while (statusTask1 !== "todo" && statusTask1 !== "doing" && statusTask1 !== "done") {
  alert(`Invalid status. Please enter "todo", "doing" or "done"`);
  statusTask1 = prompt("Enter task 1 status (todo, doing, done):").toLowerCase();
}

// Check if task 1 is done and log it

if (statusTask1 === "done") {
    console.log(titleTask1 + ": " + "Make corrections to JSL01, " + "status: " + statusTask1);
}

// Repeat everything for Task 2

let titleTask2 = prompt("Enter task 2 title:");

let descriptionTask2 = prompt("Enter task 2 description:");

let statusTask2 = prompt("Enter task 2 status (todo, doing, done):").toLowerCase(); //convert the status input to lowercase

// check if user status input is valid, if not return user to prompt

while (statusTask2 !== "todo" && statusTask2 !== "doing" && statusTask2 !== "done") {
    alert(`Invalid status. Please enter "todo", "doing" or "done"`);
    statusTask2 = prompt("Enter task 2 status (todo, doing, done):").toLowerCase();
}

// Check if task 2 is done and log it

if (statusTask2 === "done") {
    console.log(titleTask2 + ": " + "Make corrections to JSL02, " + "status: " + statusTask2);
}

// If neither task 1 nor 2 is done give encouring message

if (statusTask1 !== "done" && statusTask2 !== "done") {
    console.log("No tasks completed, let's get to work!");
} 



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
