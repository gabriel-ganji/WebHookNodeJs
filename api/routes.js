const express = require("express");
const userModel = require("../models/models");
const app = express();
// const app = require("./api")

app.post("/add_user", async(req, res) =>{
    const user = new userModel(req.body);
    try {
        await user.save();
        response.send(user);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.get("/users", async(req,res) => {
    const users = await userModel.find({});

    try {
        response.send(users)
    } catch (error) {
        response.status(500).send(error);
    }
});

module.exports = app;