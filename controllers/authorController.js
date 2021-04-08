//link to author model
const authors = require('../models/author')

// handle request to get all authors
const getAllAuthors = (req, res) => {
 res.send(authors) // send list to browser
}

// Function to handle a request to a particular author
const getAuthorByID = (req, res) => {
    // search for author in the database via ID
    const author = authors.find(author => author.id === req.params.id)
    
    if (author) {
        res.send(author) // send back the author details
    }
    else {
        // you can decide what to return if author is not found
        // currently, an empty list will be returned
        res.send([])
    }
}

// Function to add an author
const addAuthor = (req, res) => {
    // json body in the request
    newAuthor = req.body
    // add new author
    authors.push(newAuthor)
    // return entire author list
    res.send(authors)
}

module.exports = {
    getAllAuthors, getAuthorByID, addAuthor
}
   