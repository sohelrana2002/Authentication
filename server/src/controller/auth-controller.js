const SignUp = require("../model/signUp");
const bcrypt = require("bcrypt");

const getSignUpData = (async(req, res) =>{
    try{
        const getUserSignUp = await SignUp.find();
        if(!getUserSignUp){
            res.status(404).json();
        }else{
            res.status(201).send(getUserSignUp);
        }
    }catch(err){
        res.status(404).send(err);
    }
});


// ==========for sign up=========
const register = (async (req, res) => {
    try {
        const { email, password, cPassword } = req.body;
        const userExist = await SignUp.findOne({ email });

        if (userExist) {
            return res.status(400).json({
                message: "email already exists"
            });
        }

        const createUser = await SignUp.create({ 
            email,
            password,
            cPassword
        });

        console.log(createUser);
        res.status(201).json({
            message: "Sign Up Successfull",
            token: await createUser.generateToken(),
            userId: createUser._id.toString(),
        });
    } catch (err) {
        res.status(500).json("internal server error");
    }
});


// ========for log in=======
const login = (async (req, res) => {
    try {
        const { email, password } = req.body;
        const userExist = await SignUp.findOne({ email });

        if (!userExist) {
            return res.status(400).json({
                message: "Invalid Credentials"
            });
        }

        // =====1st method====
        // const isPasswordValid = await bcrypt.compare(password, userExist.password);
        // =====2nd method====
        const isPasswordValid = await userExist.comparePassword(password);


        console.log(isPasswordValid);
        if(isPasswordValid){
            res.status(200).json({
                message: "Successfully login",
                token: await userExist.generateToken(),
                userId: userExist._id.toString(),
            });
        }else{
            res.status(400).json({
                message: "Invalid email or password"
            });
        }
    } catch (err) {
        res.status(500).json("internal server error");
    }
});


module.exports = { getSignUpData, register, login }