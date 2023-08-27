const mongoose = require('mongoose');
require("dotenv").config();
const { MONGO_URL } = process.env;


 mongodb = () => {
    mongoose.connect(MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,  
    })
        .then(() => console.log("mongodb connected"))
        .catch((err) => console.log(err))
}

module.exports = mongodb;