const SignUp = require("../model/signUp");

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
        res.status(404).json("internal server error");
    }
});

module.exports = { getSignUpData, register }