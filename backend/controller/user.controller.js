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
        try {
            const id = req.params.id;
            const body = req.body;
            const user = await this.userService.updateUser(id,body);
            if(user[0]){
                return res.status(200).send({message:"User Detail Updated !!!"})
            }else{
                return res.status(200).send({message:"User Detail Not Updated !!!"})
            }
        } catch (error) {
            console.log(error) 
            return res.status(500).send("User Controller : Internal Server Error !!!");
        }
    }
    async deleteUser(req,res){
        try {
            
        } catch (error) {
            console.log(error) 
            return res.status(500).send("User Controller : Internal Server Error !!!");
        }
    }
}

export default UserController