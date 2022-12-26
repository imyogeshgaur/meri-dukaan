import express, { urlencoded } from "express";
import connectToDB from "./config/db.config.js";
import authRouter from "./router/auth.routes.js";
import productRouter from "./router/product.routes.js";
import userRouter from "./router/user.routes.js";
import cors from "cors"
import * as path from "path";
const app = express();

app.use(express.json())
app.use(urlencoded({extended:true}))
app.use(cors({
    origin: 'http://localhost:5173'
}));

app.use("/user",userRouter)
app.use("/auth",authRouter)
app.use("/product",productRouter)

app.use("/static/product",express.static(path.join(process.cwd(),"uploads/products")))
app.use("/static/user",express.static(path.join(process.cwd(),"uploads/users")))

connectToDB();

app.listen(4000)