import { Router } from "express";
import UserController from "../controller/user.controller.js";
const userRouter = Router();

userRouter.get("/",async(req,res)=>{
    
})
userRouter.post("/",async(req,res)=>{
    try {
        // const userController = new UserController();
        // await userController.createUser(req,res);
    } catch (error) {
        console.log("User Global Error : ",error);
    }
})
userRouter.put("/",async(req,res)=>{

})
userRouter.delete("/",async(req,res)=>{

})

export default userRouter;
