const express = require("express");
require("./config");
const Book = require("./book");

const app = express();
app.use(express.json());
app.post('/books', async (req, res) => {
    const { title, author, year } = req.body;
    const book = new Book({ title, author, year });
    try {
      await book.save();
      res.status(201).send(book);
    } catch (error) {
      res.status(400).send(error);
    }
  });
  
  app.get('/books', async (req, res) => {
    const books = await Book.find();
    res.send(books);
  });
  
  app.get('/books/:id', async (req, res) => {
    try {
      const book = await Book.findById(req.params.id);
      res.send(book);
    } catch (error) {
      res.status(404).send({ message: 'Book not found' });
    }
  });
  

app.listen(8000,()=>{
    console.log('Server running on PORT no 8000')
})