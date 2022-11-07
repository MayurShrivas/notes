const express = require ('express');
const app = express ();

const fs = require ("fs");

function getAllBooks () {
    let data = fs.readFileSync ('./books.json');
    return JSON.parse (data);
}

function getBookById (id) {
    let data = fs.readFileSync ('./books.json');
    let jsonData = JSON.parse(data);
    return jsonData.filter((book) => book.id === id) [0];
}

app.get("/books/:id", function (req, res,id) { 
    let book = getBookById (parseInt(req.params.id));
    if (book) {
        res.setHeader ("Content-Type", "application/json");
        res.writeHead (200);
        res.end (JSON.stringify (book));
    } else {
        res.writeHead(500);
    }
});

app.listen (8080, () => {
    console.log ('Application Started');
});