const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

module.exports = function connect() {

    mongoose.connect(`mongodb+srv://aman4654:${process.env.SECRET}@cluster0.gqzvlih.mongodb.net/`)
    .then(()=>{
        console.log("successfully connected to database ")
    })
    .catch((e)=>{
        console.log(`An Error occured while connecting to the database: ${e}`)
    })

 }