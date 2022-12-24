import User from "../model/user.entity.js";
import bcrypt from "bcrypt"

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
            const { userName, email, name, password, role } = body;
            const newPassword = await bcrypt.hash(password, 12);
            const newUser = await User.create({
                userName,
                email,
                name,
                password: newPassword,
                role
            })
            const user = await newUser.save();
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