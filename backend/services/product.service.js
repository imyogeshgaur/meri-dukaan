import Product from "../model/product.entity.js"

class UserService {
    async createProduct(body) {
        const { name, qty } = body;
        const createdProduct = await Product.create({ name, qty });
        return createdProduct.dataValues;
    }
    async getAProduct(name) {
        const product = await Product.findOne({ name: name })
        return product.dataValues;
    }
    async getAllProducts() {
        const finalProducts = []
        const products = await Product.findAll()
        for (let i = 0; i < products.length; i++) {
            finalProducts.push(products[i].dataValues);
        }
        return finalProducts
    }
    async updateProduct(name, data) {
        const product = await Product.findOne({ name: name })
        if (product) {
            await product.update(data)
        }
    }
    async deleteProduct(name) {
        const product = await Product.findOne({ name: name })
        if (product) {
            await product.destroy();
        }
    }
}

export default UserService;

