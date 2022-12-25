import express, { urlencoded } from "express";
import connectToDB from "./config/db.config.js";
import authRouter from "./router/auth.routes.js";
import productRouter from "./router/product.routes.js";
import userRouter from "./router/user.routes.js";
const app = express();

app.use(urlencoded({extended:true}))

app.use("/user",userRouter)
app.use("/auth",authRouter)
app.use("/product",productRouter)

connectToDB();

app.listen(4000)