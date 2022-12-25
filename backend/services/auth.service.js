import User from "../model/user.entity.js"
import bcrypt from "bcrypt";
import { v1 } from "uuid";
import { signInUserService } from "../helpers/signinUser.js";
import { passwordResetMail } from "../helpers/maiToUser.js";
import { resetPasswordFirstName, resetPasswordUserName } from "../helpers/mailTemplates.js";

class AuthService {
    async signUpUser(body) {
        try {
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
        } catch (error) {
            console.log("Auth Service Error : ", error)
        }
    }
    async signInUserByUserName(body) {
        try {
            const { email, password } = body;
            const userByUserName = await User.findOne({ where: { userName: email } });
            const value = await signInUserService(userByUserName, password);
            return value;
        } catch (error) {
            console.log("Auth Service Error : ", error)
        }
    }
    async signInUserByEmail(body) {
        try {
            const { email, password } = body;
            const userByEmail = await User.findOne({ where: { email } });
            const value = await signInUserService(userByEmail, password);
            return value;
        } catch (error) {
            console.log("Auth Service Error : ", error)
        }
    }
    async mailTheUser(email) {
        try {
            const user = await User.findOne({ where: { email } })
            if (user) {
                const subject = "Password Reset Mail";
                const firstName = user.firstName;
                const userId = user.userId;
                const textOfMail = resetPasswordFirstName(userId,firstName);
                if (firstName !== null) {
                    await passwordResetMail(email, subject, textOfMail);
                } else {
                    const userName = await user.userName;
                    const userId = user.userId;
                    const textOfMail = resetPasswordUserName(userId,userName);
                    await passwordResetMail(email, subject, textOfMail);
                }
            } else {
                return "User Not Exist";
            }

        } catch (error) {
            console.log("Auth Service Error : ", error)
        }
    }
    async resetPassword(userId,password) {
        try {
            const hashedVal = await bcrypt.hash(password,12)
            const user = await User.update({password:hashedVal},{
                where:{userId}
            });
            if(user){
                return "Password Reset Sucessfully !!!"
            }else{
                return "Password Rest is Unsuccessful !!!"
            }
        } catch (error) {

        }
    }
}

export default AuthService;
