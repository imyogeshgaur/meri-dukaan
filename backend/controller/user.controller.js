import UserService from "../services/user.service.js";

class UserController {
    constructor() {
        this.userService = new UserService();
    }

    async getAllUsers(req, res) {
        try {
            const users = await this.userService.getAllUsers();
            return res.status(200).send(users);
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    }

    async updateUser(req, res) {
        try {
            const file = req.file?.filename;
            const token = req.headers.authorization;
            const body = req.body;
            const user = await this.userService.updateUser(token, body, file);
            if (user[0]) {
                return res.status(200).send({ message: "User Detail Updated !!!" })
            } else {
                return res.status(200).send({ message: "User Detail Not Updated !!!" })
            }
        } catch (error) {
            console.log(error)
            return res.status(500).send("User Controller : Internal Server Error !!!");
        }
    }
    
    async deleteUser(req, res) {
        try {
            const id = req.params.id;
            const user = this.userService.deleteUser(id);
            if (user) {
                return res.status(200).send({ message: "User Deleted !!!" })
            } else {
                return res.status(200).send({ message: "User Not Deleted !!!" })
            }
        } catch (error) {
            console.log(error)
            return res.status(500).send("User Controller : Internal Server Error !!!");
        }
    }
}

export default UserController