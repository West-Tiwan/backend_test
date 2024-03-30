import express from "express";
import path from "path";
import pkg from 'mongoose';
import jwt from "jsonwebtoken";

const {mongoose, Collection, Schema} = pkg;
import cookieParser from "cookie-parser";


const app = express();
mongoose.connect("mongodb://localhost:27017", {dbName: "backend"}).then(console.log("DB connected")).catch((e) => {
    console.log("error occured : " + e)
});

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
});

const user = mongoose.model("users", userSchema);

app.use(express.static(path.join(path.resolve(), "public")));
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.set("view engine", "ejs");

const isAuthenticated = async (req, res, next) => {
    const {token} = req.cookies;
    if (token) {
        const decoded = jwt.verify(token, "oi oi oi");
        req.user = await user.findById(decoded._id);
        next();
    } else {
        res.redirect("/login");
    }
};

app.get("/", isAuthenticated, (req, res) => {
    res.render("logout");
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.post("/login", async (req, res) => {
    const {name, email} = req.body;
    const userReturn = await user.create({
        name, email
    });
    const token = jwt.sign({_id: userReturn._id}, "oi oi oi");
    res.cookie("token", token, {expires: new Date(Date.now() + 60 * 1000), httpOnly: true});
    res.redirect("/logout");
});

app.get("/logout", isAuthenticated, (req, res) => {
    res.render("logout");
});

app.post("/logout", (req, res) => {
    res.cookie("token", null, {expires: new Date(Date.now())});
    res.redirect("/");
});

app.listen("2000", () => {
    console.log("Server is running on port 2000")
});