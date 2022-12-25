import AuthService from "../services/auth.service.js";
import validator from 'validator';
import { signInUserContoller } from "../helpers/signinUser.js";

class AuthController {
    constructor() {
        this.authService = new AuthService()
    }

    async signUpUser(req, res) {
        try {
            const body = req.body;
            const user = await this.authService.signUpUser(body);
            return res.status(200).send(user);
        } catch (error) {
            console.log(error)
            return res.status(500).send("Auth Service : Internal Server Error !!!")
        }
    }
    async signInUser(req, res) {
        try {
            const email = req.body.email
            if (validator.isEmail(email)) {
                const value = await this.authService.signInUserByEmail(req.body);
                const data = await signInUserContoller(res, value);
                return data;
            } else {
                const value = await this.authService.signInUserByUserName(req.body);
                const data = await signInUserContoller(res, value);
                return data;
            }

        } catch (error) {
            console.log(error)
            return res.status(500).send("Auth Service : Internal Server Error !!!")
        }
    }
}

export default AuthController