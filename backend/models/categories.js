import mongoose from 'mongoose';

const categoriesSchema = mongoose.Schema({
	title: {
		type: String,
	},
});

const categoriesModel = mongoose.model('categories', categoriesSchema);
export default categoriesModel;
