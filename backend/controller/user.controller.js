import  UserService from "../services/user.service.js";

class UserController{
    constructor(){
        this.userService = new UserService();
    }

    async getUsers(req,res){

    }
    async createUser(req,res){
        try {
            const body = req.body;
            const user = await this.userService.createUser(body);
            return res.status(201).send(user);
        } catch (error) {
           console.log(error) 
           return res.status(500).send("User Controller : Internal Server Error !!!");
        }
    }
    async updateUser(req,res){

    }
    async deleteUser(req,res){

    }
}

export default UserController