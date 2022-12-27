import { Router } from "express";
import UserController from "../controller/user.controller.js";
import authorization from "../middleware/authorization.js";
const userRouter = Router();

userRouter.get("/", authorization, async (req, res) => {

})
userRouter.post("/", authorization, async (req, res) => {
    try {
        const userController = new UserController();
        await userController.createUser(req, res);
    } catch (error) {
        console.log("User Global Error : ", error);
    }
})
userRouter.put("/update/:id", authorization, async (req, res) => {
    try {
        const userController = new UserController();
        await userController.updateUser(req, res);
    } catch (error) {
        console.log("User Global Error : ", error);
    }
})
userRouter.delete("/delete/:id", authorization, async (req, res) => {
    try {
        const userController = new UserController();
        await userController.deleteUser(req,res);
    } catch (error) {
        console.log("User Global Error : ",error);
    }
})

export default userRouter;
