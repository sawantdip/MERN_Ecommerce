// backend/routes/productRoutes.js
import { deleteProduct, getSingleProduct, updateProduct } from '../controller/productController.js';
import express from 'express';
import { createProducts, getAllProducts } from '../controller/productController.js';

const router = express.Router();

router.route("/products").get(getAllProducts).post(createProducts);
router.route("/product/:id").put(updateProduct).delete(deleteProduct).get(getSingleProduct);
export default router;
