# Library API
A simple API where you could use CRUD operations to create-read-update-delete books from books.json

To create a book use method:
*POST: http://localhost:3000/books*
And send raw JSON, e.g.:
    {
        "title": "Dune",
        "author": "Frank Herbert"
    }
  
To read all books in books.json:
*GET: http://localhost:3000/books*

To update book with specified id in books.json, specify id in url:
*PUT: http://localhost:3000/books/224e93e9-1b6b-49f0-b1b2-eb4c56d0b630*

    {
        "title": "The Hunger Games",
        "author": "Suzanne Collins"
    }
    
To delete book with specified id in books.json, specify id in url:
*DELETE: http://localhost:3000/books/224e93e9-1b6b-49f0-b1b2-eb4c56d0b630*
