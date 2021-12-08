import mongoose from 'mongoose';

export const mongoConnect = async () => {
	try {
		console.log(process.env.MONGO_CONNECT_URL);
		//     mongoose.set('useCreateIndex', true);
		await mongoose.connect(process.env.MONGO_CONNECT_URL, {
			useUnifiedTopology: true,
			useNewUrlParser: true,
		});
		console.log('Connected to Mongo database');
	} catch (e) {
		console.log(`Error connecting to mongo database ${e}`);
	}
};
