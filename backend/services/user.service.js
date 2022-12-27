import User from "../model/user.entity.js";

class UserService {

    async getUsers() {
        try {
            const users = await User.findAll();
            return users;
        } catch (error) {
            console.log("User Service Error : ", error)
        }
    }
    async updateUser(userId,body) {
        console.log(body)
        try {
            const user = await User.update(body,{
                where:{userId}
            });
            return user;
        } catch (error) {
            console.log("User Service Error : ", error)
        }
    }
    async deleteUser() {
        try {

        } catch (error) {
            console.log("User Service Error : ",error)
        }
    }
}

export default UserService;