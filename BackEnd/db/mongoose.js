const mongoose = require('mongoose');

const MONGO_URL = mongodb://127.0.0.1:27017/image;
//now we declare the mongodb url for connection
mongoose.connection(MONGO_URL, () => {
     console.log('Database is connnected')
};