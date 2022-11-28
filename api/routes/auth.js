const router = require("express").Router();
const User = require("../models/User");

//REGISTER
router.post("/register", (req, res) => {
    const newUser = User({
       //username : req.body.username,
        email :  req.body.email,
        password : req.body.password
    });


        const user = newUser.save();
    res.status(201).json(user); 

})

module.exports = router; 