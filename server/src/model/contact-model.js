const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        lowercase: true,
    },
    message: {
        type: String,
        required: true,
        lowercase: true,
    }
});

const ContactInfo = new mongoose.model("ContactInfo", contactSchema);

module.exports = ContactInfo;