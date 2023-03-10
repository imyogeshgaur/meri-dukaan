import { Router } from "express"
import ProductContoller from "../controller/product.controller.js";
import authorization from "../middleware/authorization.js";
import { uploadProductImage } from "../middleware/upload.js";
const productRouter = Router();

productRouter.get("/list", authorization, async (req, res) => {
    try {
        const productController = new ProductContoller();
        await productController.getAllProducts(req, res);
    } catch (error) {
        console.log("Product Global Error : ", error);
    }
})
productRouter.get("/vendorProduct", authorization, async (req, res) => {
    try {
        const productController = new ProductContoller();
        await productController.getAllProductsOfVendor(req, res);
    } catch (error) {
        console.log("Product Global Error : ", error);
    }
})
productRouter.get("/:id", authorization, async (req, res) => {
    try {
        const productController = new ProductContoller();
        await productController.getAProduct(req, res);
    } catch (error) {
        console.log("Product Global Error : ", error);
    }
})

productRouter.post("/addItem", [uploadProductImage, authorization], async (req, res) => {
    try {
        const productController = new ProductContoller();
        await productController.createProduct(req, res);
    } catch (error) {
        console.log("Product Global Error : ", error);
    }
})

productRouter.put("/update", [uploadProductImage, authorization], async (req, res) => {
    try {
        const productController = new ProductContoller();
        await productController.updateProduct(req, res);
    } catch (error) {
        console.log("Product Global Error : ", error);
    }
})

productRouter.delete("/delete/:id",authorization, async (req, res) => {
    try {
        const productController = new ProductContoller();
        await productController.deleteProduct(req, res);
    } catch (error) {
        console.log("Product Global Error : ", error);
    }
})


export default productRouter;