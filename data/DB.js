import mongoose from "mongoose";

export const connectDB = async () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "backend",
    }).then(r => {
        console.log("Connected to MongoDB")
    }).catch(e => {
        console.log("Error connecting to MongoDB")
    })
};