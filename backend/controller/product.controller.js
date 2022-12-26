import ProductService from "../services/product.service.js";

class ProductContoller {
    constructor() {
        this.productService = new ProductService();
    }
    async createProduct(req, res) {
        try {
            const body = req.body;
            const file = req.file?.filename;
            const token = req.headers.authorization;
            const product = await this.productService.createProduct(body,file, token);
            return res.status(201).send(product)
        } catch (error) {
            console.log(error)
            return res.status(500).send("Internal Server Error !!!")
        }
    }
}

export default ProductContoller;