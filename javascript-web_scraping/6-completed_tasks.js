#!/usr/bin/node
const axios = require('axios');

if (process.argv.length !== 3) {
    console.log("Usage: node script.js <API_URL>");
    process.exit(1);
}

const apiUrl = process.argv[2];

axios.get(apiUrl)
    .then(response => {
        const completedTasks = {};
        response.data.forEach(todo => {
            if (todo.completed) {
                completedTasks[todo.userId] = (completedTasks[todo.userId] || 0) + 1;
            }
        });
        console.log("Number of completed tasks by user id:");
        Object.entries(completedTasks).forEach(([userId, numCompletedTasks]) => {
            console.log(`User ID: ${userId}, Completed Tasks: ${numCompletedTasks}`);
        });
    })
    .catch(error => {
        console.error("Error: Failed to retrieve data.", error.message);
    });