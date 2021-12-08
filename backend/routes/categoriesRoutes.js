import express from 'express';
import {
	createCategory,
	createSubCategory,
	getAllCategories,
	getSubcategory,
} from '../controllers/categoriesController.js';
const router = express.Router();

router.route('/category').post(createCategory).get(getAllCategories);
router.route('/subCategory').post(createSubCategory);
router.route('/subCategory/:categoryId').get(getSubcategory);

export default router;
