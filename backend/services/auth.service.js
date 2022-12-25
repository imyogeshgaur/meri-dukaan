import User from "../model/user.entity.js"
import bcrypt from "bcrypt";
import {v1} from "uuid";
import {signInUserService} from "../helpers/signinUser.js";

class AuthService {
    async signUpUser(body) {
        const { userName, email, password, role } = body;
        const newPassword = await bcrypt.hash(password, 12);
        const id = v1();
        const newSignedInUser = await User.create({
            userId: id,
            userName,
            email,
            password: newPassword,
            role
        })
        const userToRegister = await newSignedInUser.save();
        return userToRegister;
    }
    async signInUserByUserName(body) {
        const { email, password } = body;
        const userByUserName = await User.findOne({where:{ userName:email }});
        const value = await signInUserService(userByUserName,password);
        return value;
    }
    async signInUserByEmail(body) {
        const { email, password } = body;
        const userByEmail = await User.findOne({where:{ email }});
        const value = await signInUserService(userByEmail,password);
        return value;
    }
}

export default AuthService;
