import Sequelize from 'sequelize';
import 'pg';
import dotenv from "dotenv"
import path from "path"
const localPath = path.resolve("./src/.env")
dotenv.config({ path: localPath })

const sequelize = new Sequelize(process.env.DATABASE, process.env.USER_NAME, process.env.PASSWORD, {
  host: process.env.HOST,
  dialect: process.env.DIALECT,
  logging:false
});

const connect = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connected SucessFully !!!");
  } catch (error) {
    console.log(error);
  }

}

export default connect;