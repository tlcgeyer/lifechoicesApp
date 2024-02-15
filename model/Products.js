import {connection as db} from '../config/index.js'

class Products {
    //fetching multiple products
    fetchProducts(req,res) {
        const qry = `
        SELECT prodID, prodName, prodQuantity,
        prodAmount, userID
        FROM Products;
        `
        db.query(qry, (err, results)=> {
            if(err) throw err
            res.json({
                status: res.statusCode,
                results
            })
        })
    }
    //Fetching a single product
    fetchProduct(req, res) {
        const qry = `
        SELECT prodID, prodName, prodQuantity,
        prodAmount, userID
        FROM Products
        WHERE prodID = ${req.params.id};
        `
        db.query(qry, (err, result)=> {
            if(err) throw err
            res.json({
                status: res.statusCode,
                result
            })
        })
    }
// addProduct will allow us to add a product
    addProduct(req, res) {
        const qry = `
        INSERT INTO Products
        SET ?;
        `
        db.query(qry, (err, result)=> {
            if(err) throw err
            res.json({
                status: res.statusCode,
                msg: "Product added!"
            })
        })
    }
}
export {
    Products
}
