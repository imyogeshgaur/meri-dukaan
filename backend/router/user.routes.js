import { Router } from "express";
import UserController from "../controller/user.controller.js";
import authorization from "../middleware/authorization.js";
const userRouter = Router();

userRouter.get("/",authorization,async(req,res)=>{
    
})
userRouter.post("/",authorization,async(req,res)=>{
    try {
        const userController = new UserController();
        await userController.createUser(req,res);
    } catch (error) {
        console.log("User Global Error : ",error);
    }
})
userRouter.put("/",authorization,async(req,res)=>{

})
userRouter.delete("/",authorization,async(req,res)=>{

})

export default userRouter;
