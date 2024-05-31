#!/usr/bin/node
const axios = require('axios');
const fs = require('fs');

if (process.argv.length !== 4) {
    console.log("Usage: node script.js <URL> <file_path>");
    process.exit(1);
}

const url = process.argv[2];
const filepath = process.argv[3];

axios.get(url)
    .then(response => {
        fs.writeFile(filepath, response.data, { encoding: 'utf-8' }, (err) => {
            if (err) {
                console.error("Error writing to file:", err);
                return;
            }
            console.log("Webpage content saved successfully to:", filepath);
        });
    })
    .catch(error => {
        console.error("An error occurred:", error);
    });