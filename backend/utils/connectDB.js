const mongoose = require('mongoose');


mongoose.set('strictQuery', true);

const connectDB = async () => {

    await mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            console.log('connection to mongoDB successful...');
        })
        .catch((err) => {
            console.log(err);
        });

};


connectDB();