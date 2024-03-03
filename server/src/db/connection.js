const mongoose = require("mongoose");
require("dotenv").config();
const db = process.env.DATA_BASE;

mongoose.connect(db)
.then(() =>{
    console.log("Connected with mongoose");
})
.catch((err) =>{
    console.log(`Mongoose connection error ${err}`);
})