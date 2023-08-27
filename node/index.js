const express = require('express');
const mongodbconnet = require('./Utils/mongodb');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const authRoute = require("./Routes/AuthRoute");

const app = express();

mongodbconnet();  
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`server is running on ${process.env.PORT}`);
})
app.use(cookieParser());

app.use(express.json());

app.use("/", authRoute); 













