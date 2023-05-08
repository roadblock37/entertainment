const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
require('dotenv').config();
require('express-async-errors');
const connectDb = require('./DB/connect')


// port variable
const port = process.env.PORT || 5000;
const app = express();

// cross origin handling
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// start function to connect to the mongoose database using connectDb

const start = async () => {
    try {
        await connectDb(process.env.MONGO_URI)
        app.listen(port, () => console.log(`Server is listening on port: ${port}`))
    } catch (error) {
        
    }
}

start()
