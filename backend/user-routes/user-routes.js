const userRouter = require('express').Router();
const Product = require('../models/product');


// Endpoint for adding a new product

userRouter.post('/products/add-product',(req, res)=>{
    let product = new Product(req.body);
    product.save(err => {
        if(err){
            res.status(400).json({product: 'Could not create new document'});
        }
            res.status(200).json({product: 'Product created successfully'});
    });
});

// Endpoint for returning all products
userRouter.get('/products',(req, res)=>{
    Product.find({},(err,products)=>{
        if(err) throw err;
        res.status(200).json(products);
    })
});

// Endpoint for deleting a product

userRouter.get('/products/delete/:id', (req,res)=>{
    Product.findByIdAndRemove(req.params.id,(err)=>{
        if(err)throw err;
        res.status(200).send({product: 'Product deleted successfully'});
    })
});

module.exports = userRouter;