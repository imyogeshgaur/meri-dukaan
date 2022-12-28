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
            const product = await this.productService.createProduct(body, file, token);
            return res.status(201).send(product)
        } catch (error) {
            console.log(error)
            return res.status(500).send("Product Controller : Internal Server Error !!!")
        }
    }
    async getAllProducts(req, res) {
        try {
            const products = await this.productService.getAllProducts();
            return res.status(200).send(products);
        } catch (error) {
            console.log(error);
            return res.status(500).send("Product Controller : Internal Server Error !!!")
        }
    }
    async getAllProductsOfVendor(req, res) {
        try {
            const token = req.headers.authorization;
            const vendorProduct = await this.productService.getAllProductsOfVendor(token);
            return res.status(200).send(vendorProduct);
        } catch (error) {
            console.log(error);
            return res.status(500).send("Product Controller : Internal Server Error !!!");
        }
    }
}

export default ProductContoller;