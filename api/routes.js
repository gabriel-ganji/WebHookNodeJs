const express = require("express");
const userModel = require("../models/models");
// const app = express();
const router = express.Router();



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
    const users = await userModel.find({});
    try {
        res.send(users)
    } catch (error) {
        res.status(500).send(error);
    }
});
module.exports=router;

// REMOVER 
router.get("/api", (req, res) => {
    res.json({
      message: "Hello World!",
    });
  });