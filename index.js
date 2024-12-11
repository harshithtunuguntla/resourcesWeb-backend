const express = require("express");
const app = express();
const mongoose = require("mongoose");
require('dotenv').config();

app.use(express.json());

mongoose.connect(
  process.env.MONGO_URL
);

const UserSchema = {
  name: String,
  email: String,
  mobile: String,
};

const User = new mongoose.model("User", UserSchema);

app.post("/", async (req, res) => {
  console.log("Post Request Received!");
  const newUser = {
    name: req.body.name,
    email: req.body.email,
    mobile: req.body.mobile,
  };

  let user = new User(newUser);
  let result = await user.save();
  console.log("New User Creted!");
  res.send(result);
});

app.get("/", (req, res) => {
  res.send("This is UP!");
});

app.listen(4000);
