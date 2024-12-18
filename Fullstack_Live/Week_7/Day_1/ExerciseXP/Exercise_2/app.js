// In this exercise, you’ll create an API for managing a to-do list with basic CRUD operations (Create, Read, Update, Delete).

// Step 1: Setup

// Create a new directory for your project.
// Navigate to the project directory using your command line.
// Initialize a new Node.js project by running npm init -y.
// Step 2: Install Dependencies
// Install Express.js

// Step 3: Create Your Express Application
// Create a JavaScript file (e.g., app.js) to set up your Express application
const express = require("express");
const todosRouter = require("./routes/todos");

const app = express();
const PORT = 3000;

// Step 4: Create a Router Module
// Inside your project directory, create a new directory called routes. 
// Inside the routes directory, create a JavaScript file (e.g., todos.js) where you will define routes for managing the to-do list using 
// express.Router():

app.use(express.json());

app.use("/todos", todosRouter);

app.get("/", (req, res) => {
    res.send("Welcome to the To-Do List API!");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


// Step 5: Mount the Router in Your Application
// In your app.js file, import the router module you created and mount it in your Express application

// Step 6: Start Your Server
// Now, you can start your Express server by running:

// node app.js
// Step 7: Test Your API
// You can use tools like Postman or curl to test your API endpoints for managing to-do items:

// GET http://localhost:3000/todos (Get all to-do items)
// POST http://localhost:3000/todos (Create a new to-do item with a JSON request body)
// PUT http://localhost:3000/todos/:id (Update a to-do item by ID with a JSON request body)
// DELETE http://localhost:3000/todos/:id (Delete a to-do item by ID)
// This exercise demonstrates a simple to-do list API built using Express.js and express.Router.