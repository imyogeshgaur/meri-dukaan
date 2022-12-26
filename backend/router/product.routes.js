import { Router } from "express"
import ProductContoller from "../controller/product.controller.js";
import authorization from "../middleware/authorization.js";
import { uploadProductImage } from "../middleware/upload.js";
const productRouter = Router();

productRouter.get("/list",authorization, async (req, res) =>{
    try {
        const productController = new ProductContoller();
        await productController.getAllProducts(req, res);
    } catch (error) {
        console.log("Product Global Error : ", error);
    }
})

productRouter.post("/addItem",[uploadProductImage,authorization], async (req, res) =>{
    try {
        const productController = new ProductContoller();
        await productController.createProduct(req, res);
    } catch (error) {
        console.log("Product Global Error : ", error);
    }
})

export default productRouter;