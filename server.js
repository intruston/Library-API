"use strict";
const express = require("express");
const { v4: uuidv4 } = require("uuid");
const app = express();

app.use(express.json());

const data = require("./books.json");

app.get("/books", (req, res) => {
  readBooks(req, res);
});

app.post("/books", (req, res) => {
  createBook(req, res);
});

app.put("/books/:id", (req, res) => {
  updateBook(req, res);
});

app.delete("/books/:id", (req, res) => {
  deleteBook(req, res);
});

function deleteBook(req, res) {
  const bookToDelete = data.find((book) => book.id == req.params.id);
  if (typeof bookToDelete == "undefined") {
    res.status(404);
    res.send("No book found with such id :(");
  }
  data.splice(data.indexOf(bookToDelete), 1);
  res.send("Book was deleted");
}

function updateBook(req, res) {
  if (isInvalid(req)) {
    res.status(400);
    res.send("Invalid request");
    return;
  }
  const bookToUpdate = data.find((book) => book.id == req.params.id);
  if (typeof bookToUpdate == "undefined") {
    res.status(404);
    res.send("No book found with such id :(");
  }
  bookToUpdate.title = req.body.title;
  bookToUpdate.author = req.body.author;
  res.send("Book was updated");
}

function createBook(req, res) {
  if (isInvalid(req)) {
    res.status(400);
    res.send("Invalid request");
    return;
  }
  const id = uuidv4();
  let newBook = {
    id: id,
    title: req.body.title,
    author: req.body.author,
  };
  data.push(newBook);
  res.status(201);
  res.send(`New book was added with id: ${id}`);
}

function readBooks(req, res) {
  res.setHeader("Content-Type", "application/json");
  res.send(data);
}

app.listen(3000, () => {
  console.log(`Example app listening on port 3000`);
});

function isInvalid(req) {
  if (
    typeof req.body == "undefined" ||
    typeof req.body.title == "undefined" ||
    typeof req.body.author == "undefined"
  ) {
    return true;
  } else {
    return false;
  }
}
