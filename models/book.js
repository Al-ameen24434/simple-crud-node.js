
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        trim: true,
        maxlength: [100, 'Title cannot be more than 100 characters']
    },
    author: {
        type: String,
        required: [true, 'Author is required'],
        trim: true,
        maxlength: [100, 'Author cannot be more than 100 characters']
    },
    publishedDate: {
        type: Number,
        required: [true, 'Published date is required'],
        min: [1000, 'Published date cannot be before 1000'],
        max: [new Date().getFullYear(), 'Published date cannot be in the future']
    },
   
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Book', bookSchema);
