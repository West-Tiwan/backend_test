import express from "express";
import path from "path";
import pkg from 'mongoose';

const {mongoose, Collection, Schema} = pkg;
import cookieParser from "cookie-parser";


const app = express();
mongoose.connect("mongodb://localhost:27017", {dbName: "backend"}).then(console.log("DB connected")).catch((e) => {
    console.log("error occured : " + e)
});

const formSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone_no: Number,
});

const reply = mongoose.model("Replies", formSchema);

app.use(express.static(path.join(path.resolve(), "public")));
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("login");
});

app.post("/login", (req, res) => {
    res.cookie("name", "yahoo", {
        maxAge: new Date(new Date() + 1000 * 60),
        httpOnly: true,
        secure: true,
    });
    res.redirect("/");
});

app.listen("2000", () => {
    console.log("Server is running on port 2000")
});