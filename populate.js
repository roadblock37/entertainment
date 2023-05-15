require('dotenv').config()
const mockData = require('./entertainment-web-app/starter-code/data.json')
const Movie = require('./models/movie')
const connectDB = require('./DB/connect')


// function to populate the mongoose database using 
// the movieSchema and mock data in data.json

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        await Movie.create(mockData);
        console.log('Database successfully populated!')
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
        
    }
}

start()