const mongoose = require('mongoose');


const connectToDB =  async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('mongoDB connected successfully');

    }catch(error){
        console.error('mongoDB connection error:', error);
        process.exit(1);
    }
};

module.exports = connectToDB;