const Book = require("../models/book.js");
const router = require("express").Router();

// get all our saved books
router.get("/api/books", (req, res) => {

    Book.find({})
        .then(books => res.json(books))
        .catch(err => res.status(500).json(err));

});

// add a book to our saved books  
router.post("/api/books", (req, res) => {

    Book.create(req.body)
        .then(book => res.json(book))
        .catch(err => res.status(500).json(err));

});

// delete a book from our saved books  
router.delete("/api/books/:id", (req, res) => {

    Book.findOneAndDelete({ _id: req.params.id })
        .then(book => res.json(book))
        .catch(err => res.status(500).json(err));

});

// get a book from our saved books  
router.get("/api/books/:google_id", (req, res) => {

    Book.find({ "googleBookId": req.params.google_id })
        .then(books => res.json(books))
        .catch(err => res.status(500).json(err));
});

module.exports = router;