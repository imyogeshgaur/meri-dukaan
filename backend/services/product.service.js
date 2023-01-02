import decodeUser from "../helpers/decodeUser.js";
import Product from "../model/product.entity.js";
import * as path from "path";
import dotenv from "dotenv"
const localPath = path.resolve("../backend/.env")
dotenv.config({ path: localPath })
import { v1 } from "uuid"

class ProductService {
    async getAllProducts() {
        try {
            const products = await Product.findAll();
            return products;
        } catch (error) {
            console.log("Product Service Error : ", error)
        }
    }

    async createProduct(body, file, token) {
        try {
            const decodedVal = decodeUser(token);
            const productVendor = decodedVal.payload.userId;
            const productImage = process.env.PRODUCT_FILE_GET_URL + file;
            const id = v1();
            const product = await Product.create({
                productId: id,
                ...body,
                productImage,
                productVendor
            });
            return product;
        } catch (error) {
            console.log("Product Service Error : ", error)
        }
    }

    async getAllProductsOfVendor(token) {
        try {
            const decodedVal = decodeUser(token);
            const userId = decodedVal.payload.userId;
            const productOfVendor = await Product.findAll({
                where: { productVendor: userId }
            });
            return productOfVendor;
        } catch (error) {
            console.log("Product Service Error : ", error)
        }
    }
    async getAProduct(productId) {
        try {
            const product = await Product.findOne({ where: { productId } })
            return product;
        } catch (error) {
            console.log("Product Service Error : ", error)
        }
    }
    async updateProduct(body, file) {
        try {
            const { productId } = body;
            const productImage = process.env.PRODUCT_FILE_GET_URL + file;
            if (file) {
                const updateProduct = await Product.update({
                    ...body,
                    productImage
                }, {
                    where: { productId }
                })
                return updateProduct;
            } else {
                const updateProduct = await Product.update({
                    ...body
                }, {
                    where: { productId }
                })
                return updateProduct;
            }
        } catch (error) {
            console.log("Product Service Error : ", error)
        }
    }
    async deleteProduct(productId) {
        try {
            const deleteProduct = await Product.destroy({ where: { productId } });
            return deleteProduct;
        } catch (error) {
            console.log("Product Service Error : ", error)
        }
    }
}

export default ProductService