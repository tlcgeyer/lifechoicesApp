import express  from "express";
import bodyParser from "body-parser";
import { products } from "../model/index.js";

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

//Updating a product 
productRouter.patch('/update/:id', bodyParser.json(), (req, res)=>{
    try{
        products.updateProduct(req, res)
    }catch(e) {
        res.json({
            status: res.statusCode,
            msg: "Failed to update a product."
        })
    }
})


// Deleting a product
productRouter.delete('/delete/:id', (req, res)=>{
    try{
        products.deleteProduct(req, res)
    }catch(e) {
        res.json({
            status: res.statusCode,
            msg: "Failed to delete a product."
        })
    }
})

export {
    productRouter , express
}