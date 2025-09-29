require('dotenv').config();

const express = require('express');
const connectToDB = require('./database/db');
const bookRoutes = require('./routes/book-route');
const app = express();

 const PORT = process.env.PORT ;

 //CONNECT TO DB
 

 const startServer = async () => {
  try {
    await connectToDB(); // wait for Mongo to connect
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("❌ Failed to start server:", err.message);
  }
};

startServer();

 //middleware
 app.use(express.json()); 
 


 //routes
 app.use('/api/books', bookRoutes);

 

 app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
 });

 app.get('/test', (req, res) => {
   res.send("Welcome to the Book Store API");
 });  
