const ContactInfo = require("../model/contact-model");

const getContactInfo = async (req, res) =>{
    try{
        const response = req.body;
        const result = await ContactInfo.create(response);
        console.log(result);
        return res.status(200).json({
            msg: "Message send successfully"
        });
    }catch(err){
        res.status(500).json({
            msg: err
        })
    }
}


module.exports = { getContactInfo }