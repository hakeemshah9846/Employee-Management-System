require('dotenv').config();
const mongoose = require('mongoose');

async function connect() {
    await mongoose.connect(process.env.MONGO_URL)
        .then(()=> {
            console.log("Database connection established");
        })
        .catch((error)=> {
            console.log(`Database not connected...`);
            console.log("Error : ", error.message?error.message:error);
        });
}

function disconnect() {
    mongoose.disconnect(process.env.MONGO_URL);
}

module.exports = {
    connect,
    disconnect,
}