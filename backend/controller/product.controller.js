import ProductServices from "../services/product.service.js"

class ProductController {
    constructor() {
        this.productServices = new ProductServices();
    }
    async createProduct(req, res) {
        try {
            const body = req.body;
            const productCreated = await this.productServices.createProduct(body);
            return res.status(200).send(productCreated)
        } catch (error) {
            console.log(error);
            return res.status(500).send("Internal Server Error !!!")
        }
    }
    async getAProduct(req, res) {
        try {
            const name = req.body.name;
            const singleProduct = await this.productServices.getAProduct(name);
            return res.status(200).send(singleProduct)
        } catch (error) {
            console.log(error);
            return res.status(500).send("Internal Server Error !!!")
        }
    }
    async getAllProducts(req, res) {
        try {
            const productsList = await this.productServices.getAllProducts();
            return res.status(200).send(productsList);
        } catch (error) {
            console.log(error);
            return res.status(500).send("Internal Server Error !!!")
        }
    }
    async updateProduct(req, res) {
        try {
            const name = req.params.name;
            const data = req.body;
            await this.productServices.updateProduct(name, data);
            return res.status(200).send("Product Updated !!!")
        } catch (error) {
            console.log(error);
            return res.status(500).send("Internal Server Error !!!")
        }
    }
    async deleteProduct(req, res) {
        try {
            const name = req.params.name;
            await this.productServices.deleteProduct(name);
            return res.status(200).send("Product Deleted !!!")
        } catch (error) {
            console.log(error);
            return res.status(500).send("Internal Server Error !!!")
        }
    }
}

export default ProductController
