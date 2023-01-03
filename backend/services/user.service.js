import decodeUser from "../helpers/decodeUser.js";
import User from "../model/user.entity.js";

class UserService {

    async getAllUsers() {
        try {
            const users = await User.findAll();
            return users;
        } catch (error) {
            console.log("User Service Error : ", error)
        }
    }

    async updateUser(token, body, file) {
        const userMetaData = decodeUser(token);
        const userId = userMetaData.payload.userId;
        const userImage = process.env.PROFILE_FILE_GET_URL + file;
        try {
            if (file) {
                const user = await User.update(
                    {
                        ...body,
                        userImage
                    }
                    , {
                        where: { userId }
                    });
                return user;
            } else {
                const user = await User.update(
                    {
                        ...body,
                    }
                    , {
                        where: { userId }
                    });
                return user;
            }
        } catch (error) {
            console.log("User Service Error : ", error)
        }
    }
    async deleteUser(userId) {
        try {
            const deleteUser = await User.destroy({ where: { userId } });
            return deleteUser;
        } catch (error) {
            console.log("User Service Error : ", error)
        }
    }
}

export default UserService;