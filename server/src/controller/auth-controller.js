const signUp = require("../model/signUp");

const getSignUpData = (async(req, res) =>{
    try{
        const getUserSignUp = await signUp.find();
        if(!getUserSignUp){
            res.status(404).send();
        }else{
            res.status(201).send(getUserSignUp);
        }
    }catch(err){
        res.status(404).send(err);
    }
});

const register = (async (req, res) =>{
    try{
        const user = new signUp(req.body);
        const createUser = await user.save();
        if(!createUser){
            res.status(404).send();
        }else{
            res.status(201).send(createUser)
        }
    }catch(err){
        res.status(404).send(err);
    }
});

module.exports = { getSignUpData, register }