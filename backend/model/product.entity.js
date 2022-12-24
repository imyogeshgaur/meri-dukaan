import { DataTypes,Sequelize} from "sequelize"
import pg from "pg"
const sequelize = new Sequelize('testing', 'postgres', 'root', {
    host: 'localhost',
    dialect: 'postgres',
    logging:false
  });

const Product = sequelize.define('Product',{
    name:{
        type:DataTypes.STRING
    },
    qty:{
        type:DataTypes.STRING
    }
})
Product.sync({alter:true})
export default Product