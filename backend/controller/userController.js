const User = require("../models/User");
const asyncHandler = require("express-async-handler");
const generateToken = require("../utils/generateToken");

module.exports.register = async(req,res)=>{

    const {name, email, password} = req.body;
    const userExists = await User.findOne({email});
  
    if(userExists) {
        res.status(400).json({
        message: "user already exists"
        })
        return
    }
    console.log("reaching")
    const user = await User.create({
        name,
        email,
        password,
    });

    if(user) {
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        })
    }else{
        res.status(400);
        throw new Error("Error Occured!");
    }
}

module.exports.login = async(req,res)=>{

    const { email, password } = req.body;
    const user = await User.findOne({email});

    if(user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        })
    } else {
        res.status(400).json({
            message: "Invalid Email or Password"
        })
    }
    
}
