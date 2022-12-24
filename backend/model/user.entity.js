import { Sequelize, DataTypes } from "sequelize";
const sequelize = new Sequelize('mysql::memory:');

const User = sequelize.define({
    // This is Used By Auth Module
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
    firstName:{
        type:DataTypes.STRING,
        require:true
    },
    middleName:{
        type:DataTypes.STRING,
      
    },
    lastName:{
        type:DataTypes.STRING,
        require:true
    },
    phone:{
        type:DataTypes.STRING,
        require:true
    },
    addressLine1:{
        type:DataTypes.STRING,
        require:true
    },
    addressLine2:{
        type:DataTypes.STRING,
        require:true
    },
    city: {
        type: DataTypes.STRING,
        require: true
    },
    state:{
        type:DataTypes.STRING,
        require:true
    },
    zip:{
        type:DataTypes.INTEGER,
        require:true
    }
})

User.sync()

export default User;