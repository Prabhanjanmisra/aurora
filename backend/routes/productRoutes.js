import express from 'express';
const router = express.Router();
import { getProduct, getProductById, createProduct, updateProduct, deleteProduct, createProductReview, getTopProducts } from '../controllers/productController.js';
import { protect, admin } from '../middleware/authMiddleware.js';
import checkObjectId from '../middleware/checkObjectId.js';

router.route('/').get(getProduct).post(protect, admin, createProduct);
router.route('/top').get(getTopProducts);
router.route('/:id').get(checkObjectId, getProductById).put(protect,admin,checkObjectId, updateProduct).delete(protect,admin,checkObjectId, deleteProduct);
router.route('/:id/reviews').post(protect, checkObjectId,createProductReview);

export default router;