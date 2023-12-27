import express from "express";
import cors from "cors";
import connectDB from "./database.js";
import saveForm from "./controller.js";

const app = express()

app.use(cors({
    origin: "*",
    method: "*",
}))

app.use(express.json());

app.get("/", (req, res) => res.send({message: "this"}))
app.post("/contact", saveForm)

const startServer = async() => {
    try{
        // await here represents that if connection to db is not made then don't start the server
        await connectDB()
        app.listen("8080", () => console.log("server started"))
    }catch(error) {
        console.log("Error connecting to the database")
    }
}

startServer()
