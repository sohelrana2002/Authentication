require("dotenv").config();
const express = require("express");
require("./db/connection");
const cors = require("cors");
const authRouter = require("./routers/auth-router");
const contactRouter = require("./routers/contact-router");
const deleteRouter = require("./routers/deleteAllUserRouter");

const app = express();
const PORT = process.env.PORT;

var corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
  // optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// ===middleware====
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/contactInfo", contactRouter);

app.use("/api", deleteRouter);

app.listen(PORT, () => {
  console.log(`Listen from port ${PORT}`);
});
