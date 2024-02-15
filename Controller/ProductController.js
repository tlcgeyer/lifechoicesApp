import bodyParser from "body-parser";
import { express } from "./UserController";
import { Products } from "../model/Products";
import { products } from "../model";

const productRouter = express.Router()

// Fetching all products
productRouter.get('/', (req, res) => {
    try {
        products.fetchProducts(req, res)
    }catch(e) {
        res.json({
            status: res.statusCode,
            msg: "Failed to retrieve products"
        })
    }
})

// Fetching only one product
productRouter.get('/:id', (res, req) => {
    try {
        products.fetchProduct(req, res)
    }catch(e) {
        res.json({
            status: res.statusCode,
            msg: "Failed to retrieve product"
        })
    }
})

// Adding a product
productRouter.post('/addProduct', bodyParser.json(), (req, res) => {
    try {
        products.addProduct(req, res)
    }catch(e) {
        res.json({
            status: statusCode,
            msg: "Failed to add product"
        })
    }
})

export {
    productRouter , express
}