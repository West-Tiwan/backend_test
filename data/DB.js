import mongoose from "mongoose";

export const connectDB = async () => {
    mongoose.connect("mongodb://localhost:27017", {
        dbName: "backend",
    }).then(r => {
        console.log("Connected to MongoDB")
    }).catch(e => {
        console.log("Error connecting to MongoDB")
    })
};