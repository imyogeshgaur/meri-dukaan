import express, { urlencoded } from "express";
import connectToDB from "./config/db.config.js";
import userRouter from "./router/user.routes.js";
const app = express();

app.use(urlencoded({extended:true}))

app.use("/user",userRouter)

connectToDB();