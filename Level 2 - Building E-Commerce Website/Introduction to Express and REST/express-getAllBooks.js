// Loading express module, which would return a function to create a application.
const express = require ('express');

// Call createApplication or express function
const app = express ();

const fs = require ("fs");

function getAllBooks () {
    let data = fs.readFileSync ('./books.json');
    return JSON.parse (data);
}

// app.get ("/a",function (req, res) {
//     res.writeHead (200);
//     res.end ('Hey I am a');
// });

// app.get ("/b",function (req, res) {
//     res.writeHead (200);
//     res.end ('Hey I am b');
// });

app.get("/books", function (req, res) {
    let books = getAllBooks ();
    if (books) {
        res.setHeader ("Content-Type", "application/json");
        res.writeHead (200);
        res.end (JSON.stringify (books));
    } else {
        res.writeHead(500);
    }
});

app.listen (8080, () => {
    console.log ('Application Started');
});




