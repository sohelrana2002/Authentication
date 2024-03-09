const SignUp = require("../model/signUp");

const getSignUpData = (async(req, res) =>{
    try{
        const getUserSignUp = await SignUp.find();
        if(!getUserSignUp){
            res.status(404).send();
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
        if (!createUser) {
            res.status(404).send();
        } else {
            res.status(201).send(createUser)
        }
    } catch (err) {
        res.status(404).send(err);
    }
});

module.exports = { getSignUpData, register }