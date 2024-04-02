import {connectDB} from "./data/DB.js";
import {app} from "./app.js";

connectDB().then(r => {
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});