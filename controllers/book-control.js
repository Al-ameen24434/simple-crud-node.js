

const Book = require('../models/book')
const getAllBooks = async (req, res) => {
    // Logic to get all books
    try{
        const allBooks = await Book.find({});
        if(allBooks?.length > 0){
            res.status(200).json({
                success: true,
                data: allBooks
            });
        }
    } catch(error){
        console.error("Error fetching books:", error);
    }
    
};


const getBookById = async (req, res) => {
    // Logic to get a book by ID

    try{
        const BookId = req.params.id;
        const getCurrentBook = await Book.findById(BookId);
        if(!getCurrentBook){
            return res.status(404).json({
                success: false,
                message: "book id not found"
            });
        }
        res.status(200).json({
            success: true,
            data: getCurrentBook
        })
        

    }catch (error){
        console.error("Error fetching book by ID:", error);
    }
};
const addBook = async(req, res) => {
    // Logic to add a new book
    try{
        console.log(" Incoming POST request at /api/books/add");
    console.log(" Request body:", req.body);
        const newBookFormData = req.body;
        const newlyCreatedBook = await Book.create(newBookFormData);
        if(newBookFormData){
            res.status(201).json({
                success: true,
                message:"Book added successfully",
                data: newlyCreatedBook
            });
        }
    }catch(error){
       console.error("Error adding book:", error);
    }
};

const updateBook = async(req, res) => {
    // Logic to get all books

    try {
        const updateBookFormData = req.body;
        const getBookId = req.params.id;
        const updatedBookById = await Book.findByIdAndUpdate(getBookId, updateBookFormData, {
            new: true,
        });

        if(!updatedBookById){
           return res.status(401).json({
                success:false,
                message: "bad request"
            })
        }

        res.status(200).json({
            sucess: true,
            message: "book updated succesfully",
            data: updatedBookById
        })
    } catch (error) {
        res.status(404).json({
            sucess: false,
            message: "not available"

        })
    }
};
const deleteBook= async (req, res) => {
    // Logic to get all books

    try{
      const getBookId = req.params.id;
      const deletedBook = await Book.findByIdAndDelete(getBookId);


        if(!deletedBook){
            return res.status(404).json({
                success:false,
                message: "try another id to delete this book"
            })
        }
        res.status(200).json({
            success:true,
            message: "bokk deletd sucessfully ",
            data: deletedBook
        })

    }catch(e){
        res.status(500).json({
            success:false,
            message: "could not delete it "
        })
    }
};

module.exports = {
    getAllBooks,
    getBookById,
    addBook,
    updateBook,
    deleteBook
};