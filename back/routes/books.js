const { Router } = require('express');
const router = Router();
const { unlink } = require('fs-extra');
const path = require('path');

const Book = require('../models/Book');

router.get('/', async (req, res) => {
    const books = await Book.find();
    res.json(books);
});

router.post('/', async (req, res) => {
    const { title, author, isbn } = req.body;
    const imagePath = '/uploads/' + req.file.filename;
    const newBook = new Book({ title, author, isbn, imagePath });
    await newBook.save();
    res.json({ message: 'Book saved' });
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const deleted = await Book.findByIdAndDelete(id);
    unlink(path.resolve('./public' + deleted.imagePath))
    console.log(deleted);
    res.json({ message: 'Book deleted' });
})

module.exports = router;