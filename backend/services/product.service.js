import decodeUser from "../helpers/decodeUser.js";
import Product from "../model/product.entity.js";
import * as path from "path";
import dotenv from "dotenv"
const localPath = path.resolve("../backend/.env")
dotenv.config({path:localPath})
import {v1} from "uuid"

class ProductService {
    async getAllProducts(){
        try {
           const products = await Product.findAll();
           return products; 
        } catch (error) {
            console.log("Product Service Error : ", error)
        }
    }

    async createProduct(body,file, token) {
        try {
            const decodedVal = decodeUser(token);
            const productVendor = decodedVal.payload.userId;
            const productImage = process.env.PRODUCT_FILE_GET_URL + file;
            const id = v1();
            const product = await Product.create({
                productId:id,
                ...body,
                productImage,
                productVendor
            });
            return product;
        } catch (error) {
            console.log("Product Service Error : ", error)
        }
    }
}

export default ProductService