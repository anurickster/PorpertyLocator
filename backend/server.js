import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import { mongoConnect } from './config/db.js';
import postRoutes from './routes/postRoutes.js';
import categoriesRoute from './routes/categoriesRoutes.js';

dotenv.config();
mongoConnect();

const app = express();

app.use(helmet());
app.use(
	cors({
		origin: ['http://localhost:3000'],
		credentials: true,
	})
);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/post', postRoutes);
app.use('/api/category', categoriesRoute);

app.listen(process.env.PORT, () => {
	console.log(
		`server running in ${process.env.NODE_ENV} mode & listening on port ${process.env.PORT}`
	);
});
