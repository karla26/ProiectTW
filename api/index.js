const express = require("express");
const app = express();
const mongoose = require("mongoose");
const authRoute = require("../api/routes/auth");
const dotenv = require('dotenv');

mongoose.connect(process.env.MONGO_UR, {
    useNewUrlParser : true,
    useUnifiedTopology : true,
    useCreateIndex : true,
})
    .then(() => console.log("DB Connection Succesfull!"))
    .catch((err) => console.log(err));


app.use("/api/auth", authRoute);

app.listen(8800, () =>{
    console.log('http://localhost:8800/')
})