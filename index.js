const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const {Collection, Schema} = mongoose;
const app = express();
mongoose.connect("mongodb://localhost:27017", {dbName: "backend"}).then(console.log("DB connected")).catch((e) => {
    console.log("error occured : " + e)
})

const formSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone_no: Number,
})

const reply = mongoose.Collection("Replies", formSchema)

app.use(express.static(path.join(path.resolve(), "public")))
app.use(express.urlencoded({extended: true}));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index");
});

app.post("/", (req, res) => {
    console.log(req.body.name);
    console.log(req.body.email);
    console.log(req.body.number);
    res.redirect("/");
});

app.listen("2000", () => {
    console.log("Server is running on port 2000")
});