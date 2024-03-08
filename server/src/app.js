const express = require("express");
require("dotenv").config();
require("./db/connection");
const authRouter = require("./routers/auth-router")

const app = express();
const port = process.env.PORT;


// ===middleware====
app.use(express.json());
app.use("/api/auth", authRouter);

app.listen(port, "192.168.0.104", () =>{
    console.log(`Listen from port ${port}`);
})

