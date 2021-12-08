import express from 'express';
import { createPost, searchPosts } from '../controllers/PostController.js';
const router = express.Router();

router.route('/').get(searchPosts).post(createPost);

export default router;
