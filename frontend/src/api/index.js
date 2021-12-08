import { postInstance, categoriesInstance } from '../config/axiosConfig';

export const getPosts = async (data) => {
	console.log('Data here', data);
	const response = await postInstance().get('/', {
		params: {
			...data,
		},
	});
	return response.data;
};

export const getAllCategories = async () => {
	const response = await categoriesInstance().get('/category');
	return response.data;
};

export const getSubCategories = async (categoryId) => {
	const response = await categoriesInstance().get(`/subCategory/${categoryId}`);
	return response.data;
};
