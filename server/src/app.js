require("dotenv").config();
const express = require("express");
require("./db/connection");
const cors = require("cors");
const authRouter = require("./routers/auth-router");
const contactRouter = require("./routers/contact-router");

const app = express();
const PORT = process.env.PORT;

// var corsOptions = {
//     origin: 'http://localhost:5173',
//     optionsSuccessStatus: 200
// }
// ===middleware====
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/contactInfo", contactRouter);
// app.use(cors(corsOptions));

app.listen(PORT, () =>{
    console.log(`Listen from port ${PORT}`);
})

