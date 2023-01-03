import { Router } from "express";
import UserController from "../controller/user.controller.js";
import authorization from "../middleware/authorization.js";
import { uploadProfileImage } from "../middleware/upload.js";
const userRouter = Router();

userRouter.get("/list", authorization, async (req, res) => {
    try {
        const userController = new UserController();
        await userController.getAllUsers(req, res);
    } catch (error) {
        console.log("User Global Error : ", error);
    }
})

userRouter.put("/update", [uploadProfileImage, authorization], async (req, res) => {
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
        await userController.deleteUser(req, res);
    } catch (error) {
        console.log("User Global Error : ", error);
    }
})

export default userRouter;
