const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");

//REGISTER
router.post("/register", async (req, res) => {
    const newUser = User({
        username : req.body.username,
        email :  req.body.email,
        password : CryptoJS.AES.encrypt( 
            req.body.password,
            process.env.SECRET_KEY
        ).toString()
    });

    try{
        const user = await newUser.save();
        console.log(user);
        res.status(201).json(user); 
    } catch (err) {
        res.status(500).json(err);
    }
})


//LOGIN
router.post("/login", async (req, res) => {
    
    try{
        const user = await User.findOne({ email : req.body.email });
        if (!user) 
            res.status(404).json("Wrong username or password");

        const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
        const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

        if (originalPassword !== req.body.password) 
            res.status(404).json("Wrong username or password");
        
        const {password, ...info} = user._doc;
        
        res.status(200).json(info);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router; 