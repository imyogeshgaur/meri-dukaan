import { Router } from "express";
const productRouter = Router();
import ProductController from "../controller/product.controller.js"

productRouter.get("/", async (req, res) => {
    try {
        const productController = new ProductController();
        productController.getAllProducts(req, res);
    } catch (error) {
        console.log("Global Error  " + error);
    }
})
productRouter.get("/:name", async (req, res) => {
    try {
        const productController = new ProductController();
        productController.getAProduct(req, res);
    } catch (error) {
        console.log("Global Error  " + error);
    }
})

productRouter.post("/", async (req, res) => {
    try {
        const productController = new ProductController();
        productController.createProduct(req, res);
    } catch (error) {
        console.log("Global Error  " + error);
    }

})

productRouter.put("/:name", async (req, res) => {
    try {
        const productController = new ProductController();
        productController.updateProduct(req, res);
    } catch (error) {
        console.log("Global Error  " + error);
    }
})

productRouter.delete("/:name", (req, res) => {
    try {
        const productController = new ProductController();
        productController.deleteProduct(req, res);
    } catch (error) {
        console.log("Global Error  " + error);
    }
})

export default productRouter