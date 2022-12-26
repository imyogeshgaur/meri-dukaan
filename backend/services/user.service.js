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
    async createUser(body) {
        try {
            const user = await User.create(body);
            return user;
        } catch (error) {
            console.log("User Service Error : ", error)
        }
    }
    async updateUser() {
        try {

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