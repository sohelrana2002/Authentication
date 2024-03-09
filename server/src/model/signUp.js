const mongoose = require("mongoose");
const bcrypt = require("bcrypt");


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


// =====secure password uing bcrypt=========
signUpSchema.pre("save", async function(next){
    const user = this;
    if(!user.isModified("password", "cPassword")){
        next();
    }

    try{
        const saltRounds = await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(user.password, saltRounds);
        user.password = hash_password;
        user.cPassword = hash_password;
    }catch(err){
        next(err);
    }
})

const SignUp = new mongoose.model("userSignUp", signUpSchema);

module.exports = SignUp;