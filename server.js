import {connectDB} from "./data/DB.js";
import {app} from "./app.js";

connectDB().then(r => {
});

app.listen(process.env.PORT, () => {
    console.log("Server is running on port " + process.env.PORT);
});