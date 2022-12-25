import decodeUser from "../helpers/decodeUser.js";
import Product from "../model/product.entity.js";
import {v1} from "uuid"

class ProductService {
    async createProduct(body, token) {
        try {
            const decodedVal = decodeUser(token);
            const productVendor = decodedVal.payload.userId;
            const id = v1();
            console.log(productVendor)
            const product = await Product.create({
                productId:id,
                ...body,
                productVendor
            });
            return product;
        } catch (error) {
            console.log("Product Service Error : ", error)
        }
    }
}

export default ProductService