import axios from 'axios';
import { server } from './keys';

export const postInstance = () => {
	return axios.create({
		baseURL: `${server}/api/post`,
		withCredentials: true,
	});
};

export const categoriesInstance = () => {
	return axios.create({
		baseURL: `${server}/api/category`,
		withCredentials: true,
	});
};
