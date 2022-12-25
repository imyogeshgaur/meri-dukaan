import { Router } from "express"
import ProductContoller from "../controller/product.controller.js";
import authorization from "../middleware/authorization.js";
const productRouter = Router();

productRouter.post("/addItem", authorization, async (req, res) => {
    try {
        const productController = new ProductContoller();
        await productController.createProduct(req, res);
    } catch (error) {
        console.log("Product Global Error : ", error);
    }
})

export default productRouter;