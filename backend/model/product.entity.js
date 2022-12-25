import { Sequelize, DataTypes } from "sequelize";
import * as path from "path"
import dotenv from "dotenv"
const localPath = path.resolve("../backend/.env")
dotenv.config({path:localPath})
const sequelize = new Sequelize(process.env.DB_URI);

const Product = sequelize.define('Product',{
    productId:{
        type:DataTypes.UUID,
        require:true,
        primaryKey:true
    },
    productName:{
        type:DataTypes.STRING,
        require:true
    },
    productPrice:{
        type:DataTypes.INTEGER,
        require:true
    },
    productQuantity:{
        type:DataTypes.INTEGER,
        require:true
    },
    productVendor:{
        type:DataTypes.UUID
    }
})

Product.sync()

export default Product;