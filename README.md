# JSL03 Project: Console-Based Task Manager

## Important Prerequisite

1. Before starting this challenge, make sure you have reviewed and corrected your JSL02 project using the provided solution. Your prompts for entering task details should be fully functional and include proper validation checks to ensure accurate user input.
2. **Check the project user stories in your student dashboard**, make sure you understand what is required for each feature.

## Overview

This project involves creating a **simple task management system** where users can add **up to three new tasks** to an existing task array. Tasks are **stored as objects in an array**, each with a **unique incremental ID**. Users will enter task details via prompts, and the system will allow filtering to view only completed tasks. The project focuses on **array manipulation, user interaction via prompts and alerts, and console logging for task management**.

## Features Covered

The solution demonstrates how to:

- Initialize an array of task objects with various states
- Prompt the user to **add new tasks** until the list contains exactly six items
- Validate task status input using a loop to prevent invalid entries
- Encapsulate logic into clearly named, reusable functions
- Display both the full list of tasks and completed tasks (`status: "done"`) in the console
- Alert the user when the task board is full

## Structure

The project includes:

- 📦 A task array initialized with 3 predefined tasks
- ✍️ `addTask()` function that handles all user input and validation
- 🔁 A loop that fills the board with user-provided tasks until there are 6 total
- ✅ A `getCompletedTasks()` function that filters and returns completed tasks
- 💬 Alerts and console messages that give users useful feedback

## How to Use This JSL03

1. Open the project in **VS Code** with **Live Server** or run it in a browser environment that supports `prompt()` and `alert()`.
2. Open your browser’s **developer console** to see the task list output.
3. Walk through the code and observe how:
   - Tasks are structured and stored
   - Input is validated in real-time
   - Functions promote clean and modular design
4. Reflect on how to apply these concepts to more complex task management or UI-driven applications.

## Code Quality & Maintainability

- Use meaningful variable and function names to ensure readability and maintainability.
- Follow consistent indentation and formatting to enhance code clarity.
- Include comments explaining key logic and functionality to support future modifications.

## Expected Outcome

A **structured and limited task management system** that enables users to add, review, and filter tasks efficiently while ensuring **clean, well-documented, and maintainable code.**

**Console Log of all and completed tasks**

![console log](./explainer-images/console%20log.png)
