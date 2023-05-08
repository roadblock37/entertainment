// function to connect to a mongoose database
// to be used in server.js
const mongoose = require('mongoose');

const connect = (url) => {
    return mongoose.connect(url)
}

module.exports = connect