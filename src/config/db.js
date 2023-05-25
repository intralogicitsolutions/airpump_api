const mongoose = require('mongoose');

const connectDb = async () => {
	try {
		// mongodb+srv://IntralogicITSolutions:<password>@cluster0.p3xb8.mongodb.net/?retryWrites=true&w=majority
		//mongodb+srv://IntralogicITSolutions:Intra123@cluster0.f7od0.mongodb.net/airPump?retryWrites=true&w=majority
		await mongoose.connect('mongodb+srv://IntralogicITSolutions:Intra%40123@cluster0.p3xb8.mongodb.net/?retryWrites=true&w=majority');
		console.log('mongo connected');
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};

module.exports = connectDb;
