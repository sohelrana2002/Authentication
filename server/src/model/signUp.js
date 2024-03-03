const mongoose = require("mongoose");

const signUpSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    cPassword: {
        type: String,
        required: true,
    },
});


const signUp = new mongoose.model("userSignUp", signUpSchema);

module.exports = signUp;