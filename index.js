import express from "express";
import path from "path";

const app = express();

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