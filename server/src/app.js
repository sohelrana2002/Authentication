const express = require("express");
require("dotenv").config();
require("./db/connection");
const router = require("./routers/router")

const app = express();
const port = process.env.PORT;


// ===middleware====
app.use(express.json());
app.use(router);

app.listen(port, "192.168.0.106", () =>{
    console.log(`Listen from port ${port}`);
})

