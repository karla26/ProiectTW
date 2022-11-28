const express = require("express");
const app = express();
const mongoose = require("mongoose");
const authRoute = require("../api/routes/auth");
const dotenv = require("dotenv");

dotenv.config("./.env");

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("DB Connection Succesfull!"))
    .catch((err) => console.log(err));

app.use(express.json());

app.use("/api/auth", authRoute);

app.listen(8800, () =>{
    console.log('http://localhost:8800/')
})

