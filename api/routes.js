const express = require("express");
const userModel = require("../models/models");
// const app = express();
const router = express.Router();

const crypto = require('crypto');

router.use(function(req, res, next){
    const randomUUID =  crypto.randomUUID();
    userModel.create({ token:randomUUID });
    next();
});
router.post("/add_user", async(req, res) =>{
    const user = new userModel(req.body);
    try {
        await user.save();
        res.send(user);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get("/users", async(req,res) => {
    // const randomUUID =  await crypto.randomUUID();
    const users = await userModel.find({});
    try {
        res.send(users)
    } catch (error) {
        res.status(500).send(error);
    }
});
module.exports=router;
