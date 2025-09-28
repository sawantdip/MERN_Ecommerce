import Product from '../models/productModel.js';
import HandleError from "../utils/handleError.js";
import handleAsyncError from '../middleware/handleAsyncError.js';

//creating Products
export const createProducts = handleAsyncError (async (req, res) => {
        const product = await Product.create(req.body);
        res.status(201).json({
            success: true,
            product
         });
})
//get all products
export const getAllProducts=handleAsyncError(async(req,res)=>{
    const products=await Product.find()
    res.status(200).json({
        success:true,
        products
    })
})

//update product
export const updateProduct = handleAsyncError(async (req, res,next) => {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!product) {
            return next(new HandleError("Product not found",404))
        }
        res.status(200).json({
            success: true,
            product
        });
})

//delete product
export const deleteProduct = handleAsyncError(async (req, res,next) => {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            return next(new HandleError("Product not found",404))
        }
        res.status(200).json({
            success: true,
            message: "Product deleted successfully"
        });
})

//accessing single product
export const getSingleProduct =handleAsyncError( async (req, res,next) => {
    
        const product = await Product.findById(req.params.id);
        if (!product) {
            return next(new HandleError("Product not found",404))
        }
        res.status(200).json({
            success: true,
            product
        }); 
})

