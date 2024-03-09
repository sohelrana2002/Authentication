require("dotenv").config();
const express = require("express");
require("./db/connection");
const authRouter = require("./routers/auth-router")

const app = express();
const PORT = process.env.PORT;


// ===middleware====
app.use(express.json());
app.use("/api/auth", authRouter);

app.listen(PORT, () =>{
    console.log(`Listen from port ${PORT}`);
})

