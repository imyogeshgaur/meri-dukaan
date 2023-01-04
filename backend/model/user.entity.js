import { Sequelize, DataTypes } from "sequelize";
import * as path from "path"
import dotenv from "dotenv"
const localPath = path.resolve("../backend/.env")
dotenv.config({path:localPath})
const sequelize = new Sequelize(process.env.DB_URI);

const User = sequelize.define('User',{
    // This is Used By Auth Module
    userId:{
        type:DataTypes.UUID,
        require:true,
    },
    userName: {
        type: DataTypes.STRING,
        require: true,
        unique: true,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        require: true,
        unique: true,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        require: true
    },
    role: {
        type: DataTypes.STRING,
        require: true
    },
    // This is Used By User Module
    userImage:{
        type:DataTypes.STRING
    },
    firstName:{
        type:DataTypes.STRING,
    },
    middleName:{
        type:DataTypes.STRING,
      
    },
    lastName:{
        type:DataTypes.STRING,
    },
    phone:{
        type:DataTypes.STRING,
    },
    addressLine1:{
        type:DataTypes.STRING,
    },
    addressLine2:{
        type:DataTypes.STRING,
    },
    city: {
        type: DataTypes.STRING,

    },
    state:{
        type:DataTypes.STRING,
    },
    zip:{
        type:DataTypes.STRING,
    }
})

User.sync()

export default User;