import mongoose from 'mongoose';

const subcategoriesSchema = mongoose.Schema({
	title: {
		type: String,
	},
	categoryId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'categories',
	},
});

const subcategoriesModel = mongoose.model('subcategories', subcategoriesSchema);
export default subcategoriesModel;
